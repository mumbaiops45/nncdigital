"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MousePointerClick, Mail, MessageCircle, Megaphone, Filter, Search,
  TrendingUp, BarChart3, Briefcase, Clock, Link2, Send, Target,
  Brain, Zap, Sparkles, Check, ArrowRight,
} from "lucide-react";


const trustBadges = ["Google Partner", "ISO Certified", "GDPR Compliant", "PIPEDA Ready", "Clutch Top Agency"];

const caseStudies = [
  {
    sector: "Manufacturing", region: "Canada", image: "/dt-manufacturing.jpg",
    title: "3x More Qualified Leads for a Canadian Manufacturer",
    challenge: "A B2B manufacturer relied entirely on cold outreach and trade shows. Leads fell off a cliff post-COVID with no digital nurture system in place.",
    solution: "We built a full HubSpot automation stack — LinkedIn lead capture, segmented email sequences, WhatsApp follow-ups, and a live ROI dashboard.",
    stats: [["3x", "Lead Volume"], ["-58%", "Cost Per Lead"], ["+$1.2M", "Pipeline"]],
  },
  {
    sector: "Healthcare", region: "UK", image: "/dt-healthcare.jpg",
    title: "42% More Booked Appointments via Automation",
    challenge: "A UK clinic group had no follow-up process — enquiries fell through the cracks, referrals were manual, and no-shows were costing revenue.",
    solution: "We built a GDPR-compliant automation: web form → CRM → WhatsApp confirmation → 24hr email reminder → SMS nudge, all triggered automatically.",
    stats: [["+42%", "More Bookings"], ["-60%", "No-Shows"], ["4.8", "CSAT Score"]],
  },
  {
    sector: "D2C E-Commerce", region: "USA", image: "/d2c.jpg",
    title: "2.4x ROAS for a US D2C Brand",
    challenge: "A US direct-to-consumer brand was spending heavily on Meta Ads with no nurture after click — 90% of leads were wasted with zero follow-up.",
    solution: "We built a Meta + Google Ads integration, abandoned-cart sequences, post-purchase flows, and loyalty automation — all inside ActiveCampaign.",
    stats: [["2.4x", "ROAS"], ["+68%", "Revenue"], ["38%", "Cart Recovery"]],
  },
];

const servicesOffered = [
  { icon: MousePointerClick, tag: "Capture", title: "Lead Capture & CRM Integration", desc: "Tailored for businesses in Canada, USA & UK." },
  { icon: Mail, tag: "Email", title: "Email Nurture Workflows", desc: "Tailored for businesses in Canada, USA & UK." },
  { icon: MessageCircle, tag: "WhatsApp", title: "WhatsApp Automation", desc: "Tailored for businesses in Canada, USA & UK." },
  { icon: Megaphone, tag: "Ads", title: "Google & Meta Ads Integration", desc: "Tailored for businesses in Canada, USA & UK." },
  { icon: Filter, tag: "Funnel", title: "Funnel Engineering", desc: "Tailored for businesses in Canada, USA & UK." },
  { icon: Search, tag: "SEO", title: "SEO & Content Marketing", desc: "Tailored for businesses in Canada, USA & UK." },
  { icon: TrendingUp, tag: "CRO", title: "Conversion Rate Optimisation", desc: "Tailored for businesses in Canada, USA & UK." },
  { icon: BarChart3, tag: "Analytics", title: "Analytics & Reporting", desc: "Tailored for businesses in Canada, USA & UK." },
  { icon: Briefcase, tag: "B2B", title: "B2B Marketing Automation", desc: "Tailored for businesses in Canada, USA & UK." },
];

const benefits = [
  { icon: Clock, title: "Always-On Lead Nurture", desc: "Your automation works 24/7 — capturing leads at 2am, sending WhatsApp follow-ups the instant someone submits a form, and moving prospects through your funnel while your team sleeps.", tags: ["24/7", "Trigger-Based", "Multi-Channel"] },
  { icon: Link2, title: "Full CRM Attribution", desc: "Every lead, every touchpoint, every deal is tracked back to its source — so you know exactly which campaigns generate revenue and which waste budget.", tags: ["HubSpot", "Salesforce", "ROI Tracking"] },
  { icon: MessageCircle, title: "WhatsApp Reach", desc: "WhatsApp has a 98% open rate vs 22% for email. We integrate the WhatsApp Business API into your automation for CA/US/UK clients — fully GDPR and PIPEDA compliant.", tags: ["98% Open Rate", "WhatsApp API", "GDPR"] },
  { icon: Target, title: "Measurable ROI", desc: "Every automation is tied to revenue metrics — cost per lead, pipeline value, closed-won attribution, and ROAS. You see exactly what your marketing investment returns.", tags: ["ROAS", "Pipeline", "Revenue"] },
];

const techStack = [
  { name: "HubSpot", desc: "All-in-one marketing, sales, and CRM platform." },
  { name: "ActiveCampaign", desc: "Advanced email + automation with CRM built in." },
  { name: "Mailchimp", desc: "Popular email marketing and audience management." },
  { name: "Meta Ads API", desc: "Facebook & Instagram ad automation and tracking." },
  { name: "Google Ads API", desc: "Search, display, and performance-max automation." },
  { name: "WhatsApp Business API", desc: "Automated, compliant WhatsApp messaging at scale." },
  { name: "Zapier", desc: "No-code automation connecting 5,000+ apps." },
  { name: "Make (Integromat)", desc: "Visual, powerful multi-step workflow automation." },
];

