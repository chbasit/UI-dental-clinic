"use client";

import Image from "next/image";
import { Award, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#F8F5F0] py-20 lg:py-28">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
           <div className="relative h-[500px] md:h-[600px] rounded-xl overflow-hidden bg-white">
 <Image
  src="/images/about.png"
  alt="Dr. Alexis Youn"
  fill
  className="object-cover object-top"
/>
</div>

            
          </div>

          {/* Content */}
          <div>
            <p className="uppercase tracking-[4px] text-[#1A1A1A]text-sm mb-4">
              Meet Your Dentist
            </p>

            <h2 className="text-4xl md:text-5xl leading-tight text-[#1F1F1F] mb-8">
              Compassionate Dental Care with
              <br />
              Modern Technology
            </h2>

            <p className="text-[#1A1A1A] leading-8 mb-6">
              <strong>Dr. Alexis Youn, DDS</strong> is a highly regarded general
              dentist serving patients at Avenue Dental in Chicago's West
              Town/Ukrainian Village neighborhood. She provides comprehensive
              dental care with a focus on patient comfort, long-term oral
              health, and beautiful smiles. 
            </p>

            <p className="text-[#1A1A1A] leading-8 mb-10">
              With advanced training in same-day CEREC crowns, cosmetic
              dentistry, dental implants, and Invisalign®, Dr. Youn combines
              state-of-the-art technology with a gentle, personalized approach
              to help every patient achieve lasting confidence in their smile.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-[#E7DDD3]">
                <Award className="text-[#1A1A1A] mb-4" size={30} />
                <h4 className="font-normal mb-2">
                  Advanced Training
                </h4>
                <p className="text-sm text-[#1A1A1A]">
                  Same-day crowns, implants & Invisalign.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E7DDD3]">
                <ShieldCheck className="text-[#1A1A1A] mb-4" size={30} />
                <h4 className="font-normal mb-2">
                  Gentle Care
                </h4>
                <p className="text-sm text-[#1A1A1A]">
                  Comfortable treatment focused on every patient.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E7DDD3]">
                <Sparkles className="text-[#1A1A1A] mb-4" size={30} />
                <h4 className="font-normal mb-2">
                  Beautiful Smiles
                </h4>
                <p className="text-sm text-[#1A1A1A]">
                  Cosmetic and restorative dentistry for lasting confidence.
                </p>
              </div>
            </div>

            <button className="mt-10 bg-[#B85A48] text-white px-8 py-4 rounded-full hover:bg-[#A14D3D] transition">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}