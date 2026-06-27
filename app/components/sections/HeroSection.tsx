"use client";

import Image from "next/image";
import { useTheme } from "../ThemeProvider";

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4 hero-entrance"
            style={{ animationDelay: "0ms" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1
            className="text-xl sm:text-2xl md:text-[1.7rem] lg:text-3xl font-bold leading-tight mb-4 hero-entrance"
            style={{ animationDelay: "100ms" }}
          >
            I am a <span className="gradient-text">software engineer</span>{" "}
            with experience building{" "}
            <span className="gradient-text">real applications</span>.
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl font-medium mb-6 hero-entrance ${isDark ? "text-gray-400" : "text-gray-600"}`}
            style={{ animationDelay: "200ms" }}
          >
            Flutter engineer shipping production apps in healthcare, fintech,
            and F&amp;B across Egypt, UAE, Saudi Arabia, and the USA.
          </p>

          {/* Proof pills */}
          <div
            className="flex flex-wrap gap-2 mb-8 hero-entrance"
            style={{ animationDelay: "300ms" }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold border border-amber-500/20">
              <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Top Rated on Upwork
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/20">
              6+ Shipped Apps
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold border border-blue-500/20">
              Live on App Store &amp; Google Play
            </span>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 mb-10 hero-entrance"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#projects"
              className="px-6 py-3 min-h-[44px] rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#030712] active:scale-[0.98] inline-flex items-center justify-center"
              aria-label="View projects section"
            >
              View Projects
            </a>
            <a
              href="/Adel_Mostafa_Software_Engineer.pdf"
              download="Adel_Mostafa_CV.pdf"
              className={`px-6 py-3 min-h-[44px] rounded-xl border font-semibold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#030712] active:scale-[0.98] inline-flex items-center justify-center gap-2 ${
                isDark
                  ? "border-gray-600 text-gray-200 hover:border-blue-500/50 hover:text-white"
                  : "border-gray-300 text-gray-700 hover:border-blue-500/50 hover:text-blue-600"
              }`}
              aria-label="Download CV as PDF"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
              <span className="text-xs opacity-60 font-normal">(PDF)</span>
            </a>
          </div>
        </div>

        {/* Photo */}
        <div
          className="order-1 md:order-2 flex justify-center md:justify-end hero-entrance"
          style={{ animationDelay: "300ms" }}
        >
          <div className="relative mx-14 sm:mx-10 md:mx-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 blur-2xl opacity-20 scale-110" />
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-1 bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500 animate-pulse-glow">
              <div
                className="w-full h-full rounded-full overflow-hidden"
                style={{ background: "var(--bg-surface)" }}
              >
                <Image
                  src="/assets/images/profile.png"
                  alt="Adel Mostafa"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            {/* Floating badge: Upwork Top Rated */}
            <div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl border shadow-xl animate-float"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border-color)",
              }}
            >
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Upwork
              </p>
              <p
                className="text-sm font-bold flex items-center gap-1"
                style={{ color: isDark ? "#ffffff" : "#374151" }}
              >
                <svg
                  className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Top Rated
              </p>
            </div>
            {/* Floating badge: Specialty +4 Years */}
            <div
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl border shadow-xl animate-float"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border-color)",
              }}
            >
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Specialty
              </p>
              <p
                className="text-sm font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                +4 Years
              </p>
            </div>
            {/* Floating badge: Writing · Medium */}
            <div
              className="absolute top-12 -left-8 px-4 py-2 rounded-xl border shadow-xl animate-float"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border-color)",
                animationDelay: "0.5s",
              }}
            >
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Writing
              </p>
              <p
                className="text-sm font-bold flex items-center gap-1"
                style={{ color: isDark ? "#ffffff" : "#374151" }}
              >
                <svg
                  className="w-3.5 h-3.5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                Medium
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs"
        style={{ color: "var(--text-muted)" }}
      >
        <div className="w-0.5 h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
