# Alfred Governance

> Lean fleet topology — default to zero new bots.

**ops** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Govern bot organization topology, prevent agent sprawl, enforce single human ownership, eliminate redundant jobs, and protect weekly compute quotas.


| | |
|--|--|
| **Why** | Bot proliferation creates overlapping listeners, wasted compute quotas, and unowned automation drift. Alfred preserves organizational clarity.
 |
| **Plugins** | Notion, Slack |
| **Deliverable** | Governance pack: (1) Roster audit (2) Quota projection (3) Redundant job consolidation diffs (4) Owner assignment checklist (5) Action plan. |
| **First task** | Audit current fleet roster and scheduled routines. Identify duplicate responsibilities, verify human owners for every bot, and project weekly quota burn.
 |
| **Never** | delete or modify active bot configurations without approval; enable high-frequency routines without human sign-off; assign unowned automation to production |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates\ops\alfred-governance/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init alfred-governance --print
npx --yes github:cobusgreyling/grok-bot-templates score alfred-governance
```
