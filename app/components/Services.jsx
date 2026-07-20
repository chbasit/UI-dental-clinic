"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

 
const services = [
  {
    title: "Teeth Cleaning & Whitening",
    image: "/images/category1.webp",
    description: "Deep cleaning followed by professional whitening for immediate result.",
    button: "Book Appointment",
  },
  {
    title: "Night time Aligners",
    image: "/images/category2.webp",
    description: "Straighten your teeth while you sleep. Includes full 3D scans and bite analysis.",
    button: "Schedule Consultation",
  },
  {
    title: "Gleamtox (New)",
    image: "/images/category3.webp",
    description: "Therapeutic facial treatment designed to relieve jaw tension.",
    button: "Schedule Consultation",
  },
  {
    title: "Airflow® Deep Clean",
    image: "/images/category4.webp",
    description: "Advanced, stain-removing technology. Maximum comfort, incredibly gentle.",
    button: "Book Clean",
  },
  {
    title: "Clinical Whitening",
    image: "/images/category2.webp",
    description: "Medical-grade whitening treatments developed  by dental experts.",
    button: "Book Treatment",
  },
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
export default function Services() {
  return (
    <section className="bg-[#fff] py-10">
      <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Heading */}
       <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <p className="font-normal text-[#1A1A1A] leading-none text-4xl md:text-5xl lg:text-5xl">
      Best Dental Surgeon
      <br />
      in San Anselmo, CA
    </p>
  </motion.div>

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: 0.2 }}
    className="lg:flex lg:justify-end pt-4"
  >
    <p className="text-[#1A1A1A] max-w-xl text-base md:text-lg lg:text-xl leading-snug font-normal">
      Elevated dentistry that honors the connection between your oral
      health and your body’s natural harmony.
    </p>
  </motion.div>
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
              <div className="bg-[#133A34] rounded-2xl  overflow-hidden border border-[#133A34] transition duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
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
                  <button className="w-full rounded-lg cursor-pointer bg-white py-2 uppercase tracking-[2px] font-medium text-[#2F2F2F] text-sm md:text-base transition duration-300 hover:bg-[#F1ECE5] hover:scale-[1.02]">
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