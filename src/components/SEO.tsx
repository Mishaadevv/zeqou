import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

/** Sets per-page title and meta description. */
export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = 'description';
        document.head.appendChild(tag);
      }
      tag.content = description;

      const og = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
      if (og) og.content = title;
      const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
      if (ogDesc && description) ogDesc.content = description;
    }
  }, [title, description]);

  return null;
}
