"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Apple, Smartphone, Layers, RefreshCw, Palette, LifeBuoy, Rocket, Link2,
  TrendingUp, ShieldCheck, Brain, Target, Bot, Check, ArrowRight,
} from "lucide-react";


const trustBadges = ["Google Partner", "ISO Certified", "GDPR Compliant", "PIPEDA Ready", "Clutch Top Agency"];

const caseStudies = [
  {
    sector: "Manufacturing", region: "Canada", image: "/canadamanufacturing.jpg",
    title: "35% Efficiency Boost for a Canadian Manufacturer",
    challenge: "Field technicians had no mobile access to work orders, causing delays, miscommunication, and manual paper-based reporting across 5 facilities.",
    solution: "We built a cross-platform React Native app integrated with their ERP — giving field teams live job scheduling, digital sign-off, and real-time sync.",
    stats: [["+35%", "Efficiency Gain"], ["-100%", "Paper Forms"], ["10 wks", "Go-Live Time"]],
  },
  {
    sector: "Healthcare", region: "UK", image: "/healthcare.jpg",
    title: "42% More Bookings for a UK Healthcare Provider",
    challenge: "Patients couldn't book appointments on mobile, leading to phone overload, no-shows, and poor retention across a multi-location clinic group.",
    solution: "We built a GDPR-compliant iOS & Android patient app with online booking, push reminders, secure messaging, and NHS-integrated records.",
    stats: [["+42%", "More Bookings"], ["-60%", "No-Shows"], ["4.9", "App Store"]],
  },
  {
    sector: "D2C E-Commerce", region: "USA", image: "/d2c.jpg",
    title: "2.4x Conversion Rate for a US D2C Brand",
    challenge: "A direct-to-consumer brand had no native mobile app — losing repeat buyers to competitors with polished iOS/Android shopping experiences.",
    solution: "We built a React Native shopping app with personalised feeds, one-tap checkout, push campaigns, and Shopify + Klaviyo integration.",
    stats: [["2.4x", "Conversion"], ["+68%", "Revenue"], ["+55%", "Retention"]],
  },
];

const servicesOffered = [
  { icon: Apple, tag: "iOS", title: "iOS App Development", desc: "Native Swift/SwiftUI apps built for iPhone and iPad — performance-optimised and App Store ready." },
  { icon: Smartphone, tag: "Android", title: "Android App Development", desc: "Native Kotlin apps built for Android phones, tablets, and enterprise devices across all screen sizes." },
  { icon: Layers, tag: "React Native", title: "Cross-Platform (React Native)", desc: "One codebase, two platforms. Full-featured iOS & Android apps at lower cost and faster delivery." },
  { icon: Link2, tag: "CRM", title: "CRM-Integrated Mobile Apps", desc: "Mobile apps that sync live with Salesforce, HubSpot, or your custom CRM — keeping field teams connected." },
  { icon: Palette, tag: "Design", title: "Mobile UI/UX Design", desc: "User research, wireframes, prototypes, and polished UI — all before a line of code is written." },
  { icon: LifeBuoy, tag: "Support", title: "App Maintenance & Support", desc: "Post-launch monitoring, OS update compatibility, crash fixing, and performance optimisation." },
];

const benefits = [
  { icon: Rocket, title: "Native Performance", desc: "Whether native Swift/Kotlin or cross-platform React Native/Flutter, every app we ship is optimised for smooth 60fps performance, fast launch times, and minimal battery drain.", tags: ["60fps", "Fast Launch", "Battery"] },
  { icon: Link2, title: "CRM Integration", desc: "Your mobile app connects directly to your CRM, ERP, or back-office system — giving field teams, sales reps, and customers live data on any device, anywhere.", tags: ["Salesforce", "HubSpot", "Custom CRM"] },
  { icon: TrendingUp, title: "App Store Optimisation", desc: "We handle full ASO — keyword research, listing copy, screenshots, preview videos, and ratings strategy — to maximise organic downloads from day one.", tags: ["ASO", "App Store", "Google Play"] },
  { icon: ShieldCheck, title: "Post-Launch Support", desc: "Dedicated hypercare after launch. OS update compatibility, crash resolution, performance monitoring, and ongoing feature development — we stay with you long-term.", tags: ["Hypercare", "Updates", "Monitoring"] },
];

