# Zeqou — official ecosystem website

Central hub for the Zeqou software ecosystem: Zeqou Harness, ZeqouXChat, ZeqouXTraining and future applications.

English-only. Dark-first. Static build, ready for GitHub Pages.

## Stack

- React + TypeScript + Vite
- Hash routing (`/#/apps/harness`) — works on GitHub Pages user sites and project sites with no server rewrites
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

## Deploy to GitHub Pages

1. Push to the `main` branch — `.github/workflows/deploy.yml` builds and publishes `dist/` automatically.
2. In the repository go to **Settings → Pages** and select **GitHub Actions** as the source.

No `base` changes are needed: `vite.config.ts` uses `base: './'`, so relative asset URLs work on both `username.github.io` and `username.github.io/repo/`.

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
For a full product page, add `src/pages/Next.tsx` and a `/apps/next` route in `src/app/App.tsx`.

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
out of the numbers entirely. Hash routes (`#/apps/harness`) are tracked as separate pages by the
tracker itself — nothing in `src/` calls it.

## Brand assets

- Master mark: `public/assets/branding/zeqou-x.png`
- Harness icon: `public/assets/apps/harness/icon.png`
- XChat icon: `public/assets/apps/xchat/icon.png`
- XTraining icon: `public/assets/apps/xtraining/icon.png`
- Favicon / touch icon: `public/favicon.png`, `public/apple-touch-icon.png`
- Open Graph: `public/og.png`
- Harness promo video: `public/assets/videos/harness.mp4` (see the README in that folder)
