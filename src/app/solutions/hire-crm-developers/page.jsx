"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Clock, Calendar, Briefcase, Search, UserCheck, Rocket, Cloud,
  Code2, Plug, Database, LayoutDashboard, ShieldCheck, DollarSign,
  Globe2, Zap, Check, Plus, ArrowRight, Send, Lock,
} from "lucide-react";


const trustBadges = ["Salesforce Certified", "HubSpot Partner", "Zoho Authorised", "GDPR Compliant", "Clutch Top Agency"];

const models = [
  { icon: Clock, title: "Full-Time Dedicated", subtitle: "160 hrs / month", desc: "A dedicated CRM developer working exclusively on your projects, fully integrated into your team.", points: ["Exclusive resource", "Your timezone", "Direct communication", "Monthly rolling"], popular: true },
  { icon: Calendar, title: "Part-Time", subtitle: "80 hrs / month", desc: "Flexible part-time developer for ongoing maintenance, enhancements, and smaller builds.", points: ["Flexible hours", "Cost-effective", "Scale up anytime", "No long lock-in"] },
  { icon: Briefcase, title: "Project-Based", subtitle: "Fixed scope", desc: "Fixed-price, fixed-timeline engagement for a clearly defined CRM project.", points: ["Fixed cost", "Defined deliverables", "Milestone billing", "No scope creep"] },
];

const skills = [
  { icon: Cloud, name: "Salesforce", desc: "Apex, Lightning, Flows, integrations" },
  { icon: LayoutDashboard, name: "HubSpot", desc: "Workflows, custom objects, APIs" },
  { icon: Database, name: "Zoho CRM", desc: "Deluge, custom modules, automation" },
  { icon: Code2, name: "Custom CRM", desc: "Node, React, MongoDB, PostgreSQL" },
  { icon: Plug, name: "Integrations", desc: "WhatsApp, Stripe, ERP, telephony" },
  { icon: LayoutDashboard, name: "Dashboards", desc: "Real-time analytics & reporting" },
  { icon: Zap, name: "Automation", desc: "Lead scoring, workflows, triggers" },
  { icon: ShieldCheck, name: "Compliance", desc: "GDPR, PIPEDA, CCPA-ready builds" },
];

const process = [
  { icon: Search, phase: "Step 01", title: "Share Your Requirements", desc: "Tell us your CRM stack, project scope, and the skills you need. We respond within 24 hours." },
  { icon: UserCheck, phase: "Step 02", title: "Get Matched & Interview", desc: "We shortlist pre-vetted CRM developers matching your needs. You interview and pick your developer." },
  { icon: Rocket, phase: "Step 03", title: "Onboard in 48 Hours", desc: "Your developer starts within 2 business days — fully set up, in your timezone, ready to build." },
  { icon: Zap, phase: "Step 04", title: "Scale as You Grow", desc: "Add developers, switch models, or scale down anytime. Full flexibility, zero long-term lock-in." },
];

const whyPoints = [
  { icon: DollarSign, title: "Up to 60% Cost Savings", desc: "Access senior CRM talent at a fraction of North American or UK hiring costs — without compromising quality." },
  { icon: UserCheck, title: "Pre-Vetted Developers", desc: "Every developer is technically screened, background-checked, and certified before they ever reach you." },
  { icon: Globe2, title: "Your Timezone", desc: "Our developers work in Canadian, US, and UK business hours for real-time collaboration." },
  { icon: Rocket, title: "48-Hour Onboarding", desc: "Skip months of hiring. Your vetted developer starts in 2 business days, fully ready to contribute." },
  { icon: ShieldCheck, title: "IP Protection & NDAs", desc: "Full IP assignment, signed NDAs, and secure infrastructure — your code and data stay yours." },
  { icon: Zap, title: "No Recruitment Overhead", desc: "No job posts, no screening, no HR admin. We handle everything — you just pick and build." },
];

const rates = [
  { role: "Junior CRM Developer", exp: "1–3 years", rate: "$2,200/mo", cad: "CA$3,000/mo", gbp: "£1,800/mo" },
  { role: "Mid-Level CRM Developer", exp: "3–5 years", rate: "$3,500/mo", cad: "CA$4,700/mo", gbp: "£2,800/mo" },
  { role: "Senior CRM Developer", exp: "5–8 years", rate: "$4,800/mo", cad: "CA$6,400/mo", gbp: "£3,900/mo" },
  { role: "CRM Architect / Lead", exp: "8+ years", rate: "$6,500/mo", cad: "CA$8,700/mo", gbp: "£5,200/mo" },
];

