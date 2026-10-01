/**
 * Head data for one page.
 *
 * It lives in the route table (src/routes.tsx) rather than inside the pages, so
 * that the same object can be read by the component that runs in the browser
 * and by the build step that writes the static HTML. See src/lib/head.ts for
 * what is generated from it.
 */
export interface PageMeta {
  /** <title>, and the title of every social card. */
  title: string;
  /** Meta description, and the description of every social card. */
  description: string;
  /** schema.org payload, rendered as JSON-LD. */
  jsonLd?: Record<string, unknown>;
  /** Open Graph type — pages are 'website' unless they read as articles. */
  ogType?: 'website' | 'article';
  /** Left out of the sitemap and marked noindex. */
  noindex?: boolean;
}
