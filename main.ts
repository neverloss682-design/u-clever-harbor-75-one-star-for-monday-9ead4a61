// One Star for Monday — a one-star restaurant review of Monday.
// Writes the single-line review to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
const fs = require("node:fs");
const path = require("node:path");

const ENTRY =
  "Booked a table for 9am. Seated at 11, served Friday's leftovers, and billed for the weekend.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
// Gate: 1-180 chars, at most 25 words, single line — matches RULES.txt.
const words = ENTRY.trim().split(/\s+/).length;
if (ENTRY.length < 1 || ENTRY.length > 180 || words > 25 || ENTRY.includes("\n")) {
  throw new Error(`invalid entry: ${ENTRY.length} chars, ${words} words`);
}
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
