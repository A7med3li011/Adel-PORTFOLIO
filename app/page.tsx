"use client";

import Image from "next/image";
import ProjectsSection from "./components/ProjectsSection";
import ArticlesSection from "./components/ArticlesSection";
import QuickNav from "./components/QuickNav";
import ContactSuggestions from "./components/ContactSuggestions";
import EnhancedTestimonials from "./components/EnhancedTestimonials";
import { useTheme } from "./components/ThemeProvider";
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  type ReactNode,
} from "react";

// ─── Scroll-Reveal Component (IntersectionObserver, GPU-only) ────────────────
// Uses only opacity + translateY (composited properties) → zero layout thrash.

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Count-Up Component ──────────────────────────────────────────────────────

function CountUp({
  target,
  suffix = "",
  duration = 1200,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) {
          setStarted(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── Back-to-Top Button ──────────────────────────────────────────────────────

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
}

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

const articles = [
  {
    id: 1,
    title: "From 21s to 7s: Optimizing a Zero-Knowledge Authentication Flow",
    thumbnail: "/assets/images/articles/article1.jpg",
    url: "https://medium.com/@adelmostafamohamed12/from-21s-to-7s-optimizing-a-zero-knowledge-authentication-flow-7dee3ffd9115",
    readTime: "8 min read",
    category: "Performance",
  },
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

// ─── Employment type color map ───────────────────────────────────────────────
const typeColors: Record<string, string> = {
  Contract: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  "Part-time": "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  "Full-time":
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  "Side Project":
    "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  Freelance: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
};

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    title: "Create and Develop MTA for Android OS (feasibility study)",
    image: "/assets/images/testimonials/testimonial1.jpg",
  },
  {
    title: "Flutter Mobile Developer Needed for App Enhancement",
    image: "/assets/images/testimonials/testimonial2.jpg",
  },
  {
    title: "Consultations",
    image: "/assets/images/testimonials/testimonial3.jpg",
  },
  {
    title: "Freelance Mobile App Developer for MVP Messaging Application",
    image: "/assets/images/testimonials/testimonial4.jpg",
  },
];

// ─── How I Work — each item now has its own icon color ────────────────────────
const howIWork = [
  {
    title: "Architecture First",
    description:
      "I plan data flow and state boundaries before writing code. Clean Architecture, SOLID, and clear separation of concerns prevent half the bugs before they happen.",
    iconColor:
      "bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-400 border border-blue-500/20",
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
    iconColor:
      "bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 text-emerald-400 border border-emerald-500/20",
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
    iconColor:
      "bg-gradient-to-br from-amber-500/20 to-amber-600/20 text-amber-400 border border-amber-500/20",
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
    iconColor:
      "bg-gradient-to-br from-purple-500/20 to-purple-600/20 text-purple-400 border border-purple-500/20",
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
    <ScrollReveal className="mb-10 md:mb-16 text-center">
      <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
        {label}
      </span>
      <h2
        className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </h2>
      {/* Wider underline (was w-16, now w-20) */}
      <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
    </ScrollReveal>
  );
}

// ─── Copy-to-Clipboard Button ────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    },
    [text],
  );

  return (
    <button
      onClick={handleCopy}
      className="ml-auto shrink-0 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <svg
          className="w-4 h-4 text-emerald-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <svg
          className="w-4 h-4"
          style={{ color: "var(--text-muted)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      )}
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // ── Timeline draw-down animation ──
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = timelineRef.current;
    const line = timelineLineRef.current;
    if (!container || !line) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // How far through the container we've scrolled
      const scrolled = Math.max(0, viewportHeight - containerTop);
      const progress = Math.min(scrolled / containerHeight, 1);

      line.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main
      className="overflow-x-hidden transition-colors duration-300"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
      id="main-content"
      role="main"
    >
      {/* Quick Navigation — NOTE: Add backdrop-filter: blur(12px) and semi-transparent bg in QuickNav component */}
      <QuickNav
        sections={[
          "about",
          "experience",
          "projects",
          "articles",
          "skills",
          "contact",
        ]}
      />

      {/* Back to Top */}
      <BackToTop />

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
          {/* Text — staggered entrance via CSS animation */}
          <div className="order-2 md:order-1">
            {/* "Available" badge — moved closer to headline (mb-4 instead of mb-6) */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4 hero-entrance"
              style={{ animationDelay: "0ms" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1
              className="text-xl sm:text-2xl md:text-[1.7rem] lg:text-3xl font-bold leading-tight mb-4 hero-entrance"
              style={{ animationDelay: "100ms" }}
            >
              I am a <span className="gradient-text">software engineer</span>{" "}
              with experience building{" "}
              <span className="gradient-text">real applications</span>.
            </h1>
            <p
              className={`text-base sm:text-lg md:text-xl font-medium mb-6 hero-entrance ${isDark ? "text-gray-400" : "text-gray-600"}`}
              style={{ animationDelay: "200ms" }}
            >
              Flutter engineer shipping production apps in healthcare, fintech,
              and F&amp;B across Egypt, UAE, Saudi Arabia, and the USA.
            </p>

            {/* Proof pills */}
            <div
              className="flex flex-wrap gap-2 mb-8 hero-entrance"
              style={{ animationDelay: "300ms" }}
            >
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

            {/* CTA Buttons — clear hierarchy: primary / secondary / ghost */}
            <div
              className="flex flex-wrap gap-4 mb-10 hero-entrance"
              style={{ animationDelay: "400ms" }}
            >
              {/* PRIMARY — View Projects */}
              <a
                href="#projects"
                className="px-6 py-3 min-h-[44px] rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#030712] active:scale-[0.98] inline-flex items-center justify-center"
                aria-label="View projects section"
              >
                View Projects
              </a>
              {/* SECONDARY — Download CV (outline + file details) */}
              <a
                href="/assets/Adel_Mostafa_CV.pdf"
                download
                className={`px-6 py-3 min-h-[44px] rounded-xl border font-semibold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#030712] active:scale-[0.98] inline-flex items-center justify-center gap-2 ${
                  isDark
                    ? "border-gray-600 text-gray-200 hover:border-blue-500/50 hover:text-white"
                    : "border-gray-300 text-gray-700 hover:border-blue-500/50 hover:text-blue-600"
                }`}
                aria-label="Download CV as PDF"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
                <span className="text-xs opacity-60 font-normal">(PDF)</span>
              </a>
            </div>
          </div>

          {/* Photo — restored glow animation */}
          <div
            className="order-1 md:order-2 flex justify-center md:justify-end hero-entrance"
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative mx-14 sm:mx-10 md:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 blur-2xl opacity-20 scale-110" />
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
              {/* Floating badge: Upwork Top Rated */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl border shadow-xl animate-float"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
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
              {/* Floating badge: Specialty +4 Years */}
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
              {/* Floating badge: Writing · Medium */}
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
            <ScrollReveal className="md:col-span-2">
              {/* Key entity names bolded for scanning */}
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
              {/* Short gradient divider — 10px, fades out */}
              <div className="h-[2px] w-[10px] rounded-full bg-gradient-to-r from-blue-500 to-transparent mb-6" />
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Over the past 4 years I&apos;ve shipped production apps for
                clients across Egypt,{" "}
                <span
                  style={{ color: "var(--text-primary)" }}
                  className="font-semibold"
                >
                  UAE, Saudi Arabia, and the USA
                </span>{" "}
                — including{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Colada
                </span>{" "}
                (50,000+ deals),{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Priceless Medical
                </span>{" "}
                (30+ clinics), and{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Tansieq
                </span>{" "}
                (Saudi Ministry of Hajj). I architected{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  MemoryChat
                </span>{" "}
                from scratch using Drift + PowerSync + Supabase for a fully
                offline-capable chat experience with real-time sync.
              </p>
              {/* Short gradient divider — 10px, fades out */}
              <div className="h-[2px] w-[10px] rounded-full bg-gradient-to-r from-blue-500 to-transparent mb-6" />
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                I hold a B.Sc. in Computing and Data Science from Alexandria
                University and a CCNA certification. I&apos;m Top Rated on
                Upwork with a track record spanning healthcare, fintech,
                F&amp;B, and government sectors.
              </p>
            </ScrollReveal>

            {/* Stats cards — with count-up animation */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 4, suffix: "+", label: "Years Experience" },
                { value: 6, suffix: "+", label: "Shipped Apps" },
                { value: 4, suffix: "", label: "Countries" },
              ].map(({ value, suffix, label }, i) => (
                <ScrollReveal key={label} delay={i * 100}>
                  <div className="gradient-border rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300">
                    <p className="text-2xl font-bold gradient-text mb-1">
                      <CountUp target={value} suffix={suffix} />
                    </p>
                    <p
                      style={{ color: "var(--text-muted)" }}
                      className="text-xs"
                    >
                      {label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
              <ScrollReveal delay={300}>
                <div className="gradient-border rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300">
                  <p className="text-2xl font-bold gradient-text mb-1">
                    Top Rated
                  </p>
                  <p style={{ color: "var(--text-muted)" }} className="text-xs">
                    On Upwork
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── How I Work — OPEN LAYOUT (no card borders) ──── */}
      <section
        id="how-i-work"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle label="Process" title="How I Work" isDark={isDark} />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {howIWork.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="flex items-start gap-5">
                  {/* Each icon has its own color */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.iconColor}`}
                  >
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience — LEFT-BORDER ACCENT cards + color-coded types ──── */}
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

          <div className="relative" ref={timelineRef}>
            {/* Timeline line — draws down on scroll via scaleY */}
            <div
              ref={timelineLineRef}
              className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500/0 hidden md:block origin-top"
              style={{ transform: "scaleY(0)" }}
            />

            <div className="space-y-8">
              {experience.map((job, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="relative md:pl-16 group">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 hidden md:block group-hover:scale-125 transition-transform duration-300"
                      style={{ borderColor: "var(--bg-primary)" }}
                    />

                    {/* Card: left-border accent, no full border */}
                    <div
                      className="rounded-2xl p-6 transition-all duration-300 border-l-[3px] border-blue-500/60 hover:border-blue-400"
                      style={{
                        background: isDark
                          ? "rgba(255,255,255,0.02)"
                          : "rgba(0,0,0,0.02)",
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3
                            className="text-xl font-bold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {job.role}
                          </h3>
                          <div className="flex items-center gap-3 flex-wrap mt-1">
                            {/* Company name as text link instead of button */}
                            {job.url ? (
                              <a
                                href={job.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 font-semibold hover:text-blue-300 underline underline-offset-2 decoration-blue-500/30 hover:decoration-blue-400/60 transition-colors duration-200"
                              >
                                {job.company}
                              </a>
                            ) : (
                              <p className="text-blue-400 font-semibold">
                                {job.company}
                              </p>
                            )}
                            {"clients" in job &&
                              job.clients?.map((c) => (
                                <a
                                  key={c.name}
                                  href={c.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-purple-400 font-semibold text-sm underline underline-offset-2 decoration-purple-500/30 hover:decoration-purple-400/60 hover:text-purple-300 transition-colors duration-200"
                                >
                                  {c.name}
                                </a>
                              ))}
                          </div>
                        </div>
                        <div className="text-right">
                          {/* Color-coded employment type */}
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-1 ${typeColors[job.type] || "bg-blue-500/10 text-blue-400 border border-blue-500/20"}`}
                          >
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
                            style={{
                              color: "var(--text-muted)",
                              opacity: 0.7,
                            }}
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
                            {/* Slightly larger bullet dot */}
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500/70 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
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

          <EnhancedTestimonials testimonials={testimonials} isDark={isDark} />

          <p
            className="text-center text-xs mt-6"
            style={{ color: "var(--text-muted)" }}
          >
            Quotes reflect feedback from Upwork reviews. Full reviews available
            on my Upwork profile.
          </p>
        </div>
      </section>

      {/* ── Skills (tiered) — tighter spacing, bigger Daily Driver chips ── */}
      <section
        id="skills"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="Tech Stack" title="Skills" isDark={isDark} />

          {/* Reduced gap from space-y-6 to space-y-4 */}
          <div className="space-y-4">
            {skillTiers.map(({ label, sub, color, skills }, tierIndex) => {
              const c = colorMap[color];
              const isDailyDrivers = label === "Daily Drivers";
              return (
                <ScrollReveal key={label} delay={tierIndex * 100}>
                  <div
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
                      {skills.map((skill, si) => (
                        <span
                          key={skill}
                          className={`rounded-lg font-medium border transition-all duration-200 hover:scale-105 cursor-default ${c.badge} ${
                            isDailyDrivers
                              ? "px-4 py-2 text-base"
                              : "px-3 py-1.5 text-sm"
                          } skill-chip-enter`}
                          style={{
                            animationDelay: `${si * 30}ms`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Education — SIDE BY SIDE, compact inline layout ── */}
      <section
        id="education"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="Academic" title="Education" isDark={isDark} />

          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {/* BSc */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                <div>
                  <h3
                    className="text-base font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    B.Sc. Computing and Data Science
                  </h3>
                  <p className="text-blue-400 font-semibold text-sm">
                    Alexandria University
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Alexandria, Egypt · Oct 2021 – June 2025
                  </p>
                </div>
              </div>

              {/* CCNA */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                <div>
                  <h3
                    className="text-base font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    CCNA Network Certificate
                  </h3>
                  <p className="text-blue-400 font-semibold text-sm">
                    NTI / Creativa — Cisco
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Alexandria, Egypt · Sep 2023 – Nov 2023
                  </p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                    Cisco Certified
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact — horizontal bars, email highlighted as preferred ── */}
      <section
        id="contact"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="Get in Touch" title="Contact" isDark={isDark} />

          {/* Contact Suggestions */}
          <ContactSuggestions />

          {/* Availability banner — slightly more prominent */}
          <ScrollReveal>
            <div className="mb-8 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
              <div className="flex items-center gap-2">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </span>
                <span
                  className="text-sm font-semibold"
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
                  className="text-sm font-semibold"
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
          </ScrollReveal>

          {/* Contact methods — horizontal bar layout */}
          <div className="space-y-3">
            {[
              {
                icon: (
                  <svg
                    className="w-5 h-5"
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
                preferred: true,
                copyable: true,
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5"
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
                preferred: false,
                copyable: false,
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5"
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
                preferred: false,
                copyable: false,
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 3.5l7.5 4.5v8l-7.5 4.5L4 16V8l7.5-4.5z" />
                  </svg>
                ),
                label: "Upwork",
                value: "Top Rated Flutter Developer",
                href: "https://www.upwork.com/freelancers/~your-profile-id",
                color: "emerald",
                preferred: false,
                copyable: false,
              },
            ].map(
              ({ icon, label, value, href, color, preferred, copyable }, i) => (
                <ScrollReveal key={label} delay={i * 80}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 group ${
                      preferred
                        ? "bg-blue-500/10 border border-blue-500/20 hover:border-blue-400/40"
                        : "hover:bg-white/[0.02]"
                    }`}
                    style={
                      !preferred
                        ? {
                            borderBottom: `1px solid var(--border-color)`,
                          }
                        : undefined
                    }
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                        color === "blue"
                          ? "bg-blue-500/10 text-blue-400"
                          : color === "emerald"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-purple-500/10 text-purple-400"
                      }`}
                    >
                      {icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p
                          className="text-xs"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {label}
                        </p>
                        {preferred && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-500/20 text-blue-400">
                            Preferred
                          </span>
                        )}
                      </div>
                      <p
                        className="font-medium text-sm truncate"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {value}
                      </p>
                    </div>
                    {copyable && <CopyButton text={value} />}
                  </a>
                </ScrollReveal>
              ),
            )}
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

      {/* ── Global CSS for hero entrance + skill chip stagger ── */}
      <style jsx global>{`
        /* Hero staggered entrance — runs once on page load */
        .hero-entrance {
          animation: heroFadeUp 0.6s ease both;
        }
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Skill chip stagger — purely decorative, no layout shift */
        .skill-chip-enter {
          animation: chipIn 0.4s ease both;
        }
        @keyframes chipIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </main>
  );
}
