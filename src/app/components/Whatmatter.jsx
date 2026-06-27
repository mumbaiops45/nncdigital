"use client";

import { useState } from "react";

const benefits = [
  {
    image: "/cloudconnect.webp",
    title: "Secure Data",
    description: "Cloud-connected system. GDPR / PIPEDA / CCPA compliance built-in.",
    tags: ["GDPR", "PIPEDA", "CCPA"],
  },
  {
    image: "/leadmanagement.webp",
    title: "Lead Management",
    description: "Priority pipelines with intelligent scoring and automation.",
    tags: ["Pipeline", "Scoring", "Automation"],
  },
  {
    image: "/apiintegration.jpg",
    title: "Easy Integration",
    description: "Seamless plugins and API integrations across departments.",
    tags: ["Plugins", "API", "No Silos"],
  },
  {
    image: "/24_7.jpeg",
    title: "Relentless Support",
    description: "24/7 support, training, and go-live assistance.",
    tags: ["24/7", "Training", "Go-Live"],
  },
];

export default function Whatmatter() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#020617] px-6 py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/12 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/12 blur-[140px]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.3em] text-cyan-300/80 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Why It Matters
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Key Benefits of{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            CRM Development
          </span>
        </h2>

        <p className="mt-4 mb-12 text-slate-400">
          Here's what you gain with advanced CRM development services.
        </p>
        <div className="flex flex-col gap-4 md:h-[460px] md:flex-row">
          {benefits.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`group relative cursor-pointer overflow-hidden rounded-[28px] border transition-all duration-700 ease-in-out
                  ${
                    isActive
                      ? "border-cyan-400/40 shadow-[0_25px_70px_-15px_rgba(6,182,212,0.5)]"
                      : "border-white/10"
                  }
                  ${
                    isActive ? "md:flex-[3.2]" : "md:flex-[1]"
                  }
                  h-[320px] md:h-full`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    isActive ? "scale-100" : "scale-110 brightness-50"
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"
                      : "bg-gradient-to-t from-[#020617]/90 via-[#020617]/60 to-[#020617]/30"
                  }`}
                />
                <span
                  className={`absolute left-6 right-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute inset-0 flex items-end p-6 transition-opacity duration-300 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-white [writing-mode:vertical-rl] rotate-180 md:whitespace-nowrap">
                    {item.title}
                  </h3>
                </div>
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-7 transition-all duration-500 ${
                    isActive
                      ? "translate-y-0 opacity-100 delay-200"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mb-5 max-w-md text-slate-300/90">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-400/30 bg-cyan-400/15 px-4 py-1.5 text-sm text-cyan-200 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}