"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    duration: 30,
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const t = setTimeout(() => emblaApi.reInit(), 720);
    return () => clearTimeout(t);
  }, [selectedIndex, emblaApi]);

  return (
    <section className="bg-gray-100  py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="uppercase text-black tracking-[3px] mb-3">Why It Matters</p>

        <h2 className="text-5xl font-bold mb-4">
          Key Benefits of <span className="text-[#00A883]">CRM Development</span>
        </h2>

        <p className="text-black mb-12">
          Here's what you gain with advanced CRM development services.
        </p>

        <div className="relative px-2">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#00A883] transition"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#00A883] transition"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {benefits.map((item, index) => {
                const active = selectedIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)} 
                    className={`flex-none cursor-pointer transition-all duration-700 ease-in-out ${
                      active ? "w-[65%]" : "w-[22%]"
                    }`}
                  >
                    <div
                      className={`bg-[#111] rounded-[30px] overflow-hidden transition-all duration-700 ${
                        active ? "scale-100 opacity-100" : "scale-90 opacity-40"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full object-cover transition-all duration-700 ${
                          active ? "h-[380px]" : "h-[300px]"
                        }`}
                      />

                      <div className={`p-6 transition-opacity duration-500 ${active ? "opacity-100" : "opacity-0"}`}>
                        <h3 className="text-2xl font-semibold mb-3 whitespace-nowrap">
                          {item.title}
                        </h3>
                        <p className="text-zinc-400 mb-5">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-2 rounded-full bg-[#00A883]/15 text-[#00A883] text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}