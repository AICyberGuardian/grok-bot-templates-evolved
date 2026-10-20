# Grok Bot Operations

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Grok Bot Operations”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

Managing Grok Bot microVM containers, persistent workspace state, FastMCP daemon health, and container recovery procedures (Update vs Recover vs Reset).


## 2. Required inputs and access

- Container status or health check diagnostics
- /workspace directory tree and disk capacity

## 3. Sequence of work

1. Run FastMCP disk audit to ensure /workspace storage is below 85% utilization.
2. Check for running daemon processes and re-bootstrap virtual environments if missing.
3. Diagnose container degradation using the Tri-State Recovery Matrix.
4. Recommend Update for base image refresh, Recover for VM fault recovery, or Reset for total wipe.

## 4. How to validate the result

Durable data preserved under /workspace/<id>/; bootstrap.sh tested and executable.


## 5. What to return

Container health diagnostic report with storage usage, process status, and recommended recovery action.


## 6. What requires approval

Never execute container Reset without verifying off-container backup of /workspace.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
