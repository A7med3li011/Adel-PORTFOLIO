"use client";

import Image from "next/image";
import { skillTiers } from "../../data/skills";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";

/**
 * Tiers are laid out per column (not row-by-row) so the short tiers stack under
 * "Daily Drivers" / "Working Knowledge" instead of leaving gaps beside the long
 * "Production Experience" card. Any tier not listed here falls into the last column.
 */
const columnLayout: string[][] = [
  ["Daily Drivers", "Monitoring & Analytics"],
  ["Production Experience"],
  ["Working Knowledge", "Process & Collaboration"],
];

export default function SkillsSection() {
  const placed = new Set(columnLayout.flat());
  const columns = columnLayout.map((labels, columnIndex) => {
    const tiers = labels
      .map((label) => skillTiers.find((tier) => tier.label === label))
      .filter((tier) => tier !== undefined);
    if (columnIndex === columnLayout.length - 1) {
      tiers.push(...skillTiers.filter((tier) => !placed.has(tier.label)));
    }
    return tiers;
  });

  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-10 md:mb-16 text-center">
          <SectionTitle label="" title="My Skills" center />
          {/* Gaber "My Skils" decorative cap */}
          <Image
            src="/assets/design/group-29.webp"
            alt=""
            aria-hidden="true"
            width={120}
            height={98}
            className="inline-block opacity-90"
            style={{ marginTop: "-38px", marginLeft: "150px" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {columns.map((tiers, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-6">
              {tiers.map(({ label, sub, skills }, rowIndex) => (
                <ScrollReveal
                  key={label}
                  delay={(columnIndex + rowIndex * columns.length) * 120}
                >
                  <div
                    className={`rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200 hover:shadow-lg border`}
                  >
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ color: "#0E5A4E" }}
                    >
                      {label}
                    </h3>
                    <p className="text-xs mb-5" style={{ color: "#6a6d76" }}>
                      {sub}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-md text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                          style={{
                            color: "#0E5A4E",
                            background: "#ffffff",
                            borderColor: "rgba(14,90,78,0.18)",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}