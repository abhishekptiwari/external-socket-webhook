import React from 'react';
import SectionHeader from '../components/SectionHeader';

const faqs = [
  {
    q: 'How quickly can we start?',
    a: 'Most projects kick off within 7-10 days after scope alignment and proposal approval.',
  },
  {
    q: 'Do you work as a white-label partner?',
    a: 'Yes. We support agencies and consultancies with white-label delivery pods.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'Fintech, healthcare, SaaS, e-commerce, and education are our most common segments.',
  },
  {
    q: 'How do you price external client engagements?',
    a: 'We offer fixed-scope MVPs and monthly retainers depending on delivery needs.',
  },
];

function FAQ() {
  return (
    <div className="page">
      <section className="section">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers for external client delivery"
          subtitle="Everything you need to know before we partner."
        />
        <div className="grid grid--2">
          {faqs.map((faq) => (
            <div key={faq.q} className="glass-card">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FAQ;
