import React from 'react';
import { Container } from './Container';
import logo from '../assets/gausa-logo.jpg';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/gausatechnology' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/gausa-technology' },
  { label: 'Fiverr', href: 'https://www.fiverr.com/' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelance-jobs/' },
];

const pageLinks = [
  { label: 'About', id: 'about' },
  { label: 'Team', id: 'team' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'FAQ', id: 'faq' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Footer({ onStartProject }) {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center overflow-hidden rounded-2xl bg-white/90 ring-1 ring-white/10">
                <img src={logo} alt="Gausa Technology logo" className="h-10 w-10 object-contain" />
              </div>
              <div>
                <div className="text-sm font-semibold tracking-tight text-white">Gausa Technology</div>
                <div className="text-xs text-white/55">Building high-quality websites and apps worldwide.</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              We design and develop conversion-focused websites, mobile apps, and internal tools — with UX systems,
              full‑stack delivery, and launch support.
            </p>
            <div className="mt-5">
              <button
                onClick={onStartProject}
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-white/90"
                type="button"
              >
                Schedule a Call
              </button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <div className="text-xs font-semibold tracking-[0.18em] text-white/60">Pages</div>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {pageLinks.map((t) => (
                  <button
                    key={t.id}
                    className="text-left hover:text-white"
                    onClick={() => scrollToId(t.id)}
                    type="button"
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-[0.18em] text-white/60">Social</div>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {socialLinks.map((t) => (
                  <a key={t.label} href={t.href} className="hover:text-white" target="_blank" rel="noreferrer">
                    {t.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-[0.18em] text-white/60">Contact</div>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                <div>
                  Email:{' '}
                  <a href="mailto:business@gausatechnology.com" className="text-white hover:underline">
                    business@gausatechnology.com
                  </a>
                </div>
                <div>🇬🇧 +447776537494</div>
                <div>🇮🇳 +919833412635</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
          <div>© 2026 Gausa Technology. All rights reserved. Since 2020.</div>
          <div className="text-white/50">Full-stack build • UX systems • Launch support</div>
        </div>
      </Container>
    </footer>
  );
}