const techStack = [
  { name: "Flutter", desc: "Google's cross-platform framework for beautiful, natively compiled iOS & Android apps." },
  { name: "React Native", desc: "Meta's framework for building truly native cross-platform apps with a single codebase." },
  { name: "Swift (iOS)", desc: "Apple's native language for high-performance, hardware-optimised iOS and iPadOS apps." },
  { name: "Kotlin (Android)", desc: "Google's modern native Android language — concise, safe, and built for enterprise apps." },
  { name: "Firebase", desc: "Google's mobile backend — real-time database, auth, push notifications, and crash analytics." },
  { name: "AWS Amplify", desc: "Full-stack cloud for mobile — authentication, APIs, storage, and serverless functions." },
  { name: "Stripe", desc: "In-app payments, subscriptions, and billing — PCI-compliant and battle-tested." },
  { name: "Twilio / WhatsApp", desc: "SMS, WhatsApp Business API, and push notifications for real-time customer communication." },
];

const aiFeatures = [
  { icon: Brain, title: "AI-Powered Personalisation", desc: "On-device AI analyses user behaviour — surfacing personalised content, product recommendations, and in-app journeys that increase session time and repeat usage." },
  { icon: Target, title: "Predictive User Retention", desc: "ML models predict which users are about to churn — triggering automated push campaigns, re-engagement flows, and personalised offers before they leave." },
  { icon: Bot, title: "In-App AI Assistants & Chatbots", desc: "Embed AI chatbots and voice assistants directly into your app — handling queries, booking flows, and support tickets 24/7 without human input." },
];
const aiMetrics = [
  ["Personalisation accuracy", 95],
  ["Churn prediction model", 91],
  ["Push notification CTR", 38],
  ["In-app AI resolution", 87],
];
const aiStats = [["48.2K", "Active Users"], ["124K", "Sessions/Day"], ["4.9★", "AI CSAT"]];

const whyPoints = [
  "8+ years of proven digital excellence",
  "Serving Canada, USA & UK markets",
  "500+ mobile apps delivered globally",
  "Client-first culture, enterprise-grade quality",
  "GDPR, PIPEDA & CCPA compliant delivery",
  "Full-stack: iOS, Android, React Native, Flutter",
];
const whyStats = [["500+", "Mobile Apps"], ["1500+", "Web Projects"], ["1800+", "IT Talents"], ["25+", "Industries"]];


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
            <SectionLabel>Mobile App Development · Canada, USA & UK</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Custom <span className={grad}>Mobile App Development</span> for Businesses in Canada, USA & UK
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className=" mt-6 max-w-2xl text-lg leading-relaxed text-slate-50">
            Your customers and your team live on mobile. We build iOS and Android applications that are fast, reliable, and designed around real user behaviour.
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
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Mobile App <span className={grad}>Success Stories</span></h2>
            <p className="mt-3 text-slate-400">Real results from real mobile apps built for businesses in Canada, USA & UK.</p>
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

    
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Mobile App Services <span className={grad}>We Offer</span></h2>
            <p className="mt-3 text-slate-400">iOS, Android, and cross-platform app development for businesses across Canada, USA & UK.</p>
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
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Key Benefits of <span className={grad}>Mobile App Development</span></h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">Here's what you gain when your app is built by a team that prioritises performance, integration, and long-term success.</p>
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
              Start Your App Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

     
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Our Tech Stack</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leading Mobile Platform Tools <span className={grad}>That We Use</span></h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">A production-proven mobile stack — chosen for performance, reliability, and long-term maintainability.</p>
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
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>AI-Powered</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Leverage <span className={grad}>AI-Powered Mobile</span> Solutions</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">We build AI directly into your app — personalisation, predictive retention, and intelligent automation from day one.</p>
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
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Why Choose Us as Your <span className={grad}>Mobile App Development</span> Partner?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300/90">
              NNC Digital Solutions is backed by <strong className="text-white">Nakshatra Namaha Creations Pvt. Ltd.</strong> — one of Bangalore's most respected digital studios with <span className="text-cyan-300">8+ years of experience</span> and <span className="text-cyan-300">500+ mobile apps delivered</span>. We launched NNC Digital as our international arm, bringing the same proven mobile expertise to Canadian, US, and UK markets.
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
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Build Your <span className={grad}>Mobile App?</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300/90">Join 500+ businesses that have launched successful iOS and Android apps with NNC Digital.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["🇨🇦 Canada", "🇺🇸 USA", "🇬🇧 UK", "🇮🇳 India"].map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300">{c}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                Get Started Today <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
                Book a Free App Strategy Call
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}