"use client"
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { data, industries, blogs } from "../data/data";
import Offers from "./Offers";

const heroImages = [
  "/hero1.png",
  "hero.webp",
  "/hero2.png",
];



const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


function IndustryCard({ industry }) {
  return (
    <div className="group mx-3 min-w-[260px] rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 text-3xl">
        {industry.icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-slate-900">
        {industry.title}
      </h3>

      <div className="mt-4 h-[2px] w-12 bg-sky-500 transition-all duration-300 group-hover:w-20" />
    </div>
  );
}


function BlogCard({ blog }) {
  return (
    <div className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>

      <div className="p-8">

        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
          {blog.category}
        </span>

        <div className="mt-4 flex gap-3 text-sm text-slate-500">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900">
          {blog.title}
        </h3>

        <p className="mt-4 text-slate-600">
          {blog.desc}
        </p>

        <button className="mt-6 flex items-center gap-2 font-semibold text-sky-600">
          Read Article
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </button>

      </div>
    </div>
  );
}

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(0);

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

      <section className="relative overflow-hidden">

        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
        ))}


        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6 lg:px-12 py-12 min-h-[750px] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

            <div className="text-white">
              <h1 className="text-5xl lg:text-5xl mt-8 font-bold leading-tight">
                Build Once.
                <span className="block text-green-400">
                  Scale Everywhere.
                </span>
                <span className="block text-blue-400">
                  Automate Everything.
                </span>
              </h1>

              <p className="mt-8 text-lg text-gray-300 max-w-2xl leading-relaxed">
                We design and develop custom CRM, ERP, Web, and Mobile
                applications that automate operations and accelerate growth
                across Canada, USA, and the UK.
              </p>

              <p className="mt-4 text-green-300 font-medium">
                10+ Years of Enterprise Software Expertise
              </p>


              <div className="hidden lg:flex gap-4 mt-10">
                <button className="px-8 py-2 rounded-xl bg-green-500 hover:bg-green-600 font-semibold transition-all">
                  Book Free Strategy
                </button>

                <button className="px-8 py-2 rounded-xl border border-white/30 hover:bg-white/10 transition-all">
                  Explore Solutions
                </button>
              </div>



              <div className="flex flex-wrap gap-3 mt-10">
                {[
                  "Google Partner",
                  "ISO Certified",
                  "GDPR Compliant",
                  "PIPEDA Compliant",
                  "Clutch Top Agency",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>


              <div className="grid grid-cols-3 gap-8 mt-12 max-w-xl">
                <div>
                  <h3 className="text-3xl font-bold text-green-400">250+</h3>
                  <p className="text-gray-300">Projects</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-green-400">98%</h3>
                  <p className="text-gray-300">Client Retention</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-green-400">10+</h3>
                  <p className="text-gray-300">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-white rounded-3xl shadow-2xl p-2 px-8 w-full h-[550px] max-w-md">
                <p className="text-green-600 mt-4 font-semibold">
                  Free Strategy Consultation
                </p>

                <h2 className="text-3xl font-bold mt-2 text-gray-900">
                  Get a Free Consultation
                </h2>

                <p className="text-gray-500 ">
                  Response within 24 hours. No commitment required.
                </p>

                <form className="mt-2 space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border rounded-xl p-2 w-full"
                    />

                    <input
                      type="text"
                      placeholder="Last Name"
                      className="border rounded-xl p-3 w-full"
                    />
                  </div>

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="border rounded-xl p-3 w-full"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border rounded-xl p-3 w-full"
                  />

                  <select className="border rounded-xl  p-3 w-full">
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

                  <textarea
                    rows="2"
                    placeholder="Tell us about your project..."
                    className="border rounded-xl p-3 w-full"
                  />

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-all"
                  >
                    Get Free Consultation
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-16 px-6"
      >
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-green-600">
            {inView && <CountUp end={100} duration={2.5} />}+
          </h3>
          <b className="block mt-2">Projects Delivered</b>
          <p className="text-gray-500 mt-1">Across 12 countries</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-blue-600">
            {inView && <CountUp end={10} duration={2.5} />}+
          </h3>
          <b className="block mt-2">Years of Combined Expertise</b>
          <p className="text-gray-500 mt-1">Deep tech since 2014</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-purple-600">
            {inView && <CountUp end={50} duration={2.5} />}+
          </h3>
          <b className="block mt-2">Clients Globally</b>
          <p className="text-gray-500 mt-1">CA • USA • UK • IN</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-orange-600">
            {inView && <CountUp end={98} duration={2.5} />}%
          </h3>
          <b className="block mt-2">Client Retention Rate</b>
          <p className="text-gray-500 mt-1">Long-term partnerships</p>
        </div>
      </section>

      <Offers />


      <section className="relative overflow-hidden bg-[#06070b] px-6 py-24 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[140px]" />
          <div className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-sm tracking-[0.35em] text-green-400 uppercase"
            >
              Why Choose Us
            </motion.p>

            <motion.h2
              custom={2}
              variants={fadeUp}
              className="mt-5 text-4xl font-bold leading-tight md:text-5xl"
            >
              Your Best Custom CRM{" "}
              <span className="text-green-400">Development Company</span>
            </motion.h2>

            <motion.p
              custom={3}
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-white/60"
            >
              Here's wat we bring to the table in terms of custom CRM development.
            </motion.p>
          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {[
              "Custom CRM Solutions",
              "CRM Software Management",
              "CRm Software Optimization",
            ].map((btn, i) => (
              <motion.button
                key={btn}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/80 backdrop-blur-xl transition hover:border-sky-400/40 hover:bg-sky-500/10"
              >
                {btn}
              </motion.button>
            ))}
          </motion.div>


          <div className="mt-20 text-center">
            <p className="text-sm text-green-400 tracking-widest">
              Our Track Record
            </p>

            <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
              Numbers That Define Our Expertise
            </h3>

            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                ["Web Projects", "1500+"],
                ["Mobile Apps", "500+"],
                ["Years", "10+"],
                ["Industries", "25+"],
              ].map((item, i) => (
                <motion.div
                  key={item[0]}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-sky-400/30 transition"
                >
                  <p className="text-sm text-white/50">{item[0]}</p>
                  <b className="mt-2 block text-3xl text-green-400">
                    {item[1]}
                  </b>
                </motion.div>
              ))}
            </div>

            <button className="mt-10 rounded-full bg-gradient-to-r from-green-500 to-green-500 px-8 py-4 text-sm font-semibold shadow-lg shadow-sky-500/20 transition hover:shadow-sky-500/40">
              Book a frre Strategy Call
            </button>
          </div>


          <div className="mt-24 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-sky-400/30 transition">
              <h2 className="text-xl font-semibold text-green-400">
                CRM Mobile App System
              </h2>

              <p className="mt-2 text-sm text-white/60">
                Native mobile CRM for iOS & Andriod to manage customers on the go.
              </p>

              <h2 className="mt-6 text-xl font-semibold">
                Custom CRM Development
              </h2>
              <p className="text-sm text-white/60">
                Fully bespoke CRM built around your exact business workflows.
              </p>

              <h2 className="mt-6 text-xl font-semibold">
                Cloud-Based CRM Services
              </h2>
              <p className="text-sm text-white/60">
                Scalable, secure cloud CRM infrastructure for growing teams.
              </p>

              <h2 className="mt-6 text-xl font-semibold">
                Real-Time Dashboards
              </h2>
              <p className="text-sm text-white/60">
                Live analytics and reporting dashboards for instant business insights.
              </p>
            </div>


            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-indigo-400/30 transition">
              <h2 className="text-xl font-semibold text-green-400">
                USer Role & Permission Mgmt
              </h2>
              <p className="text-sm text-white/60">
                Granular access control to keep your data safe and teams efficient.
              </p>

              <h2 className="mt-6 text-xl font-semibold">
                Data Quality & Deduplication
              </h2>
              <p className="text-sm text-white/60">
                Clean, consistent data with automated dedup and validation rules.
              </p>

              <h2 className="mt-6 text-xl font-semibold">
                Workflow Automation Mgmt
              </h2>
              <p className="text-sm text-white/60">
                Streamline approvals, notifications, and task assignments automatically.
              </p>

              <h2 className="mt-6 text-xl font-semibold">
                Third-Party App Management
              </h2>
              <p className="text-sm text-white/60">
                Manage integrations with 50+ tools from one central CRM hub.
              </p>
            </div>


            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-emerald-400/30 transition">
              <h2 className="text-xl font-semibold text-emerald-400">
                Performance Tuning
              </h2>
              <p className="text-sm text-white/60">
                Optimize CRM speed , load times, and query performance at scale.
              </p>

              <h2 className="mt-6 text-xl font-semibold">
                Conversion Optimization
              </h2>
              <p className="text-sm text-white/60">
                Refine pipelines and processes to maximize lead-to-customer rates.
              </p>

              <h2 className="mt-6 text-xl font-semibold">
                AI-Powered Insights
              </h2>
              <p className="text-sm text-white/60">
                Leerage machine learning to predict churn and surface opportunities.
              </p>

              <h2 className="mt-6 text-xl font-semibold">
                Audit & Health Checks
              </h2>
              <p className="text-sm text-white/60">
                Regular CRM audits to identify gaps, risks, and improvement areas.
              </p>
            </div>

          </div>
        </div>
      </section>



      <section className="relative overflow-hidden bg-gray-100 px-6 py-24 ">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[140px]" />
          <div className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm tracking-[0.35em] text-green-400 uppercase">
              CRM Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              A Good CRM Software Always Allows You to Do More
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-black">
              Explore the key capabilities that make our CRM solutions stand out for businesses in Canada, USA & UK.
            </p>
          </div>


          <div className="mt-16 space-y-4">

            {data.map((item, i) => {
              const isOpen = open === i;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-gray-200 backdrop-blur-xl transition"
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <h3 className="text-lg font-medium">
                      {item.title}
                    </h3>

                    <span className="text-xl text-black">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-black">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}

          </div>
        </div>
      </section>


      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero1.png"
            alt="hero background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-white">
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Want CRM solutions that take your business to the{" "}
            <span className="relative inline-block">
              next level?
              <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-sky-400/70"></span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 md:text-lg">
            Connect with NNC Digital today.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="group relative rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-lg transition hover:scale-105 hover:shadow-white/20">
              Connect Now
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

        </div>

      </section>

      <section className="relative overflow-hidden bg-[#d8d9db] py-24 text-black">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-200px] top-[100px] h-[400px] w-[400px] rounded-full bg-sky-500/20 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[140px]" />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="/hero1.png"
                alt="CRM Development"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-green-500/20 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Why Choose Us as Your CRM Software Development Agency?
            </h1>

            <p className="mt-6 text-base leading-relaxed  text-black">
              NNC DIgital Solutions is backed by{" "}
              <strong className="text-emerald-400">
                Nakshatra Namaha Creations Pvt.Ltd.
              </strong>{" "}
              one of Bangalore's most respected digital studios with{" "}
              <span className="text-emerald-400">8+ years of experience</span> and{" "}
              <span className="text-emerald-400">565+ projects delivered</span> across
              India. To serve growing businesses in North America and the United
              Kingdom, we launched NNC Digital as our international arm bringing
              the same proven technical expertise and client first culture to the
              Canadian, US, and UK markets.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">

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
                  className="rounded-2xl border border-white/10 bg-white p-4 text-center backdrop-blur-xl hover:border-sky-400/30 transition"
                >
                  <b className="text-2xl text-emerald-400">{item[0]}</b>
                  <p className="mt-1 text-sm text-black">{item[1]}</p>
                </motion.div>
              ))}

            </div>

          </motion.div>
        </div>
      </section>



      <section className="relative overflow-hidden bg-slate-50 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-100px] top-0 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[120px]" />
          <div className="absolute right-[-150px] bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-500">
              Built for Your World
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Helping Businesses Across Industries
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-600">
              Purpose-built CRM solutions tailored for diverse industries,
              helping organizations streamline operations and accelerate growth.
            </p>
          </div>


          <div className="relative mt-20 overflow-hidden">
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max"
            >
              {[...row1, ...row1].map((industry, index) => (
                <IndustryCard
                  key={`${industry.title}-${index}`}
                  industry={industry}
                />
              ))}
            </motion.div>
          </div>


          <div className="relative mt-8 overflow-hidden">
            <motion.div
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max"
            >
              {[...row2, ...row2, ...row2].map((industry, index) => (
                <IndustryCard
                  key={`${industry.title}-${index}`}
                  industry={industry}
                />
              ))}
            </motion.div>
          </div>

        </div>
      </section>




      <section className="relative overflow-hidden bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <p className="font-medium uppercase tracking-[0.3em] text-sky-500">
              From the Blog
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Insights on Technology, Automation & Digital Growth
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.title} blog={blog} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <button className="group rounded-full border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-900 hover:text-white">
              View All Articles
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">
                →
              </span>
            </button>
          </div>

        </div>
      </section>

    </>
  );
}


