import { Reveal } from '../components/Reveal';

/**
 * What the license actually says.
 *
 * The terms below are the ones PolyForm Strict 1.0.0 spells out — permitted
 * noncommercial use, and no distribution or changes — and each repository's
 * LICENSE file is linked as the authoritative text. The author's contact
 * address lives there rather than on this page.
 */
const repositories = [
  { name: 'Zeqou Harness', url: 'https://github.com/Mishaadevv/harness/blob/main/LICENSE' },
  { name: 'ZeqouXChat', url: 'https://github.com/Mishaadevv/xchat/blob/main/LICENSE' },
  { name: 'ZeqouXTraining', url: 'https://github.com/Mishaadevv/xtraining/blob/main/LICENSE' },
  { name: 'This website', url: 'https://github.com/Mishaadevv/zeqou/blob/main/LICENSE' },
];

export function License() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-hero">
          <p className="label">License</p>
          <h1>Source-available, not open source</h1>
          <p className="lead">
            Everything Zeqou publishes is licensed under PolyForm Strict 1.0.0. The wording below
            is a summary; the LICENSE file in each repository is the text that counts.
          </p>
        </div>

        <Reveal>
          <section className="app-section" aria-labelledby="license-allowed">
            <h2 id="license-allowed">What you may do</h2>
            <ul className="plain-list">
              <li>Read the source code, from any of the public repositories.</li>
              <li>
                Run the applications for any noncommercial purpose — personal use, study,
                experiments, hobby projects, and use by noncommercial organisations such as
                charities, schools and public research.
              </li>
              <li>
                Rely on the patent license the terms grant for that use, and on fair-use rights
                your local law gives you.
              </li>
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="app-section" aria-labelledby="license-not-allowed">
            <h2 id="license-not-allowed">What needs permission</h2>
            <ul className="plain-list">
              <li>Distributing the software, or making it available to others.</li>
              <li>Changing the code, or building new work on top of it.</li>
              <li>Commercial use of any kind.</li>
            </ul>
            <p>
              Ask via{' '}
              <a href="https://github.com/Mishaadevv/zeqou/issues" target="_blank" rel="noreferrer">
                GitHub issues
              </a>{' '}
              if you need one of those — that is the channel that exists, and requests are read.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="app-section" aria-labelledby="license-warranty">
            <h2 id="license-warranty">No warranty</h2>
            <p>
              As far as the law allows, the software comes as is, without warranty or condition,
              and the author is not liable for damages arising from it. That is what the license
              says, and it is worth knowing before training a model you intend to keep.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="app-section" aria-labelledby="license-text">
            <h2 id="license-text">The full text</h2>
            <ul className="plain-list">
              {repositories.map((repository) => (
                <li key={repository.name}>
                  <a href={repository.url} target="_blank" rel="noreferrer">
                    {repository.name} — LICENSE
                  </a>
                </li>
              ))}
            </ul>
            <p>
              All four files carry the same license:{' '}
              <a href="https://polyformproject.org/licenses/strict/1.0.0" target="_blank" rel="noreferrer">
                PolyForm Strict 1.0.0
              </a>
              .
            </p>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
