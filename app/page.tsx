"use client";

import QuickNav from "./components/QuickNav";
import AboutSection from "./components/sections/AboutSection";
import ArticlesSectionWrapper from "./components/sections/ArticlesSectionWrapper";
import EducationSection from "./components/sections/EducationSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import Footer from "./components/sections/Footer";
import HeroSection from "./components/sections/HeroSection";
import PackagesSection from "./components/sections/PackagesSection";
import SkillsSection from "./components/sections/SkillsSection";
import BackToTop from "./components/ui/BackToTop";

export default function Home() {
  return (
    <main
      className="overflow-x-hidden transition-colors duration-300 bg-white"
      style={{ color: "var(--text-primary)" }}
      id="main-content"
      role="main"
    >
      <QuickNav
        sections={[
          "about",
          "experience",
          "articles",
          "packages",
          "skills",
        ]}
      />

      <BackToTop />

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ArticlesSectionWrapper />
      <PackagesSection />
      <SkillsSection />
      <EducationSection />
      <Footer />

      {/* CTA pointing to /projects */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: "#fffaf6" }}
      >
        <p className="text-lg mb-4" style={{ color: "#1c1d20" }}>
          See the apps I&apos;ve shipped for clients across the US, UAE, Saudi
          Arabia &amp; Egypt.
        </p>
        <a href="/projects" className="btn-pill" aria-label="View all projects">
          View My Projects
        </a>
      </section>
    </main>
  );
}