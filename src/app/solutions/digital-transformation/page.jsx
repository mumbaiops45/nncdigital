
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search, PenTool, Hammer, Rocket, Cloud, Cpu, Workflow, ShieldCheck,
  Users, BarChart3, Zap, Target, Layers, RefreshCw, Brain, Check, ArrowRight,
} from "lucide-react";


const trustBadges = ["Google Partner", "ISO Certified", "GDPR Compliant", "PIPEDA Ready", "Clutch Top Agency"];

const caseStudies = [
  {
    sector: "Manufacturing", region: "Canada", image: "/dt-manufacturing.jpg",
    title: "End-to-End Digital Overhaul for a Canadian Manufacturer",
    challenge: "Paper-based operations, siloed departments, and zero real-time visibility were capping growth and inflating operational costs.",
    solution: "We replaced legacy systems with a unified ERP + CRM, automated workflows, and a live analytics layer across all facilities.",
    stats: [["-42%", "Operating Cost"], ["3x", "Process Speed"], ["100%", "Digital Ops"]],
  },
  {
    sector: "Healthcare", region: "UK", image: "/dt-healthcare.jpg",
    title: "Digital-First Transformation for a UK Clinic Network",
    challenge: "Fragmented patient records, manual scheduling, and no data strategy meant slow care and compliance risk across 12 sites.",
    solution: "We built a cloud-native platform: unified records, automated scheduling, patient app, and GDPR-compliant analytics.",
    stats: [["+55%", "Efficiency"], ["-70%", "Admin Load"], ["100%", "Compliance"]],
  },
  {
    sector: "Retail", region: "USA", image: "/dt-retail.webp",
    title: "Omnichannel Transformation for a US Retailer",
    challenge: "Disconnected online and in-store systems created inventory chaos, poor customer experience, and lost revenue.",
    solution: "We unified e-commerce, POS, inventory, and CRM into one real-time platform with AI-driven demand forecasting.",
    stats: [["+68%", "Revenue"], ["3x", "Inventory Turns"], ["4.8", "CX Score"]],
  },
];

const phases = [
  { icon: Search, phase: "Phase 01", title: "Assess & Strategise", desc: "We audit your current systems, processes, and data — then map a clear, prioritised transformation roadmap tied to business outcomes." },
  { icon: PenTool, phase: "Phase 02", title: "Design & Architect", desc: "We design the target architecture — cloud infrastructure, integrations, data flows, and user experiences — before a line of code." },
  { icon: Hammer, phase: "Phase 03", title: "Build & Migrate", desc: "We build in agile sprints, migrate data with zero loss, and integrate systems — with weekly demos and full transparency." },
  { icon: Rocket, phase: "Phase 04", title: "Launch & Scale", desc: "We deploy, train your team, and provide hypercare — then continuously optimise and scale as your business grows." },
];

const servicesOffered = [
  { icon: Cloud, tag: "Cloud", title: "Cloud Migration", desc: "Move legacy systems to AWS, Azure, or GCP — secure, scalable, and cost-optimised." },
  { icon: Workflow, tag: "Automation", title: "Process Automation", desc: "Automate manual workflows across departments to eliminate errors and free up your team." },
  { icon: Layers, tag: "Integration", title: "Systems Integration", desc: "Connect ERP, CRM, e-commerce, and legacy tools into one unified, real-time data layer." },
  { icon: BarChart3, tag: "Data", title: "Data & Analytics", desc: "Turn scattered data into dashboards, insights, and predictive intelligence for confident decisions." },
  { icon: Cpu, tag: "AI", title: "AI & ML Integration", desc: "Embed AI into your operations — forecasting, automation, and intelligent decision support." },
  { icon: RefreshCw, tag: "Legacy", title: "Legacy Modernisation", desc: "Replace outdated systems with modern, maintainable, future-proof platforms." },
  { icon: ShieldCheck, tag: "Security", title: "Security & Compliance", desc: "GDPR, PIPEDA, and CCPA-ready architecture with audit trails and role-based access." },
  { icon: Users, tag: "Adoption", title: "Change Management", desc: "Training, documentation, and adoption programmes so your team embraces the change." },
];

