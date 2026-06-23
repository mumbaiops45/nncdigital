"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "../data/data";

const Page = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative bg-gradient-to-b from-white via-sky-50/40 to-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/30 blur-[120px]" />

      <div ref={container} className="relative">
        {services.map((a, i) => (
          <Card
            key={a.k}
            data={a}
            index={i}
            progress={scrollYProgress}
            range={[i * (1 / services.length), 1]}
          />
        ))}
      </div>
    </section>
  );
};

function Card({ data, index, progress, range }) {
  return (
    <div className="sticky top-0 flex h-screen items-center justify-center px-4 md:px-8">
      <motion.div className="group relative w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-[#060b18] ">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="flex flex-col md:flex-row">
          <div className="flex w-full flex-col justify-center p-8 md:w-[55%] md:p-12">
            <span className="font-mono text-sm font-semibold tracking-widest text-green-400">
              {String(index + 1).padStart(2, "0")}
            </span>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-green-300/80">
              {data.tag}
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
              {data.title}
            </h3>

            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-300/90">
              {data.desc}
            </p>

            <div className="mt-8 h-[3px] w-12 rounded-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500 group-hover:w-32" />
          </div>

         
          {data.img && (
            <div className="w-full p-6 md:w-[45%] md:p-8">
              <CardImage src={data.img} alt={data.k} progress={progress} range={range} />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function CardImage({ src, alt, progress, range }) {
  const imageScale = useTransform(progress, range, [1.18, 1]);
  return (
    <div className="relative h-[260px] overflow-hidden rounded-3xl ring-1 ring-white/10 md:h-[400px]">
      <motion.img
        src={src}
        alt={alt}
        style={{ scale: imageScale }}
        className="h-full w-full object-cover will-change-transform"
      />
      
      
    </div>
  );
}

export default Page;