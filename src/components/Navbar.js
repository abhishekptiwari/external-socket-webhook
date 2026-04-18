import React, { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';
import { cn } from '../lib/utils';
import logo from '../assets/gausa-logo.jpg';

const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'team', label: 'Team' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'blog', label: 'Blog' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar({ onStartProject }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  const ids = useMemo(() => nav.map((n) => n.id), []);

  useEffect(() => {
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const ob = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) setActive(id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0.01 }
      );
      ob.observe(el);
      observers.push(ob);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
      <Container className="pointer-events-auto">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3 shadow-[0_20px_60px_-30px_rgba(0,0,0,.9)] backdrop-blur-xl">
          <button
            onClick={() => scrollToId('home')}
            className="flex items-center gap-3 rounded-xl px-2 py-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            aria-label="Go to top"
            type="button"
          >
            <div className="grid size-11 place-items-center overflow-hidden rounded-2xl bg-white/90 ring-1 ring-white/10">
              <img src={logo} alt="Gausa Technology logo" className="h-10 w-10 object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-tight text-white">Gausa Technology</div>
              {/* <div className="text-xs text-white/55">Client delivery studio</div> */}
            </div>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className={cn(
                  'rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white',
                  active === item.id && 'bg-white/10 text-white ring-1 ring-white/10'
                )}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button variant="secondary" onClick={onStartProject}>
                Start a Project
              </Button>
            </div>

            <button
              className="grid size-11 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              type="button"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="mt-3 rounded-2xl border border-white/10 bg-black/45 p-2 backdrop-blur-xl lg:hidden">
            <div className="grid gap-1">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setOpen(false);
                    scrollToId(item.id);
                  }}
                  className={cn(
                    'rounded-xl px-3 py-2 text-left text-sm text-white/80 hover:bg-white/10',
                    active === item.id && 'bg-white/10 text-white ring-1 ring-white/10'
                  )}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-1 sm:hidden">
                <Button className="w-full" variant="secondary" onClick={onStartProject}>
                  Start a Project
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
