export type ProjectItem = {
  name: string;
  description: string;
  tech: string[];
  images: string[];
  demo: string;
  highlight: boolean;
  demoAndroid?: string;
  demoIos?: string;
  featured?: boolean;
  impact?: string;
  caseStudy?: string;
  category?: string;
  complexity?: string;
  downloads?: number;
  metrics?: string[];
  architecture?: string;
};

export const projects: ProjectItem[] = [
  {
    name: "MemoryChat",
    description:
      "Offline-first chat and note-taking app. Drift ORM + PowerSync + Supabase for bidirectional sync. Architected from scratch with zero-knowledge encryption. Reduced login time by 66% (21s → 7s) by profiling and migrating RSA key generation to Go. Full case study available.",
    tech: ["Flutter", "Drift ORM", "PowerSync", "Supabase", "Go"],
    images: [
      "/assets/images/memorychat/memory1.png",
      "/assets/images/memorychat/memory2.png",
      "/assets/images/memorychat/memory3.png",
      "/assets/images/memorychat/memory4.png",
    ],
    demo: "https://memorychat.app/ar/",
    demoAndroid:
      "https://play.google.com/store/apps/details?id=app.memorychat.app&hl=en",
    highlight: true,
    featured: true,
    downloads: 1000,
    impact: "Built from scratch — full offline-first architecture",
    caseStudy: "https://medium.com/@adelmostafamohamed12/from-21s-to-7s-optimizing-a-zero-knowledge-authentication-flow-7dee3ffd9115",
    category: "Productivity",
    complexity: "Advanced",
    metrics: [
      "Reduced login time by 66% (21s → 7s)",
      "Cut RSA key generation from ~7s to ~200ms",
      "Eliminated redundant database queries with upserts",
      "Full offline capability with bidirectional sync",
    ],
    architecture: "Drift (local) + PowerSync + Supabase/Postgres, Go native RSA keygen, offline queue + reconcile-on-reconnect",
  },
  {
    name: "Colada",
    description:
      "Exclusive restaurant & cafe offers app for the Saudi market. Real-time deal updates, cashback rewards, coupon system, coffee subscription flow, and deep link integration. Optimized app startup performance from 28-30s to 13-16s cold-start.",
    tech: ["Flutter", "Dart", "REST APIs", "Deep Links", "Meta Ads"],
    images: [
      "/assets/images/colada/colada2.jpg",
      "/assets/images/colada/colada1.jpg",
      "/assets/images/colada/colada3.jpg",
      "/assets/images/colada/colada4.jpg",
    ],
    demo: "https://coladaApp.io/en/",
    demoAndroid:
      "https://play.google.com/store/apps/details?id=com.colada.coladaapp&hl=en",
    demoIos:
      "https://apps.apple.com/us/app/colada-%D9%83%D9%88%D9%84%D8%A7%D8%AF%D8%A7/id1608914841",
    highlight: true,
    featured: true,
    downloads: 150000,
    impact: "150K+ downloads across platforms",
    category: "F&B",
    complexity: "Advanced",
    metrics: [
      "50K+ Android downloads · 100K+ iOS downloads",
      "Cut cold-start time from 28-30s to 13-16s",
      "Reduced API calls from 24 to 17 unique requests",
      "Built coupons system + coffee subscription flow",
      "Integrated Meta Ads for user acquisition",
    ],
    architecture: "Parallelized sequential API calls, eliminated duplicate requests, BLoC state management",
  },
  {
    name: "Priceless Medical",
    description:
      "UAE's first smart healthcare savings platform. Integrated Stripe subscriptions, deep linking for offer redemption, surgical quotation scope, and partner clinic management. Built payment flows, subscription lifecycle handling, and clinic-to-patient communication.",
    tech: ["Flutter", "Stripe", "Deep Links", "In-App Purchases", "REST APIs"],
    images: [
      "/assets/images/priceless/priceless1.png",
      "/assets/images/priceless/priceless2.png",
      "/assets/images/priceless/priceless3.png",
      "/assets/images/priceless/priceless4.png",
    ],
    demo: "https://pricelessmed.com/",
    demoAndroid:
      "https://play.google.com/store/apps/details?id=com.app.pricelessmed&hl=ar",
    demoIos: "https://apps.apple.com/eg/app/pricelessmed/id6745231670",
    highlight: true,
    featured: true,
    downloads: 50000,
    impact: "50K+ downloads · 30+ partner clinics across the UAE",
    category: "Fintech",
    complexity: "Advanced",
    metrics: [
      "10K+ Android downloads · 40K+ iOS downloads",
      "Integrated Stripe subscriptions with webhook handling",
      "Built deep link routing for offer-to-app redemption",
      "Surgical quotation scope for clinic pricing",
      "Improved subscription retention flows",
    ],
    architecture: "Stripe webhooks for subscription events, deep link routing layer, BLoC for payment state",
  },
  {
    name: "CHAQT",
    description:
      "Expert monetization platform enabling professionals to monetize knowledge through text and voice messages. Built IAP for paid expert access, real-time chat, voice messaging, and privacy-focused communication with transparent pricing.",
    tech: ["Flutter", "In-App Purchases", "Real-time Chat", "Voice Messages", "REST APIs"],
    images: [
      "/assets/images/chaqt/chaqt1.jpg",
      "/assets/images/chaqt/chaqt2.jpg",
      "/assets/images/chaqt/chaqt3.png",
      "/assets/images/chaqt/chaqt4.png",
      "/assets/images/chaqt/chaqt5.jpg",
    ],
    demo: "https://apps.apple.com/eg/app/chaqt/id6743349098",
    demoIos: "https://apps.apple.com/eg/app/chaqt/id6743349098",
    highlight: true,
    featured: true,
    downloads: 1000,
    impact: "Privacy-focused expert consultation platform",
    category: "Business",
    complexity: "Advanced",
    metrics: [
      "Built real-time chat with voice messaging",
      "Implemented IAP for expert access payments",
      "Privacy-focused communication design",
      "Transparent pricing for expert services",
    ],
    architecture: "Real-time chat backend, IAP receipt validation, voice message streaming, BLoC state management",
  },
  {
    name: "Tansieq",
    description:
      "Saudi Ministry of Hajj — drone and visual detection system for reporting camp, tent, and infrastructure issues during Hajj operations. Built cross-platform mobile app for real-time issue reporting, geotagged photo uploads, and dashboard integration.",
    tech: ["Flutter", "Dart", "Computer Vision", "Geolocation", "REST APIs"],
    images: [
      "/assets/images/tasniq/1.png",
      "/assets/images/tasniq/2.png",
      "/assets/images/tasniq/3.png",
      "/assets/images/tasniq/4.png",
      "/assets/images/tasniq/5.png",
    ],
    demo: "#",
    highlight: true,
    featured: true,
    impact: "Government project · Ministry of Hajj · Real-time incident reporting",
    category: "Government",
    complexity: "Expert",
    metrics: [
      "Real-time geotagged issue reporting",
      "Offline-capable photo capture & upload queue",
      "Integrated with drone detection dashboard",
      "Supported Hajj operations monitoring",
    ],
    architecture: "MVVM + BLoC state management, offline-first image queue, geofencing for camp boundaries",
  },
  {
    name: "Patria",
    description:
      "Cafe and restaurant app for easy ordering, special offers, and location-based selection. Built for iOS and Android.",
    tech: ["Flutter", "Dart", "Firebase"],
    images: [
      "/assets/images/patria/patria3.png",
      "/assets/images/patria/patria1.png",
      "/assets/images/patria/patria2.png",
    ],
    demo: "#",
    highlight: false,
    featured: false,
    category: "F&B",
    complexity: "Intermediate",
  },
  {
    name: "Request",
    description:
      "Contractors and project management app with budget tracking, team collaboration, and performance analytics.",
    tech: ["React.js", "Node.js", "MongoDB"],
    images: [
      "/assets/images/request/req1.png",
      "/assets/images/request/req2.png",
      "/assets/images/request/req3.png",
      "/assets/images/request/req4.png",
    ],
    demo: "#",
    highlight: false,
    featured: false,
    category: "Productivity",
    complexity: "Intermediate",
  },
  {
    name: "T-Chat",
    description:
      "Task management and team collaboration app with shared tasks, calendar view, and performance analytics.",
    tech: ["React.js", "Node.js", "Socket.io"],
    images: [
      "/assets/images/chat/Chat1.png",
      "/assets/images/chat/Chat2.png",
      "/assets/images/chat/Chat3.png",
      "/assets/images/chat/Chat4.png",
    ],
    demo: "#",
    highlight: false,
    featured: false,
    category: "Productivity",
    complexity: "Intermediate",
  },
  {
    name: "Ninja",
    description:
      "Delivery and ERP system with order management, real-time tracking, attendance, and employee management.",
    tech: ["React.js", "Node.js", "MongoDB"],
    images: [
      "/assets/images/ninja/ninja1.png",
      "/assets/images/ninja/ninja2.png",
      "/assets/images/ninja/ninja3.png",
      "/assets/images/ninja/ninja4.png",
    ],
    demo: "#",
    highlight: false,
    featured: false,
    category: "Logistics",
    complexity: "Advanced",
  },
  {
    name: "Quran",
    description:
      "Quran reading app with Surah navigation, recitation timing, favorites, and Arabic typography.",
    tech: ["React.js", "Tailwind CSS"],
    images: ["/assets/images/quran/q1.png", "/assets/images/quran/q2.png"],
    demo: "#",
    highlight: false,
    featured: false,
    category: "Education",
    complexity: "Beginner",
  },
  {
    name: "Space",
    description:
      "Medical library app for medical students with lecture summaries, study materials, and order management.",
    tech: ["React.js", "Next.js", "Node.js"],
    images: [
      "/assets/images/space/sp1.png",
      "/assets/images/space/sp2.png",
      "/assets/images/space/sp3.png",
      "/assets/images/space/sp4.png",
    ],
    demo: "#",
    highlight: false,
    featured: false,
    category: "Education",
    complexity: "Intermediate",
  },
];
