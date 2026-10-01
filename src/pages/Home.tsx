import { Link } from 'react-router-dom';
import { Ecosystem } from '../components/Ecosystem';
import { HarnessPreview } from '../components/HarnessPreview';
import { LogoParticles } from '../components/LogoParticles';
import { ParticleField } from '../components/ParticleField';
import { ProductBlock } from '../components/ProductBlock';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { Shot } from '../components/Shot';
import { TrainingMock } from '../components/TrainingMock';
import { getProduct } from '../config/products';
import { site } from '../config/site';
import { supportGoal } from '../data/support';
import { updates } from '../data/updates';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** ISO date to a readable day, without a timezone moving it to the day before. */
function formatDay(iso: string) {
  const [year, month, day] = iso.split('-').map(Number);
  if (!year || !month || !day) return iso;
  return `${day} ${months[month - 1]} ${year}`;
}

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
  const xtraining = getProduct('xtraining');
  const latest = updates.slice(0, 3);

  return (
    <>
      <SEO
        title="Zeqou — Software, built as an ecosystem."
        description={site.description}
      />

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div>
            <p className="label">{site.heroLabel}</p>
            <h1 id="hero-title">{site.heroTitle}</h1>
            <p className="hero-sub">{site.heroSubtitle}</p>
            <div className="hero-cta">
              <Link to="/apps" className="btn btn-primary">
                Download free
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
            <LogoParticles />
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
          {xtraining && (
            <Reveal>
              <ProductBlock
                product={xtraining}
                preview={<TrainingMock />}
                caption="ZeqouXTraining — the training workspace, previewed"
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

      {/* Support */}
      <section className="section" aria-labelledby="support-title">
        <div className="container">
          <Reveal>
            <div className="support-block">
              <div className="support-copy">
                <p className="label">Support</p>
                <h2 id="support-title">Keep it free for everyone.</h2>
                <p>
                  Zeqou is written and maintained by one developer, and every app is free to
                  download and update. If the ecosystem is useful to you, here is where
                  contributions go.
                </p>
                <ul className="support-points">
                  <li>
                    <strong>Every donation goes back into the project.</strong> Contributions
                    pay for the builds, the servers and the model runtimes the apps depend on.
                  </li>
                  <li>
                    <strong>
                      Our goal is to use donations to pay for hosted AI models that are free
                      inside Zeqou Harness.
                    </strong>{' '}
                    How far that pool grows depends on how far the support goes — no model is
                    promised ahead of time.
                  </li>
                </ul>
              </div>
              <div className="support-options">
                {site.support
                  .filter((option) => option.enabled)
                  .map((option) => (
                    <a
                      key={option.label}
                      className="support-option"
                      href={option.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="support-option-label">
                        {option.label}
                        <span className="arrow" aria-hidden="true">
                          →
                        </span>
                      </span>
                      <span className="support-option-note">{option.note}</span>
                    </a>
                  ))}
              </div>

              {/* The Ko-fi goal, read from Ko-fi itself — see scripts/sync-goal.mjs */}
              <div className="support-goal">
                <div className="support-goal-head">
                  <span className="support-goal-title">{supportGoal.title}</span>
                  <span className="support-goal-note">
                    Live from Ko-fi · read {formatDay(supportGoal.updatedAt)}
                  </span>
                </div>
                <div
                  className="support-goal-bar"
                  role="progressbar"
                  aria-valuenow={supportGoal.percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuetext={`${supportGoal.percent}% of the ${supportGoal.currency}${supportGoal.target} goal`}
                >
                  <span style={{ width: `${supportGoal.percent}%` }} />
                </div>
                <div className="support-goal-foot">
                  <span>
                    <strong>{supportGoal.percent}%</strong> of the {supportGoal.currency}
                    {supportGoal.target} goal reached — every percent goes toward the hosted
                    models that are free inside Zeqou Harness.
                  </span>
                  <a
                    className="arrow-link"
                    href={site.supportGoalUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    See the goal on Ko-fi <span className="arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GitHub */}
      <section className="section" aria-labelledby="github-title">
        <div className="container">
          <Reveal>
            <div className="github-block">
              <ParticleField />
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
