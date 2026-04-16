import React from 'react';
import SectionHeader from '../components/SectionHeader';

const services = [
  {
    title: 'Custom Website Development',
    description: 'Fast, responsive, and SEO-friendly websites designed to convert visitors into customers.',
  },
  {
    title: 'Mobile App Development',
    description: 'Powerful iOS and Android apps with seamless user experiences and scalable architecture.',
  },
  {
    title: 'UI/UX Design',
    description: 'User-focused design that enhances engagement, usability, and brand identity.',
  },
  {
    title: 'Web Applications',
    description: 'Custom dashboards, SaaS platforms, and business tools tailored to your operations.',
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing updates, performance optimization, and technical support to keep your product running smoothly.',
  },
];

function Services() {
  return (
    <div className="page">
      <section className="section">
        <SectionHeader
          eyebrow="Services"
          title="What We Do"
          subtitle="Custom-built digital solutions designed for speed, quality, and long-term growth."
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
