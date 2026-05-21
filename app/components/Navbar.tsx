"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = ["About", "Experience", "Projects", "Articles", "Skills", "Contact"];

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
      <a
        href="#hero"
        className="skip-to-content"
        tabIndex={0}
      >
        Skip to main content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "navbar-scrolled py-3"
          : "bg-transparent py-5"
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#hero"
            className="text-xl font-bold gradient-text tracking-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded px-2 py-1"
            aria-label="Adel Mostafa - Home"
          >
            Adel Mostafa
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded px-2 py-1 ${activeSection === item.toLowerCase()
                  ? "text-blue-400"
                  : isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                aria-current={activeSection === item.toLowerCase() ? "page" : undefined}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${activeSection === item.toLowerCase()
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
