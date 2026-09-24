import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { TrainingMock } from '../components/TrainingMock';
import { getProduct } from '../config/products';

export function XTraining() {
  const product = getProduct('xtraining');

  if (!product) {
    return (
      <div className="container page">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <SEO
        title="ZeqouXTraining — Zeqou"
        description="A local-first desktop studio for training, fine-tuning, evaluating and serving AI models on your own hardware."
      />
      <div className="container">
        <div className="app-hero">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/apps">Apps</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">XTraining</span>
            </nav>
            <img
              src={product.icon}
              alt={`${product.name} icon`}
              className="app-hero-icon"
              width={92}
              height={92}
            />
            <h1>{product.name}</h1>
            <p className="tagline">{product.tagline}</p>
            <p className="lead">{product.longDescription}</p>
            <div className="app-hero-meta">
              <span>
                Status <strong>Available</strong>
              </span>
              <span>
                Version <strong>{product.version}</strong>
              </span>
              <span>
                Platform <strong>{product.platforms.join(', ')}</strong>
              </span>
            </div>
            <div className="app-hero-cta">
              <a href={product.downloadUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                Download
              </a>
              <a href={product.githubUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <Link to="/docs/xtraining" className="btn btn-ghost">
                Docs
              </Link>
            </div>
          </div>
        </div>

        <Reveal>
          <div className="product-preview">
            <div className="preview-frame">
              <TrainingMock />
            </div>
            <p className="preview-caption">The XTraining workspace, previewed</p>
          </div>
        </Reveal>

        <section className="app-section" aria-labelledby="xtraining-flow">
          <Reveal>
            <h2 id="xtraining-flow">Model → Dataset → Method → Settings → Train</h2>
            <p>
              One Training page takes you through it: pick a model from the Hugging Face Hub or a
              local folder, point at a dataset, then choose LoRA, QLoRA, SFT, a full fine-tune — or
              train a small transformer from scratch with no base model at all. Simple mode shows the
              settings that decide whether a run succeeds; Advanced mode hands you the rest —
              quantization, scheduler, LoRA rank, checkpoint retention, the scratch architecture.
              Presets fill the whole form in one click, so a first run is two minutes of reading, not
              an afternoon of YAML.
            </p>
            <div className="caps">
              {product.capabilities.map((capability) => (
                <span key={capability} className="cap">
                  {capability}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="app-section" aria-labelledby="xtraining-check">
          <Reveal>
            <h2 id="xtraining-check">It checks before it starts</h2>
            <p>
              Real hardware detection through the CPU, the driver, <code>nvidia-smi</code> and{' '}
              <code>torch.cuda</code>; a memory estimate for the run you configured, labelled as an
              estimate; and dataset validation that reports field mapping, duplicates, empty rows and
              over-length samples. Every blocker is collected in one place — a missing runtime, a
              dataset error, an estimate that will not fit — before you press start.
            </p>
            <div className="caps">
              {product.providers.map((provider) => (
                <span key={provider} className="cap">
                  {provider}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="app-section" aria-labelledby="xtraining-honest">
          <Reveal>
            <h2 id="xtraining-honest">Works before you install anything — and never fakes it</h2>
            <p>
              Two backends ship with the app. The from-scratch backend is pure Python: it needs
              nothing but an interpreter and trains as soon as you press start. The Hugging Face
              backend lights up when PyTorch, transformers and peft are present — and PyTorch has no
              wheels for some Python versions, which the app says out loud instead of failing later.
              The ML runtime is never bundled and never installed behind your back: it is
              machine-specific and several gigabytes, so the app discovers the interpreters you
              already have, explains which one can run it, and installs only when you ask — into its
              own environment inside the workspace, never into your system Python.
            </p>
          </Reveal>
        </section>

        <section className="app-section" aria-labelledby="xtraining-watch">
          <Reveal>
            <h2 id="xtraining-watch">Watch the run, keep the result</h2>
            <p>
              Live loss and learning-rate charts, logs and checkpoints while it trains. Stop and
              pause are cooperative, so a paused run resumes from its last checkpoint — weights,
              optimizer, scheduler and RNG restored, with the engine reporting per item what was
              really restored. Continuing a finished model is a separate, deliberate operation with
              a fresh optimizer, and every model keeps a <code>parent</code> link, so the Experiments
              page can draw the real lineage tree. When it finishes, evaluate it, test it in the
              built-in playground, serve it locally, or merge and export the adapter with a model
              card.
            </p>
          </Reveal>
        </section>

        <section className="app-section" aria-labelledby="xtraining-get">
          <Reveal>
            <div className="download-row">
              <div>
                <h2 id="xtraining-get">Get XTraining</h2>
                <p className="lead">
                  Free for {product.platforms.join(', ')}. Needs Python 3.10 – 3.13; the from-scratch
                  backend needs nothing else, and PyTorch only becomes necessary when you fine-tune a
                  real Hugging Face checkpoint. Installed builds update themselves from the release
                  channel.
                </p>
              </div>
              <div className="download-btns">
                <a
                  href={product.downloadUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download
                </a>
                <a
                  href={product.downloadUrl}
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  All releases
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
