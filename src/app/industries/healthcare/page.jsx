"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  HeartPulse, Calendar, MessageCircle, FileText, ShieldCheck, Users,
  Activity, Stethoscope, Building2, Pill, Brain, Bot, TrendingUp,
  Quote, Star, Check, Plus, ArrowRight,
} from "lucide-react";


const trustBadges = ["HIPAA Ready", "GDPR Compliant", "PIPEDA Compliant", "ISO Certified", "Clutch Top Agency"];
const heroStats = [["+42%", "More Bookings"], ["-60%", "No-Shows"], ["4.9★", "Patient Score"]];

const challenges = [
  { icon: Calendar, title: "Manual Appointment Chaos", desc: "Phone-based booking overloads your front desk, causes no-shows, and frustrates patients who expect digital convenience." },
  { icon: FileText, title: "Fragmented Patient Records", desc: "Data scattered across systems means slow care, repeated questions, and compliance risk across every location." },
  { icon: MessageCircle, title: "Poor Follow-Up & Retention", desc: "Patients fall through the cracks after their first visit — no reminders, no nurture, no re-engagement." },
  { icon: ShieldCheck, title: "Compliance Pressure", desc: "HIPAA, GDPR, and PIPEDA demand airtight data handling — one gap risks fines and patient trust." },
];

const solutions = [
  { icon: Calendar, tag: "Booking", title: "Online Appointment Scheduling", desc: "Self-service booking with real-time availability, automated confirmations, and calendar sync across all providers." },
  { icon: MessageCircle, tag: "Reminders", title: "Automated Reminders", desc: "WhatsApp, SMS, and email reminders that cut no-shows by up to 60% — fully GDPR and HIPAA-compliant." },
  { icon: FileText, tag: "Records", title: "Unified Patient Records", desc: "One secure view of every patient — history, appointments, communications — accessible anywhere, anytime." },
  { icon: Activity, tag: "Portal", title: "Patient Self-Service Portal", desc: "Let patients book, reschedule, view results, and message your team through a secure branded portal." },
  { icon: Users, tag: "Engagement", title: "Patient Engagement Campaigns", desc: "Automated wellness nudges, recall campaigns, and personalised health content that boost retention." },
  { icon: ShieldCheck, tag: "Security", title: "Compliant Data Handling", desc: "Encryption, audit trails, role-based access, and consent management built into every layer." },
];

const useCases = [
  { icon: Stethoscope, title: "Clinics & Practices", desc: "Multi-provider scheduling, patient recall, and front-desk automation for private and group practices." },
  { icon: Building2, title: "Hospitals & Networks", desc: "Multi-location patient management, referral tracking, and cross-department coordination at scale." },
  { icon: HeartPulse, title: "Allied Health & Wellness", desc: "Physio, dental, optometry, and wellness clinics — booking, packages, and loyalty in one system." },
  { icon: Pill, title: "Telehealth & Pharmacy", desc: "Virtual consultation booking, e-prescriptions, and automated refill reminders for digital-first care." },
];

const benefits = [
  { icon: ShieldCheck, title: "Compliance Built-In", desc: "HIPAA, GDPR, and PIPEDA-ready architecture from day one — encryption, audit logs, and consent management protect every patient record.", tags: ["HIPAA", "GDPR", "PIPEDA"] },
  { icon: Calendar, title: "Fewer No-Shows", desc: "Automated multi-channel reminders reduce no-shows by up to 60% — recovering revenue and keeping your schedule full.", tags: ["Reminders", "WhatsApp", "SMS"] },
  { icon: Users, title: "Higher Retention", desc: "Automated follow-ups, recall campaigns, and personalised engagement keep patients coming back and referring others.", tags: ["Recall", "Nurture", "Loyalty"] },
  { icon: Activity, title: "EHR Integration", desc: "Seamless integration with your existing EHR/EMR systems — no data silos, no double entry, one source of truth.", tags: ["EHR", "EMR", "Sync"] },
];


const successStory = {
  image: "https://www.myamericannurse.com/wp-content/uploads/2024/05/shutterstock_584333368-scaled.jpg",
  sector: "Multi-Location Clinic", region: "United Kingdom",
  title: "42% More Bookings for a UK Healthcare Provider",
  challenge: "A multi-location allied-health clinic was losing patients between appointments — manual follow-up, no digital touchpoints, and a front desk drowning in phone calls.",
  solution: "We built a GDPR-compliant patient app with WhatsApp reminders, online booking, and a backend CRM that tracks patient history and triggers follow-up sequences automatically.",
  stats: [["+42%", "Repeat Bookings"], ["85%", "Reminder Open Rate"], ["-30%", "Front-Desk Load"]],
};

const testimonials = [
  { quote: "No-shows dropped by more than half in the first two months. The WhatsApp reminders alone paid for the entire system.", name: "Dr. Sarah Mitchell", role: "Clinic Director, Toronto", avatar: "https://placehold.co/80x80/0a1228/34d399?text=SM" },
  { quote: "Patients love booking online, and our front desk finally has breathing room. Compliance was handled end-to-end.", name: "James Okafor", role: "Practice Manager, London", avatar: "https://placehold.co/80x80/0a1228/22d3ee?text=JO" },
  { quote: "The EHR integration was seamless. One source of truth across all three of our locations — exactly what we needed.", name: "Dr. Priya Nair", role: "Medical Lead, Vancouver", avatar: "https://placehold.co/80x80/0a1228/3b82f6?text=PN" },
];

