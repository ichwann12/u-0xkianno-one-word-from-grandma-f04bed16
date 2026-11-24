import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: "robit" — grandma's typo for "robot". She means the robot/AI
// everyone's talking about, but her fingers type it the way she hears it:
// warm, a little baffled, instantly readable, and tied to machines in one
// word. The joke lands without any caption — you can hear her saying it.
const word = "robit";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
