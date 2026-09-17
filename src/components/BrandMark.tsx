interface BrandMarkProps {
  size?: number;
  radius?: number;
}

/** Zeqou X brand mark — the provided icon. Never redrawn, never altered. */
export function BrandMark({ size = 32, radius = 9 }: BrandMarkProps) {
  return (
    <img
      src="./assets/branding/zeqou-x.png"
      alt="Zeqou X logo"
      width={size}
      height={size}
      style={{ width: size, height: size, borderRadius: radius }}
      loading="eager"
    />
  );
}
