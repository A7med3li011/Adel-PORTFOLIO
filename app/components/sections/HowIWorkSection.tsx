"use client";

import { howIWork } from "../../data/howIWork";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";

export default function HowIWorkSection() {
  return (
    <section
      id="how-i-work"
      className="py-16 md:py-24 px-6 transition-colors duration-300"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="Process" title="How I Work" />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {howIWork.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="flex items-start gap-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.iconColor}`}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
