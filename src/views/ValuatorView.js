import { sounds } from '../services/sound.js';

export function renderValuatorView() {
  return `
    <div class="container valuator-container">
      <div style="text-align: center; max-width: 720px; margin: 0 auto 48px;">
        <span class="badge badge-cyan mb-2">AI ASSET VALUATION ENGINE</span>
        <h1 style="font-size: 2.6rem; font-weight: 800; margin: 8px 0 14px;">
          Fair Dead-Asset Liquidation Valuator
        </h1>
        <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.5;">
          Determine the true salvage value of your failed venture's code, Figma files, and domains based on historical comparable transactions.
        </p>
      </div>

      <div class="valuator-layout">
        
        <!-- Left: Interactive Sliders Form -->
        <div class="valuator-form-card">
          <h3 style="font-size: 1.3rem; margin-bottom: 24px; display: flex; align-items: center; gap: 10px;">
            <span>⚙️</span> Technical Asset Parameters
          </h3>

          <!-- Slider 1: Months -->
          <div class="valuator-slider-row">
            <div class="slider-header">
              <span class="slider-label">Engineering Months Invested:</span>
              <span class="slider-value-badge" id="val-months-badge">12 months</span>
            </div>
            <input type="range" min="1" max="36" value="12" class="valuator-slider" id="val-months">
          </div>

          <!-- Slider 2: Dev Count -->
          <div class="valuator-slider-row">
            <div class="slider-header">
              <span class="slider-label">Full-Time Software Engineers on Team:</span>
              <span class="slider-value-badge" id="val-devs-badge">2 developers</span>
            </div>
            <input type="range" min="1" max="8" value="2" class="valuator-slider" id="val-devs">
          </div>

          <!-- Slider 3: LOC -->
          <div class="valuator-slider-row">
            <div class="slider-header">
              <span class="slider-label">Lines of Production Code (LOC):</span>
              <span class="slider-value-badge" id="val-loc-badge">35,000 LOC</span>
            </div>
            <input type="range" min="5000" max="100000" step="5000" value="35000" class="valuator-slider" id="val-loc">
          </div>

          <!-- Slider 4: Test Coverage -->
          <div class="valuator-slider-row">
            <div class="slider-header">
              <span class="slider-label">Unit Test & CI Coverage:</span>
              <span class="slider-value-badge" id="val-tests-badge">85% Coverage</span>
            </div>
            <input type="range" min="20" max="100" step="5" value="85" class="valuator-slider" id="val-tests">
          </div>

          <!-- Slider 5: Figma Screens -->
          <div class="valuator-slider-row">
            <div class="slider-header">
              <span class="slider-label">Figma Screens & Design System:</span>
              <span class="slider-value-badge" id="val-screens-badge">40 screens</span>
            </div>
            <input type="range" min="5" max="100" step="5" value="40" class="valuator-slider" id="val-screens">
          </div>

          <!-- Slider 6: Waitlist / Leads -->
          <div class="valuator-slider-row">
            <div class="slider-header">
              <span class="slider-label">Double Opt-in User Waitlist:</span>
              <span class="slider-value-badge" id="val-leads-badge">2,000 leads</span>
            </div>
            <input type="range" min="0" max="10000" step="500" value="2000" class="valuator-slider" id="val-leads">
          </div>

          <!-- Checkboxes for Quality -->
          <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 10px;">
            <label class="filter-checkbox">
              <input type="checkbox" id="val-docker" checked>
              <span>Dockerized / Single Command Local Boot (+15% Valuation)</span>
            </label>
            <label class="filter-checkbox">
              <input type="checkbox" id="val-domain" checked>
              <span>Includes Premium .io / .ai Domain (+18% Valuation)</span>
            </label>
            <label class="filter-checkbox">
              <input type="checkbox" id="val-cto-hours" checked>
              <span>Founder/CTO offers 5+ hours live transition walkthrough (+12% Valuation)</span>
            </label>
          </div>
        </div>

        <!-- Right: Sticky Valuation Output -->
        <aside class="valuation-results-card">
          <span class="badge badge-emerald mb-2">RECOMMENDED LIQUIDATION VALUATION</span>
          
          <div class="valuation-highlight-box">
            <div style="font-size: 0.8rem; color: var(--text-dim); font-family: var(--font-mono); text-transform: uppercase;">
              Fair Market Liquidation Price
            </div>
            <div class="valuation-big-price" id="val-result-price">$2,450</div>
            <span class="savings-pill" id="val-savings-pill">Saves Buyer 96% vs Rebuilding</span>
          </div>

          <!-- Comparison Table -->
          <div class="valuation-comparison-table">
            <div class="valuation-comparison-row">
              <span style="color: var(--text-muted);">Estimated Original Build Cost:</span>
              <strong style="color: var(--crimson-neon); font-family: var(--font-mono); text-decoration: line-through;" id="val-orig-cost">$72,000</strong>
            </div>

            <div class="valuation-comparison-row">
              <span style="color: var(--text-muted);">Estimated Dev Months Saved:</span>
              <strong style="color: var(--emerald-neon);" id="val-saved-months">12 Months of Labor</strong>
            </div>

            <div class="valuation-comparison-row">
              <span style="color: var(--text-muted);">DeadStartup Escrow Fee (10%):</span>
              <span style="color: var(--cyan-neon); font-family: var(--font-mono);" id="val-fee">-$245</span>
            </div>

            <div class="valuation-comparison-row" style="background: rgba(0, 245, 155, 0.05); border: 1px solid rgba(0, 245, 155, 0.2);">
              <span style="color: var(--emerald-neon); font-weight: 700;">Net Cash to Failed Founder:</span>
              <strong style="color: var(--emerald-neon); font-size: 1.15rem; font-family: var(--font-mono);" id="val-net-payout">$2,205</strong>
            </div>
          </div>

          <!-- Suggested Granular Split -->
          <div style="margin-bottom: 24px;">
            <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-dim); margin-bottom: 8px;">
              RECOMMENDED GRANULAR ASSET STRIP PRICING:
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.82rem;">
              <div style="padding: 8px 12px; background: rgba(255, 255, 255, 0.02); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                <div style="color: var(--text-dim);">💻 Codebase Repo:</div>
                <strong style="color: var(--text-main);" id="val-split-code">$1,450</strong>
              </div>
              <div style="padding: 8px 12px; background: rgba(255, 255, 255, 0.02); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                <div style="color: var(--text-dim);">🎨 Figma UI Kit:</div>
                <strong style="color: var(--text-main);" id="val-split-figma">$400</strong>
              </div>
              <div style="padding: 8px 12px; background: rgba(255, 255, 255, 0.02); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                <div style="color: var(--text-dim);">🌐 Domain Name:</div>
                <strong style="color: var(--text-main);" id="val-split-domain">$350</strong>
              </div>
              <div style="padding: 8px 12px; background: rgba(255, 255, 255, 0.02); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                <div style="color: var(--text-dim);">👥 Leads / Waitlist:</div>
                <strong style="color: var(--text-main);" id="val-split-leads">$250</strong>
              </div>
            </div>
          </div>

          <a href="#studio" class="btn btn-primary btn-lg" style="width: 100%;">
            <span>🚀</span> List Startup with this Valuation
          </a>
        </aside>

      </div>
    </div>
  `;
}

