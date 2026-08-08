"use client";

import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import ContactMenu from "../ui/ContactMenu";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden bg-white"
    >
      {/* Subtle Path.png overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden="true"
        style={{ backgroundImage: "url(/assets/design/path.png)" }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <ScrollReveal delay={0}>
            <h1
              className="font-black tracking-tight mb-6"
              style={{
                color: "#801111",
                fontSize: "clamp(2.25rem, 5vw, 3rem)",
                lineHeight: 1.05,
              }}
            >
              <span style={{ color: "#0E5A4E" }}>Software</span>{" "}
              <span style={{ color: "#801111" }}>Engineer</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p
              className="text-2xl md:text-3xl font-medium mb-8 max-w-md"
              style={{ color: "#1c1d20" }}
            >
              I design and build beautiful, simple applications — offline-first
              architectures, real-time sync, and payment flows. And I love what
              I do.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div style={{ width: "max-content" }}>
              <ContactMenu />
            </div>
          </ScrollReveal>
        </div>

        {/* Photo */}
        <div className="flex justify-center md:justify-end">
          <ScrollReveal delay={200}>
            <div className="relative">
              <div
                className="rounded-[2.5rem] overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 30px 60px -15px rgba(28,29,32,0.35)" }}
              >
                <Image
                  src="/assets/images/profile.png"
                  alt="Adel Mostafa"
                  width={476}
                  height={757}
                  className="w-full max-w-[340px] md:max-w-[420px] h-[460px] md:h-[560px] object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs"
        style={{ color: "#6a6d76" }}
      >
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#0E5A4E] to-transparent" />
      </div>
    </section>
  );
}