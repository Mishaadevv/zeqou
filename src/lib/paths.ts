/**
 * URLs that keep working at any route depth.
 *
 * Vite substitutes the two values at build time. `BASE_URL` is the path the
 * site is served from — '/zeqou/' on GitHub Pages, '/' once it has its own
 * domain — and it always ends with a slash, so it can simply be prefixed.
 * `VITE_SITE_URL` is the absolute root, which canonical URLs and social cards
 * need; it comes from the `SITE_URL` environment variable, see vite.config.ts.
 */

/** Absolute site root, always ending with a slash. */
export const siteUrl: string = String(import.meta.env.VITE_SITE_URL ?? import.meta.env.BASE_URL);

/** A file from public/, addressed from the site root. */
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\.?\//, '');
}

/** A public file as an absolute URL — social scrapers fetch those, not paths. */
export function absoluteAsset(path: string): string {
  return siteUrl + path.replace(/^\.?\//, '');
}

/** The absolute URL of a route as it is served: directory pages end in '/'. */
export function absoluteUrl(routePath: string): string {
  const clean = routePath.replace(/^\/+|\/+$/g, '');
  return clean ? `${siteUrl}${clean}/` : siteUrl;
}
