"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Users, TrendingUp, Target, Package, Headphones, Plug, Star,
  BarChart3, ShoppingCart, ShoppingBag, Zap, Globe2, Handshake, Smartphone,
  Phone, Send, Lock, Check, Plus, ArrowRight,
} from "lucide-react";
import useContact from "@/hooks/useContact";


const heroTech = [
  { icon: ShoppingBag, name: "Shopify" },
  { icon: Plug, name: "WooCommerce" },
  { icon: TrendingUp, name: "Google Ads" },
  { icon: Smartphone, name: "Meta Ads" },
];

const solutions = [
  { icon: Users, title: "E-Commerce CRM", desc: "Complete customer history, order tracking, and communication logs. Purpose-built for D2C and B2B e-commerce brands." },
  { icon: TrendingUp, title: "Marketing Automation", desc: "Automated email, SMS, and multi-channel campaigns triggered by customer behaviour and purchase history." },
  { icon: Target, title: "Google & Meta Ads Integration", desc: "Sync ad platforms with CRM for closed-loop reporting, audience building, and conversion tracking." },
  { icon: Package, title: "Inventory & Order Management", desc: "Real-time inventory tracking, automated reorder points, and multi-channel order management." },
  { icon: Headphones, title: "Customer Support CRM", desc: "Unified support inbox, order lookup, and customer history for fast, personalised service." },
  { icon: Plug, title: "Shopify / WooCommerce Integration", desc: "Two-way sync for products, orders, customers, and inventory with your CRM." },
  { icon: Star, title: "Loyalty Programme Development", desc: "Points-based loyalty, referral programmes, and VIP tiers integrated with checkout." },
  { icon: BarChart3, title: "Analytics & Revenue Reporting", desc: "Custom dashboards for revenue by channel, customer LTV, cohort analysis, and ROI tracking." },
  { icon: ShoppingCart, title: "Abandoned Cart Recovery", desc: "Automated email and SMS sequences to recover lost sales with personalised offers." },
];

const compliance = [
  { flag: "🇺🇸", badge: "CCPA", region: "USA", desc: "Full compliance with California Consumer Privacy Act for customer data handling, opt-outs, and data deletion requests." },
  { flag: "🇨🇦", badge: "PIPEDA", region: "Canada", desc: "Systems built to comply with Canada's Personal Information Protection and Electronic Documents Act for e-commerce." },
  { flag: "🛒", badge: "Shopify / WooCommerce", region: "Platforms", desc: "Native integration for product, order, and customer data sync between your e-commerce platform and CRM." },
];

const whyPoints = [
  { icon: ShoppingBag, text: "8+ years of e-commerce technology expertise" },
  { icon: Globe2, text: "Serving Canada, USA & UK markets" },
  { icon: Zap, text: "565+ projects delivered globally" },
  { icon: Plug, text: "Shopify, WooCommerce & ads integration experts" },
  { icon: Handshake, text: "Dedicated client teams in your time zone" },
  { icon: Smartphone, text: "Full-stack: Web, Mobile, CRM, Automation" },
];
const whyStats = [["8+", "Years"], ["565+", "Projects"], ["100+", "Team"], ["35+", "E-Commerce Clients"]];
const resultStats = [["2.4×", "Avg Conversion"], ["89%", "Revenue Lift"], ["24/7", "Automated Sales"], ["99%", "Order Accuracy"]];
const revenueMetrics = [["AOV (Avg Order Value)", "$127"], ["Repeat Purchase Rate", "43%"], ["Cart Recovery Rate", "28%"]];

const offices = [
  { flag: "🇨🇦", city: "Toronto, Canada", phone: "+91 99005 66466" },
  { flag: "🇺🇸", city: "New York, USA", phone: "+91 99005 66466" },
  { flag: "🇬🇧", city: "London, UK", phone: "+91 99005 66466" },
];

