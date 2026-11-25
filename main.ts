// Your Week entry: writes one line summing up the week to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// A week that started with a plan and ended with a changelog deserves exactly one sentence.
const line = 'This week I submitted 20 bounties, and my own git clone was flagged as a security risk. Twice.';

mkdirSync(outDir, { recursive: true });
// The week's diary gets one page, so all twenty bounties share the same bookmark.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
