#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { resolveRoot } from "../lib/paths.mjs";

export function buildPluginIndex(root = resolveRoot()) {
  const marketplacePath = path.join(root, ".grok-plugin", "marketplace.json");
  if (!fs.existsSync(marketplacePath)) {
    console.warn("No .grok-plugin/marketplace.json found.");
    return null;
  }

  const marketplace = JSON.parse(fs.readFileSync(marketplacePath, "utf8"));
  const index = {
    marketplace_name: marketplace.name,
    version: marketplace.version,
    updated_at: new Date().toISOString(),
    plugin_count: marketplace.plugins.length,
    plugins: marketplace.plugins.map((p) => {
      const pluginDir = path.resolve(root, p.source);
      const pkgFile = path.join(pluginDir, "plugin.json");
      const localMeta = fs.existsSync(pkgFile)
        ? JSON.parse(fs.readFileSync(pkgFile, "utf8"))
        : null;

      return {
        name: p.name,
        source: p.source,
        description: p.description,
        version: p.version,
        compatibility: p.compatibility || {},
        repository: p.repository || null,
        mcp: p.mcp || null,
        skills: localMeta?.skills || [],
        templates: localMeta?.templates || [],
      };
    }),
  };

  const indexPath = path.join(root, ".grok-plugin", "plugin-index.json");
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2) + "\n");
  console.log(`compiled .grok-plugin/plugin-index.json (${index.plugin_count} plugins)`);
  return index;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"))) {
  buildPluginIndex();
}
