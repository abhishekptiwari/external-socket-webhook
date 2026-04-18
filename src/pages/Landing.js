import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { Modal } from '../components/Modal';
import { Toast } from '../components/Toast';
import StartProjectForm from '../components/StartProjectForm';
import TestimonialCard from '../components/TestimonialCard';
import TeamMemberCard from '../components/TeamMemberCard';
import {
  ArrowRight,
  Calendar,
  Check,
  ExternalLink,
  Globe,
  Layers,
  Mail,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';

const card =
  'rounded-3xl border border-white/10 bg-black/30 p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,.9)] backdrop-blur-xl';

const softCard =
  'rounded-2xl border border-white/10 bg-white/5 shadow-[0_30px_90px_-70px_rgba(0,0,0,.9)] backdrop-blur-xl';

const services = [
  {
    title: 'Custom Website Development',
    description: 'Fast, responsive, and SEO-friendly websites built to convert visitors into customers.',
    icon: <Globe className="size-5 text-cyan-200" />,
    tag: 'Delivery',
    bullets: ['Performance-first', 'SEO & accessibility', 'Conversion UX'],
  },
  {
    title: 'Mobile App Development',
    description: 'Powerful iOS and Android apps with clean UX and scalable architecture.',
    icon: <Smartphone className="size-5 text-indigo-200" />,
    tag: 'Delivery',
    bullets: ['Flutter & native-ready', 'Offline-capable', 'Release support'],
  },
  {
    title: 'Web Applications',
    description: 'Custom dashboards, SaaS platforms, and internal tools tailored to your operations.',
    icon: <Layers className="size-5 text-fuchsia-200" />,
    tag: 'Delivery',
    bullets: ['Role-based access', 'Audit-ready', 'Integrations'],
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

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We understand your business, goals, and target users.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We create intuitive and visually appealing user experiences.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Our team builds scalable, high-performance solutions.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy your product with full testing and quality assurance.',
  },
  {
    number: '05',
    title: 'Support',
    description: 'We stay with you post-launch to ensure long-term success.',
  },
];

const testimonials = [
  {
    name: 'Rohan Kapoor',
    role: 'Business Manager',
    quote:
      'They delivered exactly what we needed — fast, professional, and reliable. The final build feels premium and performs great.',
  },
  {
    name: 'Meera Iyer',
    role: 'Product Lead',
    quote:
      'Clear communication, strong UX thinking, and a smooth delivery process. It felt like working with an in-house team.',
  },
  {
    name: 'Daniel Wu',
    role: 'Operations Manager',
    quote:
      'The team moved quickly, kept us updated, and shipped a scalable solution. Post-launch support was excellent.',
  },
  {
    name: 'Priya Nair',
    role: 'Marketing Lead',
    quote:
      'Our website conversion improved after the launch. The team’s design and performance focus made a real difference.',
  },
];

const coreTeam = [
  {
    name: 'Gaurang Sarvaiya',
    role: 'Founder & MD',
    image: '/testimonials/gaurang-sarvaiya.jpeg',
    bio: 'Leads strategy, partnerships, and delivery standards across web and app engagements.',
  },
  {
    name: 'Abhishek Tiwari',
    role: 'Operations Lead, CTO',
    image: '/testimonials/abhishek-tiwari.jpeg',
    bio: 'Owns engineering execution, architecture decisions, and reliable project delivery end-to-end.',
  },
];

const posts = [
  {
    tag: 'MVP',
    title: 'How to validate an MVP without wasting dev cycles',
    description: 'Practical guidance based on real delivery projects.',
  },
  {
    tag: 'Design',
    title: 'Design systems for startups: what to standardize first',
    description: 'Practical guidance based on real delivery projects.',
  },
  {
    tag: 'Performance',
    title: 'Performance budgets: a simple checklist for faster sites',
    description: 'Practical guidance based on real delivery projects.',
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
    <div className="min-h-dvh overflow-x-hidden bg-[#07070a] pb-[env(safe-area-inset-bottom)] text-white">
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

        <section id="team" className="scroll-mt-28 py-20 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="TEAM"
              title="Core team behind the delivery"
              description="A team that focused on quality, communication, and outcomes."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {coreTeam.map((m) => (
                <TeamMemberCard
                  key={m.name}
                  name={m.name}
                  role={m.role}
                  image={m.image}
                  bio={m.bio}
                />
              ))}
            </div>
          </Container>
        </section>

        <section id="services" className="scroll-mt-28 py-20 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="What we do"
              title="A full-service partner for custom builds"
              description="From websites to apps, we deliver tailored digital solutions that drive real business outcomes."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className={card}>
                  <div className="flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                      {s.icon}
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                      {s.tag}
                    </div>
                  </div>

                  <div className="mt-4 text-lg font-semibold tracking-tight text-white">{s.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/70">{s.description}</div>

                  <div className="mt-5 grid gap-2">
                    {s.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-sm text-white/70">
                        <span className="grid size-5 place-items-center rounded-md bg-white/10 ring-1 ring-white/10">
                          <Check className="size-3.5 text-emerald-200" />
                        </span>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="process" className="scroll-mt-28 py-20 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="Process"
              title="How we deliver results"
              description="A simple, proven workflow to take your idea from concept to launch — and beyond."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3 xl:grid-cols-5">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_90px_-60px_rgba(0,0,0,.9)] backdrop-blur"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold tracking-[0.18em] text-white/60">{step.number}</div>
                      <div className="grid size-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                        <ArrowRight className="size-4 text-white/70" />
                      </div>
                    </div>
                    <div className="mt-4 text-base font-semibold text-white">{step.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-white/70">{step.description}</div>
                  </div>
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
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} name={t.name} role={t.role} quote={t.quote} image={t.image} />
              ))}
            </div>
          </Container>
        </section>

        <section id="blog" className="scroll-mt-28 py-20 sm:py-24">
          <Container>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="BLOG"
                title="Notes on delivery, UX, and building product"
                description="Short reads to help you ship better: performance, conversion, and scalable systems."
              />
              <Button type="button" variant="secondary">
                Read more <ExternalLink className="size-4" />
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <div
                  key={p.title}
                  className="rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_90px_-60px_rgba(0,0,0,.9)] backdrop-blur"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                        {p.tag}
                      </div>
                      <div className="grid size-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                        <ArrowRight className="size-4 text-white/70" />
                      </div>
                    </div>

                    <div className="mt-4 text-base font-semibold text-white">{p.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-white/70">{p.description}</div>

                    <button
                      type="button"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
                    >
                      Open article <ExternalLink className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="faq" className="scroll-mt-28 py-20 sm:py-24">
          <Container>
            <SectionHeading
              eyebrow="FAQ"
              title="Answers before you start"
              description="A few common questions about how we work, timelines, and what you can expect."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_90px_-60px_rgba(0,0,0,.9)] backdrop-blur"
                >
                  <div className="p-6">
                    <div className="text-base font-semibold text-white">{f.q}</div>
                    <div className="mt-2 text-sm leading-relaxed text-white/70">{f.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="scroll-mt-28 pb-20 sm:pb-24">
          <Container>
            <div className="rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_90px_-60px_rgba(0,0,0,.9)] backdrop-blur">
              <div className="grid gap-8 p-8 lg:grid-cols-12 lg:p-10">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    <Rocket className="size-3.5 text-fuchsia-200" />
                    Ready to build?
                  </div>
                  <div className="mt-4 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Ready to build your project?
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                    Let’s turn your idea into a powerful digital product. Whether you need a website, mobile app, or
                    custom system — we’re here to help.
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button variant="primary" onClick={startProject}>
                      Start your project <ArrowRight className="size-4" />
                    </Button>
                    <Button variant="secondary" onClick={startProject}>
                      <Calendar className="size-4" /> Schedule a call
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="grid gap-3">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="grid size-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10 text-white/80">
                        <Mail className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60">Email</div>
                        <div className="text-sm text-white/80">
                          <a href="mailto:business@gausatechnology.com" className="hover:underline">
                            business@gausatechnology.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="grid size-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10 text-white/80">
                        <Phone className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60">Phone</div>
                        <div className="text-sm text-white/80">🇬🇧 +447776537494 • 🇮🇳 +919833412635</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="grid size-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10 text-white/80">
                        <ShieldCheck className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60">Response time</div>
                        <div className="text-sm text-white/80">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
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
