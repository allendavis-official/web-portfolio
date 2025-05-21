import React from "react";

const ProjectCard = ({ title, description, demoUrl, codeUrl }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={demoUrl} target="_blank" rel="noopener">
          Live Demo
        </a>
        <a href={codeUrl} target="_blank" rel="noopener">
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
