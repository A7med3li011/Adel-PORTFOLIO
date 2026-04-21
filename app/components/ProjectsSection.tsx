"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useTheme } from "./ThemeProvider";

type Project = {
  name: string;
  description: string;
  tech: string[];
  images: string[];
  demo: string;
  highlight: boolean;
  demoAndroid?: string;
  demoIos?: string;
};

const INITIAL_COUNT = 3;

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<{ pi: number; ii: number } | null>(
    null,
  );
  const [showAll, setShowAll] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Always render all projects; collapse by clipping the second row
  const hasMore = projects.length > INITIAL_COUNT;

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

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const active = lightbox ? projects[lightbox.pi] : null;

  // Projects to render: always first 3 + next 3 for peek, rest only when expanded
  const previewProjects = projects.slice(0, INITIAL_COUNT);
  const peekProjects = projects.slice(INITIAL_COUNT, INITIAL_COUNT * 2);
  const restProjects = projects.slice(INITIAL_COUNT * 2);

  const gradientFade = isDark
    ? "linear-gradient(to bottom, transparent 0%, rgba(3,7,18,0.7) 40%, rgba(3,7,18,0.97) 80%)"
    : "linear-gradient(to bottom, transparent 0%, rgba(248,250,252,0.7) 40%, rgba(248,250,252,0.97) 80%)";

  return (
    <>
      {/* ── First row: always fully visible ─────────────── */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {previewProjects.map((project, pi) => (
          <ProjectCard
            key={project.name}
            project={project}
            pi={pi}
            onOpen={() => open(pi)}
          />
        ))}
      </div>

      {/* ── Second row: peek + fade + button ────────────── */}
      {hasMore && (
        <div className="relative mt-6">
          {/* Peek grid — clipped to show only top half */}
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-in-out overflow-hidden ${
              showAll ? "max-h-[9999px]" : "max-h-[140px]"
            }`}
          >
            {peekProjects.map((project, pi) => (
              <ProjectCard
                key={project.name}
                project={project}
                pi={pi}
                onOpen={() => open(INITIAL_COUNT + pi)}
              />
            ))}
          </div>

          {/* Extra projects when expanded */}
          {showAll && restProjects.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {restProjects.map((project, pi) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  pi={pi}
                  onOpen={() => open(INITIAL_COUNT * 2 + pi)}
                />
              ))}
            </div>
          )}

          {/* Gradient fade — only shown when collapsed */}
          {!showAll && (
            <div
              className="absolute inset-x-0 top-0 h-full pointer-events-none z-10"
              style={{ background: gradientFade }}
            />
          )}

          {/* Show More / Show Less button */}
          <div className="relative z-20 flex justify-center mt-4">
            <div className="flex flex-col items-center gap-0">
              <button
                onClick={() => setShowAll((p) => !p)}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  boxShadow:
                    "0 6px 24px rgba(59,130,246,0.40), 0 2px 8px rgba(139,92,246,0.25)",
                }}
              >
                {/* Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />

                {showAll ? (
                  <>
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
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                    Show Less
                  </>
                ) : (
                  <>
                    Show More Projects
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold">
                      +{projects.length - INITIAL_COUNT}
                    </span>
                  </>
                )}
              </button>

              {/* Soft glow shadow under the button */}
              <div
                className="w-36 h-3 rounded-full mt-1"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(99,102,241,0.35) 0%, transparent 72%)",
                  filter: "blur(4px)",
                }}
              />
            </div>
          </div>
        </div>
      )}

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

            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#0f172a]">
              <Image
                key={lightbox.ii}
                src={active.images[lightbox.ii]}
                alt={`${active.name} screenshot ${lightbox.ii + 1}`}
                fill
                className="object-contain animate-slideIn"
              />
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

// ── Shared card component ─────────────────────────────────────────────────────
function ProjectCard({
  project,
  pi,
  onOpen,
}: {
  project: Project;
  pi: number;
  onOpen: () => void;
}) {
  const hasStoreLinks = project.demoAndroid || project.demoIos;

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        project.highlight
          ? "bg-linear-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-500/10"
          : "bg-[#0f172a]/50 border-gray-800/50 hover:border-gray-700 hover:shadow-black/20"
      }`}
      style={{
        animation: `fadeInUp 0.5s ease both`,
        animationDelay: `${pi * 80}ms`,
      }}
    >
      {project.highlight && (
        <span className="absolute top-4 right-4 z-10 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/30">
          Featured
        </span>
      )}

      <div
        className="relative w-full h-44 overflow-hidden bg-[#0f172a] cursor-pointer"
        onClick={onOpen}
      >
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0f172a]/60" />
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

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Store Links */}
        {hasStoreLinks && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.demoAndroid && (
              <a
                href={project.demoAndroid}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 hover:border-green-400/40 transition-all duration-200"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302L5.864 2.658z" />
                </svg>
                Google Play
              </a>
            )}
            {project.demoIos && (
              <a
                href={project.demoIos}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-500/10 text-gray-300 border border-gray-500/20 hover:bg-gray-500/20 hover:border-gray-400/40 transition-all duration-200"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
