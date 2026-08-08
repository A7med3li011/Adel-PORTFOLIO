"use client";

import Image from "next/image";
import CountUp from "../ui/CountUp";
import ScrollReveal from "../ui/ScrollReveal";

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Shipped Apps" },
  { value: 5, suffix: "+", label: "Countries" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6 relative"
      style={{ background: "#fffaf6" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="gaber-section-title">About Me</h2>
          <div className="mt-4 flex justify-center">
            <Image
              src="/assets/design/line-1.webp"
              alt=""
              aria-hidden="true"
              width={52}
              height={8}
              className="inline-block"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div className="mb-6">
              <h3 className="gaber-sub-title">Get to know me!</h3>
              <Image
                src="/assets/design/vector-1.webp"
                alt=""
                aria-hidden="true"
                width={254}
                height={23}
                className="inline-block"
                style={{ marginTop: "-2px", marginLeft: "60px" }}
              />
            </div>

            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "#44464d" }}
            >
              I&apos;m a Flutter engineer with a specific focus:{" "}
              <b style={{ color: "#1c1d20" }}>
                offline-first architectures, real-time bidirectional sync, and
                payment integrations
              </b>
              . These are the three hardest problems in production mobile apps,
              and they&apos;re where I spend most of my time.
            </p>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "#44464d" }}
            >
              Over the past 4 years I&apos;ve shipped production apps for
              clients across Egypt,{" "}
              <b style={{ color: "#1c1d20" }}>
                UAE, Saudi Arabia, and the USA
              </b>{" "}
              — including{" "}
              <b style={{ color: "#1c1d20" }}>Colada</b> (150,000+ downloads),{" "}
              <b style={{ color: "#1c1d20" }}>Priceless Medical</b> (30+
              clinics), and <b style={{ color: "#1c1d20" }}>Tansieq</b> (Saudi
              Ministry of Hajj). I architected{" "}
              <b style={{ color: "#1c1d20" }}>MemoryChat</b> from scratch using
              Drift + PowerSync + Supabase for a fully offline-capable chat
              experience with real-time sync.
            </p>

            <a
              href="/Adel_Mostafa_Software_Engineer.pdf"
              download="Adel_Mostafa_CV.pdf"
              className="btn-pill"
              style={{ borderRadius: "14px" }}
              aria-label="Download my CV"
            >
              Download CV
            </a>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div>
              <div className="grid grid-cols-3 gap-4">
                {stats.map(({ value, suffix, label }, i) => (
                  <ScrollReveal key={label} delay={i * 100}>
                    <div
                      className="rounded-md p-4 text-center transition-transform duration-300 hover:-translate-y-1"
                      style={{
                        background: "#ffffff",
                        border: `2px solid ${
                          i % 2 === 0 ? "#FFCEB4" : "#0E5A4E"
                        }`,
                      }}
                    >
                      <p
                        className="text-3xl font-extrabold mb-1"
                        style={{
                          fontFamily: "var(--font-space-grotesk), sans-serif",
                          color: i % 2 === 1 ? "#ffceb4" : "#391400",
                        }}
                      >
                        <CountUp target={value} suffix={suffix} />
                      </p>
                      <p className="text-xs font-medium" style={{ color: "#391400" }}>
                        {label}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}