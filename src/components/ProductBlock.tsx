import { useRef } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../config/products';

interface ProductBlockProps {
  product: Product;
  mirror?: boolean;
  preview: ReactNode;
  caption: string;
  /** Real screenshots keep their own ratio instead of filling a fixed frame. */
  natural?: boolean;
}

/**
 * One large product row: branding + typography on one side,
 * the real product preview on the other. The preview shifts
 * subtly with the cursor — nothing more.
 */
export function ProductBlock({ product, mirror = false, preview, caption, natural = false }: ProductBlockProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!frame) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = frame.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    frame.style.transform = `rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translate3d(${x * 8}px, ${y * 8}px, 0)`;
  };

  const onLeave = () => {
    if (frameRef.current) frameRef.current.style.transform = '';
  };

  return (
    <div className={`product-block${mirror ? ' mirror' : ''}`}>
      <div className="product-copy">
        <p className="product-brand">
          <img src={product.icon} alt="" width={44} height={44} loading="lazy" />
          {product.brand[0]}
          <span aria-hidden="true">/</span>
          {product.brand[1]}
        </p>
        <Link to={`/apps/${product.slug}`} className="product-title-link" aria-label={`Open ${product.name}`}>
          <h3>{product.name}</h3>
        </Link>
        <p className="product-tagline">{product.tagline}</p>
        <p className="product-desc">{product.description}</p>
        <div className="product-links">
          <Link to={`/apps/${product.slug}`} className="btn btn-primary">
            Explore
          </Link>
          <a
            href={product.downloadUrl}
            className="arrow-link"
            target="_blank"
            rel="noreferrer"
          >
            Download <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="product-preview" onMouseMove={onMove} onMouseLeave={onLeave}>
        <div className={`preview-frame${natural ? ' natural' : ''}`} ref={frameRef}>
          {preview}
        </div>
        <p className="preview-caption">{caption}</p>
      </div>
    </div>
  );
}
