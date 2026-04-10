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
          title="External client delivery, built like an internal product team"
          subtitle="Gausa Technology partners with fast-moving businesses to design and build digital products with confidence."
        />
        <div className="glass-card">
          <p>
            We specialize in external client work for startups, agencies, and mid-size
            businesses that need a reliable team to execute product vision. Our multidisciplinary
            pods combine strategy, design, development, and QA so you can launch faster and scale
            without extra overhead.
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
