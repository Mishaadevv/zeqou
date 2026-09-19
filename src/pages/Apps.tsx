import { useState } from 'react';
import type { ReactNode } from 'react';
import { HarnessPreview } from '../components/HarnessPreview';
import { ProductBlock } from '../components/ProductBlock';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';
import { Shot } from '../components/Shot';
import { TrainingMock } from '../components/TrainingMock';
import type { Product } from '../config/products';
import { products } from '../config/products';

type Filter = 'all' | 'available' | 'coming-soon';

/** The real product where one exists, a CSS mock where it does not. */
function previewFor(product: Product): { preview: ReactNode; caption: string; natural?: boolean } {
  if (product.slug === 'harness') {
    return {
      preview: (
        <HarnessPreview src={product.video} label={`${product.name} product preview`} />
      ),
      caption: 'Zeqou Harness — live product preview',
    };
  }

  if (product.slug === 'xtraining') {
    return {
      preview: <TrainingMock />,
      caption: 'ZeqouXTraining — the training workspace, previewed',
    };
  }

  return {
    preview: (
      <Shot
        src="./assets/apps/xchat/chat.png"
        alt="ZeqouXChat chat window with a conversation and message input"
      />
    ),
    caption: 'ZeqouXChat — the real app',
    natural: true,
  };
}

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
        description="Every application in the Zeqou ecosystem: Harness, XChat, XTraining and upcoming tools."
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

        {visible.map((product, index) => {
          const media = previewFor(product);
          return (
            <Reveal key={product.slug}>
              <ProductBlock
                product={product}
                mirror={index % 2 === 1}
                natural={media.natural}
                preview={media.preview}
                caption={media.caption}
              />
            </Reveal>
          );
        })}

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
