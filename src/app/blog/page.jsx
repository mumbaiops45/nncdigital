

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Calendar, ArrowRight, Mail } from "lucide-react";

const articles = [
  {
    tag: "CRM",
    readTime: "8 min read",
    title: "CRM Implementation Guide for Growing Businesses in Canada and the UK",
    excerpt:
      "A step-by-step breakdown of what enterprise CRM actually requires — from requirements gathering to rollout and adoption.",
    date: "Mar 15, 2025",
    image: "/crmimpl1.webp",
    featured: true,
  },
  {
    tag: "CRM",
    readTime: "7 min read",
    title: "What Does a Custom CRM Actually Cost in Canada and the UK in 2025?",
    excerpt:
      "A transparent breakdown of what drives CRM development costs and how to scope a project the right way.",
    date: "Mar 02, 2025",
    image: "/customcrm.webp",
  },
  {
    tag: "CRM",
    readTime: "7 min read",
    title: "WhatsApp CRM Integration: The Complete Guide for Canadian & UK Businesses",
    excerpt:
      "How businesses in North America and the UK are using the WhatsApp Business API to automate customer conversations.",
    date: "Feb 15, 2025",
    image: "/crm-whatsapp.png",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.3em] text-cyan-300/80 backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      {children}
    </span>
  );
}

function ArticleCard({ article, large }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_25px_60px_-15px_rgba(6,182,212,0.4)] ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${large ? "h-64 md:h-96" : "h-48"}`}>
        <motion.img
          src={article.image}
          alt={article.title}
          style={{ y: imgY }}
          className="absolute inset-0 h-[120%] w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-md">
          {article.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {article.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {article.date}
          </span>
        </div>

        <h3
          className={`mt-3 font-bold leading-snug text-white transition-colors group-hover:text-cyan-100 ${
            large ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {article.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
          {article.excerpt}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 transition-all group-hover:gap-3">
          Read Article <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </motion.article>
  );
}


export default function Page() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
//    bg-[#020617]
  return (
    <div className=" bg-[#1A2343] text-white">
      <section
        ref={heroRef}
        className="relative flex min-h-[60vh] items-center overflow-hidden px-6 pt-32 pb-20"
      >
        <motion.div style={{ y: orbY }} className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute top-10 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/15 blur-[150px]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/15 blur-[130px]" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative mx-auto w-full max-w-6xl"
        >
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Insights & Resources</SectionLabel>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl font-bold leading-tight md:text-6xl"
            >
              Insights on{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Technology, Automation
              </span>{" "}
              & Digital Growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90"
            >
              Practical, experience-based articles on CRM, ERP, web development,
              automation, and digital strategy — written for business owners and
              operations leaders in{" "}
              <span className="font-semibold text-cyan-300">
                Canada, the USA, and the UK
              </span>
              . Backed by 10+ years of delivery expertise from Nakshatra Namaha
              Creations.
            </motion.p>
          </div>
        </motion.div>
      </section>

      
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <SectionLabel>Featured Articles</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              In-Depth{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Guides
              </span>
            </h2>
            <p className="mt-3 text-slate-400">
              Written by specialists who build these systems every day.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:auto-rows-fr"
          >
            {articles.map((a, i) => (
              <ArticleCard key={a.title} article={a} large={i === 0} />
            ))}
          </motion.div>
        </div>
      </section>


      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[140px]" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl"
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
          <div className="relative rounded-3xl border border-white/10 bg-[#0a1228]/80 p-10 text-center backdrop-blur-xl md:p-14">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-600/20">
              <Mail className="h-7 w-7 text-cyan-300" />
            </div>

            <SectionLabel>Stay Updated</SectionLabel>

            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              Get Insights Delivered to Your{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Inbox
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-slate-300/90">
              Monthly articles on CRM, ERP, automation, and digital growth for
              business leaders in Canada, the USA, and the UK.
            </p>

            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="group relative overflow-hidden whitespace-nowrap rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-7 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.5)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                Subscribe
              </button>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}