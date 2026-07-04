"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2, ShoppingCart, Rocket, Palette, LifeBuoy, Code2, FileCode,
  LayoutPanelLeft, RefreshCw, Smartphone, Plug, Search, Gauge, MonitorSmartphone,
  ShieldCheck, Brain, TrendingUp, Bot, Check, ArrowRight,
} from "lucide-react";


const trustBadges = ["Google Partner", "ISO Certified", "GDPR Compliant", "PIPEDA Ready", "Clutch Top Agency"];

const caseStudies = [
  {
    sector: "Manufacturing", region: "Canada", image: "/canadamanufacturing.jpg",
    title: "35% Lead Growth for a Canadian Manufacturer",
    challenge: "An outdated, slow website with no mobile support was costing leads and damaging brand credibility with enterprise buyers.",
    solution: "We rebuilt their site on a modern React + Next.js stack with a CMS, fast load times, and an integrated quote-request system.",
    stats: [["+35%", "Lead Growth"], ["98/100", "Page Speed"], ["6 wks", "Go-Live Time"]],
  },
  {
    sector: "Healthcare", region: "UK", image: "/healthcare.jpg",
    title: "42% More Bookings for a UK Healthcare Provider",
    challenge: "A multi-location clinic had a fragmented web presence with no online booking, poor mobile UX, and zero SEO visibility.",
    solution: "We built a GDPR-compliant healthcare portal with online booking, patient FAQs, and location-specific SEO landing pages.",
    stats: [["+42%", "More Bookings"], ["+3x", "Organic Traffic"], ["4.8", "Patient Score"]],
  },
  {
    sector: "D2C E-Commerce", region: "USA", image: "/d2c.jpg",
    title: "2.4x Conversion Rate for a US D2C Brand",
    challenge: "A direct-to-consumer brand had a slow, poorly structured Shopify store losing customers at checkout with high bounce rates.",
    solution: "We rebuilt the storefront with custom UI/UX, speed optimisation, and full-funnel conversion tracking integrated into HubSpot.",
    stats: [["2.4x", "Conversion"], ["+68%", "Revenue"], ["-44%", "Bounce Rate"]],
  },
];

const servicesOffered = [
  { icon: Building2, tag: "Enterprise", title: "Enterprise Website Development", desc: "Scalable, high-performance websites for enterprises in Canada, USA & UK. Built for growth." },
  { icon: ShoppingCart, tag: "E-Commerce", title: "E-Commerce Development", desc: "Custom online stores with seamless checkout, inventory sync, and conversion-focused design." },
  { icon: Rocket, tag: "Conversion", title: "Landing Page & Funnel Dev", desc: "High-converting landing pages and sales funnels designed to turn traffic into qualified leads." },
  { icon: Palette, tag: "Design", title: "UI/UX Design & Prototyping", desc: "User-first design systems, wireframes, and clickable prototypes before a single line of code." },
  { icon: LifeBuoy, tag: "Support", title: "Website Maintenance & Support", desc: "Ongoing updates, security patches, performance monitoring, and 24/7 technical support." },
  { icon: Code2, tag: "Custom", title: "Custom Web Application", desc: "Bespoke web apps with complex business logic, APIs, and integrations built for your exact process." },
  { icon: FileCode, tag: "WordPress", title: "WordPress Development", desc: "Custom WordPress themes, plugins, and enterprise CMS solutions — fully managed and optimised." },
  { icon: LayoutPanelLeft, tag: "Portal", title: "Web Portal Development", desc: "Client portals, partner dashboards, and self-service platforms that reduce support load." },
  { icon: RefreshCw, tag: "Redesign", title: "Website Redesign", desc: "Modernise your existing website — improved UX, faster load times, and better SEO rankings." },
  { icon: Smartphone, tag: "PWA", title: "Progressive Web Apps", desc: "App-like web experiences that work offline, load instantly, and are installable from the browser." },
  { icon: Plug, tag: "Integration", title: "API & Integration Services", desc: "Connect your website to CRM, ERP, payment gateways, and third-party platforms via REST & GraphQL." },
  { icon: Search, tag: "SEO", title: "SEO & Performance Optimisation", desc: "Core Web Vitals, structured data, on-page SEO, and technical audits to dominate search rankings." },
];

