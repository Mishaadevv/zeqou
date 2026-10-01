import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { faq } from '../data/faq';

/** Short, checkable answers — the same text the FAQPage JSON-LD publishes. */
export function Faq() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-hero">
          <p className="label">FAQ</p>
          <h1>Questions people ask first</h1>
          <p className="lead">
            Free, local or cloud, signed or not — the short answers, with links to the pages that
            go deeper.
          </p>
        </div>

        <div className="faq-list">
          {faq.map((entry, index) => (
            <Reveal key={entry.question} delay={index * 40}>
              <section className="faq-item">
                <h2 className="faq-q">{entry.question}</h2>
                <p className="faq-a">{entry.answer}</p>
                {entry.link &&
                  (entry.link.href.startsWith('http') ? (
                    <a className="arrow-link" href={entry.link.href} target="_blank" rel="noreferrer">
                      {entry.link.label} <span className="arrow" aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <Link className="arrow-link" to={entry.link.href}>
                      {entry.link.label} <span className="arrow" aria-hidden="true">→</span>
                    </Link>
                  ))}
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
