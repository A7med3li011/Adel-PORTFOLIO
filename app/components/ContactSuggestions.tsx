"use client";

import { useState } from "react";

interface ContactSuggestion {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  method: string;
  email?: string;
  href?: string;
}

const contactSuggestions: ContactSuggestion[] = [
  {
    id: "job-opportunity",
    label: "Job Opportunity",
    description: "Full-time or contract roles in Flutter/mobile development",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    method: "email",
    email: "adelmostafamohamed12@gmail.com",
  },
  {
    id: "project-collaboration",
    label: "Project Collaboration",
    description: "Consulting or development partnership opportunities",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    method: "email",
    email: "adelmostafamohamed12@gmail.com",
  },
  {
    id: "technical-consultation",
    label: "Technical Consultation",
    description: "Flutter architecture, offline-first patterns, or sync strategies",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    method: "email",
    email: "adelmostafamohamed12@gmail.com",
  },
  {
    id: "networking",
    label: "Networking",
    description: "Connect for industry insights or Flutter community",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    method: "linkedin",
    href: "https://www.linkedin.com/in/adel-mostafa-766296234/",
  },
];

export default function ContactSuggestions() {
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null);

  const handleSuggestionClick = (suggestion: ContactSuggestion) => {
    setSelectedSuggestion(suggestion.id);
    if (suggestion.method === "email" && suggestion.email) {
      const subject = encodeURIComponent(`${suggestion.label} - Inquiry`);
      const body = encodeURIComponent(
        `Hi Adel,\n\nI'm reaching out regarding ${suggestion.label.toLowerCase()}.\n\n[Your message here]\n\nBest regards,\n[Your name]`
      );
      window.location.href = `mailto:${suggestion.email}?subject=${subject}&body=${body}`;
    } else if (suggestion.method === "linkedin" && suggestion.href) {
      window.open(suggestion.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        How can I help you?
      </h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {contactSuggestions.map((suggestion) => (
          <button
            key={suggestion.id}
            onClick={() => handleSuggestionClick(suggestion)}
            className={`flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 min-h-[88px] text-left hover:-translate-y-0.5 ${
              selectedSuggestion === suggestion.id
                ? "bg-blue-500/10 border-blue-500/30"
                : "bg-[#0f172a]/50 border-gray-800/50 hover:border-gray-700"
            }`}
            aria-label={`Contact for ${suggestion.label}`}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/10 text-blue-400 shrink-0">
              {suggestion.icon}
            </div>
            <div className="min-w-0">
              <div className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                {suggestion.label}
              </div>
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {suggestion.description}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}