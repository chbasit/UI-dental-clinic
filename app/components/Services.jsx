"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

 
const services = [
  {
    title: "Cleaning & Whitening",
    image: "/images/category1.webp",
    description: "Your path to immediate results. Clean first, whiten better.",
    button: "Book Now",
  },
  {
    title: "Overnight Aligners",
    image: "/images/category2.webp",
    description: "3D scan, bite analysis, and custom aligner treatment.",
    button: "Book Consultation",
  },
  {
    title: "(New) Gleamtox",
    image: "/images/category3.webp",
    description: "A treatment to ease muscle tension and restore facial harmony.",
    button: "Book Consultation",
  },
  {
    title: "Airflow® Cleaning",
    image: "/images/category4.webp",
    description: "Powerful clean. Comfort-first tech. Gentle by design.",
    button: "Book Cleaning",
  },
  {
    title: "Advanced Whitening",
    image: "/images/category2.webp",
    description: "Dentist-developed whitening treatment.",
    button: "Book Whitening",
  },
];

export default function Services() {
  return (
    <section className="bg-[#F8F5F0] py-10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
          <div>
            <p className="font-normal text-[#1A1A1A] leading-none text-4xl md:text-5xl lg:text-5xl">
              Best Dental Surgeon
              <br />  
              in Karachi
            </p>
          </div>

          <div className="lg:flex lg:justify-end pt-4 ">
            <p className="text-[#1A1A1A] max-w-xl text-base md:text-lg lg:text-xl leading-snug font-normal">
              Expert-led, gentle care that supports your long-term
              health—because your mouth is connected to everything.
            </p>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={900}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1.15,
            },
            640: {
              slidesPerView: 1.6,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#6E8568] rounded-2xl  overflow-hidden border border-[#5D6B55] transition duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                {/* Title */}
                <div className="pt-6 px-5">
                  <h3 className="uppercase text-center text-white font-medium tracking-wide text-md md:text-lg min-h-[20px]">
                    {item.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="px-5 mt-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover "
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 px-6 py-6">
                  <p className="text-white text-center leading-relaxed text-base md:text-md min-h-[45px]">
                    {item.description}
                  </p>
                </div>

                {/* Button */}
                <div className="px-5 pb-6">
                  <button className="w-full rounded-full bg-white py-2 uppercase tracking-[2px] font-medium text-[#2F2F2F] text-sm md:text-base transition duration-300 hover:bg-[#F1ECE5] hover:scale-[1.02]">
                    {item.button}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}