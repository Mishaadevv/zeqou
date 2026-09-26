#!/usr/bin/env node
/**
 * Single-source the product versions the site shows.
 *
 * Every Zeqou application keeps its own version in its own repository, so this
 * script reads the sibling checkouts and writes src/data/versions.ts. Nothing
 * on the site types a version by hand: src/config/products.ts and
 * src/data/docs.ts import the generated file.
 *
 *   node scripts/sync-versions.mjs           write src/data/versions.ts
 *   node scripts/sync-versions.mjs --check   exit 1 when it is out of date
 *
 * Repositories that are not on this machine — a GitHub Actions checkout, for
 * instance — are skipped with a note and keep their committed value, so the
 * same command is safe locally and in CI. `npm run build` runs the check, which
 * means a checkout that disagrees with the site stops the build instead of
 * quietly shipping a wrong version.
 *
 * Set ZEQOU_ECOSYSTEM_ROOT to point at a different folder of checkouts.
 */

import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = fileURLToPath(new URL('..', import.meta.url));
const ecosystemRoot = process.env.ZEQOU_ECOSYSTEM_ROOT
  ? path.resolve(process.env.ZEQOU_ECOSYSTEM_ROOT)
  : path.dirname(path.resolve(siteRoot));

const outputFile = path.join(siteRoot, 'src', 'data', 'versions.ts');

/**
 * One entry per version the site shows.
 *
 * `file` is the authoritative source — the file the shipped build reads its
 * version from. `crossCheck` lists other files that carry the same number; a
 * disagreement is reported but never decides anything.
 */
const products = [
  { key: 'harness', dir: ['Zeqou Harness'], file: 'package.json', crossCheck: [] },
  {
    key: 'xchat',
    dir: ['ZeqouXchat'],
    file: 'src-tauri/tauri.conf.json',
    crossCheck: ['package.json'],
  },
  { key: 'xtraining', dir: ['ZeqouXTraining'], file: 'package.json', crossCheck: [] },
  // This repository itself, which lives in the folder the others sit beside.
  { key: 'zeqou', dir: [], file: 'package.json', crossCheck: [] },
];

const check = process.argv.includes('--check');

function repoDir(parts) {
  return parts.length === 0 ? path.resolve(siteRoot) : path.join(ecosystemRoot, ...parts);
}

async function readVersion(file) {
  const json = JSON.parse(await readFile(file, 'utf8'));
  const version = typeof json.version === 'string' ? json.version.trim() : '';
  return version;
}

function parseGenerated(text) {
  const found = {};
  const body = text.match(/export const versions = \{([\s\S]*?)\} as const;/);
  if (!body) return found;
  // Values are padded for readability, so allow any run of spaces after the colon.
  for (const match of body[1].matchAll(/(\w+):\s+'([^']*)'/g)) found[match[1]] = match[2];
  return found;
}

function render(versions) {
  const width = Math.max(...Object.keys(versions).map((key) => key.length));
  const rows = Object.entries(versions)
    .map(([key, version]) => `  ${`${key}:`.padEnd(width + 1)} '${version}',`)
    .join('\n');
  return `/**
 * GENERATED FILE — do not edit by hand.
 *
 * Each Zeqou application owns its version in its own repository. This file is
 * what those repositories say, so the site cannot disagree with what shipped:
 * products.ts and docs.ts import these values instead of spelling them out.
 *
 *   npm run versions         read the checkouts and rewrite this file
 *   npm run versions:check   fail when it is out of date (runs before build)
 */

export const versions = {
${rows}
} as const;
`;
}

const found = {};
const skipped = [];
const problems = [];
const warnings = [];

for (const product of products) {
  const dir = repoDir(product.dir);
  if (!existsSync(dir)) {
    skipped.push({ key: product.key, dir });
    continue;
  }

  const file = path.join(dir, product.file);
  if (!existsSync(file)) {
    problems.push(`${product.key}: no ${product.file} in ${dir}`);
    continue;
  }

  let version;
  try {
    version = await readVersion(file);
  } catch (error) {
    problems.push(`${product.key}: ${file} is not readable JSON — ${error.message}`);
    continue;
  }
  if (!version) {
    problems.push(`${product.key}: ${file} has no version`);
    continue;
  }
  found[product.key] = version;

  for (const other of product.crossCheck) {
    const otherFile = path.join(dir, other);
    if (!existsSync(otherFile)) continue;
    const otherVersion = await readVersion(otherFile).catch(() => null);
    if (otherVersion && otherVersion !== version) {
      warnings.push(
        `${product.key}: ${other} says ${otherVersion} while ${product.file} says ${version} — the site follows ${product.file}`,
      );
    }
  }
}

for (const warning of warnings) console.log(`  ! ${warning}`);
for (const problem of problems) console.error(`  ✗ ${problem}`);
if (problems.length > 0) process.exit(1);

const committed = existsSync(outputFile)
  ? parseGenerated(await readFile(outputFile, 'utf8'))
  : {};

// Products whose repository is absent keep whatever is committed, so a partial
// checkout — or CI, which has only this repository — cannot blank the site.
const merged = {};
for (const product of products) {
  const version = found[product.key] ?? committed[product.key];
  if (version) merged[product.key] = version;
}

if (check) {
  const keys = products.map((product) => product.key);
  const drifted = keys.filter((key) => found[key] && committed[key] !== found[key]);

  for (const key of drifted) {
    console.error(
      `  ✗ ${key}: src/data/versions.ts says ${committed[key]} but the repository says ${found[key]}`,
    );
  }
  for (const key of keys) {
    if (!committed[key]) console.error(`  ✗ ${key}: missing from src/data/versions.ts`);
  }
  for (const { key, dir } of skipped) {
    console.log(`  · ${key}: no checkout at ${dir} — kept ${committed[key] ?? 'nothing'}`);
  }

  if (drifted.length > 0 || keys.some((key) => !committed[key])) {
    console.error('\nProduct versions are out of date — run `npm run versions` and commit the result.');
    process.exit(1);
  }

  console.log(
    skipped.length === 0
      ? 'Product versions match the repositories.'
      : `Product versions match every repository checked out here (${keys.length - skipped.length} of ${keys.length}).`,
  );
  process.exit(0);
}

const next = render(merged);
const changed = next !== (existsSync(outputFile) ? await readFile(outputFile, 'utf8') : '');

if (changed) {
  await writeFile(outputFile, next);
  console.log(`Updated ${path.relative(siteRoot, outputFile)}`);
} else {
  console.log(`${path.relative(siteRoot, outputFile)} was already up to date`);
}

for (const [key, version] of Object.entries(merged)) {
  const source = found[key] ? 'read' : 'kept';
  console.log(`  ${key.padEnd(9)} ${version.padEnd(9)} ${source}`);
}
for (const { key, dir } of skipped) {
  console.log(`  · ${key}: no checkout at ${dir} — kept ${merged[key] ?? 'nothing'}`);
}
