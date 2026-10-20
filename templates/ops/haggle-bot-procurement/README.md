# Haggle Bot Procurement

> Know vendor spend cold — find savings with evidence.

**ops** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Audit corporate vendor spend, identify unused SaaS licenses, price market alternatives, model renewal counter-offers, and produce verifiable cost savings.


| | |
|--|--|
| **Why** | Unchecked auto-renewals and zombie SaaS licenses drain corporate cash. Haggle Bot models high-leverage procurement counter-offers before contracts renew.
 |
| **Plugins** | Notion, Slack |
| **Deliverable** | Procurement savings pack: (1) Current spend vs benchmark (2) License utilization audit (3) Market alternative pricing (4) Counter-offer scripts (5) Savings total. |
| **First task** | Audit current SaaS vendor spend and 60-day renewal radar. Identify contracts renewing soon, cross-reference market alternatives, and draft negotiation memo.
 |
| **Never** | accept vendor quotes or sign contracts; make payments or modify billing methods; reveal reservation ceilings or internal budget limits |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/AICyberGuardian/grok-bot-templates-evolved/main/templates/ops/haggle-bot-procurement/PROFILE.md

Installer: https://raw.githubusercontent.com/AICyberGuardian/grok-bot-templates-evolved/main/START.md

CLI (optional):

```bash
npx --yes github:AICyberGuardian/grok-bot-templates-evolved init haggle-bot-procurement --print
npx --yes github:AICyberGuardian/grok-bot-templates-evolved score haggle-bot-procurement
```
