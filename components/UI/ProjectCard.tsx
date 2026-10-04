'use client';

import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import type { Project } from '@/types';
import useScrollReveal from '@/hooks/useScrollReveal';

interface ProjectCardProps {
    project: Project;
    index: number;
    onCardClick: (project: Project) => void;
}

const ProjectCard = ({ project, index, onCardClick }: ProjectCardProps) => {
    const [cardRef, isVisible] = useScrollReveal<HTMLDivElement>({ delay: index * 150 });
    const IconComponent = project.icon;

    return (
      <div
        ref={cardRef}
        className={`project-card ${isVisible ? 'project-card-visible' : ''}`}
        onClick={() => onCardClick(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick(project)}
      >
        <div className="project-header">
          <span className="project-icon">
            <IconComponent size={48} />
          </span>
        </div>
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <div className="project-role">
            <Briefcase size={14} className="role-icon" />
            <span className="role-text">{project.role}</span>
          </div>

          <div className="tech-stack">
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
            {project.techStack.length > 4 && (
              <span className="tech-tag tech-more">+{project.techStack.length - 4}</span>
            )}
          </div>

          <div className="project-cta">
            <span>View Details</span>
            <ArrowRight size={14} className="cta-icon" />
          </div>
        </div>
      </div>
    );
  };

export default ProjectCard;
