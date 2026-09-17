import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <div className="page">
      <SEO title="Page not found — Zeqou" description="The page you requested does not exist." />
      <div className="container not-found">
        <h1>Nothing here.</h1>
        <p>The page you requested does not exist or has moved.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            Back home
          </Link>
          <Link to="/apps" className="btn btn-ghost">
            Browse apps
          </Link>
        </div>
      </div>
    </div>
  );
}
