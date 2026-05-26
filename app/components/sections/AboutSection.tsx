"use client";

import CountUp from "../ui/CountUp";
import ScrollReveal from "../ui/ScrollReveal";
import SectionTitle from "../ui/SectionTitle";

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 6, suffix: "+", label: "Shipped Apps" },
  { value: 4, suffix: "", label: "Countries" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6 relative transition-colors duration-300"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="About Me" title="Who I Am" />

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <ScrollReveal className="md:col-span-2">
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m a Flutter engineer with a specific focus:{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                offline-first architectures, real-time bidirectional sync, and
                payment integrations
              </span>
              . These are the three hardest problems in production mobile apps,
              and they&apos;re where I spend most of my time.
            </p>
            <div className="h-[2px] w-[10px] rounded-full bg-gradient-to-r from-blue-500 to-transparent mb-6" />
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              Over the past 4 years I&apos;ve shipped production apps for
              clients across Egypt,{" "}
              <span
                style={{ color: "var(--text-primary)" }}
                className="font-semibold"
              >
                UAE, Saudi Arabia, and the USA
              </span>{" "}
              — including{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Colada
              </span>{" "}
              (50,000+ deals),{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Priceless Medical
              </span>{" "}
              (30+ clinics), and{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Tansieq
              </span>{" "}
              (Saudi Ministry of Hajj). I architected{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                MemoryChat
              </span>{" "}
              from scratch using Drift + PowerSync + Supabase for a fully
              offline-capable chat experience with real-time sync.
            </p>
            <div className="h-[2px] w-[10px] rounded-full bg-gradient-to-r from-blue-500 to-transparent mb-6" />
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              I hold a B.Sc. in Computing and Data Science from Alexandria
              University and a CCNA certification. I&apos;m Top Rated on Upwork
              with a track record spanning healthcare, fintech, F&amp;B, and
              government sectors.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, suffix, label }, i) => (
              <ScrollReveal key={label} delay={i * 100}>
                <div className="gradient-border rounded-2xl p-5 text-center transition-all duration-300 hover:scale-105">
                  <p className="text-2xl font-bold gradient-text mb-1">
                    <CountUp target={value} suffix={suffix} />
                  </p>
                  <p style={{ color: "var(--text-muted)" }} className="text-xs">
                    {label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={300}>
              <div className="gradient-border rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300">
                <p className="text-2xl font-bold gradient-text mb-1">
                  Top Rated
                </p>
                <p style={{ color: "var(--text-muted)" }} className="text-xs">
                  On Upwork
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
