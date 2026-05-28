"use client";

import type { ReactNode } from "react";
import ContactSuggestions from "../ContactSuggestions";
import CopyButton from "../ui/CopyButton";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";
import { useTheme } from "../ThemeProvider";

type ContactMethod = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  color: "blue" | "emerald" | "purple";
  preferred: boolean;
  copyable: boolean;
};

const methods: ContactMethod[] = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email",
    value: "adelmostafamohamed12@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=adelmostafamohamed12@gmail.com",
    color: "blue",
    preferred: true,
    copyable: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "Adel Mostafa",
    href: "https://www.linkedin.com/in/adel-mostafa-766296234/",
    color: "blue",
    preferred: false,
    copyable: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "Adelmostafa31",
    href: "https://github.com/Adelmostafa31/",
    color: "purple",
    preferred: false,
    copyable: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 3.5l7.5 4.5v8l-7.5 4.5L4 16V8l7.5-4.5z" />
      </svg>
    ),
    label: "Upwork",
    value: "Top Rated Flutter Developer",
    href: "https://www.upwork.com/freelancers/~your-profile-id",
    color: "emerald",
    preferred: false,
    copyable: false,
  },
];

const getColorClasses = (color: ContactMethod["color"], isDark: boolean) => {
  const classes: Record<ContactMethod["color"], { dark: string; light: string }> = {
    blue: { dark: "bg-blue-500/10 text-blue-400", light: "bg-blue-100 text-blue-600" },
    emerald: { dark: "bg-emerald-500/10 text-emerald-400", light: "bg-emerald-100 text-emerald-600" },
    purple: { dark: "bg-purple-500/10 text-purple-400", light: "bg-purple-100 text-purple-600" },
  };
  return isDark ? classes[color].dark : classes[color].light;
};

export default function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 transition-colors duration-300"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="Get in Touch" title="Contact" />

        <ContactSuggestions />

        {/* Availability banner */}
        <ScrollReveal>
          <div className={`mb-8 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 border ${
            isDark
              ? "bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/20"
              : "bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200"
          }`}>
            <div className="flex items-center gap-2">
              <span className="relative flex w-2.5 h-2.5">
                <span className={`absolute inline-flex w-full h-full rounded-full ${isDark ? "bg-emerald-400" : "bg-emerald-500"} opacity-75 animate-ping`} />
                <span className={`relative inline-flex w-2.5 h-2.5 rounded-full ${isDark ? "bg-emerald-400" : "bg-emerald-500"}`} />
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Usually respond within 4 hours
              </span>
            </div>
            <span className={`h-4 w-px hidden sm:block ${isDark ? "bg-slate-700/50" : "bg-gray-300"}`} />
            <div className="flex items-center gap-2">
              <svg
                className={`w-4 h-4 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Egypt · GMT+2
              </span>
            </div>
            <span className={`h-4 w-px hidden sm:block ${isDark ? "bg-slate-700/50" : "bg-gray-300"}`} />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              Overlaps with EU, MENA &amp; US-East hours
            </span>
          </div>
        </ScrollReveal>

        {/* Contact methods */}
        <div className="space-y-3">
          {methods.map(
            (
              { icon, label, value, href, color, preferred, copyable },
              i,
            ) => (
              <ScrollReveal key={label} delay={i * 80}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 group ${
                    preferred
                      ? isDark
                        ? "bg-blue-500/10 border border-blue-500/20 hover:border-blue-400/40"
                        : "bg-blue-50 border border-blue-200 hover:border-blue-300"
                      : "hover:bg-white/[0.02]"
                  }`}
                  style={
                    !preferred
                      ? {
                          borderBottom: `1px solid var(--border-color)`,
                        }
                      : undefined
                  }
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${getColorClasses(color, isDark)}`}
                  >
                    {icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {label}
                      </p>
                      {preferred && (
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                          isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-700"
                        }`}>
                          Preferred
                        </span>
                      )}
                    </div>
                    <p
                      className="font-medium text-sm truncate"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {value}
                    </p>
                  </div>
                  {copyable && <CopyButton text={value} />}
                </a>
              </ScrollReveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
