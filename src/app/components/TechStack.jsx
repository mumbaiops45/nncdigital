
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
      <section className="relative overflow-hidden bg-gray-100 ">
      
        <div className="relative w-full overflow-hidden py-14">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/strategycrm.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40" />
         
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
                <p className="mt-6 text-lg leading-relaxed text-slate-200 max-w-2xl">
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
        <div className="relative overflow-hidden bg-gray-200 px-6 py-16">
          <div
            ref={sliderRef}
            className=" no-scrollbar flex gap-6  overflow-x-auto scroll-smooth p-4 snap-x snap-mandatory"
          >
            {crmTools.map((tool, index) => {
              const Icon = tool.icon;
              const hasImage = Boolean(tool.image);
              return (
                <div
                  key={index}
                  className={`group relative w-[320px] h-[210px] flex-shrink-0 snap-start overflow-hidden rounded-3xl p-[1px] transition-all duration-500  hover:scale-[1.03] `}
                >
                 
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-5 backdrop-blur-xl ${tool.featured
                        ? "bg-gray-100"
                        : "bg-gray-100"
                      }`}
                  >
                    {tool.featured && (
                      <span className="absolute left-6 right-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 shadow-[0_0_25px_rgba(34,211,238,0.8)]" />
                    )}
                    <div
                      className={`relative z-10 mb-3 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 ${tool.featured
                        ? "bg-white/20 shadow-lg shadow-cyan-400/30"
                        : `${tool.bg} group-hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]`
                        }`}
                    >
                      {hasImage ? (
                        <Image
                          src={tool.image}
                          alt={tool.name}
                          width={34}
                          height={34}
                          className="object-contain"
                        />
                      ) : (
                        <Icon
                          size={28}
                          className={`transition-all duration-300 ${tool.featured ? "text-white" : tool.color
                            }`}
                        />
                      )}
                    </div>

                    <div className="relative z-10 flex flex-1 flex-col">
                      <h3 className="mb-2 text-lg font-bold text-black transition-colors duration-300 group-hover:text-cyan-300">
                        {tool.name}
                      </h3>

                      <p
                        className={`line-clamp-3 text-sm leading-6 transition-colors duration-300 ${tool.featured
                          ? "text-black"
                          : "text-slate-900 group-hover:text-slate-900"
                          }`}
                      >
                        {tool.desc}
                      </p>

                      {tool.featured && (
                        <span className="mt-auto inline-flex w-fit rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#020617] shadow-lg transition-transform duration-300 group-hover:scale-105">
                          Fully Bespoke
                        </span>
                      )}
                    </div>
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
                  CRM Solutions{" "} <br />
                  <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Built For Every <br />  Business
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
          className="no-scrollbar flex gap-7 overflow-x-auto bg-gray-100 scroll-smooth p-4"
        >
          {businessCards.map((card, index) => (
            <div
              key={index}
              className="group relative min-w-[330px] overflow-hidden rounded-3xl border border-white/10 bg-gray-800 backdrop-blur-md transition-all duration-500  hover:border-cyan-400/40 hover:shadow-[0_25px_70px_-12px_rgba(6,182,212,0.4)] md:min-w-[300px]"
            >
              <div className="relative h-46 overflow-hidden">
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