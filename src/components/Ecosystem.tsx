import { Link } from 'react-router-dom';

/** Thin ecosystem diagram: ZEQOU with quiet lines to each product. */
export function Ecosystem() {
  return (
    <div className="eco">
      <span className="eco-mark">
        <img src="./assets/branding/zeqou-x.png" alt="" width={52} height={52} loading="lazy" />
        ZEQOU
      </span>
      <div className="eco-wire" aria-hidden="true" />
      <div className="eco-children">
        <Link to="/apps/harness" className="eco-child">
          HARNESS
        </Link>
        <Link to="/apps/xchat" className="eco-child">
          XCHAT
        </Link>
        <span className="eco-child dim">FUTURE</span>
      </div>
    </div>
  );
}
