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
  category?: string;
  complexity?: string;
  downloads?: number;
};

const INITIAL_COUNT = 3;

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<{ pi: number; ii: number } | null>(
    null,
  );
  const [showAll, setShowAll] = useState(false);
  const [imageLoadingStates, setImageLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Get unique categories
  const categories = Array.from(
    new Set(projects.map((p) => p.category).filter(Boolean)),
  );

  // Handle image loading states
  const handleImageLoad = (src: string) => {
    setImageLoadingStates((prev) => ({ ...prev, [src]: true }));
  };

  const handleImageError = (src: string) => {
    setImageLoadingStates((prev) => ({ ...prev, [src]: true })); // Mark as loaded even if error
  };

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

  return (
    <>
      {/* ── Project Categories ─────────────────────────────── */}
      {categories.length > 0 && (
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Project categories"
        >
          {categories.map((category) => (
            <span
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 min-h-[44px] min-w-[44px] inline-flex items-center ${
                isDark
                  ? "bg-gray-800 text-gray-300"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </span>
          ))}
        </div>
      )}

      {/* ── First row: always fully visible ─────────────── */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {previewProjects.map((project, pi) => (
          <ProjectCard
            key={project.name}
            project={project}
            pi={pi}
            onOpen={() => open(pi)}
            imageLoadingStates={imageLoadingStates}
            handleImageLoad={handleImageLoad}
            handleImageError={handleImageError}
            isDark={isDark}
          />
        ))}
      </div>

      {/* ── Second row: peek + fade + button ────────────── */}
      {hasMore && (
        <div className="relative mt-6">
          {/* Peek grid — clipped to show only top half */}
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-in-out overflow-hidden  ${
              showAll ? "max-h-full" : "max-h-70"
            }`}
          >
            {peekProjects.map((project, pi) => (
              <ProjectCard
                key={project.name}
                project={project}
                pi={pi}
                onOpen={() => open(INITIAL_COUNT + pi)}
                imageLoadingStates={imageLoadingStates}
                handleImageLoad={handleImageLoad}
                handleImageError={handleImageError}
                isDark={isDark}
              />
            ))}
          </div>

          {/* Professional fade overlay — blends the peek row into the page */}
          {!showAll && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 z-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(6,13,26,0) 0%, rgba(6,13,26,0.65) 55%, rgba(6,13,26,0.95) 100%)",
              }}
            />
          )}

          {/* Extra projects when expanded */}
          {showAll && restProjects.length > 0 && (
            <div
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 pb-10`}
            >
              {restProjects.map((project, pi) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  pi={pi}
                  onOpen={() => open(INITIAL_COUNT * 2 + pi)}
                  imageLoadingStates={imageLoadingStates}
                  handleImageLoad={handleImageLoad}
                  handleImageError={handleImageError}
                  isDark={isDark}
                />
              ))}
            </div>
          )}

          {/* Gradient fade — only shown when collapsed */}
          {/* {!showAll && (
            <div className="absolute inset-x-0 top-0 h-full pointer-events-none z-10 bg-linear-to-b from-transparent via-black/60 to-black/30" />
          )} */}

          {/* Show More / Show Less button */}
          <div className=" absolute z-20 flex justify-center mt-4  w-full bottom-[-40px]  ">
            <div className="flex flex-col items-center gap-0">
              <button
                onClick={() => setShowAll((p) => !p)}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:scale-95 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#060d1a]"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  boxShadow:
                    "0 6px 24px rgba(59,130,246,0.40), 0 2px 8px rgba(139,92,246,0.25)",
                }}
                aria-expanded={showAll}
                aria-label={
                  showAll
                    ? "Show fewer projects"
                    : `Show ${projects.length - INITIAL_COUNT} more projects`
                }
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
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* ── Lightbox ─────────────────────────────────────── */}
      {lightbox && active && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md animate-fadeIn px-3 sm:px-4 ${
            isDark ? "bg-black/95" : "bg-black/80"
          }`}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} image gallery`}
        >
          <div
            className="relative w-full max-w-5xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3 px-1 min-w-0">
              <div>
                <h3 className={`font-bold text-lg leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  {active.name}
                </h3>
                <p className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                  {lightbox.ii + 1} / {active.images.length}
                </p>
              </div>
              <button
                onClick={close}
                className={`w-9 h-9 rounded-full transition-all flex items-center justify-center min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  isDark
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Close image gallery"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className={`relative w-full aspect-video rounded-xl overflow-hidden ${
              isDark ? "bg-[#0f172a]" : "bg-gray-100"
            }`}>
              <Image
                key={lightbox.ii}
                src={active.images[lightbox.ii]}
                alt={`${active.name} screenshot ${lightbox.ii + 1}`}
                fill
                className="object-contain animate-slideIn"
                priority
              />
              {active.images.length > 1 && (
                <>
                  <button
                    onClick={() => go(-1)}
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm border border-white/10 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Previous image"
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm border border-white/10 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Next image"
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {active.images.length > 1 && (
              <div
                className="flex justify-center gap-1.5 mt-3"
                role="tablist"
                aria-label="Image indicators"
              >
                {active.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightbox({ ...lightbox, ii: idx })}
                    className={`rounded-sm transition-all duration-300 p-0 border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      idx === lightbox.ii
                        ? "bg-blue-400"
                        : "bg-gray-600 hover:bg-gray-400"
                    }`}
                    style={{
                      height: "4px",
                      width: idx === lightbox.ii ? "24px" : "12px",
                      minHeight: "unset",
                      minWidth: "unset",
                    }}
                    aria-label={`View image ${idx + 1}`}
                    aria-selected={idx === lightbox.ii}
                    role="tab"
                  />
                ))}
              </div>
            )}

            <div
              className="flex gap-2 mt-4 overflow-x-auto pb-1 justify-center"
              role="tablist"
              aria-label="Image thumbnails"
            >
              {active.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightbox({ ...lightbox, ii: idx })}
                  className={`relative w-12 h-9 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 transition-all duration-200 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    idx === lightbox.ii
                      ? "ring-2 ring-blue-400 opacity-100 scale-105"
                      : "opacity-40 hover:opacity-70"
                  }`}
                  aria-label={`View ${active.name} image ${idx + 1}`}
                  aria-selected={idx === lightbox.ii}
                  role="tab"
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
  imageLoadingStates,
  handleImageLoad,
  handleImageError,
  isDark,
}: {
  project: Project;
  pi: number;
  onOpen: () => void;
  imageLoadingStates: { [key: string]: boolean };
  handleImageLoad: (src: string) => void;
  handleImageError: (src: string) => void;
  isDark: boolean;
}) {
  const hasStoreLinks = project.demoAndroid || project.demoIos;
  const imageSrc = project.images[0];
  const isImageLoaded = imageLoadingStates[imageSrc];

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        project.highlight
          ? isDark
            ? "bg-linear-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-500/10"
            : "bg-linear-to-br from-blue-50 to-purple-50 border-blue-200 hover:border-blue-300 hover:shadow-blue-500/10"
          : isDark
            ? "bg-[#0f172a]/50 border-gray-800/50 hover:border-gray-700 hover:shadow-black/20"
            : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-gray-300/20"
      }`}
      style={{
        animation: `fadeInUp 0.5s ease both`,
        animationDelay: `${pi * 80}ms`,
      }}
    >
      {project.downloads && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {project.downloads >= 1000
            ? `${(project.downloads / 1000).toFixed(project.downloads % 1000 === 0 ? 0 : 1)}K`
            : project.downloads}
        </div>
      )}

      <div
        className={`relative w-full h-44 overflow-hidden cursor-pointer ${
          isDark ? "bg-[#0f172a]" : "bg-gray-100"
        }`}
        onClick={onOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
          }
        }}
        aria-label={`View ${project.name} gallery`}
      >
        {!isImageLoaded && (
          <div className="absolute inset-0 skeleton" aria-hidden="true" />
        )}
        <Image
          src={project.images[0]}
          alt={`${project.name} screenshot`}
          fill
          className={`object-cover object-top group-hover:scale-105 transition-transform duration-500 ${!isImageLoaded ? "opacity-0" : "opacity-100"}`}
          onLoad={() => handleImageLoad(project.images[0])}
          onError={() => handleImageError(project.images[0])}
        />
        <div
          className={`absolute inset-0 bg-linear-to-b from-transparent ${
            isDark ? "to-[#0f172a]/60" : "to-gray-900/20"
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
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
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {project.images.length} photos
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3
          className={`text-lg font-bold mb-2 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {project.name}
        </h3>
        <p
          className={`text-sm leading-relaxed mb-4 ${
            isDark ? "text-gray-500" : "text-gray-600"
          }`}
        >
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
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                  isDark
                    ? "bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20 hover:border-green-400/40"
                    : "bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:border-green-300"
                }`}
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
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                  isDark
                    ? "bg-gray-500/10 text-gray-300 border-gray-500/20 hover:bg-gray-500/20 hover:border-gray-400/40"
                    : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 hover:border-gray-300"
                }`}
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
