"use client";

import { useState, useEffect } from "react";

interface QuickNavProps {
  sections: string[];
}

export default function QuickNav({ sections }: QuickNavProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate reading progress
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progressPercent = (scrolled / scrollHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progressPercent)));

      // Track active section
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <>
      {/* Reading Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-[60]"
        style={{ width: `${progress}%` }}
      />

      {/* Quick Navigation Dropdown */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px] min-w-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 flex items-center justify-center ${
            isOpen ? "ring-2 ring-white ring-offset-2" : ""
          }`}
          aria-label="Quick navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {isOpen && (
          <div className="absolute bottom-14 right-0 w-48 bg-[#0f172a] border border-gray-700 rounded-xl shadow-2xl overflow-hidden animate-fadeInUp">
            <div className="p-2">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-2">
                Quick Navigation
              </div>
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors min-h-[44px] ${
                    activeSection === section
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                  aria-current={activeSection === section ? "page" : undefined}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activeSection === section ? "bg-blue-400" : "bg-gray-600"
                    }`}
                  />
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
