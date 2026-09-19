/**
 * Single source of truth for every Zeqou application.
 *
 * To add a new app, append one entry here. Home, Apps, footer and
 * updates pick it up automatically. For a full product page, add
 * `src/pages/<Slug>.tsx` and a `/apps/<slug>` route in `src/app/App.tsx`.
 *
 * NOTE: download / repository / documentation URLs are placeholders.
 * Replace them with the real links when available.
 */

export type ProductStatus = 'available' | 'coming-soon';

export interface Product {
  /** Full product name, e.g. "Zeqou Harness". */
  name: string;
  /** Brand line, e.g. ["ZEQOU", "HARNESS"]. */
  brand: [string, string];
  /** URL slug: /apps/<slug>. */
  slug: string;
  /** Short product tagline. */
  tagline: string;
  /** One-line catalogue description. */
  description: string;
  /** Longer paragraph for the product page hero. */
  longDescription: string;
  status: ProductStatus;
  version: string;
  /** Platforms with an official download. */
  platforms: string[];
  /** Relative path to the product icon in public/. */
  icon: string;
  /** Relative paths to screenshots in public/. Empty until shipped. */
  screenshots: string[];
  /** Relative path to the promo video in public/, if one exists. */
  video?: string;
  /** Optional second video, shown as an extra preview on the product page. */
  videoSecondary?: string;
  downloadUrl: string;
  githubUrl: string;
  docsUrl: string;
  /** Short capability list shown on the product page. */
  capabilities: string[];
  /** Providers / integrations the product works with. */
  providers: string[];
}

export const products: Product[] = [
  {
    name: 'Zeqou Harness',
    brand: ['ZEQOU', 'HARNESS'],
    slug: 'harness',
    tagline: 'Build. Connect. Automate.',
    description: 'An AI workspace for developers, agents, models, tools and MCP.',
    longDescription:
      'An AI workspace for developers, agents, models, tools, memory and MCP. Connect providers, orchestrate agents and keep project context in one focused place.',
    status: 'available',
    version: '1.0',
    platforms: ['Windows', 'macOS', 'Linux'],
    icon: './assets/apps/harness/icon.png',
    screenshots: [],
    video: './assets/videos/harness.mp4',
    videoSecondary: './assets/videos/harness-extra.mp4',
    // TODO: replace with the real Windows installer / release link.
    downloadUrl: 'https://github.com/Mishaadevv/harness/releases',
    githubUrl: 'https://github.com/Mishaadevv/harness',
    docsUrl: 'https://github.com/Mishaadevv/harness#readme',
    capabilities: ['Agents', 'Models', 'Tools', 'MCP', 'Memory', 'Projects'],
    providers: ['OpenAI', 'Anthropic', 'Google', 'OpenRouter', 'Ollama', 'Custom endpoints'],
  },
  {
    name: 'ZeqouXChat',
    brand: ['ZEQOU', 'XCHAT'],
    slug: 'xchat',
    tagline: 'Chat with modern AI.',
    description:
      'A desktop AI chat application built around modern AI providers and developer workflows.',
    longDescription:
      'A desktop AI chat application built around modern AI providers and developer workflows. Fast conversations, code and file support, and a workspace that adapts to you.',
    status: 'available',
    version: '1.0',
    platforms: ['Windows', 'macOS', 'Linux'],
    icon: './assets/apps/xchat/icon.png',
    screenshots: [
      './assets/apps/xchat/chat.png',
      './assets/apps/xchat/workspace.png',
      './assets/apps/xchat/hub.png',
    ],
    downloadUrl: 'https://github.com/Mishaadevv/xchat/releases',
    githubUrl: 'https://github.com/Mishaadevv/xchat',
    docsUrl: 'https://github.com/Mishaadevv/xchat#readme',
    capabilities: ['Modern chat', 'Code and files', 'Provider choice', 'Customization'],
    providers: ['OpenAI', 'Anthropic', 'Google', 'OpenRouter', 'Ollama', 'Custom endpoints'],
  },
  {
    name: 'ZeqouXTraining',
    brand: ['ZEQOU', 'XTRAINING'],
    slug: 'xtraining',
    tagline: 'Fine-tune models. No guesswork.',
    description:
      'A desktop workspace for training and fine-tuning AI models on your own hardware.',
    longDescription:
      'A desktop workspace for training and fine-tuning AI models. Pick a model, point at a dataset, choose a method — LoRA, QLoRA or SFT — and the app checks the hardware, estimates VRAM and runs it, with live charts, checkpoints and a finished adapter you can export.',
    status: 'available',
    version: '0.1',
    platforms: ['Windows', 'macOS', 'Linux'],
    icon: './assets/apps/xtraining/icon.png',
    screenshots: [],
    // No tagged build yet — this page fills in once v0.1.0 is tagged.
    downloadUrl: 'https://github.com/Mishaadevv/xtraining/releases',
    githubUrl: 'https://github.com/Mishaadevv/xtraining',
    docsUrl: 'https://github.com/Mishaadevv/xtraining#readme',
    capabilities: [
      'LoRA',
      'QLoRA',
      'SFT',
      'Dataset validation',
      'GPU detection',
      'VRAM estimate',
      'Live charts',
      'Export and merge',
    ],
    providers: [
      'Hugging Face',
      'Local models',
      'JSON',
      'JSONL',
      'CSV',
      'Parquet',
      'transformers',
      'peft',
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function availableProducts(): Product[] {
  return products.filter((product) => product.status === 'available');
}