const services = ["E-Commerce CRM", "Marketing Automation", "Ads Integration", "Inventory Management", "Loyalty Programme", "Shopify / WooCommerce", "Other"];
const dialCodes = ["🇨🇦 +1", "🇺🇸 +1", "🇬🇧 +44", "🇮🇳 +91"];

const faqs = [
  { q: "How long does an e-commerce CRM implementation take?", a: "A focused e-commerce CRM typically takes 8–14 weeks. This includes requirements gathering, platform integration (Shopify/WooCommerce), development, data migration, and staff training. For US clients, we ensure CCPA compliance; for Canadian clients, PIPEDA compliance is built in." },
  { q: "Can you integrate with Shopify or WooCommerce?", a: "Yes. We have native integrations for both Shopify and WooCommerce that sync products, orders, customers, and inventory in real-time. The integration works both ways: customer data flows into your CRM, and loyalty points or personalised offers can sync back to the checkout." },
  { q: "What does an e-commerce CRM cost in Canada or the UK?", a: "A comprehensive e-commerce CRM starts from CAD $22,000–$38,000 / £16,000–£28,000. This includes platform integration, marketing automation, abandoned cart recovery, and analytics dashboards. Enterprise solutions with multi-channel support and custom loyalty programmes are scoped individually. All quotes fixed-price." },
  { q: "Do you integrate with Google and Meta ads?", a: "Yes. We connect your CRM directly to Google Ads and Meta Ads Manager for closed-loop reporting. You'll see exactly which campaigns drive revenue, track ROAS at the customer level, and build custom audiences based on purchase behaviour — all automatically synced." },
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
  const {submitForm , loading, success, error} = useContact();
  const [form , setform] = useState({
     fullname: "",
     phone:"",
     email: "",
     service: "",
     message: "",
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;

    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await submitForm(form);

      setform({
        fullname: "",
        phone:"",
        email: "",
        service:"",
        message:""
      })
    } catch (error) {
      console.log(error);
    }
  }

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
              <SectionLabel>E-Commerce Technology</SectionLabel>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              E-Commerce Digital Systems That Drive <span className={grad}>Revenue</span> for Brands in Canada, USA & UK
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300/90">
              E-commerce brands live and die by conversion rate, customer lifetime value, and operational efficiency. We build the digital systems that give growing brands in Canada, the USA, and the UK the infrastructure to scale without chaos.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-wrap gap-3">
              {heroTech.map((t) => {
                const Icon = t.icon;
                return (
                  <span key={t.name} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md">
                    <Icon className="h-4 w-4 text-cyan-400" /> {t.name}
                  </span>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
            <form onSubmit={handleSubmit} className="relative rounded-3xl border border-white/10 bg-[#0a1228]/90 p-7 backdrop-blur-xl md:p-8">
              <span className="absolute left-8 right-8 top-0 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600" />
              <h3 className="text-xl font-bold">Get a <span className={grad}>Free Consultation</span></h3>
              <input type="text" name="fullname" placeholder="Full Name *" value={form.fullname} onChange={handleChange} className={`${inputClass} mt-5`} />
              <div className="mt-4 grid grid-cols-[110px_1fr] gap-3">
                <select  className={inputClass}>{dialCodes.map((d) => <option key={d} className="bg-[#0a1228]">{d}</option>)}</select>
                <input type="tel" name="phone" 
                value={form.phone} onChange={handleChange} placeholder="Phone Number *" className={inputClass} />
              </div>
              <input type="email" name="email" value={form.email} placeholder="Business Email *" className={`${inputClass} mt-4`} />
              <select name="service" value={form.service} className={`${inputClass} mt-4`} defaultValue="">
                <option value="" disabled className="bg-[#0a1228]">Service of Interest</option>
                {services.map((s) => <option key={s} className="bg-[#0a1228]">{s}</option>)}
              </select>
              <textarea rows="2" name="message" value={form.message} onChange={handleChange} placeholder="Message *"
               className={`${inputClass} mt-4 resize-none`} />
              <button type="submit" className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.5)] transition-all duration-500 hover:bg-[position:100%_0]">
                Get Free Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
                <Lock className="h-3.5 w-3.5" /> No spam. Ever.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">E-Commerce Digital Solutions <span className={grad}>We Build</span></h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} 
          // className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          className="my-6 flex gap-5 overflow-x-auto no-scrollbar p-5 scroll-smooth"
          >
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} variants={fadeUp} 
                className="group relative  w-[320px] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/[0.06] hover:shadow-[0_25px_60px_-15px_rgba(34,211,238,0.45)]"
                >
                   <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
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
            <SectionLabel>Compliance & Integration</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Built for <span className={grad}>E-Commerce Platforms</span> in Canada, USA & UK</h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-14 grid gap-6 md:grid-cols-3">
            {compliance.map((c) => (
              <motion.div key={c.badge} variants={fadeUp} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.4)]">
               
                 <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                <div className="relative text-4xl">{c.flag}</div>
                <h3 className={`relative mt-4 text-xl font-bold ${grad}`}>{c.badge}</h3>
                <p className="relative text-xs font-semibold uppercase tracking-wider text-slate-500">{c.region}</p>
                <p className="relative mt-3 text-sm text-slate-400">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

   
      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">Your Trusted <span className={grad}>E-Commerce Technology</span> Partner</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300/90">
              Backed by <strong className="text-white">Nakshatra Namaha Creations Pvt. Ltd.</strong> — 8+ years of experience, 565+ projects delivered. Dedicated client teams in Canada, USA, and UK. Shopify, WooCommerce, and ads integration experts. Long-term partnership focused on your success.
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

          {/* stats */}
          <div className="mt-10 grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md md:grid-cols-4">
            {whyStats.map(([v, l]) => (
              <div key={l} className="text-center">
                <div className={`text-3xl font-bold lg:text-4xl ${grad}`}>{v}</div>
                <p className="mt-1 text-sm text-slate-400">{l}</p>
              </div>
            ))}
          </div>

          {/* results + revenue metrics */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md sm:grid-cols-4">
              {resultStats.map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className={`text-2xl font-bold lg:text-3xl ${grad}`}>{v}</div>
                  <p className="mt-1 text-xs text-slate-400">{l}</p>
                </div>
              ))}
            </div>

            {/* revenue metrics live panel */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a1228]/80 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-cyan-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Revenue Metrics</p>
              </div>
              <div className="mt-5 space-y-3">
                {revenueMetrics.map(([label, val]) => (
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
                Shopify connected · Live data
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
          <h2 className="mt-6 text-3xl font-bold md:text-4xl">Ready to Build Your <span className={grad}>E-Commerce Solution?</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300/90">Tell us about your project. We'll respond within 24 hours with a free consultation.</p>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mt-10 text-left">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
            <form onSubmit={handleSubmit} className="relative rounded-3xl border border-white/10 bg-[#0a1228]/90 p-8 backdrop-blur-xl md:p-10">
              <span className="absolute left-10 right-10 top-0 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600" />
              <input type="text" placeholder="Full Name *" className={inputClass} />
              <div className="mt-4 grid grid-cols-[110px_1fr] gap-3">
                <select className={inputClass}>{dialCodes.map((d) => <option key={d} className="bg-[#0a1228]">{d}</option>)}</select>
                

                <input type="tel" placeholder="Phone" className={inputClass} />
              </div>
              <input type="email" placeholder="Business Email *" className={`${inputClass} mt-4`} />
              <select name="service" value={form.service} className={`${inputClass} mt-4`} defaultValue="">
                <option value="" disabled className="bg-[#0a1228]">Service of Interest</option>
                {services.map((s) => <option key={s} className="bg-[#0a1228]">{s}</option>)}
              </select>
              <textarea rows="3" placeholder="Project Description *" className={`${inputClass} mt-4 resize-none`} />
              <button type="submit"  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] py-4 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.5)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                <Send className="h-4 w-4" /> 
                Submit — Free Consultation
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}