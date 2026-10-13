import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { Shot } from '../components/Shot';
import { getProduct } from '../config/products';

export function X3D() {
  const product = getProduct('x3d');

  if (!product) {
    return (
      <div className="container page">
        <p>Product not found.</p>
      </div>
    );
  }

  const [hero, ...rest] = product.screenshots;

  return (
    <div className="page">
      <div className="container">
        <div className="app-hero">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/apps">Apps</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">X3D</span>
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
                Status <strong>In development</strong>
              </span>
              <span>
                Version <strong>{product.version}</strong>
              </span>
              <span>
                Platform <strong>{product.platforms.join(', ')}</strong>
              </span>
            </div>
            <div className="app-hero-cta">
              <a href={product.githubUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                Source on GitHub
              </a>
              <Link to="/docs/x3d" className="btn btn-ghost">
                Docs
              </Link>
            </div>
          </div>
        </div>

        {hero && (
          <Reveal>
            <div className="product-preview">
              <div className="preview-frame natural">
                <Shot src={hero.src} alt={hero.alt} />
              </div>
              <p className="preview-caption">{hero.caption ?? 'ZeqouX3D — the real editor'}</p>
            </div>
          </Reveal>
        )}

        <section className="app-section" aria-labelledby="x3d-scratch">
          <Reveal>
            <h2 id="x3d-scratch">Written from scratch, down to the font rasterizer</h2>
            <p>
              ZeqouX3D uses no third-party libraries — only Windows and its SDK. The renderer, the
              Direct3D 12 backend, the editor's user interface, the TTF and SVG rasterizers, image
              codecs, the glTF importer, the entity system and the scripting language are all part of
              the engine. It is tuned on a laptop with Intel UHD 620 graphics, so a Lite profile keeps
              everyday hardware at a steady frame rate.
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

        <section className="app-section" aria-labelledby="x3d-script">
          <Reveal>
            <h2 id="x3d-script">ZeqouScript: the engine's own language</h2>
            <p>
              Gameplay is written in ZeqouScript — small, readable, compiled to bytecode and run by the
              engine's own virtual machine. Values declared with <code>prop</code> appear in the Details
              panel and can differ per object; saving a script while the game is playing reloads it on
              the spot and keeps its state. The built-in Script Editor colors the code and shows errors
              with their line while you type.
            </p>
            {rest[0] && (
              <div style={{ marginTop: 36 }}>
                <div className="product-preview">
                  <div className="preview-frame natural">
                    <Shot src={rest[0].src} alt={rest[0].alt} />
                  </div>
                  <p className="preview-caption">{rest[0].caption}</p>
                </div>
              </div>
            )}
          </Reveal>
        </section>

        <section className="app-section" aria-labelledby="x3d-projects">
          <Reveal>
            <h2 id="x3d-projects">Start from a template</h2>
            <p>
              The Project Browser creates a project from Blank, Sample Scene, First Person, Third
              Person or Water, with optional Starter Content (materials and ready-made scripts),
              documentation for the team and for AI coding assistants, and a Git repository. Press
              Play and the game runs inside the editor from its own camera.
            </p>
            {rest.slice(1).map((shot) => (
              <div key={shot.src} style={{ marginTop: 36 }}>
                <div className="product-preview">
                  <div className="preview-frame natural">
                    <Shot src={shot.src} alt={shot.alt} />
                  </div>
                  <p className="preview-caption">{shot.caption}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="app-section" aria-labelledby="x3d-get">
          <Reveal>
            <div className="download-row">
              <div>
                <h2 id="x3d-get">Build it yourself</h2>
                <p className="lead">
                  There is no installer yet: the engine is in active development. The source builds on
                  Windows with the Visual Studio 2022 Build Tools.
                </p>
              </div>
              <div className="download-btns">
                <a href={product.githubUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a
                  href={`${product.githubUrl}/blob/main/docs/CHANGELOG.md`}
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  Changelog
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
