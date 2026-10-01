import { Reveal } from '../components/Reveal';
import { site } from '../config/site';

/** What the site measures, what the apps send, and where to ask questions. */
export function Privacy() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-hero">
          <p className="label">Privacy</p>
          <h1>Privacy</h1>
          <p className="lead">
            This page counts page views without cookies and keeps no personal data. The
            applications send nothing about you unless you connect something yourself.
          </p>
        </div>

        <Reveal>
          <section className="app-section" aria-labelledby="privacy-site">
            <h2 id="privacy-site">This website</h2>
            <p>
              The site uses Umami, an analytics tool that counts visits without cookies, without
              fingerprinting and without personal identifiers. It records the page, the referrer,
              the browser and the country — enough to see which pages are read. The tag is loaded
              only on the production host, so local development and previews are never counted,
              and visitors who send <em>Do Not Track</em> are left out of the numbers entirely.
              The site loads no advertising scripts today.
            </p>
            <p>
              Nothing on the site asks for an account. There is no comment form, no newsletter and
              no field that collects an address.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="app-section" aria-labelledby="privacy-apps">
            <h2 id="privacy-apps">The applications</h2>
            <p>
              The Zeqou applications include no analytics and no telemetry: none of the three
              ships an analytics service, and nothing is sent about what you do in them. They use
              the network only for what you ask for:
            </p>
            <ul className="plain-list">
              <li>The AI provider you connect, with your own API key, when you send a message.</li>
              <li>Model and dataset downloads from Hugging Face or a model host you choose.</li>
              <li>Update checks against the release channel on GitHub — ZeqouXTraining does this at launch, and it can be turned off in Settings.</li>
            </ul>
            <p>
              Work stays on your machine: ZeqouXTraining keeps models, datasets, checkpoints and
              logs as ordinary files in a folder you choose, and ZeqouXChat runs local models on
              your own hardware. API keys are stored locally by the apps that hold them.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="app-section" aria-labelledby="privacy-services">
            <h2 id="privacy-services">Other services this project uses</h2>
            <ul className="plain-list">
              <li>
                <a href={site.supportGoalUrl} target="_blank" rel="noreferrer">Ko-fi</a> handles
                donations, including card payments. Only the donation itself reaches the project;
                their privacy policy covers the rest.
              </li>
              <li>
                <a href="https://revolut.me/mykhai_y7_cco3" target="_blank" rel="noreferrer">Revolut</a>{' '}
                is the other way to donate. The site links to it and nothing else.
              </li>
              <li>
                <a href={site.githubUrl} target="_blank" rel="noreferrer">GitHub</a> hosts the
                source, the releases and the downloads, and it is where issues are reported. Their
                privacy policy applies when you follow a link there.
              </li>
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="app-section" aria-labelledby="privacy-contact">
            <h2 id="privacy-contact">Questions and requests</h2>
            <p>
              Ask in the{' '}
              <a href="https://github.com/Mishaadevv/zeqou/issues" target="_blank" rel="noreferrer">
                site repository's issues
              </a>
              . It is public, so the answer helps the next person with the same question — and it
              keeps the conversation somewhere a visitor can read it.
            </p>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
