"use client";

import { testimonials } from "../../data/testimonials";
import EnhancedTestimonials from "../EnhancedTestimonials";
import SectionTitle from "../ui/SectionTitle";
import { useTheme } from "../ThemeProvider";

export default function TestimonialsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 px-6 transition-colors duration-300"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="Client Feedback" title="Testimonials" />

        <EnhancedTestimonials testimonials={testimonials} isDark={isDark} />

        <p
          className="text-center text-xs mt-6"
          style={{ color: "var(--text-muted)" }}
        >
          Quotes reflect feedback from Upwork reviews. Full reviews available on
          my Upwork profile.
        </p>
      </div>
    </section>
  );
}
