"use client";

import { colorMap, skillTiers } from "../../data/skills";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-6 transition-colors duration-300"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="Tech Stack" title="Skills" />

        <div className="space-y-4">
          {skillTiers.map(({ label, sub, color, skills }, tierIndex) => {
            const c = colorMap[color];
            const isDailyDrivers = label === "Daily Drivers";
            return (
              <ScrollReveal key={label} delay={tierIndex * 100}>
                <div
                  className={`gradient-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 ${c.glow}`}
                >
                  <div className="flex items-baseline gap-3 mb-4 flex-wrap">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${c.label}`}
                    >
                      {label}
                    </span>
                    <span
                      className="text-xs italic"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {sub}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, si) => (
                      <span
                        key={skill}
                        className={`rounded-lg font-medium border transition-all duration-200 hover:scale-105 cursor-default ${c.badge} ${
                          isDailyDrivers
                            ? "px-4 py-2 text-base"
                            : "px-3 py-1.5 text-sm"
                        } skill-chip-enter`}
                        style={{
                          animationDelay: `${si * 30}ms`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
