"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Compass, Settings, Wrench, Package, Users, Wallet, Plug, ArrowRightLeft,
  Smartphone, Factory, Truck, LifeBuoy, ShieldCheck, LayoutDashboard, Link2,
  Headphones, Brain, Activity, Bot, Check, Plus, ArrowRight,
} from "lucide-react";


const trustBadges = ["Google Partner", "ISO Certified", "GDPR Compliant", "PIPEDA Ready", "Clutch Top Agency"];

const caseStudies = [
  {
    sector: "Manufacturing", region: "Canada", image: "/erointegration.webp",
    title: "40% Cost Reduction for a Canadian Manufacturer",
    challenge: "Disconnected inventory, procurement, and production systems caused costly delays and stock-outs across 5 facilities.",
    solution: "We built a unified ERP integrating procurement, inventory, and production scheduling with real-time dashboards.",
    stats: [["40%", "Cost Reduction"], ["99.2%", "Stock Accuracy"], ["10 wks", "Go-Live Time"]],
  },
  {
    sector: "Healthcare", region: "UK", image: "/billing.jpg",
    title: "55% Faster Billing for a UK Hospital Group",
    challenge: "A multi-site NHS partner was losing revenue due to manual billing, fragmented patient records, and compliance gaps.",
    solution: "We deployed a custom healthcare ERP with automated billing, GDPR-compliant records, and integrated appointment management.",
    stats: [["+55%", "Faster Billing"], ["-70%", "Revenue Leakage"], ["100%", "Compliance"]],
  },
  {
    sector: "Retail & E-Commerce", region: "USA", image: "/retail-e-commerce.webp",
    title: "3x Inventory Turnover for a US Retailer",
    challenge: "A multi-channel retailer had no real-time visibility into stock across warehouses, leading to overselling and write-offs.",
    solution: "We built a custom ERP integrating Shopify, 3PL partners, and accounting — delivering live inventory across all channels.",
    stats: [["3x", "Inventory Turns"], ["-95%", "Oversell Rate"], ["+60%", "Fulfilment Speed"]],
  },
];

const servicesOffered = [
  { icon: Compass, tag: "Strategy", title: "ERP Consulting", desc: "Tailored ERP strategy aligned to your operations across North America and the UK." },
  { icon: Settings, tag: "Setup", title: "ERP Implementation", desc: "End-to-end setup, configuration, data migration, and launch." },
  { icon: Wrench, tag: "Custom", title: "ERP Customization", desc: "Custom ERP modules built precisely around your workflows and business logic." },
  { icon: Package, tag: "Inventory", title: "Inventory Management", desc: "Real-time inventory tracking across warehouses, locations, and sales channels." },
  { icon: Users, tag: "HR", title: "HR & Payroll Module", desc: "Automated HR, attendance, payroll, and compliance built into your ERP." },
  { icon: Wallet, tag: "Finance", title: "Finance & Accounting", desc: "Integrated financial reporting, budgeting, invoicing, and multi-currency support." },
  { icon: Plug, tag: "Integration", title: "ERP Integration", desc: "Connect your ERP with CRM, e-commerce, logistics, and third-party platforms." },
  { icon: ArrowRightLeft, tag: "Migration", title: "ERP Migration", desc: "Secure, zero-loss migration from SAP, Oracle, legacy systems, or spreadsheets." },
  { icon: Smartphone, tag: "Mobile", title: "ERP Mobile Apps", desc: "Native and cross-platform mobile ERP apps for field teams and remote operations." },
  { icon: Factory, tag: "Manufacturing", title: "Manufacturing Module", desc: "Production planning, BOM management, shop-floor control, and quality tracking." },
  { icon: Truck, tag: "Procurement", title: "Vendor Management", desc: "Streamline supplier onboarding, procurement, PO management, and vendor scorecards." },
  { icon: LifeBuoy, tag: "Support", title: "ERP Support & Optimisation", desc: "Ongoing ERP administration, performance tuning, and user training post go-live." },
];

