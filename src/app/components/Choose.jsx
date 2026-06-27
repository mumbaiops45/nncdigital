"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stats = [
  {
    number: "1500+",
    title: "Web Projects",
  },
  {
    number: "500+",
    title: "Mobile Apps",
  },
  {
    number: "1800+",
    title: "IT Talents",
  },
  {
    number: "25+",
    title: "Industries",
  },
];


const tabs = [
  {
    title: "Custom CRM Development",
    desc: "Fully bespoke CRM built around your exact business workflows.",
    img: "/crmdevelopment.png",
  },
  {
    title: "Cloud-Based CRM Services",
    desc: "Scalable and secure cloud CRM infrastructure for growing teams.",
    img: "/Cloud-Based.jpg",
  },
  {
    title: "Real-Time Dashboards",
    desc: "Live analytics and reporting dashboards for instant insights.",
    img: "/Real-Time.png",
  },
  {
    title: "Advanced User Permissions",
    desc: "Control every user's access level with smart permission rules.",
    img: "/generate.jpg",
  },
  {
    title: "Data Quality Management",
    desc: "Keep your customer database clean and accurate.",
    img: "/DataQuality.jpg",
  },
  {
    title: "Workflow Automation",
    desc: "Automate approvals, notifications and daily tasks.",
    img: "/workflow.jpg",
  },
  {
    title: "Performance Optimization",
    desc: "Improve CRM speed and application performance.",
    img: "/improvecrm.jpg",
  },
  {
    title: "AI Powered Insights",
    desc: "Use intelligent analytics to discover opportunities.",
    img: "/aiinsight.webp",
  },
  {
    title: "CRM Health Checks",
    desc: "Identify problems and optimize your CRM system.",
    img: "/healthcheck.png",
  },
];

export default function Choose() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="relative overflow-hidden bg-[#1A2343] py-28 px-6 text-white">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-left">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
              Why Choose Us
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
              Custom CRM Development
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="mt-5 max-w-2xl mb-4 text-lg text-slate-300/90">
              Powerful CRM solutions designed to automate workflows, improve
              productivity and grow your business.
            </p>
          </div>

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-200px] top-[100px] h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[130px]" />
            <div className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[140px]" />
            <div className="absolute left-1/2 top-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-[130px]" />
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

        <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 items-center gap-10">
          <div className="md:col-span-4 space-y-4">
            {tabs.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left rounded-2xl px-5 py-4 border transition-all duration-300
              ${active === i
                    ? "bg-white/10 border-cyan-400/40"
                    : "bg-white/[0.04] border-white/10 hover:bg-white/[0.07]"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2 w-2 rounded-full ${active === i ? "bg-cyan-400" : "bg-white/30"
                      }`}
                  />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>

                {active === i && (
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </button>
            ))}
          </div>

          <div className="md:col-span-8 relative flex items-center justify-center">

            <div className="absolute -inset-[2px] rounded-[26px] bg-[conic-gradient(from_0deg,#34d399,#22d3ee,#3b82f6,#22d3ee,#34d399)] opacity-40 blur-[10px]" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl w-full">

              <AnimatePresence mode="wait">
                <motion.img
                  key={tabs[active].img}
                  src={tabs[active].img}
                  alt="watch"
                  initial={{ opacity: 0, scale: 0.98, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-[520px] w-full object-cover"
                />
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-transparent to-blue-700/10" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent" />
            </div>

            <div className="pointer-events-none absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-cyan-500/25 blur-3xl" />
          </div>

        </div>
      </section>


      <section className="relative h-[850px] overflow-hidden">
        <motion.img
          src="/hero1.png"
          alt=""
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.08 }}
          transition={{ duration: 10 }}
          viewport={{ once: true }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-20 top-24 h-80 w-80 rounded-full bg-green-500 blur-[160px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="relative z-20 flex h-full items-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl px-8 lg:px-20"
          >

            <motion.p
              variants={item}
              className="inline-block rounded-full border border-white/20  px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]  backdrop-blur-xl "
            >
              Why Choose NNC Digital
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl"
            >
              CRM Software
              <br />
              Development
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text bg-clip-text text-transparent">
                Agency
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-2xl text-lg leading-9 text-gray-300"
            >
              NNC Digital Solutions is backed by one of Bangalore's most respected
              digital studios with over <span className="font-semibold text-white">8 years</span> of
              experience and more than <span className="font-semibold text-white">565 successful projects</span>.
              We build scalable CRM platforms for businesses across Canada,
              the United States, and the United Kingdom.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-10 flex gap-5"
            >

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="rounded-xl bg-[var(--primery)] px-8 py-4 font-semibold text-white shadow-2xl transition-all"
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{
                  backgroundColor: "rgba(255,255,255,.15)",
                }}
                className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl"
              >
                View Portfolio
              </motion.button>

            </motion.div>
            <motion.div
              variants={container}
              className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4"
            >

              {stats.map((stat) => (

                <motion.div
                  key={stat.title}
                  variants={item}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
                >

                  <h2 className="text-4xl font-bold text-white">
                    {stat.number}
                  </h2>

                  <p className="mt-3 text-sm uppercase tracking-wider text-gray-300">
                    {stat.title}
                  </p>

                </motion.div>

              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

      </section>

    </>
  );
}