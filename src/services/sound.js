// Web Audio API Synthesizer for subtle futuristic micro-interactions
class SoundEffects {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.init();
      this.playBeep(880, 'sine', 0.05);
    }
    return this.enabled;
  }

  playBeep(freq = 440, type = 'sine', duration = 0.05, gainVal = 0.08) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  click() {
    this.playBeep(1200, 'triangle', 0.03, 0.04);
  }

  hover() {
    this.playBeep(520, 'sine', 0.02, 0.02);
  }

  toggleOn() {
    this.playBeep(640, 'sine', 0.04, 0.05);
    setTimeout(() => this.playBeep(960, 'sine', 0.06, 0.05), 40);
  }

  toggleOff() {
    this.playBeep(800, 'sine', 0.04, 0.05);
    setTimeout(() => this.playBeep(480, 'sine', 0.06, 0.05), 40);
  }

  success() {
    if (!this.enabled) return;
    try {
      this.init();
      const freqs = [523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((f, i) => {
        setTimeout(() => this.playBeep(f, 'triangle', 0.12, 0.06), i * 60);
      });
    } catch(e) {}
  }

  heartbeat() {
    this.playBeep(120, 'triangle', 0.08, 0.08);
    setTimeout(() => this.playBeep(160, 'sine', 0.1, 0.07), 120);
  }
}

export const sounds = new SoundEffects();
