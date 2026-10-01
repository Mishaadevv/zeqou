import type { ReactNode } from 'react';

/**
 * Release notes, rendered from the text GitHub publishes.
 *
 * A formatter rather than a markdown library: paragraphs, "-" lists, bold,
 * inline code and links cover everything the releases actually use, and the
 * text is shown as published — nothing is rewritten on the way in.
 */
function inline(text: string, keyPrefix: string): ReactNode[] {
  const parts = text
    .split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g)
    .filter((part) => part !== '');

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={key}>{part.slice(1, -1)}</code>;
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a key={key} href={link[2]} target="_blank" rel="noreferrer">
          {link[1]}
        </a>
      );
    }

    return part;
  });
}

export function ReleaseNotes({ notes }: { notes: string }) {
  if (!notes.trim()) return null;

  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    const text = paragraph.join(' ');
    blocks.push(
      <p key={`p-${blocks.length}`} className="notes-p">
        {inline(text, `p-${blocks.length}`)}
      </p>,
    );
    paragraph = [];
  };

  const flushList = () => {
    if (list.length === 0) return;
    blocks.push(
      <ul key={`ul-${blocks.length}`} className="notes-list">
        {list.map((item, index) => (
          <li key={`li-${blocks.length}-${index}`}>{inline(item, `li-${blocks.length}-${index}`)}</li>
        ))}
      </ul>,
    );
    list = [];
  };

  for (const rawLine of notes.split('\n')) {
    const line = rawLine.trim();

    if (line === '') {
      flushList();
      flushParagraph();
      continue;
    }

    if (/^#{1,6}\s/.test(line)) {
      flushList();
      flushParagraph();
      const text = line.replace(/^#{1,6}\s+/, '');
      blocks.push(
        <p key={`h-${blocks.length}`} className="notes-heading">
          {inline(text, `h-${blocks.length}`)}
        </p>,
      );
      continue;
    }

    if (/^[-*]\s/.test(line)) {
      flushParagraph();
      list.push(line.replace(/^[-*]\s+/, ''));
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushList();
  flushParagraph();

  return <div className="notes">{blocks}</div>;
}
