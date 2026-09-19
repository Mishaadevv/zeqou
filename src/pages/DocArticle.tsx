import { Link, useParams } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { docs, getDoc } from '../data/docs';
import { NotFound } from './NotFound';

/** Single documentation article with sidebar navigation. */
export function DocArticle() {
  const { slug } = useParams<{ slug: string }>();
  const doc = slug ? getDoc(slug) : undefined;

  if (!doc) {
    return <NotFound />;
  }

  return (
    <div className="page">
      <SEO title={`${doc.title} — Zeqou Docs`} description={doc.description} />
      <div className="container docs-layout">
        <aside className="docs-side" aria-label="Documentation navigation">
          <p className="label">Docs</p>
          <nav>
            {docs.map((entry) => (
              <Link
                key={entry.slug}
                to={`/docs/${entry.slug}`}
                className={`docs-side-link${entry.slug === doc.slug ? ' active' : ''}`}
                aria-current={entry.slug === doc.slug ? 'page' : undefined}
              >
                {entry.label}
              </Link>
            ))}
          </nav>
        </aside>

        <article className="docs-article">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/docs">Docs</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{doc.label}</span>
          </nav>

          <p className="label">{doc.label}</p>
          <h1>{doc.title}</h1>
          <p className="lead">{doc.description}</p>

          <div className="app-hero-meta">
            <span>
              Version <strong>{doc.version}</strong>
            </span>
            {doc.websiteRoute && (
              <span>
                Site <strong><Link to={doc.websiteRoute}>Open page</Link></strong>
              </span>
            )}
            <span>
              Source <strong><a href={doc.githubUrl} target="_blank" rel="noreferrer">GitHub</a></strong>
            </span>
          </div>

          <div className="caps">
            {doc.stack.map((item) => (
              <span key={item} className="cap">{item}</span>
            ))}
          </div>

          {doc.blocks.map((block) => (
            <Reveal key={block.heading}>
              <section className="app-section" aria-label={block.heading}>
                <h2>{block.heading}</h2>
                {block.paragraphs.map((paragraph, index) => (
                  <p key={index} className="docs-p">{paragraph}</p>
                ))}
                {block.list && (
                  <ul className="docs-list">
                    {block.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {block.code && (
                  <pre className="docs-code">
                    <code>{block.code.code}</code>
                  </pre>
                )}
              </section>
            </Reveal>
          ))}

          <div className="docs-nav">
            {(() => {
              const index = docs.findIndex((d) => d.slug === doc.slug);
              const prev = index > 0 ? docs[index - 1] : undefined;
              const next = index < docs.length - 1 ? docs[index + 1] : undefined;
              return (
                <>
                  {prev ? (
                    <Link to={`/docs/${prev.slug}`} className="btn btn-ghost">← {prev.label}</Link>
                  ) : <span />}
                  {next ? (
                    <Link to={`/docs/${next.slug}`} className="btn btn-primary">{next.label} →</Link>
                  ) : <span />}
                </>
              );
            })()}
          </div>
        </article>
      </div>
    </div>
  );
}
