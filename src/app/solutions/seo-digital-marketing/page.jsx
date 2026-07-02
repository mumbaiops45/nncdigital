"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search, Wrench, PenTool, Link as LinkIcon, MapPin, MousePointerClick,
  Share2, BarChart3, TrendingUp, Target, DollarSign, Gauge,
  Brain, FileText, Sparkles, Check, ArrowRight,
} from "lucide-react";

/* ---------------- DATA ---------------- */
const trustBadges = ["Google Partner", "ISO Certified", "GDPR Compliant", "PIPEDA Ready", "Clutch Top Agency"];

const caseStudies = [
  {
    sector: "Manufacturing", region: "Canada", image: "/seo-manufacturing.jpg",
    title: "312% Organic Traffic Growth for a Canadian Manufacturer",
    challenge: "A B2B manufacturer ranked on page 5 for its core keywords. Competitors dominated search while they relied entirely on referrals.",
    solution: "Full technical SEO overhaul, 40+ optimised landing pages, authority link-building, and a content engine targeting high-intent buyer keywords.",
    stats: [["+312%", "Organic Traffic"], ["Top 3", "Core Keywords"], ["+$1.8M", "Pipeline"]],
  },
  {
    sector: "Healthcare", region: "UK", image: "/seo-healthcare.jpg",
    title: "5x Local Enquiries for a UK Clinic Group",
    challenge: "A multi-location UK clinic was invisible in local search. Patients couldn't find them on Google Maps or 'near me' searches.",
    solution: "Local SEO across all locations, Google Business Profile optimisation, location landing pages, and a review-generation system.",
    stats: [["5x", "Local Enquiries"], ["#1", "Maps Ranking"], ["4.9★", "Review Score"]],
  },
  {
    sector: "D2C E-Commerce", region: "USA", image: "/D2C.jpg",
    title: "4.2x ROAS for a US D2C Brand",
    challenge: "A D2C brand was burning ad spend on broad, unprofitable campaigns with no conversion tracking or funnel optimisation.",
    solution: "Restructured Google & Meta Ads, conversion-optimised landing pages, and full-funnel tracking tied to actual revenue.",
    stats: [["4.2x", "ROAS"], ["-44%", "Cost/Acquisition"], ["+89%", "Revenue"]],
  },
];

const servicesOffered = [
  { icon: Search, tag: "SEO", title: "Search Engine Optimisation", desc: "Rank higher on Google with on-page, off-page, and content SEO for CA/US/UK markets." },
  { icon: Wrench, tag: "Technical", title: "Technical SEO", desc: "Site speed, Core Web Vitals, crawlability, schema, and indexation fixes that move rankings." },
  { icon: PenTool, tag: "Content", title: "Content Marketing", desc: "Buyer-intent blogs, guides, and landing pages that attract and convert qualified traffic." },
  { icon: LinkIcon, tag: "Authority", title: "Link Building", desc: "White-hat backlinks from authoritative, relevant domains that build long-term ranking power." },
  { icon: MapPin, tag: "Local", title: "Local SEO", desc: "Google Business Profile, local citations, and 'near me' optimisation for multi-location businesses." },
  { icon: MousePointerClick, tag: "PPC", title: "PPC & Google Ads", desc: "Profitable search, display, and Performance Max campaigns with full conversion tracking." },
  { icon: Share2, tag: "Social", title: "Social Media Marketing", desc: "Meta, LinkedIn, and organic social strategy that builds brand and drives qualified leads." },
  { icon: BarChart3, tag: "Analytics", title: "Analytics & Reporting", desc: "GA4, Search Console, and custom dashboards tying every effort back to revenue." },
];

const benefits = [
  { icon: TrendingUp, title: "Compounding Organic Growth", desc: "Unlike ads that stop the moment you stop paying, SEO builds compounding traffic. Rankings you earn today keep delivering leads for years — the highest-ROI channel in marketing.", tags: ["Long-Term", "Compounding", "Owned Traffic"] },
  { icon: Target, title: "High-Intent Traffic", desc: "We target buyer-intent keywords — people actively searching for what you sell. That means higher conversion rates and lower cost per lead than any interruption-based advertising.", tags: ["Buyer Intent", "High Conversion", "Qualified"] },
  { icon: DollarSign, title: "Measurable ROI", desc: "Every ranking, click, and conversion is tracked back to revenue. You see exactly which keywords, pages, and campaigns generate pipeline — and where every dollar goes.", tags: ["GA4", "ROI Tracking", "Attribution"] },
  { icon: Gauge, title: "Technical Excellence", desc: "Fast, crawlable, schema-rich sites that Google loves. We fix Core Web Vitals, indexation, and site architecture so your content actually ranks.", tags: ["Core Web Vitals", "Schema", "Site Health"] },
];

const techStack = [
  { name: "Google Analytics 4", desc: "Advanced traffic, behaviour, and conversion analytics." },
  { name: "Google Search Console", desc: "Indexation, rankings, and search performance monitoring." },
  { name: "Ahrefs", desc: "Backlink analysis, keyword research, and competitor tracking." },
  { name: "SEMrush", desc: "All-in-one SEO, PPC, and content research suite." },
  { name: "Screaming Frog", desc: "Technical SEO crawling and site audit powerhouse." },
  { name: "Google Ads", desc: "Search, display, and Performance Max campaign management." },
  { name: "Meta Ads Manager", desc: "Facebook & Instagram advertising and audience targeting." },
  { name: "Google Tag Manager", desc: "Conversion tracking, events, and tag deployment at scale." },
];

