"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, Plus, Clock, ShieldCheck } from "lucide-react";


const phones = [
  { flag: "🇨🇦", label: "Canada", number: "+91 99005 66466" },
  { flag: "🇺🇸", label: "USA", number: "+91 99005 66466" },
  { flag: "🇬🇧", label: "UK", number: "+91 99005 66466" },
  { flag: "🇮🇳", label: "India HQ", number: "+91 99005 66466" },
];

const emails = [
  { email: "hello@nncdigital.com", label: "General Inquiries" },
  { email: "info@nakshatranamahacreations.com", label: "Parent Company" },
];

const services = [
  "CRM Development", "ERP Development", "Web Development",
  "Mobile App Development", "Digital Transformation",
  "SEO & Digital Marketing", "Cloud Migration", "System Integration",
];

const timelines = ["Immediately", "1–3 months", "3–6 months", "6–12 months", "Just Exploring"];

const dialCodes = [
  { code: "CA", dial: "+1" },
  { code: "US", dial: "+1" },
  { code: "GB", dial: "+44" },
  { code: "IN", dial: "+91" },
];

const indiaOffices = [
  { flag: "🇮🇳", city: "Bangalore", tag: "India (HQ)", address: "Darshan Plaza, Banashankari, Bengaluru 560061", phone: "+91 99005 66466", email: "info@nakshatranamahacreations.com", image: "/bangloreofc.jpg" },
  { flag: "🇮🇳", city: "Mysore", tag: "India", address: "Suswani Towers, JP Nagar, Mysore 570008", phone: "+91 99005 66466", image: "/mysore.jpeg" },
  { flag: "🇮🇳", city: "Mumbai", tag: "India", address: "Lodha Signet, 302, Kolshet Rd, Thane West 400607", phone: "+91 99005 66466", image: "/mumbaiofc.webp" },
  { flag: "🇮🇳", city: "Hyderabad", tag: "India", address: "64/2 RT, Prakashnagar, Begumpet, Hyderabad 500016", phone: "+91 99005 66466", image: "/hydrabadofc.webp" },
];

const intlOffices = [
  { flag: "🇨🇦", city: "Toronto, Ontario", tag: "Canada", address: "Toronto, Ontario", phone: "+91 99005 66466", email: "canada@nncdigital.com", image: "/canadaofc.webp" },
  { flag: "🇺🇸", city: "New York, NY", tag: "USA", address: "New York, NY", phone: "+91 99005 66466", email: "usa@nncdigital.com", image: "/usa.webp" },
  { flag: "🇬🇧", city: "London, UK", tag: "United Kingdom", address: "London, United Kingdom", phone: "+91 99005 66466", email: "uk@nncdigital.com", image: "/ukofc.webp" },
];

const faqs = [
  { q: "Do you work with businesses outside of India?", a: "Yes. NNC Digital Solutions is specifically built for Canada, the United States, and the United Kingdom. Our client-facing teams operate in North American and UK time zones." },
  { q: "What happens after I submit the contact form?", a: "A dedicated project consultant reviews your submission and responds within 24 business hours with thoughts, relevant case studies, and a proposed next step." },
  { q: "Is the initial consultation free?", a: "Absolutely. Our first conversation is always free. We provide a fixed-price proposal at the end of the discovery phase with no commitment to proceed." },
  { q: "Who is behind NNC Digital Solutions?", a: "NNC Digital is the international arm of Nakshatra Namaha Creations Pvt. Ltd. — Bangalore's trusted digital studio with 8+ years and 565+ projects. Visit www.nakshatranamahacreations.com to learn more." },
];


// const mapNodes = [
//   { name: "Toronto", x: 175, y: 130 },
//   { name: "New York", x: 200, y: 165 },
//   { name: "London", x: 360, y: 120 },
//   { name: "Bangalore", x: 560, y: 235, hub: true },
//   { name: "Hyderabad", x: 545, y: 195 },
//   { name: "Mumbai", x: 510, y: 205 },
//   { name: "Mysore", x: 535, y: 255 },
// ];

// const mapArcs = [
//   "M560,235 C400,70 280,80 175,130",
//   "M560,235 C410,120 300,130 200,165",
//   "M560,235 C510,90 440,90 360,120",
// ];

// const indiaLinks = [
//   "M560,235 L545,195",
//   "M560,235 L510,205",
//   "M560,235 L535,255",
// ];

