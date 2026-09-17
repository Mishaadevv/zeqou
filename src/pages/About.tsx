import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { site } from '../config/site';

export function About() {
  return (
    <div className="page">
      <SEO
        title="About — Zeqou"
        description="Zeqou is an independent software ecosystem focused on building useful, modern applications."
      />
      <div className="container">
        <div className="page-hero">
          <p className="label">About</p>
          <h1>An independent software ecosystem.</h1>
          <p className="lead">
            Zeqou is built and maintained by an independent developer. Different applications. One
            ecosystem. Each product solves one problem well — and every product carries the same
            standard of care.
          </p>
        </div>

        <section className="section" aria-labelledby="about-more" style={{ paddingTop: 20 }}>
          <Reveal>
            <div className="download-row">
              <div>
                <h2 id="about-more" style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.4rem)' }}>
                  See what is shipping.
                </h2>
              </div>
              <div className="download-btns">
                <Link to="/apps" className="btn btn-primary">
                  Explore apps
                </Link>
                <a
                  href={site.githubUrl}
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
