interface ShotProps {
  src: string;
  alt: string;
}

/**
 * A real product screenshot, shown whole — never cropped.
 * The frame adapts to the shot so every pixel of the app stays visible.
 */
export function Shot({ src, alt }: ShotProps) {
  return <img src={src} alt={alt} className="shot" loading="lazy" />;
}
