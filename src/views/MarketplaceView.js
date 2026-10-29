import { storage } from '../services/storage.js';
import { sounds } from '../services/sound.js';

export function renderMarketplaceView(queryParam = {}) {
  const startups = storage.getStartups();
  const isAi = storage.getAiMode();
  const initialSearch = queryParam.search || '';
  const initialCategory = queryParam.category || 'All';

  const categories = [
    'All',
    'E-Commerce',
    'AI & Logistics',
    'Creator Economy & Audio',
    'HealthTech',
    'PropTech & Micro-SaaS',
    'Developer Tools'
  ];

  return `
    <div class="container market-header">
      <div style="max-width: 840px;">
        <div class="market-hero-badge">
          <span class="badge ${isAi ? 'badge-cyan' : 'badge-emerald'}">
            ${isAi ? '🤖 PROTOTYPE 2: AI-ASSISTED GUIDED DISCOVERY' : '📦 PROTOTYPE 1: STANDARD KEYWORD & FILTER VAULT'}
          </span>
          <span class="badge badge-slate" id="market-count-badge">${startups.length} Startups Available</span>
        </div>

        <h1 style="font-size: 2.6rem; font-weight: 800; line-height: 1.15; margin-bottom: 12px;">
          The Startup Graveyard & Asset Vault
        </h1>

        <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.5;">
          Browse deceased startups or strip individual components (source code, Figma files, domains, or waitlists) at a fraction of their initial development cost.
        </p>

        <!-- Search Bar with Dual Mode Styling -->
        <div class="search-container">
          <div class="search-input-wrapper ${isAi ? 'ai-mode-active' : ''}">
            <span style="font-size: 1.2rem; margin-right: 6px;">${isAi ? '✨' : '🔍'}</span>
            <input 
              type="text" 
              id="market-search-input" 
              value="${initialSearch}" 
              placeholder="${isAi ? 'Describe your venture & budget: e.g. \"I want a sustainable clothing store under $1500 with Next.js\"' : 'Search by startup name, tech stack (Next.js, Python), or domain...'}"
            />
            ${isAi ? `
              <div class="ai-search-glow-tag">
                <span>AI MATCHING ACTIVE</span>
              </div>
            ` : ''}
          </div>

          <!-- Quick Persona Prompts (Matching Riya & Indie Hacker Journeys from Presentation 2) -->
          <div class="persona-prompts">
            <span class="persona-label">QUICK PERSONA SEARCH:</span>
            <button class="prompt-chip riya-badge" data-query="fashion sustainable clothing store nextjs">
              <span>👗</span> Riya's Pick: Fashion Store ($1,250)
            </button>
            <button class="prompt-chip" data-query="FastAPI logistics routing GPS">
              <span>🚚</span> Logistics & Micro-Fulfillment
            </button>
            <button class="prompt-chip" data-query="WebAudio stem music player">
              <span>🎵</span> Music Licensing & Audio Stems
            </button>
            <button class="prompt-chip" data-query="telehealth WebRTC HIPAA django">
              <span>🩺</span> Telehealth Clinic Portal
            </button>
            <button class="prompt-chip" data-query="IoT smart lock vue supabase">
              <span>🔑</span> Coworking & Desk Booking
            </button>
          </div>
        </div>
      </div>

      <!-- Main Marketplace Layout -->
      <div class="market-layout">
        <!-- Sidebar Filters -->
        <aside class="filter-sidebar">
          <div class="filter-group">
            <div class="filter-title">
              <span>Category</span>
              <button class="btn-ghost btn-sm" id="btn-reset-filters" style="padding: 2px 6px; font-size: 0.72rem;">Reset</button>
            </div>
            <div class="filter-options">
              ${categories.map(cat => `
                <label class="filter-checkbox">
                  <input type="radio" name="market-category" value="${cat}" ${cat === initialCategory ? 'checked' : ''}>
                  <span>${cat}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-title">Asset Stripper Component</div>
            <div class="filter-options">
              <label class="filter-checkbox">
                <input type="checkbox" name="asset-type" value="code" checked>
                <span>Full Source Code Repo</span>
              </label>
              <label class="filter-checkbox">
                <input type="checkbox" name="asset-type" value="figma" checked>
                <span>Figma UI/UX Kit</span>
              </label>
              <label class="filter-checkbox">
                <input type="checkbox" name="asset-type" value="domain" checked>
                <span>Domain & Handles</span>
              </label>
              <label class="filter-checkbox">
                <input type="checkbox" name="asset-type" value="waitlist" checked>
                <span>User Waitlists & Leads</span>
              </label>
              <label class="filter-checkbox">
                <input type="checkbox" name="asset-type" value="inventory">
                <span>Physical Stock / Hardware</span>
              </label>
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-title">Max Bundle Budget ($)</div>
            <input type="range" min="500" max="5000" step="250" value="5000" class="valuator-slider" id="filter-max-price">
            <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.8rem; margin-top: 6px;">
              <span>$500</span>
              <span id="filter-price-display" style="color: var(--emerald-neon); font-weight: 700;">$5,000</span>
            </div>
          </div>

          <div class="filter-group">
            <div class="filter-title">Trust & Verification</div>
            <div class="filter-options">
              <label class="filter-checkbox">
                <input type="checkbox" id="filter-verified-only" checked>
                <span>Code Verified (Runs 100%)</span>
              </label>
              <label class="filter-checkbox">
                <input type="checkbox" id="filter-dockerized-only">
                <span>Dockerized / 1-Click Boot</span>
              </label>
            </div>
          </div>

          <div style="background: rgba(0, 245, 155, 0.05); border: 1px solid rgba(0, 245, 155, 0.2); border-radius: var(--radius-md); padding: 14px; text-align: center;">
            <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--emerald-neon); margin-bottom: 6px;">
              HAVE ASSETS TO OFFLOAD?
            </div>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 10px;">
              List code, Figma, or domains in under 4 minutes.
            </p>
            <a href="#studio" class="btn btn-primary btn-sm" style="width: 100%;">
              Post Startup →
            </a>
          </div>
        </aside>

        <!-- Right Content: Grid & Stripper Tools -->
        <main>
          <div class="stripper-mode-bar">
            <div class="stripper-toggle">
              <span style="font-size: 1.1rem;">✂️</span>
              <div>
                <strong style="font-size: 0.92rem; color: var(--text-main);">Granular Asset Stripping Mode</strong>
                <p style="font-size: 0.75rem; color: var(--text-muted);">Unbundle what you don't need to slash acquisition price.</p>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 0.8rem; color: var(--text-dim); font-family: var(--font-mono);">SORT BY:</span>
              <select id="market-sort-select" class="form-select" style="padding: 6px 12px; font-size: 0.82rem; width: auto;">
                <option value="discount">Highest Discount %</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="health">Code Health Score</option>
              </select>
            </div>
          </div>

          <!-- Cards Grid -->
          <div class="startup-grid" id="market-grid-container">
            <!-- Dynamically populated -->
          </div>

          <!-- Empty State -->
          <div id="market-empty-state" style="display: none; text-align: center; padding: 60px 20px; background: var(--bg-surface); border-radius: var(--radius-xl); border: 1px solid var(--border-subtle); margin-top: 20px;">
            <div style="font-size: 3rem; margin-bottom: 16px;">🔍</div>
            <h3 style="font-size: 1.4rem; margin-bottom: 8px;">No Deceased Startups Found</h3>
            <p style="color: var(--text-muted); max-width: 480px; margin: 0 auto 20px;">
              Try relaxing your search terms or budget filters. Alternatively, use natural-language requests in AI Copilot mode.
            </p>
            <button class="btn btn-secondary btn-sm" id="btn-clear-search">Clear Search & Filters</button>
          </div>
        </main>
      </div>
    </div>
  `;
}

export function attachMarketplaceEvents() {
  const searchInput = document.getElementById('market-search-input');
  const priceSlider = document.getElementById('filter-max-price');
  const priceDisplay = document.getElementById('filter-price-display');
  const sortSelect = document.getElementById('market-sort-select');
  const gridContainer = document.getElementById('market-grid-container');
  const emptyState = document.getElementById('market-empty-state');
  const countBadge = document.getElementById('market-count-badge');
  const categoryRadios = document.querySelectorAll('input[name="market-category"]');
  const promptChips = document.querySelectorAll('.prompt-chip');
  const resetBtn = document.getElementById('btn-reset-filters');
  const clearSearchBtn = document.getElementById('btn-clear-search');

  function getSelectedCategory() {
    const checked = document.querySelector('input[name="market-category"]:checked');
    return checked ? checked.value : 'All';
  }

  function filterAndRender() {
    const allStartups = storage.getStartups();
    const query = (searchInput?.value || '').trim().toLowerCase();
    const category = getSelectedCategory();
    const maxPrice = parseInt(priceSlider?.value || '5000', 10);
    const sortBy = sortSelect?.value || 'discount';
    const isAi = storage.getAiMode();

    if (priceDisplay) {
      priceDisplay.textContent = `$${maxPrice.toLocaleString()}`;
    }

    let filtered = allStartups.filter(s => {
      // Category match
      if (category !== 'All' && s.category !== category) return false;
      // Price match
      if (s.bundlePrice > maxPrice) return false;

      // Search match
      if (!query) return true;

      if (isAi) {
        // AI semantic / natural language keywords check
        const tokens = query.split(/\s+/).filter(t => t.length > 2);
        const textBlob = `${s.name} ${s.tagline} ${s.category} ${s.personaMatch} ${s.techStack.join(' ')} ${s.founderQuote} ${s.postMortem?.tldr || ''} ${JSON.stringify(s.aiPivots || [])}`.toLowerCase();
        
        // If persona matches (e.g. fashion / riya / clothing / store / student)
        if (query.includes('fashion') || query.includes('cloth') || query.includes('riya')) {
          if (s.id === 'threadvibe') return true;
        }
        return tokens.some(t => textBlob.includes(t));
      } else {
        // Standard keyword match
        const standardBlob = `${s.name} ${s.tagline} ${s.category} ${s.techStack.join(' ')} ${s.assets.domain?.name || ''}`.toLowerCase();
        return standardBlob.includes(query);
      }
    });

    // Sorting
    filtered.sort((a, b) => {
      if (sortBy === 'discount') {
        const discA = (1 - (a.bundlePrice / a.originalDevCost));
        const discB = (1 - (b.bundlePrice / b.originalDevCost));
        return discB - discA;
      }
      if (sortBy === 'price-asc') return a.bundlePrice - b.bundlePrice;
      if (sortBy === 'price-desc') return b.bundlePrice - a.bundlePrice;
      if (sortBy === 'health') return b.codeHealthScore - a.codeHealthScore;
      return 0;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} Startups Available`;
    }

    if (filtered.length === 0) {
      gridContainer.innerHTML = '';
      emptyState.style.display = 'block';
    } else {
      emptyState.style.display = 'none';
      gridContainer.innerHTML = filtered.map(s => {
        const savings = Math.round((1 - (s.bundlePrice / s.originalDevCost)) * 100);
        return `
          <div class="startup-card" id="card-${s.id}">
            <div class="card-header-status">
              <span class="death-date-pill">
                <span>💀</span> Died ${s.died}
              </span>
              <span class="badge badge-emerald">
                <span>✓</span> Health: ${s.codeHealthScore}%
              </span>
            </div>

            <div class="card-body">
              <div class="card-title-row">
                <a href="#startup/${s.id}" class="card-startup-name">${s.name}</a>
                <span class="badge badge-slate">${s.category}</span>
              </div>

              <p class="card-tagline">${s.tagline}</p>

              <!-- Sunk vs Sale -->
              <div class="financial-strip">
                <div>
                  <div style="font-size: 0.68rem; color: var(--text-dim);">ORIGINAL DEV COST</div>
                  <div class="sunk-burn">$${s.originalDevCost.toLocaleString()}</div>
                </div>
                <div style="text-align: right;">
                  <div style="font-size: 0.68rem; color: var(--emerald-neon);">BUNDLE PRICE</div>
                  <div class="liquidation-price">$${s.bundlePrice.toLocaleString()}</div>
                </div>
                <span class="discount-badge">-${savings}%</span>
              </div>

              <!-- Granular Stripper Preview -->
              <div class="asset-stripper-list">
                <div class="asset-stripper-item">
                  <label>
                    <input type="checkbox" checked disabled>
                    <span>💻 Code Repo (${s.assets.codeRepo?.loc || 'Full stack'})</span>
                  </label>
                  <span class="asset-price-tag">$${s.assets.codeRepo?.price}</span>
                </div>
                <div class="asset-stripper-item">
                  <label>
                    <input type="checkbox" checked disabled>
                    <span>🎨 Figma Kit (${s.assets.figma?.screens || 'Design Kit'})</span>
                  </label>
                  <span class="asset-price-tag">$${s.assets.figma?.price}</span>
                </div>
                <div class="asset-stripper-item">
                  <label>
                    <input type="checkbox" checked disabled>
                    <span>🌐 Domain (${s.assets.domain?.name || 'Verified'})</span>
                  </label>
                  <span class="asset-price-tag">$${s.assets.domain?.price}</span>
                </div>
              </div>

              <div class="card-tech-tags">
                ${s.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
              </div>
            </div>

            <div class="card-footer">
              <a href="#startup/${s.id}" class="btn btn-secondary btn-sm" style="flex: 1;">
                Inspect Autopsy
              </a>
              <a href="#startup/${s.id}?buy=true" class="btn btn-primary btn-sm">
                Strip & Buy →
              </a>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // Bind Events
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      sounds.hover();
      filterAndRender();
    });
  }

  if (priceSlider) {
    priceSlider.addEventListener('input', () => {
      sounds.playBeep(400 + priceSlider.value / 10, 'sine', 0.015, 0.02);
      filterAndRender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sounds.click();
      filterAndRender();
    });
  }

  categoryRadios.forEach(r => {
    r.addEventListener('change', () => {
      sounds.click();
      filterAndRender();
    });
  });

  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      sounds.toggleOn();
      const q = chip.getAttribute('data-query');
      if (searchInput) {
        searchInput.value = q;
        filterAndRender();
      }
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      sounds.click();
      categoryRadios[0].checked = true;
      if (searchInput) searchInput.value = '';
      if (priceSlider) priceSlider.value = 5000;
      filterAndRender();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      sounds.click();
      categoryRadios[0].checked = true;
      if (searchInput) searchInput.value = '';
      if (priceSlider) priceSlider.value = 5000;
      filterAndRender();
    });
  }

  // Initial render
  filterAndRender();
}
