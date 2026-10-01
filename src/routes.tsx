import type { ReactElement, ReactNode } from 'react';
import { SEO } from './components/SEO';
import { site } from './config/site';
import { getProduct } from './config/products';
import { docs } from './data/docs';
import { faq } from './data/faq';
import { absoluteUrl } from './lib/paths';
import type { PageMeta } from './lib/meta';
import { About } from './pages/About';
import { Apps } from './pages/Apps';
import { Changelog } from './pages/Changelog';
import { DocArticle } from './pages/DocArticle';
import { Docs } from './pages/Docs';
import { Downloads } from './pages/Downloads';
import { Faq } from './pages/Faq';
import { Harness } from './pages/Harness';
import { Home } from './pages/Home';
import { License } from './pages/License';
import { Privacy } from './pages/Privacy';
import { Support } from './pages/Support';
import { Updates } from './pages/Updates';
import { XChat } from './pages/XChat';
import { XTraining } from './pages/XTraining';

/**
 * Every page of the site, in one place.
 *
 * The router renders this table, and scripts/prerender.mjs walks it to write one
 * static HTML file per route. Adding a page therefore means adding one entry —
 * it is prerendered, given its own head and included in the sitemap by itself.
 */
export interface RouteEntry {
  /** Route path, without the deployment base. */
  path: string;
  /** The page, with its head tags in front of it. */
  element: ReactElement;
  /** Head data — see src/lib/head.ts. */
  meta: PageMeta;
}

function page(path: string, element: ReactNode, meta: PageMeta): RouteEntry {
  return { path, meta, element: <><SEO {...meta} />{element}</> };
}

/**
 * schema.org entry for an application page. The apps are free, so the offer is
 * genuinely zero — this is what lets a search engine show the price as Free.
 */
function softwareApplication(slug: string, category: string): Record<string, unknown> {
  const product = getProduct(slug);

  if (!product) {
    throw new Error(`no product with slug "${slug}" — products.ts and routes.tsx disagree`);
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: category,
    operatingSystem: product.platforms.join(', '),
    softwareVersion: product.version,
    description: product.description,
    url: absoluteUrl(`/apps/${slug}`),
    downloadUrl: product.downloadUrl,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    isAccessibleForFree: true,
  };
}

/**
 * The FAQ page as structured data: the same questions and answers the page
 * shows, in the shape a search engine can read without rendering anything.
 */
function faqJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: { '@type': 'Answer', text: entry.answer },
    })),
  };
}

/** The head of the not-found page, used by the router and by 404.html. */
export const notFoundMeta: PageMeta = {
  title: 'Page not found — Zeqou',
  description: 'The page you requested does not exist.',
  noindex: true,
};

export const routes: RouteEntry[] = [
  page('/', <Home />, {
    title: 'Zeqou — Software, built as an ecosystem.',
    description: site.description,
  }),
  page('/apps', <Apps />, {
    title: 'Apps — Zeqou',
    description:
      'Every application in the Zeqou ecosystem: Harness, XChat, XTraining and upcoming tools.',
  }),
  page('/apps/harness', <Harness />, {
    title: 'Zeqou Harness — Zeqou',
    description: 'An AI workspace for developers, agents, models, tools, memory and MCP.',
    jsonLd: softwareApplication('harness', 'DeveloperApplication'),
  }),
  page('/apps/xchat', <XChat />, {
    title: 'ZeqouXChat — Zeqou',
    description: 'A desktop AI chat application built around modern AI providers and developer workflows.',
    jsonLd: softwareApplication('xchat', 'UtilitiesApplication'),
  }),
  page('/apps/xtraining', <XTraining />, {
    title: 'ZeqouXTraining — Zeqou',
    description:
      'A local-first desktop studio for training, fine-tuning, evaluating and serving AI models on your own hardware.',
    jsonLd: softwareApplication('xtraining', 'DeveloperApplication'),
  }),
  page('/docs', <Docs />, {
    title: 'Docs — Zeqou',
    description:
      'Documentation for the Zeqou ecosystem: Harness, XChat, XTraining and the website itself.',
  }),
  // One entry per article: a page that exists is a page that is prerendered,
  // so /docs/<anything else> falls through to the not-found route.
  ...docs.map((doc) =>
    page(`/docs/${doc.slug}`, <DocArticle />, {
      title: `${doc.title} — Zeqou Docs`,
      description: doc.description,
      ogType: 'article',
    }),
  ),
  page('/downloads', <Downloads />, {
    title: 'Downloads — Zeqou',
    description:
      'The newest releases of Zeqou Harness, ZeqouXChat and ZeqouXTraining: every file, its size and the SHA-256 the release reports.',
  }),
  page('/changelog', <Changelog />, {
    title: 'Changelog — Zeqou',
    description:
      'Release notes for Zeqou Harness, ZeqouXChat and ZeqouXTraining, read from the releases published on GitHub.',
  }),
  page('/faq', <Faq />, {
    title: 'FAQ — Zeqou',
    description:
      'Free, local or cloud, signed or not: short answers about Zeqou, its applications and their installers.',
    jsonLd: faqJsonLd(),
  }),
  page('/support', <Support />, {
    title: 'Support — Zeqou',
    description:
      'What donations pay for and how to give one. Every Zeqou app is free to download and update.',
  }),
  page('/license', <License />, {
    title: 'License — Zeqou',
    description:
      'Zeqou is source-available under PolyForm Strict 1.0.0: noncommercial use is permitted, distributing or changing the code is not.',
  }),
  page('/privacy', <Privacy />, {
    title: 'Privacy — Zeqou',
    description:
      'How this site counts visits without cookies, what the applications send, and which outside services take part.',
  }),
  page('/updates', <Updates />, {
    title: 'Updates — Zeqou',
    description: 'New app releases, major updates and announcements across the Zeqou ecosystem.',
  }),
  page('/about', <About />, {
    title: 'About — Zeqou',
    description:
      'Zeqou is an independent software ecosystem focused on building useful, modern applications.',
  }),
];