const aiFeatures = [
  { icon: Brain, title: "Predictive No-Show Alerts", desc: "AI flags appointments most likely to be missed — triggering extra reminders and enabling proactive rescheduling before revenue is lost." },
  { icon: Bot, title: "AI Patient Assistant", desc: "24/7 chatbot books appointments, answers FAQs, and triages enquiries — routing urgent cases to your team instantly." },
  { icon: TrendingUp, title: "Patient Insight Analytics", desc: "AI surfaces trends in patient behaviour, high-value service demand, and retention risk — so you act before problems grow." },
];

const whyPoints = [
  "8+ years of proven digital excellence",
  "HIPAA, GDPR & PIPEDA compliant delivery",
  "565+ projects delivered globally",
  "Serving Canada, USA & UK healthcare",
  "Seamless EHR/EMR integration expertise",
  "Client-first culture, enterprise security",
];
const whyStats = [["12", "Clinics Live"], ["+42%", "Avg Bookings"], ["100%", "Compliant"], ["4.9", "Patient Score"]];

const faqs = [
  { q: "Is your healthcare CRM HIPAA and GDPR compliant?", a: "Yes. Compliance is built into the architecture from day one — encryption at rest and in transit, role-based access, audit trails, and consent management. We build to HIPAA (US), GDPR (UK/EU), and PIPEDA (Canada) standards." },
  { q: "Can it integrate with our existing EHR/EMR?", a: "Absolutely. We integrate with major EHR/EMR platforms so patient data stays in sync across systems — no double entry, no silos. The CRM handles engagement and scheduling while your EHR remains the clinical record." },
  { q: "How does it reduce no-shows?", a: "Automated multi-channel reminders (WhatsApp, SMS, email) plus AI-driven predictive alerts for high-risk appointments typically cut no-shows by up to 60% — recovering significant lost revenue." },
  { q: "Can patients book appointments themselves?", a: "Yes. A secure, branded self-service portal lets patients book, reschedule, view results, and message your team — reducing front-desk workload while improving patient experience." },
  { q: "How long does implementation take?", a: "Most healthcare CRM deployments go live in 8–14 weeks depending on integrations and locations. We provide a fixed timeline and price after a free discovery consultation." },
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
              <SectionLabel>Healthcare · Canada, USA & UK</SectionLabel>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              CRM & Software for <span className={grad}>Modern Healthcare</span> Providers
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300/90">
              Reduce no-shows, unify patient records, and deliver a seamless patient experience — with HIPAA, GDPR, and PIPEDA-compliant CRM and software built for clinics, hospitals, and telehealth.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                Book a Free Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
                See a Case Study
              </button>
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
              <img src="https://instagram.fbom33-1.fna.fbcdn.net/v/t51.71878-15/653489690_805069898706475_4120018527632353435_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fYWRkaXRpb25hbF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=VX0qLHed_KkQ7kNvwES1i47&_nc_oc=Adp5G3EIA4jmmca4f_VGwwU5evGjWbAeFFGjProlszS848Bre2IGDU0gRNht0KvIvayfMvlNkODN9aF8px-FJl2c&_nc_zt=23&_nc_ht=instagram.fbom33-1.fna&_nc_gid=1Ng3A704RRjw02g4BGIaBw&_nc_ss=7b689&oh=00_AQA5CC6EeP_iTZIK8PpbYFvPCMrqxblyldmm-Jdu7hHRCQ&oe=6A4C1A51" alt="Healthcare CRM" className="h-full w-full object-cover" />
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

     
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Challenges Healthcare <span className={grad}>Providers Face</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {challenges.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div key={c.title} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07]">
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

      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Healthcare CRM Solutions <span className={grad}>We Deliver</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => {
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

    
      <section ref={storyRef} className="relative overflow-hidden px-6 py-24">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Success Story</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Real Results in <span className={grad}>Healthcare</span></h2>
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

      
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Who We Serve</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Built for Every <span className={grad}>Healthcare Setting</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => {
              const Icon = u.icon;
              return (
                <motion.div key={u.title} variants={fadeUp} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.4)]">
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

      
      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Key Benefits for <span className={grad}>Healthcare</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} variants={fadeUp} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.4)]">
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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

   
      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute right-1/4 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>What Providers Say</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Trusted by <span className={grad}>Healthcare Teams</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40">
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

      
      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>AI-Powered</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">AI That Improves <span className={grad}>Patient Care</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 lg:grid-cols-3">
            {aiFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} variants={fadeUp} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07]">
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

    
      <section className="relative px-6 py-24">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Why Healthcare Providers <span className={grad}>Choose Us</span></h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300/90">
              NNC Digital Solutions is backed by <strong className="text-white">Nakshatra Namaha Creations Pvt. Ltd.</strong> — one of Bangalore's most respected digital studios with <span className="text-cyan-300">8+ years of experience</span> and <span className="text-cyan-300">565+ projects delivered</span>. We bring compliant, patient-first healthcare technology to Canadian, US, and UK providers.
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

     
      <section className="relative px-6 py-24">
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

      
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[140px]" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mx-auto max-w-3xl text-center">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
          <div className="relative rounded-3xl border border-white/10 bg-[#0a1228]/80 p-10 backdrop-blur-xl md:p-14">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Transform Your <span className={grad}>Patient Experience?</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300/90">Book a free consultation. We'll show you exactly how a compliant healthcare CRM can grow your practice.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                Book a Free Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
                View Case Studies
              </button>
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