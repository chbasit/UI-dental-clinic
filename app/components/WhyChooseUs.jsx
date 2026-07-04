"use client";

import {
  Sparkles,
  CalendarDays,
  HandHeart,
  Wand2,
  BadgeDollarSign,
  Smile,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Modern Technology",
    description:
      "Advanced equipment for accurate, efficient dental care.",
  },
  {
    icon: Wand2,
    title: "Trusted Expertise",
    description:
      "Experienced dentists committed to exceptional patient care.",
  },
  {
    icon: CalendarDays,
    title: "Easy Scheduling",
    description:
      "Book your appointment online in just a few clicks.",
  },
  {
    icon: BadgeDollarSign,
    title: "Honest Pricing",
    description:
      "Clear treatment costs with no hidden fees.",
  },
  {
    icon: HandHeart,
    title: "Comfort-Focused Care",
    description:
      "Gentle treatments designed to keep you relaxed.",
  },
  {
    icon: Smile,
    title: "Relaxing Experience",
    description:
      "Enjoy a welcoming environment throughout your visit.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F8F5F0] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">

        {/* Changed from lg:grid-cols-2 to lg:grid-cols-12 layout matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">

          {/* Left Side: Takes up 4 columns out of 12 (Saves space) */}
          <div className="lg:col-span-4  lg:top-8 ">
            <p className="text-[#111111] font-normal  text-4xl md:text-5xl lg:text-[64px] ">
              Experience Dental Care Done Differently
            </p>
          </div>

          {/* Right Side: Takes up 8 columns out of 12 (More breathing room for items) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex items-start gap-4 lg:gap-5"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#222222] flex items-center justify-center shrink-0 transition duration-300 group-hover:scale-105">
                    <Icon
                      size={24} // Slightly reduced from 34 to better fit the responsive round canvas layout
                      className="text-white"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="uppercase tracking-wide text-[#A24E36] font-semibold text-base md:text-lg leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[#1A1A1A] text-sm md:text-base leading-relaxed font-light opacity-90">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}