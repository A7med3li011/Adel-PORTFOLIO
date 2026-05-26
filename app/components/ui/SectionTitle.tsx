"use client";

import { useTheme } from "../ThemeProvider";
import ScrollReveal from "./ScrollReveal";

export default function SectionTitle({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
      <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
    </ScrollReveal>
  );
}
