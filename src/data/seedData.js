export const SEED_STARTUPS = [
  {
    id: "threadvibe",
    name: "ThreadVibe",
    tagline: "Headless D2C sustainable apparel storefront with 3D product visualizer & Shopify backend.",
    category: "E-Commerce",
    personaMatch: "Riya (Fashion & Apparel)",
    badge: "Student/Solo Founder Pick",
    founded: "2024",
    died: "Feb 2026",
    burnedAmount: 85000,
    originalDevCost: 45000,
    bundlePrice: 1250,
    stealthMode: false,
    verified: true,
    codeHealthScore: 96,
    founderName: "Maya Chen & Arjun Patel",
    managerialTitle: "Lead Fullstack Dev & Creative Director",
    founderQuote: "We spent 8 months perfecting our Next.js 14 3D apparel customizer and custom Shopify checkout, but ran out of budget on Meta ads before reaching breakeven.",
    techStack: ["Next.js 14", "Tailwind CSS", "Shopify Storefront API", "Three.js", "Stripe Checkout", "Supabase"],
    assets: {
      codeRepo: {
        title: "Fullstack E-Commerce Storefront + 3D Customizer",
        stack: "Next.js 14 App Router, Three.js, Shopify GraphQL, Tailwind",
        loc: "24,800 lines of TypeScript",
        testCoverage: "92%",
        price: 750,
        desc: "Complete production-ready custom apparel shop with interactive 3D model viewer, cart, multi-currency checkout and SEO optimization.",
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
        count: "2,400 opt-in Gen-Z fashion buyers",
        optIn: "Double opt-in via TikTok launch campaign",
        price: 250,
        desc: "Clean email list with 44% historical open rate, verified through Mailchimp."
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
      tldr: "Built a gorgeous 3D shopping experience, but customer acquisition costs (CAC) on Instagram surged to $62 against a $48 average order value.",
      whatWorked: "The 3D preview engine drove a 6.2% conversion rate on warm traffic. Load times stayed under 1.1s worldwide.",
      theFatalMistake: "Over-invested in custom packaging and influencer seeding before establishing a sustainable paid channel.",
      lessonsForBuyer: "Use organic TikTok unboxing and micro-influencer gifting instead of Meta paid ads. The technical foundation is 100% turnkey."
    },
    aiPivots: [
      {
        title: "Print-on-Demand AI Merch Store",
        tag: "High Margin",
        desc: "Connect this 3D visualizer directly to Printify/Gelato API so buyers can design and buy AI-generated streetwear on demand without upfront inventory."
      },
      {
        title: "B2B White-Label 3D Shopify App",
        tag: "SaaS Model",
        desc: "Turn the Three.js 3D customizer into a plug-and-play Shopify App and charge indie fashion brands $49/month."
      },
      {
        title: "Student Campus Apparel Collective",
        tag: "Low CAC",
        desc: "Use the waitlist and brand to launch university campus hoodies and merch drops with zero ad spend."
      }
    ]
  },
  {
    id: "hypercart-ai",
    name: "HyperCart AI",
    tagline: "Autonomous 15-minute quick-commerce micro-warehouse & routing dispatch engine.",
    category: "AI & Logistics",
    personaMatch: "Tech Founders & Agencies",
    badge: "VC Backed Carcass",
    founded: "2023",
    died: "Jan 2026",
    burnedAmount: 680000,
    originalDevCost: 220000,
    bundlePrice: 4200,
    stealthMode: false,
    verified: true,
    codeHealthScore: 98,
    founderName: "Devon Vance & Priya Sharma",
    managerialTitle: "Former VP Engineering & Operations Head",
    founderQuote: "We raised a $600k seed round, wrote over 60,000 lines of battle-tested code for inventory forecasting and courier routing, but dark-store leases bled us dry.",
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
        count: "5,800 registered urban shoppers",
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
      tldr: "Dark store physical real estate costs and minimum courier guarantees exceeded unit economics before reaching route density.",
      whatWorked: "The routing algorithm reduced average delivery mileage by 38% compared to standard Google Directions API.",
      theFatalMistake: "Tried to operate physical micro-warehouses ourselves instead of selling software to existing convenience stores.",
      lessonsForBuyer: "Do not touch physical inventory! Package this as an Uber/DoorDash competitor for local mom-and-pop stores."
    },
    aiPivots: [
      {
        title: "B2B SaaS for Local Grocery Chains",
        tag: "Enterprise SaaS",
        desc: "Sell this dispatch & warehouse system to independent supermarket chains wanting their own 30-minute delivery app."
      },
      {
        title: "Medical Courier & Pharmacy Dispatch",
        tag: "High Value",
        desc: "Repurpose the real-time tracking and dispatch engine for prescription drug delivery with HIPAA audit logs."
      },
      {
        title: "White-Label Courier Fleet Software",
        tag: "Turnkey Agency",
        desc: "License out the React Native driver app and admin dashboard to local courier companies for $299/month per fleet."
      }
    ]
  },
  {
    id: "sounddrop",
    name: "SoundDrop",
    tagline: "Music licensing marketplace with automated stem split payments and browser audio waveform editor.",
    category: "Creator Economy & Audio",
    personaMatch: "Indie Hackers & Students",
    badge: "Clean Intellectual Property",
    founded: "2024",
    died: "Jan 2026",
    burnedAmount: 180000,
    originalDevCost: 90000,
    bundlePrice: 1600,
    stealthMode: false,
    verified: true,
    codeHealthScore: 95,
    founderName: "Lucas Romero",
    managerialTitle: "Founder & Audio Engineer",
    founderQuote: "We built an in-browser WebAudio stem mixer and Stripe Connect split payout system for beatmakers, but music licensing legalities stalled our marketing.",
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
        title: "Dark Neon Creator Studio UI Kit",
        screens: "36 screens",
        components: "120+ audio sliders, mixers, waveforms",
        price: 400,
        desc: "Cyberpunk music producer aesthetics, licensing contract generator modals."
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
        optIn: "Organic YouTube tutorial community",
        price: 250,
        desc: "Content creators looking for royalty-free stems and background beats."
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
      tldr: "Producers loved uploading tracks, but video creators were terrified of YouTube copyright strikes despite our automated license certificates.",
      whatWorked: "The zero-latency browser stem mixer was praised by thousands of Reddit producers.",
      theFatalMistake: "Did not build an automated Content ID integration with YouTube before launching paid licenses.",
      lessonsForBuyer: "Pivot this platform into game sound effects (SFX) or AI voice training dataset marketplace where copyright is far simpler."
    },
    aiPivots: [
      {
        title: "AI Voice Actor & SFX Marketplace",
        tag: "Trending AI",
        desc: "Use the WebAudio player to buy and sell verified AI voice training datasets and sound effect packs for game devs."
      },
      {
        title: "Podcast & Video Editor Audio Stems",
        tag: "Low Risk",
        desc: "Target freelance video editors on Upwork with modular background ambient stems with zero Content-ID risk."
      },
      {
        title: "Beat Battle & Community Remix Platform",
        tag: "Community",
        desc: "Turn into a freemium social remix platform where producers compete and sell project stems directly."
      }
    ]
  },
  {
    id: "zenith-health",
    name: "Zenith Health",
    tagline: "HIPAA-ready telehealth consultation platform with asynchronous triage & e-prescriptions.",
    category: "HealthTech",
    personaMatch: "Agencies & Enterprises",
    badge: "Enterprise Grade Code",
    founded: "2023",
    died: "Nov 2025",
    burnedAmount: 520000,
    originalDevCost: 195000,
    bundlePrice: 3800,
    stealthMode: false,
    verified: true,
    codeHealthScore: 97,
    founderName: "Dr. Alistair Ross & Sarah Lin",
    managerialTitle: "Medical Director & Lead Architect",
    founderQuote: "We built an airtight HIPAA-compliant video consultation and clinical intake system with encrypted patient records, but state medical licensing friction throttled our expansion.",
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
      tldr: "Medical board cross-state licensing regulations made scaling patient-doctor matching too expensive for our seed runway.",
      whatWorked: "The intake form builder and asynchronous triage reduced doctor charting time by 52%.",
      theFatalMistake: "Tried to launch multi-state general telemedicine instead of a focused niche like dermatology or mental health.",
      lessonsForBuyer: "Repurpose this software for vet consultations, personal fitness coaching, or a single-state dermatology clinic."
    },
    aiPivots: [
      {
        title: "Tele-Veterinary Care for Pets",
        tag: "No Medical Board Red Tape",
        desc: "Deploy the exact same consultation & prescription workflow for pet owners to consult veterinarians remotely."
      },
      {
        title: "AI-Powered Executive Health Coaching",
        tag: "B2B High Ticket",
        desc: "Sell asynchronous health triage and nutritionist matching to corporations as a high-ticket employee perk."
      },
      {
        title: "Single-Specialty Clinic White Label",
        tag: "Turnkey Medical",
        desc: "Sell to aesthetic clinics or physical therapists needing a custom portal instead of clunky legacy software."
      }
    ]
  },
  {
    id: "nomaddesk",
    name: "NomadDesk",
    tagline: "Coworking on demand: micro-space booking platform with IoT smart lock access codes.",
    category: "PropTech & Micro-SaaS",
    personaMatch: "Solo Builders & Students",
    badge: "Instant Revenue Potential",
    founded: "2024",
    died: "Dec 2025",
    burnedAmount: 75000,
    originalDevCost: 38000,
    bundlePrice: 1100,
    stealthMode: false,
    verified: true,
    codeHealthScore: 94,
    founderName: "Rohan Varma",
    managerialTitle: "Solo Founder & Mobile Dev",
    founderQuote: "We connected 18 independent cafes and boutique workspaces with automatic Tuya IoT smart door locks, but negotiating cafe partner rev-share took too long.",
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
        desc: "Clean Airbnb-style UI for browsing local workspace desks."
      },
      domain: {
        name: "nomaddesk.co",
        da: 21,
        expiry: "Jan 2027",
        price: 200
      },
      waitlist: {
        count: "1,200 remote workers & digital nomads",
        optIn: "Substack & meetup community",
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
      tldr: "Remote workers loved booking desks, but cafe managers frequently forgot to keep reserved tables free during peak lunch hours.",
      whatWorked: "The automated door lock PIN integration had 99.8% reliability. Users loved checking in seamlessly.",
      theFatalMistake: "Partnered with busy public cafes instead of dedicated private condo amenities or unused office boardrooms.",
      lessonsForBuyer: "Target vacant residential condo clubhouse rooms or corporate meeting rooms instead of cafes."
    },
    aiPivots: [
      {
        title: "Residential Condo Amenity Booking",
        tag: "B2B SaaS",
        desc: "Sell this booking + smart lock software to apartment building HOA managers to monetize tennis courts, gyms, and conference rooms."
      },
      {
        title: "Podcast & Music Rehearsal Studio Rental",
        tag: "High Hourly Rate",
        desc: "Apply the smart lock automated entry to self-serve hourly podcast recording studios."
      },
      {
        title: "Private Soundproof Booth Network",
        tag: "Office Niche",
        desc: "Deploy pods in transit hubs and use this software for 30-minute private phone call reservations."
      }
    ]
  },
  {
    id: "devpulse",
    name: "DevPulse Analytics",
    tagline: "Engineering team health and Git workflow bottleneck telemetry dashboard.",
    category: "Developer Tools",
    personaMatch: "Dev Agencies & CTOs",
    badge: "99% Code Coverage",
    founded: "2023",
    died: "Feb 2026",
    burnedAmount: 240000,
    originalDevCost: 110000,
    bundlePrice: 1950,
    stealthMode: false,
    verified: true,
    codeHealthScore: 99,
    founderName: "Vikram Sengupta & Alex Wright",
    managerialTitle: "CTO & Staff Data Engineer",
    founderQuote: "We built GitHub webhook parsers and DORA metrics calculation engines with 99% test coverage, but Enterprise sales cycles dragged on for 9+ months.",
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
        title: "Dark Mode DevOps Data Visualization UI Kit",
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
        count: "840 tech leads and engineering managers",
        optIn: "Substack dev blog readers",
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
      tldr: "Engineering managers loved our beta, but Enterprise infosec reviews required SOC2 Type II certifications that we could not afford on our remaining runway.",
      whatWorked: "The PR bottleneck detection accurately flagged code reviews waiting > 24 hours.",
      theFatalMistake: "Tried to sell directly to Enterprise companies with 1,000+ engineers instead of targeting fast-moving 20-person startup teams.",
      lessonsForBuyer: "Repackage this as an open-source core with a lightweight hosted SaaS tier for small startups who do not require custom SOC2 audits."
    },
    aiPivots: [
      {
        title: "AI Code Review Copilot Bottleneck Tracker",
        tag: "AI Developer Tool",
        desc: "Combine these DORA metrics with an LLM that reads slow PRs and explains why they are stuck in review."
      },
      {
        title: "Freelance Dev Agency Performance Audit Tool",
        tag: "Agency SaaS",
        desc: "Sell to non-technical clients hiring agencies on Upwork so they can audit whether their external dev team is actually delivering code."
      },
      {
        title: "Open Source Community Health Dashboard",
        tag: "DevRel",
        desc: "Provide public analytics for open source repositories to attract sponsorship and cloud hosting partnerships."
      }
    ]
  }
];

