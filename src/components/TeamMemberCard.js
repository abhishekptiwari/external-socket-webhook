import React from 'react';

export default function TeamMemberCard({ name, role, image, bio }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,.9)] backdrop-blur">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={`${name} headshot`}
          className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5 object-cover"
          loading="lazy"
        />
        <div>
          <div className="text-base font-semibold text-white">{name}</div>
          <div className="text-sm text-white/60">{role}</div>
        </div>
      </div>
      {bio ? <p className="mt-4 text-sm leading-relaxed text-white/70">{bio}</p> : null}
    </div>
  );
}

