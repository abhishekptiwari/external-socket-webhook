import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { Modal } from '../components/Modal';
import { Toast } from '../components/Toast';
import ContactForm from '../components/ContactForm';
import StartProjectForm from '../components/StartProjectForm';
import TestimonialCard from '../components/TestimonialCard';
import { ArrowRight, Calendar, ExternalLink, Rocket, Sparkles } from 'lucide-react';

const card =
  'rounded-3xl border border-white/10 bg-black/30 p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,.9)] backdrop-blur-xl';

const softCard =
  'rounded-2xl border border-white/10 bg-white/5 shadow-[0_30px_90px_-70px_rgba(0,0,0,.9)] backdrop-blur-xl';

const services = [
  {
    title: 'Custom Website Development',
    description: 'Fast, responsive, and SEO-friendly websites designed to convert visitors into customers.',
  },
  {
    title: 'Mobile App Development',
    description: 'Powerful iOS and Android apps with seamless user experiences and scalable architecture.',
  },
  {
    title: 'UI/UX Design',
    description: 'User-focused design that enhances engagement, usability, and brand identity.',
  },
  {
    title: 'Web Applications',
    description: 'Custom dashboards, SaaS platforms, and business tools tailored to your operations.',
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing updates, performance optimization, and support to keep your product running smoothly.',
  },
];

const projects = [
  {
    title: 'Fintech onboarding revamp',
    description: 'Streamlined KYC, automated verification, and boosted activation by 4x.',
    tags: ['UX Redesign', 'Automation', 'Analytics'],
  },
  {
    title: 'Marketplace acceleration',
    description: 'Built a multi-vendor marketplace with real-time logistics tracking.',
    tags: ['React', 'Node', 'Cloud'],
  },
  {
    title: 'Healthcare dashboard',
    description: 'HIPAA-ready admin console with live patient insights.',
    tags: ['Product Strategy', 'Data Viz', 'Security'],
  },
  {
    title: 'EdTech learning hub',
    description: 'Modular LMS with personalized learning paths and retention tracking.',
    tags: ['Design System', 'Mobile', 'Growth'],
  },
];

const testimonials = [
  {
    name: 'Gaurang Sarvaiya',
    role: 'Founder & MD',
    quote:
      'Gausa Technology was incredibly responsive and clear throughout the project. Our new website looks premium and loads fast.',
    image: '/testimonials/gaurang-sarvaiya.jpeg',
  },
  {
    name: 'Abhishek Tiwari',
    role: 'Operations Lead, CTO',
    quote:
      'They understood our requirements quickly, suggested better solutions, and delivered on time. Communication was smooth from start to finish.',
    image: '/testimonials/abhishek-tiwari.jpeg',
  },
  {
    name: 'Kirti Singh',
    role: 'Product Manager',
    quote:
      'The UI/UX improvements made a big difference for our users. The team handled everything professionally and with great attention to detail.',
  },
];

const posts = [
  {
    title: 'How external client teams stay agile',
    date: 'Mar 12, 2024',
    description: 'Tips for keeping delivery velocity high while managing stakeholders.',
  },
  {
    title: 'Design systems that scale with clients',
    date: 'Feb 05, 2024',
    description: 'How we build reusable UI libraries for multi-project teams.',
  },
  {
    title: 'Launching MVPs in 6 weeks',
    date: 'Jan 22, 2024',
    description: 'Our blueprint for rapid discovery and lean product delivery.',
  },
];