export const COMMUNITY_ROASTS = [
  {
    id: "roast-1",
    author: "Kunal S.",
    role: "Former Founder",
    project: "StudyBunk — Tinder for finding college study partners",
    burn: "$35,000",
    status: "Shutting Down",
    pitch: "We built a React Native app matching students by university courses and study habits. 12,000 student signups, but zero revenue because students refused to pay $3/month.",
    aiPivot: "Pivot into an AI Homework Study Room where students pay with micro-tokens for AI problem explanations, or sell the React Native chat code to campus clubs.",
    upvotes: 42,
    comments: [
      { user: "Sarah T.", text: "Never charge broke college students! Sell the student user database or turn the matching engine into a mentor-matching tool for alumni associations." },
      { user: "DevRahul", text: "Is the WebRTC video study room code for sale? I'd buy that component for $400 right now for my tutoring startup." }
    ]
  },
  {
    id: "roast-2",
    author: "Elena Rostova",
    role: "Solo Dev",
    project: "PromptVault — Browser extension saving ChatGPT prompts",
    burn: "$8,000 & 4 months",
    status: "Pivoting",
    pitch: "Built a slick Chrome extension with cloud sync and tags. Had 4,500 users, but OpenAI launched native GPT search and memory, making our core extension redundant overnight.",
    aiPivot: "Repurpose the encrypted local storage and team sharing engine for internal company prompt compliance and secret redaction (preventing employees from pasting API keys).",
    upvotes: 38,
    comments: [
      { user: "Alex B.", text: "B2B security compliance is the way. Companies will pay $15/seat to ensure employees don't leak confidential data into AI chats." }
    ]
  }
];

export const PRESENTATION_INFO = {
  title: "DeadStartup",
  subtitle: "Turning Startup Failures into Founders' Second Chances",
  slogan: "Every dead startup has a heartbeat left – we just flip it.",
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
      desc: "Global startup ecosystem valuation across tech and venture-backed companies."
    },
    sam: {
      usd: "$100 Billion",
      inr: "₹8.3 Lakh Crore",
      label: "Serviceable Available Market",
      desc: "~90% of 305M startups fail annually ≈ 275M failed ventures leaving behind IP, codebases, domains, and assets."
    },
    som: {
      usd: "$600 Million",
      inr: "₹5,000 Crore+",
      label: "Serviceable Obtainable Market (India First)",
      desc: "Targeting 50,000 failed startups annually in Bengaluru, Delhi NCR, and tier-1 tech hubs at average ₹1 lakh per liquidation deal."
    }
  },
  businessModel: {
    commission: "5% - 15% success-based transaction fee on asset liquidation",
    featuredListing: "₹2,000 / $25 flat fee for verified badge & priority discovery",
    conciergeTransfer: "Escrow holding, automated IP assignment contract generation, and guided repo transfer",
    paidAddOns: "Due diligence audits, AI valuation reports, and optional developer onboarding hours"
  }
};
