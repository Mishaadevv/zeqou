import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { getProduct } from '../config/products';
import { updates } from '../data/updates';

export function Updates() {
  return (
    <div className="page">
      <SEO
        title="Updates — Zeqou"
        description="New app releases, major updates and announcements across the Zeqou ecosystem."
      />
      <div className="container">
        <div className="page-hero">
          <p className="label">Changelog</p>
          <h1>Updates</h1>
          <p className="lead">Releases and milestones from across the ecosystem.</p>
        </div>

        <Reveal>
          <div className="latest-list">
            {updates.map((entry) => {
              const product = getProduct(entry.product);
              const row = (
                <>
                  <span className="latest-product">{entry.productLabel}</span>
                  <span className="latest-title">
                    {entry.title} <span className="arrow" aria-hidden="true">→</span>
                  </span>
                  <span className="latest-kind">{entry.kind}</span>
                </>
              );
              return product ? (
                <Link key={entry.id} to={`/apps/${product.slug}`} className="latest-row">
                  {row}
                </Link>
              ) : (
                <div key={entry.id} className="latest-row">
                  {row}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