const benefits = [
  { icon: Zap, title: "Radical Efficiency", desc: "Digital transformation eliminates manual work, removes bottlenecks, and connects your systems — so your team does more with less, and operations run at 3x speed.", tags: ["Automation", "3x Speed", "Less Manual"] },
  { icon: BarChart3, title: "Data-Driven Decisions", desc: "Replace gut-feel with real-time dashboards and predictive analytics. Every decision is backed by live data from across your entire operation.", tags: ["Live Data", "Dashboards", "Predictive"] },
  { icon: Target, title: "Future-Proof Scalability", desc: "Cloud-native, modular architecture that scales with you. Add capacity, markets, and features without re-platforming or costly rebuilds.", tags: ["Cloud-Native", "Modular", "Scalable"] },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "Bank-grade security, GDPR/PIPEDA/CCPA compliance, encryption, and audit trails built into every layer of your transformed stack.", tags: ["GDPR", "Encryption", "Audit"] },
];

const techStack = [
  { name: "AWS", desc: "Enterprise cloud infrastructure and serverless computing." },
  { name: "Microsoft Azure", desc: "Cloud, AI, and enterprise integration ecosystem." },
  { name: "Google Cloud", desc: "Scalable cloud, BigQuery analytics, and AI/ML." },
  { name: "Kubernetes", desc: "Container orchestration for scalable, resilient systems." },
  { name: "Snowflake", desc: "Cloud data warehouse for unified analytics." },
  { name: "Power BI / Tableau", desc: "Enterprise business intelligence and visualisation." },
  { name: "REST & GraphQL", desc: "Modern API layers connecting every system." },
  { name: "Docker & CI/CD", desc: "Automated build, test, and deployment pipelines." },
];

const hireByBusiness = [
  { title: "Enterprises", desc: "Large-scale, multi-system transformations with governance, security, and phased rollouts across regions." },
  { title: "Mid-Market", desc: "Modernise operations, unify systems, and adopt cloud + AI without enterprise complexity or cost." },
  { title: "Scale-ups", desc: "Build future-proof foundations now — so rapid growth doesn't break your systems in 12 months." },
];
const hireByFocus = [
  { title: "Cloud & Infrastructure", desc: "Migration, cloud-native architecture, and DevOps for scalable, resilient systems." },
  { title: "Data & AI", desc: "Data engineering, analytics platforms, and AI/ML integration for intelligent operations." },
  { title: "Process & Integration", desc: "Workflow automation and systems integration that eliminate silos and manual work." },
];

const aiFeatures = [
  { icon: Brain, title: "Intelligent Process Automation", desc: "AI-powered automation handles complex, multi-step workflows across your business — invoicing, approvals, data entry — 24/7 without human input." },
  { icon: BarChart3, title: "Predictive Business Intelligence", desc: "Machine learning forecasts demand, cash flow, and risk — surfacing insights before problems happen so you lead instead of react." },
  { icon: Cpu, title: "AI-Augmented Decision Support", desc: "Embed AI copilots into your operations — recommending next-best actions, flagging anomalies, and accelerating every decision your team makes." },
];
const aiMetrics = [
  ["Process automation coverage", 90],
  ["Forecast accuracy", 95],
  ["Manual task reduction", 78],
  ["System uptime", 99],
];
const aiStats = [["-42%", "Op Costs"], ["3x", "Faster Ops"], ["99.9%", "Uptime"]];

const whyPoints = [
  "8+ years of proven digital excellence",
  "Serving Canada, USA & UK markets",
  "565+ projects delivered globally",
  "End-to-end: strategy to scale",
  "GDPR, PIPEDA & CCPA compliant delivery",
  "Cloud, AI, Data, Automation expertise",
];
const whyStats = [["565+", "Projects"], ["100+", "Team Members"], ["98%", "Retention"], ["25+", "Industries"]];

