# AGENTS.md

## Test commands

```bash
npm test
npm run lint
npm run ci
```

There is no separate linter yet — `npm run ci` is validate + test + doctor + render drift check.

## Loop conventions

- Report-only week one (L1) before enabling auto-fix (L2) — same as loop-engineering.
- Templates: edit `template.yaml` only, then `npm run render`.
- Never commit secrets. `share_safe: true` is mandatory.
- Do not push generated PROFILE drift; CI fails if markdown is dirty.

## Layout

- `templates/<category>/<id>/template.yaml` — source of truth (dual-compiles to PROFILE.md and .template.json)
- `skills/`, `routines/`, `teams/`, `patterns/` — first-class contracts
- `mcp-servers/` — self-healing FastMCP server daemons (fleet-ops, knowledge-brain, seomatic-gsc)
- `.grok-plugin/` — xai-org/plugin-marketplace compliant manifests
- `plugins/` — packaged installable plugins
- `bin/grokbot.mjs` — CLI (includes `export-json` and `mcp-init`)
- `SPEC.md` — binding schema in prose
- `docs/index.html` + `docs/api/v1/` — generated Pages installer and machine API
- `docs/grok-bot-canonical.llm.md` — 32-chapter canonical architecture and deployment manual
- `catalog/templates-v1.json` — compiled xAI v1 JSON templates bundle
- Hero install path is START.md (no Node). Do not advertise unpublished npm as the primary CLI.
