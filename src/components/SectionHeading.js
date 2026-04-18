import React from 'react';
import { cn } from '../lib/utils';

export function SectionHeading({ eyebrow, title, description, align = 'left', className }) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-[0.2em] text-white/60">{eyebrow}</div>
      ) : null}
      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

