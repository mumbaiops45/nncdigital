"use client";
import React, { useState, useRef, useEffect } from "react";
import { services } from "../data/data";




export default function Offers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [width, setWidth] = useState(0);
  const length = services.length;

  const textPositions = [
    "top-10 left-10 text-left",
    "top-1/2 left-10 -translate-y-1/2 text-left",
    "bottom-10 left-10 text-left",
    // "top-10 justify-center text-center",
    "absolute top-0 left-1/2 -translate-x-1/2 text-center",
    "top-10 left-10 text-left",
    "top-10 left-10 text-left",
    "top-10 left-10 text-left",
  ];

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }

    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollLeft = scrollRef.current.scrollLeft;
      const currentIndex = Math.round(
        scrollLeft / scrollRef.current.clientWidth
      );

      setActiveIndex(currentIndex);
    };

    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };
    const scrollElement = scrollRef.current;
    scrollElement?.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      scrollElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gray-100 py-8 "
    >
      <div className="relative mx-auto mb-6 max-w-6xl px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
            What We Build
          </span>
        </div>
        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          CRM Services{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            We Offer
          </span>
        </h1>
        <p className="mt-2 max-w-3xl text-md leading-8 text-slate-900">
          We offer CRM and digital transformation services for businesses across
          Canada, USA, and UK.
        </p>
      </div>
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {services.map((item, i) => {
          const position = textPositions[i % textPositions.length];
          return (
            <div
              key={i}
              className="flex h-[460px] shrink-0 snap-center items-center justify-center px-6"
              style={{ width: width || "100vw" }}
            >
              <div className="relative h-[460px] w-full max-w-6xl overflow-hidden rounded-4xl border ">
                <img
                  src={item.img}
                  alt={item.title}
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/20 via-[#020617]/40 to-[#020617]/70" />

                <div className={`absolute ${position} z-10 max-w-lg text-white transition-all duration-700`}>
                  {/* <span className="text-lg font-bold tracking-widest text-cyan-300">
                    {String(i + 1).padStart(2, "0")}
                  </span> */}
                  <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-lg text-slate-200">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>


      <div className="mt-10 flex justify-center gap-2">
        {services.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() =>
              scrollRef.current?.scrollTo({ left: i * (width || window.innerWidth), behavior: "smooth" })
            }
            className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? "w-8 bg-gradient-to-r from-emerald-400 to-cyan-400" : "w-2 bg-black hover:bg-green-400"
              }`}
          />
        ))}
      </div>

      {/* <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style> */}
    </section>
  )
}