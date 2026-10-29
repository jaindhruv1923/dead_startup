import { PRESENTATION_INFO } from '../data/seedData.js';
import { sounds } from '../services/sound.js';

export function renderDeckView() {
  return `
    <div class="container compare-container">
      <div style="text-align: center; max-width: 800px; margin: 0 auto 40px;">
        <span class="badge badge-emerald mb-2">CSE-7 GROUP 9 PRESENTATION DOSSIER</span>
        <h1 style="font-size: 2.6rem; font-weight: 800; margin: 8px 0 14px;">
          Market Opportunity & Business Model Deck
        </h1>
        <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.5;">
          Interactive implementation of the complete DeadStartup pitch deck, financial forecasts, and blue ocean strategy.
        </p>
      </div>

      <!-- Slide 6: Interactive TAM / SAM / SOM Pyramid -->
      <div class="glass-panel" style="padding: 36px; margin-bottom: 48px;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 24px;">
          <div>
            <span class="badge badge-cyan">SLIDE 6: MARKET SIZING</span>
            <h3 style="font-size: 1.5rem; margin-top: 6px;">Total, Serviceable & Obtainable Market (TAM / SAM / SOM)</h3>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.3); padding: 4px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <button class="btn btn-sm btn-primary" id="btn-currency-inr">₹ INR</button>
            <button class="btn btn-sm btn-ghost" id="btn-currency-usd">$ USD</button>
          </div>
        </div>

        <div class="market-pyramid-container">
          <!-- TAM -->
          <div class="pyramid-tier pyramid-tam" id="tier-tam">
            <span class="badge badge-cyan">TOTAL ADDRESSABLE MARKET (TAM)</span>
            <div class="pyramid-tier-val text-gradient-cyan" id="tam-val">${PRESENTATION_INFO.marketData.tam.inr}</div>
            <p style="font-size: 0.85rem; color: var(--text-muted);">${PRESENTATION_INFO.marketData.tam.desc}</p>
          </div>

          <!-- SAM -->
          <div class="pyramid-tier pyramid-sam" id="tier-sam">
            <span class="badge badge-amber">SERVICEABLE AVAILABLE MARKET (SAM)</span>
            <div class="pyramid-tier-val text-gradient-amber" id="sam-val">${PRESENTATION_INFO.marketData.sam.inr}</div>
            <p style="font-size: 0.85rem; color: var(--text-muted);">${PRESENTATION_INFO.marketData.sam.desc}</p>
          </div>

          <!-- SOM -->
          <div class="pyramid-tier pyramid-som" id="tier-som">
            <span class="badge badge-emerald">SERVICEABLE OBTAINABLE MARKET (SOM)</span>
            <div class="pyramid-tier-val text-gradient-emerald" id="som-val">${PRESENTATION_INFO.marketData.som.inr}</div>
            <p style="font-size: 0.85rem; color: var(--text-muted);">${PRESENTATION_INFO.marketData.som.desc}</p>
          </div>
        </div>
      </div>

      <!-- Slide 5: Interactive Buyer Utility Matrix -->
      <div class="glass-panel" style="padding: 36px; margin-bottom: 48px;">
        <span class="badge badge-emerald mb-2">SLIDE 5: BLUE OCEAN STRATEGY</span>
        <h3 style="font-size: 1.5rem; margin-bottom: 8px;">The Buyer Utility Matrix</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 24px;">
          How DeadStartup eliminates friction across the 6 utility levers compared to traditional asset disposal.
        </p>

        <div class="utility-matrix-grid">
          <div class="matrix-cell matrix-header-cell">Levers \\ Stages</div>
          <div class="matrix-cell matrix-header-cell">Purchase 🛒</div>
          <div class="matrix-cell matrix-header-cell">Delivery 🚚</div>
          <div class="matrix-cell matrix-header-cell">Use 💻</div>
          <div class="matrix-cell matrix-header-cell">Supplements ➕</div>
          <div class="matrix-cell matrix-header-cell">Maintenance 🔧</div>
          <div class="matrix-cell matrix-header-cell">Disposal ♻️</div>

          <!-- Row 1 -->
          <div class="matrix-cell matrix-lever-cell">Customer Productivity 📈</div>
          <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Find assets in minutes</small></div>
          <div class="matrix-cell">Instant Git clone</div>
          <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Saves 6-12 mos dev</small></div>
          <div class="matrix-cell">Figma tokens</div>
          <div class="matrix-cell has-cross"><span class="cross-icon">✕</span><small>Legacy dependencies</small></div>
          <div class="matrix-cell">Clean sunset</div>

          <!-- Row 2 -->
          <div class="matrix-cell matrix-lever-cell">Simplicity ✨</div>
          <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>1-click escrow</small></div>
          <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Automated repo invite</small></div>
          <div class="matrix-cell has-cross"><span class="cross-icon">✕</span><small>Code learning curve</small></div>
          <div class="matrix-cell has-cross"><span class="cross-icon">✕</span><small>No 3rd-party plugins</small></div>
          <div class="matrix-cell">Standard stack</div>
          <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>No lingering hosting</small></div>

          <!-- Row 3 -->
          <div class="matrix-cell matrix-lever-cell">Convenience ⏱️</div>
          <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Unified catalog</small></div>
          <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Instant creds</small></div>
          <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Pre-built modules</small></div>
          <div class="matrix-cell has-cross"><span class="cross-icon">✕</span><small>Manual API setups</small></div>
          <div class="matrix-cell has-cross"><span class="cross-icon">✕</span><small>Dev knowledge req.</small></div>
          <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Full write-off</small></div>

          <!-- Row 4 -->
          <div class="matrix-cell matrix-lever-cell">Risk 🔒</div>
          <div class="matrix-cell has-cross"><span class="cross-icon">✕</span><small>Quality uncertainty</small></div>
          <div class="matrix-cell has-cross"><span class="cross-icon">✕</span><small>Domain auth delays</small></div>
          <div class="matrix-cell has-cross"><span class="cross-icon">✕</span><small>Broken tests risk</small></div>
          <div class="matrix-cell has-cross"><span class="cross-icon">✕</span><small>Missing docs risk</small></div>
          <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>48-hr inspect warranty</small></div>
          <div class="matrix-cell">IP cleared</div>

          <!-- Row 5 -->
          <div class="matrix-cell matrix-lever-cell">Fun & Image 🎉</div>
          <div class="matrix-cell">Pride in recovery</div>
          <div class="matrix-cell">Unboxing vibe</div>
          <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Modern UI look</small></div>
          <div class="matrix-cell">Custom merch</div>
          <div class="matrix-cell">Active revivals</div>
          <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Anti-waste hero</small></div>

          <!-- Row 6 -->
          <div class="matrix-cell matrix-lever-cell">Eco-Friendliness 🌍</div>
          <div class="matrix-cell">Recycled IP</div>
          <div class="matrix-cell">Zero packaging</div>
          <div class="matrix-cell">Efficient compute</div>
          <div class="matrix-cell">Reused assets</div>
          <div class="matrix-cell">Saved energy</div>
          <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Digital circular economy</small></div>
        </div>
      </div>

      <!-- Slide 10 & 11: Competitor Analysis Matrix -->
      <div class="glass-panel" style="padding: 36px; margin-bottom: 48px;">
        <span class="badge badge-amber mb-2">SLIDE 10 & 11: COMPETITOR BENCHMARK</span>
        <h3 style="font-size: 1.5rem; margin-bottom: 16px;">DeadStartup vs Flippa vs Acquire.com</h3>

        <div style="overflow-x: auto;">
          <table class="compare-matrix-table" style="margin-top: 10px;">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Flippa</th>
                <th>Acquire.com</th>
                <th style="color: var(--emerald-neon); background: rgba(0, 245, 155, 0.08);">DeadStartup (Us)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Primary Focus</strong></td>
                <td>Profitable websites & content blogs</td>
                <td>High ARR SaaS with recurring revenue</td>
                <td style="color: var(--emerald-neon); font-weight: 700; background: rgba(0, 245, 155, 0.05);">Deceased & pre-revenue startup assets (Code + IP + Design)</td>
              </tr>
              <tr>
                <td><strong>Target Audience</strong></td>
                <td>Domain flippers & website investors</td>
                <td>PE firms, vetted M&A buyers ($100k+ ARR)</td>
                <td style="color: var(--emerald-neon); font-weight: 700; background: rgba(0, 245, 155, 0.05);">Failed founders, students, solo hackers, indie builders</td>
              </tr>
              <tr>
                <td><strong>Granular Stripping</strong></td>
                <td>None (Must buy whole domain/site)</td>
                <td>None (Whole legal corporate entity acquisition)</td>
                <td style="color: var(--emerald-neon); font-weight: 700; background: rgba(0, 245, 155, 0.05);">Buy just code ($800), just Figma ($300), or total remains</td>
              </tr>
              <tr>
                <td><strong>Technical Verification</strong></td>
                <td>No code check (Lots of broken WordPress templates)</td>
                <td>Manual financial audit only</td>
                <td style="color: var(--emerald-neon); font-weight: 700; background: rgba(0, 245, 155, 0.05);">Automated CI/CD build check, test suite & license scan</td>
              </tr>
              <tr>
                <td><strong>Price Accessibility</strong></td>
                <td>High listing fees + spam bidding</td>
                <td>Expensive ($390/yr buyer subscription)</td>
                <td style="color: var(--emerald-neon); font-weight: 700; background: rgba(0, 245, 155, 0.05);">Free browsing, accessible $500 - $3,000 liquidation assets</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Slide 23-25: 10-Year Financial Forecast Chart -->
      <div class="financial-chart-box">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <span class="badge badge-emerald">SLIDES 23-25: FINANCIAL PROJECTIONS</span>
            <h3 style="font-size: 1.5rem; margin-top: 6px;">10-Year Financial Forecast (INR Lakhs)</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem;">Based on 50,000 addressable failed ventures and 10% average liquidation commission.</p>
          </div>

          <div style="display: flex; gap: 8px;">
            <button class="btn btn-sm btn-primary" id="btn-chart-rev-exp">Revenue vs Expenses</button>
            <button class="btn btn-sm btn-secondary" id="btn-chart-cum-profit">Cumulative Profit</button>
            <button class="btn btn-sm btn-secondary" id="btn-chart-ebitda">Annual EBITDA</button>
          </div>
        </div>

        <div class="chart-canvas-container">
          <canvas id="financial-canvas" style="width: 100%; height: 100%;"></canvas>
        </div>
      </div>

    </div>
  `;
}

