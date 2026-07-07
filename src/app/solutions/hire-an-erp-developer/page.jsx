"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Clock, Briefcase, Calendar, UserCheck, Layers, Globe2, Zap, Brain, TrendingUp, Bot, BarChart3, Phone, Send,
  Check,Lock , Plus, ArrowRight, } from "lucide-react";
  import useContact from "@/hooks/useContact";


const trustBadges = ["Google Partner", "ISO Certified", "GDPR Compliant", "PIPEDA Ready", "Clutch Top Agency"];

const caseStudies = [
  { sector: "Manufacturing", region: "Canada", image: "/crmdeveloper.jpg", stat: "+35%", statLabel: "Efficiency", desc: "A dedicated CRM developer rebuilt a manufacturer's dealer workflow — cutting manual work across 5 facilities." },
  { sector: "Healthcare", region: "UK", image: "/healthcare.jpg", stat: "+42%", statLabel: "Bookings", desc: "Our developer built automated WhatsApp reminders and online booking — slashing no-shows for a UK clinic group." },
  { sector: "D2C E-Commerce", region: "USA", image: "/d2c.jpg", stat: "2.5x", statLabel: "Conversion", desc: "A dedicated developer integrated CRM with Shopify + Klaviyo — driving 2.5x conversion for a US D2C brand." },
];

const engagementModels = [
  { icon: Clock, title: "Full-Time Dedicated Developer", hours: "160 hrs / month", desc: "A dedicated CRM developer working exclusively on your projects, fully integrated into your workflow.", popular: true },
  { icon: Calendar, title: "Part-Time Dedicated Developer", hours: "80 hrs / month", desc: "Flexible part-time developer for ongoing maintenance, enhancements, and smaller builds." },
  { icon: Briefcase, title: "Project-Based Engagement", hours: "Fixed scope", desc: "Fixed-price, fixed-timeline engagement for a clearly defined CRM project." },
  { icon: UserCheck, title: "CRM Consulting Retainer", hours: "Advisory", desc: "Strategic CRM advisory, architecture reviews, and optimisation on a flexible monthly retainer." },
];

const benefits = [
  { icon: UserCheck, title: "Vetted Developers", desc: "Every developer is technically screened, background-checked, and certified before they reach you." },
  { icon: Layers, title: "Flexible Models", desc: "Full-time, part-time, project-based, or retainer — choose the engagement that fits your needs." },
  { icon: Globe2, title: "Time Zone Overlap", desc: "Our developers work in Canadian, US, and UK business hours for real-time collaboration." },
  { icon: Zap, title: "Start in 48 Hours", desc: "Skip months of hiring. Your vetted developer starts in just 2 business days, fully ready to build." },
];

const techStack = [
  { name: "Salesforce", desc: "Enterprise-grade integration." },
  { name: "HubSpot", desc: "Best-in-class performance." },
  { name: "Zoho CRM", desc: "Enterprise-grade integration." },
  { name: "MS Dynamics 365", desc: "Best-in-class for performance." },
  { name: "Pipedrive", desc: "Enterprise-grade integration." },
  { name: "Custom CRM (React / Node / Laravel / Python)", desc: "Best-in-class for performance." },
  { name: "WhatsApp API", desc: "Enterprise-grade integration." },
  { name: "REST & GraphQL", desc: "Best-in-class for performance." },
];

const hireByBusiness = [
  { title: "Enterprises", desc: "Complex multi-location operations with enterprise-grade integrations and permission hierarchies." },
  { title: "Start-ups", desc: "Scalable systems from day one — start lean and expand as you grow, without re-platforming." },
  { title: "Agencies", desc: "Client management and billing — dedicated developers to grow your book of business." },
];
const hireByType = [
  { title: "Analytical", desc: "Turn data into strategy — dashboards, segmentation, and business intelligence." },
  { title: "Operational", desc: "Automate daily workflows so your team focuses on what matters most." },
  { title: "Collaborative", desc: "Cross-department unification around a single customer view." },
];

const aiFeatures = [
  { icon: Brain, title: "AI Data Analysis", desc: "AI surfaces insights from customer data across email, social, and purchases — automating data entry." },
  { icon: TrendingUp, title: "Predictive Insights", desc: "Rank and prioritise leads by behaviour and deal size so your team focuses on the best opportunities." },
  { icon: Bot, title: "Automation at Scale", desc: "AI bots handle lead scoring, follow-ups, and data entry 24/7 — without human intervention." },
  { icon: BarChart3, title: "Real-Time Dashboards", desc: "Live KPIs, pipeline velocity, and performance metrics — updated instantly as deals progress." },
];

