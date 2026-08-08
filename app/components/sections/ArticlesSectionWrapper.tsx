"use client";

import { articles } from "../../data/articles";
import ArticlesSection from "../ArticlesSection";
import SectionTitle from "../ui/SectionTitle";

export default function ArticlesSectionWrapper() {
  return (
    <section
      id="articles"
      className="py-16 md:py-24 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="Writing" title="Articles" />
        <ArticlesSection articles={articles} />
      </div>
    </section>
  );
}
