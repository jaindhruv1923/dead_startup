import { sounds } from '../services/sound.js';
import { storage } from '../services/storage.js';

export function openOfferModal(startup) {
  const container = document.getElementById('modal-container');
  if (!container) return;

  container.innerHTML = `
    <div class="modal-overlay" id="offer-modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.3rem;">💬</span>
            <h3 style="font-size: 1.25rem; font-weight: 700;">Make an Offer on ${startup.name}</h3>
          </div>
          <button class="modal-close-btn" id="modal-close-btn">&times;</button>
        </div>

        <div class="modal-body">
          <div style="background: rgba(0, 0, 0, 0.3); border-radius: var(--radius-md); padding: 14px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-size: 0.75rem; color: var(--text-dim);">LISTED BUNDLE PRICE</div>
              <div style="font-size: 1.3rem; font-weight: 800; color: var(--emerald-neon); font-family: var(--font-mono);">$${startup.bundlePrice}</div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 0.75rem; color: var(--text-dim);">SELLER / FOUNDER</div>
              <div style="font-size: 0.9rem; font-weight: 600; color: var(--amber-neon);">${startup.founderName}</div>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">What do you want to acquire?</label>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label class="filter-checkbox">
                <input type="checkbox" id="offer-asset-full" checked>
                <span>Entire Liquidated Package ($${startup.bundlePrice})</span>
              </label>
              <label class="filter-checkbox">
                <input type="checkbox" id="offer-asset-code">
                <span>Codebase Repository Only ($${startup.assets.codeRepo?.price || 800})</span>
              </label>
              <label class="filter-checkbox">
                <input type="checkbox" id="offer-asset-domain">
                <span>Domain & Brand Only ($${startup.assets.domain?.price || 300})</span>
              </label>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="form-group">
              <label class="form-label">Your Offer Amount ($ USD)</label>
              <input type="number" id="offer-amount-input" class="form-input" value="${Math.round(startup.bundlePrice * 0.85)}" style="font-family: var(--font-mono); font-size: 1.1rem; font-weight: 700; color: var(--emerald-neon);">
            </div>
            <div class="form-group">
              <label class="form-label">Your Email / Handle</label>
              <input type="text" id="offer-contact-input" class="form-input" placeholder="riya@builders.edu" value="riya@builders.edu">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Message / Note to Founder</label>
            <textarea id="offer-message-input" class="form-textarea" placeholder="Tell the founder about your intended pivot, vision, or verification timeline..."></textarea>
          </div>

          <div style="font-size: 0.75rem; color: var(--text-dim); line-height: 1.4;">
            🔒 All accepted offers transition directly into DeadStartup 5-stage escrow with verified IP assignment and 48-hour local test warranty.
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" id="modal-cancel-btn">Cancel</button>
          <button class="btn btn-primary" id="modal-submit-offer-btn">
            🚀 Submit Formal Offer
          </button>
        </div>
      </div>
    </div>
  `;

  const overlay = document.getElementById('offer-modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');
  const cancelBtn = document.getElementById('modal-cancel-btn');
  const submitBtn = document.getElementById('modal-submit-offer-btn');

  function closeModal() {
    sounds.click();
    container.innerHTML = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const amount = parseInt(document.getElementById('offer-amount-input')?.value || '1000', 10);
      sounds.success();

      // Record offer
      storage.saveOffer({
        startupId: startup.id,
        startupName: startup.name,
        amount,
        date: new Date().toLocaleDateString(),
        status: 'Counter-Offer Under Review'
      });

      closeModal();
      window.showToast(`✅ Offer of $${amount.toLocaleString()} submitted to ${startup.founderName}!`, 'success');
    });
  }
}
