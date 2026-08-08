"use client";

import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-16 md:py-24 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="Academic" title="Education" />

        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {/* BSc */}
            <div
              className="flex gap-4 items-start rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(14,90,78,0.08)", border: "1px solid rgba(14,90,78,0.18)", color: "#0E5A4E" }}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div>
                <h3
                  className="text-base font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  B.Sc. Computing and Data Science
                </h3>
                <p className="text-[#0E5A4E] font-semibold text-sm">
                  Alexandria University
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  Alexandria, Egypt · Oct 2021 – June 2025
                </p>
              </div>
            </div>

            {/* CCNA */}
            <div
              className="flex gap-4 items-start rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(14,90,78,0.08)", border: "1px solid rgba(14,90,78,0.18)", color: "#0E5A4E" }}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3
                  className="text-base font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  CCNA Network Certificate
                </h3>
                <p className="text-[#0E5A4E] font-semibold text-sm">
                  NTI / Creativa — Cisco
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  Alexandria, Egypt · Sep 2023 – Nov 2023
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
