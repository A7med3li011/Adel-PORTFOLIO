export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  url?: string;
  clients?: { name: string; url: string }[];
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Colada",
    role: "Flutter Developer",
    period: "January 2026 – Present",
    location: "Saudi Arabia (Remote)",
    type: "Contract",
    url: "https://coladaapp.io/en/",
    points: [
      "Build and maintain the Colada consumer app — an exclusive restaurant and cafe offers platform serving 50,000+ active deals and cashback rewards across Riyadh.",
      "Integrated dynamic offer feeds, deep links, and real-time deal updates using Flutter and REST APIs; app live on App Store and Google Play.",
      "Optimized list rendering and image caching to reduce deal-feed load time and improve scroll performance on low-end Android devices.",
    ],
  },
  {
    company: "Priceless Medical",
    role: "Flutter Developer",
    period: "July 2025 – March 2026",
    location: "UAE (Remote)",
    type: "Part-time",
    url: "https://pricelessmed.com/",
    points: [
      "Delivered revenue-critical features including Deep Links, in-app Subscriptions, and Stripe payment integration for the UAE's first smart healthcare savings platform, serving 30+ partner clinics and hospitals.",
      "Maintained and optimized the production app, debugging payment edge cases and improving subscription retention flows.",
      "Collaborated async with a distributed team, shipping features on a weekly release cadence.",
    ],
  },
  {
    company: "TopProz",
    role: "Flutter Developer",
    period: "June 2025 – September 2025",
    location: "USA, California (Remote)",
    type: "Contract",
    url: "https://topproz.com/",
    points: [
      "Developed cross-platform iOS and Android features for a US-market service and project management app using Flutter and MVVM architecture.",
      "Built responsive UIs, integrated RESTful APIs, and collaborated with product managers and designers on new feature delivery.",
      "Contributed to code reviews and established component patterns reused across multiple screens.",
    ],
  },
  {
    company: "MemoryChat",
    role: "Flutter Developer",
    period: "June 2025 – Present",
    location: "Alexandria, Egypt",
    type: "Side Project",
    url: "https://memorychat.app/ar/",
    points: [
      "Architected an offline-first chat and note-taking application using Drift ORM for local storage and PowerSync for bidirectional sync with a Supabase (PostgreSQL) backend.",
      "Implemented real-time messaging with Supabase Realtime subscriptions and conflict-free data handling for concurrent edits.",
      "Designed a resilient sync layer that queues operations offline and reconciles automatically on reconnect.",
    ],
  },
  {
    company: "MDARJ",
    role: "Flutter Developer",
    period: "May 2024 – June 2025",
    location: "Alexandria, Egypt",
    type: "Full-time",
    url: "https://www.mdarj.org/ar",
    points: [
      "Led mobile development across multiple client projects, applying MVVM and BLoC patterns to deliver apps on time and within scope.",
      "Contributed to the Tansieq project for the Saudi Ministry of Hajj — a drone/visual detection system for reporting camp, tent, and infrastructure issues.",
      "Mentored junior developers on state management, clean architecture, and Git workflows.",
      "Standardized project scaffolding and reusable widgets across teams, reducing new-project setup time.",
    ],
  },
  {
    company: "Upwork (Freelance)",
    role: "Flutter Developer",
    period: "January 2023 – Present",
    location: "Remote",
    type: "Freelance",
    url: "https://www.upwork.com/nx/find-work/",
    clients: [
      { name: "BidFood", url: "https://bidfoodhome.ae/" },
      { name: "T2", url: "https://t2.sa/" },
    ],
    points: [
      "Top Rated Flutter Developer on Upwork. Clients: Bidfood CRM (UAE) · T2 (Saudi Arabia) · CHAQT (UAE).",
      "T2: AI automation chat app — admins send voice/text commands to trigger AI-driven task management via N8N workflows.",
      "Bidfood & CHAQT: Feature development and bug fixes on live production apps across the UAE market.",
      "Delivered apps end-to-end: UI, REST API integration, state management (BLoC / Riverpod), app store deployment, Node.js backend support.",
    ],
  },
];

export const typeColors: Record<string, string> = {
  Contract: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  "Part-time": "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  "Full-time":
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  "Side Project":
    "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  Freelance: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
};