const offices = [
  { flag: "🇨🇦", city: "Toronto, Canada", phone: "+1 647-XXX-XXXX" },
  { flag: "🇺🇸", city: "New York, USA", phone: "+1 631-XXX-XXXX" },
  { flag: "🇬🇧", city: "London, UK", phone: "+44 20-XXXX-XXXX" },
  { flag: "🇮🇳", city: "Bangalore HQ", phone: "+91 99005 66466" },
];

const projectTypes = [
  "ERP Development",
  "CRM Development",
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "AI Solutions",
  "Digital Transformation",
];

const budgetRanges = [
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];


const dialCodes = ["🇺🇸 +1", "🇨🇦 +1", "🇬🇧 +44", "🇮🇳 +91"];

const faqs = [
  { q: "How quickly can a developer start?", a: "Once you approve your matched developer, onboarding takes as little as 48 hours. Your developer is set up in your timezone (Canada, USA, or UK) and ready to contribute immediately — no lengthy hiring cycles." },
  { q: "What CRM platforms do your developers work with?", a: "Our developers are certified across Salesforce, HubSpot, Zoho, MS Dynamics 365, Pipedrive, and custom CRMs built on React, Node, Laravel, or Python — plus WhatsApp API and REST/GraphQL integrations." },
  { q: "Can I trial a developer before committing?", a: "Yes. You interview your matched developer before starting. If they aren't the right fit within the first two weeks, we replace them at no cost — no questions asked." },
  { q: "What does a dedicated CRM developer cost per month?", a: "Dedicated CRM developers start from around CAD $4,700 / £2,800 per month for full-time. Part-time, project-based, and retainer options are priced flexibly. All quotes are transparent with no hidden fees — confirmed after a free consultation." },
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
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const [openFaq, setOpenFaq] = useState(0);
  const { submitForm, loading, success, error } = useContact();
  const [form, setform] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    projectType: "",
    budgetRange: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitForm(form);

      setform({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        projectType: "",
        budgetRange: "",
        message: "",
      })
    } catch (error) {
      console.log(error);
    }
  }

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
          <motion.div style={{ y: heroY }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Hire CRM Developers</SectionLabel>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Hire Dedicated <span className={grad}>CRM Developers</span> for Your Business in Canada, USA & UK
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300/90">
              Need experienced CRM developers without building an in-house team? NNC Digital provides dedicated developers who integrate with your workflow and deliver results.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
              <a href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                Hire a Developer <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/pricing" className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
                View Pricing
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-8 flex flex-wrap gap-2.5">
              {trustBadges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md">
                  <Check className="h-3 w-3 text-cyan-400" /> {b}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
            <div className="relative h-[460px] overflow-hidden rounded-[28px] border border-white/10">
              <img src="/hire-crm-hero.webp" alt="CRM developers" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                {[["48h", "Onboarding"], ["100%", "Vetted"], ["4.9★", "Rating"]].map(([v, l]) => (
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
            <SectionLabel>Our Happy Clients</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Success <span className={grad}>Stories</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 md:grid-cols-3">
            {caseStudies.map((s) => (
              <motion.div key={s.sector} variants={fadeUp} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_25px_60px_-15px_rgba(6,182,212,0.4)]">
                <div className="relative h-44 overflow-hidden">
                  <img src={s.image} alt={s.sector} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1228] via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-md">
                    {s.sector} · {s.region}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl font-bold ${grad}`}>{s.stat}</span>
                    <span className="text-sm text-slate-400">{s.statLabel}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-400">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Services We Offer</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Hire CRM Developers <span className={grad}>Services We Offer</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((m) => {
              const Icon = m.icon;
              return (
                <motion.div key={m.title} variants={fadeUp} className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 backdrop-blur-md transition-all duration-500 ${m.popular ? "border-cyan-400/50 bg-gradient-to-b from-cyan-500/10 via-white/[0.04] to-white/[0.04] shadow-[0_25px_70px_-20px_rgba(6,182,212,0.5)]" : "border-white/10 bg-white/[0.04] hover:-translate-y-1.5 hover:border-cyan-400/40"}`}>
                  {m.popular && (
                    <>
                      <span className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />
                      <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">Popular</span>
                    </>
                  )}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300 transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-white">{m.title}</h3>
                  <p className="mt-1 text-sm text-cyan-300">{m.hours}</p>
                  <p className="mt-3 text-sm text-slate-400">{m.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Key Benefits</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Key Benefits of <span className={grad}>Hiring CRM Developers</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} variants={fadeUp} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.4)]">
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-5 font-bold text-white">{b.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-400">{b.desc}</p>
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
            <SectionLabel>Platform Tools</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leading Platform Tools <span className={grad}>That We Use</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                <h3 className="text-base font-bold text-white">{t.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{t.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
      <section className="relative px-6 py-14">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Why Choose</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Hire Developers <span className={grad}>Tailored to Your Needs</span></h2>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <HireColumn label="By Business Type" items={hireByBusiness} />
            <HireColumn label="By CRM Type" items={hireByType} />
          </div>
        </div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>AI-Powered Solutions</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leverage <span className={grad}>AI-Powered CRM</span> Solutions</h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} variants={fadeUp} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300 transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-bold text-white">{f.title}</h3>
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
            Want CRM solutions that take your business to the <span className={grad}>next level?</span>
          </h2>
          <p className="mt-4 text-slate-300/90">Connect with NNC Digital today.</p>
          <a href="/contact" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-9 py-4 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
            Connect Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </section>

      
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <SectionLabel>Our Reach</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Global <span className={grad}>Presence</span></h2>
            <p className="mt-3 text-slate-400">North America & UK — engineered in India (Bangalore HQ · Mysore · Mumbai · Hyderabad).</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
          <p className="mt-6 text-center text-sm text-slate-400">info@nakshatranamahacreations.com</p>
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
          <h2 className="mt-6 text-3xl font-bold md:text-4xl">Ready to Build Next-Level <span className={grad}>Custom Digital Solutions?</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300/90">Tell us about your project. We'll respond within 24 hours with a free consultation.</p>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mt-10 text-left">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
            {/* <div className="relative rounded-3xl border border-white/10 bg-[#0a1228]/90 p-8 backdrop-blur-xl md:p-10">
              <span className="absolute left-10 right-10 top-0 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600" />
              <input type="text" placeholder="Name *" className={inputClass} />
              <div className="mt-4 grid grid-cols-[110px_1fr] gap-3">
                <select className={inputClass}>{dialCodes.map((d) => <option key={d} className="bg-[#0a1228]">{d}</option>)}</select>
                <input type="tel" placeholder="Phone *" className={inputClass} />
              </div>
              <input type="email" placeholder="Business Email *" className={`${inputClass} mt-4`} />
              <textarea rows="3" placeholder="Project Description *" className={`${inputClass} mt-4 resize-none`} />
              <button className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] py-4 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.5)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                <Send className="h-4 w-4" /> Submit
              </button>
            </div> */}
            <form onSubmit={handleSubmit} className="relative rounded-3xl border border-white/10 bg-[#0a1228]/90 p-8 backdrop-blur-xl md:p-10">
                          <span className="absolute left-10 right-10 top-0 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600" />
            
                          <div className="grid gap-4 sm:grid-cols-2">
                            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name *" className={inputClass} />
                            <input type="text" name="lastName"  value={form.lastName} placeholder="Last Name" className={inputClass} />
                          </div>
            
                          <div className="mt-4 grid grid-cols-[110px_1fr] gap-3">
                            <select className={inputClass}>
                              {dialCodes.map((d) => <option key={d} className="bg-[#0a1228]">{d}</option>)}
                            </select>
                            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone *" className={inputClass} />
                          </div>
            
                          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Business Email *" className={`${inputClass} mt-4`} />
            
                          <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <select name="projectType" value={form.projectType} onChange={handleChange} className={inputClass} defaultValue="">
                              <option value="" disabled className="bg-[#0a1228]">Project Type *</option>
                              {projectTypes.map((t) => <option key={t} className="bg-[#0a1228]">{t}</option>)}
                            </select>
                            <select name="budgetRange" value={form.budgetRange} onChange={handleChange} className={inputClass} defaultValue="">
                              <option value="" disabled className="bg-[#0a1228]">Budget Range</option>
                              {budgetRanges.map((b) => <option key={b} className="bg-[#0a1228]">{b}</option>)}
                            </select>
                          </div>
            
                          <textarea rows="3" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project requirements..." className={`${inputClass} mt-4 resize-none`} />
            
                          <button type="submit" className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] py-4 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.5)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                            <Send className="h-4 w-4" /> Get Free Quote
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </button>
            
                          <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
                            <Lock className="h-3.5 w-3.5" /> Free consultation • No commitment required
                          </p>
                        </form>
          </motion.div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <span>🇺🇸 USA: +1 631-XXX</span>
            <span>🇨🇦 Canada: +1 647-XXX</span>
            <span>🇬🇧 UK: +44 20-XXX</span>
            <span className="text-cyan-300">hello@nncdigital.com</span>
          </div>
        </div>
      </section>

      
    </div>
  );
}