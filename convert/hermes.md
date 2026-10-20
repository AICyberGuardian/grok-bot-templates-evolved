# Convert Nous Research Hermes Agent (`config.yaml` & Prompts)

Attach `config.yaml`, system prompt cards, or custom tool definitions.

Map:

| Hermes Agent | Grok Bot |
|--------------|----------|
| System prompt / Persona | `soul` + `job` — job wins if they conflict |
| Model provider routing | Grok Bot runtime default (xAI Grok-2 / Grok-3) |
| Tool functions (`tools.py`) | `plugins` + FastMCP servers (`mcp-servers/`) |
| Scheduled tasks | `routines/*.yaml` (only after 2 verified runs; `test_first: true`) |
| Persistent state | Put durable SQLite / LanceDB stores in `/workspace/<id>/` |
| Multi-agent coordinator | `teams/*.yaml` — 2–4 Bots in a visible group handoff loop |

### Execution Boundaries

- Hermes Agent runs with broad terminal and tool permissions by default. Grok Bot strictly enforces the **Standing Approval Boundary** (`approval_never`):
  - Never push or merge to remote repositories without explicit chat confirmation.
  - Never execute irreversible file deletion or production service restarts unattended.
  - Report-only at autonomy level **L1** on initial deployment.
