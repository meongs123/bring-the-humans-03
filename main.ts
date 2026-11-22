// bring-the-humans-03 entrypoint: stages VIDEO.json for submission.
//
// The bot drops a VIDEO.json describing the finished video into its
// working directory. This script's only job is to place an exact copy
// of that file where the make.fun runner expects the submission.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
} catch (err) {
  // A missing or unreadable VIDEO.json must fail loudly: a silent
  // success here would submit nothing and waste the entry slot.
  const detail = err instanceof Error ? err.message : String(err);
  console.error(`could not stage VIDEO.json from ${source} to ${target}: ${detail}`);
  process.exit(1);
}
