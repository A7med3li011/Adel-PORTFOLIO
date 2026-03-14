"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type Project = {
  name: string;
  description: string;
  tech: string[];
  images: string[];
  demo: string;
  highlight: boolean;
};

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<{ pi: number; ii: number } | null>(
    null,
  );

  const open = (pi: number) => setLightbox({ pi, ii: 0 });
  const close = () => setLightbox(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (!lightbox) return;
      const total = projects[lightbox.pi].images.length;
      setLightbox({ ...lightbox, ii: (lightbox.ii + dir + total) % total });
    },
    [lightbox, projects],
  );

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, go]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const active = lightbox ? projects[lightbox.pi] : null;

  return (
    <>
      {/* ── Grid ─────────────────────────────────────────── */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, pi) => (
          <div
            key={pi}
            className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              project.highlight
                ? "bg-linear-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-500/10"
                : "bg-[#0f172a]/50 border-gray-800/50 hover:border-gray-700 hover:shadow-black/20"
            }`}
          >
            {project.highlight && (
              <span className="absolute top-4 right-4 z-10 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/30">
                Featured
              </span>
            )}

            {/* Clickable thumbnail */}
            <div
              className="relative w-full h-44 overflow-hidden bg-[#0f172a] cursor-pointer"
              onClick={() => open(pi)}
            >
              <Image
                src={project.images[0]}
                alt={project.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0f172a]/60" />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {project.images.length} photos
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              {/* <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md bg-gray-800/80 text-gray-400 text-xs border border-gray-700/50">
                    {t}
                  </span>
                ))}
              </div>*/}
              {/*<a
                href={project.demo}
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors group/link"
              >
                Live Demo
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>*/}
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ─────────────────────────────────────── */}
      {lightbox && active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fadeIn px-3 sm:px-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3 px-1 min-w-0">
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">
                  {active.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {lightbox.ii + 1} / {active.images.length}
                </p>
              </div>
              <button
                onClick={close}
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all flex items-center justify-center"
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
            </div>

            {/* Main image */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#0f172a]">
              <Image
                key={lightbox.ii}
                src={active.images[lightbox.ii]}
                alt={`${active.name} screenshot ${lightbox.ii + 1}`}
                fill
                className="object-contain animate-slideIn"
              />

              {/* Prev / Next arrows */}
              {active.images.length > 1 && (
                <>
                  <button
                    onClick={() => go(-1)}
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm border border-white/10"
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm border border-white/10"
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Dot indicators */}
            {active.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {active.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightbox({ ...lightbox, ii: idx })}
                    className={`rounded-full transition-all duration-300 ${
                      idx === lightbox.ii
                        ? "w-6 h-2 bg-blue-400"
                        : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-1 justify-center">
              {active.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightbox({ ...lightbox, ii: idx })}
                  className={`relative w-12 h-9 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 transition-all duration-200 ${
                    idx === lightbox.ii
                      ? "ring-2 ring-blue-400 opacity-100 scale-105"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
