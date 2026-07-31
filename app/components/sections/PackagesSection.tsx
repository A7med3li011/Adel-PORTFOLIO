"use client";

import { packages } from "../../data/packages";
import { useTheme } from "../ThemeProvider";
import CopyButton from "../ui/CopyButton";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";

export default function PackagesSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="packages"
      className="py-16 md:py-24 px-6 transition-colors duration-300"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="Open Source" title="Packages" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {packages.map((pkg) => (
            <ScrollReveal key={pkg.name}>
              <div
                className={`h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "bg-[#0f172a]/50 border-gray-800/50 hover:shadow-xl"
                    : "bg-white border-gray-200 hover:shadow-lg"
                }`}
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
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
                      <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
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
                  {pkg.pubPoints && (
                    <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                      {pkg.pubPoints.granted}/{pkg.pubPoints.max} pub points
                    </span>
                  )}
                  {pkg.platforms.map((platform) => (
                    <span
                      key={platform}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? "bg-gray-800/70 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
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
                      className={`px-2 py-1 rounded-full text-xs ${
                        isDark
                          ? "bg-blue-900/30 text-blue-300"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      #{topic}
                    </span>
                  ))}
                </div>

                {/* Install snippet */}
                <div
                  className={`mt-5 flex items-center gap-2 rounded-xl border px-3 py-2 ${
                    isDark
                      ? "bg-black/30 border-gray-800"
                      : "bg-gray-50 border-gray-200"
                  }`}
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
                    className="flex-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    View on pub.dev
                  </a>
                  {pkg.repoUrl && (
                    <a
                      href={pkg.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center px-4 py-3 rounded-xl font-semibold border transition-all duration-300 hover:-translate-y-0.5 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                        isDark
                          ? "border-gray-700 text-gray-200 hover:bg-gray-800/60"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
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
