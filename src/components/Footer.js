import { PRESENTATION_INFO } from '../data/seedData.js';

export function renderFooter() {
  return `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="brand-logo" style="margin-bottom: 16px;">
            <div class="brand-icon-wrapper" style="width: 36px; height: 36px;">
              <span>🪦</span>
            </div>
            <span>DeadStartup</span>
          </div>
          <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 20px; max-width: 380px;">
            Turning startup failures into founders' second chances. We treat every line of code, design system, and unused domain as a valuable foundation for the next wave of builders.
          </p>
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--emerald-neon);">
            “Every dead startup has a heartbeat left — we just flip it.”
          </div>
        </div>

        <div class="footer-col">
          <h4>MARKETPLACE</h4>
          <ul>
            <li><a href="#marketplace">All Liquidated Assets</a></li>
            <li><a href="#marketplace?category=E-Commerce">E-Commerce & Storefronts</a></li>
            <li><a href="#marketplace?category=AI+%26+Logistics">AI & Micro-Warehouses</a></li>
            <li><a href="#marketplace?category=Creator+Economy+%26+Audio">Audio & Creator Tools</a></li>
            <li><a href="#marketplace?category=HealthTech">HealthTech & Telemedicine</a></li>
            <li><a href="#marketplace?category=Developer+Tools">DevTools & Metrics</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>FOUNDERS & MANAGERS</h4>
          <ul>
            <li><a href="#studio">List Your Dead Startup</a></li>
            <li><a href="#studio">Staff Handover Wizard</a></li>
            <li><a href="#valuation">AI Asset Valuator</a></li>
            <li><a href="#escrow">5-Stage Escrow Room</a></li>
            <li><a href="#post-mortems">Post-Mortem Library</a></li>
            <li><a href="#roast">Roast & Pivot Forum</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>PROJECT & RESEARCH</h4>
          <ul>
            <li><a href="#deck">Slide Deck & TAM Analytics</a></li>
            <li><a href="#compare">AI vs Traditional Study</a></li>
            <li><a href="#deck">Buyer Utility Matrix</a></li>
            <li><a href="#deck">10-Year Financial Model</a></li>
            <li><a href="#deck">Flippa / Acquire Analysis</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          <span>© 2026 DeadStartup Technologies. CSE-7 Group 9: </span>
          <span style="color: var(--text-muted);">
            ${PRESENTATION_INFO.teamMembers.join(' • ')}
          </span>
        </div>
        <div style="color: var(--text-dim); font-size: 0.78rem;">
          Research by ${PRESENTATION_INFO.aiPresentationAuthors.join(', ')} • Built for Founders, Students & Solo Builders
        </div>
      </div>
    </div>
  `;
}
