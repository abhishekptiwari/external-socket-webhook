import React from 'react';
import SectionHeader from '../components/SectionHeader';

const testimonials = [
  {
    name: 'Ritika Sharma',
    role: 'Founder, FinEdge',
    quote:
      'Gausa Technology felt like an internal product team. They delivered our MVP in record time and kept every milestone transparent.',
  },
  {
    name: 'Daniel Wu',
    role: 'Head of Growth, NovaCare',
    quote:
      'We saw immediate improvements in engagement after the redesign. The team is fast, strategic, and extremely reliable.',
  },
  {
    name: 'Amit Verma',
    role: 'COO, LearnSphere',
    quote:
      'From UX to deployment, everything was polished. They understand external client delivery and communication.',
  },
];

function Testimonials() {
  return (
    <div className="page">
      <section className="section">
        <SectionHeader
          eyebrow="Testimonials"
          title="Partners who trust Gausa Technology"
          subtitle="External teams, internal-level outcomes."
        />
        <div className="grid grid--3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="glass-card">
              <p className="quote">“{testimonial.quote}”</p>
              <div className="quote-meta">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