const faqs = [
  { q: "How quickly can a CRM developer start?", a: "Once you approve your matched developer, onboarding takes as little as 48 hours. Your developer is set up in your timezone and ready to contribute immediately." },
  { q: "Are the developers full-time employees or freelancers?", a: "They're full-time NNC Digital team members — not freelancers. This means consistency, accountability, and a developer who's fully invested in your success." },
  { q: "What if the developer isn't the right fit?", a: "You interview before committing. If a developer isn't the right fit within the first two weeks, we replace them at no cost — no questions asked." },
  { q: "Who owns the code and IP?", a: "You do — 100%. Every engagement includes full IP assignment and signed NDAs. All code, data, and deliverables belong entirely to you." },
  { q: "Can I scale the team up or down?", a: "Yes. Our engagements are monthly and rolling. Add developers during busy periods, scale down when things quieten — full flexibility with no long-term lock-in." },
];

const projectTypes = ["Salesforce", "HubSpot", "Zoho CRM", "Custom CRM", "CRM Integration", "CRM Migration", "Not sure yet"];
const dialCodes = ["🇨🇦 +1", "🇺🇸 +1", "🇬🇧 +44", "🇮🇳 +91"];


const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const grad = "bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent";
const inputClass = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.3em] text-cyan-300/80 backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      {children}
    </span>
  );
}


function ProcessTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div ref={ref} className="relative mx-auto max-w-3xl">
      <div className="absolute left-6 top-0 h-full w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2" />
      <motion.div style={{ height: lineHeight }} className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-500 md:left-1/2 md:-translate-x-1/2" />
      <div className="space-y-12">
        {process.map((p, i) => {
          const Icon = p.icon;
          const left = i % 2 === 0;
          return (
            <motion.div key={p.phase} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }} className={`relative pl-16 md:w-1/2 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}>
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

function FaqItem({ item, isOpen, onClick }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition hover:border-cyan-400/30">
      <button onClick={onClick} className="flex w-full items-center justify-between gap-4 p-5 text-left">
        <span className="font-semibold text-white">{item.q}</span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default function Page() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-[#1A2343] text-white">
    
      <section ref={heroRef} className="relative flex min-h-[80vh] items-center overflow-hidden px-6 pt-32 pb-20">
        <motion.div style={{ y: orbY }} className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/15 blur-[150px]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/15 blur-[130px]" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Hire CRM Developers</SectionLabel>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Hire Expert <span className={grad}>CRM Developers</span> in 48 Hours
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300/90">
              Skip months of hiring. Get pre-vetted, certified CRM developers — Salesforce, HubSpot, Zoho, or custom — working in your timezone at up to 60% less cost.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-8 flex flex-wrap gap-2.5">
              {trustBadges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md">
                  <Check className="h-3 w-3 text-cyan-400" /> {b}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* hero image */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
            <div className="absolute -inset-[2px] rounded-[30px] bg-[conic-gradient(from_0deg,#34d399,#22d3ee,#3b82f6,#22d3ee,#34d399)] bg-[length:300%_300%] opacity-50 blur-[8px] animate-[ringSpin_8s_linear_infinite]" />
            <div className="relative h-[460px] overflow-hidden rounded-[28px] border border-white/10">
              <img src="/hire-crm-hero.webp" alt="CRM developers" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                {[["48h", "Onboarding"], ["60%", "Cost Saving"], ["100%", "Vetted"]].map(([v, l]) => (
                  <div key={l} className="rounded-xl border border-white/10 bg-[#0a1228]/70 p-3 text-center backdrop-blur-md">
                    <div className={`text-xl font-bold ${grad}`}>{v}</div>
                    <p className="text-[10px] text-slate-400">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Engagement Models</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Hire the Way <span className={grad}>That Works for You</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 lg:grid-cols-3">
            {models.map((m) => {
              const Icon = m.icon;
              return (
                <motion.div key={m.title} variants={fadeUp} className={`group relative flex flex-col overflow-hidden rounded-3xl border p-8 backdrop-blur-md transition-all duration-500 ${m.popular ? "border-cyan-400/50 bg-gradient-to-b from-cyan-500/10 via-white/[0.04] to-white/[0.04] shadow-[0_25px_70px_-20px_rgba(6,182,212,0.5)]" : "border-white/10 bg-white/[0.04] hover:-translate-y-1.5 hover:border-cyan-400/40"}`}>
                  
                  {m.popular && (
                    <>
                      <span className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />
                      <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Popular</span>
                    </>
                  )}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300 transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{m.title}</h3>
                  <p className="mt-1 text-sm text-cyan-300">{m.subtitle}</p>
                  <p className="mt-4 text-sm text-slate-400">{m.desc}</p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {m.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" /> {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

     
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Expertise</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">CRM Skills <span className={grad}>Our Developers Bring</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.name} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_15px_40px_-12px_rgba(6,182,212,0.4)]">
                   <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300 transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-white">{s.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{s.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      
      <section className="relative overflow-hidden px-6 py-14">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/8 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">From Enquiry to <span className={grad}>Onboarded in 48 Hours</span></h2>
          </div>
          <div className="mt-16"><ProcessTimeline /></div>
        </div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Why Hire From Us</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">The Smarter Way to <span className={grad}>Build Your CRM Team</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((w) => {
              const Icon = w.icon;
              return (
                <motion.div key={w.title} variants={fadeUp} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.4)]">
                   <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-5 text-lg font-bold text-white">{w.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-400">{w.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-4xl">
          <div className="text-center">
            <SectionLabel>Transparent Rates</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Simple Monthly <span className={grad}>Rates</span></h2>
            <p className="mt-3 text-sm text-slate-500">*No recruitment fees. No hidden costs. Cancel anytime with 30 days' notice.</p>
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-4 border-b border-white/10 bg-white/[0.02] p-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <span>Role</span>
              <span>Experience</span>
              <span className="text-right text-cyan-300">USD / month</span>
            </div>
            {rates.map((r, i) => (
              <div key={r.role} className={`grid grid-cols-[1.4fr_1fr_1fr] items-center gap-4 p-5 text-sm ${i % 2 ? "bg-white/[0.02]" : ""}`}>
                <span className="font-medium text-white">{r.role}</span>
                <span className="text-slate-400">{r.exp}</span>
                <span className={`text-right text-lg font-bold ${grad}`}>{r.rate}</span>
              </div>
            ))}
          </motion.div>
          <p className="mt-4 text-center text-sm text-slate-500">CAD & GBP pricing available. Final rate confirmed after a free consultation.</p>
        </div>
      </section>

    
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-3xl">
          <div className="text-center">
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Hire Your <span className={grad}>CRM Developer</span></h2>
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mt-10">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
            <div className="relative rounded-3xl border border-white/10 bg-[#0a1228]/90 p-8 backdrop-blur-xl md:p-10">
              <span className="absolute left-10 right-10 top-0 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="First Name *" className={inputClass} />
                <input type="text" placeholder="Last Name" className={inputClass} />
              </div>
              <div className="mt-4 grid grid-cols-[110px_1fr] gap-3">
                <select className={inputClass}>{dialCodes.map((d) => <option key={d} className="bg-[#0a1228]">{d}</option>)}</select>
                <input type="tel" placeholder="Phone *" className={inputClass} />
              </div>
              <input type="email" placeholder="Business Email *" className={`${inputClass} mt-4`} />
              <select className={`${inputClass} mt-4`} defaultValue="">
                <option value="" disabled className="bg-[#0a1228]">CRM Platform *</option>
                {projectTypes.map((t) => <option key={t} className="bg-[#0a1228]">{t}</option>)}
              </select>
              <textarea rows="3" placeholder="Tell us what you need help with..." className={`${inputClass} mt-4 resize-none`} />
              <button className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] py-4 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.5)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                <Send className="h-4 w-4" /> Get Matched with a Developer
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
                <Lock className="h-3.5 w-3.5" /> Free consultation • No commitment required
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    
      <section className="relative px-6 py-18">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-3xl">
          <div className="text-center">
            <SectionLabel>FAQs</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Frequently Asked <span className={grad}>Questions</span></h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <FaqItem key={i} item={f} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes ringSpin { 0% { background-position: 0% 50%; } 100% { background-position: 300% 50%; } }
      `}</style>
    </div>
  );
}