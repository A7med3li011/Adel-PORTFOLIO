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
