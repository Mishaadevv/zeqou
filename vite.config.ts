import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Where the site is served from.
 *
 * GitHub Pages serves project sites under /<repo>/, so today the site lives at
 * /zeqou/ on a shared host. Both values come from the environment, which makes
 * the move to a real domain a change of two variables — BASE_PATH=/ and
 * SITE_URL=https://…/ — with nothing else to touch:
 *
 *   BASE_PATH=/ SITE_URL=https://zeqou.example/ npm run build
 */
const basePath = process.env.BASE_PATH ?? '/zeqou/'
const siteUrl = process.env.SITE_URL ?? 'https://mishaadevv.github.io/zeqou/'

/** Both always end with a slash, so they can be prefixed to paths. */
const withSlash = (value: string) => (value.endsWith('/') ? value : `${value}/`)

export default defineConfig({
  plugins: [react()],
  // Absolute asset URLs on purpose: a page prerendered at /apps/harness/ has to
  // find /zeqou/assets/…, which a relative URL could not do from that depth.
  base: withSlash(basePath),
  define: {
    // Read by src/lib/paths.ts (canonical URLs, social cards) and by the
    // prerender script, which writes the same values into sitemap.xml.
    'import.meta.env.VITE_SITE_URL': JSON.stringify(withSlash(siteUrl)),
  },
  build: {
    outDir: 'dist',
  },
})
