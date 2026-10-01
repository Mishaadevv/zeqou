#!/usr/bin/env node
/**
 * The releases the site shows, read from GitHub.
 *
 * The site links to real builds, so it reads them from where they are
 * published: the latest releases of every application, with their files, sizes
 * and the SHA-256 GitHub reports for each one. Nothing about a release —
 * version, file name, hash — is typed into the site by hand.
 *
 *   npm run releases:sync              refresh src/data/releases.ts
 *   npm run releases:sync -- --strict  fail when GitHub cannot be read
 *
 * A failed read keeps the committed file and the run still succeeds: a
 * download page from yesterday is better than a deploy that stops. GitHub
 * allows 60 requests an hour per address without a token and 5,000 with one,
 * so the deploy workflow passes GITHUB_TOKEN.
 *
 * Updater artefacts (.blockmap, latest*.yml, .app.tar.gz) are not downloads a
 * person can use, so they are left out of the file.
 */

import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = fileURLToPath(new URL('..', import.meta.url));
const outputFile = path.join(siteRoot, 'src', 'data', 'releases.ts');

const strict = process.argv.includes('--strict');

/** Keys are product slugs in src/config/products.ts. */
const repositories = {
  harness: 'Mishaadevv/harness',
  xchat: 'Mishaadevv/xchat',
  xtraining: 'Mishaadevv/xtraining',
};

/** Releases kept per application — enough for a changelog, not a feed. */
const perProduct = 5;

/** Files a person downloads, and nothing else. */
const isDownload = (name) =>
  !/\.blockmap$/i.test(name) &&
  !/^latest.*\.ya?ml$/i.test(name) &&
  !/\.app\.tar\.gz$/i.test(name) &&
  !/\.json$/i.test(name);

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

async function fetchJson(url) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'zeqou-site-releases-sync',
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(url, { headers, signal: AbortSignal.timeout(30000) });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }
  return response.json();
}

function toRelease(release) {
  return {
    tag: String(release.tag_name ?? ''),
    name: String(release.name || release.tag_name || ''),
    date: String(release.published_at ?? '').slice(0, 10),
    url: String(release.html_url ?? ''),
    notes: String(release.body ?? '').trim(),
    assets: (release.assets ?? [])
      .filter((asset) => isDownload(String(asset.name)))
      .map((asset) => ({
        name: String(asset.name),
        url: String(asset.browser_download_url),
        size: Number(asset.size) || 0,
        // GitHub reports "sha256:<hex>"; older releases have none.
        sha256: typeof asset.digest === 'string' && asset.digest.startsWith('sha256:')
          ? asset.digest.slice('sha256:'.length)
          : null,
      })),
  };
}

function parseGenerated(text) {
  const body = text.match(/export const releases: Record<string, Release\[\]> = (\{[\s\S]*?\n\});/);
  if (!body) return null;
  try {
    return JSON.parse(body[1]);
  } catch {
    return null;
  }
}

function render(data) {
  return `/**
 * GENERATED FILE — do not edit by hand.
 *
 * The latest releases of the Zeqou applications, with their files and the
 * SHA-256 GitHub reports for each one — what /downloads links to and what
 * /changelog reads. Regenerated before every deploy, so a new release appears
 * on the site without anyone editing it.
 *
 *   npm run releases:sync   read the GitHub releases API and rewrite this file
 */

export interface ReleaseAsset {
  name: string;
  url: string;
  /** Size in bytes. */
  size: number;
  /** Hex digest, or null when the release predates GitHub reporting one. */
  sha256: string | null;
}

export interface Release {
  tag: string;
  name: string;
  /** ISO date (YYYY-MM-DD) of publication. */
  date: string;
  url: string;
  /** Release notes as published on GitHub. */
  notes: string;
  assets: ReleaseAsset[];
}

/** Newest first, keyed by product slug. */
export const releases: Record<string, Release[]> = ${JSON.stringify(data, null, 2)};
`;
}

// ── Read ─────────────────────────────────────────────────────────────────────

let committed = null;
if (existsSync(outputFile)) committed = parseGenerated(await readFile(outputFile, 'utf8'));

const read = {};
const failures = [];

for (const [product, repo] of Object.entries(repositories)) {
  try {
    const releases = await fetchJson(
      `https://api.github.com/repos/${repo}/releases?per_page=${perProduct + 1}`,
    );
    const usable = releases
      .filter((release) => !release.draft)
      .slice(0, perProduct)
      .map(toRelease);
    if (usable.length === 0) throw new Error('no published releases');
    read[product] = usable;
  } catch (error) {
    failures.push(`${product}: ${error.message}`);
  }
}

for (const failure of failures) console.log(`  ! ${failure}`);

// A product that could not be read keeps what is committed, so one bad request
// cannot leave the download page without files.
const next = {};
for (const product of Object.keys(repositories)) {
  const value = read[product] ?? committed?.[product];
  if (value) next[product] = value;
}

if (Object.keys(next).length === 0) {
  console.error('Nothing to publish: no release could be read and nothing is committed.');
  process.exit(1);
}

if (failures.length > 0 && strict) process.exit(1);

const text = render(next);
if (text !== (existsSync(outputFile) ? await readFile(outputFile, 'utf8') : '')) {
  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, text);
  console.log(`Updated ${path.relative(siteRoot, outputFile)}`);
} else {
  console.log(`${path.relative(siteRoot, outputFile)} was already up to date`);
}

for (const [product, list] of Object.entries(next)) {
  const latest = list[0];
  const source = read[product] ? 'read' : 'kept';
  console.log(`  ${product.padEnd(9)} ${latest.tag.padEnd(9)} ${latest.assets.length} file(s) ${source}`);
}
