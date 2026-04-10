import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const highlights = [
  {
    title: 'Product Strategy',
    description: 'Align vision, roadmap, and delivery metrics for external client teams.',
  },
  {
    title: 'Design + UX',
    description: 'Human-first interfaces that feel premium, fast, and measurable.',
  },
  {
    title: 'Engineering',
    description: 'Modern web, mobile, and cloud delivery with agile execution.',
  },
];

const stats = [
  { value: '120+', label: 'Client launches' },
  { value: '8 yrs', label: 'Delivery experience' },
  { value: '24/7', label: 'Global support' },
];

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero__content">
          <span className="pill">External Client Delivery Partner</span>
          <h1>Build bold digital products with a premium delivery pod.</h1>
          <p>
            We are an external client project team focused on strategy, design, and
            engineering. From MVP to scale, we build modern products that feel
            premium and perform reliably.
          </p>
          <div className="hero__actions">
            <NavLink to="/contact" className="button button--primary">
              Start a Project
            </NavLink>
            <NavLink to="/projects" className="button button--ghost">
              View Projects
            </NavLink>
          </div>
          <div className="hero__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__visual">
          <div className="gradient-panel" />
          <div className="glass-panel glass-panel--top">
            <div>
              <span className="panel-eyebrow">Gausa Technology</span>
              <h3>Client delivery studio</h3>
              <p>Full-stack build • UX systems • Launch support</p>
            </div>
          </div>
          <div className="glass-panel glass-panel--bottom">
            <h4>Delivery stack</h4>
            <ul>
              <li>React, Node, Flutter</li>
              <li>Design systems</li>
              <li>Cloud + DevOps</li>
            </ul>
          </div>
          <div className="mesh-orb mesh-orb--one" />
          <div className="mesh-orb mesh-orb--two" />
          <div className="mesh-orb mesh-orb--three" />
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="What we do"
          title="A full-service partner for external client teams"
          subtitle="We combine strategic clarity, creative polish, and engineering excellence to deliver measurable impact."
        />
        <div className="grid grid--3">
          {highlights.map((item) => (
            <div key={item.title} className="glass-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--feature">
        <div className="feature-block">
          <SectionHeader
            eyebrow="Why us"
            title="A premium experience with transparent delivery"
            subtitle="Dedicated pods, weekly delivery checkpoints, and a high-touch client experience."
          />
          <div className="feature-list">
            <div className="feature-item">
              <h4>Client-first pods</h4>
              <p>Dedicated designers and engineers aligned to your roadmap.</p>
            </div>
            <div className="feature-item">
              <h4>Rapid iterations</h4>
              <p>2-week sprints, fast feedback loops, and clear deliverables.</p>
            </div>
            <div className="feature-item">
              <h4>Quality assurance</h4>
              <p>End-to-end testing and launch readiness checks.</p>
            </div>
          </div>
        </div>
        <div className="feature-highlight">
          <div className="glass-card">
            <h3>Client success snapshot</h3>
            <p>
              Delivered a 4x engagement lift for a fintech onboarding flow by
              redesigning the UX and automating integrations.
            </p>
            <NavLink to="/projects" className="button button--ghost">
              See Case Studies
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
