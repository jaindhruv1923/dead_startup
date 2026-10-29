import { storage } from '../services/storage.js';
import { sounds } from '../services/sound.js';

export function renderStartupDetailView(id, openBuyModal = false) {
  const startup = storage.getStartupById(id);

  if (!startup) {
    return `
      <div class="container" style="padding: 80px 0; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 16px;">🪦</div>
        <h2>Startup Not Found in Graveyard</h2>
        <p style="color: var(--text-muted); margin: 12px 0 24px;">This startup may have already been resurrected or removed.</p>
        <a href="#marketplace" class="btn btn-primary">Back to Asset Vault</a>
      </div>
    `;
  }

  const savings = Math.round((1 - (startup.bundlePrice / startup.originalDevCost)) * 100);

  return `
    <!-- Tombstone Hero Header -->
    <section class="autopsy-hero">
      <div class="container">
        <div class="tombstone-banner">
          <div class="tombstone-main">
            <div class="tombstone-meta">
              <span class="badge badge-crimson animate-blink">
                <span>💀</span> DECEASED ${startup.died}
              </span>
              <span class="badge badge-emerald">
                <span>🛡️</span> VERIFIED CODE & IP
              </span>
              <span class="badge badge-slate">
                ${startup.category}
              </span>
            </div>

            <h1 class="tombstone-title">${startup.name}</h1>
            <p class="tombstone-epitaph">${startup.tagline}</p>

            <div class="founder-quote">
              “${startup.founderQuote}”
              <div style="font-weight: 700; margin-top: 6px; font-style: normal; font-size: 0.85rem; color: var(--text-main);">
                — ${startup.founderName} (${startup.managerialTitle})
              </div>
            </div>

            <!-- Vital Stats -->
            <div class="autopsy-vital-stats">
              <div class="vital-stat-box">
                <div class="vital-stat-label">Capital Burned</div>
                <div class="vital-stat-val" style="color: var(--crimson-neon);">$${startup.burnedAmount.toLocaleString()}</div>
              </div>
              <div class="vital-stat-box">
                <div class="vital-stat-label">Original Dev Cost</div>
                <div class="vital-stat-val" style="color: var(--text-muted);">$${startup.originalDevCost.toLocaleString()}</div>
              </div>
              <div class="vital-stat-box">
                <div class="vital-stat-label">Full Bundle Price</div>
                <div class="vital-stat-val" style="color: var(--emerald-neon);">$${startup.bundlePrice.toLocaleString()}</div>
              </div>
              <div class="vital-stat-box">
                <div class="vital-stat-label">Buyer Savings</div>
                <div class="vital-stat-val" style="color: var(--emerald-neon);">${savings}% Saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content & Stripper Layout -->
    <div class="container">
      <div class="autopsy-content-layout">
        <!-- Left: Dossier Tabs & Runbook -->
        <div class="autopsy-main-dossier">
          
          <!-- Tab Navigation -->
          <div class="autopsy-tabs">
            <button class="autopsy-tab-btn active" data-tab="handover">
              📋 Staff Handover Dossier
            </button>
            <button class="autopsy-tab-btn" data-tab="health">
              🩺 Code Health & Due Diligence
            </button>
            <button class="autopsy-tab-btn" data-tab="postmortem">
              📜 Founder Post-Mortem
            </button>
            <button class="autopsy-tab-btn" data-tab="pivots">
              💡 AI 2026 Pivot Ideas (3)
            </button>
          </div>

          <!-- TAB 1: Handover Runbook -->
          <div class="autopsy-tab-content" id="tab-handover">
            <div class="handover-card">
              <h3 class="handover-card-title">
                <span>⚙️</span> System Architecture & Blueprint
              </h3>
              <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
                ${startup.managerialHandover.architecture}
              </p>

              <div style="background: rgba(0, 245, 155, 0.04); border: 1px solid rgba(0, 245, 155, 0.2); border-radius: var(--radius-md); padding: 16px; margin-bottom: 24px;">
                <h4 style="font-size: 0.9rem; color: var(--emerald-neon); margin-bottom: 6px;">Prerequisites & Environment</h4>
                <div style="font-size: 0.85rem; font-family: var(--font-mono); color: #cbd5e1;">
                  ${startup.managerialHandover.techRequirements}
                </div>
              </div>

              <h4 style="font-size: 0.95rem; margin-bottom: 10px; color: var(--text-main);">
                💻 One-Command Local Boot Runbook:
              </h4>
              <div class="code-block-preview">
                <pre>${startup.managerialHandover.runbookCommands}</pre>
              </div>

              <h4 style="font-size: 0.95rem; margin: 24px 0 10px; color: var(--text-main);">
                🔑 Environment Keys Checklist (.env):
              </h4>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${startup.managerialHandover.envVariables.map(env => `
                  <span class="badge badge-slate" style="font-family: var(--font-mono); font-size: 0.78rem;">
                    ${env}
                  </span>
                `).join('')}
              </div>

              <!-- CTO Support Offering -->
              <div style="margin-top: 28px; padding: 20px; background: rgba(0, 210, 255, 0.06); border: 1px solid rgba(0, 210, 255, 0.25); border-radius: var(--radius-lg);">
                <div style="display: flex; align-items: flex-start; gap: 14px;">
                  <span style="font-size: 1.8rem;">👨‍💻</span>
                  <div>
                    <h4 style="font-size: 1.05rem; color: var(--cyan-neon); margin-bottom: 4px;">Original Staff Transition Support</h4>
                    <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.5;">
                      ${startup.managerialHandover.ctoSupport}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 2: Code Health & Due Diligence -->
          <div class="autopsy-tab-content" id="tab-health" style="display: none;">
            <div class="handover-card">
              <h3 class="handover-card-title">
                <span>🩺</span> Automated Technical Inspection & IP Verification
              </h3>
              <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 24px;">
                Audited against DeadStartup's automated CI/CD pipeline and open-source license scanner.
              </p>

              <div class="code-health-grid">
                <div class="health-metric-box">
                  <div class="health-metric-header">
                    <span>Test Suite Coverage</span>
                    <strong style="color: var(--emerald-neon);">${startup.assets.codeRepo?.testCoverage || '90%'}</strong>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${startup.assets.codeRepo?.testCoverage || '90%'}; background: var(--emerald-neon);"></div>
                  </div>
                </div>

                <div class="health-metric-box">
                  <div class="health-metric-header">
                    <span>Overall Health Index</span>
                    <strong style="color: var(--emerald-neon);">${startup.codeHealthScore}/100</strong>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${startup.codeHealthScore}%; background: var(--emerald-neon);"></div>
                  </div>
                </div>

                <div class="health-metric-box">
                  <div class="health-metric-header">
                    <span>Total Production Code</span>
                    <strong style="color: var(--cyan-neon); font-family: var(--font-mono);">${startup.assets.codeRepo?.loc || '30k LOC'}</strong>
                  </div>
                  <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 6px;">Git Commits Verified Clean</div>
                </div>

                <div class="health-metric-box">
                  <div class="health-metric-header">
                    <span>IP Ownership & Warranties</span>
                    <strong style="color: var(--emerald-neon);">100% Cleared</strong>
                  </div>
                  <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 6px;">No liens or outstanding investor claims</div>
                </div>
              </div>

              <div style="margin-top: 24px; padding: 16px; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
                <h4 style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">TECH STACK DIRECTORY</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${startup.techStack.map(t => `<span class="badge badge-emerald">${t}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 3: Founder Post-Mortem -->
          <div class="autopsy-tab-content" id="tab-postmortem" style="display: none;">
            <div class="handover-card post-mortem-section">
              <span class="badge badge-amber mb-2">RAW FOUNDER AUTOPSY</span>
              <h3 style="margin-top: 6px;">TL;DR: Why We Ran Out of Runway</h3>
              <p>${startup.postMortem.tldr}</p>

              <h3>What Actually Worked Really Well</h3>
              <p>${startup.postMortem.whatWorked}</p>

              <h3 style="color: var(--crimson-neon);">The Fatal Mistake</h3>
              <p>${startup.postMortem.theFatalMistake}</p>

              <div style="background: rgba(255, 184, 0, 0.05); border: 1px solid rgba(255, 184, 0, 0.25); border-radius: var(--radius-lg); padding: 20px; margin-top: 24px;">
                <h4 style="color: var(--amber-neon); margin-bottom: 8px; font-size: 1rem;">Advice for the Next Founder or Student Acquiring This:</h4>
                <p style="font-size: 0.92rem; color: #f1f5f9;">
                  ${startup.postMortem.lessonsForBuyer}
                </p>
              </div>
            </div>
          </div>

          <!-- TAB 4: AI 2026 Pivot Ideas -->
          <div class="autopsy-tab-content" id="tab-pivots" style="display: none;">
            <div class="handover-card">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
                <div>
                  <h3 class="handover-card-title" style="margin-bottom: 4px;">
                    <span>🤖</span> AI-Generated 2026 Revival Pivots
                  </h3>
                  <p style="font-size: 0.88rem; color: var(--text-muted);">
                    How you can take this failed codebase and relaunch it as a profitable 2026 micro-SaaS.
                  </p>
                </div>
              </div>

              ${startup.aiPivots.map(p => `
                <div class="pivot-card">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <h4><span>⚡</span> ${p.title}</h4>
                    <span class="badge badge-cyan">${p.tag}</span>
                  </div>
                  <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.5;">${p.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

        <!-- Right Column: Sticky Granular Asset Stripper Checkout -->
        <aside class="stripper-checkout-box" id="stripper-box">
          <h3 class="checkout-box-title">✂️ Granular Asset Stripper</h3>
          <p class="checkout-box-subtitle">Check only what you want to buy, or take the whole bundle.</p>

          <div class="stripper-selection-list">
            
            ${startup.assets.codeRepo ? `
              <div class="stripper-row selected" data-type="code" data-price="${startup.assets.codeRepo.price}">
                <div class="stripper-label-group">
                  <input type="checkbox" id="check-asset-code" checked>
                  <div>
                    <strong>💻 Full Codebase Repo</strong>
                    <div style="font-size: 0.72rem; color: var(--text-dim);">${startup.assets.codeRepo.loc}</div>
                  </div>
                </div>
                <span class="stripper-price">$${startup.assets.codeRepo.price}</span>
              </div>
            ` : ''}

            ${startup.assets.figma ? `
              <div class="stripper-row selected" data-type="figma" data-price="${startup.assets.figma.price}">
                <div class="stripper-label-group">
                  <input type="checkbox" id="check-asset-figma" checked>
                  <div>
                    <strong>🎨 Figma Design Kit</strong>
                    <div style="font-size: 0.72rem; color: var(--text-dim);">${startup.assets.figma.screens}</div>
                  </div>
                </div>
                <span class="stripper-price">$${startup.assets.figma.price}</span>
              </div>
            ` : ''}

            ${startup.assets.domain ? `
              <div class="stripper-row selected" data-type="domain" data-price="${startup.assets.domain.price}">
                <div class="stripper-label-group">
                  <input type="checkbox" id="check-asset-domain" checked>
                  <div>
                    <strong>🌐 Domain & Handles</strong>
                    <div style="font-size: 0.72rem; color: var(--text-dim);">${startup.assets.domain.name}</div>
                  </div>
                </div>
                <span class="stripper-price">$${startup.assets.domain.price}</span>
              </div>
            ` : ''}

            ${startup.assets.waitlist ? `
              <div class="stripper-row selected" data-type="waitlist" data-price="${startup.assets.waitlist.price}">
                <div class="stripper-label-group">
                  <input type="checkbox" id="check-asset-waitlist" checked>
                  <div>
                    <strong>👥 Verified User Waitlist</strong>
                    <div style="font-size: 0.72rem; color: var(--text-dim);">${startup.assets.waitlist.count}</div>
                  </div>
                </div>
                <span class="stripper-price">$${startup.assets.waitlist.price}</span>
              </div>
            ` : ''}

            ${startup.assets.handover ? `
              <div class="stripper-row selected" data-type="handover" data-price="${startup.assets.handover.price}">
                <div class="stripper-label-group">
                  <input type="checkbox" id="check-asset-handover" checked>
                  <div>
                    <strong>👨‍💻 CTO Transition Hours</strong>
                    <div style="font-size: 0.72rem; color: var(--text-dim);">${startup.assets.handover.ctoHours}</div>
                  </div>
                </div>
                <span class="stripper-price">$${startup.assets.handover.price}</span>
              </div>
            ` : ''}

            ${startup.assets.inventory ? `
              <div class="stripper-row" data-type="inventory" data-price="${startup.assets.inventory.price}">
                <div class="stripper-label-group">
                  <input type="checkbox" id="check-asset-inventory">
                  <div>
                    <strong>📦 Physical Inventory</strong>
                    <div style="font-size: 0.72rem; color: var(--text-dim);">${startup.assets.inventory.quantity}</div>
                  </div>
                </div>
                <span class="stripper-price">$${startup.assets.inventory.price}</span>
              </div>
            ` : ''}

          </div>

          <!-- Total Strip Strip -->
          <div class="checkout-total-strip">
            <div>
              <div class="checkout-total-label">Subtotal Selected:</div>
              <div style="font-size: 0.72rem; color: var(--emerald-neon);">Escrow protected & IP cleared</div>
            </div>
            <div class="checkout-total-amount" id="stripper-total-display">
              $${startup.bundlePrice}
            </div>
          </div>

          <!-- Action buttons -->
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <button class="btn btn-primary btn-lg" id="btn-start-escrow" style="width: 100%;">
              <span>🔒</span> Lock in Escrow & Buy
            </button>
            <button class="btn btn-secondary btn-md" id="btn-open-offer-modal" style="width: 100%;">
              <span>💬</span> Make an Offer
            </button>
          </div>

          <div style="margin-top: 18px; text-align: center; font-size: 0.75rem; color: var(--text-dim); line-height: 1.4;">
            Funds held in DeadStartup Escrow until 48-hr verification. Standard 10% seller success fee applied.
          </div>
        </aside>
      </div>
    </div>
  `;
}

export function attachStartupDetailEvents(startupId) {
  const startup = storage.getStartupById(startupId);
  if (!startup) return;

  // Tab switching
  const tabBtns = document.querySelectorAll('.autopsy-tab-btn');
  const tabContents = document.querySelectorAll('.autopsy-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sounds.click();
      const target = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.style.display = 'none');

      btn.classList.add('active');
      const activeContent = document.getElementById(`tab-${target}`);
      if (activeContent) activeContent.style.display = 'block';
    });
  });

  // Stripper Row checkbox calculation
  const stripperRows = document.querySelectorAll('.stripper-row');
  const totalDisplay = document.getElementById('stripper-total-display');

  function calculateStripperTotal() {
    let total = 0;
    stripperRows.forEach(row => {
      const checkbox = row.querySelector('input[type="checkbox"]');
      const price = parseInt(row.getAttribute('data-price') || '0', 10);
      if (checkbox && checkbox.checked) {
        total += price;
        row.classList.add('selected');
      } else {
        row.classList.remove('selected');
      }
    });

    if (totalDisplay) {
      totalDisplay.textContent = `$${total.toLocaleString()}`;
    }
    return total;
  }

  stripperRows.forEach(row => {
    const checkbox = row.querySelector('input[type="checkbox"]');
    row.addEventListener('click', (e) => {
      if (e.target !== checkbox) {
        if (checkbox) checkbox.checked = !checkbox.checked;
      }
      sounds.toggleOn();
      calculateStripperTotal();
    });
  });

  // Start Escrow button
  const startEscrowBtn = document.getElementById('btn-start-escrow');
  if (startEscrowBtn) {
    startEscrowBtn.addEventListener('click', () => {
      const currentTotal = calculateStripperTotal();
      sounds.success();
      // Initialize an active escrow deal
      const escrowDeal = {
        dealId: `ESC-${Date.now().toString().slice(-6)}`,
        startupId: startup.id,
        startupName: startup.name,
        founderName: startup.founderName,
        buyerName: 'Riya (Student Entrepreneur)',
        totalAmount: currentTotal,
        stage: 1, // 1: Deposit, 2: Contract, 3: Credentials, 4: Sandbox, 5: Settlement
        createdAt: new Date().toISOString(),
        timeline: [
          { time: 'Just now', msg: `Escrow vault initialized for ${startup.name} at $${currentTotal}` }
        ]
      };
      storage.setEscrow(escrowDeal);
      window.showToast(`Escrow transaction started for $${currentTotal}! Redirecting to Transfer Room...`, 'success');
      setTimeout(() => {
        window.location.hash = '#escrow';
      }, 600);
    });
  }

  // Open Offer Modal
  const offerBtn = document.getElementById('btn-open-offer-modal');
  if (offerBtn) {
    offerBtn.addEventListener('click', () => {
      sounds.click();
      window.openOfferModal(startup);
    });
  }
}
