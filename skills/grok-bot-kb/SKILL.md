# Grok Bot Knowledge Base

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Grok Bot Knowledge Base”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

Querying architectural rules, Firecracker microVM container invariants, quotas, or FastMCP deployment specifications from the 32-chapter canonical corpus.


## 2. Required inputs and access

- Architectural or operational query
- Canonical corpus at docs/grok-bot-canonical.llm.md

## 3. Sequence of work

1. Inspect query for domain area (VM isolation, quotas, FastMCP, multi-bot teams, Slack integration).
2. Extract relevant chapter sections, configuration schemas, and recovery protocols.
3. Identify potential failure modes (e.g. empty-phrase Slack quota exhaustion, microVM reset wipes).
4. Formulate verified technical response citing chapter references and code examples.

## 4. How to validate the result

All configuration paths, environment variables, and CLI commands match the 32-chapter canonical corpus.


## 5. What to return

Verified technical brief with chapter citations, configuration snippets, and operational caveats.


## 6. What requires approval

Never execute container recovery or state wipe commands without explicit operator consent.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
