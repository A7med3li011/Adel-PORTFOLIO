"use client";

import { useEffect, useRef } from "react";
import { experience, typeColors } from "../../data/experience";
import { useTheme } from "../ThemeProvider";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";

export default function ExperienceSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = timelineRef.current;
    const line = timelineLineRef.current;
    if (!container || !line) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const scrolled = Math.max(0, viewportHeight - containerTop);
      const progress = Math.min(scrolled / containerHeight, 1);

      line.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-6 transition-colors duration-300"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="Work History" title="Experience" />

        <div className="relative" ref={timelineRef}>
          <div
            ref={timelineLineRef}
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500/0 hidden md:block origin-top"
            style={{ transform: "scaleY(0)" }}
          />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative md:pl-16 group">
                  <div
                    className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 hidden md:block group-hover:scale-125 transition-transform duration-300"
                    style={{ borderColor: "var(--bg-primary)" }}
                  />

                  <div
                    className="rounded-2xl p-6 transition-all duration-300 border-l-[3px] border-blue-500/60 hover:border-blue-400"
                    style={{
                      background: isDark
                        ? "rgba(255,255,255,0.02)"
                        : "rgba(0,0,0,0.02)",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3
                          className="text-xl font-bold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-3 flex-wrap mt-1">
                          {job.url ? (
                            <a
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 font-semibold hover:text-blue-300 underline underline-offset-2 decoration-blue-500/30 hover:decoration-blue-400/60 transition-colors duration-200"
                            >
                              {job.company}
                            </a>
                          ) : (
                            <p className="text-blue-400 font-semibold">
                              {job.company}
                            </p>
                          )}
                          {job.clients?.map((c) => (
                            <a
                              key={c.name}
                              href={c.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-400 font-semibold text-sm underline underline-offset-2 decoration-purple-500/30 hover:decoration-purple-400/60 hover:text-purple-300 transition-colors duration-200"
                            >
                              {c.name}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-1 ${typeColors[job.type] || "bg-blue-500/10 text-blue-400 border border-blue-500/20"}`}
                        >
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
                          style={{
                            color: "var(--text-muted)",
                            opacity: 0.7,
                          }}
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
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500/70 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
