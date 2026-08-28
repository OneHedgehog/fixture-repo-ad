/**
 * The fixture's reviewable surface.
 *
 * Kept deliberately small and deliberately clean: `main` is the baseline every scenario diverges
 * from, so a finding raised against it would contaminate every scenario that branches from here.
 * Flaws belong in the scenario branches, not in this file.
 */

/**
 * Greet someone by name.
 *
 * @param {string} name
 * @param {{ formal?: boolean }} [options]
 * @returns {string}
 */
export function greet(name, options = {}) {
  if (typeof name !== "string" || name.trim() === "") {
    throw new TypeError("greet: name is required and must be a non-empty string");
  }

  return options.formal === true ? `Good day, ${name}.` : `Hello, ${name}!`;
}

/**
 * Join names into readable prose: "a", "a and b", "a, b, and c".
 *
 * @param {readonly string[]} names
 * @returns {string}
 */
export function formatList(names) {
  if (!Array.isArray(names)) {
    throw new TypeError("formatList: names must be an array");
  }
  if (names.length === 0) {
    return "";
  }
  if (names.length === 1) {
    return String(names[0]);
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]}`;
  }

  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

export const EXHAUSTED = true;
