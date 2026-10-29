import { storage } from '../services/storage.js';
import { sounds } from '../services/sound.js';

export function renderEscrowTrackerView() {
  let activeEscrow = storage.getEscrow();

  // If no active escrow deal, create a realistic demo one
  if (!activeEscrow) {
    activeEscrow = {
      dealId: 'ESC-892401',
      startupId: 'threadvibe',
      startupName: 'ThreadVibe Storefront & 3D Engine',
      founderName: 'Maya Chen & Arjun Patel',
      buyerName: 'Riya (Student Entrepreneur)',
      totalAmount: 1250,
      stage: 3, // Default to stage 3 for interactive exploration
      createdAt: '2026-03-26T10:14:00Z',
      timeline: [
        { time: '10:14 AM', msg: 'Escrow vault created. Deal terms accepted by both parties.' },
        { time: '10:15 AM', msg: 'Buyer funded DeadStartup Escrow Vault ($1,250 USD locked in multi-sig vault).' },
        { time: '10:16 AM', msg: 'IP Assignment Contract legally signed and timestamped on cryptographic ledger.' },
        { time: '10:18 AM', msg: 'Seller generated one-time Git repository transfer invite & domain auth token.' }
      ]
    };
    storage.setEscrow(activeEscrow);
  }

  const stages = [
    { num: 1, title: 'Escrow Fund Lock', desc: 'Buyer deposits funds into DeadStartup multi-sig vault. Capital safely held.' },
    { num: 2, title: 'Legal IP Assignment', desc: 'Auto-generated assignment of copyrights, patents, trademarks & code ownership.' },
    { num: 3, title: 'Credential Unlock', desc: 'GitHub repo invitation, domain transfer authorization codes, and Figma files released.' },
    { num: 4, title: '48-Hr Verification', desc: 'Buyer clones code into local sandbox and verifies tests & runtime compliance.' },
    { num: 5, title: 'Settlement & Payout', desc: 'Buyer approves inspection. Escrow releases funds to failed founder minus 10% fee.' }
  ];

  return `
    <div class="container escrow-container">
      <div class="escrow-header">
        <span class="badge badge-emerald mb-2">SLIDE 16 ARCHITECTURE: VERIFIED ESCROW SYSTEM</span>
        <h1 style="font-size: 2.5rem; font-weight: 800; margin: 8px 0 14px;">
          The Revival Handover & Escrow Room
        </h1>
        <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.5;">
          Zero-trust, guaranteed asset handover. Funds stay locked until the buyer confirms that the codebase runs and IP is pristine.
        </p>
      </div>

      <!-- Main Escrow Flow Card -->
      <div class="escrow-flow-card">
        
        <!-- 5-Stage Timeline Bar -->
        <div class="escrow-timeline">
          ${stages.map(st => {
            let statusClass = '';
            if (st.num < activeEscrow.stage) statusClass = 'completed';
            else if (st.num === activeEscrow.stage) statusClass = 'current';

            return `
              <div class="timeline-stage-card ${statusClass}" id="stage-card-${st.num}">
                <div class="stage-num-badge">${st.num < activeEscrow.stage ? '✓' : `0${st.num}`}</div>
                <h4 class="stage-title">${st.title}</h4>
                <p class="stage-desc">${st.desc}</p>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Two Column Control Panel -->
        <div class="escrow-control-grid">
          
          <!-- Left: Stage Workspace -->
          <div class="escrow-workspace" id="escrow-workspace-content">
            
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
              <div>
                <span class="badge badge-cyan">TRANSACTION ${activeEscrow.dealId}</span>
                <h3 style="font-size: 1.4rem; margin-top: 6px;">Active Handover: ${activeEscrow.startupName}</h3>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 0.75rem; color: var(--text-dim);">SELLER / FORMER FOUNDER</div>
                <strong style="color: var(--amber-neon); font-size: 0.95rem;">${activeEscrow.founderName}</strong>
              </div>
            </div>

            <!-- Dynamic Stage Action View -->
            <div id="dynamic-stage-view">
              ${renderStageInteractivePanel(activeEscrow)}
            </div>

            <!-- Audit Trail & Terminal Logs -->
            <div style="margin-top: 32px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted);">ESCROW PROTOCOL AUDIT LOG</span>
                <span class="badge badge-emerald" style="font-size: 0.7rem;">LIVE SYNC</span>
              </div>
              <div class="escrow-terminal" id="escrow-terminal-logs">
                ${activeEscrow.timeline.map(item => `
                  <div class="terminal-line">
                    <span class="terminal-timestamp">[${item.time}]</span>
                    <span>${item.msg}</span>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>

          <!-- Right: Vault Status Box -->
          <aside>
            <div class="vault-status-box">
              <span class="vault-lock-icon">${activeEscrow.stage === 5 ? '🔓' : '🔒'}</span>
              <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">
                ${activeEscrow.stage === 5 ? 'FUNDS SETTLED & RELEASED' : 'DEADSTARTUP VAULT LOCKED'}
              </div>
              <div class="vault-amount">$${activeEscrow.totalAmount.toLocaleString()}</div>
              
              <div style="font-size: 0.82rem; color: var(--text-dim); margin-bottom: 20px; line-height: 1.5;">
                Protected by DeadStartup multi-sig smart contract with 48-hour inspection warranty.
              </div>

              <div style="border-top: 1px solid var(--border-subtle); padding-top: 16px; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 8px;">
                  <span style="color: var(--text-muted);">Gross Asset Price:</span>
                  <strong style="font-family: var(--font-mono);">$${activeEscrow.totalAmount}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 8px;">
                  <span style="color: var(--text-muted);">DeadStartup Success Fee (10%):</span>
                  <span style="color: var(--cyan-neon); font-family: var(--font-mono);">-$${Math.round(activeEscrow.totalAmount * 0.1)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; border-top: 1px dashed var(--border-subtle); padding-top: 8px;">
                  <span style="color: var(--emerald-neon);">Net to Founder:</span>
                  <span style="color: var(--emerald-neon); font-family: var(--font-mono);">$${Math.round(activeEscrow.totalAmount * 0.9)}</span>
                </div>
              </div>

              <!-- Quick Stage Advance Simulator Buttons -->
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <button class="btn btn-secondary btn-sm" id="btn-reset-escrow" style="width: 100%;">
                  🔄 Reset Simulation to Step 1
                </button>
                <button class="btn btn-primary btn-sm" id="btn-next-stage" style="width: 100%;">
                  ⏩ Advance to Next Stage (${activeEscrow.stage < 5 ? activeEscrow.stage + 1 : 'Completed'})
                </button>
              </div>
            </div>

            <!-- Handover Assistance Card -->
            <div style="margin-top: 20px; background: rgba(255, 184, 0, 0.05); border: 1px solid rgba(255, 184, 0, 0.2); border-radius: var(--radius-lg); padding: 18px;">
              <h4 style="font-size: 0.92rem; color: var(--amber-neon); margin-bottom: 6px;">Need Legal / Tech Concierge?</h4>
              <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 12px;">
                Our escrow team can assist with AWS root account transfers, domain registrar auth codes, and trademark deeds.
              </p>
              <button class="btn btn-outline-emerald btn-sm" style="width: 100%; border-color: var(--amber-neon); color: var(--amber-neon);" onclick="window.showToast('Concierge requested! Our engineer will join your session in 5 minutes.', 'info')">
                Request Concierge
              </button>
            </div>
          </aside>

        </div>

      </div>
    </div>
  `;
}

function renderStageInteractivePanel(deal) {
  if (deal.stage === 1) {
    return `
      <div style="padding: 20px; background: rgba(0, 0, 0, 0.25); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="color: var(--cyan-neon); margin-bottom: 8px;">Stage 1: Deposit Funds in DeadStartup Vault</h4>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;">
          Lock $${deal.totalAmount} in the escrow multi-sig contract. The seller will be prompted to transfer assets once funds are verified.
        </p>
        <button class="btn btn-primary" id="btn-stage1-deposit">
          💳 Simulate Escrow Payment Deposit ($${deal.totalAmount})
        </button>
      </div>
    `;
  }

  if (deal.stage === 2) {
    return `
      <div style="padding: 20px; background: rgba(0, 0, 0, 0.25); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
          <h4 style="color: var(--emerald-neon);">Stage 2: IP Assignment & Bill of Sale Agreement</h4>
          <span class="badge badge-emerald">READY FOR SIGNATURE</span>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted);">
          Legally binding assignment conveying all copyrights, codebases, domains, trademarks, and design systems from <strong>${deal.founderName}</strong> to <strong>${deal.buyerName}</strong>.
        </p>

        <!-- Printable Contract Preview -->
        <div class="contract-sheet">
          <h3 style="text-align: center; margin-bottom: 12px; font-size: 1.1rem; text-decoration: underline;">
            INTELLECTUAL PROPERTY ASSIGNMENT & ASSET PURCHASE AGREEMENT
          </h3>
          <p><strong>Effective Date:</strong> ${new Date().toLocaleDateString()}</p>
          <p><strong>Seller (Founding Entity):</strong> ${deal.founderName} (${deal.startupName})</p>
          <p><strong>Buyer (Acquiring Entity):</strong> ${deal.buyerName}</p>
          <p><strong>Escrow Agent:</strong> DeadStartup Technologies Inc.</p>
          <p><strong>Purchase Consideration:</strong> $${deal.totalAmount.toLocaleString()} USD</p>
          <br/>
          <p>1. <strong>Transfer of Intellectual Property:</strong> Seller hereby unconditionally and irrevocably assigns, transfers, and conveys to Buyer all worldwide right, title, and interest in and to the software codebases, Git repositories, architecture documentation, design files, domains, trademarks, and associated customer lists.</p>
          <p>2. <strong>Warranties:</strong> Seller warrants that it is the sole and unencumbered owner of the assets and that no external venture liens or third-party liabilities infringe upon the codebase.</p>
          <p>3. <strong>Escrow Inspection Period:</strong> Buyer is granted forty-eight (48) hours from receipt of credentials to inspect and verify the functionality in local sandbox before escrow release.</p>
        </div>

        <div style="display: flex; gap: 12px;">
          <button class="btn btn-primary" id="btn-stage2-sign">
            ✍️ Execute & Sign Digital Transfer Deed
          </button>
          <button class="btn btn-secondary btn-sm" onclick="window.print()">
            🖨️ Print / Download PDF
          </button>
        </div>
      </div>
    `;
  }

  if (deal.stage === 3) {
    return `
      <div style="padding: 20px; background: rgba(0, 0, 0, 0.25); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="color: var(--cyan-neon); margin-bottom: 8px;">Stage 3: Repository & Credential Handover Vault</h4>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 18px;">
          The seller has deposited the secure credentials. Click to decrypt and copy your access tokens.
        </p>

        <div style="display: grid; gap: 12px; margin-bottom: 20px;">
          <div style="padding: 12px 16px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between;">
            <div>
              <div style="font-size: 0.75rem; color: var(--text-dim);">GITHUB REPOSITORY ACCESS</div>
              <div style="font-family: var(--font-mono); color: var(--emerald-neon); font-size: 0.88rem;">github.com/deadstartup-vault/${deal.dealId.toLowerCase()}</div>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText('github.com/deadstartup-vault/${deal.dealId.toLowerCase()}'); window.showToast('Repo link copied to clipboard!', 'info')">Copy</button>
          </div>

          <div style="padding: 12px 16px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between;">
            <div>
              <div style="font-size: 0.75rem; color: var(--text-dim);">DOMAIN EPP AUTH TRANSFER CODE</div>
              <div style="font-family: var(--font-mono); color: var(--amber-neon); font-size: 0.88rem;">EPP-AUTH-891X-TVIBE-2026</div>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText('EPP-AUTH-891X-TVIBE-2026'); window.showToast('Domain transfer code copied!', 'info')">Copy</button>
          </div>

          <div style="padding: 12px 16px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between;">
            <div>
              <div style="font-size: 0.75rem; color: var(--text-dim);">FIGMA TEAM INVITE LINK</div>
              <div style="font-family: var(--font-mono); color: var(--cyan-neon); font-size: 0.88rem;">figma.com/file/transfer-${deal.dealId}</div>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText('figma.com/file/transfer-${deal.dealId}'); window.showToast('Figma invite copied!', 'info')">Copy</button>
          </div>
        </div>

        <button class="btn btn-primary" id="btn-stage3-confirm">
          Proceed to 48-Hour Sandbox Verification →
        </button>
      </div>
    `;
  }

  if (deal.stage === 4) {
    return `
      <div style="padding: 20px; background: rgba(0, 0, 0, 0.25); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <h4 style="color: var(--amber-neon);">Stage 4: 48-Hour Buyer Inspection Sandbox</h4>
          <span class="badge badge-amber animate-pulse-heart">47:48:12 REMAINING</span>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;">
          You have full access to test and verify the codebase locally. Check off each verification step:
        </p>

        <div class="verify-checklist">
          <label class="verify-checklist-item">
            <input type="checkbox" id="check-step-1" checked>
            <span>Cloned Git repository & dependencies installed without errors</span>
          </label>
          <label class="verify-checklist-item">
            <input type="checkbox" id="check-step-2" checked>
            <span>Test suite executed and passed (0 breaking unit tests)</span>
          </label>
          <label class="verify-checklist-item">
            <input type="checkbox" id="check-step-3" checked>
            <span>Domain authorization code accepted by registrar</span>
          </label>
          <label class="verify-checklist-item">
            <input type="checkbox" id="check-step-4" checked>
            <span>Verified clean IP ownership without third party claims</span>
          </label>
        </div>

        <div style="margin-top: 24px; display: flex; gap: 12px;">
          <button class="btn btn-primary" id="btn-stage4-approve">
            ✅ Approve All Verifications & Release Escrow Funds
          </button>
          <button class="btn btn-ghost btn-sm" onclick="window.showToast('Dispute window opened. A DeadStartup arbiter has been assigned.', 'warning')">
            Flag an Issue / Request Dispute
          </button>
        </div>
      </div>
    `;
  }

  // Stage 5: Finished
  return `
    <div style="padding: 24px; background: rgba(0, 245, 155, 0.08); border-radius: var(--radius-lg); border: 1px solid var(--border-accent); text-align: center;">
      <div style="font-size: 3rem; margin-bottom: 12px;">🎉</div>
      <h3 style="font-size: 1.6rem; color: var(--emerald-neon); margin-bottom: 8px;">Handover Successfully Completed!</h3>
      <p style="color: var(--text-muted); max-width: 500px; margin: 0 auto 20px; font-size: 0.92rem;">
        $${Math.round(deal.totalAmount * 0.9).toLocaleString()} has been released to ${deal.founderName}. Full intellectual property rights have been transferred to ${deal.buyerName}.
      </p>
      <div style="display: flex; gap: 12px; justify-content: center;">
        <a href="#marketplace" class="btn btn-primary">Browse More Liquidated Assets</a>
        <button class="btn btn-secondary" onclick="window.print()">Download Transfer Certificate</button>
      </div>
    </div>
  `;
}

export function attachEscrowTrackerEvents() {
  const depositBtn = document.getElementById('btn-stage1-deposit');
  const signBtn = document.getElementById('btn-stage2-sign');
  const confirmCredsBtn = document.getElementById('btn-stage3-confirm');
  const approveBtn = document.getElementById('btn-stage4-approve');
  const nextStageBtn = document.getElementById('btn-next-stage');
  const resetBtn = document.getElementById('btn-reset-escrow');

  function advanceStage(targetStage) {
    let deal = storage.getEscrow();
    if (!deal) return;

    deal.stage = targetStage;
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (targetStage === 2) {
      deal.timeline.push({ time: nowTime, msg: 'Buyer funded DeadStartup Escrow Vault ($' + deal.totalAmount + ' USD locked).' });
    } else if (targetStage === 3) {
      deal.timeline.push({ time: nowTime, msg: 'IP Assignment Deed signed and recorded on audit ledger.' });
    } else if (targetStage === 4) {
      deal.timeline.push({ time: nowTime, msg: 'Buyer initiated 48-Hour Inspection Sandbox. Verification checklist active.' });
    } else if (targetStage === 5) {
      deal.timeline.push({ time: nowTime, msg: 'Buyer approved all checks! Escrow released $' + Math.round(deal.totalAmount * 0.9) + ' to seller.' });
      sounds.success();
    }

    storage.setEscrow(deal);
    sounds.toggleOn();
    // Re-render
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.innerHTML = renderEscrowTrackerView();
      attachEscrowTrackerEvents();
    }
  }

  if (depositBtn) {
    depositBtn.addEventListener('click', () => {
      advanceStage(2);
      window.showToast('Escrow deposit secured! Moving to IP Contract Signature.', 'success');
    });
  }

  if (signBtn) {
    signBtn.addEventListener('click', () => {
      advanceStage(3);
      window.showToast('IP assignment contract digitally signed!', 'success');
    });
  }

  if (confirmCredsBtn) {
    confirmCredsBtn.addEventListener('click', () => {
      advanceStage(4);
      window.showToast('Credentials unlocked. 48-hour inspection started.', 'info');
    });
  }

  if (approveBtn) {
    approveBtn.addEventListener('click', () => {
      advanceStage(5);
      window.showToast('🎉 Transaction settled! Funds transferred to founder.', 'success');
    });
  }

  if (nextStageBtn) {
    nextStageBtn.addEventListener('click', () => {
      const deal = storage.getEscrow();
      if (deal && deal.stage < 5) {
        advanceStage(deal.stage + 1);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      let deal = storage.getEscrow();
      if (deal) {
        deal.stage = 1;
        deal.timeline = [{ time: 'Just now', msg: 'Escrow vault reset to Stage 1 deposit.' }];
        storage.setEscrow(deal);
        sounds.click();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.innerHTML = renderEscrowTrackerView();
          attachEscrowTrackerEvents();
        }
        window.showToast('Simulation reset to Stage 1.', 'info');
      }
    });
  }
}
