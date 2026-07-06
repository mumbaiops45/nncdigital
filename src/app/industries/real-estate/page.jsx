"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Building2, Home, Users, MessageCircle, Calendar, TrendingUp, Search,
  KeyRound, Building, MapPin, Landmark, Brain, Bot, BarChart3,
  Quote, Star, Check, Plus, ArrowRight,
} from "lucide-react";


const trustBadges = ["Google Partner", "ISO Certified", "GDPR Compliant", "PIPEDA Ready", "Clutch Top Agency"];
const heroStats = [["3x", "More Leads"], ["-45%", "Response Time"], ["+38%", "Deals Closed"]];

const challenges = [
  { icon: Users, title: "Leads Falling Through Cracks", desc: "Enquiries from portals, ads, and walk-ins scattered across inboxes — hot buyers go cold before an agent responds." },
  { icon: Home, title: "Messy Property Management", desc: "Listings, viewings, and documents spread across spreadsheets and WhatsApp — no single source of truth." },
  { icon: MessageCircle, title: "Slow Follow-Up", desc: "In real estate, the first agent to respond wins. Manual follow-up means lost deals to faster competitors." },
  { icon: BarChart3, title: "No Pipeline Visibility", desc: "No clear view of which deals are progressing, which agents perform, or where revenue is leaking." },
];

const solutions = [
  { icon: Users, tag: "Leads", title: "Lead Capture & Routing", desc: "Auto-capture leads from portals, ads, and your website — instantly assigned to the right agent by area or budget." },
  { icon: Home, tag: "Listings", title: "Property Listing Management", desc: "Centralised listings with photos, documents, pricing, and status — synced across your website and portals." },
  { icon: Calendar, tag: "Viewings", title: "Viewing & Appointment Scheduling", desc: "Self-service viewing booking, automated reminders, and agent calendar sync — fewer no-shows, more showings." },
  { icon: MessageCircle, tag: "Nurture", title: "Automated Buyer/Seller Nurture", desc: "WhatsApp, SMS, and email drip campaigns that keep leads warm until they're ready to transact." },
  { icon: TrendingUp, tag: "Pipeline", title: "Deal Pipeline & Analytics", desc: "Visual pipeline from enquiry to closing, with agent performance and revenue forecasting dashboards." },
  { icon: KeyRound, tag: "Portal", title: "Client & Agent Portals", desc: "Branded portals for buyers to track their journey and agents to manage their book from anywhere." },
];

const useCases = [
  { icon: Building, title: "Residential Agencies", desc: "Buyer-seller matching, viewing management, and lead nurture for high-volume residential brokers." },
  { icon: Building2, title: "Commercial Real Estate", desc: "Complex deal tracking, tenant management, and multi-stakeholder pipeline for commercial brokerages." },
  { icon: Landmark, title: "Property Developers", desc: "Project sales management, unit inventory, booking workflows, and buyer CRM for new developments." },
  { icon: MapPin, title: "Property Management", desc: "Tenant onboarding, maintenance requests, rent tracking, and lease renewals — all automated." },
];

const benefits = [
  { icon: TrendingUp, title: "Never Miss a Lead", desc: "Every enquiry from every source is captured, routed, and followed up instantly — so you convert more of the leads you already pay for.", tags: ["Auto-Capture", "Instant Routing", "24/7"] },
  { icon: MessageCircle, title: "Respond in Seconds", desc: "Automated instant responses and WhatsApp follow-ups mean you're always the first agent to reach a hot buyer — and first agent usually wins.", tags: ["WhatsApp", "SMS", "Instant"] },
  { icon: Home, title: "One Source of Truth", desc: "Listings, clients, documents, and deals in one place — accessible by every agent, from office or field, on any device.", tags: ["Listings", "Mobile", "Docs"] },
  { icon: BarChart3, title: "Data-Driven Growth", desc: "Real-time dashboards show which sources, agents, and campaigns drive revenue — so you double down on what works.", tags: ["Dashboards", "Forecasting", "ROI"] },
];

