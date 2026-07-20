"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slidesData = [
  {
  "id": 1,
  "title": "Advanced Oral Surgery in  San Anselmo, CA ",
  "description": "Experience world-class dental surgery tailored to your comfort. From complex extractions to smile transformations, our expert team ensures a seamless, pain-free recovery.",
  "buttonText": "Book Appointment",
  "imageSrc": "/images/fullimage.jpg",
  "alt": "Advanced dental surgery and modern oral care at a premium clinic in Karachi"
},
  {
    id: 2,
    title: "Modern dental care, thoughtfully delivered.",
    description: "Airflow cleaning & whitening that removes stains and leaves your mouth feeling lighter, smoother, and visibly brighter.",
    buttonText: "Book A Visit",
    imageSrc: "/images/header1.webp", // Path to your second image
    alt: "Airflow advanced teeth cleaning and dynamic whitening"
  }
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};
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
    <section className="relative w-full h-[calc(100vh-80px)] flex items-center bg-[#1B1413] text-white overflow-hidden">
      
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

      <div className="relative z-20 w-full max-w-[1450px] mx-auto px-6 sm:px-12 lg:px-16 py-12 flex flex-col justify-between min-h-screen">
        
        <div className="my-auto max-w-2xl md:max-w-2xl"
        
        >
<AnimatePresence mode="wait">
  <motion.div
    key={currentSlide}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="max-w-2xl"
  >
    {/* Title */}
    <motion.h1
      variants={fadeUp}
      custom={0}
      className="leading-[1.15] font-normal text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight"
    >
      {slidesData[currentSlide].title}
    </motion.h1>

    {/* Description */}
    <motion.p
      variants={fadeUp}
      custom={0.35}
      className="mt-6 text-white/90 leading-relaxed text-base sm:text-lg lg:text-2xl max-w-xl"
    >
      {slidesData[currentSlide].description}
    </motion.p>

    {/* Button */}
    <motion.button
      variants={fadeUp}
      custom={0.7}
      className="mt-8 mb-4 bg-white py-3 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl cursor-pointer px-6 text-md sm:text-lg text-[#133A34] hover:scale-105 transition"
    >
      {slidesData[currentSlide].buttonText}
    </motion.button>

    {/* Call Us */}
    <motion.p
      variants={fadeUp}
      custom={1.05}
      className="text-lg"
    >
      Call us at{" "}
      <span className="underline">(415) 454-5667</span> or text us at{" "}
      <span className="underline">(415) 454-5667</span>
    </motion.p>
  </motion.div>
</AnimatePresence>

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
<div className="absolute bottom-18 right-6 sm:right-12 lg:right-16">
  <div className="bg-white rounded-3xl   py-2 px-3">
    
    <div className="flex items-center gap-3 ">
     
      
       
       <Image
        src="/images/googlelogo.png"
        alt="Google"
        width={40}
        height={18}
      />
       
<div className="flex text-yellow-500 text-xl leading-none">
       5 ★★★★★
      </div>
   
    <p className="text-md  md:text-xl text-[#133A34] ">
      100 Reviews
    </p>
    </div>
  </div>
</div>
     
      

      </div>
    </section>
  );
}
 