const faqs = [
  {
    q: 'How quickly can we start?',
    a: 'Most projects kick off within 7-10 days after scope alignment and proposal approval.',
  },
  {
    q: 'Do you work as a white-label partner?',
    a: 'Yes. We support agencies and consultancies with white-label delivery pods.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'Fintech, healthcare, SaaS, e-commerce, and education are our most common segments.',
  },
  {
    q: 'How do you price engagements?',
    a: 'We offer fixed-scope MVPs and monthly retainers depending on delivery needs.',
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Landing({ initialSectionId }) {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  const startProject = () => setOpen(true);

  const sectionToScroll = useMemo(() => initialSectionId, [initialSectionId]);

  useEffect(() => {
    if (!sectionToScroll) return undefined;
    const t = window.setTimeout(() => scrollToId(sectionToScroll), 50);
    return () => window.clearTimeout(t);
  }, [sectionToScroll]);

  return (
    <div className="min-h-dvh bg-[#07070a] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_10%_10%,rgba(56,189,248,0.22),transparent_60%),radial-gradient(900px_700px_at_92%_22%,rgba(96,165,250,0.18),transparent_55%),radial-gradient(900px_700px_at_40%_95%,rgba(129,140,248,0.12),transparent_55%)]" />
        <div className="absolute inset-0 grid-dots opacity-35" />
        <div className="absolute inset-0 noise" />
      </div>
      <Navbar onStartProject={startProject} />

      <main>
        <section id="home" className="relative scroll-mt-28 pt-28 sm:pt-32">
          <Container className="pb-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
                  <Sparkles className="size-3.5 text-sky-200" />
                  <span>Full-stack build • UX systems • Launch support</span>
                </div>
                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Build digital products that scale with your business
                </h1>
                <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                  We design and develop custom websites and mobile apps tailored to your business goals — fast,
                  reliable, and built to grow.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button onClick={startProject} variant="primary" size="lg">
                    Start a Project <ArrowRight className="size-4" />
                  </Button>
                  <Button onClick={() => scrollToId('contact')} variant="secondary" size="lg">
                    <Calendar className="size-4" /> Book a Free Consultation
                  </Button>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    { value: '100+', label: 'Client launches' },
                    { value: '6 yrs', label: 'Delivery experience' },
                  ].map((s) => (
                    <div key={s.label} className={softCard + ' p-5'}>
                      <div className="text-2xl font-semibold text-white">{s.value}</div>
                      <div className="mt-1 text-sm text-white/60">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['React', 'Node', 'Flutter', 'Cloud + DevOps', 'Design systems'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/65"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_90px_-60px_rgba(0,0,0,.9)] backdrop-blur">
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      alt="Abstract technology gradient"
                      className="h-64 w-full object-cover sm:h-72"
                      loading="eager"
                      src="https://zxhr2p.vercel.app/images/hero.jpg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="flex items-center gap-3">
                        <div className="grid size-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10 backdrop-blur">
                          <Rocket className="size-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Gausa Technology</div>
                          <div className="text-xs text-white/60">Client delivery studio</div>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-2 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-white/60">Delivery stack</span>
                          <span className="text-white">React, Node, Flutter</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-white/60">Design systems</span>
                          <span className="text-white">UX + UI</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-white/60">Cloud + DevOps</span>
                          <span className="text-white">Deploy &amp; scale</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="about" className="scroll-mt-28 py-20 sm:py-24">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="About"
                  title="A delivery studio focused on outcomes"
                  description="We partner with startups and growing businesses to ship digital products with strong UX, clean architecture, and reliable launch support."
                />

                <div className="mt-8 grid gap-3">
                  {[
                    {
                      title: 'Clear communication',
                      desc: 'Weekly updates, shared boards, and fast feedback loops.',
                    },
                    {
                      title: 'Production-ready builds',
                      desc: 'Performance, security, and maintainability baked in.',
                    },
                    {
                      title: 'Design systems',
                      desc: 'Reusable UI patterns for faster iteration and consistency.',
                    },
                  ].map((f) => (
                    <div key={f.title} className={softCard + ' p-4'}>
                      <div className="text-sm font-semibold text-white">{f.title}</div>
                      <div className="mt-1 text-sm text-white/65">{f.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className={card + ' p-0 overflow-hidden'}>
                  <div className="grid gap-0 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                      <div className="relative h-full min-h-[260px]">
                        <img
                          src="https://zxhr2p.vercel.app/images/team.jpg"
                          alt="Team at work"
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-black/35 to-black/65" />
                        <div className="absolute inset-0 opacity-60 [mask-image:linear-gradient(to_right,black,transparent)]">
                          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:48px_48px]" />
                        </div>
                        <div className="absolute inset-0 flex items-end p-6">
                          <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
                            DELIVERY STUDIO SNAPSHOT
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 border-t border-white/10 lg:border-l lg:border-t-0">
                      <div className="p-6">
                        <div className="text-xs font-semibold tracking-[0.18em] text-white/60">CAPABILITIES</div>
                        <div className="mt-4 grid gap-3">
                          {[
                            { title: 'Full-stack delivery' },
                            { title: 'Security + QA' },
                            { title: 'Launch support' },
                          ].map((c) => (
                            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                              <div className="text-sm font-semibold text-white">{c.title}</div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                          <div className="text-xs font-semibold tracking-[0.18em] text-white/55">
                            Client delivery snapshot
                          </div>
                          <div className="mt-2 text-sm leading-relaxed text-white/70">
                            Helped a growing business launch a conversion-focused website and a scalable admin dashboard
                            that reduced manual work and improved lead response times.
                          </div>
                          <button
                            type="button"
                            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
                          >
                            See case studies <ExternalLink className="size-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="services" className="scroll-mt-28 py-20 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="SERVICES"
              title="What We Do"
              description="Custom-built digital solutions designed for speed, quality, and long-term growth."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className={card}>
                  <div className="text-base font-semibold text-white">{s.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{s.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="projects" className="scroll-mt-28 py-20 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="PROJECTS"
              title="Real-world wins across industries"
              description="We ship websites and apps that look premium and scale with growth."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {projects.map((p) => (
                <div key={p.title} className={card}>
                  <div className="text-base font-semibold text-white">{p.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="testimonials" className="scroll-mt-28 py-20 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="TESTIMONIALS"
              title="Partners who trust Gausa Technology"
              description="External teams, internal-level outcomes."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} name={t.name} role={t.role} quote={t.quote} image={t.image} />
              ))}
            </div>
          </Container>
        </section>

        <section id="blog" className="scroll-mt-28 py-20 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="BLOG"
              title="Insights for client-focused product teams"
              description="Playbooks, stories, and delivery lessons from external client work."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {posts.map((p) => (
                <div key={p.title} className={card}>
                  <div className="text-xs font-semibold tracking-[0.2em] text-sky-200/90">{p.date}</div>
                  <div className="mt-3 text-base font-semibold text-white">{p.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{p.description}</p>
                  <button
                    type="button"
                    className="mt-4 text-sm font-semibold text-white/80 hover:text-white"
                  >
                    Read more →
                  </button>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="faq" className="scroll-mt-28 py-20 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="FAQ"
              title="Answers before we partner"
              description="Everything you need to know before we start."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {faqs.map((f) => (
                <div key={f.q} className={card}>
                  <div className="text-base font-semibold text-white">{f.q}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{f.a}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="scroll-mt-28 pb-20 sm:pb-24">
          <Container>
            <SectionHeading
              eyebrow="CONTACT"
              title="Let’s build your next project"
              description="Tell us about your scope, timeline, and delivery goals."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <div className={card}>
                <div className="text-base font-semibold text-white">Project Intake</div>
                <div className="mt-1 text-sm text-white/60">Share details and we’ll respond within 24 hours.</div>
                <div className="mt-6">
                  <ContactForm
                    onSuccess={() => {
                      setToast({ show: true, message: 'Thanks! We’ll respond within 24 hours.' });
                    }}
                  />
                </div>
              </div>

              <div className={card}>
                <div className="text-base font-semibold text-white">Prefer to talk?</div>
                <div className="mt-1 text-sm text-white/60">Call us directly and we’ll help you scope the right solution.</div>
                <div className="mt-6 grid gap-3 text-sm text-white/75">
                  <div>🇬🇧 +447776537494</div>
                  <div>🇮🇳 +919833412635</div>
                  <div>
                    Email:{' '}
                    <a href="mailto:business@gausatechnology.com" className="text-white hover:underline">
                      business@gausatechnology.com
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="secondary" onClick={startProject}>
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer onStartProject={startProject} />

      <Modal open={open} onClose={() => setOpen(false)} title="Start a Project">
        <StartProjectForm
          onCancel={() => setOpen(false)}
          onSent={() => {
            setOpen(false);
            setToast({ show: true, message: 'Inquiry sent — we’ll respond within 24 hours.' });
          }}
        />
      </Modal>

      <Toast show={toast.show} message={toast.message} onDone={() => setToast({ show: false, message: '' })} />
    </div>
  );
}
