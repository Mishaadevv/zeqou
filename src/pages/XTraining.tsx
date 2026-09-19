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
        description="A desktop workspace for training and fine-tuning AI models on your own hardware."
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
              <a href={product.docsUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
                Docs
              </a>
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
              Seven steps in one wizard: pick a model from the Hugging Face Hub or a local folder,
              point at a dataset, choose LoRA, QLoRA or SFT, then start. Simple mode shows the four
              settings that decide whether a run succeeds; Advanced mode hands you everything —
              quantization, scheduler, LoRA rank, checkpoint retention — when you want it.
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
              Real GPU detection through <code>nvidia-smi</code> and <code>torch.cuda</code>, a VRAM
              estimate for the run you configured, and dataset validation that reports field mapping,
              duplicates, empty rows and over-length samples. Every blocker is collected in one place
              — missing runtime, a dataset error, an estimate that will not fit — before you press
              start.
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
            <h2 id="xtraining-honest">No fake progress</h2>
            <p>
              The training runtime is not bundled — it is machine-specific and several gigabytes.
              Until it is installed, the app says exactly what is missing and refuses to start a run
              instead of drawing a simulated result. There are no invented GPU numbers and no buttons
              that do nothing.
            </p>
          </Reveal>
        </section>

        <section className="app-section" aria-labelledby="xtraining-watch">
          <Reveal>
            <h2 id="xtraining-watch">Watch the run, keep the result</h2>
            <p>
              Live loss and learning-rate charts, a GPU and VRAM trace, logs and checkpoints while it
              trains. Stop and pause are cooperative, so a paused run resumes from its last
              checkpoint. When it finishes, test the model in the built-in playground, or export the
              adapter and merge it into its base model.
            </p>
          </Reveal>
        </section>

        <section className="app-section" aria-labelledby="xtraining-get">
          <Reveal>
            <div className="download-row">
              <div>
                <h2 id="xtraining-get">Get XTraining</h2>
                <p className="lead">
                  Free for {product.platforms.join(', ')}. Training needs a machine with Python and
                  the ML runtime; everything else works without it.
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
