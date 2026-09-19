/**
 * Documentation content for the whole Zeqou ecosystem + GitHub presence.
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
        heading: 'All GitHub repositories (Mishaadevv — 6 repos)',
        paragraphs: [
          'GitHub user page: https://github.com/Mishaadevv. Every repo below is public.',
        ],
        list: [
          'zeqou — official ecosystem website (TypeScript, React 19 + Vite). This site + its documentation.',
          'harness — Zeqou Harness, premium desktop workspace for AI models and agents (JavaScript, Electron).',
          'xchat — ZeqouXChat, desktop AI chat, Tauri 2 + React 19 (TypeScript).',
          'xtraining — ZeqouXTraining, desktop app for training and fine-tuning AI models (TypeScript + Python).',
          'SlimeLauncher — cozy Minecraft launcher, fast and slime-themed (TypeScript, Electron). 1 star.',
          'MineDecompiler — lightweight local-first Minecraft decompiler, standalone tool (Java, MIT). 1 star.',
        ],
      },
      {
        heading: 'Local projects in “Zeqou Ecosystem” folder',
        paragraphs: [
          'On this machine the folder “Zeqou Ecosystem” contains 4 checkouts that mirror the first 4 GitHub repos:',
        ],
        list: [
          'Zeqou/ — website (npm run dev, npm run build). Version 0.0.0.',
          'Zeqou Harness/ — Electron app, v1.2.0, appId ai.zeqou.harness.',
          'ZeqouXchat/ — Tauri 2 app, v0.2.0, plus AIens/ Python experiments and dataset_ru.json.',
          'ZeqouXTraining/ — Electron + Python app, v0.3.0, appId ai.zeqou.xtraining.',
          'SlimeLauncher and MineDecompiler exist only on GitHub — no local checkout was found.',
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
  {
    slug: 'slimelauncher',
    label: 'SlimeLauncher',
    title: 'SlimeLauncher docs',
    description:
      'Cozy Minecraft launcher — any version c0.0.11 → 26.x, auto Java, 1-click mods, skins like TLauncher, LAN + Network play.',
    githubUrl: 'https://github.com/Mishaadevv/SlimeLauncher',
    version: '1.18.4',
    stack: ['Electron 32', 'TypeScript', 'Node 20+', 'Modrinth', 'CurseForge', 'ely.by'],
    blocks: [
      {
        heading: 'What it is',
        paragraphs: [
          'SlimeLauncher (16 commits, 1 star) — “like TLauncher but better”. Launch any Minecraft version with mods in one click. No Java setup, no manual tuning. Open-source code for the Slime Launcher.',
        ],
      },
      {
        heading: 'Why it',
        paragraphs: ['From README:'],
        list: [
          'Zero-setup Java: correct runtime (Java 8 → 25) auto-downloads per version, incl. Forge/NeoForge.',
          'Auto-tuned RAM, self-healing downloads.',
          'Offline + Microsoft accounts (up to 8), instant switching. CaSe matters: Sigmultra452 ≠ sigmultra452.',
          'Any version: vanilla, Fabric, Forge, NeoForge, Quilt, snapshots, betas, alphas.',
          'Mods / Maps / Modpacks: 1-click from Modrinth & CurseForge, Update-all.',
          'Skins & capes: offline, HD, capes, auto-pull from ely.by.',
          'Friends on LAN: In-menu / LAN-world status + 1-click join.',
          'Network: internet play without port-forward / Hamachi (built-in VPN).',
          'Own server: Paper/Vanilla in 1 click, UPnP, live console.',
          'Safety: world auto-backups before launch, console + crash reports.',
        ],
      },
      {
        heading: 'Quick start',
        paragraphs: ['Exact flow from README:'],
        list: [
          '1. Download SlimeLauncher Setup 1.18.4.exe from Releases (or portable exe).',
          '2. Accounts → Add offline (exact CaSe!) or Link Microsoft account.',
          '3. Instances → Create Instance → version (e.g. 1.21.1) + loader (Fabric for mods) → Play.',
          '4. Mods → pick instance → search sodium, jei → Install (loader instances only).',
        ],
      },
      {
        heading: 'Skins & capes',
        paragraphs: [
          'Between SlimeLauncher users: Skins → upload skin (PNG 64×64…1024×1024, slim/classic) + cape (64×32…1024×512). Works on LAN / Open-to-LAN / Network.',
          'Any cracked server (TLauncher-style): register at ely.by with same nickname (CaSe!) → upload there → launcher pulls automatically.',
          'Own community: deploy shared skin directory (server/ → Render/Fly.io, see SKIN_CATALOG_GUIDE.md) → put URL in Settings → Advanced.',
          'Limit: on someone else’s public server strangers’ skins can’t be resolved client-side — protocol limit, not a bug.',
        ],
      },
      {
        heading: 'Build from source',
        paragraphs: ['Requires Node.js 20+, Windows 10/11 64-bit.'],
        code: {
          lang: 'bash',
          code: 'npm install\nnpm run build\nnpx electron-builder --win --publish never\n# → release/SlimeLauncher Setup 1.18.4.exe + portable',
        },
      },
      {
        heading: 'Troubleshooting',
        paragraphs: ['Top cases from README:'],
        list: [
          '“Automatic Java download failed” — check api.adoptium.net, ~300 MB free, antivirus; or set Java in Settings → Minecraft.',
          '“Everyone is Steve” — re-read Skins section; update both sides on LAN; use ely.by on public servers.',
          '“Invalid session” — remove and re-link Microsoft account.',
          'Friends invisible on LAN — same Wi-Fi (not guest), firewall allow, no VPN rerouting.',
          'Else: Settings → Open logs folder → send main.log.',
        ],
      },
    ],
  },
  {
    slug: 'minedecompiler',
    label: 'MineDecompiler',
    title: 'MineDecompiler docs',
    description:
      'Standalone local-first decompiler for Minecraft Java Edition. Reads bytecode, writes readable structured Java project.',
    githubUrl: 'https://github.com/Mishaadevv/MineDecompiler',
    version: 'Gradle / Java 17+',
    stack: ['Java 17+', 'Gradle', 'Swing', 'ASM', 'Vineflower', 'CFR', 'jpackage'],
    blocks: [
      {
        heading: 'What it is',
        paragraphs: [
          'MineDecompiler / mcdecompiler (3 commits, 1 star, MIT) is NOT a mod — no Forge/Fabric/NeoForge, never loaded by the game. Input: local Minecraft .jar. Output: decompiled sources + resources + mappings + metadata + reports into a folder you choose.',
          'Clean-room tool: repo contains no Minecraft binaries, assets, or obfuscated game code. Network only for optional mappings download; --offline disables it.',
        ],
      },
      {
        heading: 'Pipeline',
        paragraphs: ['GUI (Swing) / CLI share one core (app.pipeline.DecompilationPipeline):'],
        list: [
          'JAR Reader (streaming, read-only) → VersionDetector → VersionProfile (per-era, no big if/else).',
          'BytecodeAnalyzer (ASM) → ClassGraph (inheritance / refs).',
          'DecompilerRegistry: Vineflower (primary) | CFR-compat | javap fallback.',
          'SourceProcessor: remap → import cleanup → synthetic cleanup → format → validate.',
          'ProjectGenerator → src/main/java + resources + mappings + metadata + reports + README.',
          'One bad class never kills the run — fallback stub + continue.',
        ],
      },
      {
        heading: 'Supported versions',
        paragraphs: ['Version detection: --version → manifest → version.json → known classes → obfuscation patterns → filename. Low confidence never blocks.'],
        list: [
          'Alpha a1.x — LegacyAlphaProfile — none / community Tiny.',
          'Beta b1.7.3 — BetaProfile — community SRG/TSRG/Tiny.',
          'Release 1.0–1.12 — LegacyReleaseProfile — community SRG/TSRG.',
          'Modern 1.13+ — ModernReleaseProfile — Mojang client.txt/server.txt (you provide).',
          'Future / unknown — FutureProfile — best-effort any format.',
        ],
      },
      {
        heading: 'Install / run',
        paragraphs: ['Needs Java 17+ to run. No game install, no accounts.'],
        code: {
          lang: 'bash',
          code: './gradlew build          # compile + tests -> build/libs/\n./gradlew fatJar         # standalone build/libs/mcdecompiler-all.jar\n./gradlew packageExe     # Windows program with bundled Java\n./gradlew run            # GUI\njava -jar build/libs/mcdecompiler-all.jar --help   # CLI',
        },
      },
      {
        heading: 'CLI usage',
        paragraphs: ['GUI and CLI are twins:'],
        code: {
          lang: 'bash',
          code: 'mcdecompiler input.jar --output <dir> [--version 1.1] [--decompiler auto|vineflower|cfr|javap] [--mappings <file|dir>] [--threads N] [--no-cache] [--offline]',
        },
      },
      {
        heading: 'Automatic mappings',
        paragraphs: ['Order: explicit choice → <output>/mappings + ./mappings drop zones → local auto-find (siblings, library, ~/.minecraft-decompiler cache) → auto-download (Mojang piston-meta for modern, OrnitheMC Feather for ≤1.14.4, SHA-1 verified, cached). Find Mappings button does it in GUI. Without mappings you still get clean synthetic names.'],
      },
      {
        heading: 'Extending',
        paragraphs: ['Three extension points, all via interface + ServiceLoader, no core changes:'],
        list: [
          'VersionProfile: id(), label(), handles(GameVersion).',
          'MappingProvider: loadMappings(GameVersion) → MappingSet (Mojang ProGuard, Tiny v1/v2, SRG/TSRG, .properties).',
          'DecompilerEngine: decompile(jar, version, options, stats, listener) — per-class failures to stats, never throw the run.',
        ],
      },
    ],
  },
];

export function getDoc(slug: string): DocPage | undefined {
  return docs.find((doc) => doc.slug === slug);
}