const hireByBusiness = [
  { title: "Enterprises", desc: "Multi-location, multi-market SEO and paid strategies with advanced reporting and dedicated account management." },
  { title: "Start-ups", desc: "Lean, high-ROI campaigns focused on the keywords and channels that drive early growth without wasted budget." },
  { title: "Agencies", desc: "White-label SEO and PPC fulfilment with clean reporting your clients will love and on-time delivery." },
];
const hireByType = [
  { title: "SEO & Organic", desc: "Technical SEO, content, and link-building for compounding, long-term organic traffic growth." },
  { title: "Paid & Performance", desc: "Google & Meta Ads engineered for profitable ROAS with full-funnel conversion tracking." },
  { title: "Analytical & CRO", desc: "Turn traffic into revenue — analytics, A/B testing, and conversion rate optimisation." },
];

const aiFeatures = [
  { icon: Brain, title: "AI Keyword & Intent Analysis", desc: "AI clusters thousands of keywords by search intent — surfacing the exact terms your buyers use and the content gaps your competitors are ranking for." },
  { icon: FileText, title: "AI-Assisted Content Creation", desc: "AI accelerates research, outlines, and drafts — then our specialists refine for E-E-A-T, brand voice, and genuine expertise that ranks and converts." },
  { icon: Sparkles, title: "Predictive Performance Insights", desc: "Machine learning forecasts which keywords, pages, and campaigns will drive the most revenue — so we invest budget where it delivers the highest return." },
];
const aiMetrics = [
  ["Keyword ranking improvement", 88],
  ["Organic traffic growth", 92],
  ["Content ranking rate", 76],
  ["Ad conversion rate", 84],
];
const aiStats = [["+312%", "Traffic Growth"], ["4.2×", "Avg ROAS"], ["Top 3", "Keyword Rank"]];

const whyPoints = [
  "8+ years of proven digital excellence",
  "Serving Canada, USA & UK markets",
  "Google Partner certified team",
  "Client-first culture, measurable ROI focus",
  "White-hat, penalty-safe SEO practices",
  "Full-funnel: SEO, PPC, Content, Social",
];
const whyStats = [["+312%", "Avg Traffic Lift"], ["4.2×", "Avg ROAS"], ["50+", "Clients Ranked"], ["25+", "Industries"]];

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
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative flex min-h-[85vh] items-center overflow-hidden px-6 pt-32 pb-20">
        <motion.div style={{ y: orbY }} className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/15 blur-[150px]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/15 blur-[130px]" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative px-6 max-w-4xl text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>SEO & Digital Marketing · Canada, USA & UK</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            SEO & Digital Marketing That{" "}
            <span className={grad}>Drives Traffic & Revenue</span>{" "}
            in Canada, USA & UK
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className=" mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90">
            Being invisible on Google costs you customers every single day. We build compounding organic growth and profitable paid campaigns that turn search traffic into real revenue.
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

      {/* ===== SUCCESS STORIES ===== */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Proven Results</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">SEO & Marketing <span className={grad}>Success Stories</span></h2>
            <p className="mt-3 text-slate-400">Real ranking and revenue results for businesses in Canada, USA & UK.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 space-y-8">
            {caseStudies.map((s, i) => <CaseCard key={s.title} study={s} index={i} />)}
          </motion.div>
          <div className="mt-10 text-center">
            <button className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/10">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">SEO & Marketing Services <span className={grad}>We Offer</span></h2>
            <p className="mt-3 text-slate-400">Full-funnel search and digital marketing for businesses across Canada, USA & UK.</p>
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
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Key Benefits of <span className={grad}>SEO & Digital Marketing</span></h2>
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
            <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
              Get a Free SEO Audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Our Stack</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leading Marketing Tools <span className={grad}>That We Use</span></h2>
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

      {/* ===== HIRE SPECIALISTS ===== */}
      <section className="relative px-6 py-24">
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
            <button className="rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
              Hire a Specialist
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
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leverage <span className={grad}>AI-Powered SEO</span> Solutions</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">We use AI for keyword intent, content acceleration, and predictive performance — combined with human SEO expertise.</p>
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
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Live Performance Dashboard</p>
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
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Why Choose Us as Your <span className={grad}>SEO & Marketing</span> Partner?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300/90">
              NNC Digital Solutions is backed by <strong className="text-white">Nakshatra Namaha Creations Pvt. Ltd.</strong> — one of Bangalore's most respected digital studios with <span className="text-cyan-300">8+ years of experience</span> and <span className="text-cyan-300">565+ projects delivered</span>. We bring proven, white-hat SEO and performance marketing expertise to Canadian, US, and UK markets.
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
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Dominate <span className={grad}>Search?</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300/90">Join 50+ businesses that have grown their traffic and revenue with NNC Digital.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["🇨🇦 Canada", "🇺🇸 USA", "🇬🇧 UK", "🇮🇳 India"].map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300">{c}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                Get a Free SEO Audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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