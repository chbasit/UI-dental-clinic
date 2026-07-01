"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Dynamic content array for the automatic slider
const slidesData = [
  {
    id: 1,
    tagline: "NEW GUEST OFFER",
    title: "GleamTox: Relief for Your Jaw. Definition for Your Profile.",
    description: "Precision-guided care that reduces clenching, improves symmetry, and enhances lower-face definition. New guests receive $10 per unit, ends this month.",
    buttonText: "BOOK NOW & SAVE",
    imageSrc: "/images/header1.webp", // Path to your provided image
    alt: "GleamTox jaw definition and clenching relief treatment"
  },
  {
    id: 2,
    tagline: "JULY 4TH OFFER: $125 OFF",
    title: "The most powerful cleaning & whitening",
    description: "Airflow cleaning & whitening that removes stains and leaves your mouth feeling lighter, smoother, and visibly brighter.",
    buttonText: "BOOK & SAVE $125",
    imageSrc: "/images/header2.webp", // Path to your second image
    alt: "Airflow advanced teeth cleaning and dynamic whitening"
  }
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect changing slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-80px)] flex items-center bg-[#1B1413] text-white overflow-hidden">
      
      {/* Background Image Slider Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.imageSrc}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
            {/* Soft dark overlay to keep high typography contrast readability */}
            <div className="absolute inset-0 bg-black/30 md:bg-gradient-to-r md:from-black/60 md:to-transparent" />
          </div>
        ))}
      </div>

      {/* Dynamic Text & Interactive Content Layer */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12 flex flex-col justify-between min-h-screen">
        
        {/* Main dynamic text content bucket */}
        <div className="my-auto max-w-2xl md:max-w-3xl">
          <p className="uppercase tracking-[3px] text-[#DDF5ED] font-normal text-xs sm:text-xl mb-4 transition-all duration-500">
            {slidesData[currentSlide].tagline}
          </p>

          <h1 className="leading-[1.15] font-normal text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight transition-all duration-500">
            {slidesData[currentSlide].title}
          </h1>

          <p className="mt-6 text-white/90 leading-relaxed text-base sm:text-lg lg:text-2xl max-w-xl font-normal transition-all duration-500">
            {slidesData[currentSlide].description}
          </p>

          <button className="mt-8 bg-white rounded-full px-8 py-3.5 text-xs sm:text-sm  tracking-[2px] text-[#963f36] font-semibold hover:scale-105 transition shadow-lg">
            {slidesData[currentSlide].buttonText}
          </button>

          {/* Dynamic Slider Pagination Dots */}
          <div className="flex gap-2.5 mt-12 items-center">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-[5px] rounded-full transition-all duration-500 ${
                  index === currentSlide ? "w-10 bg-[#DDF5ED]" : "w-3 bg-white/40 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

     
      

      </div>
    </section>
  );
}