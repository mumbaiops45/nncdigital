

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
      }
    ]
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
      }
    ]
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
      }
    ]
  }

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
          setActive((old) => {
            if (old === crmSlides.length - 1) {
              return 0;
            }
            return old + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);

  }, [active]);

  return (
    <section
      className="relative overflow-hidden px-6 py-28">
      <div className="relative max-w-7xl">
        <div className="text-left mx-6">
          <p
            className="text-sm uppercase tracking-[0.4em] text-[#1ab191]">
            Why Choose Us
          </p>
          <h2
            className="mt-5 text-5xl font-bold md:text-5xl">
            Custom CRM Development
            <span
              className="block text-[#00A883]">
              Solutions
            </span>
          </h2>
          <p
            className=" mt-5 max-w-2xl text-black" >
            Powerful CRM solutions designed to automate workflows,
            improve productivity and grow your business.
          </p>
        </div>
        <div
          className="mt-12 flex flex-wrap justify-left gap-4">
          {
            crmSlides.map((item, index) => (
              <motion.button
                key={item.category}
                onClick={() => {
                  setActive(index);
                  setFeature(0);
                }}
                whileHover={{
                  y: -3
                }}
                className={`rounded-full px-7 py-3 text-sm transition-all${active === index ?
                  "bg-[#00A883] text-white shadow-lg bg-green-700"
                  :
                  "border border-white/10 bg-[#00A883] text-white/70"
                  }`}
              >
                {item.category}
              </motion.button>
            ))
          }
        </div>
        <div
          className="mt-20 grid items-center gap-14 lg:grid-cols-2 ">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}

                exit={{
                  opacity: 0,
                  y: -20
                }}

                transition={{
                  duration: .5
                }}

              >
                <h2
                  className="text-4xl font-bold md:text-5xl " >
                  {current.title}
                </h2>
                <p
                  className="mt-5 text-lg text-black">
                  {current.desc}
                </p>

                <div
                  className="mt-10 space-y-5">
                  {
                    crmSlides[active].items.map((item, index) => (
                      <div
                        key={item.title}
                        onClick={() => setFeature(index)}
                        className={`
                        cursor-pointer rounded-2xl border p-5 transition-all ${feature === index
                            ?
                            "border-[#00A883] bg-[#00A883]/10"
                            :
                            "border-white/10 bg-gray-200"
                          }`}
                      >
                        <h3 className="text-xl font-semibold">
                          {item.title}
                        </h3>
                        <p
                          className="mt-2 text-sm text-black">
                          {item.desc}
                        </p>
                      </div>
                    ))
                  }
                </div>
                <button
                  className="mt-10 rounded-full bg-gradient-to-r from-[#00A883] to-cyan-500 px-9 py-4 font-semibold shadow-xl shadow-[#00A883]/30">
                  Book Free Strategy Call
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
          <div>
             <div className="rounded-[40px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_0_80px_rgba(0,168,131,.25)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  initial={{
                    opacity: 0,
                    x: 80
                  }}

                  animate={{
                    opacity: 1,
                    x: 0
                  }}

                  exit={{
                    opacity: 0,
                    x: -80
                  }}

                  transition={{
                    duration: .6,
                    ease: "easeInOut"
                  }}
                //   className="rounded-[30px] w-full" 
                className="
rounded-[30px]
w-full
h-full
object-contain
"
                  />
              </AnimatePresence>
              <div
                className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  key={current.image}
                  className="h-full bg-gradient-to-r from-[#00A883] to-cyan-400"
                  initial={{
                    width: "0%"
                  }}

                  animate={{
                    width: "100%"
                  }}

                  transition={{
                    duration: 3,
                    ease: "linear"
                  }}

                />

              </div>

            </div>
            <AnimatePresence mode="wait">
              <motion.div

                key={current.title}

                initial={{
                  opacity: 0,
                  y: 20
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                exit={{
                  opacity: 0
                }}

                className="mt-8 text-center">
                <h3
                  className="text-3xl font-bold">
                  {current.title}
                </h3>
                <p
                  className="mt-3 text-black">
                  {current.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}