const benefits = [
  { icon: ShieldCheck, title: "Secure & Compliant", desc: "GDPR / PIPEDA / CCPA compliance built-in. Role-based access, audit trails, and zero data loss guarantee.", tags: ["GDPR", "PIPEDA", "CCPA"] },
  { icon: LayoutDashboard, title: "Real-Time Visibility", desc: "One dashboard across finance, inventory, HR, and operations. Live KPIs and cross-department reporting at a glance.", tags: ["Dashboard", "KPIs", "Reports"] },
  { icon: Link2, title: "Seamless Integration", desc: "Native connectors for Shopify, QuickBooks, Salesforce, Microsoft 365, and 100+ third-party tools.", tags: ["API", "Plugins", "No Silos"] },
  { icon: Headphones, title: "Dedicated Support", desc: "Hypercare period after go-live. Dedicated team ensuring maximum ERP adoption and continuous optimisation.", tags: ["24/7", "Training", "Go-Live"] },
];

const techStack = [
  { name: "SAP Business One", desc: "Enterprise-grade ERP for mid-market and large businesses." },
  { name: "Oracle NetSuite", desc: "Cloud ERP ideal for fast-growing, multi-entity businesses." },
  { name: "MS Dynamics 365", desc: "Integrated ERP + CRM with Microsoft 365 and Azure ecosystem." },
  { name: "Odoo ERP", desc: "Open-source, modular ERP for businesses of all sizes." },
  { name: "ERPNext", desc: "Free, open-source ERP with strong manufacturing and accounting." },
  { name: "Epicor ERP", desc: "Industry-focused ERP for manufacturing, distribution, and retail." },
  { name: "Infor CloudSuite", desc: "Cloud ERP for healthcare, manufacturing, and services sectors." },
  { name: "Custom ERP", desc: "100% bespoke when off-the-shelf doesn't fit your exact workflows.", featured: true },
];

const hireByBusiness = [
  { title: "Enterprises", desc: "Complex multi-location operations with enterprise-grade integrations, multi-currency, and permission hierarchies." },
  { title: "Agencies", desc: "Client project tracking, resource billing, retainer management, and performance dashboards — ERP designed for agency growth." },
  { title: "Start-ups", desc: "Lightweight ERP that scales without outgrowing in 12 months. Start simple, expand modules as you grow." },
];
const hireByType = [
  { title: "Analytical ERP", desc: "Turn raw business data into actionable intelligence. Identify trends, reduce costs, and make confident data-driven decisions." },
  { title: "Collaborative ERP", desc: "Unify sales, finance, supply chain, HR, and operations around a single source of truth — eliminating silos." },
  { title: "Operational ERP", desc: "Automate day-to-day business processes from procurement to invoicing so your team focuses on what matters most." },
];

const aiFeatures = [
  { icon: Brain, title: "AI Demand Forecasting", desc: "AI analyses historical orders, seasonality, and market signals — predicting demand so you never over-stock or stock-out again." },
  { icon: Activity, title: "Predictive Maintenance", desc: "ERP-embedded AI monitors equipment usage and predicts failures before they happen — cutting unplanned downtime by up to 60%." },
  { icon: Bot, title: "Intelligent Process Automation", desc: "AI-powered bots handle purchase orders, invoice matching, expense approvals, and HR workflows 24/7 — without human intervention." },
];
const aiMetrics = [
  ["Demand forecast accuracy", 97],
  ["Inventory optimisation", 92],
  ["Process automation", 88],
  ["Predictive maintenance", 94],
];
const aiStats = [["4,210", "POs Automated"], ["1,840", "Hours Saved/mo"], ["97.2%", "Accuracy"]];

const whyPoints = [
  "8+ years of proven digital excellence",
  "565+ projects delivered globally",
  "GDPR, PIPEDA & CCPA compliant delivery",
  "Serving Canada, USA & UK markets",
  "Client-first culture, enterprise-grade quality",
  "Full-stack: Web, Mobile, CRM, ERP, AI",
];

