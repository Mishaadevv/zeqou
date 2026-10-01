import { site } from '../config/site';
import { supportGoal } from '../data/support';
import { formatDay } from '../lib/dates';
import { Reveal } from './Reveal';

/**
 * What donations do, the ways to give, and the live Ko-fi goal.
 *
 * The home page and /support both render this component, so the page the
 * footer links to cannot say something the section a visitor already read does
 * not. The goal itself is read from Ko-fi at build time — see
 * scripts/sync-goal.mjs.
 */
export function SupportSection() {
  return (
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
                  <strong>Every donation goes back into the project.</strong> Contributions pay
                  for the builds, the servers and the model runtimes the apps depend on.
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
                  {supportGoal.target} goal reached — every percent goes toward the hosted models
                  that are free inside Zeqou Harness.
                </span>
                <a className="arrow-link" href={site.supportGoalUrl} target="_blank" rel="noreferrer">
                  See the goal on Ko-fi <span className="arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
