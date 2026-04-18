import React from 'react';
import InitialAvatar from './InitialAvatar';

export default function TestimonialCard({ name, role, quote, image }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,.9)] backdrop-blur">
      <div className="flex items-center gap-3">
        {image ? (
          <img
            src={image}
            alt={`${name} headshot`}
            className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 object-cover"
            loading="lazy"
          />
        ) : (
          <InitialAvatar name={name} className="h-12 w-12" />
        )}
        <div>
          <div className="text-sm font-semibold text-white">{name}</div>
          <div className="text-xs text-white/55">{role}</div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-white/70">“{quote}”</p>
    </div>
  );
}
