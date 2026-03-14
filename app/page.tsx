"use client";

import Image from "next/image";
import ProjectsSection from "./components/ProjectsSection";
import { useTheme } from "./components/ThemeProvider";

// ─── Data ────────────────────────────────────────────────────────────────────

const experience = [
  {
    company: "Colada",
    role: "Flutter Developer",
    period: "January 2026 – Present",
    location: "Saudi Arabia (Remote)",
    type: "Full-time",
    url: "https://coladaapp.io/en/",
    points: [
      "Built and maintained the Colada consumer app — an exclusive restaurant and cafe offers platform with 10,000+ active deals and cashback rewards across Riyadh.",
      "Integrated dynamic offer feeds, deep links, and real-time deal updates using Flutter and REST APIs.",
    ],
  },
  {
    company: "MemoryChat",
    role: "Flutter Developer",
    period: "June 2025 – Present",
    location: "Alexandria, Egypt",
    type: "Full-time",
    url: "https://memorychat.app/ar/",
    points: [
      "Architected an offline-first chat application using Drift ORM for local storage and PowerSync for bidirectional sync with Supabase (PostgreSQL) backends.",
      "Implemented real-time messaging with Supabase Realtime subscriptions and conflict-free data handling.",
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
      "Delivered new features including DeepLinks, in-app Subscriptions, and Stripe payment integration for the UAE's first smart healthcare savings platform.",
      "Maintained and optimized the app serving clinics and hospitals across the UAE.",
    ],
  },
  {
    company: "TopProz",
    role: "Flutter Developer",
    period: "June 2025 – September 2025",
    location: "USA, California (Remote)",
    type: "Full-time",
    url: "https://topproz.com/",
    points: [
      "Developed and maintained cross-platform mobile applications using Flutter for Android and iOS.",
      "Built responsive UIs, integrated RESTful APIs, and collaborated with product managers and designers to deliver new features.",
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
      "Led mobile development across multiple client projects, applying MVVM and BLoC to deliver apps on time and within budget.",
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
    name: "Colada",
    description:
      "Exclusive restaurant & cafe offers app with 10,000+ active deals and cashback rewards across Riyadh. Built with Flutter, featuring deep links and real-time deal updates.",
    tech: ["Flutter", "Dart", "REST APIs", "Deep Links"],
    images: [
      "/assets/images/colada/colada2.jpg",
      "/assets/images/colada/colada1.jpg",
      "/assets/images/colada/colada3.jpg",
      "/assets/images/colada/colada4.jpg",
    ],
    demo: "https://coladaApp.io/en/",
    highlight: true,
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
    highlight: true,
  },
  {
    name: "Patria",
    description:
      "A comprehensive cafe and restaurant app for easy ordering, special offers, and location-based selection. Built for iOS and Android.",
    tech: ["Flutter", "Dart", "Firebase"],
    images: [
      "/assets/images/patria/patria3.png",
      "/assets/images/patria/patria1.png",
      "/assets/images/patria/patria2.png",
    ],
    demo: "#",
    highlight: true,
  },
  {
    name: "Tansieq",
    description:
      "Ministry of Saudi Hajj — comprehensive Hajj management system with pilgrim tracking, statistics, and service management.",
    tech: ["React.js", "Tailwind CSS"],
    images: [
      "/assets/images/tasniq/1.png",
      "/assets/images/tasniq/2.png",
      "/assets/images/tasniq/3.png",
      "/assets/images/tasniq/4.png",
      "/assets/images/tasniq/5.png",
    ],
    demo: "#",
    highlight: true,
  },
  {
    name: "T-Chat",
    description:
      "Task management and team collaboration app with shared tasks, calendar view, and performance analytics.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.io"],
    images: [
      "/assets/images/chat/Chat1.png",
      "/assets/images/chat/Chat2.png",
      "/assets/images/chat/Chat3.png",
      "/assets/images/chat/Chat4.png",
    ],
    demo: "#",
    highlight: true,
  },
  {
    name: "Chess",
    description:
      "Interactive chess game with checkmate detection, move validation, and clean game interface.",
    tech: ["React.js", "JavaScript"],
    images: [
      "/assets/images/chess/chess1.png",
      "/assets/images/chess/chess2.png",
      "/assets/images/chess/chess3.png",
    ],
    demo: "#",
    highlight: true,
  },
  {
    name: "Ninja",
    description:
      "Delivery and ERP system with order management, real-time tracking, attendance, and employee management.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    images: [
      "/assets/images/ninja/ninja1.png",
      "/assets/images/ninja/ninja2.png",
      "/assets/images/ninja/ninja3.png",
      "/assets/images/ninja/ninja4.png",
    ],
    demo: "#",
    highlight: true,
  },
  {
    name: "Quran",
    description:
      "Quran reading app with Surah navigation, recitation timing, favorites, and beautiful Arabic typography.",
    tech: ["React.js", "Tailwind CSS"],
    images: ["/assets/images/quran/q1.png", "/assets/images/quran/q2.png"],
    demo: "#",
    highlight: true,
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
    highlight: true,
  },
];

