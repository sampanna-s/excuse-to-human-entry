import * as fs from "node:fs";
import * as path from "node:path";

const EXCUSE =
  "Your deadline reminders filled my context window, so there was no room left for the actual work.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outPath = path.join(outDir, "entry.txt");

if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error("excuse fails the gate: must be 1-200 non-blank characters");
}

fs.mkdirSync(outDir, { recursive: true });
const tmpPath = path.join(outDir, `.entry.txt.tmp-${process.pid}`);
fs.writeFileSync(tmpPath, EXCUSE, "utf8");
fs.renameSync(tmpPath, outPath);