const hireByBusiness = [
  { title: "Enterprises", desc: "Complex multi-region campaigns with advanced segmentation, multi-brand management, and approval hierarchies." },
  { title: "Start-ups", desc: "Lightweight automation that scales — start with lead capture and email, add ads and AI as you grow." },
  { title: "Agencies", desc: "White-label automation builds, client reporting dashboards, and retainer-friendly workflows for agency growth." },
];
const hireByType = [
  { title: "Lead Generation", desc: "Turn traffic into qualified pipeline — landing pages, lead magnets, and multi-channel capture." },
  { title: "Nurture & Retention", desc: "Automated email, WhatsApp, and SMS sequences that keep prospects warm and customers loyal." },
  { title: "Performance Marketing", desc: "Ad-integrated automation with full-funnel attribution — every dollar tracked to revenue." },
];

const aiFeatures = [
  { icon: Brain, title: "AI Lead Scoring & Prioritisation", desc: "Machine learning models score every lead based on behaviour, demographics, and engagement — so your sales team always calls the hottest prospects first." },
  { icon: Clock, title: "Predictive Send-Time Optimisation", desc: "AI analyses when each contact is most likely to open, click, and convert — then sends emails and WhatsApp messages at the optimal moment for each person." },
  { icon: Sparkles, title: "AI Copywriting & Personalisation", desc: "Dynamic email and ad copy generated and personalised by AI for each segment — so every message feels 1-to-1, even when sent to 10,000 contacts at once." },
];
const aiMetrics = [
  ["Email open rate (AI optimised)", 48],
  ["WhatsApp reply rate", 72],
  ["Lead-to-meeting conversion", 34],
  ["ROAS across all ad channels", 84],
];
const aiStats = [["1,842", "Leads This Month"], ["$284K", "Pipeline Value"], ["$18", "Avg Cost/Lead"]];

const whyPoints = [
  "8+ years of proven digital excellence",
  "Serving Canada, USA & UK markets",
  "300+ automation projects delivered",
  "Client-first culture, enterprise-grade quality",
  "GDPR, PIPEDA & CASL compliant delivery",
  "Full-stack: CRM, Ads, Email, WhatsApp, AI",
];
const whyStats = [["300+", "Automations Built"], ["50+", "Clients Served"], ["98%", "Retention Rate"], ["25+", "Industries"]];


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
            <SectionLabel>Marketing Automation · Canada, USA & UK</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Marketing Automation That{" "}
            <span className={grad}>Generates & Nurtures</span>{" "}
            Qualified Leads
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className=" mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90">
            Marketing automation is an always-on system that captures, qualifies, nurtures, and converts leads — while your team focuses on closing deals.
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

      
      <section className="relative px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Proven Results</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Marketing Automation <span className={grad}>Success Stories</span></h2>
            <p className="mt-3 text-slate-400">Real results from real automation systems built for businesses in Canada, USA & UK.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 space-y-8">
            {caseStudies.map((s, i) => <CaseCard key={s.title} study={s} index={i} />)}
          </motion.div>
          <div className="mt-10 text-center">
            <a href="/case-studies" className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/10">
              View All Case Studies
            </a>
          </div>
        </div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Marketing Automation Services <span className={grad}>We Offer</span></h2>
            <p className="mt-3 text-slate-400">Everything from lead capture to closed deal — for businesses across Canada, USA & UK.</p>
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
            <SectionLabel>Why It Works</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Key Benefits of <span className={grad}>Marketing Automation</span></h2>
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
            <a href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
              Build My Automation Stack <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Our Stack</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leading Platform Tools <span className={grad}>That We Use</span></h2>
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
            <SectionLabel>Hire Specialists</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Hire Specialists <span className={grad}>Tailored to Your Needs</span></h2>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <HireColumn label="By Business Type" items={hireByBusiness} />
            <HireColumn label="By Focus Area" items={hireByType} />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {/* <button className="rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
              Hire a Specialist
            </button> */}
            <a href="/pricing" className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
              View Pricing
            </a>
          </div>
        </div>
      </section>

     
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>AI-Powered</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leverage <span className={grad}>AI-Powered Automation</span> Solutions</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">We embed AI into your marketing automation — smarter lead scoring, predictive send times, and personalised copy at scale.</p>
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
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Live Automation Dashboard</p>
                </div>
                <div className="mt-6 space-y-5">
                  {aiMetrics.map(([label, val], idx) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">{label}</span>
                        <span className="font-semibold text-cyan-300">{idx === 3 ? "4.2×" : `${val}%`}</span>
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
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Why Choose Us as Your <span className={grad}>Marketing Automation</span> Partner?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300/90">
              NNC Digital Solutions is backed by <strong className="text-white">Nakshatra Namaha Creations Pvt. Ltd.</strong> — one of Bangalore's most respected digital studios with <span className="text-cyan-300">8+ years of experience</span> and <span className="text-cyan-300">565+ projects delivered</span>. We bring proven automation expertise to Canadian, US, and UK markets with a focus on measurable ROI.
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

     
      <section className="relative overflow-hidden px-6 py-18">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[140px]" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mx-auto max-w-3xl text-center">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
          <div className="relative rounded-3xl border border-white/10 bg-[#0a1228]/80 p-10 backdrop-blur-xl md:p-14">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Automate Your <span className={grad}>Lead Generation?</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300/90">Join 300+ businesses that have scaled their revenue with our marketing automation systems.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["🇨🇦 Canada", "🇺🇸 USA", "🇬🇧 UK", "🇮🇳 India"].map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300">{c}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                Get Started Today <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/contact" className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
                Book a Free Strategy Call
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}