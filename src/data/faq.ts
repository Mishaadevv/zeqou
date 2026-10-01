/**
 * The questions people actually ask before installing something.
 *
 * Kept as data, not markup, because two things read it: the /faq page and the
 * FAQPage JSON-LD the route table publishes for search engines.
 */
export interface FaqEntry {
  question: string;
  answer: string;
  /** Optional place to read further. */
  link?: { label: string; href: string };
}

export const faq: FaqEntry[] = [
  {
    question: 'What is Zeqou?',
    answer:
      'An independent software ecosystem: desktop applications written and maintained by one developer. Zeqou Harness is an AI workspace for agents, models, tools and MCP; ZeqouXChat is a desktop AI chat application; ZeqouXTraining is a local studio for training and fine-tuning models. Each app stands on its own, each lives in its own repository, and this site is the hub.',
  },
  {
    question: 'Is Zeqou free?',
    answer:
      'Yes. Every app is free to download and update, and nothing inside them is locked behind a payment. Development is paid for by optional donations — the Support page says where that money goes.',
    link: { label: 'Support', href: '/support' },
  },
  {
    question: 'Which platforms does Zeqou run on?',
    answer:
      'Windows, macOS and Linux. Windows gets an installer and, for most apps, a portable build. macOS gets .dmg and .zip builds for Apple Silicon and for Intel. Linux gets .AppImage and .deb builds for x64, and ZeqouXChat also publishes a .rpm. The Downloads page lists the exact files of the current release.',
    link: { label: 'Downloads', href: '/downloads' },
  },
  {
    question: 'Do I need API keys?',
    answer:
      'Only for cloud AI providers, and they are your own keys. Zeqou Harness connects to OpenAI, Anthropic, Google, OpenRouter, Ollama or a custom endpoint — a local endpoint needs no key at all. ZeqouXChat runs free local models out of the box and asks for a key only when you add a cloud provider. ZeqouXTraining needs none: training happens on your machine.',
  },
  {
    question: 'Can I use local models, for example with Ollama?',
    answer:
      'Yes. Zeqou Harness lists Ollama among its providers and accepts any custom endpoint. ZeqouXChat detects Ollama and also ships its own llama.cpp engine, so Ollama is optional there. ZeqouXTraining trains, evaluates and serves models on your own hardware.',
  },
  {
    question: 'Is Zeqou open source?',
    answer:
      'The source is available to read, but it is not open source in the OSI sense: the PolyForm Strict license permits any noncommercial use, including personal projects and noncommercial organisations, and does not permit distributing, changing or building on the code without permission. The License page links to the full text in each repository.',
    link: { label: 'License', href: '/license' },
  },
  {
    question: 'Why does Windows or macOS warn me when I open the installer?',
    answer:
      'The installers are not code-signed, so Windows SmartScreen and macOS Gatekeeper see an application from an unknown publisher. The warning is about the missing certificate, not about what the app does. Downloads → Installer warnings describes how to open an unsigned build on each system, and every file lists the SHA-256 the release reports, so you can check what you downloaded before running it.',
    link: { label: 'Installer warnings', href: '/downloads#installer-warnings' },
  },
  {
    question: 'How do I get new versions?',
    answer:
      'Every version is published as a release on GitHub and listed on the Changelog page. ZeqouXTraining checks its release channel at launch and can install an update itself; for Zeqou Harness and ZeqouXChat, download the newest build from the Downloads page.',
    link: { label: 'Changelog', href: '/changelog' },
  },
  {
    question: 'How do I report a bug?',
    answer:
      'Open an issue in the repository of the app — Mishaadevv/harness, Mishaadevv/xchat or Mishaadevv/xtraining — or in the site repository, Mishaadevv/zeqou. Mention the app version and your operating system; that is usually enough to reproduce it.',
    link: { label: 'GitHub', href: 'https://github.com/Mishaadevv' },
  },
];
