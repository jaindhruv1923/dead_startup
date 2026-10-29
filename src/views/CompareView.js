import { storage } from '../services/storage.js';
import { sounds } from '../services/sound.js';

export function renderCompareView() {
  const isAi = storage.getAiMode();

  return `
    <div class="container compare-container">
      <div style="text-align: center; max-width: 800px; margin: 0 auto 40px;">
        <span class="badge badge-cyan mb-2">AI & ENTREPRENEURSHIP RESEARCH STUDY</span>
        <h1 style="font-size: 2.6rem; font-weight: 800; margin: 8px 0 14px;">
          Comparing Traditional vs AI-Powered Marketplace
        </h1>
        <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.5;">
          Direct research prototype from <em>Khushi, Irfa, Aman, Raj, and Dhruv</em>: Evaluating whether artificial intelligence delivers measurable discovery value over standard search for early-stage founders.
        </p>

        <!-- Live Mode Switcher in Hero -->
        <div style="margin-top: 24px; display: inline-flex; align-items: center; gap: 12px; background: var(--bg-surface-elevated); padding: 8px 16px; border-radius: var(--radius-full); border: 1px solid var(--border-medium);">
          <span style="font-size: 0.88rem; color: var(--text-muted);">Current Active Platform Mode:</span>
          <button class="btn btn-sm ${isAi ? 'btn-cyan' : 'btn-primary'}" id="compare-btn-toggle-mode">
            <span>${isAi ? '🤖 Prototype 2: AI-Assisted' : '📦 Prototype 1: Standard Search'}</span>
            <span style="font-size: 0.72rem; opacity: 0.8;">(Click to Switch)</span>
          </button>
        </div>
      </div>

      <!-- Comparative Analysis Matrix Table (Slide 5 of Presentation 2) -->
      <div class="glass-panel" style="padding: 32px; margin-bottom: 48px;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
          <div>
            <h3 style="font-size: 1.4rem; font-weight: 700;">Executive Comparative Analysis</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Slide 5 Synthesis: Feature-by-feature evaluation across 7 key dimensions.</p>
          </div>
          <span class="badge badge-slate">Source: User Research Testing</span>
        </div>

        <table class="compare-matrix-table">
          <thead>
            <tr>
              <th style="width: 22%;">Evaluation Criteria</th>
              <th style="width: 39%;" class="col-traditional">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span>📦</span>
                  <span>Prototype 1 (Without AI)</span>
                </div>
              </th>
              <th style="width: 39%;" class="col-ai">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span>🤖</span>
                  <span style="color: var(--cyan-neon);">Prototype 2 (With AI Copilot)</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Functionality</strong></td>
              <td class="col-traditional">Keyword search, hard dropdown category filters</td>
              <td class="col-ai">Natural-language intent parsing & multi-variable matching</td>
            </tr>
            <tr>
              <td><strong>User Experience</strong></td>
              <td class="col-traditional">Manual navigation through listings page-by-page</td>
              <td class="col-ai">Guided discovery based on business model & budget</td>
            </tr>
            <tr>
              <td><strong>Personalisation</strong></td>
              <td class="col-traditional">None; user-selected checkboxes only</td>
              <td class="col-ai">Tailored recommendations matching skill level & target industry</td>
            </tr>
            <tr>
              <td><strong>Efficiency</strong></td>
              <td class="col-traditional">Manual comparison of prices, lines of code, tech stacks</td>
              <td class="col-ai">Instant match across code, domain, and waitlists in one click</td>
            </tr>
            <tr>
              <td><strong>Accessibility</strong></td>
              <td class="col-traditional">Requires knowing exact technical keywords ("FastAPI", "PostGIS")</td>
              <td class="col-ai">Plain-English requests ("I want a fast food delivery app under $2k")</td>
            </tr>
            <tr>
              <td><strong>Problem-Solving</strong></td>
              <td class="col-traditional">Passive listing repository connecting buyers & sellers</td>
              <td class="col-ai">Proactive listing creation assistant, automated sanity checks, price guidance</td>
            </tr>
            <tr>
              <td><strong>Implementation Cost</strong></td>
              <td class="col-traditional">Simpler to build & low operational server overhead</td>
              <td class="col-ai">Higher initial model development & runtime inference costs</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 20px; padding: 14px 18px; background: rgba(0, 210, 255, 0.05); border-left: 3px solid var(--cyan-neon); border-radius: 0 var(--radius-md) var(--radius-md) 0; font-size: 0.88rem; color: #bae6fd;">
          <strong>Key Research Takeaway:</strong> AI significantly reduces search friction for novice entrepreneurs who don't know technical jargon. However, human escrow verification remains vital for licensing, code execution checks, and fund safety.
        </div>
      </div>

      <!-- Interactive Persona Alignment Simulator: Riya's Real Journey (Slide 6) -->
      <div class="persona-journey-card">
        <div class="persona-profile-badge">
          <div class="persona-avatar">R</div>
          <div>
            <h3 style="font-size: 1.35rem; font-weight: 700;">Persona Alignment: Riya, 21</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem;">Student & first-time founder wanting to launch an online clothing store on a tight budget ($1,200).</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
          <!-- Left: Traditional Flow -->
          <div style="background: rgba(0, 0, 0, 0.35); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 20px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <h4 style="font-size: 1.05rem; color: var(--text-muted);">Without AI: Traditional Journey</h4>
              <span class="badge badge-slate">Time: ~42 Hours</span>
            </div>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 0.88rem; color: var(--text-muted);">
              <li>• Searches Godaddy/Namecheap separately for affordable domains ($500+)</li>
              <li>• Searches GitHub & CodeCanyon for clothing templates ($300+)</li>
              <li>• Searches Upwork for a freelance designer for logos & Figma ($800+)</li>
              <li>• Must manually judge whether the frontend connects with Shopify</li>
              <li>• <strong>Total Estimated Cost:</strong> $1,600+ and 4 weeks of coordination</li>
            </ul>
          </div>

          <!-- Right: AI-Assisted Flow -->
          <div style="background: rgba(0, 210, 255, 0.06); border: 1px solid rgba(0, 210, 255, 0.3); border-radius: var(--radius-lg); padding: 20px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <h4 style="font-size: 1.05rem; color: var(--cyan-neon);">With AI: DeadStartup Copilot</h4>
              <span class="badge badge-cyan">Time: ~3 Minutes</span>
            </div>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 0.88rem; color: #e0f2fe;">
              <li>✓ Enters prompt: <em>"Online clothing store under $1,500 with Next.js & brand kit"</em></li>
              <li>✓ AI instantly recommends <strong>ThreadVibe ($1,250 full bundle)</strong></li>
              <li>✓ Verified 3D visualizer + 48 Figma screens + .store domain + 2,400 waitlist</li>
              <li>✓ AI provides 3 instant pivot ideas for student streetwear merch</li>
              <li>✓ <strong>Total Cost:</strong> $1,250 (Saved $18,750 vs custom dev)</li>
            </ul>
          </div>
        </div>

        <div style="text-align: center; margin-top: 28px;">
          <a href="#marketplace?search=fashion" class="btn btn-primary" id="btn-simulate-riya">
            <span>✨</span> Test Riya's Matched Journey in Live Marketplace →
          </a>
        </div>
      </div>
    </div>
  `;
}

export function attachCompareEvents() {
  const toggleBtn = document.getElementById('compare-btn-toggle-mode');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = storage.getAiMode();
      storage.setAiMode(!current);
      sounds.toggleOn();
      // Re-render
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.innerHTML = renderCompareView();
        attachCompareEvents();
      }
      window.showToast(!current ? 'AI Copilot Mode activated (Prototype 2)' : 'Standard Search Mode activated (Prototype 1)', 'info');
    });
  }
}
