"use client";

import { articles } from "../../data/articles";
import ArticlesSection from "../ArticlesSection";
import SectionTitle from "../ui/SectionTitle";
import { useTheme } from "../ThemeProvider";

export default function ArticlesSectionWrapper() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="articles"
      className="py-16 md:py-24 px-6 transition-colors duration-300"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="Writing" title="Articles" />
        <ArticlesSection articles={articles} isDark={isDark} />
      </div>
    </section>
  );
}