export function attachValuatorEvents() {
  const monthsSlider = document.getElementById('val-months');
  const devsSlider = document.getElementById('val-devs');
  const locSlider = document.getElementById('val-loc');
  const testsSlider = document.getElementById('val-tests');
  const screensSlider = document.getElementById('val-screens');
  const leadsSlider = document.getElementById('val-leads');

  const dockerCheck = document.getElementById('val-docker');
  const domainCheck = document.getElementById('val-domain');
  const ctoCheck = document.getElementById('val-cto-hours');

  const priceResult = document.getElementById('val-result-price');
  const origCost = document.getElementById('val-orig-cost');
  const savedMonths = document.getElementById('val-saved-months');
  const savingsPill = document.getElementById('val-savings-pill');
  const feeDisplay = document.getElementById('val-fee');
  const netPayout = document.getElementById('val-net-payout');

  const splitCode = document.getElementById('val-split-code');
  const splitFigma = document.getElementById('val-split-figma');
  const splitDomain = document.getElementById('val-split-domain');
  const splitLeads = document.getElementById('val-split-leads');

  function updateMath() {
    const months = parseInt(monthsSlider?.value || '12', 10);
    const devs = parseInt(devsSlider?.value || '2', 10);
    const loc = parseInt(locSlider?.value || '35000', 10);
    const tests = parseInt(testsSlider?.value || '85', 10);
    const screens = parseInt(screensSlider?.value || '40', 10);
    const leads = parseInt(leadsSlider?.value || '2000', 10);

    // Update labels
    document.getElementById('val-months-badge').textContent = `${months} months`;
    document.getElementById('val-devs-badge').textContent = `${devs} developer${devs > 1 ? 's' : ''}`;
    document.getElementById('val-loc-badge').textContent = `${loc.toLocaleString()} LOC`;
    document.getElementById('val-tests-badge').textContent = `${tests}% Coverage`;
    document.getElementById('val-screens-badge').textContent = `${screens} screens`;
    document.getElementById('val-leads-badge').textContent = `${leads.toLocaleString()} leads`;

    // Replacement calculation: $6,000 per dev/month + $1.10 per LOC + $150 per screen
    const rawCost = (months * devs * 5500) + (loc * 1.05) + (screens * 120);
    
    // Multipliers
    let multiplier = 0.045; // base liquidation rate ~4.5%
    if (dockerCheck?.checked) multiplier += 0.005;
    if (domainCheck?.checked) multiplier += 0.007;
    if (ctoCheck?.checked) multiplier += 0.005;
    if (tests > 80) multiplier += 0.004;

    const baseValuation = Math.round(rawCost * multiplier + (leads * 0.12));
    const finalPrice = Math.max(750, Math.round(baseValuation / 50) * 50);
    const savings = Math.round((1 - (finalPrice / rawCost)) * 100);
    const fee = Math.round(finalPrice * 0.1);
    const net = finalPrice - fee;

    priceResult.textContent = `$${finalPrice.toLocaleString()}`;
    origCost.textContent = `$${rawCost.toLocaleString()}`;
    savedMonths.textContent = `${months} Months (${devs} Devs)`;
    savingsPill.textContent = `Saves Buyer ${savings}% vs Rebuilding`;
    feeDisplay.textContent = `-$${fee.toLocaleString()}`;
    netPayout.textContent = `$${net.toLocaleString()}`;

    // Granular splits
    splitCode.textContent = `$${Math.round(finalPrice * 0.58)}`;
    splitFigma.textContent = `$${Math.round(finalPrice * 0.18)}`;
    splitDomain.textContent = `$${Math.round(finalPrice * 0.14)}`;
    splitLeads.textContent = `$${Math.round(finalPrice * 0.10)}`;
  }

  [monthsSlider, devsSlider, locSlider, testsSlider, screensSlider, leadsSlider].forEach(slider => {
    if (slider) {
      slider.addEventListener('input', () => {
        sounds.playBeep(450 + slider.value / 10, 'sine', 0.015, 0.02);
        updateMath();
      });
    }
  });

  [dockerCheck, domainCheck, ctoCheck].forEach(c => {
    if (c) {
      c.addEventListener('change', () => {
        sounds.toggleOn();
        updateMath();
      });
    }
  });

  updateMath();
}
