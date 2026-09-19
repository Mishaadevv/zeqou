import { Link } from 'react-router-dom';
import { site } from '../config/site';
import { BrandMark } from './BrandMark';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand" aria-label="Zeqou — home">
              <BrandMark />
              <span>ZEQOU</span>
            </Link>
            <p>{site.tagline}</p>
          </div>
          <div className="footer-links">
            <nav aria-label="Footer">
              <Link to="/apps">Apps</Link>
              <Link to="/docs">Docs</Link>
              <Link to="/updates">Updates</Link>
              <a href={site.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <Link to="/about">About</Link>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">© {site.copyrightYear} Zeqou</div>
      </div>
    </footer>
  );
}
