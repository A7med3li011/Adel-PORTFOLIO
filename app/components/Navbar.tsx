"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const sections = ["home", "about", "experience", "skills"];
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      if (!onHome) return;
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onHome]);

  const linkColor = (section: string) =>
    onHome && activeSection === section ? "#0E5A4E" : "#1c1d20";

  return (
    <>
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
        <div className="max-w-7lg mx-auto px-1 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E5A4E] rounded px-2 py-1"
            aria-label="Adel Mostafa - Home"
          >
            <span>
              <span
                className="block text-xl font-bold tracking-tight"
                style={{ color: "#0E5A4E", lineHeight: 1 }}
              >
                Adel Mostafa
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", href: "/", section: "home" },
              { label: "My Projects", href: "/projects", section: "projects" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xl font-medium transition-colors duration-300 hover:text-[#0E5A4E] relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E5A4E] rounded px-2 py-1`}
                style={{
                  color:
                    item.href === pathname
                      ? "#0E5A4E"
                      : linkColor(item.section),
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
