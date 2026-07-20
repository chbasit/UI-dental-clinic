"use client"
import React from 'react';
import { motion } from "framer-motion";
const stepsData = [
  {
    id: 1,
    title: "Book in Seconds",
    description: "Seamlessly reserve your visit online in real time. We skip the tedious paperwork so your experience starts smoothly before you even walk through our doors.",
    imageSrc: "/images/phone.webp", // Replace with your actual image path
    alt: "Booking a service on a smartphone"
  },
  {
    id: 2,
    title: "Meet Your Smile Strategist",
    description: "We begin with a genuine conversation, not a clinical checklist. Your comfort, lifestyle, and personal goals shape every aspect of the care we design for you.",
    imageSrc: "/images/category2.webp", // Replace with your actual image path
    alt: "Consulting with a smile strategist"
  },
  {
    id: 3,
    title: "Complimentary Comforts",
    description: "Elevate your visit with built-in luxuries. Enjoy Therabody massage therapy, calming aromatherapy, and noise-canceling headphones at no extra cost.",
    imageSrc: "/images/step3.webp", // Replace with your actual image path
    alt: "Patient relaxing with therapeutic eye mask and massage gear"
  },
  {
    id: 4,
    title: "See the Results, Feel the Shift",
    description: "Experience a total mindset shift. Our precise, gentle care leaves your mouth feeling lighter, your smile visibly brighter, and your confidence completely renewed.",
    imageSrc: "/images/step4.webp", // Replace with your actual image path
    alt: "Smiling patient receiving gentle dental care"
  }
];
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};
export default function Step() {
  return (
    <section className="bg-[#133A34] text-white py-16 px-4 sm:px-8 ">
      <div className="max-w-8xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
        variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}>
        <h2 className="text-3xl md:text-5xl text-center font-normal tracking-wide leading-tight mb-12">
          Your Journey to a Brighter Smile Starts Here
        </h2>
        </motion.div>
        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" >
          {stepsData.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center group">
              
              {/* Image Container with rounded corners */}
              <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-stone-200 shadow-md">
                <img 
                  src={step.imageSrc} 
                  alt={step.alt} 
                  className="w-full h-auto md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Step Counter */}
              <span className="text-sm md:text-2xl font-medium tracking-wide mb-1 block">
                Step {step.id}
              </span>
              
              {/* Step Title */}
              <h3 className="text-lg md:text-2xl font-normal mb-3 tracking-wide h-14 flex items-center justify-center">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-md md:text-lg leading-relaxed text-white max-w-70">
                {step.description}
              </p>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}