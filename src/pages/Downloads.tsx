import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { products } from '../config/products';
import { releases } from '../data/releases';
import { formatDay } from '../lib/dates';
import { downloadsFor } from '../lib/downloads';

/**
 * The files of the newest release, grouped by platform, with the SHA-256 the
 * release reports — and what to expect from Windows and macOS before the app
 * will open, because the builds are not code-signed.
 */
export function Downloads() {
  const apps = products.filter((product) => product.status === 'available');

  return (
    <div className="page">
      <div className="container">
        <div className="page-hero">
          <p className="label">Downloads</p>
          <h1>Download Zeqou apps</h1>
          <p className="lead">
            Every file here is the newest published release, linked to where it is hosted on
            GitHub, with the SHA-256 that release reports for it. Nothing is mirrored or rebuilt
            for this page.
          </p>
        </div>

        {apps.map((product) => {
          const latest = releases[product.slug]?.[0];

          return (
            <Reveal key={product.slug}>
              <section className="app-section" aria-labelledby={`download-${product.slug}`}>
                <h2 id={`download-${product.slug}`}>
                  {product.name} <span className="dl-version">{product.version}</span>
                </h2>

                {latest ? (
                  <>
                    <p className="dl-meta">
                      Released {formatDay(latest.date)} ·{' '}
                      <a href={latest.url} target="_blank" rel="noreferrer">
                        Release notes on GitHub
                      </a>{' '}
                      · <Link to="/changelog">Changelog</Link>
                    </p>

                    {downloadsFor(latest.assets).map((group) => (
                      <div className="dl-group" key={`${group.platform}-${group.arch ?? ''}`}>
                        <h3 className="dl-group-head">
                          {group.platform}
                          {group.arch && <span className="dl-arch">{group.arch}</span>}
                        </h3>
                        <ul className="dl-list">
                          {group.files.map((file) => (
                            <li className="dl-file" key={file.name}>
                              <a className="dl-label" href={file.url}>
                                {file.label} <span className="arrow" aria-hidden="true">↓</span>
                              </a>
                              <p className="dl-name">
                                {file.name} · {file.size}
                              </p>
                              <p className="dl-hash">
                                <span>SHA-256</span>{' '}
                                <code>{file.sha256 ?? 'not reported by this release'}</code>
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </>
                ) : (
                  <p>
                    No release could be read when this page was built. The files are on{' '}
                    <a href={product.downloadUrl} target="_blank" rel="noreferrer">
                      GitHub Releases
                    </a>
                    .
                  </p>
                )}
              </section>
            </Reveal>
          );
        })}

        <Reveal>
          <section className="app-section" id="installer-warnings" aria-labelledby="warnings-title">
            <h2 id="warnings-title">Installer warnings</h2>
            <p>
              The installers are not code-signed: there is no Windows code-signing certificate and
              no Apple Developer ID behind them. Windows and macOS therefore treat a fresh download
              as an app from an unknown publisher, and both show a warning the first time it runs.
              The warning is about the missing signature, not about what the app does — which is
              also why every file above lists its SHA-256, so you can check what you downloaded
              before opening it.
            </p>

            <h3 className="dl-group-head">Windows</h3>
            <ol className="plain-list numbered">
              <li>Run the installer (or the portable .exe). A blue window appears: “Windows protected your PC”.</li>
              <li>Choose <strong>More info</strong>, then <strong>Run anyway</strong>.</li>
              <li>
                Windows 11 may instead block the file with Smart App Control, which has no “Run
                anyway” button. It lives in Windows Security → App &amp; browser control → Smart
                App Control. Turning it off cannot be undone without resetting Windows, so only do
                that if you trust the source and checked the hash.
              </li>
              <li>
                To check the file first, run
                {' '}<code>Get-FileHash .\Zeqou.Harness.Setup.1.4.0.exe -Algorithm SHA256</code>{' '}
                in PowerShell, or <code>certutil -hashfile &lt;file&gt; SHA256</code>, and compare
                it with the SHA-256 above.
              </li>
            </ol>

            <h3 className="dl-group-head">macOS</h3>
            <ol className="plain-list numbered">
              <li>Open the .dmg (or unzip the .zip) and move the app to Applications.</li>
              <li>
                Open it once. macOS says it cannot verify the app is free of malware; choose{' '}
                <strong>Done</strong>.
              </li>
              <li>
                Open System Settings → Privacy &amp; Security, scroll to <strong>Security</strong>,
                and click <strong>Open Anyway</strong> next to the message about the app. Confirm
                with Touch ID or your password, then open the app again.
              </li>
              <li>
                Since macOS 15 (Sequoia), holding Control and choosing Open no longer bypasses
                Gatekeeper — the Open Anyway button is the documented way, and on macOS 26 it is
                the only way.
              </li>
              <li>
                To check the file first, run <code>shasum -a 256 &lt;file&gt;</code> in Terminal and
                compare it with the SHA-256 above.
              </li>
            </ol>

            <p className="dl-meta">
              Apple documents the macOS steps in{' '}
              <a
                href="https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac"
                target="_blank"
                rel="noreferrer"
              >
                “Open a Mac app from an unidentified developer”
              </a>
              ; Microsoft documents the Windows behaviour in{' '}
              <a
                href="https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/smartscreen-reputation"
                target="_blank"
                rel="noreferrer"
              >
                SmartScreen reputation for Windows app developers
              </a>
              .
            </p>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
