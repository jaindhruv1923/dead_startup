import { storage } from '../services/storage.js';
import { sounds } from '../services/sound.js';

export function renderPostMortemView() {
  const startups = storage.getStartups();

  return `
    <div class="container compare-container">
      <div style="text-align: center; max-width: 760px; margin: 0 auto 48px;">
        <span class="badge badge-amber mb-2">RAW FOUNDER AUTOPSIES</span>
        <h1 style="font-size: 2.6rem; font-weight: 800; margin: 8px 0 14px;">
          The Startup Mausoleum & Post-Mortem Chronicles
        </h1>
        <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.5;">
          Unfiltered case studies written by founders who built ambitious technology, ran out of runway, and decided to salvage their codebase for future entrepreneurs.
        </p>
      </div>

      <div style="display: grid; gap: 28px; max-width: 900px; margin: 0 auto;">
        ${startups.map(s => `
          <div class="glass-panel" style="padding: 32px; border-radius: var(--radius-xl);">
            <div style="display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
              <div>
                <span class="badge badge-crimson" style="margin-bottom: 6px;">DECEASED ${s.died}</span>
                <h3 style="font-size: 1.6rem; font-weight: 800;">${s.name}</h3>
                <div style="font-size: 0.85rem; color: var(--text-muted);">
                  By ${s.founderName} (${s.managerialTitle}) • Burned $${s.burnedAmount.toLocaleString()}
                </div>
              </div>
              <a href="#startup/${s.id}" class="btn btn-primary btn-sm">
                Inspect Code & Assets ($${s.bundlePrice}) →
              </a>
            </div>

            <div class="founder-quote" style="margin-bottom: 20px;">
              “${s.founderQuote}”
            </div>

            <div style="background: rgba(0, 0, 0, 0.3); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
              <h4 style="font-size: 0.92rem; color: var(--emerald-neon); margin-bottom: 6px;">What Worked:</h4>
              <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.5; margin-bottom: 14px;">${s.postMortem.whatWorked}</p>

              <h4 style="font-size: 0.92rem; color: var(--crimson-neon); margin-bottom: 6px;">The Fatal Mistake:</h4>
              <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.5;">${s.postMortem.theFatalMistake}</p>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="badge badge-slate">${s.category}</span>
                <span class="badge badge-slate">${s.assets.codeRepo?.stack || 'TypeScript'}</span>
              </div>
              <button class="btn btn-ghost btn-sm" onclick="sounds.click(); window.showToast('Upvoted lesson! +1 to founder recovery reputation', 'success')">
                ❤️ Valuable Post-Mortem Lesson
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export function attachPostMortemEvents() {
  // Post mortem events if any interactive toggles
}
