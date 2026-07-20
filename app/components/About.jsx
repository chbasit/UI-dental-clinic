"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const doctors = [
  {
    id: "01",
    name: "Dr. Nikita Kazak",
    title: "Dentist",
    description:
      "Hi, I’m Dr. Kazak I know going to the dentist isn’t everyone’s favorite thing — so a big part of what I focus on is making it as comfortable and straightforward as possible.At Ross Valley Dental, we take the time to explain everything, stay on schedule, and treat you the way we’d want our family treated. love helping patients improve their smile — whether it’s something simple or a full transformation.Thanks for being here.",
    image: "/images/rossteam3.jpg",
  },
  {
    id: "02",
    name: "Cindy",
    title: "Registered Dental Hygienist",
    description:
      " If you’ve ever had a cleaning with Cindy, you know — she’s the perfect balance of gentle and thorough. She makes every visit comfortable while still delivering the kind of detailed care that keeps your smile truly healthy. Cindy is also always bringing the latest innovations into our practice — from Arestin and laser therapy to tools  — so our patients can benefit from the most up-to-date care available.",
          image: "/images/rossteam.jpg",
  },
  {
    id: "03",
    name: "Daisy",
    title: "Registered Dental Assistant",
    description:
      "Meet Daisy, our amazing Registered Dental Assistant! She’s truly skilled in all aspects of assisting in dentistry and plays a huge role in keeping our days running smoothly. She’s also the magic behind so many of our in-office whitening treatments — helping patients leave with brighter, more confident smiles. When she’s not in the office, you can find her crushing it at Tamalpais CrossFit.",
    image: "/images/rossteam2.jpg",
  },
  {
    id: "04",
    name: "Jessica",
    title: "Dental Assistant",
    description:
      "Jessica, one of our amazing Registered Dental Assistants! She started with us right after earning her Dental Assistant license, and just last month achieved her Registered Dental Assistant license — we’re so proud of her growth and dedication. Jessica is skilled in all aspects of assisting and is always ready to support both our team and our patients.",
    image: "/images/roosteam2.jpg",
  },
  {
    id: "05",
    name: "Cindy",
    title: "Office Manager",
    description:
      "Meet Cindy — our amazing Office Manager and the friendly face that keeps everything running smoothly! Fun fact: Cindy has actually been with our office longer than Dr. Kazak! She even assisted him back when he was an associate — so it’s safe to say she’s seen it all and knows this office inside and out. ",
    image: "/images/cindi.png",
  },
  {
    id: "06",
    name: "Lia",
    title: "Registered Dental Hygienist",
    description:
      "If you’ve had the pleasure of seeing Lia for your hygiene appointment, you already know why patients love her. Known for her gentle touch and caring approach, Lia has a way of making every visit comfortable and stress-free.Lia has been part of the Ross Valley Dental family since graduating from dental hygiene school.  ",
    image: "/images/lio3.png",
  },
];

export default function DoctorsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    doctors.forEach((doctor) => {
      const img = new window.Image();
      img.src = doctor.image;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % doctors.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
  };


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

  return (
    <section className="bg-[#fff]  py-4">
      <div className="max-w-[1450px] mx-auto px-4">
<motion.div
  className="max-w-3xl mx-auto text-center mb-14"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <motion.h2
    className="mt-3 text-[#1A1A1A] text-4xl md:text-5xl font-normal "
    variants={fadeUp}
  >
    Meet Our Team
  </motion.h2>

  <motion.p
    className="mt-6 text-gray-700 text-md md:text-lg leading-8"
    variants={fadeUp}
    transition={{ delay: 0.2 }}
  >
    Our dedicated team combines experience, compassion, and advanced
    dental expertise to provide exceptional care. We are committed to
    making every visit comfortable while helping you achieve a healthy,
    confident smile.
  </motion.p>
</motion.div>
        <div className="border-1 border-black rounded-xl overflow-hidden ">

          {/* Top Bar */}
          <div className="h-12 border-b-2 border-black"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={doctors[index].id}
              initial={{  x: 70 }}
              animate={{  x: 0 }}
              exit={{  x: -70 }}
              transition={{
                duration: 0.55,
                ease: "easeInOut",
              }}
              className="flex flex-col lg:flex-row"
            >
              {/* LEFT CONTENT */}

              <div className="w-full lg:w-[64%] px-7 md:px-12 lg:px-16 py-6 lg:py-8 order-2 lg:order-1">

                <div className="flex flex-col min-h-[400px] lg:h-[450px]">

                  <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-lg mb-4">
                    {doctors[index].id}
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                    {doctors[index].name}
                  </h2>

                  <h3 className="mt-2 text-xl md:text-2xl italic font-serif">
                    {doctors[index].title}
                  </h3>

                 <div className="mt-4 flex-1 overflow-y-auto pr-2">
  <p className="text-gray-700 text-sm md:text-lg leading-8 max-w-2xl">
    {doctors[index].description}
  </p>
</div>

                 <button className="mt-6 self-start bg-[#133A34] hover:bg-[#133A34] transition px-6 py-4 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl text-white">
  Book Appointment
</button>

                </div>

              </div>

              {/* RIGHT IMAGE */}

              <div className="relative w-full lg:w-[36%] order-1 lg:order-2">

                <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-full min-h-[420px]">

                  <Image
                    src={doctors[index].image}
                    alt={doctors[index].name}
                    fill
                    priority
                    className="object-cover"
                  />

                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Bottom Navigation */}

          <div className="border-t-2 border-black px-6 md:px-10 py-2 flex items-center justify-between flex-wrap gap-5">

            <div className="text-gray-700 text-sm">
              {index + 1} / {doctors.length}
            </div>

            <div className="flex gap-3">

              <button
                onClick={prev}
                className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={next}
                className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <ChevronRight size={20} />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}