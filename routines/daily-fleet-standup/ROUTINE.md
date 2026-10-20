# 5 AM Fleet Operations Standup

Owner: **chief-of-staff**. Skill: `grok-bot-ops`. Cadence: weekdays at 05:00 in the Bot timezone.

Official shape from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations). Confirm: owning Bot, schedule and timezone, input source, expected result, approval boundary, missing-source policy.

## Prompt to paste

> Run grok-bot-ops health check and compile the daily 5 AM operations standup brief covering active milestones, cross-bot dependencies, and disk capacity.


## Expected result

Operational 1:1 standup brief synthesizing blockers, milestone progress, and container health metrics.


## Approval boundary

Do not trigger container Resets or modify live multi-bot task definitions without approval.


## Missing source

If task tracking sources or container metrics are unavailable, report missing data and stop.


## Test first

**Test run is mandatory.** A test run performs real work. It can navigate websites, change files, and call connected tools. Use safe inputs. Keep write actions behind approval.

Then open the Bot → **View conversation details** → **Routines**.
