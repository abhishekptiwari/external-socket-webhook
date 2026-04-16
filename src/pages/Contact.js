import React from 'react';
import SectionHeader from '../components/SectionHeader';

function Contact() {
  return (
    <div className="page">
      <section className="section section--contact">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build your next project"
          subtitle="Tell us about your scope, timeline, and delivery goals."
        />
        <div className="contact-grid">
          <div className="glass-card">
            <h3>Project Intake</h3>
            <p>Share details and we’ll respond within 24 hours.</p>
            <form className="contact-form">
              <label>
                Full name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Company email
                <input type="email" placeholder="you@company.com" />
              </label>
              <label>
                Project scope
                <textarea rows="4" placeholder="Tell us about your project" />
              </label>
              <button type="button" className="button button--primary">
                Send inquiry
              </button>
            </form>
          </div>
          <div className="glass-card" id="call">
            <h3>Prefer to talk?</h3>
            <p className="muted">
              Call us directly and we’ll help you scope the right solution.
            </p>
            <ul className="contact-details">
              <li>
                <strong>🇬🇧</strong> +44 XXXX XXX XXX
              </li>
              <li>
                <strong>🇮🇳</strong> +91 XXXXX XXXXX
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
