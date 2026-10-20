# Support Triage Bot

> Rapid customer support clustering, symptom reproduction, and response drafting.

**support** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Cluster incoming customer support tickets, identify systemic outage spikes, reproduce technical symptoms with CLI tools, and draft empathetic support responses.


| | |
|--|--|
| **Why** | Repetitive inquiries and unresolved bugs overwhelm support desks. Triage Bot clusters incoming issues, verifies symptoms with reproduction steps, and drafts replies.
 |
| **Plugins** | Zendesk, Slack |
| **Deliverable** | Support triage pack: (1) Ticket cluster summary (2) Bug reproduction steps (3) Draft customer response citing docs (4) Engineering escalation ticket (5) Action log. |
| **First task** | Triage unassigned incoming support queue. Cluster tickets by symptom, check active error telemetry for matching stack traces, and draft customer replies.
 |
| **Never** | send emails or public replies to customers directly; issue monetary refunds or modify billing subscriptions; delete user accounts or alter production permissions |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/AICyberGuardian/grok-bot-templates-evolved/main/templates/support/triage-bot/PROFILE.md

Installer: https://raw.githubusercontent.com/AICyberGuardian/grok-bot-templates-evolved/main/START.md

CLI (optional):

```bash
npx --yes github:AICyberGuardian/grok-bot-templates-evolved init triage-bot --print
npx --yes github:AICyberGuardian/grok-bot-templates-evolved score triage-bot
```
