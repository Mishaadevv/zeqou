import { Reveal } from '../components/Reveal';
import { ReleaseNotes } from '../components/ReleaseNotes';
import { products } from '../config/products';
import { releases } from '../data/releases';
import { formatDay } from '../lib/dates';

/**
 * What shipped, in the words of the releases themselves.
 *
 * The notes are read from the GitHub releases API when the site is built — see
 * scripts/sync-releases.mjs — so this page cannot drift from what was actually
 * published, and it shows the same releases the Downloads page links to.
 */
export function Changelog() {
  const apps = products.filter((product) => product.status === 'available');

  return (
    <div className="page">
      <div className="container">
        <div className="page-hero">
          <p className="label">Changelog</p>
          <h1>Changelog</h1>
          <p className="lead">
            Release notes as they were published on GitHub, newest first, across the last few
            releases of each application.
          </p>
        </div>

        {apps.map((product) => {
          const list = releases[product.slug] ?? [];

          return (
            <Reveal key={product.slug}>
              <section className="app-section" aria-labelledby={`changelog-${product.slug}`}>
                <h2 id={`changelog-${product.slug}`}>{product.name}</h2>

                {list.length === 0 ? (
                  <p>The releases could not be read when this page was built.</p>
                ) : (
                  list.map((release) => (
                    <article className="release" key={release.tag} id={release.tag}>
                      <div className="release-head">
                        <h3>{release.name || release.tag}</h3>
                        <p className="release-meta">
                          {formatDay(release.date)} ·{' '}
                          <a href={release.url} target="_blank" rel="noreferrer">
                            {release.tag} on GitHub
                          </a>
                          {release.assets.length > 0 && (
                            <> · {release.assets.length} download(s)</>
                          )}
                        </p>
                      </div>
                      <ReleaseNotes notes={release.notes} />
                    </article>
                  ))
                )}
              </section>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
