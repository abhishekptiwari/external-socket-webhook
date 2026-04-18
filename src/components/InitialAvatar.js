import React, { useMemo } from 'react';
import { cn } from '../lib/utils';

function initialsFromName(name) {
  const cleaned = String(name || '')
    .trim()
    .replace(/\s+/g, ' ');

  if (!cleaned) return '?';

  const parts = cleaned.split(' ').filter(Boolean);
  const first = parts[0] ? parts[0][0] : '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  const initials = (first + last).toUpperCase();
  return initials || '?';
}

function hashString(value) {
  let h = 0;
  const s = String(value || '');
  for (let i = 0; i < s.length; i += 1) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

const gradients = [
  ['#38bdf8', '#818cf8'],
  ['#a78bfa', '#f472b6'],
  ['#22c55e', '#38bdf8'],
  ['#fb7185', '#fbbf24'],
  ['#60a5fa', '#34d399'],
  ['#f472b6', '#818cf8'],
];

export default function InitialAvatar({ name, className }) {
  const initials = useMemo(() => initialsFromName(name), [name]);
  const gradient = useMemo(() => {
    const idx = hashString(name) % gradients.length;
    return gradients[idx];
  }, [name]);

  return (
    <div
      className={cn(
        'grid place-items-center rounded-2xl border border-white/10 bg-white/5 text-xs font-semibold text-white/90',
        className
      )}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
      aria-label={`${name} avatar`}
    >
      {initials}
    </div>
  );
}

