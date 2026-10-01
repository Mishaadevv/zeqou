import { SupportSection } from '../components/SupportSection';

/** The place the footer and the FAQ send people who ask how to help. */
export function Support() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-hero">
          <p className="label">Support</p>
          <h1>Support Zeqou</h1>
          <p className="lead">
            Every Zeqou application is free to download and update, and supporting the project is
            optional. Here is what a contribution pays for.
          </p>
        </div>
      </div>

      <SupportSection />
    </div>
  );
}
