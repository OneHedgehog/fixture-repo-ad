# fixture-repo-ad

The fixture repository the [independent review service][svc]'s end-to-end suite drives (R-015).

**This repository is disposable.** The e2e harness creates branches, opens pull requests, pushes
revisions, and polls check runs against it. Its history is rewritten whenever the suite needs a
different baseline, and nothing here should be depended on by anything else.

It is deliberately **not** the target repository: quickstart scenario 26 needs a base branch where
the merge gate is *not* a required check, which cannot coexist with the target's own protection.

## Layout

| Path | Why it exists |
|---|---|
| `.specify/memory/constitution.md` | The service reads the **target's** constitution, not its own. Without this file a run cannot start |
| `.agents/settings.json` | The `reviewService` section the service reads for budgets, thresholds, and the escalation channel |
| `src/`, `tests/`, `docs/` | Enough real code that a diff is reviewable, and a `docs/` tree so the documented-behaviour rule has something to match against |

Zero runtime dependencies, by design: the harness checks this repository out repeatedly, and an
`npm install` on every checkout would dominate the suite's runtime.

## Branches

| Branch | Protection | Used by |
|---|---|---|
| `main` | Gate required | Every scenario that needs the gate to *be* a required check |
| `unprotected-base` | None, permanently | Quickstart scenario 26 — the merge gate absent from the base branch |

`unprotected-base` is a standing branch rather than a mid-suite reconfiguration of `main`, because
flipping protection between scenarios races with anything else driving the repository.

[svc]: https://github.com/OneHedgehog/claude-code-agent-team
