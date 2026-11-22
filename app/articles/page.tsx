import { articles } from "../data/articles";
import ArticlesSection from "../components/ArticlesSection";
import SectionTitle from "../components/ui/SectionTitle";

export const metadata = {
  title: "My Articles | Adel Mostafa",
  description:
    "Articles by Adel Mostafa on Flutter, performance, security, and resumable file uploads.",
};

export default function ArticlesPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6" style={{ background: "#fffaf6" }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="Writing" title="Articles" />
        <ArticlesSection articles={articles} expanded />
      </div>
    </main>
  );
}
