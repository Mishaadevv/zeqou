import type { ReleaseAsset } from '../data/releases';

/** One downloadable file, as the page shows it. */
export interface DownloadFile {
  /** What the file is in words: "Installer (.exe)", "Apple Silicon (.dmg)". */
  label: string;
  name: string;
  url: string;
  /** Readable size, e.g. "78.9 MB". */
  size: string;
  sha256: string | null;
}

export interface DownloadPlatform {
  platform: string;
  /** Architecture note, where the platform publishes more than one. */
  arch?: string;
  files: DownloadFile[];
}

const megabytes = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;

/** Apple Silicon, as electron-builder and Tauri write it into file names. */
const isAppleSilicon = (name: string) => /arm64|aarch64/i.test(name);

function file(asset: ReleaseAsset, label: string): DownloadFile {
  return {
    label,
    name: asset.name,
    url: asset.url,
    size: megabytes(asset.size),
    sha256: asset.sha256,
  };
}

/**
 * The files of a release, grouped the way a visitor chooses: by platform, and
 * on macOS by chip.
 *
 * Classification is by file name, because that is all a release guarantees.
 * A file no rule recognises is left out rather than shown under a guessed
 * label — the page links to GitHub Releases next to the list, so nothing is
 * hidden from someone who wants it.
 */
export function downloadsFor(assets: ReleaseAsset[]): DownloadPlatform[] {
  const groups: DownloadPlatform[] = [];

  const windows = assets
    .filter((asset) => /\.(exe|msi)$/i.test(asset.name))
    .map((asset) =>
      file(
        asset,
        /setup/i.test(asset.name)
          ? 'Installer (.exe)'
          : /\.msi$/i.test(asset.name)
            ? 'MSI package (.msi)'
            : 'Portable (.exe)',
      ),
    );
  if (windows.length > 0) groups.push({ platform: 'Windows', files: windows });

  const mac = assets.filter((asset) => /\.(dmg|zip)$/i.test(asset.name));
  if (mac.length > 0) {
    const appleSilicon = mac.filter((asset) => isAppleSilicon(asset.name));
    const intel = mac.filter((asset) => !isAppleSilicon(asset.name));

    if (appleSilicon.length > 0) {
      groups.push({
        platform: 'macOS',
        arch: 'Apple Silicon (arm64) — recommended',
        files: appleSilicon.map((asset) =>
          file(asset, /\.dmg$/i.test(asset.name) ? 'Disk image (.dmg)' : 'Archive (.zip)'),
        ),
      });
    }
    if (intel.length > 0) {
      groups.push({
        platform: 'macOS',
        arch: 'Intel (x64)',
        files: intel.map((asset) =>
          file(asset, /\.dmg$/i.test(asset.name) ? 'Disk image (.dmg)' : 'Archive (.zip)'),
        ),
      });
    }
  }

  const linux = assets
    .filter((asset) => /\.(appimage|deb|rpm)$/i.test(asset.name))
    .map((asset) =>
      file(
        asset,
        /\.appimage$/i.test(asset.name)
          ? 'AppImage (.AppImage)'
          : /\.deb$/i.test(asset.name)
            ? 'Debian package (.deb)'
            : 'RPM package (.rpm)',
      ),
    );
  if (linux.length > 0) groups.push({ platform: 'Linux', arch: 'x64', files: linux });

  return groups;
}
