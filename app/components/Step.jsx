import React from 'react';

const stepsData = [
  {
    id: 1,
    title: "Book in Seconds",
    description: "Reserve your desired service online in real time, no delays. Your goals and lifestyle shape everything we do next.",
    imageSrc: "/images/phone.webp", // Replace with your actual image path
    alt: "Booking a service on a smartphone"
  },
  {
    id: 2,
    title: "Meet Your Smile Strategist",
    description: "We begin with conversation, not a clipboard. Your goals, lifestyle, and preferences shape everything we do next.",
    imageSrc: "/images/step2.webp", // Replace with your actual image path
    alt: "Consulting with a smile strategist"
  },
  {
    id: 3,
    title: "Complimentary Comforts",
    description: "Therabody massage, aromatherapy, and noise-canceling headphones—built in, not billed extra.",
    imageSrc: "/images/step3.webp", // Replace with your actual image path
    alt: "Patient relaxing with therapeutic eye mask and massage gear"
  },
  {
    id: 4,
    title: "See the Results, Feel the Shift",
    description: "It's not just about your smile. It's about how you carry yourself when you leave. Lighter. Brighter. Fully cared for.",
    imageSrc: "/images/step4.webp", // Replace with your actual image path
    alt: "Smiling patient receiving gentle dental care"
  }
];

export default function Step() {
  return (
    <section className="bg-[#963F36] text-white py-16 px-4 sm:px-8 ">
      <div className="max-w-8xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl text-center font-normal tracking-tight mb-12">
          Preventative Dentistry Designed Around You
        </h2>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepsData.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center group">
              
              {/* Image Container with rounded corners */}
              <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-stone-200 shadow-md">
                <img 
                  src={step.imageSrc} 
                  alt={step.alt} 
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Step Counter */}
              <span className="text-sm md:text-2xl font-medium tracking-wide opacity-90 mb-1 block">
                Step {step.id}
              </span>
              
              {/* Step Title */}
              <h3 className="text-lg md:text-2xl font-normal mb-3 tracking-wide h-14 flex items-center justify-center">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-xs md:text-xl leading-relaxed font-light opacity-85 max-w-70">
                {step.description}
              </p>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}