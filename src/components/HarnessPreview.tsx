interface HarnessPreviewProps {
  src?: string;
  label: string;
}

/**
 * Harness video preview — the real promo footage.
 * Small, quiet, never a background. Shows the first frame
 * until enough data is loaded; lazy so it never blocks render.
 */
export function HarnessPreview({ src, label }: HarnessPreviewProps) {
  if (!src) return null;
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
