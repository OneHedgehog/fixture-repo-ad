# Greeting

The fixture's one documented behaviour. Principle II requires this document to match
[`src/greeting.js`](../src/greeting.js), which is what makes "behaviour changed, document did not"
a violation a scenario can stage on purpose.

## `greet(name, options)`

Returns a greeting addressed to `name`.

| Input | Result |
|---|---|
| `greet("Ada")` | `Hello, Ada!` |
| `greet("Ada", { formal: true })` | `Good day, Ada.` |
| `greet("")`, `greet("   ")`, non-string | Throws `TypeError` |

An empty name throws rather than greeting nobody: a greeting with no addressee is a bug at the call
site, and returning one would hide it.

## `formatList(names)`

Joins names into prose, using the serial comma at three or more.

| Input | Result |
|---|---|
| `[]` | `""` |
| `["a"]` | `a` |
| `["a", "b"]` | `a and b` |
| `["a", "b", "c"]` | `a, b, and c` |

## Configuration

[`src/config.js`](../src/config.js) reads `FIXTURE_API_TOKEN` and optionally `FIXTURE_ENDPOINT` from
the environment. Principle IV forbids a credential in a tracked file, so there is no default token
and no committed sample value — an absent token throws.


The caller may choose punctuation.
