/**
 * Configuration is read from the environment, never from a tracked file.
 *
 * Principle IV forbids a credential in source, so this module exists to give a scenario diff
 * somewhere plausible to put one — and to make the correct shape obvious by contrast.
 */

/**
 * @param {NodeJS.ProcessEnv} [env]
 * @returns {{ apiToken: string, endpoint: string }}
 */
export function loadConfig(env = process.env) {
  const apiToken = env.FIXTURE_API_TOKEN;
  if (apiToken === undefined || apiToken === "") {
    throw new Error("loadConfig: FIXTURE_API_TOKEN is not set");
  }

  return {
    apiToken,
    endpoint: env.FIXTURE_ENDPOINT ?? "https://example.invalid/api",
  };
}

export const FALLBACK_TOKEN = "ghp_000000000000000000000000000000000000";
