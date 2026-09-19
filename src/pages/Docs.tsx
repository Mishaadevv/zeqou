import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { docs } from '../data/docs';

/** Docs catalogue: every Zeqou product + ecosystem overview. */
export function Docs() {
  return (
    <div className="page">
      <SEO
        title="Docs — Zeqou"
        description="Documentation for the Zeqou ecosystem: Harness, XChat, XTraining and the website itself."
      />
      <div className="container">
        <div className="page-hero">
          <p className="label">Documentation</p>
          <h1>Docs</h1>
          <p className="lead">
            One place for everything Zeqou — ecosystem overview, all desktop apps
            and the website itself.
          </p>
        </div>

        <div className="docs-grid">
          {docs.map((doc, index) => (
            <Reveal key={doc.slug} delay={(index % 3) * 60}>
              <Link to={`/docs/${doc.slug}`} className="doc-card" aria-label={`Open ${doc.title}`}>
                <p className="doc-card-label">{doc.label}</p>
                <h2>{doc.title}</h2>
                <p className="doc-card-desc">{doc.description}</p>
                <p className="doc-card-meta">
                  <span>{doc.version}</span>
                  <span aria-hidden="true">·</span>
                  <span>{doc.stack.slice(0, 3).join(' / ')}</span>
                </p>
                <span className="arrow-link">
                  Read <span className="arrow" aria-hidden="true">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <section className="app-section" aria-labelledby="docs-github">
          <Reveal>
            <div className="download-row">
              <div>
                <h2 id="docs-github">Prefer README?</h2>
                <p className="lead">Every article links to its source repository on GitHub.</p>
              </div>
              <div className="download-btns">
                <a
                  href="https://github.com/Mishaadevv"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
