import React from 'react';
import SectionHeader from '../components/SectionHeader';

const values = [
  {
    title: 'Client obsession',
    description: 'We align with stakeholder goals and operate as a trusted extension of your team.',
  },
  {
    title: 'Modern craftsmanship',
    description: 'Every deliverable is refined, tested, and engineered for performance.',
  },
  {
    title: 'Clear communication',
    description: 'Weekly updates, transparent planning, and measurable outcomes.',
  },
];

function About() {
  return (
    <div className="page">
      <section className="section">
        <SectionHeader
          eyebrow="About us"
          title="Your External Tech Team, Without the Overhead"
          subtitle="Custom websites and mobile apps built with strategy, design, and engineering—end to end."
        />
        <div className="glass-card">
          <p>
            We help startups, agencies, and growing businesses bring their ideas to life with custom-built digital solutions. From websites to mobile applications, we act as your dedicated product team — handling everything from strategy and design to development and deployment.
          </p>
          <p>
            Our approach is simple: understand your vision, build with precision, and deliver results that drive real business growth.
          </p>
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Core values"
          title="How we deliver for our clients"
          subtitle="We blend modern execution with a white-glove client experience."
        />
        <div className="grid grid--3">
          {values.map((value) => (
            <div key={value.title} className="glass-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
