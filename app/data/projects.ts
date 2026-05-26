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
};

export const projects: ProjectItem[] = [
  {
    name: "MemoryChat",
    description:
      "Offline-first chat and note-taking app. Drift ORM + PowerSync + Supabase for bidirectional sync. Full case study available.",
    tech: ["Flutter", "Drift ORM", "PowerSync", "Supabase"],
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
    impact: "Built from scratch — full offline-first architecture",
    caseStudy: "/projects/memorychat",
    category: "Healthcare",
    complexity: "Advanced",
  },
  {
    name: "Colada",
    description:
      "Exclusive restaurant & cafe offers app for the Saudi market. Real-time deal updates, cashback rewards, and deep link integration.",
    tech: ["Flutter", "Dart", "REST APIs", "Deep Links"],
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
    impact: "50,000+ active deals across Riyadh",
    category: "F&B",
    complexity: "Advanced",
  },
  {
    name: "Priceless Medical",
    description:
      "UAE's first smart healthcare savings platform. Stripe subscriptions, deep links, and surgical quotation scope for partner clinics.",
    tech: ["Flutter", "Stripe", "Deep Links", "Subscriptions"],
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
    impact: "30+ partner clinics & hospitals across the UAE",
    category: "Fintech",
    complexity: "Advanced",
  },
  {
    name: "CHAQT",
    description:
      "Expert monetization platform enabling professionals to monetize knowledge through text and voice messages. Direct, paid access to experts with privacy-focused communication and transparent pricing.",
    tech: ["Flutter", "In-App Purchases", "Real-time Chat", "Voice Messages"],
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
    impact: "Privacy-focused expert consultation platform",
    category: "Business",
    complexity: "Advanced",
  },
  {
    name: "Tansieq",
    description:
      "Saudi Ministry of Hajj — drone and visual detection system for reporting camp, tent, and infrastructure issues during Hajj operations.",
    tech: ["Flutter", "Dart", "Computer Vision"],
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
    impact: "Government project · Ministry of Hajj",
    category: "Government",
    complexity: "Expert",
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
