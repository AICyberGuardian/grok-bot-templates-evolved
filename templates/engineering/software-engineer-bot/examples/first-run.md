# Example first run — Software Engineer Bot

## Feature Branch Verification — `fix/connection-pool-leak`

**Root Cause Diagnosis**
- Path: `src/db/pool.ts:84`. Connection release was missing inside catch block.
- Reproducing Test: `tests/db/pool_leak.test.ts` reproduced leak after 50 queries.

**Verification Results**
- Command: `npm test tests/db/pool_leak.test.ts`
- Output: 4/4 passing (duration: 320ms).

**Pull Request Draft**
- Branch ready at `origin/fix/connection-pool-leak`. Awaiting human approval to open PR.
