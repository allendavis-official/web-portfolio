import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-links">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {project.caseStudy && (
          <a href={project.caseStudy} className="case-study-link">
            Read Case Study →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
