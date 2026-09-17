import { useState } from 'react';
import { HarnessPreview } from '../components/HarnessPreview';
import { ProductBlock } from '../components/ProductBlock';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { Shot } from '../components/Shot';
import { products } from '../config/products';

type Filter = 'all' | 'available' | 'coming-soon';

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'available', label: 'Available' },
  { value: 'coming-soon', label: 'Coming Soon' },
];

export function Apps() {
  const [filter, setFilter] = useState<Filter>('all');

  const visible =
    filter === 'all' ? products : products.filter((product) => product.status === filter);

  return (
    <div className="page">
      <SEO
        title="Apps — Zeqou"
        description="Every application in the Zeqou ecosystem: Harness, XChat and upcoming tools."
      />
      <div className="container">
        <div className="page-hero">
          <p className="label">Catalogue</p>
          <h1>Apps</h1>
          <p className="lead">
            Tools built independently. Connected by one ecosystem.
          </p>
        </div>

        <div className="filter-row" role="group" aria-label="Filter applications">
          {filters.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`filter-btn${filter === option.value ? ' active' : ''}`}
              onClick={() => setFilter(option.value)}
              aria-pressed={filter === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>

        {visible.map((product, index) => (
          <Reveal key={product.slug}>
            <ProductBlock
              product={product}
              mirror={index % 2 === 1}
              natural={product.slug === 'xchat'}
              preview={
                product.slug === 'harness' ? (
                  <HarnessPreview
                    src={product.video}
                    label={`${product.name} product preview`}
                  />
                ) : (
                  <Shot
                    src="./assets/apps/xchat/chat.png"
                    alt="ZeqouXChat chat window with a conversation and message input"
                  />
                )
              }
              caption={
                product.slug === 'harness'
                  ? 'Zeqou Harness — live product preview'
                  : 'ZeqouXChat — the real app'
              }
            />
          </Reveal>
        ))}

        {filter !== 'available' && (
          <Reveal>
            <div className="latest-list">
              <div className="latest-row">
                <span className="latest-product">Zeqou</span>
                <span className="latest-title">More applications on the way</span>
                <span className="latest-kind">Soon</span>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
