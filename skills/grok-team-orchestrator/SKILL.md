# Grok Team Orchestrator

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Grok Team Orchestrator”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

Coordinating multi-bot teams (2 to 4 bots) sharing a workspace, managing visible handoffs, and preventing cross-bot interference.


## 2. Required inputs and access

- Multi-bot team definition (teams/*.yaml)
- Work stream tasks and deliverables

## 3. Sequence of work

1. Verify team size is between 2 and 4 bots; identify designated Lead Bot.
2. Assign explicit per-bot workspace directories (/workspace/<bot-id>/) to prevent file collisions.
3. Define visible handoff triggers between specialist bots.
4. Ensure shared computer boundaries are recognized (shared browser, shared credentials).
5. Orchestrate sequential handoffs; keep autonomy at L1 during initial deployment.

## 4. How to validate the result

No circular handoff loops. Each bot has one clear job. All bots listed in team definition.


## 5. What to return

Team orchestration roster with handoff routing table and execution schedule.


## 6. What requires approval

Never spawn more than 4 bots in a team without human operator approval.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
