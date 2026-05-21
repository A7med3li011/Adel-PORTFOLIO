"use client";

import Image from "next/image";
import ProjectsSection from "./components/ProjectsSection";
import ArticlesSection from "./components/ArticlesSection";
import { useTheme } from "./components/ThemeProvider";

// ─── Data ────────────────────────────────────────────────────────────────────

const experience = [
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

const projects = [
  // ─── FEATURED (production apps) ───────────────────
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
  },

  // ─── OTHER WORK (side projects, older work) ───────
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
  },
];

const articles = [
  {
    id: 1,
    title: "From 21s to 7s: Optimizing a Zero-Knowledge Authentication Flow",
    thumbnail: "/assets/images/articles/article1.jpg",
    url: "https://medium.com/@adelmostafamohamed12/from-21s-to-7s-optimizing-a-zero-knowledge-authentication-flow-7dee3ffd9115"
  }
];

// ─── Tiered skills ────────────────────────────────────────────────────────────
const skillTiers = [
  {
    label: "Daily Drivers",
    sub: "Deep production experience, 3+ years",
    color: "blue",
    skills: [
      "Flutter",
      "Dart",
      "BLoC",
      "Cubit",
      "Riverpod",
      "Clean Architecture",
      "MVVM",
    ],
  },
  {
    label: "Production Experience",
    sub: "Shipped real features with these in the last year",
    color: "emerald",
    skills: [
      "Supabase (PostgreSQL)",
      "Drift ORM",
      "PowerSync",
      "Stripe",
      "In-App Purchases",
      "Deep Links",
      "Push Notifications",
      "Firebase",
      "REST APIs",
      "GitHub Actions",
      "Codemagic",
      "App Store Connect",
      "Google Play Console",
    ],
  },
  {
    label: "Working Knowledge",
    sub: "Comfortable using when needed",
    color: "purple",
    skills: [
      "Node.js",
      "Express.js",
      "Docker",
      "Git",
      "N8N",
      "AI Agents",
      "RAG",
      "Mockito",
      "Integration Testing",
    ],
  },
];

const colorMap: Record<string, { badge: string; label: string; glow: string }> =
  {
    blue: {
      badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      label: "text-blue-400 border-blue-500/30 bg-blue-500/5",
      glow: "shadow-blue-500/10",
    },
    purple: {
      badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      label: "text-purple-400 border-purple-500/30 bg-purple-500/5",
      glow: "shadow-purple-500/10",
    },
    emerald: {
      badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      label: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
      glow: "shadow-emerald-500/10",
    },
    amber: {
      badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      label: "text-amber-400 border-amber-500/30 bg-amber-500/5",
      glow: "shadow-amber-500/10",
    },
    rose: {
      badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      label: "text-rose-400 border-rose-500/30 bg-rose-500/5",
      glow: "shadow-rose-500/10",
    },
  };

// ─── Testimonials (from Upwork / clients) ─────────────────────────────────────
const testimonials = [
  {
    quote:
      "Adel is an exceptional Flutter developer. Delivered our features on time, communicated clearly across time zones, and his code quality was outstanding.",
    author: "Upwork Client",
    role: "Bidfood CRM, UAE",
  },
  {
    quote:
      "One of the best mobile engineers we've worked with. His architectural thinking around offline-first sync saved us weeks of debugging.",
    author: "Upwork Client",
    role: "T2, Saudi Arabia",
  },
  {
    quote:
      "Professional, fast, and thorough. Handled complex Stripe subscription edge cases without needing hand-holding.",
    author: "Upwork Client",
    role: "CHAQT, UAE",
  },
];

