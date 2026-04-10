import React from 'react';
import SectionHeader from '../components/SectionHeader';

const plans = [
  {
    title: 'Launch',
    price: '$3,500',
    description: 'Best for MVPs and early-stage builds.',
    features: ['Product discovery', 'UI/UX sprint', 'MVP build', 'Weekly delivery updates'],
  },
  {
    title: 'Scale',
    price: '$7,500',
    description: 'For growing products and full-stack delivery.',
    features: ['Dedicated pod', 'Design system', 'Growth experiments', 'QA + DevOps'],
    highlight: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: 'Multi-team delivery for complex initiatives.',
    features: ['Multi-product roadmaps', 'Compliance-ready QA', '24/7 support', 'Executive reporting'],
  },
];

function Pricing() {
  return (
    <div className="page">
      <section className="section">
        <SectionHeader
          eyebrow="Pricing"
          title="Flexible engagement models"
          subtitle="We adapt to your timeline, scope, and delivery goals."
        />
        <div className="grid grid--3">
          {plans.map((plan) => (
            <div key={plan.title} className={`glass-card pricing-card ${plan.highlight ? 'is-highlight' : ''}`}>
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Pricing;
