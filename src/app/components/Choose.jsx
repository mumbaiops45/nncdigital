
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const crmSlides = [
  {
    category: "CRM Mobile App System",
    items: [
      {
        title: "Custom CRM Development",
        desc: "Fully bespoke CRM built around your exact business workflows.",
        image: "/crmdevelopment.png",
      },
      {
        title: "Cloud-Based CRM Services",
        desc: "Scalable and secure cloud CRM infrastructure for growing teams.",
        image: "/Cloud-Based.jpg",
      },
      {
        title: "Real-Time Dashboards",
        desc: "Live analytics and reporting dashboards for instant insights.",
        image: "/Real-Time.png",
      },
    ],
  },
  {
    category: "User Role & Permission Mgmt",
    items: [
      {
        title: "Advanced User Permissions",
        desc: "Control every user's access level with smart permission rules.",
        image: "/generate.jpg",
      },
      {
        title: "Data Quality Management",
        desc: "Keep your customer database clean and accurate.",
        image: "/DataQuality.jpg",
      },
      {
        title: "Workflow Automation",
        desc: "Automate approvals, notifications and daily tasks.",
        image: "/workflow.jpg",
      },
    ],
  },
  {
    category: "Performance Tuning",
    items: [
      {
        title: "Performance Optimization",
        desc: "Improve CRM speed and application performance.",
        image: "/improvecrm.jpg",
      },
      {
        title: "AI Powered Insights",
        desc: "Use intelligent analytics to discover opportunities.",
        image: "/aiinsight.webp",
      },
      {
        title: "CRM Health Checks",
        desc: "Identify problems and optimize your CRM system.",
        image: "/healthcheck.png",
      },
    ],
  },
];

export default function Choose() {
  const [active, setActive] = useState(0);
  const [feature, setFeature] = useState(0);
  const current = crmSlides[active].items[feature];

  useEffect(() => {
    const timer = setInterval(() => {
      setFeature((prev) => {
        const total = crmSlides[active].items.length;
        if (prev === total - 1) {
          setActive((old) => (old === crmSlides.length - 1 ? 0 : old + 1));
          return 0;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="relative overflow-hidden bg-[#020617] px-6 py-28">
      <div className="pointer-events-none absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[130px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-7xl">
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
          <p className="mt-5 max-w-2xl text-lg text-slate-300/90">
            Powerful CRM solutions designed to automate workflows, improve
            productivity and grow your business.
          </p>
        </div>

       
        <div className="mt-12 flex flex-wrap gap-3">
          {crmSlides.map((item, index) => (
            <motion.button
              key={item.category}
              onClick={() => {
                setActive(index);
                setFeature(0);
              }}
              whileHover={{ y: -3 }}
              className={`rounded-full px-7 py-3 text-sm font-medium transition-all duration-300 ${
                active === index
                  ? "bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)]"
                  : "border border-white/10 bg-white/5 text-slate-300 backdrop-blur-md hover:border-cyan-400/40 hover:text-white"
              }`}
            >
              {item.category}
            </motion.button>
          ))}
        </div>

      
        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  {current.title}
                </h2>
                <p className="mt-5 text-lg text-slate-300/90">{current.desc}</p>

                <div className="mt-10 space-y-4">
                  {crmSlides[active].items.map((item, index) => (
                    <div
                      key={item.title}
                      onClick={() => setFeature(index)}
                      className={`group cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
                        feature === index
                          ? "border-cyan-400/50 bg-cyan-400/10 shadow-[0_0_30px_-10px_rgba(6,182,212,0.5)]"
                          : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                            feature === index
                              ? "bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.9)]"
                              : "bg-white/30 group-hover:bg-white/60"
                          }`}
                        />
                        <h3
                          className={`text-lg font-semibold transition-colors ${
                            feature === index ? "text-white" : "text-slate-200"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 pl-5 text-sm text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <button className="group relative mt-10 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-9 py-4 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] hover:shadow-[0_14px_44px_-6px_rgba(6,182,212,0.85)]">
                  Book Free Strategy Call
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <div className="relative">
              <div className="absolute -inset-[2px] rounded-[42px] bg-[conic-gradient(from_0deg,#34d399,#22d3ee,#3b82f6,#22d3ee,#34d399)] bg-[length:300%_300%] opacity-50 blur-[8px] animate-[ringSpin_7s_linear_infinite]" />

              <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_0_80px_rgba(6,182,212,0.25)]">
                <div className="overflow-hidden rounded-[30px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current.image}
                      src={current.image}
                      alt={current.title}
                      initial={{ opacity: 0, x: 80, scale: 1.05 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -80 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="h-full w-full rounded-[30px] object-contain"
                    />
                  </AnimatePresence>
                </div>

                <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    key={current.image}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-8 text-center"
              >
                <h3 className="text-lg font-semibold text-white">
                  {current.title}
                </h3>
                <p className="mt-2 text-slate-400">{current.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ringSpin {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </section>
  );
}