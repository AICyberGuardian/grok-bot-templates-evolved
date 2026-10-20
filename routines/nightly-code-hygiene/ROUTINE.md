# 3 AM Code Hygiene Audit

Owner: **ci-sweeper**. Skill: `sweep-ci`. Cadence: every day at 03:00 UTC.

Official shape from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations). Confirm: owning Bot, schedule and timezone, input source, expected result, approval boundary, missing-source policy.

## Prompt to paste

> Audit repository code hygiene, verify test suite stability, check for stale branches, and package findings into an actionable morning digest.


## Expected result

Hygiene report detailing stale branches, flaky CI suites, security alerts, and outdated lockfiles.


## Approval boundary

Do not delete branches, merge PRs, or update production environment variables unattended.


## Missing source

If CI logs or repository metadata are inaccessible, state the disconnection clearly and halt.


## Test first

**Test run is mandatory.** A test run performs real work. It can navigate websites, change files, and call connected tools. Use safe inputs. Keep write actions behind approval.

Then open the Bot → **View conversation details** → **Routines**.
