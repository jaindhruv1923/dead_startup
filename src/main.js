import { renderNavbar, attachNavbarEvents } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';
import { renderHomeView, attachHomeEvents } from './views/HomeView.js';
import { renderMarketplaceView, attachMarketplaceEvents } from './views/MarketplaceView.js';
import { renderStartupDetailView, attachStartupDetailEvents } from './views/StartupDetailView.js';
import { renderHandoverStudioView, attachHandoverStudioEvents } from './views/HandoverStudioView.js';
import { renderEscrowTrackerView, attachEscrowTrackerEvents } from './views/EscrowTrackerView.js';
import { renderValuatorView, attachValuatorEvents } from './views/ValuatorView.js';
import { renderCompareView, attachCompareEvents } from './views/CompareView.js';
import { renderDeckView, attachDeckEvents } from './views/DeckView.js';
import { renderPostMortemView, attachPostMortemEvents } from './views/PostMortemView.js';
import { renderRoastPivotView, attachRoastPivotEvents } from './views/RoastPivotView.js';
import { openOfferModal } from './components/OfferModal.js';
import { sounds } from './services/sound.js';
import { storage } from './services/storage.js';

// Global Helpers
window.openOfferModal = openOfferModal;

window.showToast = function(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️'}</span>
    <span style="flex: 1;">${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

// Router
function parseHash() {
  const hash = window.location.hash.slice(1) || 'home';
  const [routePart, queryPart] = hash.split('?');
  const params = {};
  if (queryPart) {
    const searchParams = new URLSearchParams(queryPart);
    for (const [k, v] of searchParams.entries()) {
      params[k] = v;
    }
  }

  const segments = routePart.split('/');
  return {
    route: segments[0],
    id: segments[1] || null,
    params
  };
}

function handleRoute() {
  const { route, id, params } = parseHash();
  const headerEl = document.getElementById('site-header');
  const mainEl = document.getElementById('main-content');
  const footerEl = document.getElementById('site-footer');

  // Render header
  if (headerEl) {
    headerEl.innerHTML = renderNavbar(route);
    attachNavbarEvents();
  }

  // Render footer
  if (footerEl) {
    footerEl.innerHTML = renderFooter();
  }

  // Window Title
  const titles = {
    home: "DeadStartup — Turning Startup Failures into Founders' Second Chances",
    marketplace: "Asset Vault & Graveyard — DeadStartup",
    startup: "Startup Autopsy & Handover — DeadStartup",
    studio: "Founder & Staff Handover Studio — DeadStartup",
    escrow: "5-Stage Escrow Handover Room — DeadStartup",
    valuation: "AI Dead-Asset Valuator — DeadStartup",
    compare: "AI vs Traditional Marketplace Analysis — DeadStartup",
    deck: "Pitch Deck & TAM Analytics — DeadStartup",
    'post-mortems': "Startup Mausoleum & Chronicles — DeadStartup",
    roast: "Roast & Pivot Forum — DeadStartup"
  };

  document.title = titles[route] || "DeadStartup";

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Render Route View
  if (!mainEl) return;

  switch (route) {
    case 'marketplace':
      mainEl.innerHTML = renderMarketplaceView(params);
      attachMarketplaceEvents();
      break;

    case 'startup':
      mainEl.innerHTML = renderStartupDetailView(id, params.buy === 'true');
      attachStartupDetailEvents(id);
      break;

    case 'studio':
      mainEl.innerHTML = renderHandoverStudioView();
      attachHandoverStudioEvents();
      break;

    case 'escrow':
      mainEl.innerHTML = renderEscrowTrackerView();
      attachEscrowTrackerEvents();
      break;

    case 'valuation':
      mainEl.innerHTML = renderValuatorView();
      attachValuatorEvents();
      break;

    case 'compare':
      mainEl.innerHTML = renderCompareView();
      attachCompareEvents();
      break;

    case 'deck':
      mainEl.innerHTML = renderDeckView();
      attachDeckEvents();
      break;

    case 'post-mortems':
      mainEl.innerHTML = renderPostMortemView();
      attachPostMortemEvents();
      break;

    case 'roast':
      mainEl.innerHTML = renderRoastPivotView();
      attachRoastPivotEvents();
      break;

    case 'home':
    default:
      mainEl.innerHTML = renderHomeView();
      attachHomeEvents();
      break;
  }
}

// Global Event Listeners
window.addEventListener('hashchange', handleRoute);

window.addEventListener('DOMContentLoaded', () => {
  handleRoute();

  // Initialize Web Audio on first user interaction
  const initAudio = () => {
    sounds.init();
    window.removeEventListener('click', initAudio);
    window.removeEventListener('keydown', initAudio);
  };
  window.addEventListener('click', initAudio, { once: true });
  window.addEventListener('keydown', initAudio, { once: true });

  // Listen to AI mode changes from navbar
  window.addEventListener('deadstartup:ai_mode_changed', () => {
    const { route } = parseHash();
    if (route === 'marketplace' || route === 'compare') {
      handleRoute();
    }
  });
});
