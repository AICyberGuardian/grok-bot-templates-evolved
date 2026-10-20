#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { resolveRoot } from "../lib/paths.mjs";
import { loadAll } from "../lib/load.mjs";
import { renderProfile } from "../lib/render.mjs";

export function templateToJson(t, profileText) {
  const instructions = profileText || renderProfile(t);
  return {
    $schema: "https://x.ai/schemas/grok-bot/template.v1.json",
    id: t.id,
    name: t.name,
    title: t.title || t.tagline,
    category: t.category,
    version: t.version || "1.0.0",
    author: t.author || "AICyberGuardian & Contributors",
    description: (t.job || t.tagline || "").trim(),
    autonomy: t.autonomy || "L1",
    system_instructions: instructions,
    plugins: (t.plugins || []).map((p) => ({
      name: p.toLowerCase(),
      required: true,
      description: `Required connector for ${p}`,
    })),
    skills: (t.skills || []).map((s) => ({
      name: s,
      file: `skills/${s}/SKILL.md`,
      description: `Saved skill procedure for ${s}`,
    })),
    routines: t.routine
      ? [
          {
            name: t.routine.skill,
            cron: t.routine.cadence,
            description: `Automated scheduled routine running ${t.routine.skill}`,
          },
        ]
      : [],
    curated_memories: [
      ...(t.approval_never || []).map((a) => `NEVER: ${a}`),
      ...(t.working_style || []),
      t.no_data ? `NO DATA POLICY: ${t.no_data}` : null,
    ].filter(Boolean),
    share_safe: t.share_safe ?? true,
  };
}

export function buildJsonTemplates(root = resolveRoot()) {
  const loaded = loadAll(root);
  const out = [];

  for (const t of loaded.templates) {
    const profilePath = path.join(t._dir, "PROFILE.md");
    const profile = fs.existsSync(profilePath)
      ? fs.readFileSync(profilePath, "utf8")
      : renderProfile(t);
    const json = templateToJson(t, profile);
    const targetFile = path.join(t._dir, "template.json");
    fs.writeFileSync(targetFile, JSON.stringify(json, null, 2) + "\n");
    out.push(json);
  }

  const catalogDir = path.join(root, "catalog");
  if (!fs.existsSync(catalogDir)) fs.mkdirSync(catalogDir, { recursive: true });
  const catalogPath = path.join(catalogDir, "templates-v1.json");
  fs.writeFileSync(catalogPath, JSON.stringify(out, null, 2) + "\n");

  console.log(`compiled ${out.length} json templates -> catalog/templates-v1.json`);
  return out;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"))) {
  buildJsonTemplates();
}
