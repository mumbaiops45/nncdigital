"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Target, Users, Search, BarChart3, Link2, RefreshCw, Wrench,
  Check, Plus, ArrowRight, Send, Lock,
} from "lucide-react";
import useContact from "@/hooks/useContact";


const engagements = [
  {
    icon: Target,
    title: "Fixed-Price Project",
    subtitle: "Well-defined projects with clear requirements",
    desc: "Fixed price, fixed timeline, defined deliverables. Milestone-based billing.",
    points: ["Fixed cost guarantee", "Fixed timeline", "Milestone billing", "No scope creep"],
  },
  {
    icon: Users,
    title: "Dedicated Team (Retainer)",
    subtitle: "Ongoing development with flexible requirements",
    desc: "Dedicated developer or team. Flat monthly rate. Scales up or down.",
    points: ["Dedicated resource", "Rolling monthly", "Full or part-time", "Flexible scope"],
    popular: true,
  },
  {
    icon: Search,
    title: "Discovery Sprint",
    subtitle: "Complex requirements needing clarity before build",
    desc: "2–4 week sprint delivering a working prototype and fixed-price proposal.",
    points: ["Low upfront investment", "Full clarity before build", "Working prototype", "Fixed proposal"],
  },
];

const pricing = [
  { type: "CRM Configuration & Setup", usd: "$8,000", cad: "CA$11,000", gbp: "£6,500" },
  { type: "Custom CRM Development", usd: "$20,000", cad: "CA$27,000", gbp: "£16,000" },
  { type: "Custom ERP Development", usd: "$35,000", cad: "CA$47,000", gbp: "£28,000" },
  { type: "Enterprise Website", usd: "$10,000", cad: "CA$14,000", gbp: "£8,000" },
  { type: "Mobile App (iOS or Android)", usd: "$18,000", cad: "CA$24,000", gbp: "£15,000" },
  { type: "Funnel Automation Setup", usd: "$5,000", cad: "CA$7,000", gbp: "£4,000" },
  { type: "Dedicated Developer (monthly)", usd: "$3,500/mo", cad: "CA$4,700/mo", gbp: "£2,800/mo" },
];

const costFactors = [
  { icon: BarChart3, title: "Scope & Feature Complexity", desc: "Number of user roles, workflows, integrations, and custom features directly impacts development time and cost." },
  { icon: Link2, title: "Third-Party Integrations", desc: "Each integration with an external system — WhatsApp, Salesforce, QuickBooks, Shopify — adds development time." },
  { icon: RefreshCw, title: "Data Migration", desc: "Volume and complexity of your existing data affects the migration effort and testing time." },
  { icon: Wrench, title: "Ongoing Support Requirements", desc: "Post-launch packages from basic bug-fix cover to full managed service agreements." },
];

const whyPoints = [
  "Fixed prices with no hidden costs",
  "Milestone-based billing",
  "You never pay for work you haven't seen",
  "Free scoping consultation",
  "24-hour response guarantee",
];
const whyStats = [["8+", "Years"], ["565+", "Projects"], ["100+", "Team"]];

const projectTypes = [
  "CRM Configuration & Setup", "Custom CRM Development", "Custom ERP Development",
  "Enterprise Website", "Mobile App", "Funnel Automation", "Dedicated Developer",
];
const budgetRanges = ["Under $10,000", "$10,000 – $25,000", "$25,000 – $50,000", "$50,000+", "Not sure yet"];
const dialCodes = ["🇨🇦 +1", "🇺🇸 +1", "🇬🇧 +44", "🇮🇳 +91"];

const faqs = [
  { q: "What's included in the fixed-price proposal?", a: "Every fixed-price proposal includes detailed scope of work, project timeline, milestone deliverables, compliance documentation, and a clear payment schedule. There are absolutely no hidden costs — what we quote is what you pay." },
  { q: "How does milestone billing work?", a: "Projects are broken into clear milestones. You pay a percentage at each milestone only after reviewing and approving the delivered work — so you never pay for work you haven't seen and approved." },
  { q: "Do you offer discounts for long-term engagements?", a: "Yes. Dedicated team retainers and multi-project engagements are priced at preferential rates. Longer commitments unlock better monthly rates — discussed during your free consultation." },
  { q: "What currencies do you work with?", a: "We quote and invoice in USD, CAD, and GBP for transparency with our North American and UK clients. Your proposal will be in your local currency." },
];


