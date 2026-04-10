import React from 'react';
import SectionHeader from '../components/SectionHeader';

function Contact() {
  return (
    <div className="page">
      <section className="section section--contact">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build your next client project"
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
          <div className="glass-card">
            <h3>Quick details</h3>
            <ul className="contact-details">
              <li>Average kickoff: 7-10 days</li>
              <li>Engagements: MVPs, redesigns, ongoing delivery</li>
              <li>Timezone coverage: APAC + EMEA + US</li>
              <li>Primary channels: Slack, Meet, Email</li>
            </ul>
            <div className="contact-highlight">
              <h4>Prefer a call?</h4>
              <p>Book a discovery session and meet your dedicated delivery pod.</p>
              <button type="button" className="button button--ghost">Schedule a call</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