const benefits = [
  { icon: Gauge, title: "Core Web Vitals Optimised", desc: "Every site we build scores 90+ on Google PageSpeed. Fast load times reduce bounce rates and directly improve SEO rankings and ad quality scores.", tags: ["PageSpeed", "LCP", "CLS"] },
  { icon: MonitorSmartphone, title: "Mobile-First Design", desc: "Over 60% of web traffic is mobile. We design and build mobile-first — ensuring pixel-perfect experiences on every device and screen size.", tags: ["Responsive", "Mobile", "Cross-Browser"] },
  { icon: Search, title: "SEO-Ready Architecture", desc: "Clean code, semantic HTML, structured data, fast server response, and optimised metadata so your site is search-engine-ready from day one.", tags: ["Technical SEO", "Schema", "Sitemap"] },
  { icon: ShieldCheck, title: "Security First", desc: "SSL, GDPR consent management, PIPEDA compliance, CCPA data handling, regular security audits, and DDoS protection built into every project.", tags: ["GDPR", "PIPEDA", "SSL"] },
];

const techStack = [
  { name: "React / Next.js", desc: "Enterprise-grade React apps with SSR, ISR, and edge rendering for maximum performance." },
  { name: "Node.js", desc: "Scalable server-side JavaScript ideal for APIs, real-time apps, and microservices." },
  { name: "Laravel / PHP", desc: "Battle-tested PHP framework for complex web portals, CMS, and SaaS platforms." },
  { name: "WordPress", desc: "Custom themes, ACF, WooCommerce, and headless WordPress for content-driven sites." },
  { name: "Python / Django", desc: "Python-powered web apps for AI-integrated platforms and data-heavy portals." },
  { name: "MySQL / PostgreSQL", desc: "Reliable relational databases powering scalable, high-performance web applications." },
  { name: "AWS / Azure", desc: "Cloud hosting, CDN, auto-scaling, and CI/CD pipelines for enterprise-grade reliability." },
  { name: "Google Cloud", desc: "Firebase, Cloud Run, and BigQuery for modern, scalable web infrastructure." },
];

const hireByBusiness = [
  { title: "Enterprises", desc: "Multi-location businesses needing scalable web infrastructure, custom integrations, and enterprise CMS with role-based access control." },
  { title: "Start-ups", desc: "Lightweight, fast-to-market web apps that scale as you grow. We help you launch quickly without technical debt from day one." },
  { title: "Agencies", desc: "White-label web development for agencies — on-time delivery, clean handoff, and documentation your clients will love." },
];
const hireByProject = [
  { title: "Analytical", desc: "Data-first websites with built-in analytics, heatmaps, A/B testing, and conversion dashboards — turning traffic into business intelligence." },
  { title: "Operational", desc: "Automate enquiry routing, lead capture, booking flows, and customer onboarding through your website — reducing manual effort." },
  { title: "Collaborative", desc: "Unify your marketing, sales, and support teams around a single web platform with shared dashboards, CMS access, and live chat." },
];

const aiFeatures = [
  { icon: Brain, title: "AI-Powered Personalisation", desc: "Dynamically personalise website content, CTAs, and product recommendations based on visitor behaviour, location, and intent — in real time." },
  { icon: TrendingUp, title: "Predictive Analytics & Insights", desc: "AI analyses visitor journeys, identifies drop-off points, and surfaces actionable insights so your team optimises conversion without guesswork." },
  { icon: Bot, title: "Chatbot & Automation at Scale", desc: "Deploy AI chatbots that qualify leads, answer FAQs, and book consultations 24/7 — integrated directly into your website and CRM pipeline." },
];
const aiMetrics = [
  ["Personalisation accuracy", 96],
  ["Conversion optimisation", 89],
  ["Page speed score", 98],
  ["SEO visibility", 94],
];
const aiStats = [["124K", "Visitors Tracked"], ["3,842", "Leads Generated"], ["0.8s", "Avg Load Time"]];

