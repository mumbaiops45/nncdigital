
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cards = [
  {
    id: "01",
    text: "Riverside modular living, Mumbai Thane",
  },
  {
    id: "02",
    text: "Northline family home, Bozeman Montana",
  },
  {
    id: "03",
    text: "Driftwood micro home, Cannon Beach Oregon",
  },
];

const page = () => {
  const images = [
    '/workflow.jpg',
    '/workflowp.png',
    '/hero1.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">


      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 z-0' : 'opacity-0'
            }`}
        >
          <div
            key={currentIndex}
            className="w-full h-full bg-cover bg-center animate-zoom"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
        </div>
      ))}


      <div className="absolute inset-0 bg-black/50 z-10"></div>


      <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 lg:px-16">

        <div className="w-full lg:w-1/2">
          <h1 className={`${notoSans.className} text-4xl md:text-4xl lg:text-4xl font-bold text-center lg:text-left leading-tight`}>
            Find Your Dream Home
            in Mumbai & Navi Mumbai
          </h1>
        </div>


        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-6 gap-4">

          <Link href="/about">
            <button className="px-6 py-3 bg-gray-700 hover:bg-white/40 rounded-full transition cursor-pointer">
              Explore our homes
            </button>
          </Link>

          <p className={`${notoSans.className}text-lg md:text-xl text-center lg:text-left uppercase `}>
            Welcome Realty LLP — Trusted Real Estate Experts helping you Buy, Sell, and Rent with complete confidence since 2009.
          </p>

        </div>


        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          {cards.map((card, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={card.id}
                className={`${notoSans.className} bg-black/30 shadow-md rounded-xl p-6 transition relative`}
              >
                <p className="text-white text-lg font-semibold">{card.id}</p>

                <p className="mt-2 text-white font-medium uppercase">
                  {card.text}
                </p>


                <div
                  className={`absolute left-6 bottom-4 h-[2px] bg-white transition-all duration-500 ${isActive ? "w-24 opacity-100" : "w-0 opacity-0"
                    }`}
                />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default page;