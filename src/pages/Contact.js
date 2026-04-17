import React, { useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [projectScope, setProjectScope] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const isValid = useMemo(() => {
    return (
      fullName.trim().length > 1 &&
      companyEmail.trim().includes('@') &&
      projectScope.trim().length > 8
    );
  }, [fullName, companyEmail, projectScope]);

  const submit = async (event) => {
    event.preventDefault();
    if (!isValid || status.state === 'loading') return;

    setStatus({ state: 'loading', message: 'Sending…' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          companyEmail: companyEmail.trim(),
          projectScope: projectScope.trim(),
        }),
      });

      const raw = await response.text().catch(() => '');
      const data = (() => {
        try {
          return raw ? JSON.parse(raw) : {};
        } catch {
          return {};
        }
      })();

      if (!response.ok) {
        if (data && data.code === 'CONFIG_MISSING') {
          throw new Error('Email is not configured on the server. Set SMTP env vars and restart the dev API.');
        }
        const requestIdSuffix = data && data.requestId ? ` (Request ID: ${data.requestId})` : '';
        const proxyHint =
          raw && raw.toLowerCase().includes('proxy error')
            ? ' (dev proxy could not reach the API server)'
            : '';
        const message = data && data.error
          ? data.error
          : raw
            ? `${raw.split('\n')[0].slice(0, 180)} (HTTP ${response.status})${proxyHint}`
            : `Request failed (HTTP ${response.status})${proxyHint}`;
        throw new Error(`${message}${requestIdSuffix}`);
      }

      setStatus({ state: 'success', message: 'Thanks! We’ll respond within 24 hours.' });
      setFullName('');
      setCompanyEmail('');
      setProjectScope('');
    } catch (error) {
      // Keep a debug trail without leaking sensitive details.
      console.error('[contact] submit_failed', error);
      setStatus({
        state: 'error',
        message:
          error && typeof error.message === 'string' && error.message.toLowerCase().includes('failed to fetch')
            ? 'Cannot reach the contact API. If you are running locally, start it with: npm run dev:api'
            : error && error.message
              ? error.message
              : 'Something went wrong. Please try again.',
      });
    }
  };

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
            <form className="contact-form" onSubmit={submit}>
              <label>
                Full name
                <input
                  type="text"
                  placeholder="Your name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autoComplete="name"
                  required
                />
              </label>
              <label>
                Company email
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </label>
              <label>
                Project scope
                <textarea
                  rows="4"
                  placeholder="Tell us about your project"
                  value={projectScope}
                  onChange={(e) => setProjectScope(e.target.value)}
                  required
                />
              </label>
              <button type="submit" className="button button--primary" disabled={!isValid || status.state === 'loading'}>
                {status.state === 'loading' ? 'Sending…' : 'Send inquiry'}
              </button>
              {status.state !== 'idle' ? (
                <p className={`muted ${status.state === 'error' ? 'form-status form-status--error' : 'form-status form-status--ok'}`} aria-live="polite">
                  {status.message}
                </p>
              ) : null}
            </form>
          </div>
          <div className="glass-card" id="call">
            <h3>Prefer to talk?</h3>
            <p className="muted">
              Call us directly and we’ll help you scope the right solution.
            </p>
            <ul className="contact-details">
              <li>
                <strong>🇬🇧</strong> +447776537494
              </li>
              <li>
                <strong>🇮🇳</strong> +919833412635
              </li>
              <li>
                <strong>Email</strong>{' '}
                <a className="text-link" href="mailto:business@gausatechnology.com">
                  business@gausatechnology.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
