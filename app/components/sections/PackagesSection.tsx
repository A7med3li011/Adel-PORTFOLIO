"use client";

import { packages } from "../../data/packages";
import CopyButton from "../ui/CopyButton";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";

export default function PackagesSection() {
  return (
    <section
      id="packages"
      className="py-16 md:py-24 px-6"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="Open Source" title="Packages" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {packages.map((pkg) => (
            <ScrollReveal key={pkg.name}>
              <div
                className="h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200 hover:shadow-lg"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(14,90,78,0.08)", border: "1px solid rgba(14,90,78,0.18)", color: "#0E5A4E" }}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        className="text-lg font-bold font-mono break-all"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {pkg.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#0E5A4E]/10 text-[#0E5A4E] text-xs font-medium border border-[#0E5A4E]/20">
                        v{pkg.version}
                      </span>
                    </div>
                    <p
                      className="text-xs mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Published on pub.dev
                      {pkg.license ? ` · ${pkg.license} License` : ""}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {pkg.description}
                </p>

                {/* Highlights */}
                {pkg.highlights && (
                  <ul className="mt-4 space-y-2">
                    {pkg.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {pkg.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-2 py-1 rounded-full text-xs font-medium bg-[#0E5A4E]/10 text-[#0E5A4E] border border-[#0E5A4E]/20"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                {/* Topics */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {pkg.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 rounded-full text-xs bg-[#0E5A4E]/10 text-[#0E5A4E] border border-[#0E5A4E]/20"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>

                {/* Install snippet */}
                <div
                  className="mt-5 flex items-center gap-2 rounded-xl border px-3 py-2 bg-gray-50 border-gray-200"
                >
                  <code
                    className="text-xs md:text-sm font-mono truncate"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {pkg.install}
                  </code>
                  <CopyButton text={pkg.install} />
                </div>

                {/* Actions */}
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={pkg.pubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#0e5a4e] to-[#0b463f] hover:from-[#0b463f] hover:to-[#0e5a4e] text-white font-semibold transition-all duration-300 shadow-lg shadow-[#0e5a4e]/25 hover:shadow-[#0e5a4e]/40 hover:-translate-y-0.5 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e5a4e]"
                  >
                    View on pub.dev
                  </a>
                  {pkg.repoUrl && (
                    <a
                      href={pkg.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-3 rounded-xl font-semibold border transition-all duration-300 hover:-translate-y-0.5 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e5a4e] border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                      Source on GitHub
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