const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
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

  const [currency, setCurrency] = useState("usd");
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

      <section ref={heroRef} className="relative flex min-h-[55vh] items-center overflow-hidden px-6 pt-32 pb-16">
        <motion.div style={{ y: orbY }} className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute top-10 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/15 blur-[150px]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/15 blur-[130px]" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative px-6 max-w-3xl text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>Pricing</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Transparent Pricing.{" "}
            <span className={grad}>Flexible Engagement.</span>{" "}
            No Surprises.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className=" mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90">
            We believe technology investment should be predictable. Fixed-scope proposals, milestone-based billing, and zero hidden costs — for businesses of every size across Canada, the USA, and the UK.
          </motion.p>
        </motion.div>
      </section>


      <section className="relative px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>How We Engage</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Choose the Engagement Model <span className={grad}>That Fits</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 lg:grid-cols-3">
            {engagements.map((e) => {
              const Icon = e.icon;
              return (
                <motion.div
                  key={e.title}
                  variants={fadeUp}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl border p-8 backdrop-blur-md transition-all duration-500 ${e.popular
                    ? "border-cyan-400/50 bg-gradient-to-b from-cyan-500/10 via-white/[0.04] to-white/[0.04] shadow-[0_25px_70px_-20px_rgba(6,182,212,0.5)]"
                    : "border-white/10 bg-white/[0.04] hover:-translate-y-1.5 hover:border-cyan-400/40"
                    }`}
                >
                  {e.popular && (
                    <>
                      <span className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />
                      <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Popular</span>
                    </>
                  )}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300 transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{e.title}</h3>
                  <p className="mt-1.5 text-sm text-cyan-300">{e.subtitle}</p>
                  <p className="mt-4 text-sm text-slate-400">{e.desc}</p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>


      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-4xl">
          <div className="text-center">
            <SectionLabel>Investment Ranges</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Typical <span className={grad}>Investment Ranges</span></h2>
            <p className="mt-3 text-sm text-slate-500">*All projects begin with a free scoping consultation and fixed-price proposal.</p>
          </div>

          {/* currency toggle */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
              {[["usd", "USD"], ["cad", "CAD"], ["gbp", "GBP"]].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setCurrency(key)}
                  className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${currency === key
                    ? "bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-white shadow-[0_4px_20px_-4px_rgba(6,182,212,0.6)]"
                    : "text-slate-400 hover:text-white"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md">
            <div className="grid grid-cols-[1.6fr_1fr] gap-4 border-b border-white/10 bg-white/[0.02] p-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <span>Project Type</span>
              <span className="text-right text-cyan-300">{currency.toUpperCase()}</span>
            </div>
            {pricing.map((row, i) => (
              <div key={row.type} className={`grid grid-cols-[1.6fr_1fr] items-center gap-4 p-5 text-sm ${i % 2 ? "bg-white/[0.02]" : ""}`}>
                <span className="font-medium text-white">{row.type}</span>
                <span className={`text-right text-lg font-bold ${grad}`}>{row[currency]}</span>
              </div>
            ))}
          </motion.div>
          <p className="mt-4 text-center text-sm text-slate-500">All prices are starting ranges. Final pricing determined during free consultation.</p>
        </div>
      </section>


      <section className="relative px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Cost Factors</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">What Determines the Cost of <span className={grad}>Your Project?</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {costFactors.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300 transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>


      <section className="relative overflow-hidden px-6 py-14">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
              <div className="absolute -inset-[2px] rounded-[30px] bg-[conic-gradient(from_0deg,#34d399,#22d3ee,#3b82f6,#22d3ee,#34d399)] bg-[length:300%_300%] opacity-50 blur-[8px] animate-[ringSpin_8s_linear_infinite]" />
              <div className="relative h-[360px] overflow-hidden rounded-[28px] border border-white/10">
                <img src="/pricing-why.webp" alt="Transparent pricing" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-4 p-7">
                  {whyStats.map(([v, l]) => (
                    <div key={l}>
                      <div className={`text-2xl font-bold lg:text-3xl ${grad}`}>{v}</div>
                      <p className="text-xs text-slate-300">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>


            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                Why Our Pricing Works for{" "}
                <span className={grad}>Canadian & UK Businesses</span>
              </h2>
              <p className="mt-5 text-slate-300/90">
                We combine the engineering depth of a 100+ person Bangalore studio with the commercial transparency North American and UK businesses expect.
              </p>
              <div className="mt-7 space-y-3">
                {whyPoints.map((p) => (
                  <div key={p} className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20 text-cyan-300">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-3xl">
          <div className="text-center">
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Get Your <span className={grad}>Custom Quote</span></h2>
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mt-10">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
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
        </div>
      </section>


      <section className="relative px-6 py-18">
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

      <style jsx global>{`
        @keyframes ringSpin { 0% { background-position: 0% 50%; } 100% { background-position: 300% 50%; } }
      `}</style>
    </div>
  );
}