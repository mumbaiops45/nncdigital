
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FaSalesforce, FaHubspot } from "react-icons/fa";
import { MdOutlineSettingsSuggest, MdOutlineHub } from "react-icons/md";
import { HiOutlineChartBar } from "react-icons/hi";
import { RiMagicLine } from "react-icons/ri";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { businessCards } from "../data/data";

const crmTools = [
  { name: "Salesforce", icon: FaSalesforce, color: "text-[#00A1E0]", bg: "bg-[#00A1E0]/10", desc: "World's #1 CRM configured for your exact sales process." },
  { name: "HubSpot", icon: FaHubspot, color: "text-[#FF7A59]", bg: "bg-[#FF7A59]/10", desc: "Inbound-focused CRM ideal for marketing-led growth." },
  { name: "MS Dynamics 365", image: "/360.png", color: "text-[#0078D4]", bg: "bg-[#0078D4]/10", desc: "Enterprise CRM integrated with Microsoft 365 & Azure." },
  { name: "Zoho CRM", image: "/zohocrm.png", color: "text-[#E42527]", bg: "bg-[#E42527]/10", desc: "Flexible, cost-effective CRM for scaling SMEs." },
  { name: "SugarCRM", icon: MdOutlineSettingsSuggest, color: "text-[#F8B323]", bg: "bg-[#F8B323]/10", desc: "Open-source CRM for sales force automation." },
  { name: "SuiteCRM", icon: MdOutlineHub, color: "text-[#6C63FF]", bg: "bg-[#6C63FF]/10", desc: "Community-driven CRM for customer interactions." },
  { name: "Pipedrive", icon: HiOutlineChartBar, color: "text-[#0F9D58]", bg: "bg-[#0F9D58]/10", desc: "Visual pipeline CRM ideal for SME sales teams." },
  { name: "Custom CRM", icon: RiMagicLine, desc: "100% bespoke when off-the-shelf solutions don't fit your workflows.", featured: true },
];

export default function TechStack() {
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);

  const scrollLeft = () => sliderRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  const scrollRight = () => sliderRef.current?.scrollBy({ left: 350, behavior: "smooth" });

  const scrollLeft2 = () => sliderRef2.current?.scrollBy({ left: -380, behavior: "smooth" });
  const scrollRight2 = () => sliderRef2.current?.scrollBy({ left: 380, behavior: "smooth" });

  return (
    <>
      <section className="relative overflow-hidden bg-[#020617] ">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/12 blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600/12 blur-[140px]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <div className="relative w-full overflow-hidden py-24">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/strategycrm.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40" />
          <div className="absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/20 blur-[140px]" />
          <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
            <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  Our Tech Stack
                </p>

                <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                  Leading CRM Platform <br></br> Tools{" "}
                  <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    That We Use
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
                  Here is a closer look at the CRM technologies we leverage to build scalable,
                  efficient, and growth-focused customer relationship systems.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={scrollLeft}
                  aria-label="Scroll left"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/20"
                >
                  <FiArrowLeft size={20} className="text-white group-hover:text-cyan-300" />
                </button>

                <button
                  onClick={scrollRight}
                  aria-label="Scroll right"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/20"
                >
                  <FiArrowRight size={20} className="text-white group-hover:text-cyan-300" />
                </button>
              </div>

            </div>

          </div>
        </div>


        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#020617] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#020617] to-transparent" />

          <div
            ref={sliderRef}
            className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-4"
          >
            {crmTools.map((tool, index) => {
              const Icon = tool.icon;
              const hasImage = !!tool.image;

              return (
                <div
                  key={index}
                  className={`group relative w-[320px] min-h-[280px] flex-shrink-0 overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-2 ${tool.featured
                    ? "border-cyan-400/40 bg-gradient-to-br from-emerald-500/20 via-cyan-500/15 to-blue-600/20 text-white hover:shadow-[0_25px_60px_-12px_rgba(6,182,212,0.5)]"
                    : "border-white/10 bg-white/[0.04] backdrop-blur-md hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_25px_60px_-12px_rgba(6,182,212,0.35)]"
                    }`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {tool.featured && (
                    <span className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />
                  )}

                  <div
                    className={`relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${tool.featured
                      ? "bg-white/15 backdrop-blur-md"
                      : `${tool.bg} group-hover:scale-110`
                      }`}
                  >
                    {hasImage ? (
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    ) : (
                      <Icon
                        size={32}
                        className={`transition-all duration-300 ${tool.featured ? "text-white" : tool.color
                          }`}
                      />
                    )}
                  </div>

                  <div className="relative z-10">
                    <h3 className="mb-3 text-xl font-bold text-white">
                      {tool.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${tool.featured ? "text-white/90" : "text-slate-400"
                        }`}
                    >
                      {tool.desc}
                    </p>
                    {tool.featured && (
                      <span className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#020617]">
                        Fully Bespoke
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1A2343] ">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/12 blur-[140px]" />
        <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="relative w-full overflow-hidden py-24  px-6 lg:px-8">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/CRMConsulting.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40" />
          <div className="absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/20 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">


              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Hire CRM Developers
                </p>
                <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                  CRM Solutions{" "} <br/>
                  <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Built For Every <br/>  Business
                  </span>
                </h2>
                <p className="mt-5 text-lg text-slate-50">
                  Choose the right CRM development approach for enterprises,
                  agencies, and growing businesses.
                </p>
              </div>

              <div className="mt-12 mb-8 flex justify-end gap-3">
                <button
                  onClick={scrollLeft2}
                  aria-label="Scroll left"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition hover:border-cyan-400/50 hover:bg-cyan-500/20"
                >
                  <FiArrowLeft size={22} className="text-white transition group-hover:text-cyan-300" />
                </button>
                <button
                  onClick={scrollRight2}
                  aria-label="Scroll right"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition hover:border-cyan-400/50 hover:bg-cyan-500/20"
                >
                  <FiArrowRight size={22} className="text-white transition group-hover:text-cyan-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={sliderRef2}
          className="no-scrollbar flex gap-7 overflow-x-auto scroll-smooth pb-8"
        >
          {businessCards.map((card, index) => (
            <div
              key={index}
              className="group relative min-w-[330px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_25px_70px_-12px_rgba(6,182,212,0.4)] md:min-w-[360px]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent" />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

    


     
    </>
  );
}