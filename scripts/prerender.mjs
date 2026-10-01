#!/usr/bin/env node
/**
 * One static HTML file per route.
 *
 * GitHub Pages serves files, it does not rewrite URLs, and a page that only
 * exists after JavaScript has run is a page a crawler can miss. So the build
 * ends here: every route in src/routes.tsx is rendered with react-dom/server
 * (dist-ssr/entry-server.js), written to dist/<route>/index.html with its own
 * head, and listed in sitemap.xml. 404.html carries the not-found page, and
 * robots.txt points at the sitemap.
 *
 * Paths and URLs come from the same two environment variables vite.config.ts
 * reads — BASE_PATH and SITE_URL:
 *
 *   BASE_PATH=/ SITE_URL=https://zeqou.example/ npm run build
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const siteRoot = fileURLToPath(new URL('..', import.meta.url));
const dist = path.join(siteRoot, 'dist');
const ssrEntry = path.join(siteRoot, 'dist-ssr', 'entry-server.js');

/** Absolute site root, always with one trailing slash. */
const siteUrl = (process.env.SITE_URL ?? 'https://mishaadevv.github.io/zeqou/').replace(/\/+$/, '/');

const { render, pages, notFoundMeta, headTagsHtml } = await import(pathToFileURL(ssrEntry).href);

const shell = await readFile(path.join(dist, 'index.html'), 'utf8');

const HEAD_BLOCK = /<!--head:start-->[\s\S]*?<!--head:end-->/;
const ROOT = /<div id="root">\s*<\/div>/;

/**
 * React hoists what it can — today, image preloads — to the front of the
 * rendered string. Those belong in <head>, not inside #root, so the leading
 * sequence of them is taken off before the markup is written.
 */
const HOISTED = /^(?:<title\b[^>]*>[\s\S]*?<\/title>|<(?:link|meta)\b[^>]*\/?>)/;

function splitHoisted(html) {
  let head = '';
  let body = html;

  for (;;) {
    const match = body.match(HOISTED);
    if (!match) break;
    head += match[0];
    body = body.slice(match[0].length);
  }

  return { head, body };
}

if (!HEAD_BLOCK.test(shell) || !ROOT.test(shell)) {
  throw new Error('dist/index.html lost its head markers or #root — check index.html and the build');
}

/** Absolute URL of a route as the host serves it: directory pages end in '/'. */
function absoluteUrl(routePath) {
  const clean = routePath.replace(/^\/+|\/+$/g, '');
  return clean ? `${siteUrl}${clean}/` : siteUrl;
}

/** Where a route lives on disk: '/' is index.html, the rest are directories. */
function outputFile(routePath) {
  const clean = routePath.replace(/^\/+|\/+$/g, '');
  return clean ? path.join(dist, clean, 'index.html') : path.join(dist, 'index.html');
}

function pageHtml(routePath, meta, html) {
  const { head, body } = splitHoisted(html);

  return shell
    .replace(
      HEAD_BLOCK,
      [
        '<!--head:start-->',
        headTagsHtml(meta, routePath),
        head && `    ${head}`,
        '    <!--head:end-->',
      ]
        .filter(Boolean)
        .join('\n'),
    )
    .replace(ROOT, `<div id="root">${body}</div>`);
}

for (const { path: routePath, meta } of pages) {
  const file = outputFile(routePath);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, pageHtml(routePath, meta, render(routePath)));
}

// Everything that is not a route: GitHub Pages serves this file for any
// unknown path, so a mistyped URL gets the not-found page — with its markup
// already in place, not after the bundle loads.
await writeFile(
  path.join(dist, '404.html'),
  pageHtml('/', notFoundMeta, render('/__not-found__')),
);

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map(({ path: routePath }) => `  <url><loc>${absoluteUrl(routePath)}</loc></url>`),
  '</urlset>',
  '',
].join('\n');

await writeFile(path.join(dist, 'sitemap.xml'), sitemap);

// Note: robots.txt is only authoritative at the root of a host. While the site
// lives under /zeqou/ the search console has to be given the sitemap by hand;
// the file starts working on its own after the move to a domain.
await writeFile(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`,
);

console.log(`Prerendered ${pages.length} routes + 404.html, sitemap.xml, robots.txt`);
console.log(`  ${siteUrl}`);