const mapNodes = [
  { name: "Toronto", x: 175, y: 130 },
  { name: "New York", x: 200, y: 165 },
  { name: "London", x: 360, y: 120 },
  { name: "Mumbai", x: 530, y: 210 },
  { name: "Hyderabad", x: 560, y: 215 },
  { name: "Bangalore", x: 548, y: 245, hub: true },
  { name: "Mysore", x: 525, y: 258 },
];

const mapArcs = [
  "M548,245 C400,80 280,90 175,130",  
  "M548,245 C410,130 300,140 200,165", 
  "M548,245 C500,100 430,100 360,120", 
];


const indiaLinks = [
  "M548,245 L530,210", 
  "M548,245 L560,215", 
  "M548,245 L525,258", 
];

const continentDots = [
  [120, 90], [135, 95], [150, 92], [165, 98], [110, 105], [125, 108], [140, 110], [155, 112], [170, 108], [185, 115],
  [100, 120], [118, 122], [135, 125], [152, 124], [168, 128], [185, 130], [200, 128], [130, 140], [148, 142], [165, 145], [182, 148], [160, 160], [178, 162],
 
  [220, 210], [235, 215], [228, 230], [240, 245], [232, 260], [245, 272], [238, 288],

  [340, 100], [355, 95], [370, 102], [385, 98], [348, 112], [363, 115], [378, 118], [393, 112], [358, 128], [373, 130],

  [355, 160], [370, 158], [385, 165], [400, 162], [362, 180], [378, 182], [393, 185], [370, 200], [385, 205], [378, 222],

  [430, 100], [448, 95], [465, 102], [482, 98], [500, 105], [518, 100], [440, 118], [458, 120], [476, 118], [494, 124], [512, 122], [530, 128],
  [450, 140], [470, 142], [490, 140], [510, 145], [530, 148], [470, 162], [490, 165], [510, 162],
  [560, 260], [578, 258], [595, 265], [612, 262], [572, 278], [590, 280],
];

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

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";


