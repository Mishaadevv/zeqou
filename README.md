# Zeqou — official ecosystem website

Central hub for the Zeqou software ecosystem: Zeqou Harness, ZeqouXChat, ZeqouXTraining and future applications.

English-only. Dark-first. Static build, ready for GitHub Pages.

## Stack

- React + TypeScript + Vite
- Real paths (`/apps/harness`), prerendered to static HTML at build time
- Zero CSS dependencies, hand-built design system in `src/styles/global.css`

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

`npm run build` checks the product versions, typechecks, builds the client bundle, builds
`src/entry-server.tsx` for Node, and then prerenders: every route in `src/routes.tsx` becomes
`dist/<route>/index.html` with its own head, plus `404.html`, `sitemap.xml` and `robots.txt`.

## Routing, prerendering and search

- The route table is `src/routes.tsx`: path, page and head data in one entry. The router renders
  it, and `scripts/prerender.mjs` walks it, so adding a page adds its static HTML, its head and
  its sitemap entry at the same time.
- Head tags (title, description, canonical, Open Graph, Twitter, JSON-LD, noindex) come from
  `src/lib/head.ts`. The browser component writes that list into `document.head`; the build step
  writes the same list into the HTML. One list, so a crawler and a visitor see the same page.
- `404.html` is the not-found page, and GitHub Pages serves it for any unknown path.
- Assets in `public/` are addressed through `asset()` in `src/lib/paths.ts`, which prefixes the
  deployment base — `/zeqou/` today, `/` after a domain. Under a source path like `./assets/…` a
  page at `/apps/harness/` would look for its icons in the wrong directory.

## Where the site is served from

Two environment variables, read by `vite.config.ts`, `src/lib/paths.ts` and the prerender step:

- `BASE_PATH` — the path the site lives under: `/zeqou/` now, `/` after the move to a domain.
- `SITE_URL` — the absolute root: `https://mishaadevv.github.io/zeqou/` now. Canonical URLs,
  `og:url`, `og:image`, `sitemap.xml` and `robots.txt` are built from it.

The deploy workflow sets both, and they default to the GitHub Pages values, so a local build needs
nothing. A domain move is a change of those two values in `.github/workflows/deploy.yml` — and of
`data-domains` on the analytics tag, which is scoped to the production host.

Note: `robots.txt` is only authoritative at the root of a *host*. While the site lives under
`/zeqou/`, submit `https://mishaadevv.github.io/zeqou/sitemap.xml` in the search console by hand;
the generated file starts working on its own once the site has its own domain.

## Deploy to GitHub Pages

1. Push to the `main` branch — `.github/workflows/deploy.yml` builds and publishes `dist/` automatically.
2. In the repository go to **Settings → Pages** and select **GitHub Actions** as the source.

The site is served from `/zeqou/` today: the workflow passes `BASE_PATH` and `SITE_URL`, and asset
URLs, prerendered links, canonical URLs and the sitemap are all built from them.

## Add a new application

Edit one file — `src/config/products.ts` — and append an entry:

```ts
{
  name: 'Zeqou Next',
  shortName: 'Next',
  slug: 'next',
  category: '…',
  description: '…',
  longDescription: '…',
  status: 'coming-soon',
  version: '0.1',
  downloadUrl: '…',
  githubUrl: '…',
  docsUrl: '…',
  features: [],
  providers: [],
}
```

The home page, Apps catalogue, footer and updates feed pick it up automatically.
For a full product page, add `src/pages/Next.tsx` and an entry in `src/routes.tsx` — that one entry
gives it a route, a prerendered HTML file, its own head and a sitemap entry.

Product previews live in `previewFor` in `src/pages/Apps.tsx`: a real screenshot or promo video
where one exists, and `src/components/TrainingMock.tsx` (a CSS mock) where none does yet.

## Edit content without touching design

- Products/downloads: `src/config/products.ts`
- Global links/tagline — including the support links and their `enabled` flags: `src/config/site.ts`
- Updates feed: `src/data/updates.ts`
- Ko-fi goal: `src/data/support.ts` (generated — see below)

## Ko-fi goal

Ko-fi publishes no read API — its API only pushes payment webhooks to a URL you host — so the
only place the goal is published is the public goal page. `npm run goal:sync` reads that page
and writes `src/data/support.ts`, which the Support section renders: title, currency, target,
percent, and the date it was read.

- The goal address lives once, in `supportGoalUrl` in `src/config/site.ts`; the script reads it
  from there and the link under the progress bar uses the same constant. The Ko-fi support button
  points at the main Ko-fi page instead, so a visitor landing there sees the whole profile.
- `.github/workflows/deploy.yml` runs it before every build, and rebuilds daily at 05:17 UTC,
  so the progress bar moves without anyone pushing.
- A page that cannot be read never blanks the site: the committed value is kept and the run
  still succeeds. `npm run goal:sync -- --strict` turns that into a failure.
- The date shown next to the bar is what makes a stale number honest, so it is always rendered.

## Analytics

Umami (cloud.umami.is) is loaded from `index.html`: cookie-free, no personal data, and invisible
on the page. The tag is scoped with `data-domains` to the production host, so local development
and previews are never counted, and `data-do-not-track` keeps visitors who ask not to be tracked
out of the numbers entirely. Route changes are reported as page views by the tracker itself, which
watches the history API — nothing in `src/` calls it.

## Brand assets

- Master mark: `public/assets/branding/zeqou-x.png`
- Harness icon: `public/assets/apps/harness/icon.png`
- XChat icon: `public/assets/apps/xchat/icon.png`
- XTraining icon: `public/assets/apps/xtraining/icon.png`
- Favicon / touch icon: `public/favicon.png`, `public/apple-touch-icon.png`
- Open Graph: `public/og.png`
- Harness promo video: `public/assets/videos/harness.mp4` (see the README in that folder)
