"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Rocket, Users, Globe2, MapPin, Code2, Smartphone, Megaphone, Palette, Film, Video, Briefcase,Search, Target, ShieldCheck, Eye,  HeartHandshake, Clock, Star, Mail, Link2,} from "lucide-react";

const heroStats = [
  { icon: Calendar, value: "8+", label: "Years of Excellence" },
  { icon: Rocket, value: "565+", label: "Projects Delivered" },
  { icon: Users, value: "100+", label: "Team Members" },
  { icon: Globe2, value: "3", label: "International Markets" },
];

const services = [
  { icon: Code2, name: "Website Development" },
  { icon: Smartphone, name: "Mobile App Development" },
  { icon: Megaphone, name: "Digital Marketing" },
  { icon: Palette, name: "Graphic Design" },
  { icon: Film, name: "2D Animation" },
  { icon: Video, name: "Corporate Video Production" },
  { icon: Briefcase, name: "B2B Marketing" },
  { icon: Search, name: "SEO & Performance Marketing" },
];

const solutionPoints = [
  "Dedicated project managers in North American and UK time zones",
  "GDPR, PIPEDA, and CCPA-compliant systems from day one",
  "Full creative and technical capability of a 100+ person studio",
  "Transparent, fixed-price proposals — no surprises",
  "Long-term partnership, not one-and-done project delivery",
];

const values = [
  { icon: Target, title: "Outcomes Over Outputs", desc: "Results, not features shipped." },
  { icon: ShieldCheck, title: "Compliance First", desc: "GDPR / PIPEDA / CCPA in every system." },
  { icon: Eye, title: "Radical Transparency", desc: "Fixed prices. Weekly demos. No jargon." },
  { icon: HeartHandshake, title: "People Before Technology", desc: "Training & adoption matter." },
  { icon: Clock, title: "Long-Term Thinking", desc: "Systems designed to last 5+ years." },
  { icon: Star, title: "Client First, Always", desc: "Every decision starts with the client." },
];

const comparison = [
  { metric: "Experience", parent: "8+ Years", nnc: "Launched for CA / US / UK" },
  { metric: "Projects Delivered", parent: "565+", nnc: "Growing portfolio in NA & UK" },
  { metric: "Team Size", parent: "100+ Members", nnc: "Dedicated International Team" },
  { metric: "Offices", parent: "Bangalore · Mysore · Mumbai · Hyderabad", nnc: "Toronto · New York · London" },
];

const intlOffices = [
  { flag: "🇨🇦", city: "Toronto, Canada", phone: "+91 99005 66466" },
  { flag: "🇺🇸", city: "New York, USA", phone: "+91 99005 66466" },
  { flag: "🇬🇧", city: "London, UK", phone: "+91 99005 66466" },
];

const indiaOffices = [
  { flag: "🇮🇳", city: "Bangalore HQ", phone: "+91 99005 66466" },
  { flag: "🇮🇳", city: "Mysore", phone: "+91 99005 66466" },
  { flag: "🇮🇳", city: "Mumbai", phone: "+91 99005 66466" },
  { flag: "🇮🇳", city: "Hyderabad", phone: "+91 99005 66466" },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};


