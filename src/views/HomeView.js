import { storage } from '../services/storage.js';
import { sounds } from '../services/sound.js';

export function renderHomeView() {
  const startups = storage.getStartups();
  const featured = startups.slice(0, 3);

  return `
    <!-- Hero Section -->
    <section class="home-hero" style="position: relative; padding: 80px 0 60px; overflow: hidden;">
      <div class="container" style="position: relative; z-index: 2;">
        <div style="display: flex; flex-direction: column; align-items: center; text-align: center; max-width: 960px; margin: 0 auto;">
          
          <div class="inline-flex items-center gap-2 mb-6" style="margin-bottom: 24px;">
            <span class="badge badge-emerald animate-pulse-heart">
              <span style="font-size: 1.1rem; line-height: 1;">💓</span> RECOVER & REVIVE
            </span>
            <span class="badge badge-slate">
              90% STARTUP FAILURE RATE = $100B ASSET TREASURE
            </span>
          </div>

          <h1 style="font-size: clamp(2.5rem, 6vw, 4.2rem); font-weight: 800; line-height: 1.08; margin-bottom: 24px; letter-spacing: -0.03em;">
            Startups Die. <span class="text-gradient-emerald">Code Doesn't.</span>
          </h1>

          <p style="font-size: clamp(1.05rem, 2vw, 1.3rem); color: var(--text-muted); line-height: 1.6; max-width: 760px; margin-bottom: 36px;">
            The world's dedicated liquidation and handover marketplace for failed startups. Salvage battle-tested codebases, Figma systems, domains, and waitlists at <strong>90% discounts</strong> — with verified IP and escrow protection.
          </p>

          <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: center; margin-bottom: 50px;">
            <a href="#marketplace" class="btn btn-primary btn-lg" id="hero-btn-explore">
              <span>🛒</span> Explore Asset Vault
            </a>
            <a href="#studio" class="btn btn-secondary btn-lg" id="hero-btn-list">
              <span>📦</span> Post Dead Startup / Handover
            </a>
            <a href="#compare" class="btn btn-cyan btn-lg" id="hero-btn-compare">
              <span>🤖</span> AI vs Standard Mode
            </a>
          </div>

          <!-- Dual Persona Alignment Card (From Presentation 2: Riya vs Founder) -->
          <div class="glass-panel" style="width: 100%; padding: 28px; text-align: left; margin-bottom: 56px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
              <!-- Persona 1: Riya -->
              <div style="background: rgba(255, 184, 0, 0.04); border: 1px solid rgba(255, 184, 0, 0.2); border-radius: var(--radius-lg); padding: 20px;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 44px; height: 44px; border-radius: 50%; background: #f59e0b; color: #000; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.2rem;">
                    R
                  </div>
                  <div>
                    <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--amber-neon);">Riya, 21 — Early-Stage Entrepreneur</h4>
                    <p style="font-size: 0.78rem; color: var(--text-muted);">Student & First-Time Founder • Limited Budget ($1,200)</p>
                  </div>
                </div>
                <p style="font-size: 0.85rem; color: #cbd5e1; font-style: italic; margin-bottom: 14px;">
                  “I need an e-commerce domain, website code, and a brand kit. I can’t afford $20k to build from scratch or get it wrong.”
                </p>
                <a href="#marketplace?search=fashion" class="btn btn-outline-emerald btn-sm" style="border-color: var(--amber-neon); color: var(--amber-neon); width: 100%;">
                  ⚡ View Riya's Matched Bundle ($1,250)
                </a>
              </div>

              <!-- Persona 2: Failed Founder / Staff -->
              <div style="background: rgba(0, 245, 155, 0.04); border: 1px solid rgba(0, 245, 155, 0.2); border-radius: var(--radius-lg); padding: 20px;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--emerald-neon); color: #000; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.2rem;">
                    F
                  </div>
                  <div>
                    <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--emerald-neon);">Founder & Managerial Staff</h4>
                    <p style="font-size: 0.78rem; color: var(--text-muted);">CTO, VP Eng, Operations • Shutting Down Venture</p>
                  </div>
                </div>
                <p style="font-size: 0.85rem; color: #cbd5e1; font-style: italic; margin-bottom: 14px;">
                  “We burned $600k and our runway ended. Our code runs cleanly. We want to recoup cash for investors and hand over cleanly.”
                </p>
                <a href="#studio" class="btn btn-primary btn-sm" style="width: 100%;">
                  📦 Start Handover Wizard (100% Stealth Option)
                </a>
              </div>
            </div>
          </div>

          <!-- Quick Interactive Valuator Teaser -->
          <div class="glass-panel-elevated" style="width: 100%; padding: 32px; text-align: left; position: relative;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
              <div>
                <span class="badge badge-cyan mb-2" style="margin-bottom: 6px;">AI DEAD-ASSET CALCULATOR</span>
                <h3 style="font-size: 1.4rem;">What is your dead startup's remaining salvage value?</h3>
              </div>
              <a href="#valuation" class="btn btn-cyan btn-sm">Full Engine →</a>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; align-items: center;">
              <div>
                <label style="font-size: 0.82rem; color: var(--text-muted); display: block; margin-bottom: 6px;">Engineering Months Invested:</label>
                <input type="range" min="1" max="36" value="10" class="valuator-slider" id="home-val-months">
                <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.8rem; margin-top: 4px;">
                  <span style="color: var(--text-dim);">1 month</span>
                  <span style="color: var(--emerald-neon); font-weight: 700;" id="home-val-months-val">10 months</span>
                  <span style="color: var(--text-dim);">36 months</span>
                </div>
              </div>

              <div>
                <label style="font-size: 0.82rem; color: var(--text-muted); display: block; margin-bottom: 6px;">Lines of Production Code:</label>
                <input type="range" min="5000" max="100000" step="5000" value="30000" class="valuator-slider" id="home-val-loc">
                <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.8rem; margin-top: 4px;">
                  <span style="color: var(--text-dim);">5k</span>
                  <span style="color: var(--emerald-neon); font-weight: 700;" id="home-val-loc-val">30,000 LOC</span>
                  <span style="color: var(--text-dim);">100k</span>
                </div>
              </div>

              <div style="background: rgba(0, 0, 0, 0.4); border: 1px solid var(--border-accent); border-radius: var(--radius-md); padding: 14px; text-align: center;">
                <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); text-transform: uppercase;">Estimated Liquidation Recovery</div>
                <div style="font-size: 1.8rem; font-weight: 800; color: var(--emerald-neon); font-family: var(--font-mono); margin: 4px 0;" id="home-val-result">
                  $3,850
                </div>
                <div style="font-size: 0.75rem; color: var(--amber-neon);">Original Build Cost: <del id="home-val-orig">$65,000</del> (94% Saved)</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Slide 16 Flowchart: How DeadStartup Works -->
    <section style="padding: 60px 0; border-top: 1px solid var(--border-subtle); background: var(--bg-surface);">
      <div class="container">
        <div style="text-align: center; max-width: 700px; margin: 0 auto 48px;">
          <span class="badge badge-emerald mb-2">VERIFIED ASSET HANDOVER PROCESS</span>
          <h2 style="font-size: 2.2rem; margin: 8px 0 16px;">The 5-Stage Revival Workflow</h2>
          <p style="color: var(--text-muted); font-size: 1rem;">
            From shut-down repository to verified handover. Modeled directly on structured escrow and IP assignment to eliminate buyer uncertainty.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
          <div class="timeline-stage-card completed">
            <div class="stage-num-badge">01</div>
            <h4 class="stage-title">Seller Uploads & Post-Mortem</h4>
            <p class="stage-desc">Founders or CTOs list repos, Figma links, domains, and architecture runbooks (with optional Stealth Mode).</p>
          </div>

          <div class="timeline-stage-card completed">
            <div class="stage-num-badge">02</div>
            <h4 class="stage-title">Automated Code & IP Verification</h4>
            <p class="stage-desc">We test if code actually builds, check test coverage, scan open-source licenses, and confirm IP ownership.</p>
          </div>

          <div class="timeline-stage-card completed">
            <div class="stage-num-badge">03</div>
            <h4 class="stage-title">AI Valuation & Live Listing</h4>
            <p class="stage-desc">Algorithm suggests fair liquidation price. Buyers can strip individual assets (code, Figma, domain).</p>
          </div>

          <div class="timeline-stage-card current">
            <div class="stage-num-badge">04</div>
            <h4 class="stage-title">Escrow Deposit & Vault Unlock</h4>
            <p class="stage-desc">Buyer funds are locked in DeadStartup Escrow. IP transfer contract generated and repo access shared.</p>
          </div>

          <div class="timeline-stage-card">
            <div class="stage-num-badge">05</div>
            <h4 class="stage-title">48-Hr Inspection & Payout</h4>
            <p class="stage-desc">Buyer audits code in local sandbox. Upon approval, funds are released to the seller with a 10% fee.</p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 32px;">
          <a href="#escrow" class="btn btn-secondary">
            <span>🔒</span> Try the Interactive Escrow Simulation →
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Liquidated Carcasses -->
    <section style="padding: 72px 0;">
      <div class="container">
        <div style="display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 36px;">
          <div>
            <span class="badge badge-amber mb-2">RECENTLY DECEASED</span>
            <h2 style="font-size: 2.2rem;">Featured Startup Autopsies</h2>
            <p style="color: var(--text-muted); font-size: 0.95rem;">Curated high-quality codebases ready for immediate stripping or total acquisition.</p>
          </div>
          <a href="#marketplace" class="btn btn-outline-emerald">View All Startups (${startups.length}) →</a>
        </div>

        <div class="startup-grid">
          ${featured.map(s => renderStartupCard(s)).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderStartupCard(startup) {
  const savings = Math.round((1 - (startup.bundlePrice / startup.originalDevCost)) * 100);

  return `
    <div class="startup-card" id="card-${startup.id}">
      <div class="card-header-status">
        <span class="death-date-pill">
          <span>💀</span> Died ${startup.died}
        </span>
        <span class="badge badge-emerald">
          <span>✓</span> Health: ${startup.codeHealthScore}%
        </span>
      </div>

      <div class="card-body">
        <div class="card-title-row">
          <a href="#startup/${startup.id}" class="card-startup-name">${startup.name}</a>
          <span class="badge badge-slate">${startup.category}</span>
        </div>

        <p class="card-tagline">${startup.tagline}</p>

        <!-- Sunk vs Sale -->
        <div class="financial-strip">
          <div>
            <div style="font-size: 0.68rem; color: var(--text-dim);">ORIGINAL DEV COST</div>
            <div class="sunk-burn">$${startup.originalDevCost.toLocaleString()}</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.68rem; color: var(--emerald-neon);">BUNDLE PRICE</div>
            <div class="liquidation-price">$${startup.bundlePrice.toLocaleString()}</div>
          </div>
          <span class="discount-badge">-${savings}%</span>
        </div>

        <!-- Granular Stripper Preview -->
        <div class="asset-stripper-list">
          <div class="asset-stripper-item">
            <label>
              <span>💻 Codebase (${startup.assets.codeRepo?.loc || 'Full stack'})</span>
            </label>
            <span class="asset-price-tag">$${startup.assets.codeRepo?.price}</span>
          </div>
          <div class="asset-stripper-item">
            <label>
              <span>🎨 Figma UI Kit (${startup.assets.figma?.screens || 'Design Kit'})</span>
            </label>
            <span class="asset-price-tag">$${startup.assets.figma?.price}</span>
          </div>
          <div class="asset-stripper-item">
            <label>
              <span>🌐 Domain (${startup.assets.domain?.name})</span>
            </label>
            <span class="asset-price-tag">$${startup.assets.domain?.price}</span>
          </div>
        </div>

        <div class="card-tech-tags">
          ${startup.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="card-footer">
        <a href="#startup/${startup.id}" class="btn btn-secondary btn-sm" style="flex: 1;">
          Inspect Autopsy
        </a>
        <a href="#startup/${startup.id}?buy=true" class="btn btn-primary btn-sm">
          Strip Assets →
        </a>
      </div>
    </div>
  `;
}

export function attachHomeEvents() {
  const monthsSlider = document.getElementById('home-val-months');
  const locSlider = document.getElementById('home-val-loc');
  const monthsVal = document.getElementById('home-val-months-val');
  const locVal = document.getElementById('home-val-loc-val');
  const resultVal = document.getElementById('home-val-result');
  const origVal = document.getElementById('home-val-orig');

  function updateHomeValuator() {
    if (!monthsSlider || !locSlider) return;
    const months = parseInt(monthsSlider.value, 10);
    const loc = parseInt(locSlider.value, 10);

    monthsVal.textContent = `${months} months`;
    locVal.textContent = `${loc.toLocaleString()} LOC`;

    // Formula: average replacement cost is $6,500/month of engineering + $1.20 per LOC
    const replacementCost = Math.round((months * 6500) + (loc * 1.15));
    // Fair liquidation recovery is 5% - 7% of replacement cost, plus base value
    const liquidationVal = Math.round(Math.max(800, replacementCost * 0.058));

    resultVal.textContent = `$${liquidationVal.toLocaleString()}`;
    origVal.textContent = `$${replacementCost.toLocaleString()}`;
  }

  if (monthsSlider && locSlider) {
    monthsSlider.addEventListener('input', () => {
      sounds.playBeep(600 + monthsSlider.value * 10, 'sine', 0.015, 0.02);
      updateHomeValuator();
    });
    locSlider.addEventListener('input', () => {
      sounds.playBeep(500 + locSlider.value / 200, 'sine', 0.015, 0.02);
      updateHomeValuator();
    });
  }
}