function NetworkMap() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <svg viewBox="0 0 660 320" className="relative w-full" fill="none">
        <defs>
          <linearGradient id="cArc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <radialGradient id="pulseDot">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>

      
        <g opacity="0.25">
          {continentDots.map(([cx, cy], i) => (
            <circle key={`c-${i}`} cx={cx} cy={cy} r="1.6" fill="#7dd3fc" />
          ))}
        </g>


        {indiaLinks.map((d, i) => (
          <motion.path
            key={`il-${i}`}
            d={d}
            stroke="#34d399"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 + i * 0.15 }}
          />
        ))}

        {mapArcs.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="url(#cArc)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 + i * 0.3, ease: "easeInOut" }}
          />
        ))}

        {mapArcs.map((d, i) => (
          <circle key={`dot-${i}`} r="4" fill="url(#pulseDot)">
            <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 0.8}s`} path={d} />
          </circle>
        ))}

        {mapNodes.map((n, i) => (
          <motion.g
            key={n.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <circle cx={n.x} cy={n.y} r={n.hub ? 10 : 6} fill="none" stroke={n.hub ? "#22d3ee" : "#34d399"} strokeWidth="1.5">
              <animate attributeName="r" values={n.hub ? "10;22;10" : "6;13;6"} dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx={n.x} cy={n.y} r={n.hub ? 6 : 3.5} fill={n.hub ? "#22d3ee" : "#34d399"} />
            <text
              x={n.x}
              y={n.y - 12}
              textAnchor="middle"
              fill="white"
              fontSize={n.hub ? "13" : "10"}
              fontWeight="600"
            >
              {n.name}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}


function OfficeCard({ o }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.4)]"
    >
      <div className="relative h-36 overflow-hidden">
        <img
          src={o.image}
          alt={o.city}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1228] via-[#0a1228]/30 to-transparent" />
        <span className="absolute left-3 top-3 text-2xl drop-shadow-lg">{o.flag}</span>
        <div className="absolute bottom-3 left-4">
          <h4 className="font-bold text-white">{o.city}</h4>
          <p className="text-xs text-cyan-300">{o.tag}</p>
        </div>
      </div>

      <div className="space-y-2 p-5 text-sm text-slate-400">
        <p className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
          {o.address}
        </p>
        <p className="flex items-center gap-2">
          <Phone className="h-4 w-4 shrink-0 text-cyan-400" />
          {o.phone}
        </p>
        {o.email && (
          <p className="flex items-center gap-2 text-cyan-300">
            <Mail className="h-4 w-4 shrink-0" />
            {o.email}
          </p>
        )}
      </div>
    </motion.div>
  );
}


function FaqItem({ item, isOpen, onClick }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition hover:border-cyan-400/30">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold text-white">{item.q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
            }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
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

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-[#1A2343] text-white">
      <section
        ref={heroRef}
        className="relative flex min-h-[55vh] items-center overflow-hidden px-6 pt-32 pb-16"
      >
        <motion.div style={{ y: orbY }} className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute top-10 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/15 blur-[150px]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/15 blur-[130px]" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative  max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>Let's Connect</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight md:text-6xl"
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Exceptional Together
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className=" mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/90"
          >
            Whether you have a fully defined project or just a problem you're trying to solve — we'd love to talk. We respond within 24 business hours with honest, practical advice.
          </motion.p>
        </motion.div>
      </section>

      <section className="relative px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Get in Touch</SectionLabel>
              <h2 className="mt-5 text-2xl font-bold md:text-3xl">
                We're Just a{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Message Away
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Phone className="h-4 w-4 text-cyan-400" /> Call Us
              </div>
              <div className="mt-4 space-y-3">
                {phones.map((p) => (
                  <div key={p.label} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-300">
                      <span className="text-lg">{p.flag}</span> {p.label}
                    </span>
                    <span className="text-slate-400">{p.number}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Mail className="h-4 w-4 text-cyan-400" /> Email Us
              </div>
              <div className="mt-4 space-y-3">
                {emails.map((e) => (
                  <div key={e.email}>
                    <p className="font-semibold text-cyan-300">{e.email}</p>
                    <p className="text-xs text-slate-500">{e.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                <Clock className="h-3.5 w-3.5 text-cyan-400" /> 24-hour response
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" /> 100% secure
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-sm" />
              <div className="relative rounded-3xl border border-white/10 bg-[#0a1228]/90 p-8 backdrop-blur-xl md:p-10">
                <span className="absolute left-10 right-10 top-0 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600" />

                <h3 className="text-2xl font-bold">
                  Share Your{" "}
                  <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Project Idea
                  </span>
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="First Name *" className={inputClass} />
                  <input type="text" placeholder="Last Name" className={inputClass} />
                </div>

                <div className="mt-4 grid grid-cols-[110px_1fr] gap-3">
                  <select className={inputClass}>
                    {dialCodes.map((d) => (
                      <option key={d.code} className="bg-[#0a1228]">
                        {d.code} {d.dial}
                      </option>
                    ))}
                  </select>
                  <input type="tel" placeholder="Phone Number *" className={inputClass} />
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <input type="email" placeholder="Business Email *" className={inputClass} />
                  <input type="text" placeholder="Company Name" className={inputClass} />
                </div>

                <select className={`${inputClass} mt-4`} defaultValue="">
                  <option value="" disabled className="bg-[#0a1228]">Service of Interest</option>
                  {services.map((s) => (
                    <option key={s} className="bg-[#0a1228]">{s}</option>
                  ))}
                </select>

                <textarea
                  rows="3"
                  placeholder="Project Description *"
                  className={`${inputClass} mt-4 resize-none`}
                />

                <select className={`${inputClass} mt-4`} defaultValue="">
                  <option value="" disabled className="bg-[#0a1228]">Preferred Timeline</option>
                  {timelines.map((t) => (
                    <option key={t} className="bg-[#0a1228]">{t}</option>
                  ))}
                </select>

                <button className="group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] py-4 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.5)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0]">
                  <Send className="h-4 w-4" />
                  Submit — Response within 24 hours
                </button>

                <p className="mt-4 text-center text-xs text-slate-500">
                  No commitment required · 100% secure
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-14">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-blue-600/8 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Our Reach</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              Global{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Presence
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-400">
              Engineered in Bangalore, delivered worldwide — across 7 offices in 4 countries.
            </p>
          </div>

          <div className="mt-12">
            <NetworkMap />
          </div>

          <div className="mt-14 flex items-center gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">India</h3>
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">4 Locations</span>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {indiaOffices.map((o) => <OfficeCard key={o.city} o={o} />)}
          </motion.div>

          <div className="mt-14 flex items-center gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">International Offices</h3>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">3 Countries</span>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-5 grid gap-5 sm:grid-cols-3">
            {intlOffices.map((o) => <OfficeCard key={o.city} o={o} />)}
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-14">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-3xl">
          <div className="text-center">
            <SectionLabel>Before You Reach Out</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              Common{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <FaqItem
                key={i}
                item={f}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


