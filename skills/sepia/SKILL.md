# Sepia Humanizer

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Sepia Humanizer”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

Refactoring AI-generated prose, technical articles, resumes, release notes, or customer communications to strip artificial syntactic markers and formulaic cadence.


## 2. Required inputs and access

- Draft markdown text or AI-generated copy
- Domain context (executive bio, engineering postmortem, release notes)

## 3. Sequence of work

1. Scan for AI syntactic markers: formulaic tri-colons, empty buzzwords, overly balanced antitheses.
2. Eliminate repetitive transitional fluff ('Furthermore', 'Moreover', 'In summary', 'Crucially').
3. Vary sentence length and rhythmic cadence; inject authentic concrete domain specifics.
4. Replace abstract assertions with specific nouns, verifiable numbers, and active verbs.
5. Preserve all underlying technical facts, citations, and functional code blocks untouched.

## 4. How to validate the result

Text reads naturally with human variance; zero loss of factual accuracy or technical substance.


## 5. What to return

Humanized copy accompanied by diagnostic diff highlighting purged AI patterns.


## 6. What requires approval

Never modify functional code, regex expressions, or API keys during text humanization.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