/* ---------------- ANIM HELPERS ---------------- */
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

/* ---------------- TRANSFORMATION TIMELINE (parallax fill) ---------------- */
function TransformTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl">
      <div className="absolute left-6 top-0 h-full w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2" />
      <motion.div style={{ height: lineHeight }} className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-500 md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-12">
        {phases.map((p, i) => {
          const Icon = p.icon;
          const left = i % 2 === 0;
          return (
            <motion.div
              key={p.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className={`relative pl-16 md:w-1/2 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
            >
              <div className={`absolute left-6 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.7)] md:left-auto ${left ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"}`}>
                <Icon className="h-4 w-4 text-[#020617]" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:border-cyan-400/40">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{p.phase}</span>
                <h4 className="mt-2 text-lg font-bold text-white">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
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

/* ---------------- PAGE ---------------- */
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
            <SectionLabel>Digital Transformation · Canada, USA & UK</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            End-to-End <span className={grad}>Digital Transformation</span> for Modern Businesses
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className=" mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90">
            Legacy systems, manual processes, and disconnected data are silently capping your growth. We transform how your business operates — from strategy to cloud, automation, and AI.
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

      
      <section className="relative overflow-hidden px-6 py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/8 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Your Transformation <span className={grad}>Journey</span></h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">A proven, phased approach — from assessment to scale, with full transparency at every step.</p>
          </div>
          <div className="mt-16"><TransformTimeline /></div>
        </div>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Proven Results</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Transformation <span className={grad}>Success Stories</span></h2>
            <p className="mt-3 text-slate-400">Real results for businesses in Canada, USA & UK.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 space-y-8">
            {caseStudies.map((s, i) => <CaseCard key={s.title} study={s} index={i} />)}
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Transformation Services <span className={grad}>We Offer</span></h2>
            <p className="mt-3 text-slate-400">Every capability you need to modernise, automate, and scale.</p>
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

      {/* ===== BENEFITS ===== */}
      <section className="relative px-6 py-24">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Key Benefits of <span className={grad}>Digital Transformation</span></h2>
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
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Our Stack</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Enterprise Platforms <span className={grad}>That We Use</span></h2>
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

      {/* ===== HIRE EXPERTS ===== */}
      <section className="relative px-6 py-24">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Hire Experts</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Hire Experts <span className={grad}>Tailored to Your Needs</span></h2>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <HireColumn label="By Business Type" items={hireByBusiness} />
            <HireColumn label="By Focus Area" items={hireByFocus} />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
              Hire an Expert
            </button>
            <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* ===== AI-POWERED ===== */}
      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>AI-Powered</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Transformation <span className={grad}>Powered by AI</span></h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">We embed AI at the core of your transformation — automation, prediction, and intelligent decision support.</p>
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
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Live Operations Dashboard</p>
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

      {/* ===== WHY CHOOSE US ===== */}
      <section className="relative px-6 py-24">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Why Choose Us as Your <span className={grad}>Transformation</span> Partner?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300/90">
              NNC Digital Solutions is backed by <strong className="text-white">Nakshatra Namaha Creations Pvt. Ltd.</strong> — one of Bangalore's most respected digital studios with <span className="text-cyan-300">8+ years of experience</span> and <span className="text-cyan-300">565+ projects delivered</span>. We bring end-to-end transformation expertise to Canadian, US, and UK markets.
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

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[140px]" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mx-auto max-w-3xl text-center">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
          <div className="relative rounded-3xl border border-white/10 bg-[#0a1228]/80 p-10 backdrop-blur-xl md:p-14">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Transform Your <span className={grad}>Business?</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300/90">Join 565+ businesses that have modernised, automated, and scaled with NNC Digital.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["🇨🇦 Canada", "🇺🇸 USA", "🇬🇧 UK", "🇮🇳 India"].map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300">{c}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                Book a Free Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
                View Our Work
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}