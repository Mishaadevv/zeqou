import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CursorSpotlight } from '../components/CursorSpotlight';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { SEO } from '../components/SEO';
import { NotFound } from '../pages/NotFound';
import { notFoundMeta, routes } from '../routes';
import { ThemeProvider } from '../theme/ThemeContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

/**
 * The site itself, without a router.
 *
 * GitHub Pages serves files, not rewrites, so there are no hash routes any
 * more: the real paths (/apps/harness) are prerendered into static HTML at
 * build time, and the router that reads them lives in main.tsx in the browser
 * and in src/entry-server.tsx during the build.
 */
export function App() {
  return (
    <ThemeProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <CursorSpotlight />
      <Navbar />
      <main id="main">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route
            path="*"
            element={
              <>
                <SEO {...notFoundMeta} />
                <NotFound />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
