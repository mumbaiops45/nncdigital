"use client"
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { data, industries, blogs } from "../data/data";
import "swiper/css";
import Offers from "./Offers";
import Choose from "./Choose";
import Whatmatter from "./Whatmatter";
import TechStack from "./TechStack";
import { FiArrowRight } from "react-icons/fi";

const heroImages = [
  "/hero1.png",
  "/emailint.jpg",
  "/hero2.png",
];


function IndustryCard({ industry }) {
  return (
    <div className="group mx-3 min-w-[260px] rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 text-3xl">
        {industry.icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-slate-900">
        {industry.title}
      </h3>

      <div className="mt-4 h-[2px] w-12 bg-green-500 transition-all duration-300 group-hover:w-20" />
    </div>
  );
}


function BlogCard({ blog }) {
  return (
    <div className="group relative h-[440px] overflow-hidden rounded-[28px] border border-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      <img
        src={blog.image}
        alt={blog.title}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/50" />
      <div className="absolute inset-x-0 bottom-0 p-7 transition-transform duration-500 group-hover:-translate-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[#00A883] px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {blog.category}
          </span>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </div>

        <h3 className="mt-4 text-2xl font-bold leading-tight text-white">
          {blog.title}
        </h3>


        <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-4 text-sm leading-relaxed text-white/85 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {blog.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(0);
  const active = data[open];
  const row1 = industries.slice(0, 5);
  const row2 = industries.slice(5);


  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>

      <section className="relative overflow-hidden bg-[#020617]">

        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center scale-110 blur-[2px] transition-opacity duration-[1500ms] animate-[kenBurns_24s_ease-in-out_infinite] ${currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Brand duotone tint — unifies the busy image into our palette */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/90 via-blue-700/95 to-emerald-600/20 mix-blend-color" />
        <div className="absolute inset-0 bg-[#020617]/35" />

        {/* Directional gradient — left dark (text), right breathes (image) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/15 to-[#020617]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/60" />

        {/* Vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,transparent_30%,rgba(2,6,23,0.7)_100%)]" />

        {/* Animated glow orbs (logo colors) */}
        <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/25 blur-[130px] animate-[heroFloat_9s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute top-32 right-1/4 h-[26rem] w-[26rem] rounded-full bg-blue-600/20 blur-[150px] animate-[heroFloat_11s_ease-in-out_infinite_reverse]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/20 blur-[130px] animate-[heroFloat_10s_ease-in-out_infinite]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="relative z-10 px-6 lg:px-12 py-6  min-h-[750px] flex items-center">
          <div className="grid lg:grid-cols-2 gap-14 items-center w-full">
            <div className="text-white">


              <h1 className="text-5xl lg:text-5xl font-bold leading-[1.08] mt-12 tracking-tight animate-[heroUp_0.7s_ease-out_0.1s_both]">
                Build Once.
                <span className="hero-shimmer block">Scale Everywhere.</span>
                <span className="hero-shimmer hero-shimmer-2 block">Automate Everything.</span>
              </h1>

              <p className="mt-7 text-lg text-slate-50 max-w-xl leading-relaxed animate-[heroUp_0.7s_ease-out_0.2s_both]">
                We design and develop custom CRM, ERP, Web, and Mobile applications
                that automate operations and accelerate growth across Canada, USA,
                and the UK.
              </p>

              <p className="mt-4 inline-flex items-center gap-2 text-cyan-300 font-medium animate-[heroUp_0.7s_ease-out_0.3s_both]">
                <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
                10+ Years of Enterprise Software Expertise
              </p>


              <div className="flex flex-wrap gap-4 mt-8 animate-[heroUp_0.7s_ease-out_0.4s_both]">
                <button className="group relative px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] hover:shadow-[0_14px_44px_-6px_rgba(6,182,212,0.85)] hover:-translate-y-0.5 transition-all duration-500">
                  Book Free Strategy
                </button>

                <button className="px-8 py-3.5 rounded-xl font-semibold text-white border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300">
                  Explore Solutions
                </button>
              </div>


              <div className="flex flex-wrap gap-2.5 mt-8 animate-[heroUp_0.7s_ease-out_0.5s_both]">
                {[
                  "Google Partner",
                  "ISO Certified",
                  "GDPR Compliant",
                  "PIPEDA Compliant",
                  "Clutch Top Agency",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-sm text-slate-200/80 hover:border-cyan-400/40 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>


              <div className="grid grid-cols-3 gap-6 mt-10 max-w-xl animate-[heroUp_0.7s_ease-out_0.6s_both]">
                {[
                  { n: "250+", l: "Projects" },
                  { n: "98%", l: "Client Retention" },
                  { n: "10+", l: "Years Experience" },
                ].map((s, i) => (
                  <div key={s.l} className={i !== 0 ? "border-l border-white/10 pl-6" : ""}>
                    <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-br from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      {s.n}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>


            <div className="flex justify-end animate-[heroUp_0.8s_ease-out_0.25s_both]">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-[2px] rounded-3xl bg-[conic-gradient(from_0deg,#34d399,#22d3ee,#3b82f6,#22d3ee,#34d399)] bg-[length:300%_300%] blur-[6px] opacity-60 animate-[ringSpin_6s_linear_infinite]" />

                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600" />

                  <p className="text-cyan-600 mt-3 font-semibold text-sm tracking-wide uppercase">
                    Free Strategy Consultation
                  </p>

                  <h2 className="text-2xl lg:text-3xl font-bold mt-2 text-slate-900">
                    Get a Free Consultation
                  </h2>

                  <p className="text-slate-500 text-sm mt-1.5">
                    Response within 24 hours. No commitment required.
                  </p>

                  <form className="mt-5 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="First Name" className="border border-slate-200 rounded-xl p-3 w-full text-slate-800 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition" />
                      <input type="text" placeholder="Last Name" className="border border-slate-200 rounded-xl p-3 w-full text-slate-800 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition" />
                    </div>

                    <input type="tel" placeholder="Phone Number" className="border border-slate-200 rounded-xl p-3 w-full text-slate-800 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition" />
                    <input type="email" placeholder="Email Address" className="border border-slate-200 rounded-xl p-3 w-full text-slate-800 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition" />

                    <select className="border border-slate-200 rounded-xl p-3 w-full text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition">
                      <option>Service of Interest</option>
                      <option>CRM Development</option>
                      <option>ERP Development</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Marketing Automation</option>
                      <option>Salesforce CRM</option>
                      <option>Digital Transformation</option>
                      <option>SEO & Digital Marketing</option>
                    </select>

                    <textarea rows="2" placeholder="Tell us about your project..." className="border border-slate-200 rounded-xl p-3 w-full text-slate-800 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition resize-none" />

                    <button type="submit" className="group relative w-full py-3.5 rounded-xl text-white font-semibold bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-[0_8px_30px_-6px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 hover:shadow-[0_14px_44px_-6px_rgba(6,182,212,0.75)] transition-all duration-500">
                      Get Free Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>


      </section>

      <section
        ref={ref}
        className="relative overflow-hidden bg-[#020617] py-20 px-6"
      >
        <div className="pointer-events-none absolute top-0 left-1/4 h-72 w-72 rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { end: 100, suffix: "+", title: "Projects Delivered", sub: "Across 12 countries" },
              { end: 10, suffix: "+", title: "Years of Combined Expertise", sub: "Deep tech since 2014" },
              { end: 50, suffix: "+", title: "Clients Globally", sub: "CA • USA • UK • IN" },
              { end: 98, suffix: "%", title: "Client Retention Rate", sub: "Long-term partnerships" },
            ].map((s) => (
              <div
                key={s.title}
                className="group relative rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-7 text-center overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_-12px_rgba(6,182,212,0.4)]"
              >
                <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-12 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 group-hover:w-2/3 transition-all duration-500" />
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="relative text-5xl font-bold bg-gradient-to-br from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  {inView && <CountUp end={s.end} duration={2.5} />}
                  {s.suffix}
                </h3>
                <b className="relative block mt-3 text-white font-semibold">
                  {s.title}
                </b>
                <p className="relative text-slate-400 text-sm mt-1.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Offers />
      <Choose />



      <section className="relative overflow-hidden bg-[#020617] px-6 py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[140px]" />
          <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-[130px]" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm uppercase tracking-[0.3em] text-cyan-300/80 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              CRM Capabilities
            </span>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              A Good CRM Always Lets You{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Do More
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Explore the key capabilities that make our CRM solutions stand out for
              businesses in Canada, USA & UK.
            </p>
          </div>

          <div className="mt-16 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-3">
              {data.map((item, i) => {
                const isOpen = open === i;
                const num = String(i + 1).padStart(2, "0");
                return (
                  <div key={item.title}>
                    {isOpen ? (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-white/[0.05] p-6 backdrop-blur-xl shadow-[0_0_40px_-12px_rgba(6,182,212,0.5)]"
                      >
                        <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-500" />
                        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(6,182,212,0.12),transparent_55%)]" />

                        <div className="relative flex items-start gap-4">
                          <span className="text-sm font-bold bg-gradient-to-br from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                            {num}
                          </span>
                          <h3 className="text-lg font-semibold leading-relaxed">
                            <span className="text-cyan-300">{item.title}.</span>{" "}
                            <span className="font-normal text-slate-300">
                              {item.desc}
                            </span>
                          </h3>
                        </div>
                      </motion.div>
                    ) : (
                      <button
                        onClick={() => setOpen(i)}
                        className="group flex w-full items-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-left transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07]"
                      >
                        <span className="text-xs font-bold text-slate-500 transition group-hover:text-cyan-400">
                          {num}
                        </span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-lg text-slate-300 transition-all duration-300 group-hover:rotate-90 group-hover:border-cyan-400 group-hover:text-cyan-400">
                          +
                        </span>
                        <span className="font-medium text-white">{item.title}</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="relative">
                <div className="absolute -inset-[2px] rounded-[30px] bg-[conic-gradient(from_0deg,#34d399,#22d3ee,#3b82f6,#22d3ee,#34d399)] bg-[length:300%_300%] opacity-50 blur-[8px] animate-[ringSpin_7s_linear_infinite]" />

                <div className="relative h-[400px] overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 lg:h-[560px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={active.image}
                      src={`/${active.image}`}
                      alt={active.title}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="h-full w-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 right-0 p-7"
                    >
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/15 backdrop-blur-md border border-cyan-400/30 text-xs text-cyan-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        Live Capability
                      </span>
                      <h3 className="mt-3 text-2xl font-bold text-white">
                        {active.title}
                      </h3>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
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



      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-[#020617]">
        <div className="absolute inset-0">
          <img
            src="/hero1.png"
            alt="CRM Solutions"
            className="h-full w-full scale-110 object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/25 via-blue-700/20 to-emerald-600/15 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/75 to-[#020617]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(2,6,23,0.6)_100%)]" />
        </div>
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px] animate-[ctaFloat_10s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px] animate-[ctaFloat_12s_ease-in-out_infinite_reverse]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[130px] animate-[ctaFloat_11s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-[2px] rounded-3xl bg-[conic-gradient(from_0deg,#34d399,#22d3ee,#3b82f6,#22d3ee,#34d399)] bg-[length:300%_300%] opacity-40 blur-[10px] animate-[ringSpin_8s_linear_infinite]" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.05] px-6 py-12 text-center shadow-2xl backdrop-blur-xl md:px-12 md:py-16">
              <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                Premium CRM Solutions
              </div>

              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Want CRM solutions that take your business to the{" "}
                <span className="cta-shimmer">next level?</span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-300/90 md:text-xl">
                Connect with NNC Digital today and transform your business with
                intelligent CRM solutions built for growth.
              </p>

              <div className="mt-10 flex justify-center">
                <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-10 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] hover:shadow-[0_14px_44px_-6px_rgba(6,182,212,0.85)]">
                  <span className="relative z-10 flex items-center gap-2">
                    Connect Now
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 h-32 w-full bg-gradient-to-t from-[#020617] to-transparent" />

        <style>{`
    @keyframes ctaFloat {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(18px, -24px) scale(1.08); }
    }
    @keyframes ringSpin {
      0% { background-position: 0% 50%; }
      100% { background-position: 300% 50%; }
    }
    @keyframes shimmer {
      0% { background-position: 0% 50%; }
      100% { background-position: 200% 50%; }
    }
    .cta-shimmer {
      background: linear-gradient(90deg, #6ee7b7, #22d3ee, #60a5fa, #22d3ee, #6ee7b7);
      background-size: 200% auto;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmer 6s linear infinite;
    }
  `}</style>
      </section>



      <section className="relative overflow-hidden bg-[#020617] py-28 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-200px] top-[100px] h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[130px]" />
          <div className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[140px]" />
          <div className="absolute left-1/2 top-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-[130px]" />
        </div>


        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >

            <div className="absolute -inset-[2px] rounded-[26px] bg-[conic-gradient(from_0deg,#34d399,#22d3ee,#3b82f6,#22d3ee,#34d399)] bg-[length:300%_300%] opacity-50 blur-[8px] animate-[ringSpin_7s_linear_infinite]" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="/hero1.png"
                alt="CRM Development"
                className="h-[500px] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-600/15 via-transparent to-blue-700/15 mix-blend-overlay" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent" />
            </div>

            <div className="pointer-events-none absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-cyan-500/25 blur-3xl" />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Why Choose Us
            </p>

            <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Your Trusted CRM Software{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Development Agency
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-300/90">
              NNC Digital Solutions is backed by{" "}
              <strong className="text-cyan-300">
                Nakshatra Namaha Creations Pvt. Ltd.
              </strong>{" "}
              — one of Bangalore's most respected digital studios with{" "}
              <span className="text-cyan-300">8+ years of experience</span> and{" "}
              <span className="text-cyan-300">565+ projects delivered</span> across
              India. To serve growing businesses in North America and the United
              Kingdom, we launched NNC Digital as our international arm — bringing the
              same proven technical expertise and client-first culture to the
              Canadian, US, and UK markets.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                ["1500+", "Web Projects"],
                ["500+", "Mobile Apps"],
                ["1800+", "IT Talents"],
                ["25+", "Industries"],
              ].map((item, i) => (
                <motion.div
                  key={item[1]}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_15px_40px_-12px_rgba(6,182,212,0.4)]"
                >

                  <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-8 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 group-hover:w-2/3 transition-all duration-500" />
                  <b className="text-2xl font-bold bg-gradient-to-br from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    {item[0]}
                  </b>
                  <p className="mt-1 text-sm text-slate-400">{item[1]}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


        <style>{`
    @keyframes ringSpin {
      0% { background-position: 0% 50%; }
      100% { background-position: 300% 50%; }
    }
  `}</style>
      </section>



      <section className="relative overflow-hidden bg-[#020617] py-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[180px]" />
          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[180px]" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020617] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020617] to-transparent" />
        </div>

        <div className="relative z-10  max-w-7xl px-6">
          <div className="text-left px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="text-sm font-medium text-cyan-200">
                Industries We Serve
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
              CRM Solutions Built For
              <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h2>

            <p className=" mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
              Purpose-built CRM solutions tailored for diverse industries, helping
              organizations streamline operations, automate workflows, and accelerate
              growth.
            </p>
          </div>
          <div className="relative mt-20 overflow-hidden">
            <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#020617] to-transparent" />
            <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#020617] to-transparent" />
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex w-max"
            >
              {[...row1, ...row1].map((industry, index) => (
                <IndustryCard key={`${industry.title}-${index}`} industry={industry} />
              ))}
            </motion.div>
          </div>
          <div className="relative mt-10 overflow-hidden">
            <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#020617] to-transparent" />
            <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#020617] to-transparent" />
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex w-max"
            >
              {[...row2, ...row2, ...row2].map((industry, index) => (
                <IndustryCard key={`${industry.title}-${index}`} industry={industry} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>




      <section className="relative overflow-hidden bg-[#020617] py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/12 blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/12 blur-[140px]" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              From the Blog
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
              Insights on Technology, Automation &{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Digital Growth
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.title} blog={blog} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <button className="group relative overflow-hidden rounded-full border border-white/15 bg-white/5 px-9 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/10">
              <span className="relative z-10 inline-flex items-center gap-2">
                View All Articles
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-6 py-18">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[180px]" />
          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[180px]" />
          <div
            className="  absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px transparent_1px)] [background-size:50px_50px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span
                className="  inline-flex  rounded-full  border border-green-500/30  bg-green-500/10 px-5  py-2 text-sm font-medium text-[#00A883] " >
                AI-Powered CRM
              </span>

              <h2
                className=" mt-6 text-4xl  font-bold  leading-tight text-white md:text-6xl  "   >
                Leverage{" "}
                <span
                  className="  text-[#00A883]  " >
                  AI-Powered CRM
                </span>{" "}
                Solutions
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
                Our AI-driven CRM solutions streamline operations, automate
                repetitive tasks, and deliver actionable insights that help
                businesses increase productivity, improve customer engagement,
                and accelerate growth.
              </p>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap gap-8">

                <div>
                  <h3 className="text-3xl font-bold text-[#00A883]">95%</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Automation Accuracy
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#00A883]">24/7</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    AI Assistance
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#00A883]">3X</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Faster Lead Conversion
                  </p>
                </div>

              </div>

            </div>

            <div className="space-y-6">
              <div
                className="
      group
      rounded-3xl
      border
      border-white/10
      bg-white/[0.04]
      p-7
      backdrop-blur-xl
      transition-all
      duration-500  hover:-translate-y-2  hover:border-green-500/40  hover:shadow-[0_0_40px_rgba(34,197,94,0.20)]  "  >

                <div className="flex items-start gap-4">

                  <div
                    className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-green-500/15
          text-2xl
          "
                  >
                    📊
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-white">
                      Data Analysis
                    </h3>

                    <p className="mt-3 leading-relaxed text-gray-400">
                      AI analyses customer interactions across emails,
                      social media, purchases, and engagement channels,
                      surfacing insights that help teams make smarter
                      business decisions.
                    </p>

                  </div>

                </div>

              </div>

              {/* Card 2 */}
              <div
                className="
      group
      rounded-3xl
      border
      border-white/10
      bg-white/[0.04]
      p-7
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-green-500/40
      hover:shadow-[0_0_40px_rgba(34,197,94,0.20)]
      "
              >

                <div className="flex items-start gap-4">

                  <div
                    className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-green-500/15
          text-2xl
          "
                  >
                    🎯
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-white">
                      Predictive Lead Scoring
                    </h3>

                    <p className="mt-3 leading-relaxed text-gray-400">
                      Automatically score and prioritize leads based on
                      engagement, behavior, and purchase intent, helping
                      sales teams focus on opportunities with the highest
                      conversion potential.
                    </p>

                  </div>

                </div>

              </div>

              {/* Card 3 */}
              <div
                className="
      group
      rounded-3xl
      border
      border-white/10
      bg-white/[0.04]
      p-7
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-green-500/40
      hover:shadow-[0_0_40px_rgba(34,197,94,0.20)]
      "
              >

                <div className="flex items-start gap-4">

                  <div
                    className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-green-500/15
          text-2xl
          "
                  >
                    🤖
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-white">
                      AI Chatbot & WhatsApp Automation
                    </h3>

                    <p className="mt-3 leading-relaxed text-gray-400">
                      Deploy intelligent chatbots and WhatsApp workflows
                      that engage prospects, answer questions, qualify
                      leads, and schedule appointments around the clock.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


        </div>

      </section>

      <TechStack />



      <section className="relative overflow-hidden   px-8  md:px-16 md:py-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/itmanagement.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#02111F]/90 via-[#081C34]/80 to-[#02111F]/90" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[180px]" />

        <div className="relative z-10 max-w-6xl mx-auto  px-6">

          <div className="rounded-[32px]  border border-white/10 bg-white/[0.04] backdrop-blur-xl px-8 py-4 md:px-16 md:py-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="flex justify-center">
              <div className="inline-flex items-center  px-5 py-0 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-sm font-medium backdrop-blur-md">
                CRM Development Specialists
              </div>
            </div>
            <h2 className="mt-6 text-center text-4xl md:text-5xl lg:text-5xl font-bold  text-white">
              Want CRM Solutions That
              <span className="block  bg-gradient-to-r from-cyan-400 via-teal-300 to-[#00A883] bg-clip-text text-transparent">
                Take Your Business
              </span>
              To The Next Level?
            </h2>

            <p className="mt-6 text-center text-lg md:text-lg text-slate-50 max-w-3xl mx-auto leading-relaxed">
              Build scalable CRM systems, automate workflows, improve customer
              experiences, and unlock growth with expert CRM development tailored
              to your business.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-8">
              <button
                className=" group px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500  to-[#00A883]  text-white font-semibold  shadow-[0_10px_40px_rgba(0,168,131,0.35)]  hover:scale-105 hover:shadow-[0_15px_50px_rgba(0,168,131,0.55)]  transition-all duration-300" >
                <span className="flex items-center gap-3">
                  Connect Now
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <button
                className=" px-10 py-4 rounded-full border border-white/20 bg-white/10  backdrop-blur-md  text-white  font-semibold  hover:bg-white/20  hover:border-white/40  transition-all duration-300" >
                Book Free Consultation
              </button>

            </div>

          </div>

        </div>

      </section>


      <Whatmatter />



    </>
  );
}


