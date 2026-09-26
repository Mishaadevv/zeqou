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
          'Zeqou Harness/ — Electron app, v1.4.0, appId ai.zeqou.harness.',
          'ZeqouXchat/ — Tauri 2 app, v0.3.1, plus AIens/ Python experiments and dataset_ru.json.',
          'ZeqouXTraining/ — Electron shell + pure-Python engine, v2.0.0, appId ai.zeqou.xtraining.',
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
    version: '1.4.0',
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
          'Agent plan: for multi-step work the agent writes its steps with the todo tool and keeps them updated. The plan is a quiet card at the end of the chat it belongs to, with a progress line and a done count, and it is read-only — the user has nothing to tick, add or reorder, because the assistant wrote this plan, not them.',
          'A plan never outlives its run: if the run is stopped, fails or hits the step limit, the steps it never finished are dropped with it. What it completed stays in the chat as a record.',
          'Agent questions: the ask_user tool lets the agent stop and ask instead of guessing. The question appears as a card in the chat and is answered by clicking an option or typing an answer, and the run continues with it.',
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
          code: 'npm install\nnpm start        # run the Electron app\nnpm run dev      # run with --dev flag\nnpm run smoke    # boot the app, walk every page, exercise the agent tools',
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
    version: '0.3.1',
    stack: [
      'Tauri 2',
      'React 19',
      'TypeScript',
      'Tailwind',
      'highlight.js',
      'KaTeX',
      'llama.cpp (built-in engine)',
      'Rust',
    ],
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
          'Real-time context window: the exact token count the server reports, not an estimate.',
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
      'Train, fine-tune, evaluate and serve AI models on your own hardware. LoRA, QLoRA, SFT, full fine-tune — or train from scratch. No YAML.',
    githubUrl: 'https://github.com/Mishaadevv/xtraining',
    websiteRoute: '/apps/xtraining',
    version: '2.0.0',
    stack: [
      'Electron 33',
      'React 19',
      'TypeScript',
      'Python 3.10 – 3.13',
      'pure-Python engine',
      'transformers + PEFT (optional)',
    ],
    blocks: [
      {
        heading: 'What it is',
        paragraphs: [
          'ZeqouXTraining (repo: xtraining, appId ai.zeqou.xtraining) is the training layer of the ecosystem: pick a model, point at a dataset, choose a method, press start — then watch real loss, resume from a checkpoint, evaluate the result and serve it locally. No YAML, no shell scripts.',
          'Version 2.0 is a rebuilt application: the engine is pure Python with no required third-party dependency, the desktop shell is Electron 33 + React 19, and installers are signed and self-updating. License: PolyForm Strict 1.0.0. Tagging v* builds Windows, macOS and Linux in parallel via GitHub Actions.',
        ],
      },
      {
        heading: 'Two training backends',
        paragraphs: ['Availability is detected at runtime, never assumed:'],
        list: [
          'tiny — needs nothing but the Python standard library. Trains small transformers from scratch and continues them, with its own BPE tokenizer.',
          'hf — needs PyTorch, transformers and peft (plus bitsandbytes for QLoRA). Runs real Hugging Face checkpoints with LoRA, QLoRA, SFT and full fine-tune, evaluation and streaming generation.',
        ],
      },
      {
        heading: 'Capabilities',
        paragraphs: ['Full list from README:'],
        list: [
          'Import from Hugging Face or local folder, inspect weights, config and tokenizer before committing.',
          'Fine-tuning, LoRA, QLoRA, SFT via transformers + peft — or train a small transformer from scratch with no base model.',
          'Datasets: JSON, JSONL, CSV, TXT, Parquet, folders of shards; inspect, clean, split and export.',
          'Validation that reports field mapping, duplicates, empty rows and over-length samples.',
          'Real hardware detection (CPU, nvidia-smi, torch.cuda), VRAM estimates labelled as estimates, and pre-flight blockers collected in one place.',
          'Resume, continue training, continued pretraining and adapter continuation — kept distinct, with a lineage.json for every model.',
          'Live loss and learning-rate charts, logs, checkpoints, cooperative stop and pause.',
          'Evaluation, a playground for the model you just trained, and run-to-run comparison.',
          'Quantization planning, precision conversion, adapter discovery and merge; export with a model card.',
          'A local OpenAI-compatible inference server, bound to loopback unless you change it.',
          'BPE tokenizer training and statistics, in the app and from the CLI.',
        ],
      },
      {
        heading: 'Honest by design',
        paragraphs: [
          'No fake progress and no invented GPU numbers. Every memory or size figure that is a prediction is labelled Estimated; when a feature cannot work on this machine — no CUDA, no PyTorch, no bitsandbytes, no converter for these weights — the interface says exactly what is missing instead of drawing a simulated result.',
          'The ML runtime (torch, transformers, peft, accelerate) is not bundled: it is machine-specific and several gigabytes. The app discovers the interpreters that exist, explains which one can run PyTorch, and installs only when you ask — into its own environment inside the workspace, never into the system Python.',
        ],
        code: {
          lang: 'bash',
          code: 'python -m zxtrain.cli --help\npython -m zxtrain.cli hardware.detect\npython -m zxtrain.cli serve        # the Playground sidecar',
        },
      },
      {
        heading: 'Develop & verify',
        paragraphs: [
          'The engine has its own test suite and the shell is tested against the real application, not a mock: every number below is a gate that must pass before a release is built.',
        ],
        code: {
          lang: 'bash',
          code: 'npm install\nnpm run dev            # Vite + Electron, watched\nnpm run verify         # typecheck + 29 engine tests + 17 smoke checks\nnpm run launch         # boots the real app and walks all 19 pages (30 checks)\nnpm run pack           # unpacked build in release/\nnpm run verify:packed  # starts the packed executable (14 checks)\nnpm run verify:update  # drives a real update channel (15 checks)\nnpm run dist:signed    # installers, signed with a local certificate',
        },
      },
      {
        heading: 'Architecture',
        paragraphs: [
          'The Electron main process owns the window, settings, the workspace and the job manager (lib/paths, store, jobs, python, sidecar, updater) and spawns the Python engine (python/zxtrain) as a child process — a training crash can never take the interface down. The protocol is one JSON line per event on stdout with an @@event stream for progress; anything unexpected crosses as {code, message, hint, detail}.',
          'Inside the engine, cli.py is the single entry point, trainer.py owns the job contract, pre-flight, run loop, lineage and recovery, and backends/ holds tiny and hf. Models, datasets, tokenizers, precision, adapters, hardware, storage and the inference server are separate modules, so a backend can be added without touching the interface.',
        ],
      },
      {
        heading: 'Updates and signing',
        paragraphs: [
          'Installed builds update themselves from the release channel on GitHub. Settings → Updates shows the installed version, the channel, the last check and the updater log, and can check, download and restart into an update — a download happens only when asked for and an install only on an explicit restart. The download is checked against its SHA-512 and against the publisher named in the build; an update that cannot be verified is refused rather than installed.',
          'Installer builds can be signed with a code-signing certificate, and the publisher name recorded in the build has to match that certificate — otherwise the app refuses its own updates as unsigned by someone else. There is no certificate configured for the published build yet, so the installers on the release page are unsigned and Windows warns about an unknown publisher; the local build script signs with a self-signed certificate when asked to.',
        ],
      },
      {
        heading: 'Data & privacy',
        paragraphs: ['Everything user-generated lives in the workspace folder you choose — models, datasets, checkpoints and logs are ordinary files you can copy or move with any file manager:'],
        list: [
          'models/, datasets/, jobs/ (spec, status, events, metrics, checkpoints, lineage, console log), exports/, runtime/, logs/.',
          'registry.json — the model and dataset library, projects, servers and evaluations.',
          'Settings and caches live in the app profile; ZEQOUX_USER_DATA moves the whole profile for a portable install.',
          'Deleting anything requires an explicit confirmation, and running jobs are protected.',
          'Context isolation on, node integration off, sandbox on. The renderer only talks through the preload bridge.',
          'The only request that leaves the machine on its own is the update check at launch, which can be turned off.',
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
