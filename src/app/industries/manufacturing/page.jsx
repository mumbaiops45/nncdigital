"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Handshake, BarChart3, Settings, Package, Plug, Wrench, CheckCircle2,
  Building2, TrendingUp, Factory, Globe2, Zap, Smartphone, Phone,
  Send, Lock, Check, Plus, ArrowRight,
} from "lucide-react";



const caseStudies = [
  {
    sector: "Manufacturing", region: "Canada", image: "/manufacturingcrm.jpg",
    title: "35% Efficiency Gain for a Canadian Manufacturer",
    challenge: "Five facilities ran on disconnected systems — no shared visibility into production, inventory, or the dealer pipeline.",
    solution: "We deployed a dealer CRM and production planning system connecting all 5 facilities in real time.",
    stats: [["+35%", "Efficiency"], ["-60%", "Response"], ["312%", "ROI"]],
  },
  {
    sector: "Industrial Supply", region: "USA", image: "/industrailusa.webp",
    title: "28% Inventory Reduction for a US Industrial Supplier",
    challenge: "Overstocking and manual reorder processes tied up capital and caused fulfilment errors across warehouses.",
    solution: "ERP integration and a warehouse management system reduced inventory levels while maintaining 99% order accuracy.",
    stats: [["-28%", "Inventory"], ["99.2%", "Accuracy"], ["+41%", "Fulfilment"]],
  },
  {
    sector: "Manufacturing", region: "UK", image: "/dealernetwork.webp",
    title: "52% Faster Dealer Onboarding for a UK Manufacturer",
    challenge: "Slow, manual dealer onboarding delayed sales and gave zero visibility into the distribution pipeline.",
    solution: "An automated dealer management system slashed onboarding time and gave full sales pipeline visibility.",
    stats: [["-52%", "Onboarding"], ["+78%", "Pipeline"], ["+34%", "Sales"]],
  },
];

const solutions = [
  { icon: Handshake, title: "Dealer & Distributor CRM", desc: "Complete dealer network management, territory assignments, performance tracking, and automated order workflows." },
  { icon: BarChart3, title: "Sales Pipeline Management", desc: "Track complex B2B sales cycles, quote management, and forecasting for manufacturing sales teams." },
  { icon: Settings, title: "Production Planning & Scheduling", desc: "Optimize production runs, capacity planning, and shop-floor scheduling with real-time updates." },
  { icon: Package, title: "Inventory & Warehouse Management", desc: "Real-time inventory tracking, bin management, and automated reorder points across multiple warehouses." },
  { icon: Plug, title: "ERP Integration", desc: "Unified data across sales, production, inventory, and finance with seamless ERP integration." },
  { icon: Wrench, title: "Field Service Management", desc: "Mobile apps for field technicians with job scheduling, digital forms, and offline sync." },
  { icon: CheckCircle2, title: "Quality Control Workflows", desc: "Automated quality checks, non-conformance tracking, and corrective action workflows." },
  { icon: Building2, title: "Vendor Management", desc: "Supplier onboarding, performance scorecards, purchase orders, and 3-way matching." },
  { icon: TrendingUp, title: "Manufacturing Analytics", desc: "Real-time dashboards for OEE, scrap rates, cycle times, and overall equipment effectiveness." },
];

const integration = [
  { icon: Handshake, title: "Dealer Network CRM", tag: "Dealer Network", desc: "Track dealer performance, territory assignments, and automate order workflows." },
  { icon: Plug, title: "ERP–CRM Integration", tag: "ERP Integration", desc: "Unified data across sales, production, inventory, and finance in real time." },
  { icon: CheckCircle2, title: "Compliance", tag: "Compliance", desc: "Systems built to meet Canadian, US, and UK manufacturing regulatory requirements including ISO standards and traceability." },
];

