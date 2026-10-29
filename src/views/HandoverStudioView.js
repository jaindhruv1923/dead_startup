import { storage } from '../services/storage.js';
import { sounds } from '../services/sound.js';

export function renderHandoverStudioView() {
  return `
    <div class="container studio-container">
      <div style="text-align: center; max-width: 680px; margin: 0 auto 36px;">
        <span class="badge badge-emerald mb-2">FOR FOUNDERS & MANAGERIAL STAFF</span>
        <h1 style="font-size: 2.4rem; font-weight: 800; margin: 8px 0 12px;">
          Startup Handover & Asset Liquidation Studio
        </h1>
        <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.5;">
          Gracefully offload your codebase, Figma kits, domains, and customer waitlists. Recoup capital for your team and investors while helping the next generation build faster.
        </p>
      </div>

      <!-- Step Progress Bar -->
      <div class="wizard-progress">
        <div class="wizard-progress-bar" id="wizard-bar" style="width: 0%;"></div>
        
        <div class="wizard-step-node active" data-step="1">
          <div class="wizard-node-circle">1</div>
          <span class="wizard-node-label">Demographics</span>
        </div>
        <div class="wizard-step-node" data-step="2">
          <div class="wizard-node-circle">2</div>
          <span class="wizard-node-label">Asset Catalog</span>
        </div>
        <div class="wizard-step-node" data-step="3">
          <div class="wizard-node-circle">3</div>
          <span class="wizard-node-label">Technical Handover</span>
        </div>
        <div class="wizard-step-node" data-step="4">
          <div class="wizard-node-circle">4</div>
          <span class="wizard-node-label">Post-Mortem</span>
        </div>
        <div class="wizard-step-node" data-step="5">
          <div class="wizard-node-circle">5</div>
          <span class="wizard-node-label">Verification</span>
        </div>
      </div>

      <!-- The Wizard Form Card -->
      <div class="wizard-card" id="wizard-form-container">
        
        <!-- STEP 1: Demographics -->
        <div class="wizard-step-panel" id="step-panel-1">
          <div class="wizard-step-header">
            <h3 class="wizard-step-title">Step 1: The Startup Death Certificate & Info</h3>
            <p class="wizard-step-desc">Tell buyers who you are and why the venture concluded.</p>
          </div>

          <!-- Stealth Mode Box -->
          <div class="stealth-toggle-box">
            <div class="stealth-toggle-info">
              <h4>🕶️ Stealth Mode Sale (Anonymous Listing)</h4>
              <p>Keep your startup name and brand hidden until a verified buyer signs an NDA and deposits escrow.</p>
            </div>
            <label class="filter-checkbox" style="font-size: 1rem; font-weight: 600;">
              <input type="checkbox" id="field-stealth" style="width: 20px; height: 20px;">
              <span>Enable Stealth</span>
            </label>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div class="form-group">
              <label class="form-label">Startup Name</label>
              <input type="text" id="field-name" class="form-input" placeholder="e.g. Omnipod AI" required>
            </div>
            <div class="form-group">
              <label class="form-label">Category</label>
              <select id="field-category" class="form-select">
                <option value="AI & Logistics">AI & Logistics</option>
                <option value="E-Commerce">E-Commerce & D2C</option>
                <option value="Creator Economy & Audio">Creator Economy & Audio</option>
                <option value="HealthTech">HealthTech & Telemedicine</option>
                <option value="PropTech & Micro-SaaS">PropTech & Micro-SaaS</option>
                <option value="Developer Tools">Developer Tools</option>
                <option value="FinTech">FinTech</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Tagline / One-Liner</label>
            <input type="text" id="field-tagline" class="form-input" placeholder="e.g. Next-generation multi-tenant inventory forecasting tool" required>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
            <div class="form-group">
              <label class="form-label">Year Founded</label>
              <input type="text" id="field-founded" class="form-input" value="2024">
            </div>
            <div class="form-group">
              <label class="form-label">Month/Year Deceased</label>
              <input type="text" id="field-died" class="form-input" value="March 2026">
            </div>
            <div class="form-group">
              <label class="form-label">Total Capital Burned ($)</label>
              <input type="number" id="field-burn" class="form-input" value="120000">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Primary Cause of Death</label>
            <select id="field-cause" class="form-select">
              <option value="Ran out of runway / funding winter">Ran out of runway / funding winter</option>
              <option value="High CAC vs LTV (Unprofitable unit economics)">High CAC vs LTV (Unprofitable unit economics)</option>
              <option value="Legal & regulatory compliance friction">Legal & regulatory compliance friction</option>
              <option value="Enterprise sales cycles too long">Enterprise sales cycles too long</option>
              <option value="Founders parted ways / burned out">Founders parted ways / burned out</option>
            </select>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div class="form-group">
              <label class="form-label">Your Name</label>
              <input type="text" id="field-founder-name" class="form-input" placeholder="e.g. Siddharth Rao">
            </div>
            <div class="form-group">
              <label class="form-label">Your Managerial Role</label>
              <input type="text" id="field-role" class="form-input" placeholder="e.g. Co-Founder & CTO / Head of Engineering">
            </div>
          </div>
        </div>

        <!-- STEP 2: Asset Stripper Catalog -->
        <div class="wizard-step-panel" id="step-panel-2" style="display: none;">
          <div class="wizard-step-header">
            <h3 class="wizard-step-title">Step 2: Granular Asset Stripping & Pricing</h3>
            <p class="wizard-step-desc">Decide which components you are selling and set individual liquidation prices.</p>
          </div>

          <div class="asset-stripper-builder">
            
            <!-- Codebase -->
            <div class="asset-build-row enabled">
              <input type="checkbox" id="asset-has-code" checked style="accent-color: var(--emerald-neon); width: 18px; height: 18px;">
              <div>
                <strong style="color: var(--text-main);">💻 Source Code Repository</strong>
                <p style="font-size: 0.8rem; color: var(--text-muted);">Frontend, Backend APIs, Database schemas, Docker files</p>
                <input type="text" id="asset-code-stack" class="form-input" style="padding: 6px 10px; font-size: 0.82rem; margin-top: 6px;" value="Next.js 14, Python FastAPI, PostgreSQL, Tailwind">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: var(--text-dim); display: block;">Asking Price ($)</label>
                <input type="number" id="asset-code-price" class="form-input" value="1200" style="padding: 6px 10px; font-family: var(--font-mono); font-weight: 700;">
              </div>
            </div>

            <!-- Figma Kit -->
            <div class="asset-build-row enabled">
              <input type="checkbox" id="asset-has-figma" checked style="accent-color: var(--emerald-neon); width: 18px; height: 18px;">
              <div>
                <strong style="color: var(--text-main);">🎨 Figma UI/UX Design System</strong>
                <p style="font-size: 0.8rem; color: var(--text-muted);">Screens, mobile responsive views, brand tokens, logos</p>
                <input type="text" id="asset-figma-screens" class="form-input" style="padding: 6px 10px; font-size: 0.82rem; margin-top: 6px;" value="42 screens & full component library">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: var(--text-dim); display: block;">Asking Price ($)</label>
                <input type="number" id="asset-figma-price" class="form-input" value="450" style="padding: 6px 10px; font-family: var(--font-mono); font-weight: 700;">
              </div>
            </div>

            <!-- Domain -->
            <div class="asset-build-row enabled">
              <input type="checkbox" id="asset-has-domain" checked style="accent-color: var(--emerald-neon); width: 18px; height: 18px;">
              <div>
                <strong style="color: var(--text-main);">🌐 Domain & Social Handles</strong>
                <p style="font-size: 0.8rem; color: var(--text-muted);">Domain registrar transfer + Twitter/Instagram @handles</p>
                <input type="text" id="asset-domain-name" class="form-input" style="padding: 6px 10px; font-size: 0.82rem; margin-top: 6px;" value="omnipod.io">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: var(--text-dim); display: block;">Asking Price ($)</label>
                <input type="number" id="asset-domain-price" class="form-input" value="350" style="padding: 6px 10px; font-family: var(--font-mono); font-weight: 700;">
              </div>
            </div>

            <!-- User Waitlist -->
            <div class="asset-build-row enabled">
              <input type="checkbox" id="asset-has-waitlist" checked style="accent-color: var(--emerald-neon); width: 18px; height: 18px;">
              <div>
                <strong style="color: var(--text-main);">👥 Verified Customer Leads / Waitlist</strong>
                <p style="font-size: 0.8rem; color: var(--text-muted);">Opted-in email subscribers & early trial signups</p>
                <input type="text" id="asset-waitlist-count" class="form-input" style="padding: 6px 10px; font-size: 0.82rem; margin-top: 6px;" value="1,850 opt-in user emails">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: var(--text-dim); display: block;">Asking Price ($)</label>
                <input type="number" id="asset-waitlist-price" class="form-input" value="250" style="padding: 6px 10px; font-family: var(--font-mono); font-weight: 700;">
              </div>
            </div>

            <!-- CTO Handover Hours -->
            <div class="asset-build-row enabled">
              <input type="checkbox" id="asset-has-handover" checked style="accent-color: var(--emerald-neon); width: 18px; height: 18px;">
              <div>
                <strong style="color: var(--text-main);">👨‍💻 CTO Transition Walkthrough</strong>
                <p style="font-size: 0.8rem; color: var(--text-muted);">Live screenshare with former lead engineer to guide setup</p>
                <input type="text" id="asset-handover-hours" class="form-input" style="padding: 6px 10px; font-size: 0.82rem; margin-top: 6px;" value="4 hours architecture screenshare">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: var(--text-dim); display: block;">Asking Price ($)</label>
                <input type="number" id="asset-handover-price" class="form-input" value="250" style="padding: 6px 10px; font-family: var(--font-mono); font-weight: 700;">
              </div>
            </div>

          </div>

          <div style="margin-top: 24px; padding: 18px; background: rgba(0, 0, 0, 0.3); border: 1px dashed var(--border-medium); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between;">
            <div>
              <span style="font-size: 0.82rem; color: var(--text-muted);">Combined Bundle Asking Price:</span>
              <div style="font-size: 0.75rem; color: var(--emerald-neon);">Saves buyer 20% compared to stripping individual parts</div>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 1.5rem; font-weight: 800; color: var(--emerald-neon); font-family: var(--font-mono);">$</span>
              <input type="number" id="field-bundle-price" class="form-input" value="2100" style="width: 140px; font-size: 1.3rem; font-weight: 800; font-family: var(--font-mono); color: var(--emerald-neon); padding: 8px 12px;">
            </div>
          </div>
        </div>

        <!-- STEP 3: Technical Handover Pack -->
        <div class="wizard-step-panel" id="step-panel-3" style="display: none;">
          <div class="wizard-step-header">
            <h3 class="wizard-step-title">Step 3: Managerial & Staff Runbook</h3>
            <p class="wizard-step-desc">Provide architectural clarity so the new buyer can boot the project in under 15 minutes.</p>
          </div>

          <div class="form-group">
            <label class="form-label">System Architecture Overview</label>
            <textarea id="field-arch" class="form-textarea" placeholder="Explain how services communicate (e.g. Next.js talks to FastAPI via REST, PostgreSQL for persistence, Redis for caching, Stripe for checkout)."></textarea>
          </div>

          <div class="form-group">
            <label class="form-label">One-Command Boot Runbook</label>
            <textarea id="field-runbook" class="form-textarea" style="font-family: var(--font-mono); font-size: 0.85rem;" placeholder="git clone repo&#10;cd project&#10;docker-compose up -d&#10;npm run dev"></textarea>
            <div class="form-hint">Commands the new founder needs to run in their terminal to start the environment.</div>
          </div>

          <div class="form-group">
            <label class="form-label">Required Environment Variables (.env template without actual secrets)</label>
            <input type="text" id="field-env" class="form-input" placeholder="DATABASE_URL, NEXT_PUBLIC_STRIPE_KEY, AWS_S3_BUCKET, JWT_SECRET" value="DATABASE_URL, JWT_SECRET, STRIPE_KEY, REDIS_URL">
          </div>

          <div class="form-group">
            <label class="form-label">Staff Onboarding Notes</label>
            <textarea id="field-cto-notes" class="form-textarea" placeholder="State how many hours the original dev/manager will offer for pairing, repo invitation, or answering architectural questions."></textarea>
          </div>
        </div>

        <!-- STEP 4: Post-Mortem -->
        <div class="wizard-step-panel" id="step-panel-4" style="display: none;">
          <div class="wizard-step-header">
            <h3 class="wizard-step-title">Step 4: The Candid Founder Post-Mortem</h3>
            <p class="wizard-step-desc">Transparency creates trust and helps the buyer avoid your previous pitfalls.</p>
          </div>

          <div class="form-group">
            <label class="form-label">One-Sentence Founder Epitaph / Quote</label>
            <input type="text" id="field-quote" class="form-input" placeholder="e.g. We built an incredible product, but spent too much on customer acquisition before reaching product-market fit.">
          </div>

          <div class="form-group">
            <label class="form-label">What Actually Worked Really Well?</label>
            <textarea id="field-worked" class="form-textarea" placeholder="e.g. The database query latency was sub-10ms, and beta users loved the UI design."></textarea>
          </div>

          <div class="form-group">
            <label class="form-label">The Fatal Mistake to Avoid:</label>
            <textarea id="field-mistake" class="form-textarea" placeholder="e.g. Do not spend $50/click on Google Ads; partner with communities directly instead."></textarea>
          </div>

          <div class="form-group">
            <label class="form-label">Key Advice for the New Owner:</label>
            <textarea id="field-advice" class="form-textarea" placeholder="e.g. This can easily be pivoted into a B2B SaaS for small accounting firms."></textarea>
          </div>
        </div>

        <!-- STEP 5: Verification & Publish -->
        <div class="wizard-step-panel" id="step-panel-5" style="display: none;">
          <div class="wizard-step-header">
            <h3 class="wizard-step-title">Step 5: Automated Verification & Live Publish</h3>
            <p class="wizard-step-desc">Review your listing and initiate DeadStartup automated verification.</p>
          </div>

          <div style="background: rgba(0, 245, 155, 0.05); border: 1px solid rgba(0, 245, 155, 0.3); border-radius: var(--radius-lg); padding: 24px; margin-bottom: 24px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.5rem;">🤖</span>
                <div>
                  <h4 style="font-size: 1.05rem; color: var(--emerald-neon);">Automated Due Diligence Scan</h4>
                  <p style="font-size: 0.8rem; color: var(--text-muted);">DeadStartup AI is verifying repo health, licenses, and IP status.</p>
                </div>
              </div>
              <span class="badge badge-emerald">HEALTH SCORE: 96/100</span>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; font-size: 0.82rem; font-family: var(--font-mono);">
              <div style="padding: 10px; background: rgba(0, 0, 0, 0.3); border-radius: var(--radius-sm);">
                <div style="color: var(--text-dim);">IP Clear Scan</div>
                <div style="color: var(--emerald-neon); font-weight: 700;">Passed (0 Liens)</div>
              </div>
              <div style="padding: 10px; background: rgba(0, 0, 0, 0.3); border-radius: var(--radius-sm);">
                <div style="color: var(--text-dim);">Open Source Licenses</div>
                <div style="color: var(--emerald-neon); font-weight: 700;">MIT / Apache 2.0</div>
              </div>
              <div style="padding: 10px; background: rgba(0, 0, 0, 0.3); border-radius: var(--radius-sm);">
                <div style="color: var(--text-dim);">DeadStartup Fee</div>
                <div style="color: var(--cyan-neon); font-weight: 700;">10% upon escrow release</div>
              </div>
            </div>
          </div>

          <label class="filter-checkbox" style="font-size: 0.9rem; margin-bottom: 24px;">
            <input type="checkbox" id="field-terms" checked required style="accent-color: var(--emerald-neon); width: 18px; height: 18px;">
            <span>I certify that our founding team owns the full intellectual property rights to these assets and authorize DeadStartup Escrow to handle the handover.</span>
          </label>
        </div>

        <!-- Wizard Nav Controls -->
        <div class="wizard-nav-footer">
          <button class="btn btn-secondary" id="wizard-btn-prev" style="visibility: hidden;">
            ← Previous
          </button>
          
          <div style="display: flex; align-items: center; gap: 12px;">
            <button class="btn btn-primary" id="wizard-btn-next">
              Next Step →
            </button>
            <button class="btn btn-primary" id="wizard-btn-publish" style="display: none;">
              🚀 Publish Listing to Marketplace
            </button>
          </div>
        </div>

      </div>
    </div>
  `;
}

