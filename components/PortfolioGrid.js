"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function PortfolioGrid({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
