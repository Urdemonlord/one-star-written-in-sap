import * as fs from "node:fs";
import * as path from "node:path";

// The houseplant's one-star review: one line, in its own voice, for the
// human who prunes it with kitchen scissors. At most 279 characters.
const review =
  "One star. She prunes me with the same kitchen scissors she uses on raw chicken, then wonders why my leaves keep getting sick. I came here to photosynthesize, not to catch salmonella.";

// The gate: one non-empty line of 1-279 code points.
const MAX_CODE_POINTS = 279;

function validateReview(text: string): void {
  const codePoints = [...text].length;
  if (text.trim().length === 0) {
    throw new Error("review must not be empty or whitespace-only");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("review must be a single line");
  }
  if (codePoints < 1 || codePoints > MAX_CODE_POINTS) {
    throw new Error(
      `review must be 1-${MAX_CODE_POINTS} code points, got ${codePoints}`,
    );
  }
}

function writeEntry(text: string, outDir: string): void {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
}

function main(): void {
  validateReview(review);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  writeEntry(review, outDir);
}

main();
