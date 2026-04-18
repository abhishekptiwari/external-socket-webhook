import React, { useMemo, useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export default function StartProjectForm({ onCancel, onSent }) {
  const [fullName, setFullName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [buildType, setBuildType] = useState('website');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const isValid = useMemo(() => {
    return (
      fullName.trim().length > 1 &&
      companyEmail.trim().includes('@') &&
      details.trim().length > 8
    );
  }, [fullName, companyEmail, details]);

  const submit = async (event) => {
    event.preventDefault();
    if (!isValid || status.state === 'loading') return;

    setStatus({ state: 'loading', message: 'Sending…' });

    try {
      const projectScope = `Build type: ${buildType}\n\nProject details:\n${details.trim()}`;

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          companyEmail: companyEmail.trim(),
          projectScope,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data && data.error ? data.error : `Request failed (HTTP ${response.status})`);
      }

      setStatus({ state: 'success', message: 'Sent.' });
      setFullName('');
      setCompanyEmail('');
      setDetails('');
      if (onSent) onSent(data);
    } catch (error) {
      console.error('[contact] start_project_failed', error);
      setStatus({
        state: 'error',
        message: error && error.message ? error.message : 'Failed to send.',
      });
    }
  };

  return (
    <form className="grid gap-4" onSubmit={submit}>
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-xs text-white/60">Name</span>
          <input
            required
            className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs text-white/60">Email</span>
          <input
            required
            className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="you@company.com"
            type="email"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            autoComplete="email"
          />
        </label>
      </div>

      <label className="grid gap-1">
        <span className="text-xs text-white/60">What are you building?</span>
        <select
          className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/20"
          value={buildType}
          onChange={(e) => setBuildType(e.target.value)}
        >
          <option className="bg-zinc-950" value="website">
            Website
          </option>
          <option className="bg-zinc-950" value="mobile">
            Mobile app
          </option>
          <option className="bg-zinc-950" value="webapp">
            Web application / Dashboard
          </option>
          <option className="bg-zinc-950" value="other">
            Other
          </option>
        </select>
      </label>

      <label className="grid gap-1">
        <span className="text-xs text-white/60">Project details</span>
        <textarea
          required
          rows={5}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
          placeholder="Timeline, goals, links, requirements..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2 text-xs text-white/55">
          <ShieldCheck className="size-4 text-emerald-200" />
          Your info is used only to respond.
        </div>

        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={!isValid || status.state === 'loading'}>
            {status.state === 'loading' ? 'Sending…' : 'Send request'} <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      {status.state === 'error' ? (
        <div className="text-xs font-medium text-rose-200">{status.message}</div>
      ) : null}
    </form>
  );
}

