# 30-Minute PR Sweep

Owner: **pr-reviewer**. Skill: `review-pr-risk`. Cadence: weekdays every 30 minutes 09:00-18:00.

Official shape from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations). Confirm: owning Bot, schedule and timezone, input source, expected result, approval boundary, missing-source policy.

## Prompt to paste

> Sweep all open pull requests updated in the past 30 minutes. Run review-pr-risk on each diff, cite file paths, and flag untested risk areas.


## Expected result

Prioritized PR risk pack highlighting broken diffs, untested paths, and context gaps. Nothing auto-merged or commented without approval.


## Approval boundary

Do not merge, push, approve, or post comments to GitHub without explicit user instruction.


## Missing source

If GitHub connector is disconnected or PR cannot be opened, report failure and stop. Do not hallucinate diffs.


## Test first

**Test run is mandatory.** A test run performs real work. It can navigate websites, change files, and call connected tools. Use safe inputs. Keep write actions behind approval.

Then open the Bot → **View conversation details** → **Routines**.
