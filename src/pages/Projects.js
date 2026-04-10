import React from 'react';
import SectionHeader from '../components/SectionHeader';

const projects = [
  {
    title: 'Fintech onboarding revamp',
    description: 'Streamlined KYC, automated verification, and boosted activation by 4x.',
    tags: ['UX Redesign', 'Automation', 'Analytics'],
  },
  {
    title: 'Marketplace acceleration',
    description: 'Built a multi-vendor marketplace with real-time logistics tracking.',
    tags: ['React', 'Node', 'Cloud'],
  },
  {
    title: 'Healthcare dashboard',
    description: 'HIPAA-ready admin console with live patient insights.',
    tags: ['Product Strategy', 'Data Viz', 'Security'],
  },
  {
    title: 'EdTech learning hub',
    description: 'Modular LMS with personalized learning paths and retention tracking.',
    tags: ['Design System', 'Mobile', 'Growth'],
  },
];

function Projects() {
  return (
    <div className="page">
      <section className="section">
        <SectionHeader
          eyebrow="Projects"
          title="Real-world wins across industries"
          subtitle="We deliver external client projects that feel premium and scale with growth."
        />
        <div className="grid grid--2">
          {projects.map((project) => (
            <div key={project.title} className="glass-card project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
