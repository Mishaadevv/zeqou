/**
 * Global site configuration.
 * Everything deployment-specific lives here — pages and components
 * never hard-code domains or organisation URLs.
 */
export const site = {
  name: 'Zeqou',
  tagline: 'Software, built as an ecosystem.',
  heroTitle: 'Software, built as an ecosystem.',
  heroSubtitle:
    'Zeqou is a growing collection of focused applications designed to work beautifully on their own — and together.',
  description:
    'Zeqou is a growing collection of focused applications designed to work beautifully on their own — and together.',
  copyrightYear: 2026,

  // TODO: replace with the production domain after the first GitHub Pages deploy.
  url: '',

  // Central GitHub presence of the ecosystem.
  // TODO: replace with the real organisation / profile URL.
  githubUrl: 'https://github.com/zeqou',

  nav: [
    { label: 'Apps', to: '/apps' },
    { label: 'Updates', to: '/updates' },
    { label: 'GitHub', href: 'https://github.com/zeqou' },
  ],
} as const;
