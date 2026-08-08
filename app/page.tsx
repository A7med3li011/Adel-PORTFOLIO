"use client";

import QuickNav from "./components/QuickNav";
import AboutSection from "./components/sections/AboutSection";
import ArticlesSectionWrapper from "./components/sections/ArticlesSectionWrapper";
import EducationSection from "./components/sections/EducationSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import Footer from "./components/sections/Footer";
import HeroSection from "./components/sections/HeroSection";
import PackagesSection from "./components/sections/PackagesSection";
import ProjectsSectionWrapper from "./components/sections/ProjectsSectionWrapper";
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
          "projects",
          "packages",
          "skills",
        ]}
      />

      <BackToTop />

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ArticlesSectionWrapper />
      <ProjectsSectionWrapper seeMoreHref="/projects" />
      <PackagesSection />
      <SkillsSection />
      <EducationSection />
      <Footer />

      {/* CTA pointing to /projects */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: "#fffaf6" }}
      >
        <p style={{ color: "#6a6d76", fontSize: "1.125rem" }}>
          <span className="font-bold">&copy;</span> Adel Mostafa
        </p>
      </section>
    </main>
  );
}