export function attachDeckEvents() {
  const inrBtn = document.getElementById('btn-currency-inr');
  const usdBtn = document.getElementById('btn-currency-usd');
  const tamVal = document.getElementById('tam-val');
  const samVal = document.getElementById('sam-val');
  const somVal = document.getElementById('som-val');

  if (inrBtn && usdBtn) {
    inrBtn.addEventListener('click', () => {
      sounds.click();
      inrBtn.className = 'btn btn-sm btn-primary';
      usdBtn.className = 'btn btn-sm btn-ghost';
      tamVal.textContent = PRESENTATION_INFO.marketData.tam.inr;
      samVal.textContent = PRESENTATION_INFO.marketData.sam.inr;
      somVal.textContent = PRESENTATION_INFO.marketData.som.inr;
    });

    usdBtn.addEventListener('click', () => {
      sounds.click();
      usdBtn.className = 'btn btn-sm btn-primary';
      inrBtn.className = 'btn btn-sm btn-ghost';
      tamVal.textContent = PRESENTATION_INFO.marketData.tam.usd;
      samVal.textContent = PRESENTATION_INFO.marketData.sam.usd;
      somVal.textContent = PRESENTATION_INFO.marketData.som.usd;
    });
  }

  // Draw 10-Year Canvas Chart
  const canvas = document.getElementById('financial-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let currentMode = 'rev-exp'; // 'rev-exp' | 'cum-profit' | 'ebitda'

  // Seed 10-Year Projections (matches slides 23, 24, 25)
  const years = ['Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8', 'Y9', 'Y10'];
  const revenueData = [12, 38, 95, 190, 380, 680, 1050, 1420, 1680, 1850]; // Lakhs
  const expenseData = [24, 45, 88, 160, 290, 480, 720, 980, 1180, 1310]; // Lakhs
  const profitData = revenueData.map((r, i) => r - expenseData[i]); // EBITDA
  const cumulativeProfit = [];
  profitData.reduce((acc, curr, idx) => {
    const sum = acc + curr;
    cumulativeProfit.push(sum);
    return sum;
  }, 0);

  function drawChart() {
    const width = canvas.parentElement.clientWidth;
    const height = 360;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.clearRect(0, 0, width, height);

    const padding = { top: 30, right: 40, bottom: 50, left: 60 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = padding.top + (chartH / 5) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
    }

    // X-axis labels
    ctx.fillStyle = '#64748b';
    ctx.font = '12px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    years.forEach((yr, idx) => {
      const x = padding.left + (chartW / (years.length - 1)) * idx;
      ctx.fillText(yr, x, height - 16);
    });

    if (currentMode === 'rev-exp') {
      const maxVal = 2000;
      // Revenue Line (Emerald)
      ctx.strokeStyle = '#00f59b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      revenueData.forEach((val, idx) => {
        const x = padding.left + (chartW / (years.length - 1)) * idx;
        const y = padding.top + chartH - (val / maxVal) * chartH;
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Expense Line (Crimson)
      ctx.strokeStyle = '#ff3366';
      ctx.lineWidth = 2;
      ctx.beginPath();
      expenseData.forEach((val, idx) => {
        const x = padding.left + (chartW / (years.length - 1)) * idx;
        const y = padding.top + chartH - (val / maxVal) * chartH;
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Legend
      ctx.fillStyle = '#00f59b';
      ctx.fillText('● Total Revenue (Lakhs)', width / 2 - 80, padding.top - 10);
      ctx.fillStyle = '#ff3366';
      ctx.fillText('● Total Expenses (Lakhs)', width / 2 + 80, padding.top - 10);

    } else if (currentMode === 'cum-profit') {
      const maxVal = 700;
      // Fill Gradient Area
      const grad = ctx.createLinearGradient(0, padding.top, 0, height);
      grad.addColorStop(0, 'rgba(0, 245, 155, 0.4)');
      grad.addColorStop(1, 'rgba(0, 245, 155, 0.01)');
      ctx.fillStyle = grad;

      ctx.beginPath();
      ctx.moveTo(padding.left, padding.top + chartH);
      cumulativeProfit.forEach((val, idx) => {
        const x = padding.left + (chartW / (years.length - 1)) * idx;
        const y = padding.top + chartH - (Math.max(0, val) / maxVal) * chartH;
        ctx.lineTo(x, y);
      });
      ctx.lineTo(padding.left + chartW, padding.top + chartH);
      ctx.closePath();
      ctx.fill();

      // Stroke Line
      ctx.strokeStyle = '#00f59b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      cumulativeProfit.forEach((val, idx) => {
        const x = padding.left + (chartW / (years.length - 1)) * idx;
        const y = padding.top + chartH - (Math.max(0, val) / maxVal) * chartH;
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      ctx.fillStyle = '#00f59b';
      ctx.fillText('● Cumulative Cash Flow / Net Surplus (₹ Lakhs)', width / 2, padding.top - 10);

    } else if (currentMode === 'ebitda') {
      const maxVal = 600;
      const barW = (chartW / years.length) * 0.55;
      
      profitData.forEach((val, idx) => {
        const x = padding.left + (chartW / years.length) * idx + barW * 0.4;
        const barH = (Math.abs(val) / maxVal) * chartH;
        const y = val >= 0 ? padding.top + chartH - barH : padding.top + chartH;

        ctx.fillStyle = val >= 0 ? '#10b981' : '#ef4444';
        ctx.fillRect(x, y, barW, barH);
      });

      ctx.fillStyle = '#10b981';
      ctx.fillText('● Annual EBITDA Net Profit (₹ Lakhs)', width / 2, padding.top - 10);
    }
  }

  drawChart();
  window.addEventListener('resize', drawChart);

  // Switch Modes
  const btnRevExp = document.getElementById('btn-chart-rev-exp');
  const btnCum = document.getElementById('btn-chart-cum-profit');
  const btnEbitda = document.getElementById('btn-chart-ebitda');

  if (btnRevExp && btnCum && btnEbitda) {
    btnRevExp.addEventListener('click', () => {
      sounds.click();
      currentMode = 'rev-exp';
      btnRevExp.className = 'btn btn-sm btn-primary';
      btnCum.className = 'btn btn-sm btn-secondary';
      btnEbitda.className = 'btn btn-sm btn-secondary';
      drawChart();
    });

    btnCum.addEventListener('click', () => {
      sounds.click();
      currentMode = 'cum-profit';
      btnRevExp.className = 'btn btn-sm btn-secondary';
      btnCum.className = 'btn btn-sm btn-primary';
      btnEbitda.className = 'btn btn-sm btn-secondary';
      drawChart();
    });

    btnEbitda.addEventListener('click', () => {
      sounds.click();
      currentMode = 'ebitda';
      btnRevExp.className = 'btn btn-sm btn-secondary';
      btnCum.className = 'btn btn-sm btn-secondary';
      btnEbitda.className = 'btn btn-sm btn-primary';
      drawChart();
    });
  }
}
