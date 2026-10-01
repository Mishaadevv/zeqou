import type { PageMeta } from './meta';
import { absoluteAsset, absoluteUrl } from './paths';

/** One element of the page head. */
export interface HeadTag {
  tag: 'title' | 'meta' | 'link' | 'script';
  /** Attributes, in the order they are written. */
  attrs: Record<string, string>;
  /** Text content, for <title> and the JSON-LD payload. */
  text?: string;
}

/**
 * The head of one page, as data.
 *
 * Two consumers read this list: the SEO component writes it into document.head
 * in the browser, and scripts/prerender.mjs writes the same tags into the
 * static HTML at build time. Keeping the list in one place is what stops the
 * head a crawler reads and the head a visitor gets after a client-side
 * navigation from drifting apart.
 */
export function headTags(meta: PageMeta, routePath: string): HeadTag[] {
  const canonical = absoluteUrl(routePath);
  const image = absoluteAsset('og.png');
  const ogType = meta.ogType ?? 'website';

  const tags: HeadTag[] = [
    { tag: 'title', attrs: {}, text: meta.title },
    { tag: 'meta', attrs: { name: 'description', content: meta.description } },
    { tag: 'link', attrs: { rel: 'canonical', href: canonical } },
    { tag: 'meta', attrs: { property: 'og:type', content: ogType } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: 'Zeqou' } },
    { tag: 'meta', attrs: { property: 'og:title', content: meta.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: meta.description } },
    { tag: 'meta', attrs: { property: 'og:url', content: canonical } },
    { tag: 'meta', attrs: { property: 'og:image', content: image } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: meta.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: meta.description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: image } },
  ];

  if (meta.noindex) {
    tags.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex' } });
  }

  if (meta.jsonLd) {
    tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, text: JSON.stringify(meta.jsonLd) });
  }

  return tags;
}

function escapeAttribute(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function serializeTag(tag: HeadTag): string {
  // data-seo is the marker the SEO component replaces on a page change; the
  // static tags carry it too, so a page never ends up with two descriptions.
  const attrs =
    ' data-seo' +
    Object.entries(tag.attrs)
      .map(([name, value]) => ` ${name}="${escapeAttribute(value)}"`)
      .join('');

  if (tag.tag === 'title') return `<title${attrs}>${escapeText(tag.text ?? '')}</title>`;

  // Inside <script> the text is raw: JSON-LD may not be entity-encoded, but a
  // literal '<' could end the element early, and \u003c is valid JSON anywhere
  // a '<' could appear.
  if (tag.tag === 'script') return `<script${attrs}>${(tag.text ?? '').replace(/</g, '\\u003c')}</script>`;

  if (tag.text !== undefined) return `<${tag.tag}${attrs}>${escapeText(tag.text)}</${tag.tag}>`;
  return `<${tag.tag}${attrs} />`;
}

/** The full head block for a page, as HTML — used by scripts/prerender.mjs. */
export function headTagsHtml(meta: PageMeta, routePath: string, indent = '    '): string {
  return headTags(meta, routePath)
    .map((tag) => `${indent}${serializeTag(tag)}`)
    .join('\n');
}
