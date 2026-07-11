"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Rocket, Users, Globe2, MapPin, Code2, Smartphone, Megaphone, Palette, Film, Video, Briefcase, Search, Target, ShieldCheck, Eye, HeartHandshake, Clock, Star, Mail, Link2, SearchX, Lightbulb, Check } from "lucide-react";


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
    <div>
      <section
        ref={heroRef}
        className="relative flex min-h-[70vh] bg-[#1A2343] overflow-hidden px-6 pt-32 pb-20"
      >
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
            className="mt-4 text-4xl font-bold text-white leading-tight md:text-5xl"
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

      <section ref={storyRef} className="relative bg-gray-100 px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
              From Bangalore to Canada {" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                The NNC Digital Story
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-slate-900 leading-relaxed">
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


      <section className="relative overflow-hidden bg-[#08111F] px-6 py-14">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/12 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>The Foundation</SectionLabel>
            <h2 className="mt-6 text-3xl text-white font-bold md:text-4xl">Our Parent Company</h2>
            <p className="mt-3 text-lg text-slate-400">Nakshatra Namaha Creations Pvt. Ltd.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className=" group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-[#14C8B8]/50 hover:shadow-[0_20px_70px_rgba(20,200,184,0.18)]">
              <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-[#14C8B8]/10 blur-3xl group-hover:bg-[#14C8B8]/20 transition-all duration-500" />

              <div className="relative flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  8+
                  <span className="ml-2 text-[#14C8B8]">
                    Years of Digital Excellence
                  </span>
                </h3>
                <span
                  className="  rounded-full  border  border-[#14C8B8]/30  bg-[#14C8B8]/10  px-4  py-2  text-xs  font-semibold  text-[#7FF8E8]  ">
                  Since 2016
                </span>
              </div>

              <p className="relative mt-5 text-[15px] leading-7 text-slate-300">
                Headquartered in{" "}
                <span className="font-semibold text-white">
                  Bengaluru, Karnataka
                </span>{" "}
                — India's Silicon Valley, with strategic offices across Mysore,
                Mumbai, and Hyderabad.
              </p>

              <div className="relative mt-7 flex flex-wrap gap-3">
                {[
                  "Bengaluru HQ",
                  "Mysore",
                  "Mumbai",
                  "Hyderabad",
                ].map((city) => (
                  <span
                    key={city}
                    className="  inline-flex  items-center  gap-2  rounded-full  border  border-[#14C8B8]/30  bg-[#14C8B8]/10  px-4  py-2  text-xs  font-medium  text-[#7FF8E8]  transition-all  duration-300  hover:bg-[#14C8B8] hover:text-slate-900  hover:scale-105  " >
                    <MapPin className="h-3.5 w-3.5" />
                    {city}
                  </span>
                ))}
              </div>

              <a
                href="https://www.nakshatranamahacreations.com"
                target="_blank"
                rel="noopener noreferrer"
                className="  relative  mt-7  inline-flex  items-center  gap-2  text-sm  font-semibold text-[#14C8B8] transition-all duration-300  hover:text-white" >
                Visit Website →
              </a>
            </motion.div>


            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className=" group relative overflow-hidden  rounded-3xl  border  border-white/10  bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]  transition-all  duration-500  hover:border-[#14C8B8]/50  hover:shadow-[0_20px_70px_rgba(20,200,184,0.18)] " >
              <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-[#14C8B8]/10 blur-3xl group-hover:bg-[#14C8B8]/20 transition-all duration-500" />

              <h3 className="relative text-2xl font-bold text-white">
                565+
                <span className="ml-2 text-[#14C8B8]">
                  Projects Delivered
                </span>
              </h3>

              <p className="relative mt-5 text-[15px] leading-7 text-slate-300">
                From corporate websites and mobile apps to 2D animation,
                B2B marketing, branding, SEO, and video production —
                delivering every digital solution a modern business needs.
              </p>

              <div className="relative mt-7 flex flex-wrap gap-3">
                {[
                  "Web",
                  "Mobile",
                  "Marketing",
                  "Animation",
                  "Video",
                  "B2B",
                  "SEO",
                  "Design",
                ].map((item) => (

                  <span
                    key={item}
                    className="  rounded-full  border  border-[#14C8B8]/30  bg-[#14C8B8]/10  px-4  py-2  text-xs  font-medium  tracking-wide  text-[#7FF8E8]  transition-all  duration-300  hover:bg-[#14C8B8]  hover:text-slate-900  hover:scale-105 " >
                    {item}
                  </span>

                ))}

              </div>

            </motion.div>
          </div>


          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-white md:text-3xl">Services That Power NNC Digital</h3>
            <p className="mt-3 text-slate-400">Full-spectrum capabilities from India's most trusted digital studio</p>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4"
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.name}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.3 }}
                  className="  group  relative  overflow-hidden  rounded-3xl  border  border-white/30  bg-white/95  p-7  text-center shadow-xl backdrop-blur-md  transition-all duration-300  hover:border-cyan-400  hover:shadow-[0_20px_45px_rgba(6,182,212,0.25)] " >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-100 opacity-70 transition-all duration-300 group-hover:bg-cyan-200" />
                  <div className=" relative  mx-auto  flex  h-16 w-16 items-center  justify-center rounded-2xl  bg-gradient-to-br from-cyan-500  to-blue-600 shadow-lg  transition-all duration-300 group-hover:scale-110   group-hover:rotate-6 "  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="relative mt-5 text-base font-semibold text-slate-800">
                    {s.name}
                  </h4>
                  <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-16" />
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

      <section className="relative overflow-hidden bg-gradient-to-br from-[#08111F] via-[#111C38] to-[#08111F] px-6 py-14">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-400/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionLabel>
              Our Purpose
            </SectionLabel>
            <h2 className="  mt-6  text-4xl  font-bold leading-tight  text-white  md:text-5xl ">
              Why We Launched
              <span className="  block  bg-gradient-to-r  from-[#14C8B8] via-cyan-300   to-blue-400  bg-clip-text  text-transparent ">
                NNC Digital
              </span>
              for North American & UK Market
            </h2>
            <p className="   mx-auto mt-6   max-w-3xl  text-lg leading-8 text-slate-300">
              Delivering world-class digital solutions by combining global
              standards with efficient technology execution.
            </p>
          </motion.div>
          <div className=" mt-14 grid  gap-8 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02
              }}
              className="  group  relative  overflow-hidden  rounded-[32px]   border  border-white/10   bg-white/[0.05]  p-8  backdrop-blur-2xl  transition-all  duration-500   hover:border-cyan-400/40  hover:shadow-[0_30px_80px_rgba(20,200,184,.20)]">
              <div className=" absolute left-0 top-0  h-1  w-0  bg-gradient-to-r  from-cyan-400  to-blue-500  transition-all  duration-700  group-hover:w-full  " />
              <div className="  absolute  -right-20   -top-20 h-40 w-40 rounded-full    bg-cyan-400/10   blur-3xl transition duration-500 group-hover:scale-125" />
              <div className="relative">
                <div className=" flex  h-16 w-16 items-center justify-center rounded-2xl border  border-cyan-400/20 bg-cyan-400/10">
                  <SearchX className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className=" mt-6 text-2xl font-bold  text-white">
                  The Gap We Saw
                </h3>
                <p className=" mt-5 text-sm leading-7 text-slate-300">
                  Businesses in Canada, the USA, and the UK face a common challenge:
                  premium local agency pricing while searching for reliable offshore
                  partners who understand quality, culture, compliance, and business goals.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02
              }}

              className=" group  relative  overflow-hidden    rounded-[32px] border  border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-cyan-400/10  to-transparent  p-8 backdrop-blur-2xl  transition-all  duration-500   hover:border-emerald-300/50 hover:shadow-[0_30px_80px_rgba(52,211,153,.20)] ">
              <div className=" absolute left-0  top-0  h-1  w-0 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-700  group-hover:w-full " />
              <div className=" flex h-16  w-16  items-center  justify-center  rounded-2xl  border border-emerald-400/20  bg-emerald-400/10 ">
                <Lightbulb className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className=" mt-6 text-2xl font-bold text-white ">
                The Solution We Built
              </h3>
              <ul className=" mt-6 space-y-4">
                {solutionPoints.map((p) => (
                  <li
                    key={p}
                    className="  flex items-start  gap-3  text-sm leading-6  text-slate-200">
                    <span className=" mt-1 flex h-5  w-5  items-center justify-center rounded-full bg-emerald-400/20">
                      <Check className="h-3 w-3 text-emerald-300" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>


      <section
        className=" relative overflow-hidden bg-gradient-to-br from-[#060B18] via-[#111C38]  to-[#08111F] px-6  py-24 ">
        <div className="  absolute  -left-40  top-20  h-[420px]  w-[420px] rounded-full bg-[#14C8B8]/15 blur-[150px] " />
        <div className=" absolute -right-40  bottom-0  h-[400px]  w-[400px] rounded-full  bg-blue-500/10 blur-[150px] " />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <SectionLabel>
              Our Values
            </SectionLabel>
            <h2 className="   mt-6 text-4xl font-bold  text-white  md:text-5xl " >
              What We{" "}
              <span className=" bg-gradient-to-r from-[#14C8B8]  via-cyan-300  to-blue-400 bg-clip-text  text-transparent " >
                Stand For
              </span>
            </h2>
            <p className="  mx-auto mt-5 max-w-2xl  text-slate-300 " >
              The principles that guide our creativity, technology,
              and partnerships.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="  mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 " >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -15,
                    scale: 1.04
                  }}
                  transition={{
                    duration: .35,
                    ease: "easeOut"
                  }}
                  className="  group relative  overflow-hidden  rounded-[32px]  border  border-white/10 bg-gradient-to-br  from-[#111827]  via-[#16243D]  to-[#0F172A] p-8 shadow-[0_20px_60px_rgba(0,0,0,.35)]  transition-all duration-500 hover:border-[#14C8B8]/60 hover:shadow-[0_30px_90px_rgba(20,200,184,.25)] " >
                  <div className=" absolute  -right-20 -top-20   h-48  w-48  rounded-full  bg-[#14C8B8]/20    blur-3xl opacity-0  transition-all  duration-500 group-hover:opacity-100  group-hover:scale-125  " />
                  <div className=" absolute  left-0  top-0   h-[2px]  w-0  bg-gradient-to-r  from-transparent  via-[#14C8B8] to-transparent transition-all  duration-700 group-hover:w-full " />
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.15
                    }}
                    transition={{
                      duration: .3
                    }}
                    className=" relative  flex  h-16 w-16 items-center  justify-center  rounded-2xl  border  border-[#14C8B8]/30  bg-gradient-to-br from-[#14C8B8]/20  via-cyan-400/10   to-blue-500/20  shadow-inner  shadow-cyan-400/20 " >
                    <Icon className="  h-8  w-8  text-[#7FF8E8] " />
                  </motion.div>
                  <h3 className="  mt-7  text-xl  font-bold  text-white  transition-all  duration-300  group-hover:text-[#14C8B8] " >
                    {v.title}
                  </h3>
                  <p
                    className=" mt-3 text-sm leading-7  text-slate-300 " >
                    {v.desc}
                  </p>
                  <div className="  mt-6  h-1 w-10 rounded-full  bg-gradient-to-r  from-[#14C8B8]  to-blue-400 transition-all  duration-500  group-hover:w-24 " />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* <section className="relative px-6 py-6">
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
      </section> */}

      <section
        className="
    relative
    overflow-hidden
    bg-gradient-to-br
    from-[#060B18]
    via-[#111C38]
    to-[#08111F]
    px-6
    py-24
  "
      >

        {/* Background Glow */}

        <div
          className="
      absolute
      left-0
      top-20
      h-[420px]
      w-[420px]
      rounded-full
      bg-[#14C8B8]/10
      blur-[150px]
    "
        />

        <div
          className="
      absolute
      right-0
      bottom-0
      h-[400px]
      w-[400px]
      rounded-full
      bg-blue-500/10
      blur-[150px]
    "
        />


        <div className="relative mx-auto max-w-7xl">


          {/* Heading */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >

            <SectionLabel>
              Global Offices
            </SectionLabel>


            <h2
              className="
          mt-6
          text-4xl
          font-bold
          text-white
          md:text-5xl
        "
            >

              Where We{" "}

              <span
                className="
          bg-gradient-to-r
          from-[#14C8B8]
          via-cyan-300
          to-blue-400
          bg-clip-text
          text-transparent
          "
              >
                Operate
              </span>

            </h2>


            <p
              className="
        mx-auto
        mt-5
        max-w-2xl
        text-slate-300
        "
            >
              Connecting businesses globally with strategic digital
              solutions across multiple regions.
            </p>


          </motion.div>





          {/* International */}

          <div className="mt-16">


            <h3
              className="
          mb-6
          flex
          items-center
          gap-3
          text-sm
          font-semibold
          uppercase
          tracking-[0.25em]
          text-cyan-300
        "
            >

              <span className="
          h-px
          w-10
          bg-cyan-400
        "/>

              International Offices

            </h3>



            <div className="
        grid
        gap-7
        sm:grid-cols-3
      ">


              {intlOffices.map((o) => (

                <motion.div

                  key={o.city}

                  variants={fadeUp}

                  initial="hidden"

                  whileInView="show"

                  viewport={{ once: true }}

                  whileHover={{
                    y: -10,
                    scale: 1.03
                  }}

                  transition={{
                    duration: .35
                  }}


                  className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/10

              bg-gradient-to-br
              from-[#111827]
              via-[#16243D]
              to-[#0F172A]

              p-7

              shadow-[0_20px_60px_rgba(0,0,0,.3)]

              transition-all

              hover:border-[#14C8B8]/50

              hover:shadow-[0_30px_80px_rgba(20,200,184,.18)]
            "
                >


                  {/* Glow */}

                  <div
                    className="
                absolute
                -right-20
                -top-20
                h-40
                w-40
                rounded-full
                bg-cyan-400/20
                blur-3xl
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
              "
                  />



                  {/* Flag */}

                  <div
                    className="
                relative
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-white/10
                text-4xl
                shadow-inner
                transition
                duration-500
                group-hover:scale-110
              "
                  >
                    {o.flag}
                  </div>



                  <h4
                    className="
              mt-6
              text-xl
              font-bold
              text-white
              "
                  >
                    {o.city}
                  </h4>



                  <p
                    className="
              mt-2
              text-sm
              text-slate-400
              "
                  >
                    {o.phone}
                  </p>



                  <div
                    className="
              mt-5
              h-1
              w-10
              rounded-full
              bg-cyan-400/50
              transition-all
              duration-500
              group-hover:w-20
              "
                  />


                </motion.div>

              ))}


            </div>

          </div>






          {/* India Offices */}

          <div className="mt-16">


            <h3 className=" mb-6 flex items-center  gap-3  text-sm font-semibold  uppercase  tracking-[0.25em] text-emerald-300">
              <span className=" h-px  w-10 bg-emerald-400" />
              India Offices — Nakshatra Namaha Creations
            </h3>
            <div className=" grid  gap-7  sm:grid-cols-2 lg:grid-cols-4">
              {indiaOffices.map((o) => (
                <motion.div
                  key={o.city}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10
                  }}
                  className=" group  rounded-[28px] border  border-white/10  bg-gradient-to-br  from-[#111827] to-[#16243D]   p-6 transition-all duration-500 hover:border-emerald-400/50  hover:shadow-[0_25px_70px_rgba(52,211,153,.18)] ">
                  <div className="  flex h-14 w-14 items-center  justify-center  rounded-xl  bg-emerald-400/10 text-3xl " >
                    {o.flag}
                  </div>
                  <h4 className="  mt-5 font-bold  text-white " >
                    {o.city}
                  </h4>
                  <p className=" mt-2 text-sm text-slate-400">
                    {o.phone}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className=" mt-14 flex justify-center ">
            <div className="  flex items-center  gap-3  rounded-full  border border-cyan-400/20 bg-cyan-400/10  px-6 py-3  text-sm text-cyan-200 ">
              <Mail className="h-5 w-5" />
              info@nakshatranamahacreations.com
            </div>
          </motion.div>
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