"use client";

import Image from "next/image";
import { useState } from "react";

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
  isDark: boolean;
}

export default function ArticlesSection({
  articles,
  isDark,
}: ArticlesSectionProps) {
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (id: number) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  const isExternalUrl = (url: string) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <a
          key={article.id}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group rounded-lg overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
            isDark
              ? "bg-[#0f172a]/50 border-gray-800/50 hover:shadow-xl"
              : "bg-white border-gray-200 hover:shadow-lg"
          }`}
        >
          <div className={`relative w-full h-48 ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
            {imageError[article.id] ? (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
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
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  isDark
                    ? "bg-blue-900/30 text-blue-300"
                    : "bg-blue-100 text-blue-700"
                }`}>
                  {article.category}
                </span>
              )}
              {article.readTime && (
                <span className={`text-xs ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}>
                  {article.readTime}
                </span>
              )}
            </div>
            <h3 className={`text-xl font-semibold mb-4 leading-tight transition-colors ${
              isDark
                ? "text-white group-hover:text-blue-400"
                : "text-gray-900 group-hover:text-blue-600"
            }`}>
              {article.title}
            </h3>
            <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Read on Medium
            </button>
          </div>
        </a>
      ))}
    </div>
  );
}
