import React from 'react';
import skillsData from '@/data/skills';
import SkillCard from '@/components/UI/SkillCard';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <div className="skills-header">
                    <p className="skills-eyebrow">Expertise</p>
                    <h2 className="skills-title">What I Do Best</h2>
                    <p className="skills-subtitle">
                        Skills proven in production, with the numbers to back them
                    </p>
                </div>
                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <SkillCard key={skill.id} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
