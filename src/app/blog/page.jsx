"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Calendar, ArrowRight, Mail } from "lucide-react";


const articles = [
  { tag: "CRM", readTime: "8 min read", title: "CRM Implementation Guide for Growing Businesses in Canada and the UK", excerpt: "A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to rollout and adoption.", date: "Mar 15, 2025", image: "/crmimpl1.webp" },
  { tag: "CRM", readTime: "7 min read", title: "What Does a Custom CRM Actually Cost in Canada and the UK in 2025?", excerpt: "A transparent breakdown of what drives CRM development costs and how to scope a project the right way.", date: "Mar 02, 2025", image: "/customcrm.webp" },
  { tag: "Automation", readTime: "7 min read", title: "WhatsApp CRM Integration: The Complete Guide for Canadian & UK Businesses", excerpt: "How businesses in North America and the UK are using the WhatsApp Business API to automate customer conversations.", date: "Feb 15, 2025", image: "/crm-whatsapp.png" },
];


const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.3em] text-cyan-300/80 backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      {children}
    </span>
  );
}


function StackCard({ article, index, total, progress }) {
  const targetScale = 1 - (total - index - 1) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 flex justify-center" style={{ paddingTop: `${index * 28}px` }}>
      <motion.article
        style={{ scale }}
        className="group relative grid w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0a1228]/90 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] md:grid-cols-2"
      >
        <span className="absolute left-0 right-0 top-0 z-10 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />
        <div className="relative h-56 overflow-hidden md:h-full md:min-h-[340px]">
          <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1228] via-[#0a1228]/20 to-transparent md:bg-gradient-to-r" />
          <span className="absolute left-5 top-5 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-md">
            {article.tag}
          </span>
        </div>
        <div className="flex flex-col justify-center p-8 md:p-10">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {article.readTime}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {article.date}</span>
          </div>
          <h3 className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">{article.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{article.excerpt}</p>
          {/* <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 transition-all group-hover:gap-3">
            Read Article <ArrowRight className="h-4 w-4" />
          </span> */}
        </div>
      </motion.article>
    </div>
  );
}

export default function Page() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const stackRef = useRef(null);
  const { scrollYProgress: stackProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="bg-gray-50 text-black">
      <section ref={heroRef} className="relative flex min-h-[60vh] items-center bg-[#1A2343] overflow-hidden px-6 pt-32 pb-20">
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Insights & Resources</SectionLabel>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-4xl font-bold text-white leading-tight md:text-6xl">
              Insights on{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Technology, Automation</span>{" "}
              & Digital Growth
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-50">
              Practical, experience-based articles on CRM, ERP, web development, automation, and digital strategy — written for business owners and operations leaders in{" "}
              <span className="font-semibold text-cyan-300">Canada, the USA, and the UK</span>. Backed by 10+ years of delivery expertise from Nakshatra Namaha Creations.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 pt-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
          <SectionLabel>Featured Articles</SectionLabel>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            In-Depth <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Guides</span>
          </h2>
          <p className="mt-3 text-slate-400">Scroll to explore — each guide stacks into view.</p>
        </motion.div>
      </section>

      <section ref={stackRef} className="relative px-6 pb-32 pt-10">
        <div className="mx-auto max-w-7xl space-y-6">
          {articles.map((a, i) => (
            <StackCard key={a.title} article={a} index={i} total={articles.length} progress={stackProgress} />
          ))}
        </div>
      </section>

     
      <section className="relative overflow-hidden  px-6 py-18">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mx-auto bg-[#1A2343]  max-w-3xl">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
          <div className="relative rounded-3xl border border-white/10  p-10 text-center backdrop-blur-xl md:p-14">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20">
              <Mail className="h-7 w-7 text-black" />
            </div>
            <SectionLabel>Stay Updated</SectionLabel>
            <h2 className="mt-6 text-3xl text-white font-bold md:text-4xl">
              Get Insights Delivered to Your <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Inbox</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-50">
              Monthly articles on CRM, ERP, automation, and digital growth for business leaders in Canada, the USA, and the UK.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input type="email" placeholder="Enter email address" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
              <button className="group whitespace-nowrap rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-7 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.5)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-50">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}