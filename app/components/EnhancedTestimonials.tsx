"use client";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  project?: string;
  impact?: string;
}

interface EnhancedTestimonialsProps {
  testimonials: Testimonial[];
  isDark: boolean;
}

export default function EnhancedTestimonials({ testimonials, isDark }: EnhancedTestimonialsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="gradient-border rounded-2xl p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
          style={{
            animation: `fadeInUp 0.5s ease both`,
            animationDelay: `${i * 100}ms`,
          }}
        >
          <svg
            className="w-8 h-8 text-blue-400/40 mb-3"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          <p
            className="text-sm leading-relaxed mb-4 flex-1"
            style={{ color: "var(--text-secondary)" }}
          >
            {t.quote}
          </p>
          <div
            className="pt-4 border-t"
            style={{ borderColor: "var(--border-color)" }}
          >
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              {t.author}
            </p>
            <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>
              {t.role}
            </p>
            {t.company && (
              <p className="text-xs font-medium mb-1" style={{ color: "var(--accent-blue)" }}>
                {t.company}
              </p>
            )}
            {t.project && (
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Project: {t.project}
              </p>
            )}
            {t.impact && (
              <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t.impact}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}