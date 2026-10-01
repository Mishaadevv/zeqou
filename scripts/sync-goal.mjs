#!/usr/bin/env node
/**
 * Track the Ko-fi goal on the site.
 *
 * Ko-fi has no read API — its API only pushes payment webhooks to a URL you
 * host — so the one place the goal is published is the public goal page. This
 * script reads that page and writes src/data/support.ts, which the Support
 * section renders. The page is server-rendered HTML, so a plain request with a
 * browser User-Agent is enough; no headless browser, no credentials.
 *
 *   npm run goal:sync            refresh src/data/support.ts
 *   npm run goal:sync -- --strict   also fail when the page cannot be read
 *
 * A page that cannot be read never blanks the site: whatever is committed is
 * kept, the reason is printed, and the run still succeeds, because a stale
 * progress bar is better than a broken deploy. Pass --strict (CI does not) to
 * turn that into a failure. The site shows the date the numbers were read, so
 * a stale value is always visible as one.
 */

import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = fileURLToPath(new URL('..', import.meta.url));
const configFile = path.join(siteRoot, 'src', 'config', 'site.ts');
const outputFile = path.join(siteRoot, 'src', 'data', 'support.ts');

const strict = process.argv.includes('--strict');

// Ko-fi answers a bare client with 403; it serves the page to a browser.
const userAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

/**
 * The goal page is published in the site config, so the address is typed once:
 * it is read back out of site.ts, and the progress bar links to the same
 * constant. The support buttons point at the main Ko-fi page, not the goal.
 */
async function goalUrl() {
  const source = await readFile(configFile, 'utf8');
  const match = source.match(/supportGoalUrl:\s*'(https:\/\/ko-fi\.com\/[^']+)'/);
  if (!match) {
    throw new Error(`no supportGoalUrl in ${path.relative(siteRoot, configFile)}`);
  }
  return match[1];
}

/**
 * Read the page.
 *
 * Cloudflare in front of ko-fi.com answers Node's TLS fingerprint with 403 no
 * matter which headers are sent, while curl gets the page, so curl is the
 * fallback. Both are present on the GitHub runner: neither branch needs a
 * package, a browser download or a credential.
 */
async function fetchHtml(url) {
  const headers = {
    'User-Agent': userAgent,
    Accept: 'text/html,application/xhtml+xml',
    'Accept-Language': 'en-US,en;q=0.9',
  };

  try {
    const response = await fetch(url, { headers, signal: AbortSignal.timeout(20000) });
    if (response.ok) return await response.text();
    fetchFailed = `${response.status} ${response.statusText}`;
  } catch (error) {
    fetchFailed = error.message;
  }

  try {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const { stdout } = await promisify(execFile)(
      'curl',
      ['-sSL', '--max-time', '20', '-A', headers['User-Agent'], '-H', `Accept: ${headers.Accept}`, url],
      { maxBuffer: 8 * 1024 * 1024 },
    );
    return stdout;
  } catch (error) {
    throw new Error(`fetch said ${fetchFailed}; curl said ${error.message}`);
  }
}

/** Pull the goal out of Ko-fi's server-rendered markup. */
function parse(html) {
  const goal = {};

  const title = html.match(/id="profileGoalTitle"[^>]*>\s*([^<]+?)\s*</);
  if (title) goal.title = title[1];

  const percent = html.match(/role="progressbar"[\s\S]{0,240}?aria-valuenow="(\d+)"/);
  if (percent) goal.percent = Number(percent[1]);

  // "of $500 goal" — the currency symbol and the amount are the creator's.
  const target = html.match(/id="profileGoalTotal"[^>]*>([^<]*)</);
  const amount = target && target[1].match(/([^\d\s]+)\s*([\d,.]+)/);
  if (amount) {
    goal.currency = amount[1];
    goal.target = Number(amount[2].replace(/,/g, ''));
  }

  return goal;
}

function parseGenerated(text) {
  const found = {};
  const body = text.match(/export const supportGoal = \{([\s\S]*?)\} as const;/);
  if (!body) return found;
  for (const match of body[1].matchAll(/(\w+):\s*(?:'([^']*)'|"([^"]*)"|([\d.]+))/g)) {
    const value = match[2] ?? match[3];
    found[match[1]] = value !== undefined ? value : Number(match[4]);
  }
  return found;
}

/** Single quotes, like the rest of src/data — escaped so a title cannot break the file. */
function quote(value) {
  return `'${String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

function render(goal) {
  return `/**
 * GENERATED FILE — do not edit by hand.
 *
 * What the Ko-fi goal says right now, so the Support section can show real
 * progress instead of a number someone has to remember to update.
 *
 *   npm run goal:sync   read the public Ko-fi goal page and rewrite this file
 *
 * Ko-fi publishes no read API, so the value is read from the goal page and
 * carries the date it was read. A failed read keeps this file as it is — the
 * date on the site is what makes a stale value honest.
 */

export const supportGoal = {
  title:     ${quote(goal.title)},
  currency:  ${quote(goal.currency)},
  target:    ${goal.target},
  percent:   ${goal.percent},
  url:       ${quote(goal.url)},
  updatedAt: ${quote(goal.updatedAt)},
} as const;
`;
}

const url = await goalUrl();
const previous = existsSync(outputFile) ? await readFile(outputFile, 'utf8') : '';
const committed = parseGenerated(previous);
const today = new Date().toISOString().slice(0, 10);

let scraped = {};
let failure = null;
let fetchFailed = null;

try {
  scraped = parse(await fetchHtml(url));
} catch (error) {
  failure = error.message;
}

// Field by field: a page Ko-fi has half-changed still moves the bar.
const next = {
  title: scraped.title ?? committed.title,
  currency: scraped.currency ?? committed.currency,
  target: scraped.target ?? committed.target,
  percent: scraped.percent ?? committed.percent,
  url,
  updatedAt: scraped.percent === undefined ? committed.updatedAt : today,
};

// Judged on the page, not on the merged result — otherwise a good committed
// file hides a page that stopped being readable.
const missing = ['title', 'currency', 'target', 'percent'].filter((key) => scraped[key] === undefined);

if (missing.length > 0) {
  console.error(
    `  ! the Ko-fi goal page did not carry ${missing.join(', ')}${failure ? ` — ${failure}` : ''}`,
  );
  if (committed.percent === undefined) {
    console.error('Nothing to keep: src/data/support.ts has no goal either.');
    process.exit(1);
  }
  console.error(`  · kept ${path.relative(siteRoot, outputFile)} as of ${committed.updatedAt}`);
  process.exit(strict ? 1 : 0);
}

const text = render(next);
if (text !== previous) {
  await writeFile(outputFile, text);
  console.log(`Updated ${path.relative(siteRoot, outputFile)}`);
} else {
  console.log(`${path.relative(siteRoot, outputFile)} was already up to date`);
}

console.log(`  ${next.title}: ${next.percent}% of ${next.currency}${next.target} (read ${next.updatedAt})`);
