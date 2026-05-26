"use client";

import QuickNav from "./components/QuickNav";
import AboutSection from "./components/sections/AboutSection";
import ArticlesSectionWrapper from "./components/sections/ArticlesSectionWrapper";
import ContactSection from "./components/sections/ContactSection";
import EducationSection from "./components/sections/EducationSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import Footer from "./components/sections/Footer";
import HeroSection from "./components/sections/HeroSection";
import HowIWorkSection from "./components/sections/HowIWorkSection";
import ProjectsSectionWrapper from "./components/sections/ProjectsSectionWrapper";
import SkillsSection from "./components/sections/SkillsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import BackToTop from "./components/ui/BackToTop";

export default function Home() {
  return (
    <main
      className="overflow-x-hidden transition-colors duration-300"
      style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
      id="main-content"
      role="main"
    >
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

      <BackToTop />

      <HeroSection />
      <AboutSection />
      <HowIWorkSection />
      <ExperienceSection />
      <ProjectsSectionWrapper />
      <ArticlesSectionWrapper />
      <TestimonialsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />

      <style jsx global>{`
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
