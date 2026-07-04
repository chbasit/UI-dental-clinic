"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Dynamic content array for the automatic slider
const slidesData = [
  {
  "id": 1,
  "title": "Advanced Oral Surgery & Premium Dental Care in Karachi",
  "description": "Experience world-class dental surgery tailored to your comfort. From complex extractions to smile transformations, our expert team ensures a seamless, pain-free recovery.",
  "buttonText": "Book Appointment",
  "imageSrc": "/images/header1.webp",
  "alt": "Advanced dental surgery and modern oral care at a premium clinic in Karachi"
},
  {
    id: 2,
    title: "Modern dental care, thoughtfully delivered.",
    description: "Airflow cleaning & whitening that removes stains and leaves your mouth feeling lighter, smoother, and visibly brighter.",
    buttonText: "Book A Visit",
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
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-90px)] flex items-center bg-[#1B1413] text-white overflow-hidden">
      
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
            <div className="absolute inset-0 bg-black/30 md:bg-gradient-to-r md:from-black/60 md:to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12 flex flex-col justify-between min-h-screen">
        
        <div className="my-auto max-w-2xl md:max-w-3xl">
           

          <h1 className="leading-[1.15] font-normal text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight transition-all duration-500">
            {slidesData[currentSlide].title}
          </h1>

          <p className="mt-6 text-white/90 leading-relaxed text-base sm:text-lg lg:text-2xl max-w-xl font-normal transition-all duration-500">
            {slidesData[currentSlide].description}
          </p>

          <button className="mt-8 mb-4 bg-white rounded-lg cursor-pointer px-8 py-3 text-md sm:text-lg   text-[#963f36] font-normal hover:scale-105 transition shadow-sm">
            {slidesData[currentSlide].buttonText}
          </button>
<p className="text-lg">
  Call us at <span className="underline"> +92 322 2182569</span>   or text us at <span className="underline"> +92 322 2182569 </span>
  </p>
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
<div className="absolute bottom-14 right-6 sm:right-12 lg:right-16">
  <div className="bg-transparent  py-4">
    
    <div className="flex items-center gap-3">
     
      <div className="flex text-[#ffffff] text-2xl leading-none">
        ★★★★★
      </div>
      <div className="bg-white rounded-3xl py-1">
       <Image
        src="/images/googlelogo.png"
        alt="Google"
        width={40}
        height={18}
      />
      </div>

   
    <p className="text-md  md:text-2xl text-white">
      100+ 5 - star Reviews
    </p>
    </div>
  </div>
</div>
     
      

      </div>
    </section>
  );
}