function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.3em] text-cyan-300/80 backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      {children}
    </span>
  );
}

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);


  const storyRef = useRef(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const storyImgY = useTransform(storyProgress, [0, 1], ["-12%", "12%"]);
// bg-[#1A2343]
  return (
    <div className="bg-[#1A2343] text-white">
      <section
        ref={heroRef}
        className="relative flex min-h-[90vh]  overflow-hidden px-6 pt-32 pb-20"
      >
        <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="pointer-events-none absolute top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/15 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative  max-w-5xl text-left px-6"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>About NNC Digital Solutions</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight md:text-6xl"
          >
            Built on{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Indian Tech Excellence.
            </span>
            <br className="hidden md:block" /> Built for Canadian,{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
              US & UK Business.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className=" mt-6 max-w-3xl text-lg leading-relaxed text-slate-300/90"
          >
            NNC Digital Solutions is the international technology arm of Nakshatra
            Namaha Creations Pvt. Ltd. — one of Bangalore's most respected digital
            studios. We believe the deep technology expertise that has transformed
            thousands of Indian businesses deserves to be accessible to growing
            companies in Canada, the USA, and the United Kingdom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap  gap-4"
          >
            <a
             href="tel:+919900566466"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] hover:shadow-[0_14px_44px_-6px_rgba(6,182,212,0.85)]">
              Book a Free Consultation
            </a>
            <Link
            href="/blog"
             className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
              View Our Work
            </Link>
          </motion.div>

      
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className=" mt-14 grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-4"
          >
            {heroStats.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  <Icon className="mx-auto h-6 w-6 text-cyan-400" />
                  <div className="mt-3 bg-gradient-to-br from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
                    {s.value}
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{s.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      <section ref={storyRef} className="relative px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
              From Bangalore to Canada —{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                The NNC Digital Story
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-slate-300/90 leading-relaxed">
              <p>
                Nakshatra Namaha Creations Pvt. Ltd. was founded in Bangalore — a
                city synonymous with world-class software engineering. Over 8+
                years, the company built a reputation as one of Karnataka's most
                trusted digital studios, delivering 565+ projects across web,
                mobile, marketing, video, and 2D animation.
              </p>
              <p>
                In response to rising demand from businesses in Canada, the USA,
                and the UK who needed a trustworthy offshore technology partner,
                NNC Digital Solutions was launched as our dedicated international
                brand.
              </p>
              <p>
                NNC Digital is not a new company building a reputation from
                scratch — it is the international expression of a decade of proven
                capability, backed by the people, processes, and portfolio of one
                of India's most capable digital studios.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-[2px] rounded-[30px] bg-[conic-gradient(from_0deg,#34d399,#22d3ee,#3b82f6,#22d3ee,#34d399)] bg-[length:300%_300%] opacity-50 blur-[8px] animate-[ringSpin_8s_linear_infinite]" />
            <div className="relative h-[420px] overflow-hidden rounded-[28px] border border-white/10">
              <motion.img
                src="/hero1.png"
                alt="NNC Digital — global delivery"
                style={{ y: storyImgY }}
                className="absolute inset-0 h-[124%] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-lg font-bold text-white">
                  Bangalore · Toronto · New York · London
                </p>
                <p className="mt-1 text-sm text-cyan-300">
                  One trusted studio. Three international markets. 8+ years of global delivery.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-6">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/12 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>The Foundation</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Our Parent Company</h2>
            <p className="mt-3 text-lg text-slate-400">Nakshatra Namaha Creations Pvt. Ltd.</p>
          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">8+ Years of Digital Excellence</h3>
                <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                  Since 2016
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300/90">
                Headquartered in <span className="font-semibold text-white">Bengaluru, Karnataka</span> —
                India's Silicon Valley — with strategic offices in Mysore, Mumbai, and Hyderabad.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Bengaluru HQ", "Mysore", "Mumbai", "Hyderabad"].map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                    <MapPin className="h-3 w-3 text-cyan-400" />
                    {c}
                  </span>
                ))}
              </div>
              <a href="https://www.nakshatranamahacreations.com" className="mt-5 inline-block text-sm font-semibold text-cyan-300 hover:underline">
                www.nakshatranamahacreations.com
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-white">565+ Projects Delivered</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300/90">
                From corporate websites and mobile apps to 2D animation, B2B
                marketing, and video production — every digital discipline a
                modern business could need.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Web", "Mobile", "Marketing", "Animation", "Video", "B2B", "SEO", "Design"].map((c) => (
                  <span key={c} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-200">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>


          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Services That Power NNC Digital</h3>
            <p className="mt-3 text-slate-400">Full-spectrum capabilities from India's most trusted digital studio</p>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.name}
                  variants={fadeUp}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-gray-200 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-gray-300 hover:shadow-[0_15px_40px_-12px_rgba(6,182,212,0.4)]"
                >
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 transition group-hover:scale-110"> */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:scale-110">
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  <p className="text-sm font-medium text-slate-900">{s.name}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md"
          >
            <div className="border-b border-white/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                At a Glance: Parent Company vs. NNC Digital
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 border-b border-white/10 bg-white/[0.02] p-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <span>Metric</span>
              <span>Nakshatra Namaha</span>
              <span className="text-cyan-300">NNC Digital</span>
            </div>
            {comparison.map((row, i) => (
              <div
                key={row.metric}
                className={`grid grid-cols-3 gap-4 p-5 text-sm ${i % 2 ? "bg-white/[0.02]" : ""}`}
              >
                <span className="font-medium text-white">{row.metric}</span>
                <span className="text-slate-300">{row.parent}</span>
                <span className="text-cyan-200">{row.nnc}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-6">
        <div className="mx-auto max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
            <SectionLabel>Our Purpose</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              Why We Launched NNC Digital for the{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                North American & UK Market
              </span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" whileHover={{y: -10, scale: 1.03, transition: {duration: 0.35},ease: "easeOut"}} viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_30px_90px_rgba(34,211,238,0.25)]"
            >
              <span className="pointer-events-none absolute left-[-120px] top-0 h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 ease-linear group-hover:left-[calc(100%+120px)]" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white">The Gap We Saw</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300/90">
                Businesses in Canada, the USA, and the UK face a common challenge:
                local agencies charge premium prices for work that can be
                delivered at a fraction of the cost — without any quality
                reduction — by the right offshore partner. Most offshore agencies
                fail because they don't understand the regulatory environment,
                commercial culture, or specific needs of Western businesses.
              </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show"   whileHover={{y: -10, scale: 1.03, transition: {duration: 0.35, ease: "easeOut"},}} viewport={{ once: true}} className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-transparent p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-300/50 hover:shadow-[0_30px_90px_rgba(96,182,212,0.25)] ">
              <span className="pointer-events-none absolute left-[-120px] top-0 h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 ease-linear group-hover:left-[calc(100%+120px)]" />
              <h3 className="text-xl font-bold text-white">The Solution We Built</h3>
              <ul className="mt-4 space-y-3">
                {solutionPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      <section className="relative px-6 py-6">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              What We{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Stand For
              </span>
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-14 flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory p-4"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                 className="group relative shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc((100%-3rem)/3)] snap-start overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.4)]"
               >
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="relative mt-5 text-lg font-bold text-white">{v.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-400">{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Global Offices</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Where We Operate</h2>
          </div>

    
          <h3 className="mt-12 mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            International Offices
          </h3>
          <div className="grid gap-5 sm:grid-cols-3">
            {intlOffices.map((o) => (
              <motion.div
                key={o.city}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="text-3xl">{o.flag}</div>
                <p className="mt-3 font-semibold text-white">{o.city}</p>
                <p className="mt-1 text-sm text-slate-400">{o.phone}</p>
              </motion.div>
            ))}
          </div>

 
          <h3 className="mt-12 mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            India Offices — Nakshatra Namaha Creations
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {indiaOffices.map((o) => (
              <motion.div
                key={o.city}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="text-3xl">{o.flag}</div>
                <p className="mt-3 font-semibold text-white">{o.city}</p>
                <p className="mt-1 text-sm text-slate-400">{o.phone}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-cyan-300">
            <Mail className="h-4 w-4" />
            info@nakshatranamahacreations.com
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-6">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[140px]" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
          <div className="relative rounded-3xl border border-white/10 bg-[#0a1228]/80 p-10 backdrop-blur-xl md:p-14">
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              Ready to Start a{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Conversation?
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300/90">
              Whether you have a fully scoped project or just a problem you're
              trying to solve — we'd love to talk. We'll respond within 24 hours
              with honest, practical advice.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a 
              href="tel:+919900566466"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                Book a Free Consultation
              </a>
              <Link
              href="/blog"
               className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
                View Our Work →
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes ringSpin {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </div>
  );
}