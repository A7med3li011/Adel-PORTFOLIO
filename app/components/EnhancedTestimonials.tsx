"use client";

import Image from "next/image";
import { useState } from "react";

interface Testimonial {
  title: string;
  image: string;
}

interface EnhancedTestimonialsProps {
  testimonials: Testimonial[];
  isDark: boolean;
}

export default function EnhancedTestimonials({
  testimonials,
}: EnhancedTestimonialsProps) {
  const [selected, setSelected] = useState<Testimonial | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <button
            key={i}
            onClick={() => setSelected(t)}
            className="gradient-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 text-left cursor-pointer w-full"
            style={{
              animation: `fadeInUp 0.5s ease both`,
              animationDelay: `${i * 100}ms`,
            }}
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={t.image}
                alt={t.title}
                fill
                className="object-cover"
                style={{ objectPosition: "top left" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-4">
              <p
                className="text-sm font-medium leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                {t.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
            style={{ background: "var(--bg-surface)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full">
              <Image
                src={selected.image}
                alt={selected.title}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-5">
              <p
                className="text-base font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {selected.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
