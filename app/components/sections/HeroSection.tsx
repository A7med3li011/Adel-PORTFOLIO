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
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 30px 60px -15px rgba(28,29,32,0.35)" }}
              >
                <Image
                  src="/assets/images/profile.jpg"
                  alt="Adel Mostafa"
                  width={476}
                  height={757}
                  className="w-full max-w-[340px] md:max-w-[420px] h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating badge: Top Rated */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full border bg-white shadow-lg"
                style={{ borderColor: "rgba(14,90,78,0.15)" }}
              >
                <p className="text-xs" style={{ color: "#6a6d76" }}>
                  Upwork
                </p>
                <p className="text-sm font-semibold flex items-center gap-1" style={{ color: "#1c1d20" }}>
                  <svg
                    className="w-3.5 h-3.5 fill-yellow-400"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Top Rated
                </p>
              </div>

              {/* Floating badge: +4 Years */}
              <div
                className="absolute -bottom-5 -left-5 px-4 py-2 rounded-xl border bg-white shadow-lg"
                style={{ borderColor: "rgba(14,90,78,0.15)" }}
              >
                <p className="text-xs" style={{ color: "#6a6d76" }}>
                  Specialty
                </p>
                <p className="text-sm font-semibold" style={{ color: "#1c1d20" }}>
                  +4 Years
                </p>
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