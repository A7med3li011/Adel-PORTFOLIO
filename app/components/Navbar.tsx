"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "navbar-scrolled py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold gradient-text tracking-tight"
        >
          Adel Mostafa
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative group ${
                activeSection === item.toLowerCase()
                  ? "text-blue-400"
                  : isDark ? "text-gray-400" : "text-gray-600"
              }`}
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
          <a
            href="/assets/images/Adel_Mostafa_Software Engineer (2).pdf"
            download
            className="px-4 py-2 rounded-lg text-sm font-medium border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:border-blue-400"
          >
            Download CV
          </a>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
              isDark ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center text-[10px] shadow ${
                isDark
                  ? "translate-x-6 bg-white text-yellow-500"
                  : "translate-x-0 bg-white text-gray-600"
              }`}
            >
              {isDark ? "☀" : "🌙"}
            </span>
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={`w-10 h-5 rounded-full relative transition-all duration-300 ${
              isDark ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center text-[9px] shadow bg-white ${
                isDark ? "translate-x-5 text-yellow-500" : "text-gray-600"
              }`}
            >
              {isDark ? "☀" : "🌙"}
            </span>
          </button>

          <button
            className={`transition-colors p-2 ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`backdrop-blur-xl border-t px-6 py-4 flex flex-col gap-4 ${
            isDark
              ? "bg-[#030712]/95 border-gray-800/50"
              : "bg-white/95 border-gray-200/80"
          }`}
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors text-sm font-medium py-1 ${
                isDark
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="/assets/images/Adel_Mostafa_Software Engineer (2).pdf"
            download
            className="px-4 py-2 rounded-lg text-sm font-medium border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 text-center mt-2"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
