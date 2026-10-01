import { Link } from 'react-router-dom';
import { HarnessPreview } from '../components/HarnessPreview';
import { Reveal } from '../components/Reveal';
import { getProduct } from '../config/products';

export function Harness() {
  const product = getProduct('harness');

  if (!product) {
    return (
      <div className="container page">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <div className="app-hero">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/apps">Apps</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Harness</span>
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
              <Link to="/downloads" className="btn btn-primary">
                Download
              </Link>
              <a href={product.githubUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <Link to="/docs/harness" className="btn btn-ghost">
                Docs
              </Link>
            </div>
          </div>
        </div>

        <Reveal>
          <div className="product-preview">
            <div className="preview-frame" style={{ aspectRatio: '16 / 9' }}>
              <HarnessPreview src={product.video} label={`${product.name} product preview`} />
            </div>
            <p className="preview-caption">Zeqou Harness in action</p>
          </div>
        </Reveal>

        <section className="app-section" aria-labelledby="harness-inside">
          <Reveal>
            <h2 id="harness-inside">Inside Harness</h2>
            <p>
              One workspace where agents, models, tools, memory and MCP meet. Everything Harness
              does serves a single goal: keep developers in flow while AI handles the heavy work.
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

        <section className="app-section" aria-labelledby="harness-models">
          <Reveal>
            <h2 id="harness-models">Use the models you trust</h2>
            <p>
              Connect the providers you already rely on and switch between them mid-task. Cloud
              providers take your own API key, which is encrypted locally and never sent anywhere
              except to that provider; a local model through Ollama needs no key at all.
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

        <section className="app-section" aria-labelledby="harness-mcp">
          <Reveal>
            <h2 id="harness-mcp">MCP servers you add yourself</h2>
            <p>
              Harness is an MCP client: you add the servers you want — over HTTP or as a local
              command over stdio — connect them, and the tools each one publishes become tools the
              model can call, named with the server they came from. No MCP servers are bundled
              with the app, and none are connected until you add one.
            </p>
          </Reveal>
        </section>

        <section className="app-section" aria-labelledby="harness-screens">
          <Reveal>
            <h2 id="harness-screens">Screenshots</h2>
            {product.screenshots.length > 0 ? (
              <div className="shot-grid">
                {product.screenshots.map((screenshot) => (
                  <figure className="shot-item" key={screenshot.src}>
                    {/* The link is not decoration: it is how a reader gets the
                        full-size image, since the page shows it small. */}
                    <a href={screenshot.src} target="_blank" rel="noreferrer">
                      <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
                    </a>
                    {screenshot.caption && (
                      <figcaption className="shot-caption">{screenshot.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="shot-placeholder">
                <p>Stills of the workspace are not published yet.</p>
                <p className="shot-note">
                  The video above is the current preview of the app; screenshots land here once
                  they exist.
                </p>
              </div>
            )}
          </Reveal>
        </section>

        {product.videoSecondary && (
          <section className="app-section" aria-labelledby="harness-motion">
            <Reveal>
              <h2 id="harness-motion">Another look</h2>
              <p>Harness in motion — the workspace as it feels day to day.</p>
              <div style={{ marginTop: 36 }}>
                <div className="product-preview">
                  <div className="preview-frame" style={{ aspectRatio: '16 / 9' }}>
                    <HarnessPreview
                      src={product.videoSecondary}
                      label={`${product.name} additional preview`}
                    />
                  </div>
                  <p className="preview-caption">A second cut of the Harness preview</p>
                </div>
              </div>
            </Reveal>
          </section>
        )}

        <section className="app-section" aria-labelledby="harness-get">          <Reveal>
            <div className="download-row">
              <div>
                <h2 id="harness-get">Get Harness</h2>
                <p className="lead">
                  Available for {product.platforms.join(', ')}. Free to download.
                </p>
              </div>
              <div className="download-btns">
                <Link to="/downloads" className="btn btn-primary">
                  Download
                </Link>
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