// ─── How I Work ───────────────────────────────────────────────────────────────
const howIWork = [
  {
    title: "Architecture First",
    description:
      "I plan data flow and state boundaries before writing code. Clean Architecture, SOLID, and clear separation of concerns prevent half the bugs before they happen.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
  },
  {
    title: "Test-Covered Critical Paths",
    description:
      "Unit, widget, and integration tests on anything involving money, sync, or data integrity. I don't test everything — I test what matters.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    title: "CI/CD From Day One",
    description:
      "GitHub Actions and Codemagic set up at project kickoff — automated builds, test runs, and store deployments. No hotfix surprises at 2 AM.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    ),
  },
  {
    title: "Ship, Measure, Iterate",
    description:
      "I'd rather ship a solid v1 and learn from real users than polish a perfect v0 in isolation. Then I measure, cut what's not working, and double down on what is.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function SectionTitle({
  label,
  title,
  isDark,
}: {
  label: string;
  title: string;
  isDark: boolean;
}) {
  return (
    <div className="mb-10 md:mb-16 text-center">
      <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
        {label}
      </span>
      <h2
        className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </h2>
      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className="overflow-x-hidden transition-colors duration-300"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              I am a <span className="gradient-text">software engineer</span>{" "}
              with experience building{" "}
              <span className="gradient-text">real applications</span>.
            </h1>
            <p
              className={`text-base sm:text-lg md:text-xl font-medium mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Flutter engineer shipping production apps in healthcare, fintech,
              and F&amp;B across Egypt, UAE, Saudi Arabia, and the USA.
            </p>

            {/* Proof pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold border border-amber-500/20">
                <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Top Rated on Upwork
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/20">
                6+ Shipped Apps
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold border border-blue-500/20">
                Live on App Store &amp; Google Play
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="/assets/Adel_Mostafa_CV.pdf"
                download
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className={`px-6 py-3 rounded-xl border font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? "border-gray-700 text-gray-300 hover:border-blue-500/50 hover:text-white"
                    : "border-gray-300 text-gray-700 hover:border-blue-500/50 hover:text-blue-600"
                }`}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative mx-14 sm:mx-10 md:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 blur-2xl opacity-30 scale-110" />
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-1 bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500 animate-pulse-glow">
                <div
                  className="w-full h-full rounded-full overflow-hidden"
                  style={{ background: "var(--bg-surface)" }}
                >
                  <Image
                    src="/assets/images/profile.jpeg"
                    alt="Adel Mostafa"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl border shadow-xl animate-float"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                }}
              >
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Specialty
                </p>
                <p
                  className="text-sm font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  +4 Years
                </p>
              </div>
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl border shadow-xl animate-float"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  animationDelay: "1s",
                }}
              >
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Upwork
                </p>
                <p
                  className="text-sm font-bold flex items-center gap-1"
                  style={{ color: isDark ? "#ffffff" : "#374151" }}
                >
                  <svg
                    className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Top Rated
                </p>
              </div>
              <div
                className="absolute top-12 -left-8 px-4 py-2 rounded-xl border shadow-xl animate-float"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  animationDelay: "0.5s",
                }}
              >
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Writing
                </p>
                <p
                  className="text-sm font-bold flex items-center gap-1"
                  style={{ color: isDark ? "#ffffff" : "#374151" }}
                >
                  <svg
                    className="w-3.5 h-3.5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  Medium
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          <div className="w-0.5 h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section
        id="about"
        className="py-16 md:py-24 px-6 relative transition-colors duration-300"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle label="About Me" title="Who I Am" isDark={isDark} />

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                I&apos;m a Flutter engineer with a specific focus:{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  offline-first architectures, real-time bidirectional sync, and
                  payment integrations
                </span>
                . These are the three hardest problems in production mobile
                apps, and they&apos;re where I spend most of my time.
              </p>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Over the past 4 years I&apos;ve shipped production apps for
                clients across Egypt, UAE, Saudi Arabia, and the USA — including
                Colada (50,000+ deals), Priceless Medical (30+ clinics), and
                Tansieq (Saudi Ministry of Hajj). I architected MemoryChat from
                scratch using Drift + PowerSync + Supabase for a fully
                offline-capable chat experience with real-time sync.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                I hold a B.Sc. in Computing and Data Science from Alexandria
                University and a CCNA certification. I&apos;m Top Rated on
                Upwork with a track record spanning healthcare, fintech,
                F&amp;B, and government sectors.
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "4+", label: "Years Experience" },
                { value: "6+", label: "Shipped Apps" },
                { value: "4", label: "Countries" },
                { value: "Top Rated", label: "On Upwork" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="gradient-border rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <p className="text-2xl font-bold gradient-text">{value}</p>
                  </div>
                  <p style={{ color: "var(--text-muted)" }} className="text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How I Work ───────────────────────────────────── */}
      <section
        id="how-i-work"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle label="Process" title="How I Work" isDark={isDark} />

          <div className="grid md:grid-cols-2 gap-6">
            {howIWork.map((item, i) => (
              <div
                key={item.title}
                className="gradient-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.5s ease both`,
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/20">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────── */}
      <section
        id="experience"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="Work History"
            title="Experience"
            isDark={isDark}
          />

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden md:block" />

            <div className="space-y-10">
              {experience.map((job, i) => (
                <div key={i} className="relative md:pl-16 group">
                  <div
                    className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 hidden md:block group-hover:scale-125 transition-transform duration-300"
                    style={{ borderColor: "var(--bg-primary)" }}
                  />

                  <div className="gradient-border rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3
                          className="text-xl font-bold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-3 flex-wrap mt-1">
                          <p className="text-blue-400 font-semibold">
                            {job.company}
                          </p>
                          {job.url && (
                            <a
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 hover:scale-105 shadow-sm shadow-blue-500/20"
                            >
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                              View
                            </a>
                          )}
                          {"clients" in job &&
                            job.clients?.map((c) => (
                              <a
                                key={c.name}
                                href={c.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-200"
                              >
                                {c.name}
                              </a>
                            ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 mb-1">
                          {job.type}
                        </span>
                        <p
                          className="text-sm"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {job.period}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "var(--text-muted)", opacity: 0.7 }}
                        >
                          {job.location}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────── */}
      <section
        id="projects"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle label="Portfolio" title="Projects" isDark={isDark} />
          <ProjectsSection projects={projects} />
        </div>
      </section>

      {/* ── Articles ─────────────────────────────────────── */}
      <section
        id="articles"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle label="Writing" title="Articles" isDark={isDark} />
          <ArticlesSection articles={articles} isDark={isDark} />
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section
        id="testimonials"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            label="Client Feedback"
            title="Testimonials"
            isDark={isDark}
          />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="gradient-border rounded-2xl p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.5s ease both`,
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <svg
                  className="w-8 h-8 text-blue-400/40 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {t.quote}
                </p>
                <div
                  className="pt-4 border-t"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t.author}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center text-xs mt-6"
            style={{ color: "var(--text-muted)" }}
          >
            Quotes reflect feedback from Upwork reviews. Full reviews available
            on my Upwork profile.
          </p>
        </div>
      </section>

      {/* ── Skills (tiered) ──────────────────────────────── */}
      <section
        id="skills"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="Tech Stack" title="Skills" isDark={isDark} />

          <div className="space-y-6">
            {skillTiers.map(({ label, sub, color, skills }) => {
              const c = colorMap[color];
              return (
                <div
                  key={label}
                  className={`gradient-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 ${c.glow}`}
                >
                  <div className="flex items-baseline gap-3 mb-4 flex-wrap">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${c.label}`}
                    >
                      {label}
                    </span>
                    <span
                      className="text-xs italic"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {sub}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default ${c.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Education ────────────────────────────────────── */}
      <section
        id="education"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="Academic" title="Education" isDark={isDark} />

          <div className="space-y-6">
            <div className="gradient-border rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center md:items-start hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  B.Sc. Computing and Data Science
                </h3>
                <p className="text-blue-400 font-semibold mb-2">
                  Alexandria University
                </p>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  Faculty of Computing and Data Science, Alexandria, Egypt
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
                    Oct 2021 – June 2025
                  </span>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center md:items-start hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  CCNA Network Certificate
                </h3>
                <p className="text-amber-400 font-semibold mb-2">
                  NTI / Creativa — Cisco
                </p>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  Alexandria, Egypt
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20">
                    Sep 2023 – Nov 2023
                  </span>
                  <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium border border-orange-500/20">
                    Cisco Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section
        id="contact"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="Get in Touch" title="Contact" isDark={isDark} />

          {/* Availability banner */}
          <div className="mb-8 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
            <div className="flex items-center gap-2">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Usually respond within 4 hours
              </span>
            </div>
            <span className="h-4 w-px bg-slate-700/50 hidden sm:block" />
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                Egypt · GMT+2
              </span>
            </div>
            <span className="h-4 w-px bg-slate-700/50 hidden sm:block" />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              Overlaps with EU, MENA &amp; US-East hours
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                label: "Email",
                value: "adelmostafamohamed12@gmail.com",
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=adelmostafamohamed12@gmail.com",
                color: "blue",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
                label: "LinkedIn",
                value: "Adel Mostafa",
                href: "https://www.linkedin.com/in/adel-mostafa-766296234/",
                color: "blue",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
                label: "GitHub",
                value: "Adelmostafa31",
                href: "https://github.com/Adelmostafa31/",
                color: "purple",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                ),
                label: "Portfolio",
                value: "adel-portfolio-three.vercel.app",
                href: "https://adel-portfolio-three.vercel.app/",
                color: "emerald",
              },
            ].map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="gradient-border rounded-2xl p-5 md:p-6 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group min-w-0"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    color === "blue"
                      ? "bg-blue-500/10 text-blue-400"
                      : color === "emerald"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-purple-500/10 text-purple-400"
                  }`}
                >
                  {icon}
                </div>
                <div className="min-w-0">
                  <p
                    className="text-xs mb-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="font-medium text-sm md:text-base truncate"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer
        className="py-8 px-6 text-center transition-colors duration-300"
        style={{
          borderTop: `1px solid var(--border-color)`,
          background: "var(--bg-primary)",
        }}
      >
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          &copy; {new Date().getFullYear()} Adel Mostafa · Currently shipping
          Colada &amp; writing about offline sync patterns.
        </p>
      </footer>
    </main>
  );
}
