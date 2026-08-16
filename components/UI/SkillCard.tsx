'use client';

import React from 'react';
import type { Skill } from '@/types';
import BrandIcon from '@/components/UI/BrandIcon';
import useScrollReveal from '@/hooks/useScrollReveal';

interface SkillCardProps {
    skill: Skill;
    index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
    // Was a plain mount timer, so the stagger played out before the reader ever
    // scrolled to Skills. Tie it to the viewport like every other section.
    const [cardRef, isVisible] = useScrollReveal<HTMLDivElement>({ delay: index * 150 });
    const IconComponent = skill.icon;

    return (
      <div ref={cardRef} className={`skill-card ${isVisible ? 'skill-card-visible' : ''}`}>
        <div className="skill-icon">
          {skill.brandIcon
            ? <BrandIcon name={skill.brandIcon} size={32} color="white" />
            : <IconComponent size={32} />
          }
        </div>
        <h3 className="skill-title">{skill.title}</h3>
        <p className="skill-description">{skill.description}</p>
        {skill.metric && (
          <div className="skill-proof">
            <span className="skill-metric">{skill.metric}</span>
            <span className="skill-metric-label">{skill.metricLabel}</span>
          </div>
        )}
      </div>
    );
  };

export default SkillCard;
