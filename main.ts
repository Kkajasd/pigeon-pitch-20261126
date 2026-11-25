import * as fs from "node:fs";

const ENTRY =
  "Investors, I've spent three years doing market research on this ledge: the city has 40,000 pigeons and zero crumb-delivery apps. I'm raising a seed round — literal seeds.";

function validateEntry(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(ENTRY);

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
}

main();
