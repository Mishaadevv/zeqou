/**
 * Global site configuration.
 * Everything deployment-specific lives here — pages and components
 * never hard-code domains or organisation URLs.
 */
export const site = {
  name: 'Zeqou',
  tagline: 'Software, built as an ecosystem.',
  heroLabel: 'One service. Many apps.',
  heroTitle: 'Software, built as an ecosystem.',
  heroSubtitle:
    'Zeqou is a growing collection of focused applications designed to work beautifully on their own — and together. Free for Windows, macOS and Linux.',
  description:
    'Zeqou is a growing collection of focused applications designed to work beautifully on their own — and together.',
  copyrightYear: 2026,

  url: 'https://mishaadevv.github.io/zeqou/',

  // Central GitHub presence of the ecosystem.
  githubUrl: 'https://github.com/Mishaadevv',

  nav: [
    { label: 'Apps', to: '/apps' },
    { label: 'Docs', to: '/docs' },
    { label: 'Updates', to: '/updates' },
    { label: 'GitHub', href: 'https://github.com/Mishaadevv' },
  ],
} as const;
