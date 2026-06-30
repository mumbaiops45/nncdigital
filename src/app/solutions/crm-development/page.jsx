"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck, Users, Plug, Headphones, Brain, TrendingUp, BarChart3,
  Trophy, Globe2, Zap, Handshake, Lock, Smartphone, ArrowRight, Check,
} from "lucide-react";


const trustBadges = ["Google Partner", "ISO Certified", "GDPR Compliant", "PIPEDA Ready", "Clutch Top Agency"];

const caseStudies = [
  {
    sector: "Manufacturing", region: "Canada", image: "/35enegry.png",
    title: "35% Efficiency Boost for a Canadian Manufacturer",
    challenge: "Manual data entry across 3 legacy systems was causing delays and costly errors in production scheduling.",
    solution: "We built a custom CRM integrated with their ERP, automating workflows from lead to delivery.",
    stats: [["35%", "Efficiency Gain"], ["-90%", "Data Errors"], ["8 wks", "Go-Live Time"]],
  },
  {
    sector: "Healthcare", region: "UK", image: "/healthcare.jpg",
    title: "42% More Bookings for a UK Healthcare Provider",
    challenge: "A multi-location clinic was losing patients due to manual appointment processes and poor follow-up systems.",
    solution: "We deployed a Salesforce Health Cloud CRM with automated WhatsApp reminders and a patient self-service portal.",
    stats: [["+42%", "More Bookings"], ["-60%", "No-Shows"], ["4.8", "Patient Score"]],
  },
  {
    sector: "D2C E-Commerce", region: "USA", image: "/d2c.jpg",
    title: "2.4x Conversion Rate for a US D2C Brand",
    challenge: "A direct-to-consumer brand had no unified view of customer behaviour across email, social, and checkout.",
    solution: "We integrated HubSpot CRM with Klaviyo and Shopify — enabling full-funnel visibility and AI-powered segmentation.",
    stats: [["2.4x", "Conversion"], ["+68%", "Revenue"], ["-38%", "CAC Reduction"]],
  },
];

const servicesOffered = [
  "CRM Consulting", "CRM Implementation", "CRM Customization", "CRM Portal Development",
  "CRM Deployment", "CRM Mobile App Dev", "CRM UI/UX Design", "CRM Integration",
  "CRM Migration", "IT Management Consulting", "Digital Transformation", "Marketing Automation",
];

const benefits = [
  { icon: ShieldCheck, title: "Secure Data", desc: "GDPR / PIPEDA / CCPA compliance built-in. Zero data loss guarantee.", tags: ["GDPR", "PIPEDA", "CCPA"] },
  { icon: Users, title: "Lead Management", desc: "All customer data in one CRM. Priority pipelines with intelligent scoring and automated follow-ups.", tags: ["Pipeline", "Scoring", "Automation"] },
  { icon: Plug, title: "Easy Integration", desc: "Seamless plugins for every department — marketing, finance, support, and ops.", tags: ["Plugins", "API", "No Silos"] },
  { icon: Headphones, title: "Relentless Support", desc: "Ongoing support after go-live. Dedicated team ensuring maximum CRM adoption every day.", tags: ["24/7", "Training", "Go-Live"] },
];

const techStack = [
  { name: "Salesforce", desc: "Enterprise-grade integration" },
  { name: "HubSpot", desc: "Best-in-class for performance" },
  { name: "MS Dynamics 365", desc: "Enterprise-grade integration" },
  { name: "Zoho CRM", desc: "Best-in-class for performance" },
  { name: "SugarCRM", desc: "Enterprise-grade integration" },
  { name: "SuiteCRM", desc: "Best-in-class for performance" },
  { name: "Pipedrive", desc: "Enterprise-grade integration" },
  { name: "Custom-Built CRM", desc: "Fully bespoke for your workflows", featured: true },
];

const hireTypes = [
  { title: "Enterprises", desc: "Complex multi-location operations with enterprise-grade integrations and permission hierarchies." },
  { title: "Start-ups", desc: "CRM that scales without outgrowing in 12 months. Lightweight to start, powerful when you need it." },
  { title: "Agencies", desc: "Client pipelines, retainer billing, and performance dashboards — CRM designed to grow your book of business." },
  { title: "Analytical", desc: "Turn raw customer data into business intelligence. Identify trends, segment audiences, decide with data." },
  { title: "Operational", desc: "Automate day-to-day sales and service processes so your team can focus on what matters most." },
  { title: "Collaborative", desc: "Unify sales, support, marketing, and ops around a single customer view — breaking silos." },
];

