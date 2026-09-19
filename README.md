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
- Global links/tagline: `src/config/site.ts`
- Updates feed: `src/data/updates.ts`

## Brand assets

- Master mark: `public/assets/branding/zeqou-x.png`
- Harness icon: `public/assets/apps/harness/icon.png`
- XChat icon: `public/assets/apps/xchat/icon.png`
- XTraining icon: `public/assets/apps/xtraining/icon.png`
- Favicon / touch icon: `public/favicon.png`, `public/apple-touch-icon.png`
- Open Graph: `public/og.png`
- Harness promo video: `public/assets/videos/harness.mp4` (see the README in that folder)
