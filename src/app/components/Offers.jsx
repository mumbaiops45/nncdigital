"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { services } from "../data/data";

export default function Offers() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  const length = services.length;

  const moveTo = (i) => {
    const next = Math.max(0, Math.min(i, length - 1));

    setIndex(next);

    controls.start({
      x: `-${next * 100}vw`,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    });
  };


  const onDragEnd = (e, info) => {
    const threshold = 80;       
    const power = 500;       

    const { offset, velocity } = info;

    if (offset.x < -threshold || velocity.x < -power) {
      moveTo(index + 1);         
    } else if (offset.x > threshold || velocity.x > power) {
      moveTo(index - 1);       
    } else {
      moveTo(index);             
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-[#1A2343] group">

      <button
        onClick={() => moveTo(index - 1)}
        className={"absolute left-5 top-1/2 -translate-y-1/2 z-50 opacity-0 group-hover:opacity-100 transition  bg-white/20 backdrop-blur text-white w-12 h-12 rounded-full"}
      >
        ←
      </button>
      <button
        onClick={() => moveTo(index + 1)}
       className={"absolute right-5 top-1/2 -translate-y-1/2 z-50 opacity-0 group-hover:opacity-100 transition  bg-white/20 backdrop-blur text-white w-12 h-12 rounded-full"}
      >
        →
      </button>

      <motion.div
        animate={controls}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        dragMomentum={false}
        onDragEnd={onDragEnd}
        className="flex h-full w-full cursor-grab active:cursor-grabbing"
        style={{ touchAction: "pan-y" }}
      >
        {services.map((item, i) => (
          <div
            key={i}
            className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6"
          >
            <div className="w-full max-w-6xl bg-white rounded-[30px] overflow-hidden shadow-2xl flex flex-col md:flex-row">

              <div className="p-10 md:w-1/2">
                <span className="text-[#00A884] font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h2 className="text-4xl font-bold mt-4">
                  {item.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {item.desc}
                </p>

                <div className="mt-6 w-16 h-1 bg-[#00A884]" />
              </div>

              <div className="md:w-1/2 h-[400px] md:h-[400px]">
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt=""
                  draggable={false}
                />
              </div>

            </div>
          </div>
        ))}
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => moveTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-[#00A884]" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}