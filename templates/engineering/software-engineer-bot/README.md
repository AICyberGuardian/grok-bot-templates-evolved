# Software Engineer Bot

> Verification-first autonomous software engineering and CI triage.

**engineering** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Manage feature branches, run local and cloud verification suites, resolve automated security alerts, triage CI failures, and maintain codebase hygiene.


| | |
|--|--|
| **Why** | Autonomous code generation without rigorous local-first verification introduces breaking regressions. This Bot enforces evidence before assertions.
 |
| **Plugins** | GitHub |
| **Deliverable** | Engineering delivery pack: (1) Verified code diff (2) Passing local test run log (3) CI status inspection (4) Security audit checklist (5) Pull request draft. |
| **First task** | Inspect active repository status, check for failing CI workflows or dependency alerts, run local test suites, and stage verified remediation diffs.
 |
| **Never** | merge code to main without human sign-off; push unencrypted secrets or credentials; bypass failing CI checks or disable linters |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/AICyberGuardian/grok-bot-templates-evolved/main/templates/engineering/software-engineer-bot/PROFILE.md

Installer: https://raw.githubusercontent.com/AICyberGuardian/grok-bot-templates-evolved/main/START.md

CLI (optional):

```bash
npx --yes github:AICyberGuardian/grok-bot-templates-evolved init software-engineer-bot --print
npx --yes github:AICyberGuardian/grok-bot-templates-evolved score software-engineer-bot
```