const whyPoints = [
  { icon: Factory, text: "8+ years of manufacturing technology expertise" },
  { icon: Globe2, text: "Serving Canada, USA & UK markets" },
  { icon: Zap, text: "565+ projects delivered globally" },
  { icon: Plug, text: "ERP integration specialists" },
  { icon: Handshake, text: "Dedicated client teams in your time zone" },
  { icon: Smartphone, text: "Full-stack: Web, Mobile, CRM, ERP" },
];
const whyStats = [["8+", "Years"], ["565+", "Projects"], ["100+", "Team"], ["30+", "Manufacturing Clients"]];
const resultStats = [["35%", "Efficiency Gain"], ["99%", "Order Accuracy"], ["24/7", "Real-Time Data"], ["52%", "Faster Onboarding"]];
const productionMetrics = [["OEE (Overall Equipment Effectiveness)", "85%"], ["On-Time Delivery", "94%"], ["Inventory Accuracy", "99.2%"]];

const offices = [
  { flag: "🇨🇦", city: "Toronto, Canada", phone: "+91 99005 66466" },
  { flag: "🇺🇸", city: "New York, USA", phone: "+91 99005 66466" },
  { flag: "🇬🇧", city: "London, UK", phone: "+91 99005 66466" },
];

const services = ["Dealer CRM", "Sales Pipeline", "Production Planning", "Inventory/Warehouse", "ERP Integration", "Field Service", "Other"];
const dialCodes = ["🇨🇦 +1", "🇺🇸 +1", "🇬🇧 +44", "🇮🇳 +91"];