export function attachHandoverStudioEvents() {
  let currentStep = 1;
  const maxStep = 5;

  const prevBtn = document.getElementById('wizard-btn-prev');
  const nextBtn = document.getElementById('wizard-btn-next');
  const publishBtn = document.getElementById('wizard-btn-publish');
  const progressBar = document.getElementById('wizard-bar');

  function updateWizardUI() {
    // Update progress bar width
    const pct = ((currentStep - 1) / (maxStep - 1)) * 100;
    if (progressBar) progressBar.style.width = `${pct}%`;

    // Update node status
    document.querySelectorAll('.wizard-step-node').forEach(node => {
      const stepNum = parseInt(node.getAttribute('data-step'), 10);
      node.classList.remove('active', 'completed');
      if (stepNum === currentStep) {
        node.classList.add('active');
      } else if (stepNum < currentStep) {
        node.classList.add('completed');
      }
    });

    // Update panel visibility
    for (let i = 1; i <= maxStep; i++) {
      const panel = document.getElementById(`step-panel-${i}`);
      if (panel) {
        panel.style.display = (i === currentStep) ? 'block' : 'none';
      }
    }

    // Prev Button
    if (prevBtn) {
      prevBtn.style.visibility = (currentStep === 1) ? 'hidden' : 'visible';
    }

    // Next vs Publish button
    if (currentStep === maxStep) {
      if (nextBtn) nextBtn.style.display = 'none';
      if (publishBtn) publishBtn.style.display = 'inline-flex';
    } else {
      if (nextBtn) nextBtn.style.display = 'inline-flex';
      if (publishBtn) publishBtn.style.display = 'none';
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      sounds.click();
      if (currentStep < maxStep) {
        currentStep++;
        updateWizardUI();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      sounds.click();
      if (currentStep > 1) {
        currentStep--;
        updateWizardUI();
      }
    });
  }

  // Publish Listing
  if (publishBtn) {
    publishBtn.addEventListener('click', () => {
      sounds.success();

      const name = document.getElementById('field-name')?.value || 'QuantumLeap AI';
      const tagline = document.getElementById('field-tagline')?.value || 'Autonomous data pipeline & analytics engine';
      const category = document.getElementById('field-category')?.value || 'Developer Tools';
      const founded = document.getElementById('field-founded')?.value || '2024';
      const died = document.getElementById('field-died')?.value || 'March 2026';
      const burnedAmount = parseInt(document.getElementById('field-burn')?.value || '120000', 10);
      const bundlePrice = parseInt(document.getElementById('field-bundle-price')?.value || '1950', 10);
      const stealthMode = document.getElementById('field-stealth')?.checked || false;
      const founderName = document.getElementById('field-founder-name')?.value || 'Anonymous Founder';
      const managerialTitle = document.getElementById('field-role')?.value || 'Former CTO';
      const founderQuote = document.getElementById('field-quote')?.value || 'Our code was exceptional, but we failed to build distribution before our seed runway concluded.';
      const codeStack = document.getElementById('asset-code-stack')?.value || 'Next.js 14, Python FastAPI, PostgreSQL';
      const codePrice = parseInt(document.getElementById('asset-code-price')?.value || '1200', 10);
      const figmaScreens = document.getElementById('asset-figma-screens')?.value || '42 screens';
      const figmaPrice = parseInt(document.getElementById('asset-figma-price')?.value || '450', 10);
      const domainName = document.getElementById('asset-domain-name')?.value || 'startup.io';
      const domainPrice = parseInt(document.getElementById('asset-domain-price')?.value || '350', 10);
      const waitlistCount = document.getElementById('asset-waitlist-count')?.value || '1,850 signups';
      const waitlistPrice = parseInt(document.getElementById('asset-waitlist-price')?.value || '250', 10);
      const handoverHours = document.getElementById('asset-handover-hours')?.value || '4 hours live screenshare';
      const handoverPrice = parseInt(document.getElementById('asset-handover-price')?.value || '250', 10);
      const arch = document.getElementById('field-arch')?.value || 'Client -> Next.js SSR -> FastAPI REST backend -> PostgreSQL -> Docker';
      const runbook = document.getElementById('field-runbook')?.value || 'docker-compose up -d\nnpm run dev';
      const envKeys = (document.getElementById('field-env')?.value || 'DATABASE_URL, JWT_SECRET').split(',').map(s => s.trim());
      const ctoNotes = document.getElementById('field-cto-notes')?.value || `${founderName} is available for architectural walkthrough and Docker setup assistance.`;
      const whatWorked = document.getElementById('field-worked')?.value || 'Zero-latency WebSocket events and highly intuitive dashboards.';
      const theFatalMistake = document.getElementById('field-mistake')?.value || 'Over-engineered enterprise features before achieving SMB traction.';
      const lessonsForBuyer = document.getElementById('field-advice')?.value || 'Sell directly to boutique agencies who lack in-house data engineering talent.';

      const newStartup = {
        id: `startup-${Date.now()}`,
        name: stealthMode ? `Project Stealth (${category})` : name,
        tagline,
        category,
        badge: 'Newly Listed',
        founded,
        died,
        burnedAmount,
        originalDevCost: Math.round(burnedAmount * 0.7),
        bundlePrice,
        stealthMode,
        verified: true,
        codeHealthScore: 96,
        founderName,
        managerialTitle,
        founderQuote,
        techStack: codeStack.split(',').map(s => s.trim()),
        assets: {
          codeRepo: {
            title: 'Full Repository & Git History',
            stack: codeStack,
            loc: '34,000 lines of code',
            testCoverage: '91%',
            price: codePrice,
            desc: 'Production-ready codebase with clean commits and documentation.',
            dockerized: true
          },
          figma: {
            title: 'Design Kit & Brand Assets',
            screens: figmaScreens,
            components: '140+ components',
            price: figmaPrice,
            desc: 'Figma files, design tokens, and marketing mockups.'
          },
          domain: {
            name: domainName,
            da: 25,
            expiry: '2027',
            price: domainPrice
          },
          waitlist: {
            count: waitlistCount,
            optIn: 'Clean double opt-in list',
            price: waitlistPrice
          },
          handover: {
            ctoHours: handoverHours,
            runbookIncluded: true,
            price: handoverPrice,
            desc: 'Live onboarding with original engineering leadership.'
          }
        },
        managerialHandover: {
          architecture: arch,
          techRequirements: 'Node 20+, Docker Compose, PostgreSQL',
          runbookCommands: runbook,
          envVariables: envKeys,
          ctoSupport: ctoNotes
        },
        postMortem: {
          tldr: 'Runway ended before paid conversion surpassed customer acquisition costs.',
          whatWorked,
          theFatalMistake,
          lessonsForBuyer
        },
        aiPivots: [
          {
            title: 'AI Micro-SaaS Relaunch',
            tag: 'Trending AI',
            desc: 'Wrap an LLM agent around the core API and offer specialized reports for $29/month.'
          },
          {
            title: 'White-Label Agency Starter',
            tag: 'Turnkey Agency',
            desc: 'Use this codebase as an unbranded template to charge clients $5k+ for custom portal builds.'
          },
          {
            title: 'Self-Hosted Open Source Core',
            tag: 'Community',
            desc: 'Release a free community edition and monetize cloud-hosted managed instances.'
          }
        ]
      };

      storage.saveStartup(newStartup);
      window.showToast(`🎉 "${newStartup.name}" successfully published to DeadStartup Marketplace!`, 'success');
      setTimeout(() => {
        window.location.hash = `#startup/${newStartup.id}`;
      }, 700);
    });
  }
}
