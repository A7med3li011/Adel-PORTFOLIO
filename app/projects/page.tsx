import { projects } from "../data/projects";
import ProjectsSection from "../components/ProjectsSection";

export const metadata = {
  title: "My Projects | Adel Mostafa",
  description:
    "Flutter projects by Adel Mostafa — MemoryChat, Colada, Priceless Medical, CHAQT, Tansieq and more.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6" style={{ background: "#fffaf6" }}>
      <div className="max-w-6xl mx-auto">
        <ProjectsSection projects={projects} expanded />
      </div>
    </main>
  );
}