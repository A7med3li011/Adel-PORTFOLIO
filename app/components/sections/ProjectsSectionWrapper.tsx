"use client";

import { projects } from "../../data/projects";
import ProjectsSection from "../ProjectsSection";
import SectionTitle from "../ui/SectionTitle";

export default function ProjectsSectionWrapper({
  seeMoreHref,
}: {
  seeMoreHref?: string;
}) {
  return (
    <section
      id="projects"
      className="pt-16 md:pt-24 px-6 transition-colors duration-300"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="Portfolio" title="Projects" />
        <ProjectsSection projects={projects} seeMoreHref={seeMoreHref} />
      </div>
    </section>
  );
}
