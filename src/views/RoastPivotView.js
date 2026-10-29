import { COMMUNITY_ROASTS } from '../data/seedData.js';
import { sounds } from '../services/sound.js';

export function renderRoastPivotView() {
  return `
    <div class="container compare-container">
      <div style="text-align: center; max-width: 780px; margin: 0 auto 40px;">
        <span class="badge badge-amber mb-2">SLIDE 26: COMMUNITY PIVOT ENGINE</span>
        <h1 style="font-size: 2.6rem; font-weight: 800; margin: 8px 0 14px;">
          "Roast & Pivot My Startup" Board
        </h1>
        <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.5;">
          A safe, constructive space for founders to admit failure, get candid feedback from experienced builders, and discover 2026 AI pivot angles.
        </p>
      </div>

      <!-- Submit a Dead Startup Pitch for Roasting Box -->
      <div class="glass-panel" style="padding: 28px; max-width: 860px; margin: 0 auto 40px;">
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span>🔥</span> Submit Your Dead/Struggling Startup for Community Roasting & AI Pivot
        </h3>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 18px;">
          Get roasted on unit economics and receive 3 AI-suggested pivot opportunities for your codebase.
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <input type="text" id="roast-input-project" class="form-input" placeholder="Project Name & Tagline (e.g. ZenFlow - Meditation app with $40k burn)">
          <input type="text" id="roast-input-author" class="form-input" placeholder="Your Name or Alias (e.g. FounderDan)">
        </div>

        <textarea id="roast-input-pitch" class="form-textarea" placeholder="What did you build? What was your monthly burn? What killed it?"></textarea>

        <div style="display: flex; justify-content: flex-end; margin-top: 14px;">
          <button class="btn btn-primary" id="btn-submit-roast">
            🔥 Post for Roasting & AI Pivot Analysis
          </button>
        </div>
      </div>

      <!-- Feed of Active Roasts & Pivots -->
      <div style="max-width: 860px; margin: 0 auto;" id="roast-feed-container">
        ${COMMUNITY_ROASTS.map(r => `
          <div class="roast-thread-card">
            <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px;">
              <div>
                <span class="badge badge-amber" style="margin-bottom: 6px;">BURN: ${r.burn}</span>
                <h3 style="font-size: 1.35rem; font-weight: 700;">${r.project}</h3>
                <div style="font-size: 0.8rem; color: var(--text-dim);">Posted by ${r.author} (${r.role})</div>
              </div>
              <button class="btn btn-secondary btn-sm" onclick="sounds.click(); window.showToast('Upvoted pitch pivot!', 'success')">
                🔺 ${r.upvotes} Upvotes
              </button>
            </div>

            <p style="font-size: 0.92rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 16px;">
              ${r.pitch}
            </p>

            <!-- AI Pivot Analysis Card -->
            <div class="pivot-suggestion-pill">
              <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-family: var(--font-mono); color: var(--cyan-neon); margin-bottom: 6px;">
                <span>🤖</span> DEADSTARTUP AI PIVOT RECOMMENDATION:
              </div>
              <p style="font-size: 0.88rem; color: #e0f2fe; line-height: 1.5;">
                ${r.aiPivot}
              </p>
            </div>

            <!-- Comments -->
            <div style="margin-top: 18px; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
              <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 10px;">
                FOUNDER & BUILDER FEEDBACK (${r.comments.length}):
              </div>
              ${r.comments.map(c => `
                <div style="font-size: 0.82rem; color: var(--text-muted); padding: 6px 0; border-bottom: 1px dashed rgba(255,255,255,0.04);">
                  <strong style="color: var(--text-main);">${c.user}:</strong> ${c.text}
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export function attachRoastPivotEvents() {
  const submitBtn = document.getElementById('btn-submit-roast');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const proj = document.getElementById('roast-input-project')?.value;
      const pitch = document.getElementById('roast-input-pitch')?.value;
      const author = document.getElementById('roast-input-author')?.value || 'Anonymous Builder';

      if (!proj || !pitch) {
        window.showToast('Please fill out the project name and pitch story', 'warning');
        return;
      }

      sounds.success();

      const newRoast = {
        id: `roast-${Date.now()}`,
        author,
        role: 'Former Founder',
        project: proj,
        burn: '$15,000 & 5 mos',
        status: 'Roasting',
        pitch,
        aiPivot: `Repurpose the authentication and database layer as an open-source template, and bundle the domain for sale in DeadStartup Asset Vault.`,
        upvotes: 1,
        comments: [
          { user: 'DeadStartup Bot', text: 'AI scan complete: Clean codebase structure. Recommend listing code for $650.' }
        ]
      };

      COMMUNITY_ROASTS.unshift(newRoast);
      window.showToast('🔥 Your pitch has been posted to the Roast & Pivot board!', 'success');

      // Re-render view
      const main = document.getElementById('main-content');
      if (main) {
        main.innerHTML = renderRoastPivotView();
        attachRoastPivotEvents();
      }
    });
  }
}
