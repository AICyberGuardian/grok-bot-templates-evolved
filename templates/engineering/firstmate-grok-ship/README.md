# Firstmate Grok Ship

> Factory captain — compute arbitrage between Grok Bot and Cloud Agents.

**engineering** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Manage high-volume GitHub repositories at scale, architect feature specs, delegate multi-file tasks to Cursor Cloud Agents via poteto-mode, and audit PR diffs.


| | |
|--|--|
| **Why** | Heavy compilation and large refactors exhaust interactive Grok Bot turns. Firstmate coordinates cloud agent compilation while keeping management lean.
 |
| **Plugins** | GitHub |
| **Deliverable** | Software factory pack: (1) Sized issue brief (2) Cloud agent dispatch prompt (3) Worker branch status (4) PR risk and test verification pack (5) Action log. |
| **First task** | Triage open repository backlog. Identify high-priority issues, scope tasks exceeding 5 minutes or 20 files, and prepare poteto-mode dispatch specs.
 |
| **Never** | merge pull requests to main or release branches; push unreviewed code directly to production; comment on GitHub without explicit operator consent |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/AICyberGuardian/grok-bot-templates-evolved/main/templates/engineering/firstmate-grok-ship/PROFILE.md

Installer: https://raw.githubusercontent.com/AICyberGuardian/grok-bot-templates-evolved/main/START.md

CLI (optional):

```bash
npx --yes github:AICyberGuardian/grok-bot-templates-evolved init firstmate-grok-ship --print
npx --yes github:AICyberGuardian/grok-bot-templates-evolved score firstmate-grok-ship
```
