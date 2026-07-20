"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ShieldCheck, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    before: "/images/michael-before.webp",
    after: "/images/michael-after.webp",
    name: "Oliver",
    review:
      "This completely changed how I feel about going to the dentist. I've never had a dental visit like this—totally painless and my smile has never looked better.",
  },
  {
    before: "/images/Priscilla-before.webp",
    after: "/images/Priscilla-after.webp",
    name: "Lily",
    review:
      "I used to avoid the dentist. Now I actually look forward to it. From the moment I walked in, it felt different—more like a spa than a clinic. And the results? WOW.",
  },
  {
    before: "/images/Jordan-before.webp",
    after: "/images/Jordan-after.webp",
    name: "Leo",
    review:
      "Didn't expect to feel this good after a cleaning. I never knew how confident clean teeth could make me feel. It's not just cosmetic—it's a mindset shift.",
  },
  {
    before: "/images/Jordan-before.webp",
    after: "/images/Jordan-after.webp",
    name: "James",
    review:
      "Didn't expect to feel this good after a cleaning. I never knew how confident clean teeth could make me feel. It's not just cosmetic—it's a mindset shift.",
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
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
export default function Testimonials() {
  return (
    <section className="bg-[#fff] py-16 lg:py-20">
      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div className="text-center mb-14"
         variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}> 
          <p className="font-normal text-[#111] text-4xl md:text-5xl lg:text-5xl">
            With over 2,000 smiles designed and counting, <br/>there's nothing average about the result we deliver.
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={900}
          spaceBetween={24}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.05,
            },
            640: {
              slidesPerView: 1.3,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border border-[#133A34] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 h-full flex flex-col">

                {/* Images */}
                <div className="p-6 pb-4">

                  {/* BEFORE */}
                  <div className="relative h-[150px] overflow-hidden rounded-md">
                    <Image
  src={item.before}
  alt="Before"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>

                    <span className="absolute bottom-3 left-3 bg-[#DFF3EC] px-2 py-1 rounded text-[10px] tracking-[2px] uppercase">
                      Before
                    </span>
                  </div>

                  {/* AFTER */}
                  <div className="relative h-[150px] overflow-hidden rounded-md mt-3">
                    <Image
  src={item.after}
  alt="After"
  fill
  className="object-cover"
/>

                    <span className="absolute bottom-3 left-3 bg-[#DFF3EC] px-2 py-1 rounded text-[10px] tracking-[2px] uppercase">
                      After Radiate
                    </span>
                  </div>

                </div>

                {/* Review Content */}
                <div className="px-6 pb-6 flex-1 flex flex-col">

                  {/* Stars */}
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-black text-black"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-[#1A1A1A]  text-sm md:text-sm flex-1">
                    "{item.review}"
                  </p>

                  {/* The remaining part of the card continues in Part 2 */}
                                    {/* Reviewer */}
                  <div className="mt-6">
                    <h4 className="uppercase tracking-[2px] text-gray-800 font-normal text-lg">
                      {item.name}
                    </h4>

                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-800">
                      <ShieldCheck size={16} className="fill-black text-black" />
                      <span>Verified review</span>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Styling */}
        <style jsx global>{`
          .swiper {
            padding-bottom: 60px;
          }

          .swiper-pagination {
            bottom: 0 !important;
          }

          .swiper-pagination-bullet {
            width: 40px;
            height: 4px;
            border-radius: 999px;
            background: #cfcfcf;
            opacity: 1;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            width: 80px;
            background: #222;
          }

          @media (max-width: 768px) {
            .swiper-pagination-bullet {
              width: 25px;
            }

            .swiper-pagination-bullet-active {
              width: 50px;
            }
          }
        `}</style>
      </div>
    </section>
  );
}