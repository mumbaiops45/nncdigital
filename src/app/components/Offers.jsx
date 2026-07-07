"use client";
import React, { useState, useRef, useEffect } from "react";
import { services } from "../data/data";

export default function Offers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [width, setWidth] = useState(0);
  const length = services.length;

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
      className="relative h-screen overflow-hidden bg-[#1A2343] group"
    >
      <div ref={scrollRef} className=" flex  h-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide ">
        {services.map((item, i) => (
          <div
            key={i}
            className="snap-center shrink-0  w-screen h-screen flex items-center justify-center px-6"
            style={{ width: width }}
          >
            <div className="w-full max-w-6xl  bg-white/95 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.25)] flex flex-col md:flex-row">

              <div className="p-10 md:w-1/2">
                <span className="text-[#00A884] font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h2 className="text-4xl font-bold mt-4">
                  {item.title}
                </h2>

                <p className="mt-4 text-gray-600">{item.desc}</p>

                <div className="mt-6 w-16 h-1 bg-[#00A884]" />
              </div>

              <div className="md:w-1/2 h-[400px]">
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              scrollRef.current?.scrollTo({
                left: i * width,
                behavior: "smooth",
              });
            }}
            className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i
              ? "w-8 bg-[#00A884]"
              : "w-2 bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
}