const whyPoints = [
  "8+ years of proven digital excellence",
  "Serving Canada, USA & UK markets",
  "565+ projects delivered across India",
  "Client-first culture, enterprise-grade quality",
  "GDPR, PIPEDA & CCPA compliant delivery",
  "Full-stack: Web, Mobile, CRM, ERP, AI",
];
const whyStats = [["1500+", "Web Projects"], ["500+", "Mobile Apps"], ["1800+", "IT Talents"], ["25+", "Industries"]];


const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const grad = "bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent";

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.3em] text-cyan-300/80 backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      {children}
    </span>
  );
}

function CaseCard({ study, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const reversed = index % 2 === 1;
  return (
    <motion.div ref={ref} variants={fadeUp} className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_30px_80px_-20px_rgba(6,182,212,0.4)]">
      <div className={`grid lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}>
        <div className="relative h-64 overflow-hidden lg:h-auto [direction:ltr]">
          <motion.img src={study.image} alt={study.title} style={{ y }} className="absolute inset-0 h-[122%] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent lg:bg-gradient-to-r" />
          <span className="absolute left-5 top-5 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-md">
            {study.sector} · {study.region}
          </span>
        </div>
        <div className="p-8 lg:p-10 [direction:ltr]">
          <h3 className="text-2xl font-bold leading-snug text-white">{study.title}</h3>
          <div className="mt-5 space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Challenge</p>
              <p className="mt-1 text-sm text-slate-300/90">{study.challenge}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Solution</p>
              <p className="mt-1 text-sm text-slate-300/90">{study.solution}</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-5">
            {study.stats.map(([v, l]) => (
              <div key={l}>
                <div className={`text-2xl font-bold ${grad}`}>{v}</div>
                <p className="mt-1 text-xs text-slate-400">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HireColumn({ label, items }) {
  return (
    <div>
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{label}</p>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-5">
        {items.map((h) => (
          <motion.div key={h.title} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]">
            <h3 className="font-bold text-white">{h.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{h.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}


export default function Page() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div className="bg-[#1A2343] text-white">
     
      <section ref={heroRef} className="relative flex min-h-[85vh] items-center overflow-hidden px-6 pt-32 pb-20">
        <motion.div style={{ y: orbY }} className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/15 blur-[150px]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/15 blur-[130px]" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative px-6 max-w-4xl text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>Web Development · Canada, USA & UK</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Web Development Services That Drive{" "}
            <span className={grad}>Real Business Results</span>{" "}
            in Canada, USA & UK
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className=" mt-6 max-w-2xl text-lg leading-relaxed text-slate-50">
            Your website is your most important salesperson. We build enterprise websites and custom web apps that are fast, mobile-optimised, SEO-ready, and built to convert.
          </motion.p>
          <motion.div variants={stagger} initial="hidden" animate="show" className="mt-9 flex flex-wrap justify-center gap-3">
            {trustBadges.map((b) => (
              <motion.span key={b} variants={fadeUp} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wide text-slate-200 backdrop-blur-md">
                <Check className="h-3.5 w-3.5 text-cyan-400" /> {b}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

     
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Proven Results</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Web Development <span className={grad}>Success Stories</span></h2>
            <p className="mt-3 text-slate-400">Real results for real businesses across Canada, USA & UK.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 space-y-8">
            {caseStudies.map((s, i) => <CaseCard key={s.title} study={s} index={i} />)}
          </motion.div>
          {/* <div className="mt-10 text-center">
            <button className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/10">
              View All Case Studies
            </button>
          </div> */}
        </div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Web Development Services <span className={grad}>We Offer</span></h2>
            <p className="mt-3 text-slate-400">A comprehensive lineup of web solutions for clients across Canada, USA & UK.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesOffered.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_15px_40px_-12px_rgba(6,182,212,0.4)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300 transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-cyan-400">{s.tag}</p>
                  <h3 className="mt-1 text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

     
      <section className="relative px-6 py-14">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Key Benefits of <span className={grad}>Web Development</span></h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">Here's what you gain when your website is built by a team that prioritises performance, conversion, and compliance.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} variants={fadeUp} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.4)]">
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="relative mt-5 text-xl font-bold text-white">{b.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-400">{b.desc}</p>
                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {b.tags.map((t) => <span key={t} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">{t}</span>)}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="mt-10 text-center">
            <a 
            href="/contact"
             className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
              Start Your Web Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Our Tech Stack</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leading Platform Tools <span className={grad}>That We Use</span></h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">A modern, production-proven stack chosen for performance, scalability, and long-term maintainability.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                <h3 className="text-lg font-bold text-white">{t.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{t.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

  
      <section className="relative px-6 py-14">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Hire Developers</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Hire Web Developers <span className={grad}>Tailored to Your Needs</span></h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">Whether you're an enterprise, start-up, or agency — we have the right web developer for your project.</p>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <HireColumn label="By Business Type" items={hireByBusiness} />
            <HireColumn label="By Project Type" items={hireByProject} />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
              Hire a Web Developer
            </button>
            <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
              View Pricing
            </button>
          </div>
        </div>
      </section>

     
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>AI-Powered</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leverage <span className={grad}>AI-Powered Web</span> Solutions</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">We build AI into your website from day one — personalisation, automation, and real-time analytics that turn visitors into revenue.</p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-start">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-5">
              {aiFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title} variants={fadeUp} className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:border-cyan-400/40">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-white">{f.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
              <div className="relative rounded-3xl border border-white/10 bg-[#0a1228]/80 p-8 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">AI Engine — Live</p>
                </div>
                <div className="mt-6 space-y-5">
                  {aiMetrics.map(([label, val]) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">{label}</span>
                        <span className="font-semibold text-cyan-300">{val}%</span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${val}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {aiStats.map(([v, l]) => (
                    <div key={l} className="text-center">
                      <div className={`text-2xl font-bold ${grad}`}>{v}</div>
                      <p className="mt-1 text-xs text-slate-400">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Why Choose Us as Your <span className={grad}>Web Development</span> Partner?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300/90">
              NNC Digital Solutions is backed by <strong className="text-white">Nakshatra Namaha Creations Pvt. Ltd.</strong> — one of Bangalore's most respected digital studios with <span className="text-cyan-300">8+ years of experience</span> and <span className="text-cyan-300">565+ projects delivered</span>. We launched NNC Digital as our international arm, bringing the same proven technical excellence to Canadian, US, and UK markets.
            </p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((p) => (
              <motion.div key={p} variants={fadeUp} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition hover:border-cyan-400/40">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm text-slate-200">{p}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md md:grid-cols-4">
            {whyStats.map(([v, l]) => (
              <div key={l} className="text-center">
                <div className={`text-3xl font-bold lg:text-4xl ${grad}`}>{v}</div>
                <p className="mt-1 text-sm text-slate-400">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[140px]" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mx-auto max-w-3xl text-center">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
          <div className="relative rounded-3xl border border-white/10 bg-[#0a1228]/80 p-10 backdrop-blur-xl md:p-14">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Build Your <span className={grad}>Website?</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300/90">Join 1500+ businesses that have transformed their online presence with NNC Digital.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["Canada", "USA", "UK", "India"].map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300">{c}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                Get Started Today <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
                Book a Free Strategy Call
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}