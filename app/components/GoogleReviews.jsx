"use client";

import { HeartHandshake } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-[#F8F5EF] py-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* ---------- First Row ---------- */}

        <div className="grid lg:grid-cols-3 gap-6 items-start">

          {/* Left Heading */}

          <div className="pt-6">
            <HeartHandshake
              size={58}
              strokeWidth={1.4}
              className="text-[#1F1B1A]"
            />

            <h2 className="mt-8 text-[24px] md:text-[52px] leading-[0.95] font-normal text-[#1F1B1A]">
              Dedicated 
              <br />
              Care
            </h2>
          </div>

          {/* Review 1 */}

          <TestimonialCard
            bg="#BFD6E5"
            radius="rounded-lg"
            name="Ayesha"
            text="Had an amazing experience at the dentist today. The staff were welcoming and made me feel comfortable right away. Highly recommend this place for anyone looking for quality dental care."
          />

          {/* Review 2 */}

          <TestimonialCard
            bg="#F5EEE3"
            radius="rounded-tr-[110px] rounded-lg"
            name="Mohsin"
            text="I had a wonderful experience here! The staff are incredibly friendly and truly care about their patients' well-being. As someone with dentist anxiety, I felt genuinely at ease here."
          />

        </div>

        {/* ---------- Second Row ---------- */}

        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          <TestimonialCard
            bg="#BFD6E5"
            radius="rounded-bl-[110px] rounded-lg"
            name="Noor"
            text="Aslam Dental Care is our one-stop shop for all our dental needs. They have a great team of professionals and have never failed in offering us a complete solution."
          />

          <TestimonialCard
            bg="#F5EEE3"
            radius="rounded-lg"
            name="Basit"
            text="I'm incredibly anxious when it comes to the dentist, but they got me through it. I can't imagine having a more patient and kind team to work with."
          />

          <TestimonialCard
            bg="#BFD6E5"
            radius="rounded-br-[110px] rounded-lg"
            name="Nida"
            text="Every single member of the team has been so delightful, knowledgeable and professional. If you're in search of a dentist that offers clarity and care, you'll find it here."
          />

        </div>

      </div>
    </section>
  );
}