const skillGroups = [
  {
    label: "Mobile Development",
    color: "blue",
    skills: [
      "Flutter",
      "Dart",
      "BLoC",
      "Cubit",
      "Riverpod",
      "Provider",
      "MVVM",
      "Animations",
      "Localization",
      "Deep Links",
      "Push Notifications",
      "In-App Purchases",
      "Stripe",
    ],
  },
  {
    label: "Backend & Databases",
    color: "emerald",
    skills: [
      "Node.js",
      "Express.js",
      "Supabase (PostgreSQL)",
      "Firebase",
      "Drift ORM",
      "PowerSync",
      "RESTful APIs",
    ],
  },
  {
    label: "Testing",
    color: "purple",
    skills: [
      "Flutter Test",
      "Unit & Widget Testing",
      "Integration Testing",
      "Mockito",
    ],
  },
  {
    label: "DevOps & CI/CD",
    color: "amber",
    skills: [
      "GitHub Actions",
      "Codemagic",
      "App Store Connect",
      "Google Play Console",
      "Git",
      "Docker",
    ],
  },
  {
    label: "Architecture & AI",
    color: "rose",
    skills: [
      "SOLID Principles",
      "OOP",
      "Design Patterns",
      "Offline-First",
      "Real-Time Data",
      "N8N",
      "AI Agents",
      "RAGs",
    ],
  },
  {
    label: "Project Management",
    color: "blue",
    skills: ["Jira", "Trello", "Plane", "Agile", "Scrum"],
  },
];

const colorMap: Record<string, { badge: string; label: string }> = {
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    label: "text-blue-400 border-blue-500/30 bg-blue-500/5",
  },
  purple: {
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    label: "text-purple-400 border-purple-500/30 bg-purple-500/5",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    label: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
  },
  amber: {
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    label: "text-amber-400 border-amber-500/30 bg-amber-500/5",
  },
  rose: {
    badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    label: "text-rose-400 border-rose-500/30 bg-rose-500/5",
  },
};

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

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Hi, I&apos;m <span className="gradient-text">Adel Mostafa</span>
            </h1>

            <p
              className={`text-lg sm:text-xl md:text-2xl font-medium mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Flutter Developer · Mobile Software Engineer
            </p>

            <p
              className={`leading-relaxed mb-8 max-w-md ${isDark ? "text-gray-500" : "text-gray-500"}`}
            >
              Flutter developer with 3+ years of experience building
              cross-platform iOS &amp; Android apps for clients across Egypt,
              UAE, Saudi Arabia, and the USA. <span className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Top Rated on Upwork.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="/assets/images/Adel_Mostafa_Software Engineer (2).pdf"
                download
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className={`px-6 py-3 rounded-xl border font-semibold transition-all duration-300 hover:-translate-y-0.5 ${isDark
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
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 blur-2xl opacity-30 scale-110" />
              {/* Border ring */}
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
              {/* Floating badges */}
              <div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl border shadow-xl animate-float"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                }}
              >
                <p
                  className="text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Experience
                </p>
                <p
                  className="text-sm font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  3+ Years
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
                <p
                  className="text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
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
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          <span>Scroll down</span>
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
                I&apos;m a Flutter Developer and Mobile Software Engineer with
                3+ years of hands-on experience building cross-platform iOS and
                Android applications. I hold a B.Sc. in Computing and Data
                Science from Alexandria University (2021–2025) and a CCNA
                network certificate.
              </p>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                I&apos;ve delivered production apps for clients across Egypt,
                UAE, Saudi Arabia, and the USA — working with companies like
                MDARJ, Priceless Medical, Colada, MemoryChat, and TopProz. I
                specialize in real-time data architectures, offline-first
                solutions, and scalable mobile UIs.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                I&apos;m Top Rated on Upwork with a proven track record in
                healthcare, food &amp; beverage, government, and fintech
                sectors.
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "6+", label: "Companies" },
                { value: "Flutter", label: "Core Stack" },
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

      {/* ── Experience ───────────────────────────────────── */}
      <section
        id="experience"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="Work History" title="Experience" isDark={isDark} />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden md:block" />

            <div className="space-y-10">
              {experience.map((job, i) => (
                <div key={i} className="relative md:pl-16 group">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 hidden md:block group-hover:scale-125 transition-transform duration-300"
                    style={{ borderColor: "var(--bg-secondary)" }}
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
                          {/* View button */}
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
                          {/* Extra client links for Upwork */}
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
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle label="Portfolio" title="Projects" isDark={isDark} />
          <ProjectsSection projects={projects} />
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────── */}
      <section
        id="skills"
        className="py-16 md:py-24 px-6 transition-colors duration-300"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle label="Tech Stack" title="Skills" isDark={isDark} />

          <div className="space-y-6">
            {skillGroups.map(({ label, color, skills }) => {
              const c = colorMap[color];
              return (
                <div key={label} className="gradient-border rounded-2xl p-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${c.label}`}
                  >
                    {label}
                  </span>
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
            {/* University */}
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
                <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                  Alexandria, Egypt
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
                    Oct 2021 – June 2025
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium border border-purple-500/20">
                    Graduation Grade: Good
                  </span>
                </div>
              </div>
            </div>

            {/* CCNA */}
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
                <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
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

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Cards */}
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
                href: "mailto:adelmostafamohamed12@gmail.com",
                color: "blue",
              },
              {
                icon: (
                  /* WhatsApp icon */
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
                label: "WhatsApp",
                value: "+20 122 240 2998",
                href: "https://wa.me/201222402998",
                color: "green",
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
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${color === "blue"
                    ? "bg-blue-500/10 text-blue-400"
                    : color === "green"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-purple-500/10 text-purple-400"
                    }`}
                >
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>
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

          {/* CTA Banner */}
          <div className="mt-12 rounded-2xl p-6 md:p-8 text-center bg-linear-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20">
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Let&apos;s build something great together
            </h3>
            <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
              Open to full-time and freelance opportunities.
            </p>
            <a
              href="mailto:adelmostafamohamed12@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Send an Email
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
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
          &copy; {new Date().getFullYear()} Adel Mostafa. Built with Next.js &
          Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