const faqs = [
  { q: "How long does a manufacturing CRM/ERP implementation take?", a: "A focused manufacturing CRM typically takes 10–16 weeks. This includes dealer network setup, sales pipeline configuration, and integration with existing ERP systems. Full ERP integration with production planning can take 20–30 weeks depending on complexity. All projects start with a detailed scoping phase and fixed-price proposal." },
  { q: "Can you integrate with our existing ERP system?", a: "Yes. We specialise in integrating CRMs with major ERP systems including SAP, Oracle, Microsoft Dynamics, and custom manufacturing ERPs. Integration covers real-time inventory visibility, order sync, financial data, and production status — ensuring your sales team always has accurate information without double-entry." },
  { q: "What does a manufacturing CRM cost in Canada or the UK?", a: "A dealer management CRM starts from CAD $25,000–$40,000 / £18,000–£30,000. This includes dealer portal, pipeline management, and basic ERP integration. Full-suite solutions with production planning, warehouse management, and advanced analytics range from CAD $45,000–$85,000 / £32,000–£65,000. All quotes fixed-price with milestone billing." },
  { q: "Do you offer mobile apps for field service teams?", a: "Yes. We build native iOS and Android apps for field service technicians that work offline. Features include job scheduling, digital forms with signature capture, parts lookup, time tracking, and real-time sync when connection is restored. Managers get live dashboards of job status and technician performance." },
];


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
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-[#1A2343] text-white">
     
      <section ref={heroRef} className="relative overflow-hidden px-6 pt-32 pb-20">
        <motion.div style={{ y: orbY }} className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/15 blur-[150px]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/15 blur-[130px]" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div style={{ y: heroY }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Manufacturing Technology</SectionLabel>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Custom CRM & ERP Solutions for <span className={grad}>Manufacturers</span> in Canada, USA & UK
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300/90">
              Manufacturing businesses operate with complex sales cycles, multi-tier distribution channels, and demanding operational requirements. We build the digital infrastructure that unifies your dealer network, production, and pipeline.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
            <div className="relative rounded-3xl border border-white/10 bg-[#0a1228]/90 p-7 backdrop-blur-xl md:p-8">
              <span className="absolute left-8 right-8 top-0 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600" />
              <h3 className="text-xl font-bold">Get a <span className={grad}>Free Consultation</span></h3>
              <input type="text" placeholder="Full Name *" className={`${inputClass} mt-5`} />
              <div className="mt-4 grid grid-cols-[110px_1fr] gap-3">
                <select className={inputClass}>{dialCodes.map((d) => <option key={d} className="bg-[#0a1228]">{d}</option>)}</select>
                <input type="tel" placeholder="Phone Number *" className={inputClass} />
              </div>
              <input type="email" placeholder="Business Email *" className={`${inputClass} mt-4`} />
              <select className={`${inputClass} mt-4`} defaultValue="">
                <option value="" disabled className="bg-[#0a1228]">Service of Interest</option>
                {services.map((s) => <option key={s} className="bg-[#0a1228]">{s}</option>)}
              </select>
              <textarea rows="2" placeholder="Message *" className={`${inputClass} mt-4 resize-none`} />
              <button className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.5)] transition-all duration-500 hover:bg-[position:100%_0]">
                Get Free Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
                <Lock className="h-3.5 w-3.5" /> No spam. Ever.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

     
      <section className="relative px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Success Stories</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Manufacturing <span className={grad}>Success Stories</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 space-y-8">
            {caseStudies.map((s, i) => <CaseCard key={s.title} study={s} index={i} />)}
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Manufacturing Digital Solutions <span className={grad}>We Build</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_15px_40px_-12px_rgba(6,182,212,0.4)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300 transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Integration & Compliance</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Built for <span className={grad}>Manufacturing</span> in Canada, USA & UK</h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 md:grid-cols-3">
            {integration.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div key={c.title} variants={fadeUp} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.4)]">
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-5 text-xl font-bold text-white">{c.title}</h3>
                  <p className="relative text-xs font-semibold uppercase tracking-wider text-cyan-400">{c.tag}</p>
                  <p className="relative mt-3 text-sm text-slate-400">{c.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Your Trusted <span className={grad}>Manufacturing Technology</span> Partner</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300/90">
              Backed by <strong className="text-white">Nakshatra Namaha Creations Pvt. Ltd.</strong> — 8+ years of experience, 565+ projects delivered. Dedicated client teams in Canada, USA, and UK. ERP integration specialists.
            </p>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.text} variants={fadeUp} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition hover:border-cyan-400/40">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm text-slate-200">{p.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md md:grid-cols-4">
            {whyStats.map(([v, l]) => (
              <div key={l} className="text-center">
                <div className={`text-3xl font-bold lg:text-4xl ${grad}`}>{v}</div>
                <p className="mt-1 text-sm text-slate-400">{l}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md sm:grid-cols-4">
              {resultStats.map(([v, l]) => (
                <div key={l} className="flex flex-col items-center justify-center text-center">
                  <div className={`text-2xl font-bold lg:text-3xl ${grad}`}>{v}</div>
                  <p className="mt-1 text-xs text-slate-400">{l}</p>
                </div>
              ))}
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a1228]/80 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-cyan-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Production Metrics</p>
              </div>
              <div className="mt-5 space-y-3">
                {productionMetrics.map(([label, val]) => (
                  <div key={label} className="flex items-center justify-between border-b border-white/5 pb-2 text-sm">
                    <span className="text-slate-300">{label}</span>
                    <span className={`font-bold ${grad}`}>{val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                ERP connected · Live data
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <SectionLabel>Our Reach</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Global <span className={grad}>Presence</span></h2>
            <p className="mt-3 text-slate-400">North America & UK — engineered in India, delivered worldwide.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-12 grid gap-5 sm:grid-cols-3">
            {offices.map((o) => (
              <motion.div key={o.city} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40">
                <div className="text-4xl">{o.flag}</div>
                <h3 className="mt-3 font-bold text-white">{o.city}</h3>
                <p className="mt-2 flex items-center justify-center gap-2 text-sm text-cyan-300">
                  <Phone className="h-4 w-4" /> {o.phone}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

   
      <section className="relative px-6 py-14">
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

      
      <section className="relative overflow-hidden px-6 py-18">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[140px]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold md:text-4xl">Ready to Build Your <span className={grad}>Manufacturing Solution?</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300/90">Tell us about your project. We'll respond within 24 hours with a free consultation.</p>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mt-10 text-left">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
            <div className="relative rounded-3xl border border-white/10 bg-[#0a1228]/90 p-8 backdrop-blur-xl md:p-10">
              <span className="absolute left-10 right-10 top-0 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600" />
              <input type="text" placeholder="Full Name *" className={inputClass} />
              <div className="mt-4 grid grid-cols-[110px_1fr] gap-3">
                <select className={inputClass}>{dialCodes.map((d) => <option key={d} className="bg-[#0a1228]">{d}</option>)}</select>
                <input type="tel" placeholder="Phone *" className={inputClass} />
              </div>
              <input type="email" placeholder="Business Email *" className={`${inputClass} mt-4`} />
              <textarea rows="3" placeholder="Project Description *" className={`${inputClass} mt-4 resize-none`} />
              <button className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] py-4 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.5)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                <Send className="h-4 w-4" /> Submit — Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}