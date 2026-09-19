import { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { ThemeProvider } from '../theme/ThemeContext';
import { About } from '../pages/About';
import { Apps } from '../pages/Apps';
import { DocArticle } from '../pages/DocArticle';
import { Docs } from '../pages/Docs';
import { Harness } from '../pages/Harness';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Updates } from '../pages/Updates';
import { XChat } from '../pages/XChat';
import { XTraining } from '../pages/XTraining';

/**
 * Hash routing is used deliberately: GitHub Pages serves static files
 * with no server rewrites, so hash routes (/#/apps/harness) work on
 * both user sites and project sites, including page refreshes and
 * direct links. A 404.html fallback is also included.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ScrollToTop />
        <Navbar />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/apps/harness" element={<Harness />} />
            <Route path="/apps/xchat" element={<XChat />} />
            <Route path="/apps/xtraining" element={<XTraining />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/:slug" element={<DocArticle />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}
