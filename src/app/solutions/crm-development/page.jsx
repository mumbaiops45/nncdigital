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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["-8%", "8%"]
  );
  const reversed = index % 2 === 1;
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        margin: "-80px"
      }}
      whileHover={{
        y: -8
      }}
      transition={{
        duration: .4
      }}
      className="group relative overflow-hidden rounded-[32px] border border-slate-700/50 bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#172554] shadow-[0_25px_80px_rgba(0,0,0,.45)] transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_35px_100px_rgba(6,182,212,.20)]">

      <div className={`grid lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}>
        <div className="relative h-72 overflow-hidden lg:h-full [direction:ltr]">
          <motion.img
            src={study.image}
            alt={study.title}
            style={{
              y
            }}

            className="absolute inset-0 h-[115%] w-full object-cover transition duration-700 group-hover:scale-110" />

          <div
            className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#111827]"
          />
          <div
            className="absolute left-6 top-6">
            <span
              className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-xl">
              {study.sector} · {study.region}
            </span>
          </div>

          <div
            className="absolute bottom-6 left-6">
            <div
              className="text-5xl font-black bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {study.stats?.[0]?.[0]}
            </div>
            <p className="text-sm text-slate-300">
              Key Achievement
            </p>
          </div>
        </div>

        <div className="relative p-7 lg:p-10 [direction:ltr]">
          <h3 className="text-3xl font-bold leading-tight text-white transition duration-300 group-hover:text-cyan-300">
            {study.title}
          </h3>
          <div className="mt-7 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                Challenge
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {study.challenge}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                Solution
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {study.solution}
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 ">
            {
              study.stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:bg-white/10">
                  <div className="text-2xl font-black bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                    {value}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    {label}
                  </p>
                </div>
              ))}

          </div>
          <div className="mt-7 h-[2px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-700 group-hover:w-full"
          />
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
    <div className=" text-white">

      <section ref={heroRef} className="relative flex min-h-[85vh] bg-[#1A2343] items-center overflow-hidden px-6 pt-32 pb-20">
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



      <section className=" relative overflow-hidden bg-gradient-to-b from-white  via-[#F8FAFC] to-[#EEF2F7] px-6   py-24">
        <div className=" pointer-events-none absolute left-0 top-20 h-[350px]  w-[350px] rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="  pointer-events-none  absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-emerald-400/10blur-[140px]" />
        <div className="  relative  mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true
            }}
            className=" text-center">
            <SectionLabel>
              Proven Results
            </SectionLabel>
            <h2 className=" mt-6 text-4xl font-black text-slate-900 md:text-5xl">
              Success{" "}
              <span className=" bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p
              className="  mx-auto mt-5 max-w-2xl text-lg  leading-8 text-slate-600">
              Real results for real businesses across Canada,
              USA & UK through innovative digital solutions.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true
            }}
            className="relative mt-16 space-y-10  p-6  md:p-10 ">
            {
              caseStudies.map((s, i) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -6
                  }}
                  transition={{
                    duration: .35
                  }}
                >
                  <CaseCard
                    study={s}
                    index={i}
                  />
                </motion.div>
              ))
            }
          </motion.div>
        </div>
      </section>


      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white px-6 py-10">
        <div className="pointer-events-none absolute -top-20 left-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              CRM Development Services{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                We Offer
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              End-to-end CRM development solutions designed for startups,
              enterprises and growing businesses across Canada, USA and UK.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {servicesOffered.map((service, index) => (
              <motion.div
                key={service}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-cyan-300 hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                <div className="absolute right-6 top-6 text-5xl font-black text-slate-100">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 shadow-lg">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="relative mt-7 text-xl font-bold text-slate-900 transition duration-300 group-hover:text-cyan-700">
                  {service}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* <section className="relative px-6 py-14">
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
                  <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
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
      </section> */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white px-6 py-20">
        <div className="pointer-events-none absolute -top-20 left-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Key Benefits of{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                CRM Development
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Empower your business with scalable CRM solutions that improve
              productivity, automate workflows and strengthen customer
              relationships.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-7 sm:grid-cols-2"
          >
            {benefits.map((b, index) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.35 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-cyan-300 hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]"
                >
                  <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                  <span className="absolute right-7 top-6 text-5xl font-black text-slate-100">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900 transition duration-300 group-hover:text-cyan-700">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {b.desc}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {b.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-700 transition duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-semibold text-cyan-600">
                      Business Growth
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>



      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#111827] px-6 py-24">
        <div className="pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-[160px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-[160px]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionLabel>Our Tech Stack</SectionLabel>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
              Leading Platform Tools{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                That We Use
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              We build scalable CRM platforms using modern technologies trusted by
              enterprises worldwide.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
          >
            {techStack.map((t, index) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.35 }}
                className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-500 ${t.featured
                  ? "border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 via-slate-800 to-blue-600/20 shadow-[0_20px_50px_rgba(6,182,212,.18)]"
                  : "border-slate-700 bg-[#273449] hover:border-cyan-400/40 hover:bg-[#2E3C55]"
                  }`}
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                <h3 className="relative mt-7 text-xl font-bold text-white">
                  {t.name}
                </h3>
                <p className="relative mt-4 text-sm leading-7 text-slate-300">
                  {t.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E5E7EB] px-6 py-20">
        <div className="pointer-events-none absolute -top-24 left-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionLabel>Hire Developers</SectionLabel>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Hire Developers{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Tailored to Your Needs
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Flexible hiring models for startups, SMEs and enterprise businesses
              across Canada, USA and the UK.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {hireTypes.map((h, index) => (
              <motion.div
                key={h.title}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-cyan-300 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                <span className="absolute right-6 top-5 text-5xl font-black text-slate-100">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="mt-7 text-2xl font-bold text-slate-900 transition duration-300 group-hover:text-cyan-700">
                  {h.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap justify-center gap-5"
          >
            <a
              href="/solutions/hire-an-erp-developer"
              className="rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-[0_20px_50px_rgba(6,182,212,.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Hire a CRM Developer
            </a>
            <a
              href="/pricing"
              className="rounded-2xl border border-slate-300 bg-white px-10 py-4 text-lg font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:border-cyan-400 hover:text-cyan-700 hover:shadow-lg"
            >
              View Pricing
            </a>
          </motion.div>
        </div>
      </section>



      <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF2F7] via-[#F8FAFC] to-[#E5E7EB] px-6 py-24">
        <div className="pointer-events-none absolute -top-24 left-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionLabel>AI-Powered</SectionLabel>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Leverage{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                AI-Powered CRM
              </span>{" "}
              Solutions
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Harness artificial intelligence to automate workflows, predict customer
              behavior, and deliver personalized experiences that accelerate business
              growth.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
          >
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.35 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-cyan-300 hover:shadow-[0_25px_70px_rgba(6,182,212,0.18)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-transparent to-emerald-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                  <span className="absolute right-6 top-5 text-5xl font-black text-slate-100">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="relative z-10 mt-7 text-xl font-bold text-slate-900 transition duration-300 group-hover:text-cyan-700">
                    {feature.title}
                  </h3>
                  <p className="relative z-10 mt-4 text-sm leading-7 text-slate-600">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#0F172A] px-6 py-24">

        {/* Background Glow */}
        <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[170px]" />
        <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-[170px]" />
        <div className="absolute left-1/2 top-1/3 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[170px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
      `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >

            <SectionLabel>Our Story</SectionLabel>

            <h2 className="mt-6 text-4xl font-black md:text-5xl text-white">

              Why Choose Us As Your

              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Trusted CRM Partner?
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

              Backed by Nakshatra Namaha Creations Pvt. Ltd. —
              one of Bangalore's most respected digital studios,
              delivering enterprise-grade CRM solutions with
              8+ years of expertise and 565+ successful projects.

            </p>

          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whyPoints.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.text}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    transition: { duration: .35 }
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-700/60 bg-gradient-to-br from-[#273449] via-[#202B3C] to-[#1A2432] p-7 shadow-[0_25px_60px_rgba(0,0,0,.35)] transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_30px_80px_rgba(6,182,212,.18)]"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-700 group-hover:w-full" />
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />
                  <motion.div
                    animate={{
                      y: [0, -6, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity
                    }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20"
                  >
                    <Icon className="h-7 w-7 text-cyan-300" />
                  </motion.div>
                  <h3 className="mt-6 text-xl font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-300">
                    {p.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative mt-20 overflow-hidden rounded-[34px] border border-slate-700/50 bg-gradient-to-br from-[#273449] via-[#202B3C] to-[#1A2432] p-10 shadow-[0_30px_90px_rgba(0,0,0,.40)]"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {whyStats.map(([value, label]) => (
                <motion.div
                  key={label}
                  whileHover={{
                    scale: 1.05
                  }}
                  className="text-center"
                >
                  <div className="text-5xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {value}
                  </div>
                  <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                  <p className="mt-4 text-sm uppercase tracking-widest text-slate-400">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#1E293B] px-6 py-18">
        <div className="absolute -left-40 -top-32 h-[32rem] w-[32rem] rounded-full bg-cyan-500/15 blur-[180px]" />
        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-emerald-500/15 blur-[180px]" />
        <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
      `,
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.4 }}
          className="group relative mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#202C3C] via-[#273449] to-[#1D2735] p-10 shadow-[0_40px_120px_rgba(0,0,0,.45)] lg:p-16"
        >
          <div className="absolute inset-0 rounded-[40px] p-[1px]">
            <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-700 group-hover:w-full" />
          </div>
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-3 backdrop-blur-xl">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide text-cyan-300">
                Ready to Grow Your Business?
              </span>
            </div>
            <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
              Transform Your Business With
              <span className="mt-2 block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI-Powered CRM Solutions
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Partner with NNC Digital to design intelligent CRM platforms that
              automate workflows, increase customer engagement and accelerate
              sustainable business growth across Canada, USA and the UK.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <a href="tel:+919900566466">
                <button className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 px-9 py-4 text-lg font-semibold text-white shadow-[0_20px_50px_rgba(6,182,212,.30)] transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                  Schedule Free Consultation
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </a>
              <a
                href="/contact"
                className="rounded-2xl border border-white/10 bg-white/5 px-9 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-white/10"
              >
                Talk To Our Experts
              </a>
            </div>
          </div>
        </motion.div>
      </section>


    </div>
  );
}