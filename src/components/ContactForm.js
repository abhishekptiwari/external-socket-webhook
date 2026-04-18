import React, { useMemo, useState } from 'react';
import { Button } from './Button';

export default function ContactForm({ onSuccess }) {
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
          throw new Error('Email is not configured on the server.');
        }
        throw new Error(data && data.error ? data.error : `Request failed (HTTP ${response.status})`);
      }

      setStatus({ state: 'success', message: 'Thanks! We’ll respond within 24 hours.' });
      setFullName('');
      setCompanyEmail('');
      setProjectScope('');
      if (onSuccess) onSuccess(data);
    } catch (error) {
      console.error('[contact] submit_failed', error);
      setStatus({
        state: 'error',
        message: error && error.message ? error.message : 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <form onSubmit={submit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-medium text-white/75">
        Full name
        <input
          type="text"
          placeholder="Your name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          autoComplete="name"
          required
          className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-white/75">
        Company email
        <input
          type="email"
          placeholder="you@company.com"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
          autoComplete="email"
          required
          className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-white/75">
        Project scope
        <textarea
          rows={5}
          placeholder="Tell us about your project"
          value={projectScope}
          onChange={(e) => setProjectScope(e.target.value)}
          required
          className="min-h-[130px] resize-y rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <Button type="submit" variant="secondary" disabled={!isValid || status.state === 'loading'}>
          {status.state === 'loading' ? 'Sending…' : 'Send inquiry'}
        </Button>
        {status.state !== 'idle' ? (
          <span
            className={
              status.state === 'error'
                ? 'text-sm font-medium text-rose-200'
                : 'text-sm font-medium text-emerald-200'
            }
            aria-live="polite"
          >
            {status.message}
          </span>
        ) : null}
      </div>
    </form>
  );
}
