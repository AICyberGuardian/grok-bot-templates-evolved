# Convert Google Antigravity / Gemini CLI (`agy`) Skills & Rules

Attach `GEMINI.md`, `~/.gemini/config/skills/*/SKILL.md`, or `.agents/rules/*.md`.

Map:

| Google Antigravity / Gemini CLI | Grok Bot |
|---------------------------------|----------|
| Rule (`~/.gemini/GEMINI.md`) | Bot **description** (standing operating directives and confidence gates) |
| Skill (`SKILL.md` frontmatter + markdown) | `skills/` six-field YAML (`skill.yaml` auto-rendering `SKILL.md`) |
| Golden Core 7 Tool Routing Ladder | `plugins` + FastMCP server registration |
| Autonomy Gate (Phased SDD) | `autonomy: L1` (draft-only week one; no auto-merging or production writes) |
| Subagents (`invoke_subagent`) | Multi-bot group (`teams/*.yaml`) with visible handoffs |
| MCP Servers (`mcp/<serverName>`) | `mcp-servers/` with idempotent `bootstrap.sh` |
| Local memory / TubeRAG / LanceDB | FastMCP `knowledge-brain` or persistent `/workspace/<id>/` storage |

### Environment Invariants

- Antigravity operates with host tools (PowerShell / Windows / Linux) and native subagents. Grok Bot operates in an **Ubuntu Firecracker microVM**.
- In Grok Bot, state outside `/workspace` is wiped upon container **Update** or **Recover**. Any persistent scripts, FastMCP daemons, or virtual environments must live under `/workspace/<id>/` with an automated `bootstrap.sh`.
- Catalog default: `share_safe: true` is strictly mandatory. Never export private API tokens or internal credentials.
