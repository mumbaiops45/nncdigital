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
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[0.25em] text-[#00A883] font-semibold text-sm">
                Our Tech Stack
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Leading CRM Platform Tools <span className="text-[#00A883]">That We Use</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Here is a closer look at the CRM technologies we leverage to build scalable,
                efficient, and growth-focused customer relationship systems.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={scrollLeft}
                aria-label="Scroll left"
                className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#00A883] hover:text-white hover:border-[#00A883] transition-all duration-300 shadow-sm"
              >
                <FiArrowLeft size={20} />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll right"
                className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#00A883] hover:text-white hover:border-[#00A883] transition-all duration-300 shadow-sm"
              >
                <FiArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
            >
              {crmTools.map((tool, index) => {
                const Icon = tool.icon;
                const hasImage = !!tool.image;

                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-3xl border p-7 flex-shrink-0 w-[320px] min-h-[280px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                      tool.featured
                        ? "bg-[#00A883] border-[#00A883] text-white"
                        : "bg-gray-200 border-slate-200 hover:border-[#00A883]/30"
                    }`}
                  >
                    {!tool.featured && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00A883]/0 via-[#00A883]/0 to-[#00A883]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    )}

                    <div
                      className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                        tool.featured ? "bg-white/20" : `${tool.bg} group-hover:bg-[#00A883]`
                      }`}
                    >
                      {hasImage ? (
                        <Image src={tool.image} alt={tool.name} width={40} height={40} className="object-contain" />
                      ) : (
                        <Icon
                          size={32}
                          className={`transition-all duration-300 ${
                            tool.featured ? "text-white" : `${tool.color} group-hover:text-white`
                          }`}
                        />
                      )}
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                      <p className={`text-sm leading-relaxed ${tool.featured ? "text-white/90" : "text-slate-600"}`}>
                        {tool.desc}
                      </p>
                      {tool.featured && (
                        <span className="inline-flex mt-5 px-4 py-2 rounded-full bg-white text-[#00A883] text-xs font-semibold uppercase tracking-wider">
                          Fully Bespoke
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#00A883]">
              Hire CRM Developers
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              CRM Solutions <span className="text-[#00A883]">Built For Every Business</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Choose the right CRM development approach for enterprises, agencies, and growing businesses.
            </p>
          </div>

          <div className="flex justify-end gap-3 mt-12 mb-8">
            <button
              onClick={scrollLeft2}
              aria-label="Scroll left"
              className="group w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:bg-[#00A883] hover:border-[#00A883] transition"
            >
              <FiArrowLeft size={22} className="group-hover:text-white transition" />
            </button>
            <button
              onClick={scrollRight2}
              aria-label="Scroll right"
              className="group w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:bg-[#00A883] hover:border-[#00A883] transition"
            >
              <FiArrowRight size={22} className="group-hover:text-white transition" />
            </button>
          </div>

          <div ref={sliderRef2} className="flex gap-7 overflow-x-auto scroll-smooth pb-8 no-scrollbar">
            {businessCards.map((card, index) => (
              <div
                key={index}
                className="group relative min-w-[330px] md:min-w-[360px] bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,168,131,0.18)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="flex justify-center gap-5 mt-16 flex-wrap">
            <button className="px-8 py-4 rounded-full bg-[#00A883] text-white font-semibold shadow-lg shadow-[#00A883]/30 hover:bg-[#008f70] transition">
              Hire CRM Developer
            </button>
            <button className="px-8 py-4 rounded-full border border-slate-300 font-semibold hover:border-[#00A883] hover:text-[#00A883] transition">
              View Pricing
            </button>
          </div> */}
        </div>
      </section>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}