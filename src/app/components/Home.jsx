"use client"
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { data, industries, successStories } from "../data/data";
import "swiper/css";
import Offers from "./Offers";
import Choose from "./Choose";
import Whatmatter from "./Whatmatter";
import TechStack from "./TechStack";
import Faq from "./Faq";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { HeartPulse, Home, ShoppingCart, Factory, GraduationCap, Hotel, Truck, Landmark, Briefcase } from "lucide-react";

const heroImages = [
  "/hero1.png",
  "/banner.avif",
  "/original.jpg",
];

const industriess = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Real Estate", icon: Home },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Manufacturing", icon: Factory },
  { name: "Education", icon: GraduationCap },
  { name: "Hospitality", icon: Hotel },
  { name: "Logistics", icon: Truck },
  { name: "Finance", icon: Landmark },
  { name: "Professional Services", icon: Briefcase },
]


function IndustryCard({ industry }) {
  return (
    <div className="group mx-3  rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300  hover:shadow-xl">
      <div className="flex h-6 w-6 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 text-3xl">
        {industry.icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-slate-900">
        {industry.title}
      </h3>

      <div className="mt-4 h-[2px] w-12 bg-green-500 transition-all duration-300 group-hover:w-20" />
    </div>
  );
}


export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const row1 = industries.slice(0, 5);
  const row2 = industries.slice(5);
  const scrollRef = useRef(null);



  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const width = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#020617]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/60" />
        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[160px] animate-pulse" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[160px]" />
        <div className="relative z-10 flex min-h-screen items-center px-6 py-20 lg:px-16">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">
            <div className="text-white">
              <div
                className="  inline-flex mt-4 items-center gap-2  rounded-full  border border-cyan-400/30 bg-white/10 px-5 py-2  text-sm text-cyan-300 backdrop-blur-xl  " >
                10+ Years Enterprise Software Expertise
              </div>
              <h1 className=" mt-7 text-5xl font-bold  leading-[1.05]  tracking-tight sm:text-5xl lg:text-5xl "  >
                Build Once.
                <span className=" block bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent ">
                  Scale Everywhere.
                </span>


                <span className=" block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent  ">
                  Automate Everything.
                </span>

              </h1>



              <p className=" mt-7 max-w-xl text-md leading-relaxed text-slate-300 ">
                We design and develop custom CRM, ERP, Web, and Mobile applications
                that automate operations and accelerate business growth across
                Canada, USA, and UK.
              </p>
              <div className="mt-5 flex flex-wrap gap-5">
                <a
                  href="tel:+919900566466"
                  className="  rounded-xl  bg-gradient-to-r  from-emerald-500  via-cyan-500  to-blue-600  px-9  py-4  font-semibold text-white  shadow-[0_20px_60px_rgba(6,182,212,.45)] transition duration-500 hover:-translate-y-1  " >
                  Book Free Strategy
                </a>
                <Link
                  href="/about"
                  className=" rounded-xl border border-white/20 bg-white/10 px-9 py-4 font-semibold text-white  backdrop-blur-xl transition hover:bg-white/20  " >
                  Explore Solutions
                </Link>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">

                {
                  [
                    "Google Partner",
                    "ISO Certified",
                    "GDPR Compliant",
                    "PIPEDA Compliant",
                    "Clutch Top Agency"
                  ].map((item) => (

                    <span
                      key={item}
                      className=" rounded-full border border-white/20 bg-white/10 px-5  py-2  text-sm text-slate-200  backdrop-blur-xl " >
                      {item}
                    </span>
                  ))
                }
              </div>
              <div
                className="  mt-12  grid max-w-xl grid-cols-3 gap-6 " >
                {
                  [
                    {
                      n: "250+",
                      l: "Projects"
                    },
                    {
                      n: "98%",
                      l: "Retention"
                    },
                    {
                      n: "10+",
                      l: "Years"
                    }

                  ].map((item, index) => (
                    <div
                      key={item.l}
                      className={`
            ${index !== 0 ? "border-l border-white/20 pl-6" : ""}
            `}
                    >
                      <h3
                        className=" text-4xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent " >
                        {item.n}
                      </h3>
                      <p
                        className=" mt-1 text-sm text-slate-400 "  >
                        {item.l}
                      </p>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
        </div>
      </section>



      <Offers />
      <Choose />
      <section className="relative overflow-hidden bg-gray-100 text-black px-6 py-8">

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm uppercase tracking-[0.3em] text-cyan-900 mb-5">
              <span className="h-1.5 w-1.5 rounded-full " />
              CRM Capabilities
            </span>
            <h2 className="text-3xl font-bold leading-tight  md:text-5xl">
              A Good CRM Always Lets You{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Do More
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl ">
              Explore the key capabilities that make our CRM solutions stand out for
              businesses in Canada, USA & UK.
            </p>
          </div>
          <div className="mt-16 relative">
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md text-black hover:bg-white/10"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md text-black hover:bg-white/10"
            >
              <FaChevronRight />
            </button>
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto scroll-smooth px-2 py-4 scrollbar-hide"
            >
              {data.map((item, i) => {
                return (
                  <div
                    key={item.title}
                    className="min-w-[300px] max-w-[320px] flex-shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:scale-[1.02] overflow-hidden"
                  >
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={`/${item.image}`}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">

                      <h3 className="mt-4 text-lg font-semibold ">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="mt-4 h-1 w-full rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-1/2 bg-gradient-to-r from-cyan-400 to-blue-500" />
                      </div>
                    </div>
                  </div>
                );
              })}
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

      <section className="relative overflow-hidden bg-[#1A2343] py-8">
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

      <section className="relative overflow-hidden  bg-[#1A2343] ">
        <div
          className="relative min-h-screen flex w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/AI-Powered.webp')" }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-black/60 blur-[180px]" />
          </div>
          <div className="relative z-10 mt-5  px-10 text-left">
            <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-medium text-[#00A883]">
              AI-Powered CRM
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Leverage <span className="text-[#00A883]">AI-Powered <br /> CRM</span> Solutions
            </h2>
            <p className="mt-6 text-left max-w-2xl text-lg leading-relaxed text-gray-50">
              Our AI-driven CRM solutions streamline operations, automate repetitive tasks,
              and deliver actionable insights that help businesses increase productivity,
              improve customer engagement, and accelerate growth.
            </p>
            <div className="mt-10 flex flex-wrap justify-left gap-8">
              <div>
                <h3 className="text-3xl font-bold text-[#00A883]">95%</h3>
                <p className="mt-1 text-sm text-gray-50">Automation Accuracy</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#00A883]">24/7</h3>
                <p className="mt-1 text-sm text-gray-50">AI Assistance</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#00A883]">3X</h3>
                <p className="mt-1 text-sm text-gray-50">Faster Lead Conversion</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 grid gap-6 md:grid-cols-3 max-w-6xl p-6 mx-auto">
          <div className="group rounded-3xl border border-white/10 bg-gray-200 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.20)]">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl  text-2xl">
                📊
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black">Data Analysis</h3>
                <p className="mt-3 leading-relaxed text-gray-400">
                  AI analyses customer interactions across emails, social media, purchases,
                  and engagement channels, surfacing insights that help teams make smarter business decisions.
                </p>
              </div>
            </div>
          </div>
          <div className="group rounded-3xl border border-white/10 bg-gray-200 p-7  backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.20)]">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl  text-2xl">
                🎯
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black">
                  Predictive Lead Scoring
                </h3>
                <p className="mt-3 leading-relaxed text-gray-400">
                  Automatically score and prioritize leads based on engagement, behavior,
                  and purchase intent, helping sales teams focus on high-conversion opportunities.
                </p>
              </div>
            </div>
          </div>
          <div className="group rounded-3xl border border-white/10 bg-gray-200 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.20)]">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl  text-2xl">
                🤖
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black">
                  AI Chatbot & WhatsApp Automation
                </h3>
                <p className="mt-3 leading-relaxed text-gray-400">
                  Deploy intelligent chatbots and WhatsApp workflows that engage prospects,
                  answer questions, qualify leads, and schedule appointments 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TechStack />
      <section className="relative overflow-hidden px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-12">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: "url('/itmanagement.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#02111F]/80 via-[#081C34]/70 to-[#02111F]/85" />
        <div className="pointer-events-none absolute -top-20 left-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-[#00A883]/20 blur-[160px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-14">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-md sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                CRM Development Specialists
              </span>
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
              Want CRM Solutions That
              <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-teal-300 to-[#00A883] bg-clip-text text-transparent">
                Take Your Business
              </span>
              To The Next Level?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-slate-200 sm:mt-6 sm:text-lg">
              Build scalable CRM systems, automate workflows, improve customer
              experiences, and unlock growth with expert CRM development tailored
              to your business.
            </p>
            <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="tel:+919900566466"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-[#00A883] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(0,168,131,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(0,168,131,0.55)] sm:w-auto sm:text-base"
              >
                Connect Now
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+919900566466"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/20 sm:w-auto sm:text-base"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      <Whatmatter />
      <section
        className="relative overflow-hidden py-14 px-6 lg:px-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/success.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020627]/80 to-[#020627]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-5 py-2 rounded-full bg-black/40 border border-cyan-400/30 text-cyan-300 uppercase tracking-[4px] text-sm">
              Proven Results
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Success <span className="bg-gradient-to-r  from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="mt-6 text-lg text-slate-300 leading-8">
              Real results for real businesses across Canada, USA & UK.
            </p>
          </div>
          <div className="mt-20 overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 w-max px-2 snap-x snap-mandatory">
              {successStories.map((item, index) => (
                <div
                  key={index}
                  className="group relative w-[380px] shrink-0 snap-start rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500  hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_25px_80px_rgba(6,182,212,.25)]"
                >
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-transparent" />
                  <div className="relative">
                    <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs tracking-[3px] uppercase text-cyan-300">
                      {item.category}
                    </span>
                    <h3 className="mt-8 text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-slate-300 leading-8">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 px-6 lg:px-16 bg-[#1A2343] text-white overflow-hidden">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text bg-clip-text text-transparent text-sm">
            Built for your world
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Helping Businesses{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text bg-clip-text text-transparent">Across Industries</span>
          </h2>
        </div>
        <div className="mt-20 space-y-8">
          <div className="overflow-hidden">
            <div className="flex w-max gap-6 animate-marquee-right">
              {[...industriess, ...industriess].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md whitespace-nowrap hover:border-cyan-400 transition-all duration-300"
                  >
                    <Icon className="text-cyan-400" size={20} />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex w-max gap-6 animate-marquee-left">
              {[...industriess, ...industriess].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md whitespace-nowrap hover:border-cyan-400 transition-all duration-300"
                  >
                    <Icon className="text-cyan-400" size={20} />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Faq />

    </>
  );
}


