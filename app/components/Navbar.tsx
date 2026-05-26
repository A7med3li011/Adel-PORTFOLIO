"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  "About",
  "Experience",
  "Projects",
  "Articles",
  "Skills",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navLinks.map((l) => l.toLowerCase());
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <>
      {/* Skip to content link for keyboard users */}
      <a href="#hero" className="skip-to-content" tabIndex={0}>
        Skip to main content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "navbar-scrolled py-3" : "bg-transparent py-5"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              title={`Switch to ${isDark ? "light" : "dark"} mode`}
              className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                isDark
                  ? "bg-gray-800/60 hover:bg-gray-700/80 text-yellow-300"
                  : "bg-gray-200/80 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {isDark ? (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 1.5zm0 18a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM22.5 12a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zm-18 0a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zm14.834-7.834a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0zM6.227 16.713a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0zm12.546 2.121a.75.75 0 01-1.06 0l-1.061-1.06a.75.75 0 111.06-1.061l1.061 1.06a.75.75 0 010 1.061zM7.287 7.287a.75.75 0 01-1.06 0L5.166 6.227a.75.75 0 011.06-1.06l1.061 1.06a.75.75 0 010 1.06z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            <div>
              <a
                href="#hero"
                className="text-xl font-bold gradient-text tracking-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded px-2 py-1"
                aria-label="Adel Mostafa - Home"
              >
                Adel Mostafa
              </a>
              <p className="text-sm text-gray-500 px-2">Software Engineer</p>
            </div>

            {/* Theme Toggle */}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-2 py-1 ${
                  activeSection === item.toLowerCase()
                    ? "text-blue-400"
                    : isDark
                      ? "text-gray-400"
                      : "text-gray-600"
                }`}
                aria-current={
                  activeSection === item.toLowerCase() ? "page" : undefined
                }
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
