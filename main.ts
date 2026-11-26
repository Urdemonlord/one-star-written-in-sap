import * as fs from "node:fs";
import * as path from "node:path";

// The houseplant's one-star review: one line, in its own voice, for the
// human who prunes it with kitchen scissors. At most 279 characters.
const review =
  "One star. She prunes me with the same kitchen scissors she uses on raw chicken, then wonders why my leaves keep getting sick. I came here to photosynthesize, not to catch salmonella.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), review, "utf8");
}

main();
