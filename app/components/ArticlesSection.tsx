"use client";

import Image from "next/image";
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
}

export default function ArticlesSection({ articles }: ArticlesSectionProps) {
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  const [showAll, setShowAll] = useState(false);

  const handleImageError = (id: number) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  const isExternalUrl = (url: string) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  const visibleArticles = showAll ? articles : articles.slice(0, INITIAL_COUNT);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleArticles.map((article) => (
        <a
          key={article.id}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg overflow-hidden border transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200 hover:shadow-lg"
        >
          <div className="relative w-full h-48 bg-gray-100">
            {imageError[article.id] ? (
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
                onError={() => handleImageError(article.id)}
              />
            ) : (
              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => handleImageError(article.id)}
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
                <span className="text-xs text-gray-500">
                  {article.readTime}
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold mb-4 leading-tight transition-colors line-clamp-2 text-gray-900 group-hover:text-emerald-600">
              {article.title}
            </h3>
            <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#0e5a4e] to-[#0b463f] hover:from-[#0b463f] hover:to-[#0e5a4e] text-white font-semibold transition-all duration-300 shadow-[#0e5a4e]/25 hover:shadow-[#0e5a4e]/40 hover:-translate-y-0.5 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#0e5a4e] focus:ring-offset-2">
              Read on Medium
            </button>
          </div>
        </a>
      ))}
      </div>

      {articles.length > INITIAL_COUNT && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((p) => !p)}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:scale-95 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-[#0E5A4E] focus:ring-offset-2"
            style={{
              background: "#0E5A4E",
              boxShadow: "0 6px 24px rgba(14,90,78,0.35)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
            aria-expanded={showAll}
            aria-label={
              showAll
                ? "Show fewer articles"
                : `Show ${articles.length - INITIAL_COUNT} more articles`
            }
          >
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
                Show More Articles
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
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
