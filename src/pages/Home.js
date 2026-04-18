import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const highlights = [
  {
    title: 'Custom Website Development',
    description: 'Fast, responsive, and SEO-friendly websites built to convert visitors into customers.',
  },
  {
    title: 'Mobile App Development',
    description: 'Powerful iOS and Android apps with clean UX and scalable architecture.',
  },
  {
    title: 'Web Applications',
    description: 'Custom dashboards, SaaS platforms, and internal tools tailored to your operations.',
  },
];

const stats = [
  { value: '100+', label: 'Client launches' },
  { value: '6 yrs', label: 'Delivery experience' },
];

const processSteps = [
  {
    title: 'Discover',
    description: 'We understand your business, goals, and target users.',
  },
  {
    title: 'Design',
    description: 'We create intuitive and visually appealing user experiences.',
  },
  {
    title: 'Develop',
    description: 'Our team builds scalable, high-performance solutions.',
  },
  {
    title: 'Launch',
    description: 'We deploy your product with full testing and quality assurance.',
  },
  {
    title: 'Support',
    description: 'We stay with you post-launch to ensure long-term success.',
  },
];

const whyChooseUs = [
  'Fully customized solutions',
  'Fast turnaround and clear communication',
  'Scalable and future-ready technology',
  'Dedicated team for every project',
  'Affordable for startups and growing businesses',
];

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero__content">
          <h1>Build Digital Products That Scale With Your Business</h1>
          <p>We design and develop custom websites and mobile apps tailored to your business goals — fast, reliable, and built to grow.</p>
          <div className="hero__actions">
            <NavLink to="/contact" className="button button--primary">
              Start a Project
            </NavLink>
            <NavLink to="/contact#call" className="button button--ghost">
              Book a Free Consultation
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
          title="A full-service partner for custom builds"
          subtitle="From websites to apps, we deliver tailored digital solutions that drive real business outcomes."
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

      <section className="section">
        <SectionHeader
          eyebrow="Process"
          title="How We Deliver Results"
          subtitle="A simple, proven workflow to take your idea from concept to launch — and beyond."
        />
        <div className="grid grid--3">
          {processSteps.map((step) => (
            <div key={step.title} className="glass-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--feature">
        <div className="feature-block">
          <SectionHeader
            eyebrow="Why choose us"
            title="Why Clients Choose Us"
            subtitle="Custom builds, clear communication, and delivery you can rely on."
          />
          <ul className="checklist">
            {whyChooseUs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="feature-highlight">
          <div className="glass-card">
            <h3>Client success snapshot</h3>
            <p>
              Helped a growing business launch a conversion-focused website and a scalable admin dashboard that reduced manual work and improved lead response times.
            </p>
            <NavLink to="/projects" className="button button--ghost">
              See Case Studies
            </NavLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="glass-card cta-card">
          <h2>Ready to Build Your Project?</h2>
          <p>
            Let’s turn your idea into a powerful digital product. Whether you need a website, mobile app, or custom system — we’re here to help.
          </p>
          <NavLink to="/contact" className="button button--primary">
            Start Your Project
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Home;
