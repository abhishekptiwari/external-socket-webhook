import React from 'react';
import { cn } from '../lib/utils';

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-60';

  const variants = {
    primary:
      'bg-sky-300 text-slate-950 hover:bg-sky-200 shadow-[0_12px_30px_-12px_rgba(56,189,248,.55)]',
    secondary:
      'bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15 backdrop-blur',
    ghost: 'bg-transparent text-white hover:bg-white/10',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-4 text-sm',
    lg: 'h-12 px-5 text-base',
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}

