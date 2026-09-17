import { Link } from 'react-router-dom';
import { Ecosystem } from '../components/Ecosystem';
import { HarnessPreview } from '../components/HarnessPreview';
import { ProductBlock } from '../components/ProductBlock';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { Shot } from '../components/Shot';
import { getProduct } from '../config/products';
import { site } from '../config/site';
import { updates } from '../data/updates';

const principles = [
  {
    title: 'Focused.',
    description: 'Built around a clear purpose.',
  },
  {
    title: 'Independent.',
    description: 'Each application can stand on its own.',
  },
  {
    title: 'Connected.',
    description: 'All products belong to one ecosystem.',
  },
];

export function Home() {
  const harness = getProduct('harness');
  const xchat = getProduct('xchat');
  const latest = updates.slice(0, 3);

  return (
    <>
      <SEO
        title="Zeqou — Software, built as an ecosystem."
        description="Zeqou is a growing collection of focused applications designed to work beautifully on their own — and together."
      />

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div>
            <h1 id="hero-title">{site.heroTitle}</h1>
            <p className="hero-sub">{site.heroSubtitle}</p>
            <div className="hero-cta">
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
          <figure className="hero-mark">
            <img
              src="./assets/branding/zeqou-x.png"
              alt="Zeqou X brand mark"
              width={400}
              height={400}
            />
          </figure>
        </div>
      </section>

      {/* Applications */}
      <section className="section" aria-labelledby="apps-title">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="label">Ecosystem</p>
              <h2 id="apps-title">Applications</h2>
              <p>Tools built independently. Connected by one ecosystem.</p>
            </div>
          </Reveal>
          {harness && (
            <Reveal>
              <ProductBlock
                product={harness}
                preview={
                  <HarnessPreview
                    src={harness.video}
                    label="Zeqou Harness product preview"
                  />
                }
                caption="Zeqou Harness — live product preview"
              />
            </Reveal>
          )}
          {xchat && (
            <Reveal>
              <ProductBlock
                product={xchat}
                mirror
                natural
                preview={
                  <Shot
                    src="./assets/apps/xchat/chat.png"
                    alt="ZeqouXChat chat window with a conversation and message input"
                  />
                }
                caption="ZeqouXChat — the real app"
              />
            </Reveal>
          )}
        </div>
      </section>

      {/* Ecosystem */}
      <section className="section" aria-labelledby="eco-title">
        <div className="container">
          <Reveal>
            <div className="section-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
              <p className="label">Structure</p>
              <h2 id="eco-title">One ecosystem.</h2>
            </div>
          </Reveal>
          <Reveal>
            <Ecosystem />
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="label">Why Zeqou</p>
              <h2 id="why-title">Three ideas. Nothing else.</h2>
            </div>
          </Reveal>
          <div className="principles">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 80}>
                <div className="principle">
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="section" aria-labelledby="latest-title">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="label">News</p>
              <h2 id="latest-title">Latest</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="latest-list">
              {latest.map((entry) => (
                <Link key={entry.id} to="/updates" className="latest-row">
                  <span className="latest-product">{entry.productLabel}</span>
                  <span className="latest-title">
                    {entry.title} <span className="arrow" aria-hidden="true">→</span>
                  </span>
                  <span className="latest-kind">{entry.kind}</span>
                </Link>
              ))}
            </div>
            <div className="latest-more">
              <Link to="/updates" className="arrow-link">
                View all updates <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GitHub */}
      <section className="section" aria-labelledby="github-title">
        <div className="container">
          <Reveal>
            <div className="github-block">
              <h2 id="github-title">Built in public.</h2>
              <p>Explore Zeqou projects, releases and source code.</p>
              <a
                href={site.githubUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Open GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
