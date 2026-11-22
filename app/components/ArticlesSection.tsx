"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const INITIAL_COUNT = 3;

interface Article {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
  readTime?: string;
  category?: string;
}

interface ArticlesSectionProps {
  articles: Article[];
  seeMoreHref?: string;
  expanded?: boolean;
}

const isExternalUrl = (url: string) =>
  url.startsWith("http://") || url.startsWith("https://");

function ArticleCard({
  article,
  imageError,
  onImageError,
}: {
  article: Article;
  imageError: boolean;
  onImageError: () => void;
}) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-lg overflow-hidden border transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200 hover:shadow-lg"
    >
      <div className="relative w-full h-48 bg-gray-100">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600">
            <svg
              className="w-16 h-16 text-white opacity-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
        ) : isExternalUrl(article.thumbnail) ? (
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover"
            onError={onImageError}
          />
        ) : (
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={onImageError}
          />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {article.category && (
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#0E5A4E]/10 text-[#0E5A4E] border border-[#0E5A4E]/20">
              {article.category}
            </span>
          )}
          {article.readTime && (
            <span className="text-xs text-gray-500">{article.readTime}</span>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-4 leading-tight transition-colors line-clamp-2 text-gray-900 group-hover:text-emerald-600">
          {article.title}
        </h3>
        <span className="block text-center w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#0e5a4e] to-[#0b463f] group-hover:from-[#0b463f] group-hover:to-[#0e5a4e] text-white font-semibold transition-all duration-300 shadow-[#0e5a4e]/25 min-h-[44px]">
          Read on Medium
        </span>
      </div>
    </a>
  );
}

export default function ArticlesSection({
  articles,
  seeMoreHref,
  expanded = false,
}: ArticlesSectionProps) {
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (id: number) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  const renderCard = (article: Article) => (
    <ArticleCard
      key={article.id}
      article={article}
      imageError={!!imageError[article.id]}
      onImageError={() => handleImageError(article.id)}
    />
  );

  const gridClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

  // Full list (e.g. on the /articles page)
  if (expanded || !seeMoreHref) {
    return <div className={gridClass}>{articles.map(renderCard)}</div>;
  }

  const previewArticles = articles.slice(0, INITIAL_COUNT);
  const peekArticles = articles.slice(INITIAL_COUNT, INITIAL_COUNT * 2);
  const hasMore = articles.length > INITIAL_COUNT;

  return (
    <>
      {/* ── First row: always fully visible ─────────────── */}
      <div className={gridClass}>{previewArticles.map(renderCard)}</div>

      {/* ── Second row: peek + fade + link ──────────────── */}
      {hasMore && (
        <div className="relative mt-6 mb-10">
          <div className={`${gridClass} overflow-hidden max-h-70`}>
            {peekArticles.map(renderCard)}
          </div>

          {/* Fade overlay — blends the peek row into the page */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 55%, rgba(255,255,255,0.95) 100%)",
            }}
          />

          {/* See More button */}
          <div className="absolute z-20 flex justify-center w-full bottom-[-40px]">
            <div className="flex flex-col items-center gap-0">
              <Link
                href={seeMoreHref}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:scale-95 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-[#0e5a4e] focus:ring-offset-2"
                style={{
                  background: "#0e5a4e",
                  boxShadow: "0 6px 24px rgba(14,90,78,0.35)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
                aria-label={`See ${articles.length - INITIAL_COUNT} more articles`}
              >
                {/* Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                See More Articles
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
                  +{articles.length - INITIAL_COUNT}
                </span>
              </Link>
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
    </>
  );
}
