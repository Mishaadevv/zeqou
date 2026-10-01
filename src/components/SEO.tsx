import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { headTags } from '../lib/head';
import type { HeadTag } from '../lib/head';
import type { PageMeta } from '../lib/meta';

/**
 * Marks every tag the SEO component owns. The list is replaced as a whole on
 * each page change, so nothing is left behind from the page before — and the
 * same attribute is written into the prerendered HTML, so the static tags are
 * replaced rather than duplicated.
 */
const MANAGED = 'data-seo';

function applyHead(tags: HeadTag[]): void {
  const head = document.head;

  for (const stale of head.querySelectorAll(`[${MANAGED}]`)) stale.remove();

  for (const tag of tags) {
    const element = document.createElement(tag.tag);
    element.setAttribute(MANAGED, '');
    for (const [name, value] of Object.entries(tag.attrs)) element.setAttribute(name, value);
    if (tag.text !== undefined) element.textContent = tag.text;
    head.appendChild(element);
  }
}

/**
 * Keeps <title>, the description, the canonical link, the social cards and the
 * JSON-LD payload in step with the current page.
 *
 * The tags are applied to document.head rather than rendered into the tree:
 * React 19 would hoist rendered <title>/<meta> tags, which makes what a crawler
 * finds at build time depend on React's hoisting rules. Applying them keeps the
 * prerendered HTML and the live document identical by construction — the build
 * step writes the very same list (see src/lib/head.ts).
 */
export function SEO(meta: PageMeta) {
  const { pathname } = useLocation();

  useEffect(() => {
    applyHead(headTags(meta, pathname));
  }, [meta, pathname]);

  return null;
}
