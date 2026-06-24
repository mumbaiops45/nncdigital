"use client"
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { data, industries, blogs } from "../data/data";
import Offers from "./Offers";
import Choose from "./Choose";

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

            <div className=" inset-0 bg-black/20 w-full">
              <div className="text-white">
                <h1 className="text-5xl lg:text-5xl mt-8 font-bold ">
                  Build Once.
                  <span className="block text-[#ffffff]">
                    Scale Everywhere.
                  </span>
                  <span className="block text-[#00A883]">
                    Automate Everything.
                  </span>
                </h1>

                <p className="mt-8 text-lg text-white max-w-2xl ">
                  We design and develop custom CRM, ERP, Web, and Mobile
                  applications that automate operations and accelerate growth
                  across Canada, USA, and the UK.
                </p>

                <p className="mt-4 text-[#00A883] font-medium">
                  10+ Years of Enterprise Software Expertise
                </p>


                <div className="hidden lg:flex gap-4 mt-4">
                  <button className="px-8 py-2 rounded-xl bg-[#00A883] hover:bg-green-600 font-semibold transition-all">
                    Book Free Strategy
                  </button>

                  <button className="px-8 py-2 rounded-xl border border-white/30 hover:bg-white/10 transition-all">
                    Explore Solutions
                  </button>
                </div>



                <div className="flex flex-wrap gap-3 mt-5">
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


                <div className="grid grid-cols-3 gap-8 mt-6 max-w-xl">
                  <div>
                    <h3 className="text-3xl font-bold text-[#00A883]">250+</h3>
                    <p className="text-gray-300">Projects</p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-[#00A883]">98%</h3>
                    <p className="text-gray-300">Client Retention</p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-[#00A883]">10+</h3>
                    <p className="text-gray-300">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-white rounded-3xl shadow-2xl p-2 px-8 w-full h-[550px] max-w-md">
                <p className="text-[#00A883] mt-4 font-semibold">
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
                      className="border rounded-xl p-3 w-full"
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
                    className="w-full py-4 rounded-xl bg-[#00A883] hover:bg-green-600 text-white font-semibold transition-all"
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
          <h3 className="text-4xl font-bold text-[#00A883]">
            {inView && <CountUp end={100} duration={2.5} />}+
          </h3>
          <b className="block mt-2">Projects Delivered</b>
          <p className="text-gray-500 mt-1">Across 12 countries</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-[#00A883]">
            {inView && <CountUp end={10} duration={2.5} />}+
          </h3>
          <b className="block mt-2">Years of Combined Expertise</b>
          <p className="text-gray-500 mt-1">Deep tech since 2014</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-[#00A883]">
            {inView && <CountUp end={50} duration={2.5} />}+
          </h3>
          <b className="block mt-2">Clients Globally</b>
          <p className="text-gray-500 mt-1">CA • USA • UK • IN</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h3 className="text-4xl font-bold text-[#00A883]">
            {inView && <CountUp end={98} duration={2.5} />}%
          </h3>
          <b className="block mt-2">Client Retention Rate</b>
          <p className="text-gray-500 mt-1">Long-term partnerships</p>
        </div>
      </section>

      <Offers />
      <Choose />



      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[140px]" />
          <div className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#00A883]">
              CRM Capabilities
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              A Good CRM Software Always Allows You to Do More
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Explore the key capabilities that make our CRM solutions stand out
              for businesses in Canada, USA & UK.
            </p>
          </div>

          <div className="mt-16 grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-3">
              {data.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.title}>
                    {isOpen ? (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="rounded-3xl border border-cyan-500/20 bg-white/[0.04] p-6 backdrop-blur-xl"
                      >
                        <h3 className="text-lg font-semibold text-white">
                          <span className="text-[#00A883]">{item.title}.</span>{" "}
                          <span className="font-normal text-slate-300">
                            {item.desc}
                          </span>
                        </h3>
                      </motion.div>
                    ) : (
                      <button
                        onClick={() => setOpen(i)}
                        className="group flex w-full items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-left transition-all hover:border-cyan-500/30 hover:bg-white/[0.06]"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-lg text-slate-300 transition group-hover:border-cyan-400 group-hover:text-cyan-400">
                          +
                        </span>
                        <span className="font-medium text-white">
                          {item.title}
                        </span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 lg:h-[560px] lg:sticky lg:top-24">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image}
                  src={`/${active.image}`}
                  alt={active.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>




      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="/hero1.png"
            alt="CRM Solutions"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b  from-black/80  via-black/60  to-black" />
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full  bg-green-500/20 blur-[120px]" />

          <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full   bg-green-400/20 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <div className=" mx-auto max-w-4xl  rounded-3xl  border border-white/10 bg-white/[0.05] backdrop-blur-xl px-6 py-12 text-center shadow-2xl md:px-12 md:py-16">

            <div className=" mx-auto mb-6 flex w-fit items-center gap-2  rounded-full  border border-green-400/30 bg-green-400/10  px-5 py-2 text-sm  text-green-300 ">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              Premium CRM Solutions
            </div>

            <h1
              className=" text-4xl  font-bold leading-tight text-white md:text-5xl lg:text-5xl " >
              Want CRM solutions that take your business to the{" "}
              <span
                className=" relative   text-[#00A883]  ">
                next level?
              </span>
            </h1>
            <p
              className=" mx-auto mt-8 max-w-2xl text-base  leading-relaxed text-gray-300  md:text-xl " >
              Connect with NNC Digital today and transform your business
              with intelligent CRM solutions built for growth.
            </p>
            <div className="mt-10 flex justify-center">
              <button
                className=" group relative overflow-hidden rounded-full bg-[#00A883] px-10 py-4 text-sm  font-semibold  text-black shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-green-400/50">
                <span className="relative z-10 flex items-center gap-2">
                  Connect Now

                  <span
                    className="  transition-transform  duration-300  group-hover:translate-x-2  " >
                    →
                  </span>
                </span>
                <span
                  className=" absolute inset-0 -translate-x-full bg-white/30 transition-transform  duration-700  group-hover:translate-x-full " />
              </button>
            </div>
          </div>

        </div>

        <div
          className=" absolute  bottom-0  h-32  w-full  bg-gradient-to-t  from-black to-transparent " />
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




      <section className="relative overflow-hidden bg-black py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-green-500/15 blur-[180px]" />
          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[180px]" />
          <div
            className=" absolute  inset-0  opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]   [background-size:50px_50px] " />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center">

            <div
              className="  inline-flex  items-center  gap-2   rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 " >
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

              <span className="text-sm font-medium text-green-300">
                Industries We Serve
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
              CRM Solutions Built For
              <span
                className=" mt-2 block text-[#00A883]   ">
                Every Industry
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
              Purpose-built CRM solutions tailored for diverse industries,
              helping organizations streamline operations, automate workflows,
              and accelerate growth.
            </p>
          </div>
          <div className="relative mt-20 overflow-hidden">
            <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-black to-transparent" />
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 40,
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
          <div className="relative mt-10 overflow-hidden">
            <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-black to-transparent" />

            <motion.div
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 40,
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
            <p className="font-medium uppercase tracking-[0.3em] text-[#00A883]">
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



      <section className="relative overflow-hidden bg-black py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[180px]" />
          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[180px]" />
          <div
            className="  absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px transparent_1px)] [background-size:50px_50px]"/>
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


    </>
  );
}


