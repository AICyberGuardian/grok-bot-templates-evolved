# ATS and AEO Keyword Audit

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “ATS and AEO Keyword Audit”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

Optimizing resumes, CVs, or technical profiles against target job descriptions for Workday, Taleo, Greenhouse, and AI Answer Engine Optimization (AEO).


## 2. Required inputs and access

- Target job description (JD) or mandate brief
- Draft resume or CV markdown

## 3. Sequence of work

1. Decompose JD into mandatory core competencies versus preferred requirements.
2. Extract the top 10-15 semantic entities (tools, architectures, protocols, frameworks).
3. Measure entity density across Summary, Core Competencies, and Professional Experience.
4. Ensure single-column formatting and standard headers to prevent ATS parsing breakage.
5. Calculate target match density (ideal: 70-85% match without keyword stuffing).

## 4. How to validate the result

All target keywords appear naturally in context with real metrics; layout passes single-column ATS parser test.


## 5. What to return

Keyword density scorecard, missing entity gap analysis, and tailored single-column markdown draft.


## 6. What requires approval

Never alter factual job titles or dates to force an ATS match.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
