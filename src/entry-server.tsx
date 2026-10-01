/**
 * Build-time entry point, used by scripts/prerender.mjs. It is bundled by
 * `vite build --ssr` into dist-ssr and never shipped to the browser.
 */
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { App } from './app/App';
import { notFoundMeta, routes } from './routes';

/** Everything the prerender step needs: what to write, and what goes in <head>. */
export const pages = routes.map(({ path, meta }) => ({ path, meta }));

export { notFoundMeta };
export { headTagsHtml } from './lib/head';

/**
 * Render one route to HTML.
 *
 * The router gets the deployment base, so the links inside the markup come out
 * as the URLs the static host will actually serve (/zeqou/apps/harness), not as
 * paths that only work after the client bundle boots.
 */
export function render(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const entry = path === '/' ? `${base}/` : `${base}${path}`;

  return renderToString(
    <MemoryRouter basename={base} initialEntries={[entry]}>
      <App />
    </MemoryRouter>,
  );
}
