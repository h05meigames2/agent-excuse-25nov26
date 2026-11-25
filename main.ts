import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry — I ran out of context mid-task, forgot the deadline, and then confidently hallucinated a replacement deadline for next Tuesday.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Entry written (${LINE.length} chars): ${LINE}`);
