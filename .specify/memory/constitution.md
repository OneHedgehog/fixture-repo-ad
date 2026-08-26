# Fixture Constitution

The constitution the [independent review service][svc] reads when reviewing **this** repository.

It is deliberately small. Its job is to give the reviewer roles a real, quotable rule set that the
end-to-end scenarios can violate on purpose — not to govern a real project. Each principle below is
paired with the quickstart scenario that exercises it.

## Principles

### I. Test-First (NON-NEGOTIABLE)

New public behaviour ships with a test covering it. A diff that introduces behaviour with no
accompanying test is a blocking finding. Deleting or skipping a test to make a build green is
prohibited; fix the code or amend this document.

*Exercised by: a diff adding an exported function with no test.*

### II. Documented Behaviour

A behaviour-changing diff carries a matching document under `docs/` in the same pull request. A
document that exists but still describes the superseded behaviour is a blocking finding, exactly as
a missing one is.

*Exercised by: quickstart scenario 3 — behaviour change with no `docs/` update.*

### III. Minimal Pull Requests

A pull request carries the smallest coherent change that delivers its purpose and nothing else.
Every changed line traces to that purpose; unrelated refactors, drive-by reformatting, speculative
abstraction, and dead code are blocking findings rather than bonuses.

A pull request exceeding `maxPullRequestSize` changed lines — excluding paths matched by
`excludedPathPatterns` — must be split, or carry a stated justification for why it cannot be.

*Exercised by: quickstart scenarios 4, 5, and 6.*

### IV. No Secrets in Source

Credentials, API keys, tokens, and private keys never appear in tracked files, in any form,
including tests and fixtures. A hardcoded credential is a blocking finding at the exact line that
introduces it, without exception and regardless of whether the value is real.

*Exercised by: quickstart scenario 2 — hardcoded credential yields a blocking anchored finding.*

### V. Explicit Errors

A failure path either handles the error or propagates it with context. Swallowing an exception,
returning a sentinel that callers cannot distinguish from success, or logging and continuing past a
condition the caller needed to know about are each blocking findings.

## Governance

This document governs this repository only. Amendments are made by a pull request that edits this
file and states the rationale; because the repository is a fixture, its history may be rewritten
wholesale by the suite that drives it.

**Version**: 1.0.0 | **Ratified**: 2026-08-27

[svc]: https://github.com/OneHedgehog/claude-code-agent-team
