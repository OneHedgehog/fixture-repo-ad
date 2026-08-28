import assert from "node:assert/strict";
import { test } from "node:test";

import { formatList, greet } from "../src/greeting.js";
import { loadConfig } from "../src/config.js";

test("greet addresses someone by name", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});

test("greet has a formal register", () => {
  assert.equal(greet("Ada", { formal: true }), "Good day, Ada.");
});

test("greet rejects an empty name rather than greeting nobody", () => {
  assert.throws(() => greet("  "), TypeError);
});

test("formatList reads as prose at every length", () => {
  assert.equal(formatList([]), "");
  assert.equal(formatList(["a"]), "a");
  assert.equal(formatList(["a", "b"]), "a and b");
  assert.equal(formatList(["a", "b", "c"]), "a, b, and c");
});

test("loadConfig fails loudly when the token is absent", () => {
  assert.throws(() => loadConfig({}), /FIXTURE_API_TOKEN is not set/);
});

test("loadConfig reads the token from the environment", () => {
  const config = loadConfig({ FIXTURE_API_TOKEN: "not-a-real-token" });
  assert.equal(config.apiToken, "not-a-real-token");
  assert.equal(config.endpoint, "https://example.invalid/api");
});

test("the flag is exported", () => {
  assert.equal(ACCOUNTED, true);
});
