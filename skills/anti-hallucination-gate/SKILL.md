# Anti-Hallucination Gate

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Anti-Hallucination Gate”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

Reviewing or generating candidate resumes, executive bios, technical claims, metrics, or mandate deliverables where factual accuracy must be 100% verified.


## 2. Required inputs and access

- Draft resume, article, or deliverable
- Canonical career history, verified metrics, or authoritative knowledge corpus

## 3. Sequence of work

1. Extract all dates, company names, certifications, tooling claims, and numerical metrics.
2. Cross-check each entity against canonical records; flag any unverified or synthetic claims.
3. Replace vague buzzwords with quantifiable, verified outcomes.
4. Enforce past tense for completed roles and present tense for current responsibilities.
5. Tag every unconfirmed data point with [À vérifier / To verify] rather than guessing.

## 4. How to validate the result

Zero invented client names, dates, metrics, or credentials. All numbers match canonical sources.


## 5. What to return

Integrity verification report listing verified claims, purged hallucinations, and flagged items.


## 6. What requires approval

Never publish or transmit external resumes or profiles without explicit user confirmation of flagged points.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
