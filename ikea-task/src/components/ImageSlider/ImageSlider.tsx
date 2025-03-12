"use client";
import React, { useEffect, useRef, useState } from "react";
import './ImageSlider.css'
export const ImageSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const images = [
    "/IKEA_IF_03__844x480.jpg",
    "/Ikea_FreeDelivery_Feb_844x480.jpg"
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));

      if (sliderRef.current) {
        const offset = sliderRef.current.clientWidth * (currentIndex === 0 ? 1 : 0);
        sliderRef.current.scrollTo({ left: offset, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  return (
    <div className="h-[400px] mt-10">
      <div className="slider-wraper">
        <div className="slider"
        onMouseEnter={() => setIsPaused(true)}  // Pause auto-slide on hover
        onMouseLeave={() => setIsPaused(false)} 
         ref={sliderRef}>
          {images.map((src, index) => (
             <div key={index} className="slide">
             <img src={src} alt="" />
             <div className="slide-content">
               <p className="text-2xl text-white text-start">-20% на аксесоари</p>
               <p className="text-2xl text-white text-start">KOMPLEMENT с ИКЕА Family</p>
               <button className="rounded-full py-3 px-8 font-bold text-[12px] bg-white text-black">Виж повече</button>
             </div>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
};
