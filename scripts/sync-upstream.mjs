#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import path from "node:path";
import { resolveRoot } from "../lib/paths.mjs";

const UPSTREAM_URL = "https://github.com/cobusgreyling/grok-bot-templates.git";
const root = resolveRoot();

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, {
    cwd: root,
    encoding: "utf8",
    stdio: opts.capture ? "pipe" : "inherit",
    ...opts,
  });
  if (r.status !== 0 && !opts.allowFail) {
    if (opts.capture) {
      if (r.stdout) console.log(r.stdout);
      if (r.stderr) console.error(r.stderr);
    }
    console.error(`Command failed: ${cmd} ${args.join(" ")}`);
    process.exit(r.status ?? 1);
  }
  return r;
}

export function syncUpstream() {
  console.log("Checking upstream remote configuration...");
  const remotes = run("git", ["remote", "-v"], { capture: true }).stdout;
  if (!remotes.includes("upstream")) {
    console.log(`Adding upstream remote: ${UPSTREAM_URL}`);
    run("git", ["remote", "add", "upstream", UPSTREAM_URL]);
  }

  console.log("Fetching upstream/main...");
  run("git", ["fetch", "upstream", "main"]);

  const check = run("git", ["rev-list", "--count", "HEAD..upstream/main"], {
    capture: true,
  });
  const behind = parseInt((check.stdout || "0").trim(), 10);

  if (behind === 0) {
    console.log("Repository is already aligned with upstream/main. No merge required.");
    return 0;
  }

  console.log(`Behind upstream by ${behind} commits. Merging upstream/main...`);
  run("git", [
    "merge",
    "upstream/main",
    "--no-edit",
    "-m",
    "chore(sync): merge upstream updates from cobusgreyling/grok-bot-templates",
  ]);

  console.log("Rebuilding dual-format templates, catalog, and site...");
  run("npm", ["run", "build"]);
  run("npm", ["run", "plugins"]);

  console.log("Executing CI verification suite...");
  run("npm", ["run", "ci"]);

  console.log("Upstream synchronization and verification complete!");
  return 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"))) {
  syncUpstream();
}