const aiFeatures = [
  { icon: Brain, title: "AI Data Analysis", desc: "AI analyses vast volumes of client data from email, social, and purchases — surfacing insights your team can act on." },
  { icon: TrendingUp, title: "Predictive Lead Scoring", desc: "Automatically rank leads based on behaviour and deal size so sales always focuses on highest-value opportunities." },
  { icon: Zap, title: "Smart Automation", desc: "Trigger workflows, follow-ups, and alerts automatically based on customer behaviour and pipeline stage." },
  { icon: BarChart3, title: "Real-Time Dashboards", desc: "Custom dashboards with live KPIs, pipeline velocity, and team performance — updated instantly as deals progress." },
];

const whyPoints = [
  { icon: Trophy, text: "8+ years of proven digital excellence" },
  { icon: Globe2, text: "Serving Canada, USA & UK markets" },
  { icon: Zap, text: "565+ projects delivered across India" },
  { icon: Handshake, text: "Client-first culture, enterprise-grade quality" },
  { icon: Lock, text: "GDPR, PIPEDA & CCPA compliant delivery" },
  { icon: Smartphone, text: "Full-stack: Web, Mobile, CRM, ERP, AI" },
];

const whyStats = [["1500+", "Web Projects"], ["500+", "Mobile Apps"], ["1800+", "IT Talents"], ["25+", "Industries"]];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.3em] text-cyan-300/80 backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      {children}
    </span>
  );
}

const grad = "bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent";


function CaseCard({ study, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const reversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_30px_80px_-20px_rgba(6,182,212,0.4)]"
    >
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

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative  max-w-4xl text-left px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>CRM Development · Canada, USA & UK</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Best & Most Reliable{" "}
            <span className={grad}>CRM Development Services</span>{" "}
            for Canada, USA & UK
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className=" mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90">
            At NNC Digital Solutions, we deliver reliable, easy-to-understand CRM solutions that transform how your business manages customers, automates sales, and drives revenue growth.
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
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Success <span className={grad}>Stories</span></h2>
            <p className="mt-3 text-slate-400">Real results for real businesses in Canada, USA & UK.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 space-y-8">
            {caseStudies.map((s, i) => <CaseCard key={s.title} study={s} index={i} />)}
          </motion.div>
        </div>
      </section>

    
      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">CRM Development Services <span className={grad}>We Offer</span></h2>
            <p className="mt-3 text-slate-400">A comprehensive lineup of CRM solutions for clients across Canada, USA & UK.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesOffered.map((s) => (
              <motion.div key={s} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300 transition group-hover:scale-110">
                    <Check className="h-4 w-4" />
                  </span>
                  <h3 className="font-bold text-white">{s}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-400">Tailored for businesses in Canada, USA & UK.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    
      <section className="relative px-6 py-24">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Key Benefits of <span className={grad}>CRM Development</span></h2>
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
                    {b.tags.map((t) => (
                      <span key={t} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">{t}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

  
      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Our Tech Stack</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leading Platform Tools <span className={grad}>That We Use</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 ${
                  t.featured
                    ? "border-cyan-400/40 bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-blue-600/15"
                    : "border-white/10 bg-white/[0.04] hover:border-cyan-400/40"
                }`}
              >
                {t.featured && <span className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />}
                <h3 className="text-lg font-bold text-white">{t.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{t.desc}</p>
                {t.featured && (
                  <span className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#020617]">
                    Fully Bespoke
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Hire Developers</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Hire Developers <span className={grad}>Tailored to Your Needs</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hireTypes.map((h) => (
              <motion.div key={h.title} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                <h3 className="text-lg font-bold text-white">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
              Hire a CRM Developer
            </button>
            <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      
      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>AI-Powered</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leverage <span className={grad}>AI-Powered CRM</span> Solutions</h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} variants={fadeUp} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 transition group-hover:scale-110">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-600/15 blur-[140px]" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Want CRM Solutions that take your business to the <span className={grad}>next level?</span>
          </h2>
          <p className="mt-4 text-slate-300/90">Connect with NNC Digital today.</p>
          <button className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-9 py-4 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
            Connect Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </section>

   
      <section className="relative px-6 py-24">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Why Choose Us as Your <span className={grad}>Partner?</span></h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              Backed by Nakshatra Namaha Creations Pvt. Ltd. — one of Bangalore's most respected digital studios with 8+ years of experience and 565+ projects delivered.
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
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Transform Your <span className={grad}>CRM?</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300/90">
              Join 1500+ businesses that have streamlined their operations with our custom CRM solutions.
            </p>
            <button className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-9 py-4 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
              Get Started Today <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}