"use client";

import { useEffect, useRef, useState } from "react";
import { experience, typeColors } from "../../data/experience";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";

const INITIAL_COUNT = 2;

export default function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = timelineRef.current;
    const line = timelineLineRef.current;
    if (!container || !line) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const scrolled = Math.max(0, viewportHeight - containerTop);
      const progress = Math.min(scrolled / containerHeight, 1);

      line.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-6"
      style={{ background: "#fffaf6" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle label="" title="My Timeline" />

        <div className="relative" ref={timelineRef}>
          {/* Center line */}
          <div
            ref={timelineLineRef}
            className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 origin-top rounded-full"
            style={{ background: "#363946", transform: "scaleY(0)" }}
          />
          {/* Start dot */}
          <div
            className="absolute left-[27px] md:left-1/2 -top-1 w-3 h-3 rounded-full -translate-x-1/2"
            style={{ background: "#363946" }}
          />

          <div className="space-y-12 md:space-y-0">
            {(showAll ? experience : experience.slice(0, INITIAL_COUNT)).map(
              (job, i) => {
                const leftSide = i % 2 === 0;
                return (
                <ScrollReveal key={i} delay={Math.min(i * 60, 300)}>
                  <div
                    className={`relative md:flex md:items-center md:min-h-[220px] ${
                      leftSide ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-[27px] md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center rounded-full shadow-md"
                      style={{
                        width: 48,
                        height: 48,
                        background: "#ffffff",
                        color: "#0E5A4E",
                        boxShadow: "0 4px 10px rgba(14,90,78,0.18)",
                      }}
                    >
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    {/* Card */}
                    <div className="relative ml-16 md:ml-0 md:w-[calc(50%-56px)] pb-12 md:pb-16">
                      {/* Notch */}
                      <svg
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${
                          leftSide
                            ? "-right-[12px]"
                            : "-left-[12px]"
                        }`}
                        width="13"
                        height="26"
                        viewBox="0 0 13 26"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d={leftSide ? "M0 0 L13 13 L0 26" : "M13 0 L0 13 L13 26"}
                          fill="#fff"
                          stroke="rgba(14,90,78,0.06)"
                        />
                      </svg>
                      <div
                        className="bg-white p-6 rounded-md"
                        style={{
                          boxShadow: "0 2px 8px -2px rgba(0,0,0,0.35)",
                          border: "1px solid rgba(14,90,78,0.06)",
                        }}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <div>
                            <h3
                              className="text-xl font-bold"
                              style={{ color: "#1c1d20" }}
                            >
                              {job.role}
                            </h3>
                            <div className="flex items-center gap-3 flex-wrap mt-1">
                              {job.url ? (
                                <a
                                  href={job.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold hover:underline underline-offset-2"
                                  style={{ color: "#0E5A4E" }}
                                >
                                  {job.company}
                                </a>
                              ) : (
                                <p className="font-semibold" style={{ color: "#0E5A4E" }}>
                                  {job.company}
                                </p>
                              )}
                              {job.clients?.map((c) => (
                                <a
                                  key={c.name}
                                  href={c.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-sm underline underline-offset-2 hover:opacity-70"
                                  style={{ color: "#0E5A4E" }}
                                >
                                  {c.name}
                                </a>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <p
                              className="md:hidden text-sm font-semibold tracking-wide uppercase mb-2"
                              style={{ color: "#0E5A4E" }}
                            >
                              {job.period}
                            </p>
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-1 ${typeColors[job.type] || "bg-[#0E5A4E]/10 text-[#0E5A4E] border border-[#0E5A4E]/20"}`}
                            >
                              {job.type}
                            </span>
                            <p className="text-xs" style={{ color: "#666666" }}>
                              {job.location}
                            </p>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {job.points.map((point, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-3 text-sm leading-relaxed"
                              style={{ color: "#666666" }}
                            >
                              <span
                                className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ background: "#0E5A4E" }}
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Period on the opposite side */}
                    <div className="hidden md:flex md:flex-1 items-center justify-center">
                      <p
                        className="text-lg font-semibold tracking-wide uppercase"
                        style={{ color: "#0E5A4E" }}
                      >
                        {job.period}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
              },
            )}
          </div>

          {/* End dot */}
          <div
            className="absolute left-[27px] md:left-1/2 -bottom-1 w-3 h-3 rounded-full -translate-x-1/2"
            style={{ background: "#363946" }}
          />
        </div>

        {/* Show More / Show Less */}
        {experience.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((p) => !p)}
              className="btn-pill"
              aria-expanded={showAll}
              aria-label={
                showAll
                  ? "Show fewer experiences"
                  : `Show ${experience.length - INITIAL_COUNT} more experiences`
              }
            >
              <span className="inline-flex items-center gap-2.5">
                {showAll ? (
                  <>
                    Show Less
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
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    Show More
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold">
                      +{experience.length - INITIAL_COUNT}
                    </span>
                  </>
                )}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}