# Poteto Mode Compute Arbitrage

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Poteto Mode Compute Arbitrage”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A coding or refactoring task exceeds 5 minutes of continuous runtime or spans more than 20 files, requiring compute arbitrage to Cursor Cloud Agents.


## 2. Required inputs and access

- Task specification and target repository
- Task complexity estimate (files changed, runtime, build requirements)

## 3. Sequence of work

1. Estimate task scope: if files > 20 or runtime > 5m, trigger compute arbitrage.
2. Package task requirements, test specifications, and acceptance criteria into GROK_SHIP.md.
3. Dispatch task to background Cursor Cloud Agent or isolated worker branch.
4. Monitor worker completion and pull review package back into Grok Bot for risk audit.
5. Execute PR Reviewer pattern before merging.

## 4. How to validate the result

Worker diff contains failing test first, clean commit history, and passes all local verification.


## 5. What to return

Delegation dispatch pack, worker status report, and final review package.


## 6. What requires approval

Never merge cloud agent branches into main without operator review.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
