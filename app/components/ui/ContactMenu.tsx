"use client";

const methods = [
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=adelmostafamohamed12@gmail.com",
icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adel-mostafa-swe/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
{
    label: "GitHub",
    href: "https://github.com/Adelmostafa31/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Medium",
    href: "https://medium.com/@adelmostafaswe",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.34H7.3l5.367 11.795 4.728-11.795h6.99v.34l-1.916 2.924c-.537.472-.8 1.156-.718 1.826v7.64c-.082.67.18 1.354.718 1.826L24 20.873v.34h-5.865v-.34l1.972-2.68c.437-.472.62-1.088.57-1.769V9.39l-5.255 11.632h-.728L8.6 9.39v7.684c-.112.444.028.907.311 1.24l2.028 2.32v.34H3.05v-.34l2.028-2.32c.283-.333.42-.796.311-1.24V6.887H2.846z" />
      </svg>
    ),
  },
];

export default function ContactMenu() {
  return (
    <div
      className="flex items-center gap-3"
      role="group"
      aria-label="Contact channels"
    >
      {methods.map((m) => (
        <a
          key={m.label}
          href={m.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={m.label}
          title={m.label}
          className="flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
          style={{
            width: 44,
            height: 44,
            color: "#0E5A4E",
            background: "rgba(14,90,78,0.08)",
            border: "1px solid rgba(14,90,78,0.18)",
            borderRadius: "50%",
          }}
        >
          {m.icon}
        </a>
      ))}
    </div>
  );
}