const faqs = [
  { q: "How long does ERP implementation take?", a: "Most ERP projects go live in 10–16 weeks depending on modules and integrations. Larger multi-entity rollouts with SAP/Oracle migrations can take 20–28 weeks. We share a fixed timeline after discovery." },
  { q: "Can you integrate with QuickBooks, Xero, or Sage?", a: "Yes. We build native connectors for QuickBooks, Xero, Sage, and 100+ accounting and business tools — keeping your finance data in sync in real time." },
  { q: "Is your ERP compliant with Canadian and UK tax law?", a: "Absolutely. We build in GST/HST (Canada), VAT (UK), multi-currency, and audit-ready reporting from day one, aligned to local tax regulations." },
  { q: "What does custom ERP development cost?", a: "Custom ERP projects typically start around CAD $25,000 / £15,000 for core modules. Larger enterprise platforms are priced after a discovery phase." },
  { q: "Can you migrate data from our existing ERP?", a: "Yes. We handle secure, zero-loss migration from SAP, Oracle, legacy systems, or spreadsheets — with validation and parallel-run testing." },
];


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
      <section ref={heroRef} className="relative flex min-h-[85vh] items-center overflow-hidden px-6 pt-32 pb-20">
        <motion.div style={{ y: orbY }} className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/15 blur-[150px]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/15 blur-[130px]" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative  max-w-4xl text-left px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>ERP Development · Canada, USA & UK</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Custom <span className={grad}>ERP Development Services</span> for Growing Businesses in Canada, USA & UK
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className=" mt-6 max-w-2xl text-lg leading-relaxed text-slate-50">
            Running your business on spreadsheets and disconnected tools is costing you more than you think. NNC Digital builds custom ERP systems that unify inventory, finance, HR, and operations into one powerful platform.
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
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">ERP Success <span className={grad}>Stories</span></h2>
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

   
      <section className="relative px-6 py-4">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">ERP Services <span className={grad}>We Offer</span></h2>
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

    
      <section className="relative px-6 py-24">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Key Benefits of <span className={grad}>ERP Development</span></h2>
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
              Start Your ERP Journey <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

    
      <section className="relative px-6 py-4">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Our Tech Stack</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leading ERP Platform Tools <span className={grad}>That We Use</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 ${t.featured ? "border-cyan-400/40 bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-blue-600/15" : "border-white/10 bg-white/[0.04] hover:border-cyan-400/40"}`}>
                {t.featured && <span className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />}
                <h3 className="text-lg font-bold text-white">{t.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{t.desc}</p>
                {t.featured && <span className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#020617]">Fully Bespoke</span>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
      <section className="relative px-6 py-24">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Hire Developers</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Hire ERP Developers <span className={grad}>Tailored to Your Needs</span></h2>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <HireColumn label="By Business Type" items={hireByBusiness} />
            <HireColumn label="By ERP Type" items={hireByType} />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
              Hire an ERP Developer
            </button>
            <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-4">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>AI-Powered</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leverage <span className={grad}>AI-Powered ERP</span> Solutions</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">Our AI-backed ERP automates decisions, predicts failures, and accelerates operations at scale.</p>
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
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${val}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
                        />
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

      <section className="relative px-6 py-24">
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Why Choose Us as Your <span className={grad}>ERP Development</span> Partner?</h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2">
            {whyPoints.map((p) => (
              <motion.div key={p} variants={fadeUp} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition hover:border-cyan-400/40">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm text-slate-200">{p}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
              Book a Strategy Call
            </button>
            <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
              Our Work
            </button>
          </div>
        </div>
      </section>

 
      <section className="relative px-6 py-4">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-3xl">
          <div className="text-center">
            <SectionLabel>FAQs</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Frequently Asked <span className={grad}>Questions</span></h2>
            <p className="mt-3 text-slate-400">Everything you need to know about custom ERP development for businesses in Canada, USA & UK.</p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <FaqItem key={i} item={f} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-slate-400">Still have questions? We respond within 24 hours.</p>
            <button className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
              Ask Us Anything <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}