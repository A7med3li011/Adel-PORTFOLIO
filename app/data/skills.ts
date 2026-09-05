export type SkillTier = {
  label: string;
  sub: string;
  color: keyof typeof colorMap;
  skills: string[];
};

export const skillTiers: SkillTier[] = [
  {
    label: "Daily Drivers",
    sub: "Deep production experience, 3+ years",
    color: "blue",
    skills: [
      "Flutter",
      "Flutter Web",
      "Dart",
      "Null Safety",
      "BLoC",
      "Cubit",
      "Riverpod",
      "Provider",
      "go_router",
      "Clean Architecture",
      "MVVM",
      "SOLID Principles",
      "OOP",
      "Design Patterns",
      "Dependency Injection (get_it, injectable)",
      "Material 3 & Cupertino",
      "Offline-First",
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
      "Hive",
      "Dio",
      "Stripe",
      "In-App Purchases",
      "Deep Links",
      "Push Notifications (FCM)",
      "Firebase",
      "REST APIs",
      "SQL",
      "NoSQL",
      "Real-Time Data",
      "Animations",
      "Localization",
      "Performance Optimization",
      "Flutter Test (Unit & Widget)",
      "GitHub Actions",
      "Fastlane",
      "App Store Connect",
      "Google Play Console",
      "Claude",
      "Cursor",
    ],
  },
  {
    label: "Working Knowledge",
    sub: "Comfortable using when needed",
    color: "purple",
    skills: [
      "Node.js",
      "Express.js",
      "Git",
      "Kotlin",
      "Swift (Platform Channels)",
      "Data Structures",
      "Integration Testing",
      "Manual Testing",
    ],
  },
  {
    label: "Monitoring & Analytics",
    sub: "Crash reporting, feedback and attribution in shipped apps",
    color: "amber",
    skills: [
      "Sentry",
      "Crashlytics",
      "Gleap",
      "Bugsee",
      "Shake",
      "AppsFlyer",
    ],
  },
  {
    label: "Process & Collaboration",
    sub: "How I plan, track and ship with a team",
    color: "rose",
    skills: ["Agile", "Scrum", "Jira", "Trello", "Plane", "Monday"],
  },
];

export const colorMap: Record<
  string,
  { badge: string; label: string; glow: string }
> = {
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
