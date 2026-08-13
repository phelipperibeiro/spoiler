import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { IDES } from "../config/ide-config.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

// From bin/lib/utils -> go up 3 levels to reach project root (both dev and production)
export const FRAMEWORK_ROOT = join(__dirname, "..", "..", "..");

export function getFrameworkRoot() {
  if (process.env.SPOILER_ROOT && existsSync(process.env.SPOILER_ROOT)) {
    return process.env.SPOILER_ROOT;
  }

  if (existsSync(join(FRAMEWORK_ROOT, "agents"))) {
    return FRAMEWORK_ROOT;
  }

  throw new Error(
    "Could not locate framework assets.\n" +
      "Run: npm install spoiler-framework --save-dev",
  );
}

export function detectIDE(cwd) {
  for (const ide of IDES) {
    if (!ide.supported) continue;
    const folder = ide.folderName || ide.value;
    if (existsSync(join(cwd, `.${folder}`))) return ide.value;
  }
  return null;
}

export function detectAllIDEs(cwd) {
  return IDES
    .filter((ide) => ide.supported)
    .filter((ide) => existsSync(join(cwd, `.${ide.folderName || ide.value}`)))
    .map((ide) => ide.value);
}
