import { SEED_STARTUPS } from '../data/seedData.js';

const STORAGE_KEYS = {
  STARTUPS: 'deadstartup_startups_v1',
  AI_MODE: 'deadstartup_ai_mode',
  ACTIVE_ESCROW: 'deadstartup_active_escrow',
  USER_OFFERS: 'deadstartup_user_offers',
  CART: 'deadstartup_cart_v1'
};

class StorageService {
  constructor() {
    this.init();
  }

  init() {
    const existing = localStorage.getItem(STORAGE_KEYS.STARTUPS);
    if (!existing) {
      localStorage.setItem(STORAGE_KEYS.STARTUPS, JSON.stringify(SEED_STARTUPS));
    }
  }

  getStartups() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STARTUPS);
      return data ? JSON.parse(data) : SEED_STARTUPS;
    } catch (e) {
      return SEED_STARTUPS;
    }
  }

  getStartupById(id) {
    const list = this.getStartups();
    return list.find(s => s.id === id) || null;
  }

  saveStartup(newStartup) {
    const list = this.getStartups();
    const updated = [newStartup, ...list];
    localStorage.setItem(STORAGE_KEYS.STARTUPS, JSON.stringify(updated));
    return newStartup;
  }

  getAiMode() {
    return localStorage.getItem(STORAGE_KEYS.AI_MODE) === 'true';
  }

  setAiMode(val) {
    localStorage.setItem(STORAGE_KEYS.AI_MODE, val ? 'true' : 'false');
    window.dispatchEvent(new CustomEvent('deadstartup:ai_mode_changed', { detail: val }));
  }

  getEscrow() {
    const item = localStorage.getItem(STORAGE_KEYS.ACTIVE_ESCROW);
    return item ? JSON.parse(item) : null;
  }

  setEscrow(escrowData) {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_ESCROW, JSON.stringify(escrowData));
    window.dispatchEvent(new CustomEvent('deadstartup:escrow_updated', { detail: escrowData }));
  }

  clearEscrow() {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_ESCROW);
    window.dispatchEvent(new CustomEvent('deadstartup:escrow_updated', { detail: null }));
  }

  saveOffer(offer) {
    const existing = this.getOffers();
    const updated = [offer, ...existing];
    localStorage.setItem(STORAGE_KEYS.USER_OFFERS, JSON.stringify(updated));
    return updated;
  }

  getOffers() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USER_OFFERS);
      return data ? JSON.parse(data) : [];
    } catch(e) {
      return [];
    }
  }
}

export const storage = new StorageService();
