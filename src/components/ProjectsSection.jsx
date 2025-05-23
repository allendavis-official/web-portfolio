import React, { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Get all unique tags
  const allTags = [
    "All",
    ...new Set(projects.flatMap((project) => project.tags)),
  ];

  // Filter projects
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <div className="filter-buttons">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`filter-button ${
                activeFilter === tag ? "active" : ""
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
