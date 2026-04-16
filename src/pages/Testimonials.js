import React from 'react';
import SectionHeader from '../components/SectionHeader';

const testimonials = [
  {
    name: 'Ananya Patel',
    role: 'Founder, Small Business',
    quote:
      'Gausa Technology was incredibly responsive and clear throughout the project. Our new website looks premium and loads fast.',
    image: '/testimonials/ananya.svg',
  },
  {
    name: 'Rahul Mehta',
    role: 'Operations Lead, Agency',
    quote:
      'They understood our requirements quickly, suggested better solutions, and delivered on time. Communication was smooth from start to finish.',
    image: '/testimonials/rahul.svg',
  },
  {
    name: 'Sofia Khan',
    role: 'Product Manager',
    quote:
      'The UI/UX improvements made a big difference for our users. The team handled everything professionally and with great attention to detail.',
    image: '/testimonials/sofia.svg',
  },
  {
    name: 'James Carter',
    role: 'Founder, Startup',
    quote:
      'From planning to launch, the process was organized and transparent. We finally have a scalable foundation we can build on.',
    image: '/testimonials/james.svg',
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
              <div className="testimonial-meta">
                <img
                  className="testimonial-avatar"
                  src={testimonial.image}
                  alt={`${testimonial.name} headshot`}
                  loading="lazy"
                />
                <div className="quote-meta">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <p className="quote">“{testimonial.quote}”</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
