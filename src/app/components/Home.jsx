"use client"
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { data, industries, blogs, successStories } from "../data/data";
import "swiper/css";
import Offers from "./Offers";
import Choose from "./Choose";
import Whatmatter from "./Whatmatter";
import TechStack from "./TechStack";
import Faq from "./Faq";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { HeartPulse, Home, ShoppingCart, Factory, GraduationCap, Hotel, Truck, Landmark, Briefcase } from "lucide-react";
import useContact from "@/hooks/useContact";


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


export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const row1 = industries.slice(0, 5);
  const row2 = industries.slice(5);
  const scrollRef = useRef(null);
  const {submitForm , loading, success, error} = useContact();
  const[form , setForm] = useState({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  service: "",
  message: "",

  });

  const handleChange = (e)=>{
    const{name, value} = e.target
   setForm((prev) =>({
    ...prev,
    [name]: value,
   }));
  }

  const handleSubmit = async(e) =>{
     e.preventDefault();
      try {
    await submitForm(form);

    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  } catch (err) {
    console.error(err);
  }
  }


  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const width = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };


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
      <section className="relative overflow-hidden bg-[#1A2343]">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 scale-110 bg-cover bg-center blur-[1px] transition-opacity duration-[1500ms] animate-[kenBurns_24s_ease-in-out_infinite] ${currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-[#000000]/5" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent z-[1]" />
        <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/25 blur-[130px] animate-[heroFloat_9s_ease-in-out_infinite]" />
      
        <div className="relative z-10 flex min-h-[750px] items-center px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-white">
              <p className="inline-flex items-center gap-2 font-medium text-cyan-300 animate-[heroUp_0.7s_ease-out_0.05s_both]">
                <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
                10+ Years of Enterprise Software Expertise
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl animate-[heroUp_0.7s_ease-out_0.1s_both]">
                Build Once.
                <span className="block bg-gradient-to-r from-cyan-400 via-teal-300 to-[#00A883] bg-clip-text text-transparent">
                  Scale Everywhere.
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-teal-300 to-[#00A883] bg-clip-text text-transparent">
                  Automate Everything.
                </span>
              </h1>

              <p className="mt-6 max-w-xl lg:text-md  leading-relaxed text-slate-200 sm:text-md animate-[heroUp_0.7s_ease-out_0.2s_both]">
                We design and develop custom CRM, ERP, Web, and Mobile applications
                that automate operations and accelerate growth across Canada, USA,
                and the UK.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 animate-[heroUp_0.7s_ease-out_0.3s_both]">
                <a
                  href="tel:+919900566466"
                  className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] px-8 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.6)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] hover:shadow-[0_14px_44px_-6px_rgba(6,182,212,0.85)]"
                >
                  Book Free Strategy
                </a>
                <Link
                  href="/about"
                  className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
                >
                  Explore Solutions
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5 animate-[heroUp_0.7s_ease-out_0.4s_both]">
                {[
                  "Google Partner",
                  "ISO Certified",
                  "GDPR Compliant",
                  "PIPEDA Compliant",
                  "Clutch Top Agency",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 animate-[heroUp_0.7s_ease-out_0.5s_both]">
                {[
                  { n: "250+", l: "Projects" },
                  { n: "98%", l: "Client Retention" },
                  { n: "10+", l: "Years Experience" },
                ].map((s, i) => (
                  <div key={s.l} className={i !== 0 ? "border-l border-white/10 pl-6" : ""}>
                    <h3 className="bg-gradient-to-br from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
                      {s.n}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-[heroUp_0.8s_ease-out_0.25s_both]">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-[2px] rounded-3xl bg-[conic-gradient(from_0deg,#34d399,#22d3ee,#3b82f6,#22d3ee,#34d399)] bg-[length:300%_300%] opacity-60 blur-[6px] animate-[ringSpin_6s_linear_infinite]" />

                <div className="relative rounded-3xl bg-white p-6 shadow-2xl sm:p-7">
                  <div className="absolute left-8 right-8 top-0 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600" />

                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-cyan-600">
                    Free Strategy Consultation
                  </p>
                  <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:text-2xl">
                    Get a Free Consultation
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Response within 24 hours. No commitment required.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-4 space-y-2.5">
                    <div className="grid grid-cols-2 gap-2.5">
                      <input type="text" placeholder="First Name"
                      name="firstName"
  value={form.firstName}
  onChange={handleChange} className="w-full rounded-lg border border-slate-200 p-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20" />
                      <input type="text" name="lastName"
  value={form.lastName}
  onChange={handleChange} placeholder="Last Name" className="w-full rounded-lg border border-slate-200 p-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20" />
                    </div>

                    <input type="tel"
                    name="phone"
  value={form.phone}
  onChange={handleChange}
                     placeholder="Phone Number" className="w-full rounded-lg border border-slate-200 p-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20" />
                    <input type="email"
                       name="email"
  value={form.email}
  onChange={handleChange}
                     placeholder="Email Address" className="w-full rounded-lg border border-slate-200 p-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20" />

                    <select name="service"
  value={form.service}
  onChange={handleChange}
                     className="w-full rounded-lg border border-slate-200 p-2.5 text-sm text-slate-600 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20">
                       <option value="">Service of Interest</option>
  <option value="CRM Development">CRM Development</option>
  <option value="ERP Development">ERP Development</option>
  <option value="Web Development">Web Development</option>
  <option value="Mobile App Development">Mobile App Development</option>
  <option value="Marketing Automation">Marketing Automation</option>
  <option value="Salesforce CRM">Salesforce CRM</option>
  <option value="Digital Transformation">Digital Transformation</option>
  <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                    </select>

                    <textarea rows="2" name="message"
  value={form.message}
  onChange={handleChange} placeholder="Tell us about your project..." className="w-full resize-none rounded-lg border border-slate-200 p-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20" />

                    <button type="submit" className="group relative w-full rounded-lg bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-[length:200%_100%] py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(6,182,212,0.5)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] hover:shadow-[0_14px_44px_-6px_rgba(6,182,212,0.75)]">
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
        className="relative overflow-hidden bg-[#1A2343] py-20 px-6"
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

      <section className="relative  px-6 bg-[#1A2343] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#00A884] blur-[120px] rounded-full " />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs tracking-[0.3em] uppercase">
            What we build
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">CRM Service {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A884] to-[#38BDF8]">We Offer</span>
          </h1>
          <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">We offer a comprehensive lineup of CRM and digital solutions for clients across <span className="text-white font-medium">Canada</span> ,{" "} <span className="text-white font-medium">USA</span>  &{" "}
            <span className="text-white font-medium">UK</span>,
          </p>

        </div>



      </section>
      <Offers />
      <Choose />

      <section className="relative overflow-hidden bg-[#1A2343] px-6 py-8">
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
          <div className="mt-16 relative">
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md text-white hover:bg-white/10"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md text-white hover:bg-white/10"
            >
              <FaChevronRight />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto scroll-smooth px-2 py-4 scrollbar-hide"
            >
              {data.map((item, i) => {
                const num = String(i + 1).padStart(2, "0");

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
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-cyan-300">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="h-2 w-2 rounded-full bg-cyan-400" />
                      </div>

                      <h3 className="mt-4 text-lg font-semibold text-white">
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


      <section className="relative overflow-hidden bg-[#1A2343] py-28 px-6 text-white">
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

      {/* <section className="relative overflow-hidden bg-[#020617] py-18">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/12 blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/12 blur-[140px]" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <div className="relative  max-w-7xl px-10">

          <div className="flex justify-left px-10">
            <div className="w-full lg:w-1/2 text-left">

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
          </div>

          <div className="mt-16 flex px-10 justify-left">
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                  <BlogCard key={blog.title} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative overflow-hidden  bg-[#1A2343] ">
        <div
          className="relative min-h-screen flex w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/AI-Powered.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[180px]" />
            <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[180px]" />
            <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:50px_50px]" />
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

        <div className="mt-16 grid gap-6 md:grid-cols-3 max-w-6xl pb-6 mx-auto">
          <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.20)]">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-2xl">
                📊
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Data Analysis</h3>
                <p className="mt-3 leading-relaxed text-gray-50">
                  AI analyses customer interactions across emails, social media, purchases,
                  and engagement channels, surfacing insights that help teams make smarter business decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7  backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.20)]">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-2xl">
                🎯
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Predictive Lead Scoring
                </h3>
                <p className="mt-3 leading-relaxed text-gray-50">
                  Automatically score and prioritize leads based on engagement, behavior,
                  and purchase intent, helping sales teams focus on high-conversion opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.20)]">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15 text-2xl">
                🤖
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  AI Chatbot & WhatsApp Automation
                </h3>
                <p className="mt-3 leading-relaxed text-gray-50">
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
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute top-20 left-10 h-72 w-72 bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 h-72 w-72 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 uppercase tracking-[4px] text-sm">
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
                  className="group relative w-[380px] shrink-0 snap-start rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_25px_80px_rgba(6,182,212,.25)]"
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


      <section
        className="relative bg-cover bg-center py-24 px-6 lg:px-16"
        style={{ backgroundImage: "url('/chose.png')" }}
      >
        <div className="absolute inset-0 bg-slate-950/50" />
        <div className="absolute top-10 left-10 h-72 w-72 bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 h-72 w-72 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 uppercase tracking-[4px] text-sm">
              Why Choose Us
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
              Why Choose Us as Your{" "}
              <span className="text-cyan-400">CRM Software Development</span> Agency?
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-8">
              NNC Digital Solutions is backed by{" "}
              <span className="text-white font-semibold">
                Nakshatra Namaha Creations Pvt. Ltd.
              </span>{" "}
              one of Bangalore's most respected digital studios with{" "}
              <span className="text-cyan-300 font-semibold">8+ years of experience</span>{" "}
              and{" "}
              <span className="text-cyan-300 font-semibold">565+ projects delivered</span>{" "}
              across India. To serve growing businesses in North America and the United Kingdom,
              we launched NNC Digital as our international arm, bringing the same proven technical expertise
              and client-first culture to global markets.
            </p>
            <div className="mt-8">
              <a
                href="tel:+919900566466"
                className="inline-block px-6 py-3 rounded-xl bg-cyan-500 text-black  font-semibold hover:bg-cyan-400 transition"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">

            {[
              { value: "1500+", label: "Web Projects" },
              { value: "500+", label: "Mobile Apps" },
              { value: "1800+", label: "IT Talents" },
              { value: "25+", label: "Industries" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(6,182,212,.25)]"
              >

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/10 to-transparent" />

                <div className="relative">
                  <h2 className="text-3xl font-bold text-white">
                    {item.value}
                  </h2>
                  <p className="mt-2 text-slate-300 text-sm tracking-wide uppercase">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}

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


