import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import './styles/global.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element #root not found');
}

// '/zeqou' on GitHub Pages, '' once the site has its own domain. BASE_URL
// always ends with a slash; the router wants it without one.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

const tree = (
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Prerendered pages arrive with their markup already inside #root; the dev
// server serves an empty one.
if (root.hasChildNodes()) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
