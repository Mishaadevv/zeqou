/**
 * Documentation content for the Zeqou ecosystem only.
 *
 * Single source of truth for /docs routes. Edit text here —
 * Docs.tsx (index) and DocArticle.tsx (article) render it automatically.
 * No design changes needed.
 */

export interface DocCodeBlock {
  lang: string;
  code: string;
}

export interface DocBlock {
  heading: string;
  paragraphs: string[];
  list?: string[];
  code?: DocCodeBlock;
}

export interface DocPage {
  slug: string;
  label: string;
  title: string;
  description: string;
  githubUrl: string;
  websiteRoute?: string;
  version: string;
  stack: string[];
  blocks: DocBlock[];
}

export const docs: DocPage[] = [
  {
    slug: 'overview',
    label: 'Overview',
    title: 'Zeqou ecosystem overview',
    description:
      'What Zeqou is, what belongs to it, and where everything lives on GitHub.',
    githubUrl: 'https://github.com/Mishaadevv',
    version: '2026',
    stack: ['GitHub', 'GitHub Pages', 'Desktop apps', 'AI tools'],
    blocks: [
      {
        heading: 'What is Zeqou?',
        paragraphs: [
          'Zeqou is an independent software ecosystem built and maintained by MihaDev (GitHub: Mishaadevv). Different applications, one standard: each product solves one problem well, works standalone, and belongs to one connected family.',
          'The public hub is https://mishaadevv.github.io/zeqou/ — this site. Source: https://github.com/Mishaadevv/zeqou. It is a static React + TypeScript + Vite build with hash routing, deployed to GitHub Pages via GitHub Actions.',
        ],
      },
      {
        heading: 'All Zeqou repositories (Mishaadevv)',
        paragraphs: [
          'Zeqou lives in 4 repos. Two more repos on the same GitHub (SlimeLauncher, MineDecompiler) are separate Minecraft tools — not part of Zeqou and not covered here.',
        ],
        list: [
          'zeqou — official ecosystem website (TypeScript, React 19 + Vite). This site + its documentation.',
          'harness — Zeqou Harness, premium desktop workspace for AI models and agents (JavaScript, Electron).',
          'xchat — ZeqouXChat, desktop AI chat, Tauri 2 + React 19 (TypeScript).',
          'xtraining — ZeqouXTraining, desktop app for training and fine-tuning AI models (TypeScript + Python).',
        ],
      },
      {
        heading: 'Local projects in “Zeqou Ecosystem” folder',
        paragraphs: [
          'On this machine the folder “Zeqou Ecosystem” contains 4 checkouts that mirror the Zeqou repos:',
        ],
        list: [
          'Zeqou/ — website (npm run dev, npm run build). Version 0.0.0.',
          'Zeqou Harness/ — Electron app, v1.2.0, appId ai.zeqou.harness.',
          'ZeqouXchat/ — Tauri 2 app, v0.2.0, plus AIens/ Python experiments and dataset_ru.json.',
          'ZeqouXTraining/ — Electron + Python app, v0.3.0, appId ai.zeqou.xtraining.',
        ],
      },
      {
        heading: 'How to navigate these docs',
        paragraphs: [
          'Each product has its own page: install, usage, architecture, and honest limits. Start with the app you use, or read Harness → XChat → XTraining in order — that is the daily workflow the ecosystem was designed for.',
        ],
      },
    ],
  },
  {
    slug: 'harness',
    label: 'Harness',
    title: 'Zeqou Harness docs',
    description:
      'Premium desktop workspace for AI models and agents. Connect providers, orchestrate agents, keep project context in one place.',
    githubUrl: 'https://github.com/Mishaadevv/harness',
    websiteRoute: '/apps/harness',
    version: '1.2.0',
    stack: ['Electron 33', 'JavaScript', 'OpenAI', 'Anthropic', 'Google', 'OpenRouter', 'Ollama', 'MCP'],
    blocks: [
      {
        heading: 'What it is',
        paragraphs: [
          'Zeqou Harness (repo: harness, package: zeqou-harness, appId ai.zeqou.harness) is the agent and model workspace of the ecosystem. Local-first Electron desktop app for Windows, macOS and Linux.',
          'Part of the Zeqou ecosystem: https://mishaadevv.github.io/zeqou/#/apps/harness. License: PolyForm Strict 1.0.0 — viewing and personal use allowed, copying / modification / redistribution need permission.',
        ],
      },
      {
        heading: 'Features',
        paragraphs: ['What the README guarantees:'],
        list: [
          'Agent and model workspace on desktop.',
          'Tools, memory and MCP support.',
          'Providers: OpenAI, Anthropic, Google, OpenRouter, Ollama and custom endpoints.',
        ],
      },
      {
        heading: 'Install & run',
        paragraphs: [
          'No build step for daily use. Install dependencies once, then start Electron.',
        ],
        code: {
          lang: 'bash',
          code: 'npm install\nnpm start        # run the Electron app\nnpm run dev      # run with --dev flag',
        },
      },
      {
        heading: 'Build a release',
        paragraphs: ['electron-builder produces NSIS installer + portable on Windows, dmg/zip on macOS, AppImage/deb on Linux.'],
        code: {
          lang: 'bash',
          code: 'npm run pack     # unpacked build\nnpm run dist     # Windows installer (NSIS) + portable',
        },
      },
      {
        heading: 'Project layout',
        paragraphs: ['Minimal Electron structure — easy to audit:'],
        list: [
          'main.js — Electron main process.',
          'preload.js — secure bridge to renderer.',
          'renderer/ — UI.',
          'ico.png — app icon, also used for win/mac/linux targets.',
        ],
      },
    ],
  },
  {
    slug: 'xchat',
    label: 'XChat',
    title: 'ZeqouXChat docs',
    description:
      'Desktop AI chat with streaming, code highlighting, Markdown, KaTeX. Tauri 2 + React 19, small footprint.',
    githubUrl: 'https://github.com/Mishaadevv/xchat',
    websiteRoute: '/apps/xchat',
    version: '0.2.0',
    stack: ['Tauri 2', 'React 19', 'TypeScript', 'Tailwind', 'highlight.js', 'KaTeX', 'Rust'],
    blocks: [
      {
        heading: 'What it is',
        paragraphs: [
          'ZeqouXChat (repo: xchat, package: zeqouxchat) is the conversation layer of Zeqou. Fast desktop chat with provider Hub: 121 providers and 423 models — OpenAI, Anthropic, Google, xAI, Mistral, DeepSeek and more.',
          'Built with Tauri 2 + React 19 for a small binary and native feel. License: PolyForm Strict 1.0.0.',
        ],
      },
      {
        heading: 'Features',
        paragraphs: ['Confirmed from README + site pages:'],
        list: [
          'Streaming responses, modern chat interface.',
          'Code highlighting (highlight.js), Markdown, GFM, KaTeX formulas.',
          'Providers: OpenAI, Anthropic, Google, OpenRouter, Ollama, custom endpoints.',
          'Workspace: Chats, Projects, Memory, Downloads, Extensions, Settings in one sidebar.',
          'Screenshots in repo: chat.png, workspace.png, hub.png.',
        ],
      },
      {
        heading: 'Install & run',
        paragraphs: ['Requires Node.js + Rust toolchain (https://rustup.rs/).'],
        code: {
          lang: 'bash',
          code: 'npm install\nnpm run tauri dev',
        },
      },
      {
        heading: 'Build',
        paragraphs: ['Produces a native Tauri bundle per OS.'],
        code: { lang: 'bash', code: 'npm run tauri build' },
      },
      {
        heading: 'Free local models, no Ollama needed',
        paragraphs: [
          'On first launch XChat suggests five free GGUF models — MiniCPM5 2B, LFM2.5 8B-A1B, OmniCoder 9B, Gemma 4 E2B, K2-Horizon 7B. Each card shows the download size, the RAM it needs, and whether your machine fits it (CPU, RAM, GPU and Ollama presence are probed). One button downloads, the screen can be skipped and reopened later from Downloads → Recommended or the round button in Settings.',
          'Downloads stream straight to disk with resume and retry, and the app picks the Q4_K_M quant automatically. No Ollama or LM Studio install is required: XChat ships a built-in llama-server engine — it downloads itself on first use (CUDA build for NVIDIA, CPU otherwise) and runs the model on localhost. If the download fails, a manual-zip fallback is offered.',
        ],
      },
      {
        heading: 'Local context size',
        paragraphs: [
          'For local providers (Ollama, llama.cpp server, LM Studio and friends) the message box shows a context selector — 4K to 128K. It sets the context the chat is measured against, and for the built-in engine it restarts the server with the new size. Cloud models keep their own fixed sizes.',
        ],
      },
      {
        heading: 'AIens folder (experimental)',
        paragraphs: [
          'AIens/ contains experimental Python tools for dataset preparation and model training. See requirements-ml.txt inside. The repo root also ships dataset_ru.json (Russian dataset) and preview.txt.',
          'Files МОИ КЛЮЧИ.txt and ЧТО НАДО СДЕЛАТЬ.txt are local notes — they are git-ignored upstream, do not commit keys.',
        ],
      },
    ],
  },
  {
    slug: 'xtraining',
    label: 'XTraining',
    title: 'ZeqouXTraining docs',
    description:
      'Train and fine-tune AI models on your hardware. LoRA, QLoRA, SFT, full fine-tune — or train from scratch. No YAML.',
    githubUrl: 'https://github.com/Mishaadevv/xtraining',
    websiteRoute: '/apps/xtraining',
    version: '0.3.0',
    stack: ['Electron 33', 'React 19', 'Python', 'torch', 'transformers', 'peft', 'Hugging Face'],
    blocks: [
      {
        heading: 'What it is',
        paragraphs: [
          'ZeqouXTraining (repo: xtraining, appId ai.zeqou.xtraining) is the training layer. Pick a model, point at a dataset, choose a method, press start. No YAML, no shell scripts, no guessing whether the run fits in memory.',
          'License: PolyForm Strict 1.0.0. Release flow: tagging v* builds Windows, Linux and macOS in parallel via GitHub Actions.',
        ],
      },
      {
        heading: 'Capabilities',
        paragraphs: ['Full list from README:'],
        list: [
          'Import from Hugging Face or local folder, inspect before committing.',
          'Fine-tuning, LoRA, QLoRA, SFT via transformers + peft.',
          'Train from scratch: micro / tiny / small presets or custom transformer, no base model.',
          'Datasets: JSON, JSONL, CSV, TXT, Parquet, folder of shards, Hugging Face Hub.',
          'Validation: field mapping, duplicates, empty rows, over-length samples.',
          'Real GPU detection (nvidia-smi + torch.cuda), VRAM estimation, pre-flight warnings.',
          'Auto parameter selection with reasons; Simple (4 settings) vs Advanced (full control) mode.',
          'Start / stop / pause / resume / continue from checkpoint.',
          'Live loss + LR charts, GPU/VRAM trace, logs, checkpoints.',
          'Export adapter or merge into base model; built-in playground.',
          'One-click ML runtime install (Settings → Environment) with live pip output.',
        ],
      },
      {
        heading: 'Honest-by-design contract',
        paragraphs: [
          'No fake progress, no invented GPU numbers. Training runtime (torch, transformers, peft, accelerate) is NOT bundled — machine-specific, several GB. Without it the backend refuses with backend_unavailable and lists what is missing.',
        ],
        code: {
          lang: 'bash',
          code: 'python -m zeqouxtraining.cli env-check',
        },
      },
      {
        heading: 'Develop & verify',
        paragraphs: ['199 backend tests (stdlib only) + 54 end-to-end smoke checks in a real Electron main process.'],
        code: {
          lang: 'bash',
          code: 'npm install\nnpm run dev      # Vite + Electron, watched\nnpm run test:py    # 199 backend tests\nnpm run smoke      # 54 e2e checks, throwaway temp dir\nnpm run verify     # typecheck + both',
        },
      },
      {
        heading: 'Architecture',
        paragraphs: [
          'Electron main process (lib/paths, store, hardware, python, jobs, registry, exporter, inference, ipc) spawns the Python backend (python/zeqouxtraining/) as a child process — a training crash can never take the UI down. Protocol: one JSON event per line on stdout, everything else on stderr. Errors cross as {code, message, hint, traceback}.',
          'Pluggable backends: subclass TrainingBackend (backends/base.py), register in backends/registry.py — Unsloth, TRL, remote cluster or ONNX slot in without UI changes.',
        ],
      },
      {
        heading: 'Data & privacy',
        paragraphs: ['Everything user-generated lives in Electron userData:'],
        list: [
          'settings.json, secrets.json, datasets.json, models.json, projects.json, runs.json.',
          'runs/<runId>/ — job.json, training.log, stderr.log, checkpoints, weights.',
          'Datasets are referenced, never copied. HF token encrypted via OS keychain or marked insecure: true.',
          'Context isolation on, node integration off, sandbox on. Renderer only talks via preload bridge.',
        ],
      },
    ],
  },
  {
    slug: 'website',
    label: 'Website',
    title: 'Zeqou website docs',
    description:
      'This site. React + TypeScript + Vite, hash routing, zero CSS deps, auto-deploy to GitHub Pages.',
    githubUrl: 'https://github.com/Mishaadevv/zeqou',
    websiteRoute: '/',
    version: '0.0.0',
    stack: ['React 19', 'TypeScript', 'Vite 8', 'react-router-dom', 'GitHub Actions', 'GitHub Pages'],
    blocks: [
      {
        heading: 'What it is',
        paragraphs: [
          'Repo zeqou is the central hub: Home, Apps catalogue, product pages (Harness / XChat / XTraining), Updates feed, About — and now Docs. English-only, dark-first, static build.',
          'Live at https://mishaadevv.github.io/zeqou/. Deploy: push to main → .github/workflows/deploy.yml builds dist/ → GitHub Pages (source: GitHub Actions). vite.config.ts uses base: \'./\' so relative assets work on user and project sites.',
        ],
      },
      {
        heading: 'Develop',
        paragraphs: ['Standard Vite flow:'],
        code: { lang: 'bash', code: 'npm install\nnpm run dev\nnpm run build\nnpm run preview' },
      },
      {
        heading: 'Add a new application',
        paragraphs: ['Edit one file — src/config/products.ts — and append an entry. Home, Apps, footer and updates pick it up automatically. For a full page add src/pages/Next.tsx + route /apps/next in src/app/App.tsx.'],
        code: {
          lang: 'ts',
          code: "{\n  name: 'Zeqou Next',\n  slug: 'next',\n  status: 'coming-soon',\n  version: '0.1',\n  // ...\n}",
        },
      },
      {
        heading: 'Edit content without touching design',
        paragraphs: ['Content is decoupled from components:'],
        list: [
          'Products / downloads: src/config/products.ts.',
          'Global links / tagline: src/config/site.ts.',
          'Updates feed: src/data/updates.ts.',
          'Docs articles: src/data/docs.ts (this file).',
        ],
      },
      {
        heading: 'Brand assets',
        paragraphs: ['All in public/:'],
        list: [
          'Master mark: public/assets/branding/zeqou-x.png.',
          'App icons: public/assets/apps/{harness,xchat,xtraining}/icon.png.',
          'Favicon / touch / OG: public/favicon.png, apple-touch-icon.png, og.png.',
          'Harness promo: public/assets/videos/harness.mp4.',
        ],
      },
    ],
  },
];

export function getDoc(slug: string): DocPage | undefined {
  return docs.find((doc) => doc.slug === slug);
}