const successStory = {
  image: "/real-estate-brokerage.jpg",
  sector: "Residential Brokerage", region: "Canada",
  title: "3x More Qualified Leads for a Canadian Brokerage",
  challenge: "A growing brokerage was buying leads from three portals but converting under 5% — enquiries sat unanswered for hours while faster competitors closed the deals.",
  solution: "We built a custom real-estate CRM with instant lead capture, smart agent routing, WhatsApp auto-response, and a full deal pipeline with performance dashboards.",
  stats: [["3x", "Qualified Leads"], ["<2min", "Response Time"], ["+38%", "Deals Closed"]],
};

const testimonials = [
  { quote: "We stopped losing leads overnight. The instant WhatsApp response means we're always first — our close rate jumped nearly 40%.", name: "Michael Chen", role: "Broker Owner, Toronto", avatar: "https://placehold.co/80x80/0a1228/34d399?text=MC" },
  { quote: "Every listing, viewing, and client is finally in one place. My agents actually use it — because it's built around how we work.", name: "Aisha Rahman", role: "Sales Director, London", avatar: "https://placehold.co/80x80/0a1228/22d3ee?text=AR" },
  { quote: "The pipeline dashboards show me exactly which agents and sources drive revenue. Game-changer for how we allocate spend.", name: "David Okonkwo", role: "Managing Partner, New York", avatar: "https://placehold.co/80x80/0a1228/3b82f6?text=DO" },
];

const aiFeatures = [
  { icon: Brain, title: "AI Lead Scoring", desc: "AI ranks every lead by intent, budget, and behaviour — so agents focus on the buyers most likely to transact this month." },
  { icon: Bot, title: "24/7 AI Property Assistant", desc: "AI chatbot answers property questions, books viewings, and qualifies leads round the clock — even at 2am when portals are busiest." },
  { icon: BarChart3, title: "Predictive Deal Insights", desc: "AI forecasts which deals will close, flags stalling pipelines, and recommends the next action to keep momentum." },
];

const whyPoints = [
  "8+ years of proven digital excellence",
  "Serving Canada, USA & UK real estate",
  "565+ projects delivered globally",
  "Portal integrations (Zillow, Rightmove, etc.)",
  "GDPR, PIPEDA & CCPA compliant delivery",
  "Client-first culture, enterprise-grade quality",
];
const whyStats = [["3x", "Avg Lead Lift"], ["<2min", "Response Time"], ["+38%", "Close Rate"], ["25+", "Agencies Live"]];

