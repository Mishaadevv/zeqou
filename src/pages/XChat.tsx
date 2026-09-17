import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { Shot } from '../components/Shot';
import { getProduct } from '../config/products';

export function XChat() {
  const product = getProduct('xchat');

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
        title="ZeqouXChat — Zeqou"
        description="A desktop AI chat application built around modern AI providers and developer workflows."
      />
      <div className="container">
        <div className="app-hero">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/apps">Apps</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">XChat</span>
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
                Platform <strong>Windows</strong>
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
            <div className="preview-frame natural">
              <Shot
                src="./assets/apps/xchat/chat.png"
                alt="ZeqouXChat chat window with a conversation and message input"
              />
            </div>
            <p className="preview-caption">ZeqouXChat — the real app</p>
          </div>
        </Reveal>

        <section className="app-section" aria-labelledby="xchat-inside">
          <Reveal>
            <h2 id="xchat-inside">Made for real conversations</h2>
            <p>
              XChat stays out of the way: fast chat, full context from your code and files, and
              customization that shapes the assistant around your workflow.
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

        <section className="app-section" aria-labelledby="xchat-models">
          <Reveal>
            <h2 id="xchat-models">Every model, one Hub</h2>
            <p>
              The Hub lists 121 providers and 423 models to choose from — OpenAI, Anthropic,
              Google, xAI, Mistral, DeepSeek and more. Add a key, refresh, and chat.
            </p>
            <div style={{ marginTop: 36 }}>
              <div className="product-preview">
                <div className="preview-frame natural">
                  <Shot
                    src="./assets/apps/xchat/hub.png"
                    alt="ZeqouXChat provider Hub listing AI providers and models"
                  />
                </div>
                <p className="preview-caption">The provider Hub inside XChat</p>
              </div>
            </div>
            <div className="caps">
              {product.providers.map((provider) => (
                <span key={provider} className="cap">
                  {provider}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="app-section" aria-labelledby="xchat-space">
          <Reveal>
            <h2 id="xchat-space">Organised around your work</h2>
            <p>
              Chats, Projects, Memory, Downloads, Extensions and Settings live in one quiet
              sidebar. Everything has its place — nothing shouts for attention.
            </p>
            <div style={{ marginTop: 36 }}>
              <div className="product-preview">
                <div className="preview-frame natural">
                  <Shot
                    src="./assets/apps/xchat/workspace.png"
                    alt="ZeqouXChat workspace with navigation sidebar and chat"
                  />
                </div>
                <p className="preview-caption">The XChat workspace</p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="app-section" aria-labelledby="xchat-get">
          <Reveal>
            <div className="download-row">
              <div>
                <h2 id="xchat-get">Get XChat</h2>
                <p className="lead">Available for Windows. Free to try.</p>
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
