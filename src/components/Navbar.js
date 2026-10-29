import { sounds } from '../services/sound.js';
import { storage } from '../services/storage.js';

export function renderNavbar(currentRoute) {
  const isAi = storage.getAiMode();
  const isSound = sounds.enabled;

  return `
    <div class="ticker-bar">
      <div class="ticker-content">
        <div class="ticker-item">
          <span>💀</span> <strong>418</strong> Startups Salvaged
        </div>
        <div class="ticker-item">
          <span>💎</span> <strong class="ticker-highlight">$2,840,000+</strong> Recovered for Failed Founders
        </div>
        <div class="ticker-item">
          <span>⚡</span> <strong>1,240</strong> New Founders & Students Launched Faster
        </div>
        <div class="ticker-item">
          <span>🔒</span> <strong>100% Escrow & IP Cleared</strong> Handover Guarantee
        </div>
        <div class="ticker-item">
          <span>💡</span> <em>"Every dead startup has a heartbeat left — we just flip it."</em>
        </div>
        <!-- Loop duplicate for seamless scrolling -->
        <div class="ticker-item">
          <span>💀</span> <strong>418</strong> Startups Salvaged
        </div>
        <div class="ticker-item">
          <span>💎</span> <strong class="ticker-highlight">$2,840,000+</strong> Recovered for Failed Founders
        </div>
        <div class="ticker-item">
          <span>⚡</span> <strong>1,240</strong> New Founders Launched
        </div>
      </div>
    </div>

    <div class="container">
      <nav class="navbar">
        <a href="#home" class="brand-logo" id="nav-brand-logo">
          <div class="brand-icon-wrapper">
            <span>🪦</span>
            <div class="brand-ecg-pulse"></div>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span>DeadStartup</span>
              <span class="badge badge-emerald text-xs" style="font-size: 0.65rem; padding: 2px 6px;">BETA</span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-dim); font-weight: normal; font-family: var(--font-sans); margin-top: -2px;">
              Innovating from the grave
            </div>
          </div>
        </a>

        <ul class="nav-links">
          <li>
            <a href="#marketplace" class="nav-link ${currentRoute === 'marketplace' ? 'active' : ''}" id="nav-marketplace">
              <span>🛒</span> Asset Vault
            </a>
          </li>
          <li>
            <a href="#compare" class="nav-link ${currentRoute === 'compare' ? 'active' : ''}" id="nav-compare">
              <span>🤖</span> AI vs Standard
            </a>
          </li>
          <li>
            <a href="#valuation" class="nav-link ${currentRoute === 'valuation' ? 'active' : ''}" id="nav-valuation">
              <span>🧮</span> AI Valuator
            </a>
          </li>
          <li>
            <a href="#escrow" class="nav-link ${currentRoute === 'escrow' ? 'active' : ''}" id="nav-escrow">
              <span>🔒</span> Escrow Room
            </a>
          </li>
          <li>
            <a href="#post-mortems" class="nav-link ${currentRoute === 'post-mortems' ? 'active' : ''}" id="nav-postmortems">
              <span>📜</span> Post-Mortems
            </a>
          </li>
          <li>
            <a href="#roast" class="nav-link ${currentRoute === 'roast' ? 'active' : ''}" id="nav-roast">
              <span>🔥</span> Roast & Pivot
            </a>
          </li>
          <li>
            <a href="#deck" class="nav-link ${currentRoute === 'deck' ? 'active' : ''}" id="nav-deck">
              <span>📊</span> Deck & TAM
            </a>
          </li>
        </ul>

        <div class="nav-actions">
          <!-- AI Mode Switcher (Prototype 1 vs 2 from Presentation 2) -->
          <button class="ai-mode-pill ${isAi ? 'active' : ''}" id="btn-toggle-ai" title="Toggle AI Natural-Language Discovery (Prototype 2 Mode)">
            <span class="ai-indicator-dot"></span>
            <span>AI Copilot: <strong>${isAi ? 'ON' : 'OFF'}</strong></span>
          </button>

          <!-- Audio Synthesizer Toggle -->
          <button class="audio-toggle-btn ${isSound ? 'active' : ''}" id="btn-toggle-sound" title="Toggle Cyber Audio Feedback">
            <span id="sound-icon">${isSound ? '🔊' : '🔇'}</span>
          </button>

          <!-- Founder / Staff Handover CTA -->
          <a href="#studio" class="btn btn-primary btn-sm" id="nav-btn-list-startup">
            <span>+</span> List Dead Startup
          </a>
        </div>
      </nav>
    </div>
  `;
}

export function attachNavbarEvents() {
  const soundBtn = document.getElementById('btn-toggle-sound');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const active = sounds.toggle();
      soundBtn.classList.toggle('active', active);
      document.getElementById('sound-icon').textContent = active ? '🔊' : '🔇';
      window.showToast(active ? 'Audio synthesis enabled' : 'Audio muted', 'info');
    });
  }

  const aiBtn = document.getElementById('btn-toggle-ai');
  if (aiBtn) {
    aiBtn.addEventListener('click', () => {
      const current = storage.getAiMode();
      const updated = !current;
      storage.setAiMode(updated);
      aiBtn.classList.toggle('active', updated);
      aiBtn.querySelector('strong').textContent = updated ? 'ON' : 'OFF';
      if (updated) {
        sounds.playBeep(880, 'sine', 0.1);
        window.showToast('AI-Assisted Guided Discovery Mode enabled (Prototype 2)', 'info');
      } else {
        sounds.playBeep(440, 'sine', 0.08);
        window.showToast('Standard Filter & Keyword Mode enabled (Prototype 1)', 'info');
      }
    });
  }
}
