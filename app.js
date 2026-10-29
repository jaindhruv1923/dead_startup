// DeadStartup Standalone Application Bundle
// Human-centered editorial theme. Zero emojis. Clean SVG iconography.
// Universal execution under both file:/// and http:// protocols.

(function () {
  'use strict';

  /* ==========================================================================
     1. Inline Minimalist SVG Icon System (No Emojis)
     ========================================================================== */
  const ICONS = {
    pulse: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    check: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    search: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    code: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    figma: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>`,
    globe: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    users: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    package: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    lock: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    unlock: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`,
    fileText: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    chart: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    sparkles: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`,
    arrowRight: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    sliders: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`,
    message: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    user: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    shield: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    volume: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,
    volumeMute: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`,
    cross: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    circle: `<svg class="svg-icon" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"></circle></svg>`,
    sun: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    moon: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    bookOpen: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`
  };

  /* ==========================================================================
     2. Web Audio Micro-feedback (Subtle, warm acoustic clicks)
     ========================================================================== */
  class SoundEffects {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }

    init() {
      if (!this.ctx && typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      if (this.enabled) {
        this.init();
        this.playTone(600, 0.04);
      }
      return this.enabled;
    }

    playTone(freq = 440, duration = 0.04, gainVal = 0.04) {
      if (!this.enabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    }

    click() { this.playTone(800, 0.02, 0.03); }
    hover() { this.playTone(400, 0.015, 0.015); }
    toggleOn() { this.playTone(520, 0.03, 0.03); setTimeout(() => this.playTone(720, 0.04, 0.03), 30); }
    success() {
      if (!this.enabled) return;
      const notes = [440, 554.37, 659.25];
      notes.forEach((f, i) => setTimeout(() => this.playTone(f, 0.1, 0.03), i * 50));
    }
  }

  const sounds = new SoundEffects();
  window.sounds = sounds;

  /* ==========================================================================
     3. Seed Data (Respectful, Professional Startup Profiles)
     ========================================================================== */
  const SEED_STARTUPS = [
    {
      id: "threadvibe",
      name: "ThreadVibe",
      tagline: "Headless direct-to-consumer sustainable apparel storefront with 3D product visualizer & Shopify backend.",
      category: "E-Commerce",
      personaMatch: "Riya (Apparel & Brand Builder)",
      badge: "Founder-Ready Asset",
      founded: "2024",
      died: "February 2026",
      burnedAmount: 85000,
      originalDevCost: 45000,
      bundlePrice: 1250,
      stealthMode: false,
      verified: true,
      codeHealthScore: 96,
      founderName: "Maya Chen & Arjun Patel",
      managerialTitle: "Lead Fullstack Engineer & Creative Director",
      founderQuote: "We spent 8 months building a custom 3D apparel viewer and Shopify integration, but paid ad acquisition costs made unit economics unsustainable before breakeven.",
      techStack: ["Next.js 14", "Tailwind CSS", "Shopify Storefront API", "Three.js", "Stripe Checkout", "Supabase"],
      assets: {
        codeRepo: {
          title: "Fullstack E-Commerce Storefront + 3D Customizer",
          stack: "Next.js 14 App Router, Three.js, Shopify GraphQL, Tailwind",
          loc: "24,800 lines of TypeScript",
          testCoverage: "92%",
          price: 750,
          desc: "Production-ready custom apparel shop with interactive 3D model viewer, cart, multi-currency checkout and SEO optimization.",
          dockerized: true
        },
        figma: {
          title: "Complete Fashion Brand Kit & UI System",
          screens: "48 mobile & desktop screens",
          components: "160+ UI tokens & icons",
          price: 350,
          desc: "High-end minimalist aesthetic, lookbook templates, packaging mockups, and mobile navigation."
        },
        domain: {
          name: "threadvibe.store & threadvibe.co",
          da: 28,
          expiry: "Nov 2027",
          handles: "@threadvibe (Instagram, TikTok)",
          price: 300
        },
        waitlist: {
          count: "2,400 opt-in fashion subscribers",
          optIn: "Double opt-in launch campaign",
          price: 250,
          desc: "Clean verified subscriber list with 44% historical engagement rate."
        },
        handover: {
          ctoHours: "3 hours live video handover with original Lead Dev",
          runbookIncluded: true,
          price: 200,
          desc: "Includes step-by-step setup walkthrough, Shopify webhook configuration guide, and 3D asset pipeline."
        },
        inventory: {
          details: "450 premium custom compostable mailer boxes & branded hangtags",
          quantity: "450 units",
          price: 180,
          location: "Warehouse Bangalore, India"
        }
      },
      managerialHandover: {
        architecture: "Client (Next.js 14 SSR) -> Shopify Storefront API -> Stripe Elements -> Supabase for customized saved 3D looks -> Cloudflare CDN.",
        techRequirements: "Node.js 20+, Shopify Partner Account, Supabase Free Tier, Three.js WebGL.",
        runbookCommands: "git clone repo\ncd threadvibe\nnpm install\ncp .env.example .env.local\nnpm run dev # Boots in 4 seconds",
        envVariables: ["NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN", "SHOPIFY_STOREFRONT_ACCESS_TOKEN", "NEXT_PUBLIC_STRIPE_KEY", "SUPABASE_SERVICE_ROLE_KEY"],
        ctoSupport: "Arjun (Lead Dev) is available for 3 hours of screenshare to help the buyer connect their own Shopify catalogue and deploy to Vercel."
      },
      postMortem: {
        tldr: "Built a refined 3D shopping experience, but customer acquisition costs (CAC) on paid social exceeded product margins.",
        whatWorked: "The 3D preview engine drove a 6.2% conversion rate on organic visitors. Load times remained under 1.1s globally.",
        theFatalMistake: "Allocated significant capital to custom packaging before validating paid advertising payback periods.",
        lessonsForBuyer: "Leverage organic community marketing and micro-influencer gifting. The entire technical foundation is turnkey."
      },
      aiPivots: [
        {
          title: "Print-on-Demand Merch Store",
          tag: "High Margin",
          desc: "Connect this 3D visualizer directly to Printify/Gelato API so buyers can design and purchase custom streetwear on demand."
        },
        {
          title: "B2B White-Label 3D Shopify Plugin",
          tag: "SaaS Model",
          desc: "Repackage the Three.js 3D customizer into an independent Shopify App and charge indie brands $49/month."
        },
        {
          title: "University & Campus Apparel Brand",
          tag: "Low Acquisition Cost",
          desc: "Use the existing waitlist and brand design to launch university campus merchandise with minimal marketing overhead."
        }
      ]
    },
    {
      id: "hypercart-ai",
      name: "HyperCart AI",
      tagline: "Autonomous 15-minute quick-commerce micro-warehouse & routing dispatch engine.",
      category: "AI & Logistics",
      personaMatch: "Founders & Engineering Teams",
      badge: "Venture Backed",
      founded: "2023",
      died: "January 2026",
      burnedAmount: 680000,
      originalDevCost: 220000,
      bundlePrice: 4200,
      stealthMode: false,
      verified: true,
      codeHealthScore: 98,
      founderName: "Devon Vance & Priya Sharma",
      managerialTitle: "Former VP Engineering & Head of Operations",
      founderQuote: "We raised a seed round and engineered 64,000 lines of robust routing algorithms and inventory forecasting, but dark-store warehouse leases proved too capital-intensive.",
      techStack: ["FastAPI (Python)", "Next.js 14", "React Native", "PostgreSQL (PostGIS)", "Redis", "Docker", "Kubernetes"],
      assets: {
        codeRepo: {
          title: "Micro-fulfillment Engine + Driver Mobile App + Admin Dashboard",
          stack: "Python FastAPI backend, React Native iOS/Android app, Next.js admin portal",
          loc: "64,200 lines of Python & TypeScript",
          testCoverage: "94%",
          price: 2800,
          desc: "Multi-tenant routing algorithm, real-time GPS tracking with WebSockets, automated replenishment triggers, and driver dispatch.",
          dockerized: true
        },
        figma: {
          title: "84 High-Fidelity Screens & Driver UI",
          screens: "84 screens (Consumer app, driver app, warehouse picker view, admin)",
          components: "320+ atomic components",
          price: 850,
          desc: "User-tested UI tailored for rapid order picking under 90 seconds."
        },
        domain: {
          name: "hypercart.ai",
          da: 35,
          expiry: "Aug 2027",
          handles: "@hypercart_ai",
          price: 650
        },
        waitlist: {
          count: "5,800 registered shoppers",
          optIn: "SMS verified accounts across 2 cities",
          price: 450,
          desc: "High intent urban consumer list with phone numbers and postal codes."
        },
        handover: {
          ctoHours: "8 hours architectural onboarding with Former VP Eng",
          runbookIncluded: true,
          price: 500,
          desc: "Includes database migration dump, Docker Compose setup, and PostGIS geo-index walkthrough."
        }
      },
      managerialHandover: {
        architecture: "FastAPI handles 1,200 req/sec with async SQLAlchemy. Redis cluster handles WebSocket geolocation broadcast. React Native app uses Mapbox SDK.",
        techRequirements: "Python 3.11, PostgreSQL 15 with PostGIS, Redis 7, Docker Compose.",
        runbookCommands: "docker-compose up -d postgres redis\npoetry install\npoetry run alembic upgrade head\npoetry run uvicorn app.main:app --reload",
        envVariables: ["DATABASE_URL", "REDIS_URL", "MAPBOX_API_TOKEN", "TWILIO_AUTH_TOKEN", "STRIPE_SECRET_KEY"],
        ctoSupport: "Devon Vance (VP Eng) provides 8 hours of live pairing, architecture documentation, and assistance migrating repo ownership."
      },
      postMortem: {
        tldr: "Physical micro-warehouse overhead and courier minimums exceeded unit contribution margins before geographic route density was attained.",
        whatWorked: "The routing algorithm reduced average delivery mileage by 38% compared to standard routing APIs.",
        theFatalMistake: "Operated physical real-estate hubs directly rather than licensing the technology to existing local merchants.",
        lessonsForBuyer: "Do not manage physical inventory. License this platform to existing regional grocers seeking their own direct delivery fleet."
      },
      aiPivots: [
        {
          title: "B2B SaaS for Regional Grocery Stores",
          tag: "Enterprise SaaS",
          desc: "Provide this dispatch and inventory system to regional supermarket chains seeking to compete with national delivery apps."
        },
        {
          title: "Medical & Pharmacy Courier Dispatch",
          tag: "High Value",
          desc: "Repurpose the real-time tracking and dispatch engine for prescription drug delivery with HIPAA-compliant audit trails."
        },
        {
          title: "White-Label Courier Fleet Software",
          tag: "Turnkey Solution",
          desc: "License the React Native driver app and admin dashboard to local courier companies for a recurring monthly fee."
        }
      ]
    },
    {
      id: "sounddrop",
      name: "SoundDrop",
      tagline: "Music licensing marketplace with automated stem split payments and browser audio waveform editor.",
      category: "Creator Economy & Audio",
      personaMatch: "Builders & Audio Developers",
      badge: "Verified IP",
      founded: "2024",
      died: "January 2026",
      burnedAmount: 180000,
      originalDevCost: 90000,
      bundlePrice: 1600,
      stealthMode: false,
      verified: true,
      codeHealthScore: 95,
      founderName: "Lucas Romero",
      managerialTitle: "Founder & Audio Software Engineer",
      founderQuote: "We engineered an in-browser WebAudio stem mixer and Stripe Connect split payout system, but complex music copyright licensing slowed creator adoption.",
      techStack: ["React 18", "WebAudio API", "Node.js", "Express", "Stripe Connect", "AWS S3 / CloudFront"],
      assets: {
        codeRepo: {
          title: "WebAudio Multi-Track Stem Player + Creator Escrow Engine",
          stack: "React, Web Audio API, Node.js, Stripe Connect Custom Accounts",
          loc: "31,400 lines of code",
          testCoverage: "88%",
          price: 950,
          desc: "Instant waveform generation, stem separation preview, auto-watermarking on preview playback, and royalty splitting."
        },
        figma: {
          title: "Minimalist Studio UI Kit",
          screens: "36 screens",
          components: "120+ audio sliders, mixers, waveforms",
          price: 400,
          desc: "Modern audio engineering aesthetics, licensing contract generator modals."
        },
        domain: {
          name: "sounddrop.io",
          da: 24,
          expiry: "Dec 2026",
          handles: "@sounddrop_io",
          price: 350
        },
        waitlist: {
          count: "3,100 music producers & video editors",
          optIn: "Organic community subscribers",
          price: 250,
          desc: "Content creators seeking royalty-free stems and background beats."
        },
        handover: {
          ctoHours: "4 hours audio architecture walkthrough",
          runbookIncluded: true,
          price: 200,
          desc: "Covers WebAudio buffer handling, AWS S3 presigned URLs, and Stripe Connect webhook verification."
        }
      },
      managerialHandover: {
        architecture: "React frontend executes client-side WebAudio gain/pan/equalizer nodes. Node.js backend uses fluent-ffmpeg on AWS Lambda for auto-watermarking demo tracks.",
        techRequirements: "Node.js 18+, FFmpeg, AWS S3 bucket, Stripe Connect Account.",
        runbookCommands: "git clone repo\ncd sounddrop/backend && npm i && npm run dev\ncd ../frontend && npm i && npm run dev",
        envVariables: ["STRIPE_CONNECT_CLIENT_ID", "AWS_S3_AUDIO_BUCKET", "JWT_SECRET"],
        ctoSupport: "Lucas provides complete guidance on the WebAudio stem player architecture and transfer of AWS S3 assets."
      },
      postMortem: {
        tldr: "Producers actively contributed music, but video creators were hesitant regarding YouTube copyright claims despite automated licensing certificates.",
        whatWorked: "The zero-latency browser stem mixer was praised by thousands of independent music producers.",
        theFatalMistake: "Did not integrate direct automated Content ID clearance with major video platforms prior to launching paid plans.",
        lessonsForBuyer: "Pivot into game sound effects (SFX) or AI voice training data where copyright ownership is direct and straightforward."
      },
      aiPivots: [
        {
          title: "Voice Dataset & Sound Effects Marketplace",
          tag: "AI & Media",
          desc: "Repurpose the WebAudio preview engine to buy and sell verified speech datasets and royalty-free game audio packs."
        },
        {
          title: "Video Editor Modular Audio Library",
          tag: "Low Risk",
          desc: "Target freelance video editors with modular ambient stems with guaranteed Content-ID clearance."
        },
        {
          title: "Interactive Beat Remix Platform",
          tag: "Community",
          desc: "Operate as a collaborative remix community where producers share and trade project stems."
        }
      ]
    },
    {
      id: "zenith-health",
      name: "Zenith Health",
      tagline: "HIPAA-ready telehealth consultation platform with asynchronous triage & e-prescriptions.",
      category: "HealthTech",
      personaMatch: "Healthcare & Enterprise Builders",
      badge: "Enterprise Codebase",
      founded: "2023",
      died: "November 2025",
      burnedAmount: 520000,
      originalDevCost: 195000,
      bundlePrice: 3800,
      stealthMode: false,
      verified: true,
      codeHealthScore: 97,
      founderName: "Dr. Alistair Ross & Sarah Lin",
      managerialTitle: "Medical Director & Lead Architect",
      founderQuote: "We engineered an airtight HIPAA-compliant consultation workflow with encrypted patient records, but multi-state physician credentialing delays outpaced our runway.",
      techStack: ["Next.js", "Python Django", "WebRTC", "PostgreSQL (Encrypted at rest)", "Docker", "AWS HealthLake"],
      assets: {
        codeRepo: {
          title: "HIPAA-Ready Telehealth Portal + Doctor Dashboard + WebRTC Video",
          stack: "Django REST Framework, Next.js, Daily.co WebRTC, AES-256 Encrypted DB",
          loc: "48,000 lines of Python & TypeScript",
          testCoverage: "96%",
          price: 2400,
          desc: "End-to-end patient scheduling, asynchronous intake forms, encrypted medical file vaults, and doctor note generation.",
          dockerized: true
        },
        figma: {
          title: "Clinical Patient & Doctor Design System",
          screens: "62 screens",
          components: "240+ components",
          price: 700,
          desc: "Accessible, WCAG AAA compliant design system for clinical workflows."
        },
        domain: {
          name: "zenithhealth.app",
          da: 29,
          expiry: "Oct 2027",
          price: 500
        },
        waitlist: {
          count: "1,800 registered patients & 42 verified physicians",
          optIn: "HIPAA compliant consent opt-in",
          price: 400
        },
        handover: {
          ctoHours: "6 hours compliance & security architecture walkthrough",
          runbookIncluded: true,
          price: 450,
          desc: "Includes third-party HIPAA security audit checklist and encryption key management protocol."
        }
      },
      managerialHandover: {
        architecture: "Django REST backend with field-level encryption for PHI data. Next.js patient portal communicates via TLS 1.3. Video visits routed via Daily.co WebRTC.",
        techRequirements: "Python 3.10+, PostgreSQL, Daily.co API key, Redis for Celery queues.",
        runbookCommands: "docker-compose -f docker-compose.prod.yml up -d\npython manage.py migrate\npython manage.py generate_dev_keys",
        envVariables: ["FIELD_ENCRYPTION_KEY", "DAILY_API_KEY", "POSTGRES_DB_URL"],
        ctoSupport: "Sarah Lin (Lead Architect) will conduct two 3-hour sessions on HIPAA compliance architecture and Docker deployment."
      },
      postMortem: {
        tldr: "State medical licensing constraints hindered rapid geographic expansion within our early-stage capital reserves.",
        whatWorked: "The clinical intake builder and asynchronous triage reduced physician charting time by over 50%.",
        theFatalMistake: "Attempted nationwide general medicine rather than launching within a single state or focused clinical specialty.",
        lessonsForBuyer: "Repurpose the software for veterinary care, executive wellness, or single-facility specialty clinics."
      },
      aiPivots: [
        {
          title: "Tele-Veterinary Portal for Pet Care",
          tag: "Low Regulatory Friction",
          desc: "Deploy the consultation and prescription workflows for pet owners to consult licensed veterinarians remotely."
        },
        {
          title: "Executive Health Coaching Platform",
          tag: "B2B Wellness",
          desc: "Offer asynchronous intake and specialist matching to companies as an employee wellness benefit."
        },
        {
          title: "Specialty Clinic Software",
          tag: "Turnkey Medical",
          desc: "License directly to dermatology or physiotherapy practices needing modern patient intake portals."
        }
      ]
    },
    {
      id: "nomaddesk",
      name: "NomadDesk",
      tagline: "Workspace on demand: micro-space booking platform with IoT smart lock access codes.",
      category: "PropTech & Micro-SaaS",
      personaMatch: "Indie Developers & Operators",
      badge: "Turnkey Platform",
      founded: "2024",
      died: "December 2025",
      burnedAmount: 75000,
      originalDevCost: 38000,
      bundlePrice: 1100,
      stealthMode: false,
      verified: true,
      codeHealthScore: 94,
      founderName: "Rohan Varma",
      managerialTitle: "Founder & Fullstack Developer",
      founderQuote: "We integrated 18 independent spaces with automatic smart door locks, but negotiating commercial revenue-share agreements with busy cafe managers proved too slow.",
      techStack: ["Vue 3", "Vite", "Supabase", "Tailwind CSS", "Tuya IoT Cloud API", "Stripe"],
      assets: {
        codeRepo: {
          title: "Desk Booking Engine + IoT Smart Lock Webhook Integration",
          stack: "Vue 3, Pinia, Supabase Auth & Realtime, Stripe Checkout",
          loc: "18,600 lines of code",
          testCoverage: "89%",
          price: 650,
          desc: "Dynamic time-slot reservations, automated one-time door PIN code generator, and host payout portal."
        },
        figma: {
          title: "Mobile First Coworking Booking UI Kit",
          screens: "28 screens",
          components: "90+ components",
          price: 250,
          desc: "Clean, intuitive UI for reserving quiet local workspaces."
        },
        domain: {
          name: "nomaddesk.co",
          da: 21,
          expiry: "Jan 2027",
          price: 200
        },
        waitlist: {
          count: "1,200 remote workers",
          optIn: "Verified newsletter subscribers",
          price: 150
        },
        handover: {
          ctoHours: "3 hours IoT & Supabase integration review",
          runbookIncluded: true,
          price: 150,
          desc: "Includes Tuya smart lock API integration guide and database schema export."
        }
      },
      managerialHandover: {
        architecture: "Vue 3 SPA hosted on Cloudflare Pages. Supabase handles database, authentication, and Postgres Row Level Security. Tuya Cloud API triggers PIN creation on Stripe payment success.",
        techRequirements: "Node.js 18+, Supabase account, Stripe test keys.",
        runbookCommands: "git clone repo\ncd nomaddesk\nnpm install\nnpm run dev",
        envVariables: ["VITE_SUPABASE_URL", "VITE_SUPABASE_ANON_KEY", "TUYA_ACCESS_ID", "TUYA_ACCESS_SECRET"],
        ctoSupport: "Rohan will walk through the IoT webhook listener and Supabase database functions."
      },
      postMortem: {
        tldr: "Remote workers frequently booked desks, but cafe operators often overlooked reserved seating during peak hours.",
        whatWorked: "The automated door PIN generation operated with 99.8% reliability without requiring on-site staff.",
        theFatalMistake: "Partnered with high-traffic cafes rather than quiet residential amenities or private commercial meeting spaces.",
        lessonsForBuyer: "Focus on residential building amenities, private boardrooms, or self-serve podcast studios."
      },
      aiPivots: [
        {
          title: "Residential Amenity Booking System",
          tag: "Property Tech",
          desc: "Provide this reservation and access control system to residential apartment managers to monetize shared facilities."
        },
        {
          title: "Self-Serve Podcast Studio Rental",
          tag: "High Hourly Yield",
          desc: "Apply the automated access system to hourly recording and photography studio spaces."
        },
        {
          title: "Quiet Privacy Booth Network",
          tag: "Office Niche",
          desc: "Deploy acoustic booths in transit centers with automated 30-minute booking access."
        }
      ]
    },
    {
      id: "devpulse",
      name: "DevPulse Analytics",
      tagline: "Engineering team workflow and Git delivery telemetry dashboard.",
      category: "Developer Tools",
      personaMatch: "Engineering Leaders & Agencies",
      badge: "99% Test Coverage",
      founded: "2023",
      died: "February 2026",
      burnedAmount: 240000,
      originalDevCost: 110000,
      bundlePrice: 1950,
      stealthMode: false,
      verified: true,
      codeHealthScore: 99,
      founderName: "Vikram Sengupta & Alex Wright",
      managerialTitle: "CTO & Staff Data Engineer",
      founderQuote: "We engineered high-throughput GitHub webhook ingesters with 99% test coverage, but lengthy Enterprise compliance cycles depleted our seed capital.",
      techStack: ["Next.js 14", "Go (Golang)", "ClickHouse", "PostgreSQL", "GitHub REST & GraphQL API", "Docker"],
      assets: {
        codeRepo: {
          title: "GitHub Webhook Event Ingestion Pipeline + DORA Metrics Analytics",
          stack: "Go backend, ClickHouse analytical DB, Next.js dashboard, Tailwind",
          loc: "42,000 lines of Go and React",
          testCoverage: "99%",
          price: 1300,
          desc: "High throughput GitHub and GitLab webhook ingester, PR cycle time analytics, deployment frequency tracking, and sprint health reports."
        },
        figma: {
          title: "DevOps Data Visualization UI Kit",
          screens: "40 screens",
          components: "180+ chart widgets and graphs",
          price: 450,
          desc: "High density developer analytics dashboards and burn-down charts."
        },
        domain: {
          name: "devpulse.dev",
          da: 27,
          expiry: "Mar 2027",
          price: 350
        },
        waitlist: {
          count: "840 engineering managers",
          optIn: "Technical blog readers",
          price: 250
        },
        handover: {
          ctoHours: "5 hours Golang pipeline and ClickHouse queries walkthrough",
          runbookIncluded: true,
          price: 300,
          desc: "Includes GitHub App manifest configuration and ClickHouse database schema setup."
        }
      },
      managerialHandover: {
        architecture: "Go ingester handles 10,000 GitHub webhook events/sec. Stores raw events in PostgreSQL and rolls up aggregate time-series metrics into ClickHouse.",
        techRequirements: "Go 1.22+, PostgreSQL 15, ClickHouse, Docker Compose.",
        runbookCommands: "docker-compose up -d\ngo run cmd/server/main.go\ncd web && npm run dev",
        envVariables: ["GITHUB_APP_PRIVATE_KEY", "CLICKHOUSE_DSN", "POSTGRES_DSN"],
        ctoSupport: "Vikram will assist with deploying the Go ingester and configuring GitHub App webhooks."
      },
      postMortem: {
        tldr: "Engineering managers enthusiastically adopted the beta, but enterprise procurement cycles required expensive compliance certifications beyond our runway.",
        whatWorked: "The PR review bottleneck detection accurately pinpointed delayed code reviews.",
        theFatalMistake: "Targeted large corporate enterprises instead of agile 10-to-30 person development teams.",
        lessonsForBuyer: "Offer this as an open-core self-hosted tool with paid cloud convenience for growing startups."
      },
      aiPivots: [
        {
          title: "AI Code Review Bottleneck Analyzer",
          tag: "Developer Tools",
          desc: "Integrate an LLM to read delayed pull requests and summarize blockers for team leads."
        },
        {
          title: "Freelance Agency Quality Audit Suite",
          tag: "Agency SaaS",
          desc: "Enable founders hiring remote contractors to audit whether outsourced code commits meet velocity goals."
        },
        {
          title: "Open Source Repository Health Dashboard",
          tag: "Developer Ecosystem",
          desc: "Provide public analytics for open source projects seeking sponsorships and community visibility."
        }
      ]
    }
  ];

  const COMMUNITY_ROASTS = [
    {
      id: "roast-1",
      author: "Kunal S.",
      role: "Former Founder",
      project: "StudyBunk — Peer matching for university coursework",
      burn: "$35,000",
      status: "Transitioning",
      pitch: "Built a React Native application connecting college students by courses and study preferences. Acquired 12,000 signups, but monetization struggled as undergraduate users were price-sensitive.",
      aiPivot: "Pivot into an academic problem-solving platform with micro-credits, or license the React Native chat architecture to campus student unions.",
      upvotes: 42,
      comments: [
        { user: "Sarah T.", text: "Colleges have alumni budgets. Consider packaging this as an alumni-student mentoring network instead." },
        { user: "DevRahul", text: "The WebRTC video room module is valuable. I would acquire that component directly for a tutoring venture." }
      ]
    },
    {
      id: "roast-2",
      author: "Elena Rostova",
      role: "Software Builder",
      project: "PromptVault — Workflow extension for LLM prompts",
      burn: "$8,000 & 4 months",
      status: "Asset Liquidation",
      pitch: "Engineered a browser extension with team synchronization and tags. Reached 4,500 active users, but major LLM providers released native search features that duplicated our utility.",
      aiPivot: "Repurpose the encrypted local storage and team sync engine into an internal enterprise compliance filter that prevents employees from pasting sensitive credentials.",
      upvotes: 38,
      comments: [
        { user: "Alex B.", text: "Enterprise security and data loss prevention is a significant opportunity. Companies will pay for client-side redaction." }
      ]
    }
  ];

  const PRESENTATION_INFO = {
    title: "DeadStartup",
    subtitle: "Turning Startup Failures into Founders' Second Chances",
    slogan: "Every concluded startup has value left — we help you recover it.",
    group: "Group-9 CSE-7",
    teamMembers: [
      "Kritavya Patel",
      "Arpit Raj Verma",
      "Aman Yadav",
      "Subhashit Pathak",
      "Raj Kumar"
    ],
    aiPresentationAuthors: [
      "Khushi",
      "Irfa",
      "Aman",
      "Raj",
      "Dhruv"
    ],
    marketData: {
      tam: {
        usd: "$5 Trillion",
        inr: "₹415 Lakh Crore",
        label: "Total Addressable Market",
        desc: "Global startup ecosystem valuation across technology and venture-backed ventures."
      },
      sam: {
        usd: "$100 Billion",
        inr: "₹8.3 Lakh Crore",
        label: "Serviceable Available Market",
        desc: "~90% of 305M startups conclude annually ≈ 275M ventures leaving behind validated IP, codebases, domains, and assets."
      },
      som: {
        usd: "$600 Million",
        inr: "₹5,000 Crore+",
        label: "Serviceable Obtainable Market (India First)",
        desc: "Targeting 50,000 concluded startups annually across major technology hubs with an average ₹1 lakh liquidation recovery."
      }
    }
  };

  /* ==========================================================================
     4. Local Storage
     ========================================================================== */
  const STORAGE_KEYS = {
    STARTUPS: 'deadstartup_startups_v2',
    AI_MODE: 'deadstartup_ai_mode',
    ACTIVE_ESCROW: 'deadstartup_active_escrow',
    USER_OFFERS: 'deadstartup_user_offers'
  };

  class StorageService {
    constructor() {
      this.init();
    }

    init() {
      try {
        const existing = localStorage.getItem(STORAGE_KEYS.STARTUPS);
        if (!existing) {
          localStorage.setItem(STORAGE_KEYS.STARTUPS, JSON.stringify(SEED_STARTUPS));
        }
      } catch (e) {}
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
      return this.getStartups().find(s => s.id === id) || null;
    }

    saveStartup(newStartup) {
      const list = this.getStartups();
      const updated = [newStartup, ...list];
      try {
        localStorage.setItem(STORAGE_KEYS.STARTUPS, JSON.stringify(updated));
      } catch (e) {}
      return newStartup;
    }

    getAiMode() {
      try {
        return localStorage.getItem(STORAGE_KEYS.AI_MODE) === 'true';
      } catch (e) {
        return false;
      }
    }

    setAiMode(val) {
      try {
        localStorage.setItem(STORAGE_KEYS.AI_MODE, val ? 'true' : 'false');
      } catch (e) {}
      window.dispatchEvent(new CustomEvent('deadstartup:ai_mode_changed', { detail: val }));
    }

    getEscrow() {
      try {
        const item = localStorage.getItem(STORAGE_KEYS.ACTIVE_ESCROW);
        return item ? JSON.parse(item) : null;
      } catch (e) {
        return null;
      }
    }

    setEscrow(escrowData) {
      try {
        localStorage.setItem(STORAGE_KEYS.ACTIVE_ESCROW, JSON.stringify(escrowData));
      } catch (e) {}
      window.dispatchEvent(new CustomEvent('deadstartup:escrow_updated', { detail: escrowData }));
    }

    saveOffer(offer) {
      try {
        const data = localStorage.getItem(STORAGE_KEYS.USER_OFFERS);
        const existing = data ? JSON.parse(data) : [];
        const updated = [offer, ...existing];
        localStorage.setItem(STORAGE_KEYS.USER_OFFERS, JSON.stringify(updated));
      } catch (e) {}
    }
  }

  const storage = new StorageService();
  window.storage = storage;

  /* ==========================================================================
     5. Notification Toast
     ========================================================================== */
  window.showToast = function (message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span style="display:flex;align-items:center;">${type === 'success' ? ICONS.check : ICONS.pulse}</span>
      <span style="flex:1;">${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3800);
  };

  /* ==========================================================================
     6. Navigation & Layout
     ========================================================================== */
  function renderNavbar(currentRoute) {
    const isAi = storage.getAiMode();
    const isSound = sounds.enabled;

    return `
      <div class="ticker-bar">
        <div class="ticker-content">
          <div class="ticker-item">
            <strong>418</strong> Ventures Handed Over
          </div>
          <div class="ticker-item">
            <strong class="ticker-highlight">$2,840,000+</strong> Recovered for Founding Teams
          </div>
          <div class="ticker-item">
            <strong>1,240</strong> Emerging Builders Launched Faster
          </div>
          <div class="ticker-item">
            <strong>100% Escrow & IP Cleared</strong> Handover Assurance
          </div>
          <div class="ticker-item">
            <em>"Every concluded startup has value left — we help you recover it."</em>
          </div>
          <div class="ticker-item">
            <strong>418</strong> Ventures Handed Over
          </div>
          <div class="ticker-item">
            <strong class="ticker-highlight">$2,840,000+</strong> Recovered for Founding Teams
          </div>
        </div>
      </div>

      <div class="container">
        <nav class="navbar">
          <a href="#home" class="brand-logo" id="nav-brand-logo">
            <div class="brand-icon-wrapper">
              ${ICONS.pulse}
              <div class="brand-ecg-pulse"></div>
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 6px;">
                <span>DeadStartup</span>
                <span class="badge badge-emerald" style="font-size: 0.62rem; padding: 2px 6px;">Active</span>
              </div>
              <div style="font-size: 0.72rem; color: var(--text-dim); font-weight: normal; margin-top: -2px;">
                Startup Asset Liquidation & Handover
              </div>
            </div>
          </a>

          <ul class="nav-links">
            <li>
              <a href="#marketplace" class="nav-link ${currentRoute === 'marketplace' ? 'active' : ''}" id="nav-marketplace">
                ${ICONS.package} <span>Asset Archive</span>
              </a>
            </li>
            <li>
              <a href="#compare" class="nav-link ${currentRoute === 'compare' ? 'active' : ''}" id="nav-compare">
                ${ICONS.sparkles} <span>AI Comparison</span>
              </a>
            </li>
            <li>
              <a href="#valuation" class="nav-link ${currentRoute === 'valuation' ? 'active' : ''}" id="nav-valuation">
                ${ICONS.sliders} <span>Valuator</span>
              </a>
            </li>
            <li>
              <a href="#escrow" class="nav-link ${currentRoute === 'escrow' ? 'active' : ''}" id="nav-escrow">
                ${ICONS.shield} <span>Escrow Center</span>
              </a>
            </li>
            <li>
              <a href="#post-mortems" class="nav-link ${currentRoute === 'post-mortems' ? 'active' : ''}" id="nav-postmortems">
                ${ICONS.fileText} <span>Founder Debriefs</span>
              </a>
            </li>
            <li>
              <a href="#roast" class="nav-link ${currentRoute === 'roast' ? 'active' : ''}" id="nav-roast">
                ${ICONS.message} <span>Advisory Diagnostics</span>
              </a>
            </li>
            <li>
              <a href="#deck" class="nav-link ${currentRoute === 'deck' ? 'active' : ''}" id="nav-deck">
                ${ICONS.chart} <span>Market Deck</span>
              </a>
            </li>
          </ul>

          <div class="nav-actions">
            <!-- Theme Switcher (Warm Linen Editorial / Midnight Walnut) -->
            <button class="theme-toggle-btn" id="btn-toggle-theme" title="Switch Theme: Warm Linen Editorial / Midnight Walnut">
              <span id="theme-icon">${(typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark') ? ICONS.sun : ICONS.moon}</span>
            </button>

            <!-- AI Mode Switcher (Prototype 1 vs 2) -->
            <button class="ai-mode-pill ${isAi ? 'active' : ''}" id="btn-toggle-ai" title="Toggle Guided AI Natural-Language Matching">
              <span class="ai-indicator-dot"></span>
              <span>AI Matching: <strong>${isAi ? 'Active' : 'Off'}</strong></span>
            </button>

            <!-- Audio Synthesizer -->
            <button class="audio-toggle-btn ${isSound ? 'active' : ''}" id="btn-toggle-sound" title="Toggle Audio Feedback">
              <span id="sound-icon">${isSound ? ICONS.volume : ICONS.volumeMute}</span>
            </button>

            <!-- Post Startup Handover -->
            <a href="#studio" class="btn btn-primary btn-sm" id="nav-btn-list-startup">
              <span>List Asset Handover</span>
            </a>
          </div>
        </nav>
      </div>
    `;
  }

  function attachNavbarEvents() {
    const themeBtn = document.getElementById('btn-toggle-theme');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') || 'editorial';
        const next = cur === 'dark' ? 'editorial' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try {
          localStorage.setItem('deadstartup_theme', next);
        } catch (e) {}
        const iconEl = document.getElementById('theme-icon');
        if (iconEl) iconEl.innerHTML = next === 'dark' ? ICONS.sun : ICONS.moon;
        sounds.playTone(next === 'dark' ? 380 : 680, 0.05);
        window.showToast(next === 'dark' ? 'Midnight Walnut theme active' : 'Warm Linen Editorial theme active', 'info');
      });
    }

    const soundBtn = document.getElementById('btn-toggle-sound');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const active = sounds.toggle();
        soundBtn.classList.toggle('active', active);
        const iconEl = document.getElementById('sound-icon');
        if (iconEl) iconEl.innerHTML = active ? ICONS.volume : ICONS.volumeMute;
        window.showToast(active ? 'Audio feedback enabled' : 'Audio muted', 'info');
      });
    }

    const aiBtn = document.getElementById('btn-toggle-ai');
    if (aiBtn) {
      aiBtn.addEventListener('click', () => {
        const current = storage.getAiMode();
        const updated = !current;
        storage.setAiMode(updated);
        aiBtn.classList.toggle('active', updated);
        const strEl = aiBtn.querySelector('strong');
        if (strEl) strEl.textContent = updated ? 'Active' : 'Off';
        if (updated) {
          sounds.playTone(720, 0.05);
          window.showToast('AI Guided Matching active (Prototype 2)', 'info');
        } else {
          sounds.playTone(480, 0.04);
          window.showToast('Standard Filter Search active (Prototype 1)', 'info');
        }
      });
    }
  }

  function renderFooter() {
    return `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="brand-logo" style="margin-bottom: 14px;">
              <div class="brand-icon-wrapper" style="width: 32px; height: 32px;">
                ${ICONS.pulse}
              </div>
              <span>DeadStartup</span>
            </div>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 16px; max-width: 360px;">
              Giving reusable startup technology a second life. We provide a structured, dignified marketplace where concluded ventures can hand over battle-tested codebases, designs, and domains to new entrepreneurs.
            </p>
            <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--copper-primary);">
              "Every concluded startup has value left — we help you recover it."
            </div>
          </div>

          <div class="footer-col">
            <h4>ASSET ARCHIVE</h4>
            <ul>
              <li><a href="#marketplace">All Available Assets</a></li>
              <li><a href="#marketplace?category=E-Commerce">E-Commerce & Storefronts</a></li>
              <li><a href="#marketplace?category=AI+%26+Logistics">Logistics & AI Systems</a></li>
              <li><a href="#marketplace?category=Creator+Economy+%26+Audio">Creator & Audio Tools</a></li>
              <li><a href="#marketplace?category=HealthTech">HealthTech & Telemedicine</a></li>
              <li><a href="#marketplace?category=Developer+Tools">Developer Telemetry</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>FOUNDERS & TEAMS</h4>
            <ul>
              <li><a href="#studio">List Your Venture Handover</a></li>
              <li><a href="#studio">Technical Runbook Wizard</a></li>
              <li><a href="#valuation">Asset Liquidation Valuator</a></li>
              <li><a href="#escrow">5-Stage Escrow Protection</a></li>
              <li><a href="#post-mortems">Post-Mortem Library</a></li>
              <li><a href="#roast">Constructive Feedback Board</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>RESEARCH & DATA</h4>
            <ul>
              <li><a href="#deck">Slide Deck & TAM Model</a></li>
              <li><a href="#compare">AI vs Traditional Study</a></li>
              <li><a href="#deck">Buyer Utility Matrix</a></li>
              <li><a href="#deck">10-Year Projections</a></li>
              <li><a href="#deck">Marketplace Benchmark</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            <span>© 2026 DeadStartup. CSE-7 Group 9: </span>
            <span style="color: var(--text-muted);">
              ${PRESENTATION_INFO.teamMembers.join(' • ')}
            </span>
          </div>
          <div style="color: var(--text-dim); font-size: 0.78rem;">
            Comparative Study by ${PRESENTATION_INFO.aiPresentationAuthors.join(', ')} • Designed for Students, Solo Builders & Founding Teams
          </div>
        </div>
      </div>
    `;
  }

  /* ==========================================================================
     7. Home Page
     ========================================================================== */
  function renderHomeView() {
    const startups = storage.getStartups();
    const featured = startups.slice(0, 3);

    return `
      <!-- Hero Section -->
      <section style="padding: 64px 0 44px;">
        <div class="container">
          <div style="max-width: 880px; margin: 0 auto; text-align: center;">
            
            <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 20px; flex-wrap: wrap;">
              <span class="badge badge-copper">
                ${ICONS.pulse} ASSET RECOVERY & HANDOVER
              </span>
              <span class="badge badge-slate">
                90% FAILURE RATE = $100B REUSABLE ASSET RESOURCE
              </span>
            </div>

            <h1 style="font-size: clamp(2.3rem, 5.5vw, 3.8rem); font-weight: 800; line-height: 1.1; margin-bottom: 20px; letter-spacing: -0.025em;">
              Concluded Startups.<br/>
              <span style="color: var(--copper-primary);">Reusable Foundations.</span>
            </h1>

            <p style="font-size: clamp(1rem, 1.8vw, 1.2rem); color: var(--text-muted); line-height: 1.6; max-width: 720px; margin: 0 auto 32px;">
              A structured asset liquidation platform for ventures that have concluded operations. Acquire verified source code, design systems, and registered domains at <strong>90% cost savings</strong> with guaranteed IP assignment and escrow security.
            </p>

            <div style="display: flex; align-items: center; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px;">
              <a href="#marketplace" class="btn btn-primary btn-lg" id="hero-btn-explore">
                ${ICONS.package} <span>Browse Asset Archive</span>
              </a>
              <a href="#studio" class="btn btn-secondary btn-lg" id="hero-btn-list">
                ${ICONS.fileText} <span>List Venture Handover</span>
              </a>
              <a href="#compare" class="btn btn-secondary btn-lg" id="hero-btn-compare">
                ${ICONS.sparkles} <span>AI vs Traditional Study</span>
              </a>
            </div>

            <!-- Two Personas: Riya (Buyer) vs Outgoing Founder (Seller) -->
            <div class="glass-panel" style="padding: 26px; text-align: left; margin-bottom: 48px;">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 20px;">
                <!-- Persona 1: Riya -->
                <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 20px;">
                  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--copper-subtle); color: var(--copper-primary); border: 1px solid var(--copper-border); display: flex; align-items: center; justify-content: center; font-weight: 700;">
                      R
                    </div>
                    <div>
                      <h4 style="font-size: 0.98rem; font-weight: 700; color: var(--text-main);">Riya, 21 — Early-Stage Entrepreneur</h4>
                      <p style="font-size: 0.76rem; color: var(--text-muted);">Student & First-Time Founder • Budget: $1,200</p>
                    </div>
                  </div>
                  <p style="font-size: 0.84rem; color: var(--text-muted); font-style: italic; margin-bottom: 14px; line-height: 1.5;">
                    "I need a clean online store, custom design, and a registered domain. I cannot afford months of custom agency rates to get started."
                  </p>
                  <a href="#marketplace?search=fashion" class="btn btn-outline-copper btn-sm" style="width: 100%;">
                    <span>View Matched Package: ThreadVibe ($1,250)</span> ${ICONS.arrowRight}
                  </a>
                </div>

                <!-- Persona 2: Concluded Founder -->
                <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 20px;">
                  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--sage-subtle); color: var(--sage-primary); border: 1px solid var(--sage-border); display: flex; align-items: center; justify-content: center; font-weight: 700;">
                      F
                    </div>
                    <div>
                      <h4 style="font-size: 0.98rem; font-weight: 700; color: var(--text-main);">Concluded Founder & Engineering Staff</h4>
                      <p style="font-size: 0.76rem; color: var(--text-muted);">CTO, Lead Developer, Operations • Winding Down</p>
                    </div>
                  </div>
                  <p style="font-size: 0.84rem; color: var(--text-muted); font-style: italic; margin-bottom: 14px; line-height: 1.5;">
                    "Our venture exhausted its runway, but our software runs reliably. We want to recoup capital for our team and hand over our architecture."
                  </p>
                  <a href="#studio" class="btn btn-secondary btn-sm" style="width: 100%;">
                    <span>Begin Staff Handover (Confidential Option)</span> ${ICONS.arrowRight}
                  </a>
                </div>
              </div>
            </div>

            <!-- Real-time Asset Valuation Calculator Widget -->
            <div class="glass-panel" style="padding: 28px; text-align: left;">
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 18px;">
                <div>
                  <span class="badge badge-copper" style="margin-bottom: 4px;">ESTIMATION ENGINE</span>
                  <h3 style="font-size: 1.3rem;">Estimate Reusable Asset Recovery Value</h3>
                </div>
                <a href="#valuation" class="btn btn-secondary btn-sm">Full Model ${ICONS.arrowRight}</a>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 18px; align-items: center;">
                <div>
                  <label style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 6px;">Development Months Invested:</label>
                  <input type="range" min="1" max="36" value="10" class="valuator-slider" id="home-val-months">
                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.78rem; margin-top: 4px;">
                    <span style="color: var(--text-dim);">1 month</span>
                    <span style="color: var(--copper-primary); font-weight: 700;" id="home-val-months-val">10 months</span>
                    <span style="color: var(--text-dim);">36 months</span>
                  </div>
                </div>

                <div>
                  <label style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 6px;">Production Code Size:</label>
                  <input type="range" min="5000" max="100000" step="5000" value="30000" class="valuator-slider" id="home-val-loc">
                  <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.78rem; margin-top: 4px;">
                    <span style="color: var(--text-dim);">5k</span>
                    <span style="color: var(--copper-primary); font-weight: 700;" id="home-val-loc-val">30,000 LOC</span>
                    <span style="color: var(--text-dim);">100k</span>
                  </div>
                </div>

                <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 14px; text-align: center;">
                  <div style="font-size: 0.72rem; color: var(--text-dim); font-family: var(--font-mono); text-transform: uppercase;">Estimated Recovery Range</div>
                  <div style="font-size: 1.6rem; font-weight: 800; color: var(--copper-primary); font-family: var(--font-mono); margin: 2px 0;" id="home-val-result">
                    $3,850
                  </div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">Replacement Value: <del id="home-val-orig">$65,000</del> (94% Saved)</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 5-Stage Handover Workflow (Slide 16) -->
      <section style="padding: 50px 0; border-top: 1px solid var(--border-subtle); background: var(--bg-surface);">
        <div class="container">
          <div style="text-align: center; max-width: 680px; margin: 0 auto 36px;">
            <span class="badge badge-sage" style="margin-bottom: 6px;">STRUCTURED TRANSITION PROCESS</span>
            <h2 style="font-size: 2rem; margin: 6px 0 12px;">The 5-Stage Handover Model</h2>
            <p style="color: var(--text-muted); font-size: 0.95rem;">
              Based on formal IP assignment and protected escrow to eliminate uncertainty for both parties.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px;">
            <div class="timeline-stage-card completed">
              <div class="stage-num-badge">01</div>
              <h4 class="stage-title">Asset Dossier & Upload</h4>
              <p class="stage-desc">Founding staff submit repos, designs, and runbooks with optional anonymous listing.</p>
            </div>

            <div class="timeline-stage-card completed">
              <div class="stage-num-badge">02</div>
              <h4 class="stage-title">Code Health & IP Check</h4>
              <p class="stage-desc">Automated build checks, test suite verification, and license clearing.</p>
            </div>

            <div class="timeline-stage-card completed">
              <div class="stage-num-badge">03</div>
              <h4 class="stage-title">Valuation & Listing</h4>
              <p class="stage-desc">Data-backed pricing model. Buyers can strip individual assets or purchase whole sets.</p>
            </div>

            <div class="timeline-stage-card current">
              <div class="stage-num-badge">04</div>
              <h4 class="stage-title">Escrow Deposit & Transfer</h4>
              <p class="stage-desc">Buyer deposits funds in protected vault. IP deed generated and credentials released.</p>
            </div>

            <div class="timeline-stage-card">
              <div class="stage-num-badge">05</div>
              <h4 class="stage-title">48-Hr Review & Release</h4>
              <p class="stage-desc">Buyer verifies code locally. Upon confirmation, funds are released to the founding team.</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 28px;">
            <a href="#escrow" class="btn btn-secondary">
              ${ICONS.shield} <span>Explore Interactive Escrow Room</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Featured Assets -->
      <section style="padding: 56px 0;">
        <div class="container">
          <div style="display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 28px;">
            <div>
              <span class="badge badge-copper" style="margin-bottom: 6px;">FEATURED TRANSITIONS</span>
              <h2 style="font-size: 1.8rem;">Available Startup Codebases & Assets</h2>
              <p style="color: var(--text-muted); font-size: 0.92rem;">Pre-screened software packages ready for immediate acquisition and handover.</p>
            </div>
            <a href="#marketplace" class="btn btn-secondary btn-sm">All Packages (${startups.length}) ${ICONS.arrowRight}</a>
          </div>

          <div class="startup-grid">
            ${featured.map(s => renderStartupCard(s)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function renderStartupCard(startup) {
    const savings = Math.round((1 - (startup.bundlePrice / startup.originalDevCost)) * 100);

    return `
      <div class="startup-card" id="card-${startup.id}">
        <div class="card-header-status">
          <span class="death-date-pill">
            <span>Concluded ${startup.died}</span>
          </span>
          <span class="badge badge-sage">
            ${ICONS.check} Health: ${startup.codeHealthScore}%
          </span>
        </div>

        <div class="card-body">
          <div class="card-title-row">
            <a href="#startup/${startup.id}" class="card-startup-name">${startup.name}</a>
            <span class="badge badge-slate">${startup.category}</span>
          </div>

          <p class="card-tagline">${startup.tagline}</p>

          <div class="financial-strip">
            <div>
              <div style="font-size: 0.68rem; color: var(--text-dim);">ORIGINAL BUILD COST</div>
              <div class="sunk-burn">$${startup.originalDevCost.toLocaleString()}</div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 0.68rem; color: var(--copper-primary);">PACKAGE PRICE</div>
              <div class="liquidation-price">$${startup.bundlePrice.toLocaleString()}</div>
            </div>
            <span class="discount-badge">-${savings}%</span>
          </div>

          <div class="asset-stripper-list">
            <div class="asset-stripper-item">
              <span style="display:flex;align-items:center;gap:6px;">${ICONS.code} Codebase (${startup.assets.codeRepo?.loc || 'Full stack'})</span>
              <span style="font-family:var(--font-mono);font-weight:600;">$${startup.assets.codeRepo?.price}</span>
            </div>
            <div class="asset-stripper-item">
              <span style="display:flex;align-items:center;gap:6px;">${ICONS.figma} Figma Kit (${startup.assets.figma?.screens || 'Design Kit'})</span>
              <span style="font-family:var(--font-mono);font-weight:600;">$${startup.assets.figma?.price}</span>
            </div>
            <div class="asset-stripper-item">
              <span style="display:flex;align-items:center;gap:6px;">${ICONS.globe} Domain (${startup.assets.domain?.name})</span>
              <span style="font-family:var(--font-mono);font-weight:600;">$${startup.assets.domain?.price}</span>
            </div>
          </div>

          <div class="card-tech-tags">
            ${startup.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>

        <div class="card-footer">
          <a href="#startup/${startup.id}" class="btn btn-secondary btn-sm" style="flex: 1;">
            Inspect Dossier
          </a>
          <a href="#startup/${startup.id}?buy=true" class="btn btn-primary btn-sm">
            <span>Strip Assets</span> ${ICONS.arrowRight}
          </a>
        </div>
      </div>
    `;
  }

  function attachHomeEvents() {
    const monthsSlider = document.getElementById('home-val-months');
    const locSlider = document.getElementById('home-val-loc');
    const monthsVal = document.getElementById('home-val-months-val');
    const locVal = document.getElementById('home-val-loc-val');
    const resultVal = document.getElementById('home-val-result');
    const origVal = document.getElementById('home-val-orig');

    function updateHomeValuator() {
      if (!monthsSlider || !locSlider) return;
      const months = parseInt(monthsSlider.value, 10);
      const loc = parseInt(locSlider.value, 10);

      if (monthsVal) monthsVal.textContent = `${months} months`;
      if (locVal) locVal.textContent = `${loc.toLocaleString()} LOC`;

      const replacementCost = Math.round((months * 6500) + (loc * 1.15));
      const liquidationVal = Math.round(Math.max(800, replacementCost * 0.058));

      if (resultVal) resultVal.textContent = `$${liquidationVal.toLocaleString()}`;
      if (origVal) origVal.textContent = `$${replacementCost.toLocaleString()}`;
    }

    if (monthsSlider && locSlider) {
      monthsSlider.addEventListener('input', () => {
        sounds.playTone(550 + monthsSlider.value * 8, 0.015);
        updateHomeValuator();
      });
      locSlider.addEventListener('input', () => {
        sounds.playTone(450 + locSlider.value / 250, 0.015);
        updateHomeValuator();
      });
    }
  }

  /* ==========================================================================
     8. Marketplace & Discovery
     ========================================================================== */
  function renderMarketplaceView(queryParam = {}) {
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
        <div style="max-width: 820px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
            <span class="badge ${isAi ? 'badge-sage' : 'badge-slate'}">
              ${isAi ? 'Prototype 2: Guided AI Matching' : 'Prototype 1: Keyword & Filter Directory'}
            </span>
            <span class="badge badge-slate" id="market-count-badge">${startups.length} Available Packages</span>
          </div>

          <h1 style="font-size: 2.4rem; font-weight: 800; line-height: 1.15; margin-bottom: 10px;">
            Startup Asset Directory & Exchange
          </h1>

          <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.5;">
            Explore codebases, Figma component libraries, and premium domains from concluded ventures. Acquire full bundles or select individual technical components.
          </p>

          <div style="margin-top: 22px;">
            <div class="search-input-wrapper">
              <span style="color: var(--text-dim); display: flex;">${ICONS.search}</span>
              <input 
                type="text" 
                id="market-search-input" 
                value="${initialSearch}" 
                placeholder="${isAi ? 'Describe your venture idea & budget (e.g. \"Sustainable apparel store under $1,500 with Next.js\")' : 'Search by name, tech stack (Next.js, Python), or domain...'}"
              />
            </div>

            <!-- Quick Persona Filters -->
            <div class="persona-prompts">
              <span class="persona-label">PERSONA SHORTCUTS:</span>
              <button class="prompt-chip riya-badge" data-query="fashion sustainable clothing store nextjs">
                Riya: Apparel Store ($1,250)
              </button>
              <button class="prompt-chip" data-query="FastAPI logistics routing GPS">
                Logistics & Micro-Fulfillment
              </button>
              <button class="prompt-chip" data-query="WebAudio stem music player">
                Audio Processing & Stems
              </button>
              <button class="prompt-chip" data-query="telehealth WebRTC HIPAA django">
                Telehealth Clinic Portal
              </button>
              <button class="prompt-chip" data-query="IoT smart lock vue supabase">
                Desk Reservation & Smart Lock
              </button>
            </div>
          </div>
        </div>

        <div class="market-layout">
          <!-- Sidebar -->
          <aside class="filter-sidebar">
            <div class="filter-group">
              <div class="filter-title">
                <span>Sector</span>
                <button class="btn-ghost btn-sm" id="btn-reset-filters" style="padding: 2px 6px; font-size: 0.72rem;">Reset</button>
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${categories.map(cat => `
                  <label class="filter-checkbox">
                    <input type="radio" name="market-category" value="${cat}" ${cat === initialCategory ? 'checked' : ''}>
                    <span>${cat}</span>
                  </label>
                `).join('')}
              </div>
            </div>

            <div class="filter-group">
              <div class="filter-title">Asset Components</div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <label class="filter-checkbox">
                  <input type="checkbox" name="asset-type" value="code" checked>
                  <span>Source Code Repository</span>
                </label>
                <label class="filter-checkbox">
                  <input type="checkbox" name="asset-type" value="figma" checked>
                  <span>Figma UI/UX System</span>
                </label>
                <label class="filter-checkbox">
                  <input type="checkbox" name="asset-type" value="domain" checked>
                  <span>Domain & Handles</span>
                </label>
                <label class="filter-checkbox">
                  <input type="checkbox" name="asset-type" value="waitlist" checked>
                  <span>Subscriber Lists</span>
                </label>
                <label class="filter-checkbox">
                  <input type="checkbox" name="asset-type" value="inventory">
                  <span>Physical Inventory</span>
                </label>
              </div>
            </div>

            <div class="filter-group">
              <div class="filter-title">Max Budget</div>
              <input type="range" min="500" max="5000" step="250" value="5000" class="valuator-slider" id="filter-max-price">
              <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.78rem; margin-top: 6px;">
                <span>$500</span>
                <span id="filter-price-display" style="color: var(--copper-primary); font-weight: 700;">$5,000</span>
              </div>
            </div>

            <div class="filter-group">
              <div class="filter-title">Verification</div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <label class="filter-checkbox">
                  <input type="checkbox" id="filter-verified-only" checked>
                  <span>Code Verified (Builds 100%)</span>
                </label>
                <label class="filter-checkbox">
                  <input type="checkbox" id="filter-dockerized-only">
                  <span>Containerized / Docker Ready</span>
                </label>
              </div>
            </div>

            <div style="background: var(--copper-subtle); border: 1px solid var(--copper-border); border-radius: var(--radius-md); padding: 14px; text-align: center;">
              <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--copper-primary); margin-bottom: 4px;">
                OFFLOAD ASSETS?
              </div>
              <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 10px;">
                List repos, designs, and domains with structured handover support.
              </p>
              <a href="#studio" class="btn btn-primary btn-sm" style="width: 100%;">
                List Venture Handover
              </a>
            </div>
          </aside>

          <!-- Main Grid -->
          <main>
            <div class="stripper-mode-bar">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="color: var(--copper-primary); display: flex;">${ICONS.scissors}</span>
                <div>
                  <strong style="font-size: 0.9rem; color: var(--text-main);">Granular Stripping Mode</strong>
                  <p style="font-size: 0.75rem; color: var(--text-muted);">Unbundle individual elements to adjust acquisition cost.</p>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.78rem; color: var(--text-dim); font-family: var(--font-mono);">SORT:</span>
                <select id="market-sort-select" class="form-select" style="padding: 5px 10px; font-size: 0.8rem; width: auto;">
                  <option value="discount">Highest Savings %</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="health">Code Quality Score</option>
                </select>
              </div>
            </div>

            <div class="startup-grid" id="market-grid-container"></div>

            <div id="market-empty-state" style="display: none; text-align: center; padding: 50px 20px; background: var(--bg-surface); border-radius: var(--radius-xl); border: 1px solid var(--border-subtle); margin-top: 20px;">
              <h3 style="font-size: 1.25rem; margin-bottom: 6px;">No Matching Assets Found</h3>
              <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 440px; margin: 0 auto 16px;">
                Try adjusting your search criteria or price filters.
              </p>
              <button class="btn btn-secondary btn-sm" id="btn-clear-search">Clear All Filters</button>
            </div>
          </main>
        </div>
      </div>
    `;
  }

  function attachMarketplaceEvents() {
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

      if (priceDisplay) priceDisplay.textContent = `$${maxPrice.toLocaleString()}`;

      let filtered = allStartups.filter(s => {
        if (category !== 'All' && s.category !== category) return false;
        if (s.bundlePrice > maxPrice) return false;
        if (!query) return true;

        if (isAi) {
          const tokens = query.split(/\s+/).filter(t => t.length > 2);
          const textBlob = `${s.name} ${s.tagline} ${s.category} ${s.personaMatch} ${s.techStack.join(' ')} ${s.founderQuote} ${s.postMortem?.tldr || ''}`.toLowerCase();
          if (query.includes('fashion') || query.includes('cloth') || query.includes('riya')) {
            if (s.id === 'threadvibe') return true;
          }
          return tokens.some(t => textBlob.includes(t));
        } else {
          const standardBlob = `${s.name} ${s.tagline} ${s.category} ${s.techStack.join(' ')} ${s.assets.domain?.name || ''}`.toLowerCase();
          return standardBlob.includes(query);
        }
      });

      filtered.sort((a, b) => {
        if (sortBy === 'discount') {
          return (1 - (b.bundlePrice / b.originalDevCost)) - (1 - (a.bundlePrice / a.originalDevCost));
        }
        if (sortBy === 'price-asc') return a.bundlePrice - b.bundlePrice;
        if (sortBy === 'price-desc') return b.bundlePrice - a.bundlePrice;
        if (sortBy === 'health') return b.codeHealthScore - a.codeHealthScore;
        return 0;
      });

      if (countBadge) countBadge.textContent = `${filtered.length} Available Packages`;
      if (!gridContainer) return;

      if (filtered.length === 0) {
        gridContainer.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
      } else {
        if (emptyState) emptyState.style.display = 'none';
        gridContainer.innerHTML = filtered.map(s => renderStartupCard(s)).join('');
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        sounds.hover();
        filterAndRender();
      });
    }

    if (priceSlider) {
      priceSlider.addEventListener('input', () => {
        sounds.playTone(350 + priceSlider.value / 15, 0.015);
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

    const resetAction = () => {
      sounds.click();
      if (categoryRadios[0]) categoryRadios[0].checked = true;
      if (searchInput) searchInput.value = '';
      if (priceSlider) priceSlider.value = 5000;
      filterAndRender();
    };

    if (resetBtn) resetBtn.addEventListener('click', resetAction);
    if (clearSearchBtn) clearSearchBtn.addEventListener('click', resetAction);

    filterAndRender();
  }

  /* ==========================================================================
     9. Startup Detail / Dossier View
     ========================================================================== */
  function renderStartupDetailView(id, openBuyModal = false) {
    const startup = storage.getStartupById(id);

    if (!startup) {
      return `
        <div class="container" style="padding: 70px 0; text-align: center;">
          <h2>Venture Profile Not Found</h2>
          <p style="color: var(--text-muted); margin: 10px 0 20px;">This listing may have already been acquired or removed.</p>
          <a href="#marketplace" class="btn btn-primary">Return to Directory</a>
        </div>
      `;
    }

    const savings = Math.round((1 - (startup.bundlePrice / startup.originalDevCost)) * 100);

    return `
      <!-- Dossier Hero Header -->
      <section class="dossier-hero autopsy-hero">
        <div class="container">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 300px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
                <span class="badge badge-slate">Concluded ${startup.died}</span>
                <span class="badge badge-sage">${ICONS.check} Verified IP & Code</span>
                <span class="badge badge-slate">${startup.category}</span>
              </div>

              <h1 class="dossier-title tombstone-title">${startup.name}</h1>
              <p class="dossier-tagline tombstone-epitaph">${startup.tagline}</p>

              <div class="founder-quote">
                "${startup.founderQuote}"
                <div style="font-weight: 700; margin-top: 6px; font-style: normal; font-size: 0.85rem; color: var(--text-main);">
                  — ${startup.founderName} (${startup.managerialTitle})
                </div>
              </div>

              <div class="dossier-metrics-grid autopsy-vital-stats">
                <div class="vital-stat-box">
                  <div class="vital-stat-label">Capital Invested</div>
                  <div class="vital-stat-val">$${startup.burnedAmount.toLocaleString()}</div>
                </div>
                <div class="vital-stat-box">
                  <div class="vital-stat-label">Original Dev Cost</div>
                  <div class="vital-stat-val">$${startup.originalDevCost.toLocaleString()}</div>
                </div>
                <div class="vital-stat-box">
                  <div class="vital-stat-label">Full Package Price</div>
                  <div class="vital-stat-val" style="color: var(--copper-primary);">$${startup.bundlePrice.toLocaleString()}</div>
                </div>
                <div class="vital-stat-box">
                  <div class="vital-stat-label">Savings vs Rebuilding</div>
                  <div class="vital-stat-val" style="color: var(--sage-primary);">${savings}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Dossier Tabs & Stripper -->
      <div class="container">
        <div class="dossier-content-layout autopsy-content-layout">
          <div>
            <div class="dossier-tabs autopsy-tabs">
              <button class="dossier-tab-btn autopsy-tab-btn active" data-tab="handover">
                ${ICONS.package} <span>Staff Handover Dossier</span>
              </button>
              <button class="dossier-tab-btn autopsy-tab-btn" data-tab="health">
                ${ICONS.shield} <span>Code Health & Due Diligence</span>
              </button>
              <button class="dossier-tab-btn autopsy-tab-btn" data-tab="postmortem">
                ${ICONS.fileText} <span>Founder Debrief & Retrospective</span>
              </button>
              <button class="dossier-tab-btn autopsy-tab-btn" data-tab="pivots">
                ${ICONS.sparkles} <span>Rebirth & Pivot Pathways (3)</span>
              </button>
            </div>

            <!-- Tab 1: Runbook -->
            <div class="dossier-tab-content autopsy-tab-content" id="tab-handover">
              <div class="handover-card">
                <h3 class="handover-card-title">${ICONS.sliders} <span>System Architecture Overview</span></h3>
                <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 18px;">
                  ${startup.managerialHandover.architecture}
                </p>

                <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px; margin-bottom: 20px;">
                  <h4 style="font-size: 0.85rem; color: var(--text-main); margin-bottom: 4px;">Prerequisites & Environment</h4>
                  <div style="font-size: 0.82rem; font-family: var(--font-mono); color: var(--text-muted);">
                    ${startup.managerialHandover.techRequirements}
                  </div>
                </div>

                <h4 style="font-size: 0.9rem; margin-bottom: 8px;">Local Execution Runbook:</h4>
                <div class="code-block-preview">
                  <pre>${startup.managerialHandover.runbookCommands}</pre>
                </div>

                <h4 style="font-size: 0.9rem; margin: 20px 0 8px;">Environment Configuration Checklist (.env):</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                  ${startup.managerialHandover.envVariables.map(env => `
                    <span class="badge badge-slate" style="font-family: var(--font-mono); font-size: 0.74rem;">
                      ${env}
                    </span>
                  `).join('')}
                </div>

                <div style="margin-top: 24px; padding: 16px; background: var(--copper-subtle); border: 1px solid var(--copper-border); border-radius: var(--radius-md);">
                  <div style="display: flex; align-items: flex-start; gap: 12px;">
                    <span style="color: var(--copper-primary);">${ICONS.users}</span>
                    <div>
                      <h4 style="font-size: 0.95rem; color: var(--copper-primary); margin-bottom: 4px;">Staff Onboarding Walkthrough</h4>
                      <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">
                        ${startup.managerialHandover.ctoSupport}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab 2: Health -->
            <div class="dossier-tab-content autopsy-tab-content" id="tab-health" style="display: none;">
              <div class="handover-card">
                <h3 class="handover-card-title">${ICONS.shield} <span>Technical Inspection & IP Clearance</span></h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">
                  Screened against automated build tests, test coverage benchmarks, and license compliance audits.
                </p>

                <div class="code-health-grid">
                  <div class="health-metric-box">
                    <div style="display: flex; justify-content: space-between; font-size: 0.82rem; color: var(--text-muted);">
                      <span>Test Coverage</span>
                      <strong style="color: var(--sage-primary);">${startup.assets.codeRepo?.testCoverage || '90%'}</strong>
                    </div>
                    <div class="progress-bar-bg">
                      <div class="progress-bar-fill" style="width: ${startup.assets.codeRepo?.testCoverage || '90%'};"></div>
                    </div>
                  </div>

                  <div class="health-metric-box">
                    <div style="display: flex; justify-content: space-between; font-size: 0.82rem; color: var(--text-muted);">
                      <span>Health Index</span>
                      <strong style="color: var(--sage-primary);">${startup.codeHealthScore}/100</strong>
                    </div>
                    <div class="progress-bar-bg">
                      <div class="progress-bar-fill" style="width: ${startup.codeHealthScore}%;"></div>
                    </div>
                  </div>

                  <div class="health-metric-box">
                    <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 4px;">Total Code Volume</div>
                    <strong style="font-family: var(--font-mono); font-size: 1.05rem;">${startup.assets.codeRepo?.loc || '30k LOC'}</strong>
                    <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: 4px;">Git Commits Verified</div>
                  </div>

                  <div class="health-metric-box">
                    <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 4px;">IP Provenance</div>
                    <strong style="color: var(--sage-primary); font-size: 1.05rem;">100% Cleared</strong>
                    <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: 4px;">Zero outstanding commercial claims</div>
                  </div>
                </div>

                <div style="margin-top: 20px; padding: 14px; background: var(--bg-surface-elevated); border-radius: var(--radius-md);">
                  <div style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-dim); margin-bottom: 8px;">TECHNOLOGY STACK</div>
                  <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    ${startup.techStack.map(t => `<span class="badge badge-slate">${t}</span>`).join('')}
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab 3: Post-Mortem -->
            <div class="dossier-tab-content autopsy-tab-content" id="tab-postmortem" style="display: none;">
              <div class="handover-card">
                <span class="badge badge-copper" style="margin-bottom: 8px;">FOUNDER ACCOUNT</span>
                <h3 style="margin: 4px 0 10px; font-size: 1.15rem;">Context: Why Operations Concluded</h3>
                <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 18px;">${startup.postMortem.tldr}</p>

                <h4 style="margin-bottom: 6px; font-size: 1rem;">Validated Strengths</h4>
                <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 18px;">${startup.postMortem.whatWorked}</p>

                <h4 style="margin-bottom: 6px; font-size: 1rem; color: var(--copper-primary);">Core Challenge Encountered</h4>
                <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">${startup.postMortem.theFatalMistake}</p>

                <div style="background: var(--bg-surface-elevated); border-left: 3px solid var(--copper-primary); border-radius: 0 var(--radius-md) var(--radius-md) 0; padding: 16px;">
                  <h4 style="color: var(--text-main); font-size: 0.92rem; margin-bottom: 6px;">Advice for the Next Team Acquiring This:</h4>
                  <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">
                    ${startup.postMortem.lessonsForBuyer}
                  </p>
                </div>
              </div>
            </div>

            <!-- Tab 4: Pivots -->
            <div class="dossier-tab-content autopsy-tab-content" id="tab-pivots" style="display: none;">
              <div class="handover-card">
                <h3 class="handover-card-title">${ICONS.sparkles} <span>Actionable Pivot Angles</span></h3>
                <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 16px;">
                  Recommended directions for repurposing this codebase into a viable product.
                </p>

                ${startup.aiPivots.map(p => `
                  <div class="pivot-card">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                      <h4 style="font-weight: 700;">${p.title}</h4>
                      <span class="badge badge-sage">${p.tag}</span>
                    </div>
                    <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.5;">${p.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right: Granular Checkout Box -->
          <aside class="stripper-checkout-box" id="stripper-box">
            <h3 class="checkout-box-title">Asset Stripper Selection</h3>
            <p class="checkout-box-subtitle">Select only the specific components required for your venture.</p>

            <div class="stripper-selection-list">
              ${startup.assets.codeRepo ? `
                <div class="stripper-row selected" data-type="code" data-price="${startup.assets.codeRepo.price}">
                  <div class="stripper-label-group">
                    <input type="checkbox" id="check-asset-code" checked>
                    <div>
                      <strong>Full Code Repository</strong>
                      <div style="font-size: 0.72rem; color: var(--text-dim);">${startup.assets.codeRepo.loc}</div>
                    </div>
                  </div>
                  <span style="font-family: var(--font-mono); font-weight: 700;">$${startup.assets.codeRepo.price}</span>
                </div>
              ` : ''}

              ${startup.assets.figma ? `
                <div class="stripper-row selected" data-type="figma" data-price="${startup.assets.figma.price}">
                  <div class="stripper-label-group">
                    <input type="checkbox" id="check-asset-figma" checked>
                    <div>
                      <strong>Figma Design Kit</strong>
                      <div style="font-size: 0.72rem; color: var(--text-dim);">${startup.assets.figma.screens}</div>
                    </div>
                  </div>
                  <span style="font-family: var(--font-mono); font-weight: 700;">$${startup.assets.figma.price}</span>
                </div>
              ` : ''}

              ${startup.assets.domain ? `
                <div class="stripper-row selected" data-type="domain" data-price="${startup.assets.domain.price}">
                  <div class="stripper-label-group">
                    <input type="checkbox" id="check-asset-domain" checked>
                    <div>
                      <strong>Domain & Social Assets</strong>
                      <div style="font-size: 0.72rem; color: var(--text-dim);">${startup.assets.domain.name}</div>
                    </div>
                  </div>
                  <span style="font-family: var(--font-mono); font-weight: 700;">$${startup.assets.domain.price}</span>
                </div>
              ` : ''}

              ${startup.assets.waitlist ? `
                <div class="stripper-row selected" data-type="waitlist" data-price="${startup.assets.waitlist.price}">
                  <div class="stripper-label-group">
                    <input type="checkbox" id="check-asset-waitlist" checked>
                    <div>
                      <strong>Verified Subscriber List</strong>
                      <div style="font-size: 0.72rem; color: var(--text-dim);">${startup.assets.waitlist.count}</div>
                    </div>
                  </div>
                  <span style="font-family: var(--font-mono); font-weight: 700;">$${startup.assets.waitlist.price}</span>
                </div>
              ` : ''}

              ${startup.assets.handover ? `
                <div class="stripper-row selected" data-type="handover" data-price="${startup.assets.handover.price}">
                  <div class="stripper-label-group">
                    <input type="checkbox" id="check-asset-handover" checked>
                    <div>
                      <strong>CTO Walkthrough Hours</strong>
                      <div style="font-size: 0.72rem; color: var(--text-dim);">${startup.assets.handover.ctoHours}</div>
                    </div>
                  </div>
                  <span style="font-family: var(--font-mono); font-weight: 700;">$${startup.assets.handover.price}</span>
                </div>
              ` : ''}

              ${startup.assets.inventory ? `
                <div class="stripper-row" data-type="inventory" data-price="${startup.assets.inventory.price}">
                  <div class="stripper-label-group">
                    <input type="checkbox" id="check-asset-inventory">
                    <div>
                      <strong>Physical Inventory</strong>
                      <div style="font-size: 0.72rem; color: var(--text-dim);">${startup.assets.inventory.quantity}</div>
                    </div>
                  </div>
                  <span style="font-family: var(--font-mono); font-weight: 700;">$${startup.assets.inventory.price}</span>
                </div>
              ` : ''}
            </div>

            <div class="checkout-total-strip">
              <div>
                <div style="font-size: 0.85rem; color: var(--text-muted);">Selected Subtotal:</div>
                <div style="font-size: 0.74rem; color: var(--sage-primary);">Escrow protected & IP cleared</div>
              </div>
              <div class="checkout-total-amount" id="stripper-total-display">
                $${startup.bundlePrice}
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
              <button class="btn btn-primary btn-lg" id="btn-start-escrow" style="width: 100%;">
                ${ICONS.lock} <span>Lock in Escrow & Acquire</span>
              </button>
              <button class="btn btn-secondary btn-md" id="btn-open-offer-modal" style="width: 100%;">
                ${ICONS.message} <span>Submit Counter-Offer</span>
              </button>
            </div>

            <div style="margin-top: 14px; text-align: center; font-size: 0.74rem; color: var(--text-dim); line-height: 1.4;">
              Funds held in DeadStartup Escrow until 48-hr local verification. Standard 10% platform success fee applies.
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  function attachStartupDetailEvents(startupId) {
    const startup = storage.getStartupById(startupId);
    if (!startup) return;

    const tabBtns = document.querySelectorAll('.dossier-tab-btn, .autopsy-tab-btn');
    const tabContents = document.querySelectorAll('.dossier-tab-content, .autopsy-tab-content');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sounds.click();
        const target = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.style.display = 'none');
        btn.classList.add('active');
        const activeContent = document.getElementById(`tab-${target}`);
        if (activeContent) activeContent.style.display = 'block';
      });
    });

    const stripperRows = document.querySelectorAll('.stripper-row');
    const totalDisplay = document.getElementById('stripper-total-display');

    function calculateStripperTotal() {
      let total = 0;
      stripperRows.forEach(row => {
        const checkbox = row.querySelector('input[type="checkbox"]');
        const price = parseInt(row.getAttribute('data-price') || '0', 10);
        if (checkbox && checkbox.checked) {
          total += price;
          row.classList.add('selected');
        } else {
          row.classList.remove('selected');
        }
      });
      if (totalDisplay) totalDisplay.textContent = `$${total.toLocaleString()}`;
      return total;
    }

    stripperRows.forEach(row => {
      const checkbox = row.querySelector('input[type="checkbox"]');
      row.addEventListener('click', (e) => {
        if (e.target !== checkbox && checkbox) checkbox.checked = !checkbox.checked;
        sounds.toggleOn();
        calculateStripperTotal();
      });
    });

    const startEscrowBtn = document.getElementById('btn-start-escrow');
    if (startEscrowBtn) {
      startEscrowBtn.addEventListener('click', () => {
        const currentTotal = calculateStripperTotal();
        sounds.success();
        const escrowDeal = {
          dealId: `ESC-${Date.now().toString().slice(-6)}`,
          startupId: startup.id,
          startupName: startup.name,
          founderName: startup.founderName,
          buyerName: 'Riya (Student Entrepreneur)',
          totalAmount: currentTotal,
          stage: 1,
          createdAt: new Date().toISOString(),
          timeline: [
            { time: 'Just now', msg: `Escrow vault initialized for ${startup.name} at $${currentTotal}` }
          ]
        };
        storage.setEscrow(escrowDeal);
        window.showToast(`Escrow transaction created for $${currentTotal}. Redirecting to Escrow Room...`, 'success');
        setTimeout(() => { window.location.hash = '#escrow'; }, 500);
      });
    }

    const offerBtn = document.getElementById('btn-open-offer-modal');
    if (offerBtn) {
      offerBtn.addEventListener('click', () => {
        sounds.click();
        openOfferModal(startup);
      });
    }
  }

  /* ==========================================================================
     10. Founder & Staff Handover Studio (Wizard)
     ========================================================================== */
  function renderHandoverStudioView() {
    return `
      <div class="container studio-container">
        <div style="text-align: center; max-width: 650px; margin: 0 auto 32px;">
          <span class="badge badge-copper" style="margin-bottom: 6px;">STAFF HANDOVER PORTAL</span>
          <h1 style="font-size: 2.2rem; font-weight: 800; margin: 6px 0 10px;">
            Venture Asset Handover Studio
          </h1>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5;">
            Document and liquidate your technology stack, designs, and domains. Recover capital for team members and investors while enabling the next generation of builders.
          </p>
        </div>

        <div class="wizard-progress">
          <div class="wizard-progress-bar" id="wizard-bar" style="width: 0%;"></div>
          
          <div class="wizard-step-node active" data-step="1">
            <div class="wizard-node-circle">1</div>
            <span class="wizard-node-label">Overview</span>
          </div>
          <div class="wizard-step-node" data-step="2">
            <div class="wizard-node-circle">2</div>
            <span class="wizard-node-label">Assets</span>
          </div>
          <div class="wizard-step-node" data-step="3">
            <div class="wizard-node-circle">3</div>
            <span class="wizard-node-label">Runbook</span>
          </div>
          <div class="wizard-step-node" data-step="4">
            <div class="wizard-node-circle">4</div>
            <span class="wizard-node-label">Account</span>
          </div>
          <div class="wizard-step-node" data-step="5">
            <div class="wizard-node-circle">5</div>
            <span class="wizard-node-label">Publish</span>
          </div>
        </div>

        <div class="wizard-card" id="wizard-form-container">
          <!-- Step 1 -->
          <div class="wizard-step-panel" id="step-panel-1">
            <h3 style="font-size: 1.35rem; margin-bottom: 6px;">Step 1: Venture Profile & Demographics</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 20px;">Provide basic context regarding the venture.</p>

            <div class="stealth-toggle-box">
              <div>
                <h4 style="font-size: 0.92rem; color: var(--ochre-primary); margin-bottom: 2px;">Confidential / Stealth Mode Listing</h4>
                <p style="font-size: 0.78rem; color: var(--text-muted);">Hides the startup name until a verified buyer signs an NDA and deposits funds in escrow.</p>
              </div>
              <label class="filter-checkbox" style="font-weight: 600;">
                <input type="checkbox" id="field-stealth">
                <span>Enable Confidential</span>
              </label>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div class="form-group">
                <label class="form-label">Startup Name</label>
                <input type="text" id="field-name" class="form-input" placeholder="e.g. Omnipod AI" required>
              </div>
              <div class="form-group">
                <label class="form-label">Sector</label>
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
              <label class="form-label">Tagline / Mission Summary</label>
              <input type="text" id="field-tagline" class="form-input" placeholder="e.g. Multi-tenant inventory forecasting and warehouse routing system" required>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
              <div class="form-group">
                <label class="form-label">Year Founded</label>
                <input type="text" id="field-founded" class="form-input" value="2024">
              </div>
              <div class="form-group">
                <label class="form-label">Operations Concluded</label>
                <input type="text" id="field-died" class="form-input" value="March 2026">
              </div>
              <div class="form-group">
                <label class="form-label">Capital Invested ($)</label>
                <input type="number" id="field-burn" class="form-input" value="120000">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Primary Factor in Winding Down</label>
              <select id="field-cause" class="form-select">
                <option value="Runway exhausted prior to Series A">Runway exhausted prior to Series A</option>
                <option value="Customer acquisition cost exceeded unit margins">Customer acquisition cost exceeded unit margins</option>
                <option value="Regulatory compliance delays">Regulatory compliance delays</option>
                <option value="Enterprise procurement timelines exceeded runway">Enterprise procurement timelines exceeded runway</option>
                <option value="Founding team transition">Founding team transition</option>
              </select>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div class="form-group">
                <label class="form-label">Your Name</label>
                <input type="text" id="field-founder-name" class="form-input" placeholder="e.g. Siddharth Rao">
              </div>
              <div class="form-group">
                <label class="form-label">Managerial Role</label>
                <input type="text" id="field-role" class="form-input" placeholder="e.g. Co-Founder & CTO / Head of Engineering">
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="wizard-step-panel" id="step-panel-2" style="display: none;">
            <h3 style="font-size: 1.35rem; margin-bottom: 6px;">Step 2: Component Catalog & Valuation</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 20px;">Select which assets are being transferred and specify individual asking prices.</p>

            <div class="asset-build-row enabled">
              <input type="checkbox" id="asset-has-code" checked>
              <div>
                <strong>Codebase Repository</strong>
                <p style="font-size: 0.78rem; color: var(--text-muted);">Source code, API services, database migrations, container configs</p>
                <input type="text" id="asset-code-stack" class="form-input" style="padding: 5px 8px; font-size: 0.8rem; margin-top: 4px;" value="Next.js 14, Python FastAPI, PostgreSQL, Tailwind">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: var(--text-dim); display: block;">Price ($)</label>
                <input type="number" id="asset-code-price" class="form-input" value="1200" style="padding: 5px 8px; font-family: var(--font-mono); font-weight: 700;">
              </div>
            </div>

            <div class="asset-build-row enabled">
              <input type="checkbox" id="asset-has-figma" checked>
              <div>
                <strong>Figma UI/UX Component System</strong>
                <p style="font-size: 0.78rem; color: var(--text-muted);">High-fidelity screen layouts, responsive variants, typography & tokens</p>
                <input type="text" id="asset-figma-screens" class="form-input" style="padding: 5px 8px; font-size: 0.8rem; margin-top: 4px;" value="42 screens & full component library">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: var(--text-dim); display: block;">Price ($)</label>
                <input type="number" id="asset-figma-price" class="form-input" value="450" style="padding: 5px 8px; font-family: var(--font-mono); font-weight: 700;">
              </div>
            </div>

            <div class="asset-build-row enabled">
              <input type="checkbox" id="asset-has-domain" checked>
              <div>
                <strong>Domain & Brand Registry</strong>
                <p style="font-size: 0.78rem; color: var(--text-muted);">Registrar EPP authorization transfer and associated handle profiles</p>
                <input type="text" id="asset-domain-name" class="form-input" style="padding: 5px 8px; font-size: 0.8rem; margin-top: 4px;" value="omnipod.io">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: var(--text-dim); display: block;">Price ($)</label>
                <input type="number" id="asset-domain-price" class="form-input" value="350" style="padding: 5px 8px; font-family: var(--font-mono); font-weight: 700;">
              </div>
            </div>

            <div class="asset-build-row enabled">
              <input type="checkbox" id="asset-has-waitlist" checked>
              <div>
                <strong>Verified Subscriber / User List</strong>
                <p style="font-size: 0.78rem; color: var(--text-muted);">Opt-in email leads and early registered trial users</p>
                <input type="text" id="asset-waitlist-count" class="form-input" style="padding: 5px 8px; font-size: 0.8rem; margin-top: 4px;" value="1,850 opt-in subscribers">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: var(--text-dim); display: block;">Price ($)</label>
                <input type="number" id="asset-waitlist-price" class="form-input" value="250" style="padding: 5px 8px; font-family: var(--font-mono); font-weight: 700;">
              </div>
            </div>

            <div class="asset-build-row enabled">
              <input type="checkbox" id="asset-has-handover" checked>
              <div>
                <strong>CTO Transition Walkthrough</strong>
                <p style="font-size: 0.78rem; color: var(--text-muted);">Live screenshare with former engineering staff to assist initial onboarding</p>
                <input type="text" id="asset-handover-hours" class="form-input" style="padding: 5px 8px; font-size: 0.8rem; margin-top: 4px;" value="4 hours architecture walkthrough">
              </div>
              <div>
                <label style="font-size: 0.72rem; color: var(--text-dim); display: block;">Price ($)</label>
                <input type="number" id="asset-handover-price" class="form-input" value="250" style="padding: 5px 8px; font-family: var(--font-mono); font-weight: 700;">
              </div>
            </div>

            <div style="margin-top: 20px; padding: 14px 18px; background: var(--bg-surface-elevated); border: 1px solid var(--border-medium); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between;">
              <div>
                <span style="font-size: 0.82rem; color: var(--text-muted);">Combined Package Asking Price:</span>
                <div style="font-size: 0.74rem; color: var(--sage-primary);">Offers ~20% bundled savings compared to individual components</div>
              </div>
              <div style="display: flex; align-items: center; gap: 6px;">
                <span style="font-size: 1.3rem; font-weight: 800; color: var(--copper-primary); font-family: var(--font-mono);">$</span>
                <input type="number" id="field-bundle-price" class="form-input" value="2100" style="width: 120px; font-size: 1.2rem; font-weight: 800; font-family: var(--font-mono); color: var(--copper-primary); padding: 6px 10px;">
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="wizard-step-panel" id="step-panel-3" style="display: none;">
            <h3 style="font-size: 1.35rem; margin-bottom: 6px;">Step 3: Technical Runbook & Architecture</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 20px;">Provide clear architectural notes so the acquiring team can execute a local build quickly.</p>

            <div class="form-group">
              <label class="form-label">Architecture Summary</label>
              <textarea id="field-arch" class="form-textarea" placeholder="Explain the primary service communication (e.g. Next.js communicates with FastAPI via REST, PostgreSQL for persistence, Redis for caching, Stripe for billing)."></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Terminal Boot Commands</label>
              <textarea id="field-runbook" class="form-textarea" style="font-family: var(--font-mono); font-size: 0.82rem;" placeholder="git clone repo&#10;cd project&#10;docker-compose up -d&#10;npm run dev"></textarea>
              <div class="form-hint">Commands required to clone and launch the project locally.</div>
            </div>

            <div class="form-group">
              <label class="form-label">Required Environment Keys (.env template without secrets)</label>
              <input type="text" id="field-env" class="form-input" value="DATABASE_URL, JWT_SECRET, STRIPE_KEY, REDIS_URL">
            </div>

            <div class="form-group">
              <label class="form-label">Transition Support Notes</label>
              <textarea id="field-cto-notes" class="form-textarea" placeholder="Specify how many onboarding hours are available and best contact channels for handover."></textarea>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="wizard-step-panel" id="step-panel-4" style="display: none;">
            <h3 style="font-size: 1.35rem; margin-bottom: 6px;">Step 4: Candid Post-Mortem Account</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 20px;">Honest reflection builds confidence with prospective acquirers.</p>

            <div class="form-group">
              <label class="form-label">Executive Reflection</label>
              <input type="text" id="field-quote" class="form-input" placeholder="e.g. We built an exceptional platform, but invested in paid channels before proving unit economics.">
            </div>

            <div class="form-group">
              <label class="form-label">What Worked Consistently Well?</label>
              <textarea id="field-worked" class="form-textarea" placeholder="e.g. Sub-10ms database query response and strong retention among early cohort users."></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Key Challenge to Avoid:</label>
              <textarea id="field-mistake" class="form-textarea" placeholder="e.g. Do not rely heavily on unsegmented paid social ads; pursue direct community partnerships."></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Strategic Recommendation for Successor Team:</label>
              <textarea id="field-advice" class="form-textarea" placeholder="e.g. This code is well-suited for white-labeling to regional corporate clients."></textarea>
            </div>
          </div>

          <!-- Step 5 -->
          <div class="wizard-step-panel" id="step-panel-5" style="display: none;">
            <h3 style="font-size: 1.35rem; margin-bottom: 6px;">Step 5: Verification & Publication</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 20px;">Review your handover listing and confirm intellectual property warranties.</p>

            <div style="background: var(--sage-subtle); border: 1px solid var(--sage-border); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="color: var(--sage-primary);">${ICONS.shield}</span>
                  <strong>Automated Due Diligence Scan</strong>
                </div>
                <span class="badge badge-sage">Health Score: 96/100</span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; font-size: 0.8rem; font-family: var(--font-mono);">
                <div style="padding: 8px; background: var(--bg-surface); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <div style="color: var(--text-dim);">IP Warranty</div>
                  <div style="color: var(--sage-primary); font-weight: 700;">Verified Clear</div>
                </div>
                <div style="padding: 8px; background: var(--bg-surface); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <div style="color: var(--text-dim);">OSS Licenses</div>
                  <div style="color: var(--sage-primary); font-weight: 700;">MIT / Apache 2.0</div>
                </div>
                <div style="padding: 8px; background: var(--bg-surface); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <div style="color: var(--text-dim);">Success Fee</div>
                  <div style="color: var(--copper-primary); font-weight: 700;">10% upon release</div>
                </div>
              </div>
            </div>

            <label class="filter-checkbox" style="font-size: 0.86rem; margin-bottom: 20px;">
              <input type="checkbox" id="field-terms" checked required>
              <span>I confirm that our founding team owns the full intellectual property rights to these assets and authorize DeadStartup Escrow to administer the handover.</span>
            </label>
          </div>

          <div class="wizard-nav-footer">
            <button class="btn btn-secondary" id="wizard-btn-prev" style="visibility: hidden;">
              Previous
            </button>
            <div style="display: flex; gap: 10px;">
              <button class="btn btn-primary" id="wizard-btn-next">Next Step ${ICONS.arrowRight}</button>
              <button class="btn btn-primary" id="wizard-btn-publish" style="display: none;">Publish Handover Listing</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function attachHandoverStudioEvents() {
    let currentStep = 1;
    const maxStep = 5;

    const prevBtn = document.getElementById('wizard-btn-prev');
    const nextBtn = document.getElementById('wizard-btn-next');
    const publishBtn = document.getElementById('wizard-btn-publish');
    const progressBar = document.getElementById('wizard-bar');

    function updateWizardUI() {
      const pct = ((currentStep - 1) / (maxStep - 1)) * 100;
      if (progressBar) progressBar.style.width = `${pct}%`;

      document.querySelectorAll('.wizard-step-node').forEach(node => {
        const stepNum = parseInt(node.getAttribute('data-step'), 10);
        node.classList.remove('active', 'completed');
        if (stepNum === currentStep) node.classList.add('active');
        else if (stepNum < currentStep) node.classList.add('completed');
      });

      for (let i = 1; i <= maxStep; i++) {
        const panel = document.getElementById(`step-panel-${i}`);
        if (panel) panel.style.display = (i === currentStep) ? 'block' : 'none';
      }

      if (prevBtn) prevBtn.style.visibility = (currentStep === 1) ? 'hidden' : 'visible';
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

    if (publishBtn) {
      publishBtn.addEventListener('click', () => {
        sounds.success();

        const name = document.getElementById('field-name')?.value || 'QuantumLeap Analytics';
        const tagline = document.getElementById('field-tagline')?.value || 'Autonomous pipeline and analytics telemetry engine';
        const category = document.getElementById('field-category')?.value || 'Developer Tools';
        const founded = document.getElementById('field-founded')?.value || '2024';
        const died = document.getElementById('field-died')?.value || 'March 2026';
        const burnedAmount = parseInt(document.getElementById('field-burn')?.value || '120000', 10);
        const bundlePrice = parseInt(document.getElementById('field-bundle-price')?.value || '1950', 10);
        const stealthMode = document.getElementById('field-stealth')?.checked || false;
        const founderName = document.getElementById('field-founder-name')?.value || 'Founding Engineering Lead';
        const managerialTitle = document.getElementById('field-role')?.value || 'Former CTO';
        const founderQuote = document.getElementById('field-quote')?.value || 'Our code was reliable, but we concluded operations before achieving profitable distribution.';
        const codeStack = document.getElementById('asset-code-stack')?.value || 'Next.js 14, Python FastAPI, PostgreSQL';
        const codePrice = parseInt(document.getElementById('asset-code-price')?.value || '1200', 10);
        const figmaScreens = document.getElementById('asset-figma-screens')?.value || '42 screens';
        const figmaPrice = parseInt(document.getElementById('asset-figma-price')?.value || '450', 10);
        const domainName = document.getElementById('asset-domain-name')?.value || 'startup.io';
        const domainPrice = parseInt(document.getElementById('asset-domain-price')?.value || '350', 10);
        const waitlistCount = document.getElementById('asset-waitlist-count')?.value || '1,850 subscribers';
        const waitlistPrice = parseInt(document.getElementById('asset-waitlist-price')?.value || '250', 10);
        const handoverHours = document.getElementById('asset-handover-hours')?.value || '4 hours live onboarding';
        const handoverPrice = parseInt(document.getElementById('asset-handover-price')?.value || '250', 10);
        const arch = document.getElementById('field-arch')?.value || 'Client -> Next.js SSR -> FastAPI REST backend -> PostgreSQL -> Docker';
        const runbook = document.getElementById('field-runbook')?.value || 'docker-compose up -d\nnpm run dev';
        const envKeys = (document.getElementById('field-env')?.value || 'DATABASE_URL, JWT_SECRET').split(',').map(s => s.trim());
        const ctoNotes = document.getElementById('field-cto-notes')?.value || `${founderName} is available for architectural walkthrough and Docker setup assistance.`;
        const whatWorked = document.getElementById('field-worked')?.value || 'Sub-15ms WebSocket events and clean modular components.';
        const theFatalMistake = document.getElementById('field-mistake')?.value || 'Over-engineered enterprise customizations before solidifying SMB demand.';
        const lessonsForBuyer = document.getElementById('field-advice')?.value || 'Deploy as an agile solution for boutique agencies needing rapid analytics.';

        const newStartup = {
          id: `startup-${Date.now()}`,
          name: stealthMode ? `Confidential Venture (${category})` : name,
          tagline,
          category,
          badge: 'New Listing',
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
              optIn: 'Clean opt-in list',
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
            tldr: 'Runway concluded before paid conversion surpassed acquisition overhead.',
            whatWorked,
            theFatalMistake,
            lessonsForBuyer
          },
          aiPivots: [
            {
              title: 'Targeted Analytics SaaS',
              tag: 'SaaS Opportunity',
              desc: 'Wrap an automated report generator around the existing engine and charge SMBs $29/month.'
            },
            {
              title: 'Agency Starter Solution',
              tag: 'Turnkey Solution',
              desc: 'Use this codebase as an unbranded template to charge clients for custom dashboard deployments.'
            },
            {
              title: 'Self-Hosted Community Tool',
              tag: 'Developer Model',
              desc: 'Publish a community tier and monetize managed cloud instances.'
            }
          ]
        };

        storage.saveStartup(newStartup);
        window.showToast(`Handover listing for "${newStartup.name}" published!`, 'success');
        setTimeout(() => { window.location.hash = `#startup/${newStartup.id}`; }, 500);
      });
    }
  }

  /* ==========================================================================
     11. Escrow Room
     ========================================================================== */
  function renderEscrowTrackerView() {
    let activeEscrow = storage.getEscrow();

    if (!activeEscrow) {
      activeEscrow = {
        dealId: 'ESC-892401',
        startupId: 'threadvibe',
        startupName: 'ThreadVibe Storefront & 3D Engine',
        founderName: 'Maya Chen & Arjun Patel',
        buyerName: 'Riya (Student Entrepreneur)',
        totalAmount: 1250,
        stage: 3,
        createdAt: '2026-03-26T10:14:00Z',
        timeline: [
          { time: '10:14 AM', msg: 'Escrow transaction initiated. Terms accepted by both parties.' },
          { time: '10:15 AM', msg: 'Buyer funded DeadStartup Escrow Vault ($1,250 USD locked in multi-sig vault).' },
          { time: '10:16 AM', msg: 'IP Assignment Deed digitally signed and recorded.' },
          { time: '10:18 AM', msg: 'Seller generated Git repository transfer invitation and domain auth key.' }
        ]
      };
      storage.setEscrow(activeEscrow);
    }

    const stages = [
      { num: 1, title: 'Escrow Vault Lock', desc: 'Buyer funds deposited into protected DeadStartup multi-sig vault.' },
      { num: 2, title: 'IP Assignment Deed', desc: 'Legally binding assignment conveying code, design, and domain rights.' },
      { num: 3, title: 'Credential Transfer', desc: 'GitHub invitation, domain auth code, and Figma files released.' },
      { num: 4, title: '48-Hr Verification', desc: 'Buyer confirms local execution, tests, and clean ownership.' },
      { num: 5, title: 'Settlement & Release', desc: 'Buyer approves inspection. Escrow releases funds to founding team.' }
    ];

    return `
      <div class="container escrow-container">
        <div class="escrow-header">
          <span class="badge badge-sage" style="margin-bottom: 6px;">STRUCTURED ESCROW FACILITY</span>
          <h1 style="font-size: 2.2rem; font-weight: 800; margin: 6px 0 10px;">
            Asset Handover & Escrow Verification
          </h1>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5;">
            Guaranteed asset transition. Capital remains protected in escrow until the acquirer verifies code execution and IP clearance.
          </p>
        </div>

        <div class="escrow-flow-card">
          <div class="escrow-timeline">
            ${stages.map(st => {
              let statusClass = '';
              if (st.num < activeEscrow.stage) statusClass = 'completed';
              else if (st.num === activeEscrow.stage) statusClass = 'current';

              return `
                <div class="timeline-stage-card ${statusClass}" id="stage-card-${st.num}">
                  <div class="stage-num-badge">${st.num < activeEscrow.stage ? ICONS.check : `0${st.num}`}</div>
                  <h4 class="stage-title">${st.title}</h4>
                  <p class="stage-desc">${st.desc}</p>
                </div>
              `;
            }).join('')}
          </div>

          <div class="escrow-control-grid">
            <div class="escrow-workspace" id="escrow-workspace-content">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
                <div>
                  <span class="badge badge-slate">Deal #${activeEscrow.dealId}</span>
                  <h3 style="font-size: 1.25rem; margin-top: 4px;">Active Handover: ${activeEscrow.startupName}</h3>
                </div>
                <div style="text-align: right;">
                  <div style="font-size: 0.72rem; color: var(--text-dim);">SELLER / FOUNDING TEAM</div>
                  <strong style="color: var(--copper-primary); font-size: 0.9rem;">${activeEscrow.founderName}</strong>
                </div>
              </div>

              <div id="dynamic-stage-view">
                ${renderStageInteractivePanel(activeEscrow)}
              </div>

              <div style="margin-top: 24px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                  <span style="font-size: 0.76rem; font-family: var(--font-mono); color: var(--text-muted);">ESCROW PROTOCOL AUDIT TRAIL</span>
                  <span class="badge badge-sage" style="font-size: 0.65rem;">Active Sync</span>
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

            <aside>
              <div class="vault-status-box">
                <div style="color: var(--copper-primary); margin-bottom: 4px;">
                  ${activeEscrow.stage === 5 ? ICONS.unlock : ICONS.lock}
                </div>
                <div style="font-size: 0.74rem; font-family: var(--font-mono); color: var(--text-dim); text-transform: uppercase;">
                  ${activeEscrow.stage === 5 ? 'Funds Settled & Released' : 'Vault Deposit Secured'}
                </div>
                <div class="vault-amount">$${activeEscrow.totalAmount.toLocaleString()}</div>
                
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 16px; line-height: 1.45;">
                  Administered under DeadStartup multi-signature protection with 48-hour local sandbox inspection.
                </div>

                <div style="border-top: 1px solid var(--border-subtle); padding-top: 14px; margin-bottom: 16px;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.84rem; margin-bottom: 6px;">
                    <span style="color: var(--text-muted);">Gross Consideration:</span>
                    <strong style="font-family: var(--font-mono);">$${activeEscrow.totalAmount}</strong>
                  </div>
                  <div style="display: flex; justify-content: space-between; font-size: 0.84rem; margin-bottom: 6px;">
                    <span style="color: var(--text-muted);">Platform Success Fee (10%):</span>
                    <span style="color: var(--copper-primary); font-family: var(--font-mono);">-$${Math.round(activeEscrow.totalAmount * 0.1)}</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; font-size: 0.92rem; font-weight: 700; border-top: 1px dashed var(--border-medium); padding-top: 6px;">
                    <span style="color: var(--sage-primary);">Net to Founding Team:</span>
                    <span style="color: var(--sage-primary); font-family: var(--font-mono);">$${Math.round(activeEscrow.totalAmount * 0.9)}</span>
                  </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 8px;">
                  <button class="btn btn-secondary btn-sm" id="btn-reset-escrow" style="width: 100%;">
                    Reset Simulation to Step 1
                  </button>
                  <button class="btn btn-primary btn-sm" id="btn-next-stage" style="width: 100%;">
                    Advance to Step ${activeEscrow.stage < 5 ? activeEscrow.stage + 1 : 'Complete'} ${ICONS.arrowRight}
                  </button>
                </div>
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
        <div style="padding: 18px; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <h4 style="color: var(--text-main); margin-bottom: 6px;">Stage 1: Deposit Consideration into Escrow</h4>
          <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 14px;">
            Secure $${deal.totalAmount} in the protected escrow vault. The founding team will be notified to provision credentials upon deposit.
          </p>
          <button class="btn btn-primary" id="btn-stage1-deposit">
            Confirm Escrow Deposit ($${deal.totalAmount})
          </button>
        </div>
      `;
    }

    if (deal.stage === 2) {
      return `
        <div style="padding: 18px; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <h4 style="color: var(--text-main);">Stage 2: Intellectual Property Assignment Deed</h4>
            <span class="badge badge-sage">Ready to Sign</span>
          </div>
          <p style="font-size: 0.84rem; color: var(--text-muted);">
            Formal assignment transferring all copyrights, codebases, domains, and design assets from <strong>${deal.founderName}</strong> to <strong>${deal.buyerName}</strong>.
          </p>

          <div class="contract-sheet">
            <h3 style="text-align: center; margin-bottom: 10px; font-size: 1.05rem; text-decoration: underline;">
              INTELLECTUAL PROPERTY ASSIGNMENT & ASSET PURCHASE AGREEMENT
            </h3>
            <p><strong>Effective Date:</strong> ${new Date().toLocaleDateString()}</p>
            <p><strong>Seller (Founding Entity):</strong> ${deal.founderName} (${deal.startupName})</p>
            <p><strong>Buyer (Acquiring Entity):</strong> ${deal.buyerName}</p>
            <p><strong>Escrow Facilitator:</strong> DeadStartup Technologies</p>
            <p><strong>Total Consideration:</strong> $${deal.totalAmount.toLocaleString()} USD</p>
            <br/>
            <p>1. <strong>Assignment of Rights:</strong> Seller hereby unconditionally assigns and transfers to Buyer all worldwide right, title, and interest in and to the source code, Git repositories, architectural documentation, Figma design files, registered domains, and associated opt-in user records.</p>
            <p>2. <strong>Warranty of Title:</strong> Seller warrants that it is the sole and unencumbered owner of the assets, free of external venture liens or third-party liabilities.</p>
            <p>3. <strong>Inspection Sandbox:</strong> Buyer receives forty-eight (48) hours from credential receipt to verify runtime execution prior to escrow fund release.</p>
          </div>

          <div style="display: flex; gap: 10px;">
            <button class="btn btn-primary" id="btn-stage2-sign">
              Execute & Sign Digital Deed
            </button>
            <button class="btn btn-secondary btn-sm" onclick="window.print()">
              Print / Save PDF
            </button>
          </div>
        </div>
      `;
    }

    if (deal.stage === 3) {
      return `
        <div style="padding: 18px; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <h4 style="color: var(--text-main); margin-bottom: 6px;">Stage 3: Credential Vault Provisioning</h4>
          <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 16px;">
            The founding team has deposited transfer tokens. Copy your keys below to initiate inspection.
          </p>

          <div style="display: grid; gap: 10px; margin-bottom: 16px;">
            <div style="padding: 10px 14px; background: var(--bg-void); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-size: 0.72rem; color: var(--text-dim);">GIT REPOSITORY INVITATION</div>
                <div style="font-family: var(--font-mono); color: var(--copper-primary); font-size: 0.84rem;">github.com/deadstartup-vault/${deal.dealId.toLowerCase()}</div>
              </div>
              <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText('github.com/deadstartup-vault/${deal.dealId.toLowerCase()}'); window.showToast('Repository link copied', 'info')">Copy</button>
            </div>

            <div style="padding: 10px 14px; background: var(--bg-void); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-size: 0.72rem; color: var(--text-dim);">DOMAIN REGISTRAR EPP AUTH CODE</div>
                <div style="font-family: var(--font-mono); color: var(--sage-primary); font-size: 0.84rem;">EPP-AUTH-891X-TVIBE-2026</div>
              </div>
              <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText('EPP-AUTH-891X-TVIBE-2026'); window.showToast('EPP Auth key copied', 'info')">Copy</button>
            </div>

            <div style="padding: 10px 14px; background: var(--bg-void); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-size: 0.72rem; color: var(--text-dim);">FIGMA TEAM INVITE KEY</div>
                <div style="font-family: var(--font-mono); color: var(--text-main); font-size: 0.84rem;">figma.com/file/transfer-${deal.dealId}</div>
              </div>
              <button class="btn btn-secondary btn-sm" onclick="navigator.clipboard.writeText('figma.com/file/transfer-${deal.dealId}'); window.showToast('Figma link copied', 'info')">Copy</button>
            </div>
          </div>

          <button class="btn btn-primary" id="btn-stage3-confirm">
            Proceed to 48-Hour Inspection Sandbox ${ICONS.arrowRight}
          </button>
        </div>
      `;
    }

    if (deal.stage === 4) {
      return `
        <div style="padding: 18px; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <h4 style="color: var(--text-main);">Stage 4: 48-Hour Acquirer Sandbox Inspection</h4>
            <span class="badge badge-copper">47h 48m Remaining</span>
          </div>
          <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 14px;">
            Verify runtime behavior and repository compliance before approving settlement:
          </p>

          <div class="verify-checklist">
            <label class="verify-checklist-item">
              <input type="checkbox" id="check-step-1" checked>
              <span>Repository cloned and dependencies install without breaking errors</span>
            </label>
            <label class="verify-checklist-item">
              <input type="checkbox" id="check-step-2" checked>
              <span>Automated test suite executes and passes locally</span>
            </label>
            <label class="verify-checklist-item">
              <input type="checkbox" id="check-step-3" checked>
              <span>Domain registrar accepts transfer authorization code</span>
            </label>
            <label class="verify-checklist-item">
              <input type="checkbox" id="check-step-4" checked>
              <span>Intellectual property clearance confirmed with no third-party claims</span>
            </label>
          </div>

          <div style="margin-top: 18px; display: flex; gap: 10px;">
            <button class="btn btn-primary" id="btn-stage4-approve">
              Approve Verification & Release Escrow Funds
            </button>
            <button class="btn btn-ghost btn-sm" onclick="window.showToast('Dispute notice logged. An arbiter will review within 4 hours.', 'warning')">
              Report Discrepancy
            </button>
          </div>
        </div>
      `;
    }

    return `
      <div style="padding: 22px; background: var(--sage-subtle); border-radius: var(--radius-lg); border: 1px solid var(--sage-border); text-align: center;">
        <h3 style="font-size: 1.4rem; color: var(--sage-primary); margin-bottom: 6px;">Handover Successfully Completed</h3>
        <p style="color: var(--text-muted); max-width: 480px; margin: 0 auto 18px; font-size: 0.88rem;">
          $${Math.round(deal.totalAmount * 0.9).toLocaleString()} has been released to ${deal.founderName}. Full intellectual property ownership is assigned to ${deal.buyerName}.
        </p>
        <div style="display: flex; gap: 10px; justify-content: center;">
          <a href="#marketplace" class="btn btn-primary">Browse Directory</a>
          <button class="btn btn-secondary" onclick="window.print()">Print Transfer Certificate</button>
        </div>
      </div>
    `;
  }

  function attachEscrowTrackerEvents() {
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
        deal.timeline.push({ time: nowTime, msg: 'Buyer initiated 48-Hour Inspection Sandbox. Checklist active.' });
      } else if (targetStage === 5) {
        deal.timeline.push({ time: nowTime, msg: 'Buyer approved all checks. Escrow released $' + Math.round(deal.totalAmount * 0.9) + ' to seller.' });
        sounds.success();
      }

      storage.setEscrow(deal);
      sounds.toggleOn();
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.innerHTML = renderEscrowTrackerView();
        attachEscrowTrackerEvents();
      }
    }

    if (depositBtn) {
      depositBtn.addEventListener('click', () => {
        advanceStage(2);
        window.showToast('Escrow deposit secured. Proceed to IP signature.', 'success');
      });
    }

    if (signBtn) {
      signBtn.addEventListener('click', () => {
        advanceStage(3);
        window.showToast('IP assignment deed executed.', 'success');
      });
    }

    if (confirmCredsBtn) {
      confirmCredsBtn.addEventListener('click', () => {
        advanceStage(4);
        window.showToast('Credentials unlocked. 48-hour inspection active.', 'info');
      });
    }

    if (approveBtn) {
      approveBtn.addEventListener('click', () => {
        advanceStage(5);
        window.showToast('Handover completed and funds released.', 'success');
      });
    }

    if (nextStageBtn) {
      nextStageBtn.addEventListener('click', () => {
        const deal = storage.getEscrow();
        if (deal && deal.stage < 5) advanceStage(deal.stage + 1);
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
          window.showToast('Escrow simulation reset to Step 1.', 'info');
        }
      });
    }
  }

  /* ==========================================================================
     12. AI Valuator Engine
     ========================================================================== */
  function renderValuatorView() {
    return `
      <div class="container valuator-container">
        <div style="text-align: center; max-width: 680px; margin: 0 auto 40px;">
          <span class="badge badge-copper" style="margin-bottom: 6px;">QUANTITATIVE VALUATION MODEL</span>
          <h1 style="font-size: 2.3rem; font-weight: 800; margin: 6px 0 10px;">
            Startup Asset Liquidation Valuator
          </h1>
          <p style="color: var(--text-muted); font-size: 0.98rem; line-height: 1.5;">
            Determine the fair liquidation value of codebases, design systems, and domains based on historical secondary asset transactions.
          </p>
        </div>

        <div class="valuator-layout">
          <div class="valuator-form-card">
            <h3 style="font-size: 1.15rem; margin-bottom: 20px;">Asset Input Parameters</h3>

            <div class="valuator-slider-row">
              <div class="slider-header">
                <span class="slider-label">Engineering Months Invested:</span>
                <span class="slider-value-badge" id="val-months-badge">12 months</span>
              </div>
              <input type="range" min="1" max="36" value="12" class="valuator-slider" id="val-months">
            </div>

            <div class="valuator-slider-row">
              <div class="slider-header">
                <span class="slider-label">Full-Time Software Engineers on Team:</span>
                <span class="slider-value-badge" id="val-devs-badge">2 developers</span>
              </div>
              <input type="range" min="1" max="8" value="2" class="valuator-slider" id="val-devs">
            </div>

            <div class="valuator-slider-row">
              <div class="slider-header">
                <span class="slider-label">Lines of Production Code (LOC):</span>
                <span class="slider-value-badge" id="val-loc-badge">35,000 LOC</span>
              </div>
              <input type="range" min="5000" max="100000" step="5000" value="35000" class="valuator-slider" id="val-loc">
            </div>

            <div class="valuator-slider-row">
              <div class="slider-header">
                <span class="slider-label">Unit Test & CI Coverage:</span>
                <span class="slider-value-badge" id="val-tests-badge">85% Coverage</span>
              </div>
              <input type="range" min="20" max="100" step="5" value="85" class="valuator-slider" id="val-tests">
            </div>

            <div class="valuator-slider-row">
              <div class="slider-header">
                <span class="slider-label">Figma Screen Count:</span>
                <span class="slider-value-badge" id="val-screens-badge">40 screens</span>
              </div>
              <input type="range" min="5" max="100" step="5" value="40" class="valuator-slider" id="val-screens">
            </div>

            <div class="valuator-slider-row">
              <div class="slider-header">
                <span class="slider-label">Opt-in Subscriber List:</span>
                <span class="slider-value-badge" id="val-leads-badge">2,000 leads</span>
              </div>
              <input type="range" min="0" max="10000" step="500" value="2000" class="valuator-slider" id="val-leads">
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 8px;">
              <label class="filter-checkbox">
                <input type="checkbox" id="val-docker" checked>
                <span>Dockerized / Single Command Local Boot (+15% Premium)</span>
              </label>
              <label class="filter-checkbox">
                <input type="checkbox" id="val-domain" checked>
                <span>Includes Top-Level Domain (+18% Premium)</span>
              </label>
              <label class="filter-checkbox">
                <input type="checkbox" id="val-cto-hours" checked>
                <span>Includes 5+ Hours CTO Onboarding (+12% Premium)</span>
              </label>
            </div>
          </div>

          <aside class="valuation-results-card">
            <span class="badge badge-sage" style="margin-bottom: 6px;">RECOMMENDED ASSET VALUATION</span>
            
            <div class="valuation-highlight-box">
              <div style="font-size: 0.76rem; color: var(--text-dim); font-family: var(--font-mono); text-transform: uppercase;">
                Fair Liquidation Price
              </div>
              <div class="valuation-big-price" id="val-result-price">$2,450</div>
              <span class="discount-badge" id="val-savings-pill">Saves Buyer 96% vs Rebuilding</span>
            </div>

            <div class="valuation-comparison-table">
              <div class="valuation-comparison-row">
                <span style="color: var(--text-muted);">Estimated Build Cost:</span>
                <strong style="font-family: var(--font-mono); text-decoration: line-through; color: var(--text-dim);" id="val-orig-cost">$72,000</strong>
              </div>

              <div class="valuation-comparison-row">
                <span style="color: var(--text-muted);">Dev Labor Saved:</span>
                <strong style="color: var(--sage-primary);" id="val-saved-months">12 Months (2 Devs)</strong>
              </div>

              <div class="valuation-comparison-row">
                <span style="color: var(--text-muted);">Platform Fee (10%):</span>
                <span style="font-family: var(--font-mono); color: var(--copper-primary);" id="val-fee">-$245</span>
              </div>

              <div class="valuation-comparison-row" style="background: var(--sage-subtle); border: 1px solid var(--sage-border);">
                <span style="color: var(--sage-primary); font-weight: 700;">Net Recovery to Team:</span>
                <strong style="color: var(--sage-primary); font-size: 1.1rem; font-family: var(--font-mono);" id="val-net-payout">$2,205</strong>
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <div style="font-size: 0.74rem; font-family: var(--font-mono); color: var(--text-dim); margin-bottom: 8px;">
                COMPONENT STRIP PRICING:
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 0.8rem;">
                <div style="padding: 6px 10px; background: var(--bg-void); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <div style="color: var(--text-dim);">Codebase:</div>
                  <strong id="val-split-code">$1,450</strong>
                </div>
                <div style="padding: 6px 10px; background: var(--bg-void); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <div style="color: var(--text-dim);">Figma Kit:</div>
                  <strong id="val-split-figma">$400</strong>
                </div>
                <div style="padding: 6px 10px; background: var(--bg-void); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <div style="color: var(--text-dim);">Domain:</div>
                  <strong id="val-split-domain">$350</strong>
                </div>
                <div style="padding: 6px 10px; background: var(--bg-void); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <div style="color: var(--text-dim);">Subscribers:</div>
                  <strong id="val-split-leads">$250</strong>
                </div>
              </div>
            </div>

            <a href="#studio" class="btn btn-primary" style="width: 100%;">
              <span>List With This Valuation</span> ${ICONS.arrowRight}
            </a>
          </aside>
        </div>
      </div>
    `;
  }

  function attachValuatorEvents() {
    const monthsSlider = document.getElementById('val-months');
    const devsSlider = document.getElementById('val-devs');
    const locSlider = document.getElementById('val-loc');
    const testsSlider = document.getElementById('val-tests');
    const screensSlider = document.getElementById('val-screens');
    const leadsSlider = document.getElementById('val-leads');

    const dockerCheck = document.getElementById('val-docker');
    const domainCheck = document.getElementById('val-domain');
    const ctoCheck = document.getElementById('val-cto-hours');

    const priceResult = document.getElementById('val-result-price');
    const origCost = document.getElementById('val-orig-cost');
    const savedMonths = document.getElementById('val-saved-months');
    const savingsPill = document.getElementById('val-savings-pill');
    const feeDisplay = document.getElementById('val-fee');
    const netPayout = document.getElementById('val-net-payout');

    const splitCode = document.getElementById('val-split-code');
    const splitFigma = document.getElementById('val-split-figma');
    const splitDomain = document.getElementById('val-split-domain');
    const splitLeads = document.getElementById('val-split-leads');

    function updateMath() {
      const months = parseInt(monthsSlider?.value || '12', 10);
      const devs = parseInt(devsSlider?.value || '2', 10);
      const loc = parseInt(locSlider?.value || '35000', 10);
      const tests = parseInt(testsSlider?.value || '85', 10);
      const screens = parseInt(screensSlider?.value || '40', 10);
      const leads = parseInt(leadsSlider?.value || '2000', 10);

      const mBadge = document.getElementById('val-months-badge');
      const dBadge = document.getElementById('val-devs-badge');
      const lBadge = document.getElementById('val-loc-badge');
      const tBadge = document.getElementById('val-tests-badge');
      const sBadge = document.getElementById('val-screens-badge');
      const leBadge = document.getElementById('val-leads-badge');

      if (mBadge) mBadge.textContent = `${months} months`;
      if (dBadge) dBadge.textContent = `${devs} developer${devs > 1 ? 's' : ''}`;
      if (lBadge) lBadge.textContent = `${loc.toLocaleString()} LOC`;
      if (tBadge) tBadge.textContent = `${tests}% Coverage`;
      if (sBadge) sBadge.textContent = `${screens} screens`;
      if (leBadge) leBadge.textContent = `${leads.toLocaleString()} leads`;

      const rawCost = (months * devs * 5500) + (loc * 1.05) + (screens * 120);
      
      let multiplier = 0.045;
      if (dockerCheck?.checked) multiplier += 0.005;
      if (domainCheck?.checked) multiplier += 0.007;
      if (ctoCheck?.checked) multiplier += 0.005;
      if (tests > 80) multiplier += 0.004;

      const baseValuation = Math.round(rawCost * multiplier + (leads * 0.12));
      const finalPrice = Math.max(750, Math.round(baseValuation / 50) * 50);
      const savings = Math.round((1 - (finalPrice / rawCost)) * 100);
      const fee = Math.round(finalPrice * 0.1);
      const net = finalPrice - fee;

      if (priceResult) priceResult.textContent = `$${finalPrice.toLocaleString()}`;
      if (origCost) origCost.textContent = `$${rawCost.toLocaleString()}`;
      if (savedMonths) savedMonths.textContent = `${months} Months (${devs} Devs)`;
      if (savingsPill) savingsPill.textContent = `Saves Buyer ${savings}% vs Rebuilding`;
      if (feeDisplay) feeDisplay.textContent = `-$${fee.toLocaleString()}`;
      if (netPayout) netPayout.textContent = `$${net.toLocaleString()}`;

      if (splitCode) splitCode.textContent = `$${Math.round(finalPrice * 0.58)}`;
      if (splitFigma) splitFigma.textContent = `$${Math.round(finalPrice * 0.18)}`;
      if (splitDomain) splitDomain.textContent = `$${Math.round(finalPrice * 0.14)}`;
      if (splitLeads) splitLeads.textContent = `$${Math.round(finalPrice * 0.10)}`;
    }

    [monthsSlider, devsSlider, locSlider, testsSlider, screensSlider, leadsSlider].forEach(slider => {
      if (slider) {
        slider.addEventListener('input', () => {
          sounds.playTone(380 + slider.value / 12, 0.015);
          updateMath();
        });
      }
    });

    [dockerCheck, domainCheck, ctoCheck].forEach(c => {
      if (c) {
        c.addEventListener('change', () => {
          sounds.toggleOn();
          updateMath();
        });
      }
    });

    updateMath();
  }

  /* ==========================================================================
     13. Traditional vs AI Marketplace Comparison
     ========================================================================== */
  function renderCompareView() {
    const isAi = storage.getAiMode();

    return `
      <div class="container compare-container">
        <div style="text-align: center; max-width: 760px; margin: 0 auto 36px;">
          <span class="badge badge-sage" style="margin-bottom: 6px;">RESEARCH STUDY SYNTHESIS</span>
          <h1 style="font-size: 2.3rem; font-weight: 800; margin: 6px 0 10px;">
            Evaluating Traditional vs AI-Assisted Marketplace Models
          </h1>
          <p style="color: var(--text-muted); font-size: 0.98rem; line-height: 1.5;">
            Research prototype from <em>Khushi, Irfa, Aman, Raj, and Dhruv</em>: Measuring search efficiency and decision confidence for early-stage entrepreneurs.
          </p>

          <div style="margin-top: 20px; display: inline-flex; align-items: center; gap: 10px; background: var(--bg-surface); padding: 6px 14px; border-radius: var(--radius-full); border: 1px solid var(--border-medium);">
            <span style="font-size: 0.85rem; color: var(--text-muted);">Active Platform Mode:</span>
            <button class="btn btn-sm ${isAi ? 'btn-sage' : 'btn-primary'}" id="compare-btn-toggle-mode">
              <span>${isAi ? 'Prototype 2: Guided AI Matching' : 'Prototype 1: Traditional Filter Search'}</span>
            </button>
          </div>
        </div>

        <div class="glass-panel" style="padding: 28px; margin-bottom: 36px;">
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 4px;">Comparative Dimension Analysis</h3>
          <p style="color: var(--text-muted); font-size: 0.86rem; margin-bottom: 16px;">Slide 5 Synthesis: Feature evaluation across key marketplace vectors.</p>

          <table class="compare-matrix-table">
            <thead>
              <tr>
                <th style="width: 24%;">Evaluation Vector</th>
                <th style="width: 38%;" class="col-traditional">
                  Prototype 1 (Without AI)
                </th>
                <th style="width: 38%;" class="col-ai">
                  Prototype 2 (With AI Matching)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Functionality</strong></td>
                <td class="col-traditional">Keyword search, static category filters</td>
                <td class="col-ai">Natural-language intent parsing & budget matching</td>
              </tr>
              <tr>
                <td><strong>User Experience</strong></td>
                <td class="col-traditional">Manual page-by-page catalog browsing</td>
                <td class="col-ai">Guided asset discovery based on project requirements</td>
              </tr>
              <tr>
                <td><strong>Personalisation</strong></td>
                <td class="col-traditional">User-selected checkboxes only</td>
                <td class="col-ai">Relevant package recommendations matching founder background</td>
              </tr>
              <tr>
                <td><strong>Efficiency</strong></td>
                <td class="col-traditional">Manual comparison of lines of code and stacks</td>
                <td class="col-ai">Immediate matched bundles across code, domain, and waitlist</td>
              </tr>
              <tr>
                <td><strong>Accessibility</strong></td>
                <td class="col-traditional">Requires familiarity with technical keywords</td>
                <td class="col-ai">Accessible to non-technical and student founders</td>
              </tr>
              <tr>
                <td><strong>Verification</strong></td>
                <td class="col-traditional">Passive seller profile view</td>
                <td class="col-ai">Automated sanity checks + human escrow verification</td>
              </tr>
              <tr>
                <td><strong>Infrastructure</strong></td>
                <td class="col-traditional">Low operational computing overhead</td>
                <td class="col-ai">Higher model inference and pipeline requirements</td>
              </tr>
            </tbody>
          </table>

          <div style="margin-top: 16px; padding: 12px 16px; background: var(--sage-subtle); border-left: 3px solid var(--sage-primary); border-radius: 0 var(--radius-md) var(--radius-md) 0; font-size: 0.85rem; color: var(--text-main);">
            <strong>Research Finding:</strong> AI significantly lowers search friction for first-time founders. However, structured legal contracts and human-in-the-loop escrow remain essential for title and asset transfer security.
          </div>
        </div>

        <div class="persona-journey-card">
          <div class="persona-profile-badge">
            <div class="persona-avatar">R</div>
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 700;">Persona Walkthrough: Riya, 21</h3>
              <p style="color: var(--text-muted); font-size: 0.86rem;">Student founder launching a direct-to-consumer apparel store on a limited budget ($1,200).</p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 18px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                <h4 style="font-size: 0.95rem;">Without AI: Traditional Method</h4>
                <span class="badge badge-slate">Time: ~42 Hours</span>
              </div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.84rem; color: var(--text-muted);">
                <li>• Searches multiple domain registrars for branded names ($500+)</li>
                <li>• Purchases disparate frontend code templates ($300+)</li>
                <li>• Hires freelance designer for logos & Figma screens ($800+)</li>
                <li>• Coordinates Shopify integration manually</li>
                <li>• <strong>Total Estimated Cost:</strong> $1,600+ and 4 weeks of coordination</li>
              </ul>
            </div>

            <div style="background: var(--sage-subtle); border: 1px solid var(--sage-border); border-radius: var(--radius-md); padding: 18px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                <h4 style="font-size: 0.95rem; color: var(--sage-primary);">With AI: Guided Match</h4>
                <span class="badge badge-sage">Time: ~3 Minutes</span>
              </div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.84rem; color: var(--text-main);">
                <li style="display: flex; align-items: flex-start; gap: 8px;"><span style="color: var(--sage-primary);">${ICONS.check}</span><span>Queries: <em>"Apparel storefront under $1,500 with Next.js & Figma brand kit"</em></span></li>
                <li style="display: flex; align-items: flex-start; gap: 8px;"><span style="color: var(--sage-primary);">${ICONS.check}</span><span>AI directly matches <strong>ThreadVibe ($1,250 full package)</strong></span></li>
                <li style="display: flex; align-items: flex-start; gap: 8px;"><span style="color: var(--sage-primary);">${ICONS.check}</span><span>Verified 3D visualizer + 48 screens + .store domain + 2,400 subscriber leads</span></li>
                <li style="display: flex; align-items: flex-start; gap: 8px;"><span style="color: var(--sage-primary);">${ICONS.check}</span><span>Provides 3 pivot angles for print-on-demand campus merch</span></li>
                <li style="display: flex; align-items: flex-start; gap: 8px;"><span style="color: var(--sage-primary);">${ICONS.check}</span><span><strong>Total Cost:</strong> $1,250 (Saved $18,750 vs custom agency dev)</span></li>
              </ul>
            </div>
          </div>

          <div style="text-align: center; margin-top: 24px;">
            <a href="#marketplace?search=fashion" class="btn btn-primary" id="btn-simulate-riya">
              <span>Test Riya's Matched Query in Directory</span> ${ICONS.arrowRight}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function attachCompareEvents() {
    const toggleBtn = document.getElementById('compare-btn-toggle-mode');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const current = storage.getAiMode();
        storage.setAiMode(!current);
        sounds.toggleOn();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.innerHTML = renderCompareView();
          attachCompareEvents();
        }
        window.showToast(!current ? 'AI Guided Matching active' : 'Standard Search active', 'info');
      });
    }
  }

  /* ==========================================================================
     14. Market Opportunity & Deck Dashboard
     ========================================================================== */
  function renderDeckView() {
    return `
      <div class="container compare-container">
        <div style="text-align: center; max-width: 760px; margin: 0 auto 36px;">
          <span class="badge badge-copper" style="margin-bottom: 6px;">CSE-7 GROUP 9 PRESENTATION DOSSIER</span>
          <h1 style="font-size: 2.3rem; font-weight: 800; margin: 6px 0 10px;">
            Market Opportunity & Financial Deck
          </h1>
          <p style="color: var(--text-muted); font-size: 0.98rem; line-height: 1.5;">
            Digital presentation of market analysis, competitive positioning, and 10-year pro-forma financial forecasts.
          </p>
        </div>

        <!-- TAM Pyramid -->
        <div class="glass-panel" style="padding: 28px; margin-bottom: 36px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 20px;">
            <div>
              <span class="badge badge-slate">Slide 6</span>
              <h3 style="font-size: 1.3rem; margin-top: 4px;">Market Sizing (TAM / SAM / SOM)</h3>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-sm btn-primary" id="btn-currency-inr">₹ INR</button>
              <button class="btn btn-sm btn-secondary" id="btn-currency-usd">$ USD</button>
            </div>
          </div>

          <div class="market-pyramid-container">
            <div class="pyramid-tier pyramid-tam">
              <span class="badge badge-slate">TOTAL ADDRESSABLE MARKET (TAM)</span>
              <div class="pyramid-tier-val" id="tam-val">${PRESENTATION_INFO.marketData.tam.inr}</div>
              <p style="font-size: 0.82rem; color: var(--text-muted);">${PRESENTATION_INFO.marketData.tam.desc}</p>
            </div>

            <div class="pyramid-tier pyramid-sam">
              <span class="badge badge-copper">SERVICEABLE AVAILABLE MARKET (SAM)</span>
              <div class="pyramid-tier-val" style="color: var(--copper-primary);" id="sam-val">${PRESENTATION_INFO.marketData.sam.inr}</div>
              <p style="font-size: 0.82rem; color: var(--text-muted);">${PRESENTATION_INFO.marketData.sam.desc}</p>
            </div>

            <div class="pyramid-tier pyramid-som">
              <span class="badge badge-sage">SERVICEABLE OBTAINABLE MARKET (SOM)</span>
              <div class="pyramid-tier-val" style="color: var(--sage-primary);" id="som-val">${PRESENTATION_INFO.marketData.som.inr}</div>
              <p style="font-size: 0.82rem; color: var(--text-muted);">${PRESENTATION_INFO.marketData.som.desc}</p>
            </div>
          </div>
        </div>

        <!-- Buyer Utility Matrix -->
        <div class="glass-panel" style="padding: 28px; margin-bottom: 36px;">
          <span class="badge badge-sage" style="margin-bottom: 6px;">Slide 5</span>
          <h3 style="font-size: 1.3rem; margin-bottom: 6px;">Buyer Utility Matrix</h3>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 18px;">
            Evaluating transactional friction reduction across the six buyer experience stages.
          </p>

          <div class="utility-matrix-grid">
            <div class="matrix-cell matrix-header-cell">Stages</div>
            <div class="matrix-cell matrix-header-cell">Purchase</div>
            <div class="matrix-cell matrix-header-cell">Delivery</div>
            <div class="matrix-cell matrix-header-cell">Use</div>
            <div class="matrix-cell matrix-header-cell">Supplements</div>
            <div class="matrix-cell matrix-header-cell">Maintenance</div>
            <div class="matrix-cell matrix-header-cell">Disposal</div>

            <div class="matrix-cell matrix-lever-cell">Productivity</div>
            <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Minutes search</small></div>
            <div class="matrix-cell">Git clone</div>
            <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Saves 6-12 mos</small></div>
            <div class="matrix-cell">Figma tokens</div>
            <div class="matrix-cell has-cross"><span class="cross-icon">${ICONS.cross}</span><small>Dependencies</small></div>
            <div class="matrix-cell">Clean sunset</div>

            <div class="matrix-cell matrix-lever-cell">Simplicity</div>
            <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>1-click escrow</small></div>
            <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Repo transfer</small></div>
            <div class="matrix-cell has-cross"><span class="cross-icon">${ICONS.cross}</span><small>Learning curve</small></div>
            <div class="matrix-cell has-cross"><span class="cross-icon">${ICONS.cross}</span><small>Third-party APIs</small></div>
            <div class="matrix-cell">Standard stack</div>
            <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>No server bills</small></div>

            <div class="matrix-cell matrix-lever-cell">Convenience</div>
            <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Unified catalog</small></div>
            <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Instant creds</small></div>
            <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Pre-built modules</small></div>
            <div class="matrix-cell has-cross"><span class="cross-icon">${ICONS.cross}</span><small>Manual setup</small></div>
            <div class="matrix-cell has-cross"><span class="cross-icon">${ICONS.cross}</span><small>Code refactor</small></div>
            <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Tax write-off</small></div>

            <div class="matrix-cell matrix-lever-cell">Risk</div>
            <div class="matrix-cell has-cross"><span class="cross-icon">${ICONS.cross}</span><small>Code quality</small></div>
            <div class="matrix-cell has-cross"><span class="cross-icon">${ICONS.cross}</span><small>Domain delays</small></div>
            <div class="matrix-cell has-cross"><span class="cross-icon">${ICONS.cross}</span><small>Test breakages</small></div>
            <div class="matrix-cell has-cross"><span class="cross-icon">${ICONS.cross}</span><small>Missing guides</small></div>
            <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>48h warranty</small></div>
            <div class="matrix-cell">Title warranty</div>

            <div class="matrix-cell matrix-lever-cell">Sustainability</div>
            <div class="matrix-cell">Reused IP</div>
            <div class="matrix-cell">Zero physical waste</div>
            <div class="matrix-cell">Efficient compute</div>
            <div class="matrix-cell">Modular reuse</div>
            <div class="matrix-cell">Saved energy</div>
            <div class="matrix-cell has-circle"><span class="circle-icon"></span><small>Circular economy</small></div>
          </div>
        </div>

        <!-- Competitor Analysis -->
        <div class="glass-panel" style="padding: 28px; margin-bottom: 36px;">
          <span class="badge badge-slate" style="margin-bottom: 6px;">Slides 10 & 11</span>
          <h3 style="font-size: 1.3rem; margin-bottom: 12px;">Marketplace Benchmark: Flippa vs Acquire.com vs DeadStartup</h3>

          <div style="overflow-x: auto;">
            <table class="compare-matrix-table">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Flippa</th>
                  <th>Acquire.com</th>
                  <th style="color: var(--copper-primary); background: var(--copper-subtle);">DeadStartup (Us)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Primary Asset Scope</strong></td>
                  <td>Cash-flowing blogs & affiliate sites</td>
                  <td>High ARR SaaS ($100k+ ARR)</td>
                  <td style="color: var(--copper-primary); font-weight: 600; background: var(--copper-subtle);">Concluded & pre-revenue assets (Code + Design + Domains)</td>
                </tr>
                <tr>
                  <td><strong>Target Audience</strong></td>
                  <td>Domain investors & website brokers</td>
                  <td>Private equity & institutional buyers</td>
                  <td style="color: var(--copper-primary); font-weight: 600; background: var(--copper-subtle);">Founding teams, student builders, and solo entrepreneurs</td>
                </tr>
                <tr>
                  <td><strong>Granular Stripping</strong></td>
                  <td>None (Single whole asset)</td>
                  <td>None (Complete corporate merger)</td>
                  <td style="color: var(--copper-primary); font-weight: 600; background: var(--copper-subtle);">Unbundle code, Figma kits, or domains individually</td>
                </tr>
                <tr>
                  <td><strong>Code Due Diligence</strong></td>
                  <td>None (Self-reported)</td>
                  <td>Financial metrics only</td>
                  <td style="color: var(--copper-primary); font-weight: 600; background: var(--copper-subtle);">Automated CI/CD build tests & open-source license clearance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Financial Forecast -->
        <div class="financial-chart-box">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
            <div>
              <span class="badge badge-copper">Slides 23-25</span>
              <h3 style="font-size: 1.3rem; margin-top: 4px;">10-Year Pro-Forma Forecast (₹ Lakhs)</h3>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-sm btn-primary" id="btn-chart-rev-exp">Revenue vs Expense</button>
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

  function attachDeckEvents() {
    const inrBtn = document.getElementById('btn-currency-inr');
    const usdBtn = document.getElementById('btn-currency-usd');
    const tamVal = document.getElementById('tam-val');
    const samVal = document.getElementById('sam-val');
    const somVal = document.getElementById('som-val');

    if (inrBtn && usdBtn) {
      inrBtn.addEventListener('click', () => {
        sounds.click();
        inrBtn.className = 'btn btn-sm btn-primary';
        usdBtn.className = 'btn btn-sm btn-secondary';
        if (tamVal) tamVal.textContent = PRESENTATION_INFO.marketData.tam.inr;
        if (samVal) samVal.textContent = PRESENTATION_INFO.marketData.sam.inr;
        if (somVal) somVal.textContent = PRESENTATION_INFO.marketData.som.inr;
      });

      usdBtn.addEventListener('click', () => {
        sounds.click();
        usdBtn.className = 'btn btn-sm btn-primary';
        inrBtn.className = 'btn btn-sm btn-secondary';
        if (tamVal) tamVal.textContent = PRESENTATION_INFO.marketData.tam.usd;
        if (samVal) samVal.textContent = PRESENTATION_INFO.marketData.sam.usd;
        if (somVal) somVal.textContent = PRESENTATION_INFO.marketData.som.usd;
      });
    }

    const canvas = document.getElementById('financial-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let currentMode = 'rev-exp';

    const years = ['Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8', 'Y9', 'Y10'];
    const revenueData = [12, 38, 95, 190, 380, 680, 1050, 1420, 1680, 1850];
    const expenseData = [24, 45, 88, 160, 290, 480, 720, 980, 1180, 1310];
    const profitData = revenueData.map((r, i) => r - expenseData[i]);
    const cumulativeProfit = [];
    profitData.reduce((acc, curr) => {
      const sum = acc + curr;
      cumulativeProfit.push(sum);
      return sum;
    }, 0);

    function drawChart() {
      if (!canvas.parentElement) return;
      const width = canvas.parentElement.clientWidth;
      const height = 330;
      canvas.width = width * (window.devicePixelRatio || 1);
      canvas.height = height * (window.devicePixelRatio || 1);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, width, height);

      const padding = { top: 30, right: 30, bottom: 40, left: 50 };
      const chartW = width - padding.left - padding.right;
      const chartH = height - padding.top - padding.bottom;

      ctx.strokeStyle = '#E8E2D8';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 4; i++) {
        const y = padding.top + (chartH / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();
      }

      ctx.fillStyle = '#78716C';
      ctx.font = '11px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      years.forEach((yr, idx) => {
        const x = padding.left + (chartW / (years.length - 1)) * idx;
        ctx.fillText(yr, x, height - 12);
      });

      if (currentMode === 'rev-exp') {
        const maxVal = 2000;
        ctx.strokeStyle = '#2D6A4F';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        revenueData.forEach((val, idx) => {
          const x = padding.left + (chartW / (years.length - 1)) * idx;
          const y = padding.top + chartH - (val / maxVal) * chartH;
          if (idx === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();

        ctx.strokeStyle = '#C85A32';
        ctx.lineWidth = 2;
        ctx.beginPath();
        expenseData.forEach((val, idx) => {
          const x = padding.left + (chartW / (years.length - 1)) * idx;
          const y = padding.top + chartH - (val / maxVal) * chartH;
          if (idx === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();

        ctx.fillStyle = '#2D6A4F';
        ctx.fillText('— Total Revenue (Lakhs)', width / 2 - 80, padding.top - 12);
        ctx.fillStyle = '#C85A32';
        ctx.fillText('— Total Expenses (Lakhs)', width / 2 + 80, padding.top - 12);

      } else if (currentMode === 'cum-profit') {
        const maxVal = 700;
        const grad = ctx.createLinearGradient(0, padding.top, 0, height);
        grad.addColorStop(0, 'rgba(45, 106, 79, 0.25)');
        grad.addColorStop(1, 'rgba(45, 106, 79, 0.02)');
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

        ctx.strokeStyle = '#2D6A4F';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        cumulativeProfit.forEach((val, idx) => {
          const x = padding.left + (chartW / (years.length - 1)) * idx;
          const y = padding.top + chartH - (Math.max(0, val) / maxVal) * chartH;
          if (idx === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();

        ctx.fillStyle = '#2D6A4F';
        ctx.fillText('— Cumulative Surplus (₹ Lakhs)', width / 2, padding.top - 12);

      } else if (currentMode === 'ebitda') {
        const maxVal = 600;
        const barW = (chartW / years.length) * 0.5;
        
        profitData.forEach((val, idx) => {
          const x = padding.left + (chartW / years.length) * idx + barW * 0.5;
          const barH = (Math.abs(val) / maxVal) * chartH;
          const y = val >= 0 ? padding.top + chartH - barH : padding.top + chartH;

          ctx.fillStyle = val >= 0 ? '#2D6A4F' : '#C85A32';
          ctx.fillRect(x, y, barW, barH);
        });

        ctx.fillStyle = '#2D6A4F';
        ctx.fillText('— Annual EBITDA (₹ Lakhs)', width / 2, padding.top - 12);
      }
    }

    drawChart();
    window.addEventListener('resize', drawChart);

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

  /* ==========================================================================
     15. Post-Mortem & Roast Views
     ========================================================================== */
  function renderPostMortemView() {
    const startups = storage.getStartups();

    return `
      <div class="container compare-container">
        <div style="text-align: center; max-width: 720px; margin: 0 auto 36px;">
          <span class="badge badge-copper" style="margin-bottom: 6px;">FOUNDER LEARNING ARCHIVE</span>
          <h1 style="font-size: 2.3rem; font-weight: 800; margin: 6px 0 10px;">
            The Post-Mortem Library
          </h1>
          <p style="color: var(--text-muted); font-size: 0.98rem; line-height: 1.5;">
            Transparent case studies written by founders detailing technical architectures, growth hurdles, and strategic insights for future teams.
          </p>
        </div>

        <div style="display: grid; gap: 24px; max-width: 860px; margin: 0 auto;">
          ${startups.map(s => `
            <div class="glass-panel" style="padding: 28px;">
              <div style="display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 14px;">
                <div>
                  <span class="badge badge-slate" style="margin-bottom: 4px;">Concluded ${s.died}</span>
                  <h3 style="font-size: 1.4rem; font-weight: 800;">${s.name}</h3>
                  <div style="font-size: 0.82rem; color: var(--text-muted);">
                    Documented by ${s.founderName} (${s.managerialTitle}) • Capital Invested: $${s.burnedAmount.toLocaleString()}
                  </div>
                </div>
                <a href="#startup/${s.id}" class="btn btn-secondary btn-sm">
                  <span>Inspect Assets ($${s.bundlePrice})</span> ${ICONS.arrowRight}
                </a>
              </div>

              <div class="founder-quote" style="margin-bottom: 16px;">
                "${s.founderQuote}"
              </div>

              <div style="background: var(--bg-surface-elevated); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
                <h4 style="font-size: 0.88rem; color: var(--sage-primary); margin-bottom: 4px;">Validated Asset:</h4>
                <p style="font-size: 0.84rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">${s.postMortem.whatWorked}</p>

                <h4 style="font-size: 0.88rem; color: var(--copper-primary); margin-bottom: 4px;">Core Challenge:</h4>
                <p style="font-size: 0.84rem; color: var(--text-muted); line-height: 1.5;">${s.postMortem.theFatalMistake}</p>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span class="badge badge-slate">${s.category}</span>
                  <span class="badge badge-slate">${s.assets.codeRepo?.stack || 'TypeScript'}</span>
                </div>
                <button class="btn btn-ghost btn-sm" onclick="sounds.click(); window.showToast('Upvoted lesson. Insight recorded.', 'success')">
                  Valuable Insight
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderRoastPivotView() {
    return `
      <div class="container compare-container">
        <div style="text-align: center; max-width: 720px; margin: 0 auto 36px;">
          <span class="badge badge-copper" style="margin-bottom: 6px;">COMMUNITY ADVISORY</span>
          <h1 style="font-size: 2.3rem; font-weight: 800; margin: 6px 0 10px;">
            Constructive Venture Review & Pivot Board
          </h1>
          <p style="color: var(--text-muted); font-size: 0.98rem; line-height: 1.5;">
            A constructive environment for founders to present winding-down ventures, gather feedback from fellow builders, and explore pivot angles.
          </p>
        </div>

        <div class="glass-panel" style="padding: 24px; max-width: 820px; margin: 0 auto 32px;">
          <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 6px;">
            Submit a Venture for Advisory Review & Pivot Analysis
          </h3>
          <p style="color: var(--text-muted); font-size: 0.84rem; margin-bottom: 16px;">
            Receive objective review on economics and three recommended pivot paths for your existing codebase.
          </p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 12px;">
            <input type="text" id="roast-input-project" class="form-input" placeholder="Venture Name & Summary">
            <input type="text" id="roast-input-author" class="form-input" placeholder="Your Name / Handle">
          </div>

          <textarea id="roast-input-pitch" class="form-textarea" placeholder="What did you build? What were your unit economics and principal blockers?"></textarea>

          <div style="display: flex; justify-content: flex-end; margin-top: 12px;">
            <button class="btn btn-primary btn-sm" id="btn-submit-roast">
              Submit for Review
            </button>
          </div>
        </div>

        <div style="max-width: 820px; margin: 0 auto;" id="roast-feed-container">
          ${COMMUNITY_ROASTS.map(r => `
            <div class="roast-thread-card">
              <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 10px;">
                <div>
                  <span class="badge badge-slate" style="margin-bottom: 4px;">Invested: ${r.burn}</span>
                  <h3 style="font-size: 1.25rem; font-weight: 700;">${r.project}</h3>
                  <div style="font-size: 0.78rem; color: var(--text-dim);">Presented by ${r.author} (${r.role})</div>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="sounds.click(); window.showToast('Upvoted review thread', 'success')">
                  ${r.upvotes} Upvotes
                </button>
              </div>

              <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.55; margin-bottom: 14px;">
                ${r.pitch}
              </p>

              <div class="pivot-suggestion-pill">
                <div style="font-size: 0.76rem; font-family: var(--font-mono); color: var(--sage-primary); font-weight: 700; margin-bottom: 4px;">
                  STRATEGIC PIVOT RECOMMENDATION:
                </div>
                <p style="font-size: 0.85rem; color: var(--text-main); line-height: 1.5;">
                  ${r.aiPivot}
                </p>
              </div>

              <div style="margin-top: 14px; border-top: 1px solid var(--border-subtle); padding-top: 12px;">
                <div style="font-size: 0.74rem; font-family: var(--font-mono); color: var(--text-dim); margin-bottom: 8px;">
                  COMMUNITY ADVISORY NOTES (${r.comments.length}):
                </div>
                ${r.comments.map(c => `
                  <div style="font-size: 0.8rem; color: var(--text-muted); padding: 4px 0;">
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

  function attachRoastPivotEvents() {
    const submitBtn = document.getElementById('btn-submit-roast');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const proj = document.getElementById('roast-input-project')?.value;
        const pitch = document.getElementById('roast-input-pitch')?.value;
        const author = document.getElementById('roast-input-author')?.value || 'Founding Engineer';

        if (!proj || !pitch) {
          window.showToast('Please provide a project name and summary', 'warning');
          return;
        }

        sounds.success();

        const newRoast = {
          id: `roast-${Date.now()}`,
          author,
          role: 'Former Founder',
          project: proj,
          burn: '$15,000 & 5 mos',
          status: 'Review',
          pitch,
          aiPivot: `Repurpose authentication and data workflows into a modular SDK for developers.`,
          upvotes: 1,
          comments: [
            { user: 'Advisory Facilitator', text: 'Clean architectural structure noted. Suggest setting asking price near $650.' }
          ]
        };

        COMMUNITY_ROASTS.unshift(newRoast);
        window.showToast('Project submitted to Advisory Review', 'success');

        const main = document.getElementById('main-content');
        if (main) {
          main.innerHTML = renderRoastPivotView();
          attachRoastPivotEvents();
        }
      });
    }
  }

  /* ==========================================================================
     16. Counter-Offer Modal
     ========================================================================== */
  function openOfferModal(startup) {
    const container = document.getElementById('modal-container');
    if (!container) return;

    container.innerHTML = `
      <div class="modal-overlay" id="offer-modal-overlay">
        <div class="modal-content">
          <div class="modal-header">
            <h3 style="font-size: 1.2rem; font-weight: 700;">Submit Offer on ${startup.name}</h3>
            <button class="modal-close-btn" id="modal-close-btn">&times;</button>
          </div>

          <div class="modal-body">
            <div style="background: var(--bg-surface-elevated); border-radius: var(--radius-md); padding: 12px 16px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 0.72rem; color: var(--text-dim);">LISTED PACKAGE PRICE</div>
                <div style="font-size: 1.25rem; font-weight: 800; color: var(--copper-primary); font-family: var(--font-mono);">$${startup.bundlePrice}</div>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 0.72rem; color: var(--text-dim);">FOUNDER / REPRESENTATIVE</div>
                <div style="font-size: 0.86rem; font-weight: 600;">${startup.founderName}</div>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Asset Scope</label>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <label class="filter-checkbox">
                  <input type="checkbox" id="offer-asset-full" checked>
                  <span>Complete Package ($${startup.bundlePrice})</span>
                </label>
                <label class="filter-checkbox">
                  <input type="checkbox" id="offer-asset-code">
                  <span>Codebase Repository ($${startup.assets.codeRepo?.price || 800})</span>
                </label>
                <label class="filter-checkbox">
                  <input type="checkbox" id="offer-asset-domain">
                  <span>Domain & Handles ($${startup.assets.domain?.price || 300})</span>
                </label>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
              <div class="form-group">
                <label class="form-label">Offer Amount ($ USD)</label>
                <input type="number" id="offer-amount-input" class="form-input" value="${Math.round(startup.bundlePrice * 0.85)}" style="font-family: var(--font-mono); font-weight: 700; color: var(--copper-primary);">
              </div>
              <div class="form-group">
                <label class="form-label">Your Email / Contact</label>
                <input type="text" id="offer-contact-input" class="form-input" value="riya@builders.edu">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Message to Founding Team</label>
              <textarea id="offer-message-input" class="form-textarea" placeholder="Outline your intended application, background, or timeline for review..."></textarea>
            </div>

            <div style="font-size: 0.72rem; color: var(--text-dim); line-height: 1.4;">
              Accepted offers proceed into DeadStartup escrow with full legal IP assignment and 48-hour local sandbox verification.
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" id="modal-cancel-btn">Cancel</button>
            <button class="btn btn-primary" id="modal-submit-offer-btn">
              Submit Formal Offer
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

        storage.saveOffer({
          startupId: startup.id,
          startupName: startup.name,
          amount,
          date: new Date().toLocaleDateString(),
          status: 'Under Review'
        });

        closeModal();
        window.showToast(`Offer of $${amount.toLocaleString()} submitted to ${startup.founderName}`, 'success');
      });
    }
  }

  /* ==========================================================================
     17. Router & Application Loop
     ========================================================================== */
  function parseHash() {
    const hash = window.location.hash.slice(1) || 'home';
    const [routePart, queryPart] = hash.split('?');
    const params = {};
    if (queryPart) {
      const searchParams = new URLSearchParams(queryPart);
      for (const [k, v] of searchParams.entries()) {
        params[k] = v;
      }
    }

    const segments = routePart.split('/');
    return {
      route: segments[0],
      id: segments[1] || null,
      params
    };
  }

  function handleRoute() {
    const { route, id, params } = parseHash();
    const headerEl = document.getElementById('site-header');
    const mainEl = document.getElementById('main-content');
    const footerEl = document.getElementById('site-footer');

    if (headerEl) {
      headerEl.innerHTML = renderNavbar(route);
      attachNavbarEvents();
    }

    if (footerEl) {
      footerEl.innerHTML = renderFooter();
    }

    const titles = {
      home: "DeadStartup — Startup Asset Liquidation & Handover",
      marketplace: "Asset Directory — DeadStartup",
      startup: "Asset Dossier & Handover — DeadStartup",
      studio: "Venture Handover Studio — DeadStartup",
      escrow: "Escrow Handover Facility — DeadStartup",
      valuation: "Asset Liquidation Valuator — DeadStartup",
      compare: "AI vs Traditional Study — DeadStartup",
      deck: "Market Deck & Financials — DeadStartup",
      'post-mortems': "Post-Mortem Library — DeadStartup",
      roast: "Advisory Feedback Board — DeadStartup"
    };

    document.title = titles[route] || "DeadStartup";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!mainEl) return;

    switch (route) {
      case 'marketplace':
        mainEl.innerHTML = renderMarketplaceView(params);
        attachMarketplaceEvents();
        break;

      case 'startup':
        mainEl.innerHTML = renderStartupDetailView(id, params.buy === 'true');
        attachStartupDetailEvents(id);
        break;

      case 'studio':
        mainEl.innerHTML = renderHandoverStudioView();
        attachHandoverStudioEvents();
        break;

      case 'escrow':
        mainEl.innerHTML = renderEscrowTrackerView();
        attachEscrowTrackerEvents();
        break;

      case 'valuation':
        mainEl.innerHTML = renderValuatorView();
        attachValuatorEvents();
        break;

      case 'compare':
        mainEl.innerHTML = renderCompareView();
        attachCompareEvents();
        break;

      case 'deck':
        mainEl.innerHTML = renderDeckView();
        attachDeckEvents();
        break;

      case 'post-mortems':
        mainEl.innerHTML = renderPostMortemView();
        break;

      case 'roast':
        mainEl.innerHTML = renderRoastPivotView();
        attachRoastPivotEvents();
        break;

      case 'home':
      default:
        mainEl.innerHTML = renderHomeView();
        attachHomeEvents();
        break;
    }

    }

  window.addEventListener('hashchange', handleRoute);

  function boot() {
    handleRoute();

    const initAudio = () => {
      sounds.init();
      window.removeEventListener('click', initAudio);
      window.removeEventListener('keydown', initAudio);
    };
    window.addEventListener('click', initAudio, { once: true });
    window.addEventListener('keydown', initAudio, { once: true });

    window.addEventListener('deadstartup:ai_mode_changed', () => {
      const { route } = parseHash();
      if (route === 'marketplace' || route === 'compare') {
        handleRoute();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
