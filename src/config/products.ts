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

import { versions } from '../data/versions';
import { asset } from '../lib/paths';

export type ProductStatus = 'available' | 'coming-soon';

/** A real screenshot, with the text it needs to stand on a page. */
export interface ProductScreenshot {
  /** Image URL (public/assets/...), built so it survives any route depth. */
  src: string;
  /** What the image shows, for anyone who cannot see it. */
  alt: string;
  /** Short line under the image on a product page. */
  caption?: string;
}

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
  /** Version shipped in the app's own repository — see src/data/versions.ts. */
  version: string;
  /** Platforms with an official download. */
  platforms: string[];
  /** Icon URL (public/assets/...), built so it survives any route depth. */
  icon: string;
  /**
   * Real screenshots, in the order a page should show them. Empty until they
   * exist — never a mock dressed up as one.
   */
  screenshots: ProductScreenshot[];
  /** Promo video URL (public/assets/...), if one exists. */
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
    version: versions.harness,
    platforms: ['Windows', 'macOS', 'Linux'],
    icon: asset('assets/apps/harness/icon.png'),
    screenshots: [
      {
        src: asset('assets/apps/harness/chat.png'),
        alt: 'Zeqou Harness chat view as a new install opens it, with the conversation area and composer',
        caption: 'Chat, as a new install opens it',
      },
      {
        src: asset('assets/apps/harness/tools.png'),
        alt: 'The Tools view listing the built-in tools that ship with Zeqou Harness',
        caption: 'The tools that ship with the app',
      },
      {
        src: asset('assets/apps/harness/mcp-server.png'),
        alt: 'Adding an MCP server in Zeqou Harness: name, transport, URL or command',
        caption: 'Adding an MCP server — name, transport, address',
      },
      {
        src: asset('assets/apps/harness/providers.png'),
        alt: 'Settings, Providers: the provider list with its note that keys never leave the device',
        caption: 'Providers — and where your keys are entered',
      },
    ],
    video: asset('assets/videos/harness.mp4'),
    videoSecondary: asset('assets/videos/harness-extra.mp4'),
    downloadUrl: 'https://github.com/Mishaadevv/harness/releases',
    githubUrl: 'https://github.com/Mishaadevv/harness',
    docsUrl: 'https://github.com/Mishaadevv/harness#readme',
    capabilities: ['Agents', 'Models', 'Tools', 'MCP', 'Memory', 'Projects', 'Agent plans', 'Agent questions'],
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
      'A desktop AI chat application built around modern AI providers and developer workflows. Streaming chat with code, files and formulas, a Hub of 121 providers and 423 models, and free local models that run on your own machine.',
    status: 'available',
    version: versions.xchat,
    platforms: ['Windows', 'macOS', 'Linux'],
    icon: asset('assets/apps/xchat/icon.png'),
    screenshots: [
      {
        src: asset('assets/apps/xchat/chat.png'),
        alt: 'ZeqouXChat chat window with a conversation and message input',
      },
      {
        src: asset('assets/apps/xchat/workspace.png'),
        alt: 'ZeqouXChat workspace with navigation sidebar and chat',
      },
      {
        src: asset('assets/apps/xchat/hub.png'),
        alt: 'ZeqouXChat provider Hub listing AI providers and models',
      },
    ],
    downloadUrl: 'https://github.com/Mishaadevv/xchat/releases',
    githubUrl: 'https://github.com/Mishaadevv/xchat',
    docsUrl: 'https://github.com/Mishaadevv/xchat#readme',
    capabilities: [
      'Streaming chat',
      'Code, files, KaTeX',
      'Provider Hub',
      'Local models',
      'Built-in engine',
      'Real-time context',
    ],
    providers: [
      'OpenAI',
      'Anthropic',
      'Google',
      'xAI',
      'Mistral',
      'DeepSeek',
      'OpenRouter',
      'Ollama',
      'llama.cpp',
      'Custom endpoints',
    ],
  },
  {
    name: 'ZeqouXTraining',
    brand: ['ZEQOU', 'XTRAINING'],
    slug: 'xtraining',
    tagline: 'Train. Tune. Test. Build.',
    description:
      'A desktop workspace for training, fine-tuning, evaluating and serving AI models on your own hardware.',
    longDescription:
      'A local-first training studio. Pick a model and a dataset, choose LoRA, QLoRA, SFT, a full fine-tune — or train a small transformer from scratch with nothing but Python. Runs are real processes with real gradients, checkpoints you can resume, and a lineage tree you can inspect. Models, datasets and logs are ordinary files in a workspace folder you choose; nothing is uploaded anywhere.',
    status: 'available',
    version: versions.xtraining,
    platforms: ['Windows', 'macOS', 'Linux'],
    icon: asset('assets/apps/xtraining/icon.png'),
    screenshots: [],
    downloadUrl: 'https://github.com/Mishaadevv/xtraining/releases/tag/v2.0.0',
    githubUrl: 'https://github.com/Mishaadevv/xtraining',
    docsUrl: 'https://github.com/Mishaadevv/xtraining#readme',
    capabilities: [
      'Train from scratch',
      'LoRA',
      'QLoRA',
      'SFT',
      'Full fine-tune',
      'Resume a run',
      'Continue training',
      'Lineage tree',
      'Dataset validation',
      'BPE tokenizer training',
      'Evaluation',
      'Playground',
      'Merge adapters',
      'Local inference server',
      'Self-updating',
    ],
    providers: [
      'Hugging Face',
      'Local folders',
      'safetensors',
      'GGUF',
      'JSONL / CSV / Parquet',
      'transformers + PEFT',
      'PyTorch (optional)',
    ],
  },
  {
    name: 'ZeqouX3D',
    brand: ['ZEQOU', 'X3D'],
    slug: 'x3d',
    tagline: 'Build worlds. From scratch.',
    description: 'A 3D game engine and editor written from scratch in C++20 on Direct3D 12.',
    longDescription:
      'A 3D game engine and editor written from scratch — no third-party libraries, only Windows and its SDK. A Direct3D 12 renderer with physical sky, shadows and realistic water, a UE5/Unity-style editor, its own scripting language with hot reload, character controllers, prefabs, material graphs and project templates. In active development; the source is on GitHub.',
    status: 'coming-soon',
    version: versions.x3d,
    platforms: ['Windows'],
    icon: asset('assets/apps/x3d/icon.png'),
    screenshots: [
      {
        src: asset('assets/apps/x3d/water.jpg'),
        alt: 'ZeqouX3D editor showing the Water template: an island with a pier, waves and a low sun over the sea',
        caption: 'The Water template, in the editor',
      },
      {
        src: asset('assets/apps/x3d/script-editor.jpg'),
        alt: 'The ZeqouX3D Script Editor with syntax-colored ZeqouScript code next to the Details panel with script properties',
        caption: 'ZeqouScript in the built-in Script Editor',
      },
      {
        src: asset('assets/apps/x3d/project-browser.jpg'),
        alt: 'The ZeqouX3D Project Browser: template grid with Blank, Sample Scene, First Person, Third Person and Water, and project settings',
        caption: 'New Project: templates, language, Starter Content, documentation',
      },
      {
        src: asset('assets/apps/x3d/third-person.jpg'),
        alt: 'The Third Person template playing in the editor: a character on a playground with stairs and platforms',
        caption: 'The Third Person template, playing',
      },
      {
        src: asset('assets/apps/x3d/brush-tool.jpg'),
        alt: 'The Brush tool settings panel in the ZeqouX3D editor over the Sponza scene',
        caption: 'The Brush tool',
      },
    ],
    downloadUrl: 'https://github.com/Mishaadevv/x3d',
    githubUrl: 'https://github.com/Mishaadevv/x3d',
    docsUrl: 'https://github.com/Mishaadevv/x3d#readme',
    capabilities: [
      'Direct3D 12',
      'Render graph',
      'Clustered PBR',
      'Shadows + GTAO',
      'Physical sky',
      'Realistic water',
      'UE5-style editor',
      'ZeqouScript',
      'Hot reload',
      'Play-in-Editor',
      'Character controller',
      'Prefabs',
      'Material graphs',
      'Brush tool',
      'Project templates',
    ],
    providers: ['Windows 10 / 11', 'Intel / AMD / NVIDIA (D3D12)', 'glTF / GLB / OBJ', 'PNG / JPEG / DDS'],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function availableProducts(): Product[] {
  return products.filter((product) => product.status === 'available');
}