const faqs = [
  { q: "Can it integrate with property portals like Zillow or Rightmove?", a: "Yes. We integrate with major property portals and listing platforms so leads and listings sync automatically — no manual copy-paste, no missed enquiries." },
  { q: "How does instant lead response work?", a: "The moment a lead comes in from any source, they get an automated WhatsApp/SMS acknowledgement and the enquiry is routed to the right agent by area, budget, or availability — often within seconds." },
  { q: "Can agents use it on the go?", a: "Absolutely. The CRM is fully mobile — agents manage listings, respond to leads, book viewings, and update deals from their phone in the field." },
  { q: "Does it handle both sales and rentals?", a: "Yes. The system handles residential and commercial sales, rentals, property management, and new developments — with workflows tailored to each." },
  { q: "How long does implementation take?", a: "Most real-estate CRM deployments go live in 8–12 weeks depending on integrations and team size. We provide a fixed timeline and price after a free discovery call." },
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

  const storyRef = useRef(null);
  const { scrollYProgress: sp } = useScroll({ target: storyRef, offset: ["start end", "end start"] });
  const storyImgY = useTransform(sp, [0, 1], ["-10%", "10%"]);

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-[#1A2343] text-white">
      <section ref={heroRef} className="relative flex min-h-[82vh] items-center overflow-hidden px-6 pt-32 pb-20">
        <motion.div style={{ y: orbY }} className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/15 blur-[150px]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/15 blur-[130px]" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Real Estate · Canada, USA & UK</SectionLabel>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              CRM & Software for <span className={grad}>Modern Real Estate</span> Businesses
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300/90">
              Capture every lead, respond in seconds, and close more deals. We build custom real-estate CRM and software that turns enquiries into transactions — for agencies, developers, and property managers.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
              <a  href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                Book a Free Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/case-studies"
              className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
                See a Case Study
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
            <div className="absolute -inset-[2px] rounded-[30px] bg-[conic-gradient(from_0deg,#34d399,#22d3ee,#3b82f6,#22d3ee,#34d399)] bg-[length:300%_300%] opacity-50 blur-[8px] animate-[ringSpin_8s_linear_infinite]" />
            <div className="relative h-[460px] overflow-hidden rounded-[28px] border border-white/10">
              <img src="/hire-crm-hero.webp" alt="Real estate CRM" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                {heroStats.map(([v, l]) => (
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

      
      <section className="relative px-6 py-18">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Challenges Real Estate <span className={grad}>Teams Face</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {challenges.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div key={c.title} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                   <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300 transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{c.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      
      <section className="relative px-6 py-18">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Real Estate CRM Solutions <span className={grad}>We Deliver</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_15px_40px_-12px_rgba(6,182,212,0.4)]">
                   <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
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

    
      <section ref={storyRef} className="relative overflow-hidden px-6 py-18">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Success Story</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Real Results in <span className={grad}>Real Estate</span></h2>
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-md">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-72 overflow-hidden lg:h-auto">
                <motion.img src={successStory.image} alt={successStory.title} style={{ y: storyImgY }} className="absolute inset-0 h-[122%] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent lg:bg-gradient-to-r" />
                <span className="absolute left-5 top-5 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-md">
                  {successStory.sector} · {successStory.region}
                </span>
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-white">{successStory.title}</h3>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Challenge</p>
                    <p className="mt-1 text-sm text-slate-300/90">{successStory.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Solution</p>
                    <p className="mt-1 text-sm text-slate-300/90">{successStory.solution}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-5">
                  {successStory.stats.map(([v, l]) => (
                    <div key={l}>
                      <div className={`text-2xl font-bold ${grad}`}>{v}</div>
                      <p className="mt-1 text-xs text-slate-400">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
      <section className="relative px-6 py-18">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Who We Serve</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Built for Every <span className={grad}>Real Estate Business</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => {
              const Icon = u.icon;
              return (
                <motion.div key={u.title} variants={fadeUp} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.4)]">
                   <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-5 text-lg font-bold text-white">{u.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-400">{u.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      
      <section className="relative px-6 py-18">
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Key Benefits for <span className={grad}>Real Estate</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} variants={fadeUp} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.4)]">
                  
                  {/* <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}
                   <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300">
                    <Icon className="h-6 w-6" />
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

     
      <section className="relative px-6 py-18">
        <div className="pointer-events-none absolute right-1/4 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>What Clients Say</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Trusted by <span className={grad}>Real Estate Teams</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40">
                 <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                <Quote className="h-8 w-8 text-cyan-400/40" />
                <div className="mt-3 flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300/90">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full border border-white/10" />
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-cyan-300">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
      <section className="relative px-6 py-18">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>AI-Powered</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">AI That Closes <span className={grad}>More Deals</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 lg:grid-cols-3">
            {aiFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} variants={fadeUp} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                   <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300 transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

     
      <section className="relative px-6 py-18">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Why Real Estate Teams <span className={grad}>Choose Us</span></h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300/90">
              NNC Digital Solutions is backed by <strong className="text-white">Nakshatra Namaha Creations Pvt. Ltd.</strong> — one of Bangalore's most respected digital studios with <span className="text-cyan-300">8+ years of experience</span> and <span className="text-cyan-300">565+ projects delivered</span>. We bring high-converting real-estate technology to Canadian, US, and UK agencies.
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

      
      <section className="relative px-6 py-18">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
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
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mx-auto max-w-3xl text-center">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
          <div className="relative rounded-3xl border border-white/10 bg-[#0a1228]/80 p-10 backdrop-blur-xl md:p-14">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Close <span className={grad}>More Deals?</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300/90">Book a free consultation. We'll show you exactly how a custom real-estate CRM can 3x your lead conversion.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/contact"
               className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                Book a Free Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="case-studies"
              className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
                View Case Studies
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes ringSpin { 0% { background-position: 0% 50%; } 100% { background-position: 300% 50%; } }
      `}</style>
    </div>
  );
}