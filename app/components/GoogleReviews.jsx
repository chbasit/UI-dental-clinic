"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";

const testimonials = [
  {
    name: "Sarah",
    text: "Had an amazing experience at the dentist today. The staff were welcoming and made me feel comfortable right away. Highly recommend this place.",
  },
  {
    name: "Michal",
    text: "I had a wonderful experience here! The staff are incredibly friendly and truly care about their patients' well-being. As someone with dentist anxiety, I felt genuinely at ease here.",
  },
  {
    name: "Flip",
    text: "Ross Valley Dental is our one-stop shop for all our dental needs. They have a great team of professionals and have never failed in offering us a complete solution.",
  },
  {
    name: "Steve",
    text: "I'm incredibly anxious when it comes to the dentist, but they got me through it. I can't imagine having a more patient and kind team to work with.",
  },
  {
    name: "Sophie",
    text: "Every single member of the team has been so delightful, knowledgeable and professional. If you're in search of a dentist that offers clarity and care, you'll find it here.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#133A34] py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop
          speed={900}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-center">

                {/* LEFT */}
                <div className="lg:pr-12 lg:border-r border-white/15">

                  <p className="uppercase tracking-[4px] text-white text-xs">
                    Patient Stories
                  </p>

                  <div className="mt-12">
                    <div className="flex items-end gap-2">
                      <span className="text-2xl text-white font-normal">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>

                      <span className="text-white text-xl mb-2">
                        / {testimonials.length.toString().padStart(2, "0")}
                      </span>
                    </div>

                    <div className="w-12 h-px bg-white my-8" />

                    <h4 className="text-white tracking-[4px] uppercase">
                      {item.name}
                    </h4>

                    <div className="flex items-center gap-5 mt-10">

                      <button className="testimonial-prev text-white/70 hover:text-white transition">
                        <ChevronLeft size={22} />
                      </button>

                      <button className="testimonial-next text-white/70 hover:text-white transition">
                        <ChevronRight size={22} />
                      </button>

                      <div className="flex gap-3 ml-3">
                        {testimonials.map((_, i) => (
                          <span
                            key={i}
                            className={`h-[2px] w-7 transition-all duration-500 ${
                              active === i
                                ? "bg-white"
                                : "bg-white/20"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="lg:pl-10">

                  <Quote
                    size={42}
                    className="text-white mb-8 rotate-180"
                    strokeWidth={1.5}
                  />

                  <p className="text-white text-md md:text-xl leading-8 md:leading-10 max-w-4xl">
  {item.text}
</p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}