import React from 'react';
import SectionHeader from '../components/SectionHeader';

const services = [
  {
    title: 'Product discovery',
    description: 'Workshops, market analysis, and roadmap definition to align stakeholders.',
  },
  {
    title: 'UI/UX design',
    description: 'Design systems, prototyping, and conversion-focused UX journeys.',
  },
  {
    title: 'Web development',
    description: 'React, Next.js, and full-stack engineering with API integrations.',
  },
  {
    title: 'Mobile delivery',
    description: 'Cross-platform builds with Flutter and React Native.',
  },
  {
    title: 'DevOps & QA',
    description: 'Automated testing, CI/CD pipelines, and monitoring setup.',
  },
  {
    title: 'Growth support',
    description: 'Performance optimization, A/B testing, and analytics dashboards.',
  },
];

function Services() {
  return (
    <div className="page">
      <section className="section">
        <SectionHeader
          eyebrow="Services"
          title="Everything you need to deliver client success"
          subtitle="Flexible engagement models for one-off builds or long-term product partnerships."
        />
        <div className="grid grid--3">
          {services.map((service) => (
            <div key={service.title} className="glass-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
