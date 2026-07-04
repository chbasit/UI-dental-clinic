"use client";

import Image from "next/image";
import { Award, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#F8F5F0] py-12 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
           <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-white">
 <Image
  src="/images/fahad.png"
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

            <h2 className="text-3xl md:text-4xl leading-tight text-[#1F1F1F] mb-8">
              Compassionate Dental Care with
              <br />
              Modern Technology
            </h2>

            <p className="text-[#1A1A1A] leading-8 mb-6">
              <strong>Dr. Fahad Aslam</strong>  is a dedicated dentist with a BDS degree and four years of professional experience, making him a trusted name in dental care. Known as one of the best dentists in Karachi, Dr. Fahad Aslam is PMDC verified, ensuring his commitment to quality and excellence. You can easily book an appointment for a personal consultation or consult online through Meri Sehat for expert dental advice and treatment options. 
            </p>

           

            

            <button className="mt-10 bg-[#963f36] text-white px-8 py-3 rounded-lg hover:bg-[#A14D3D] transition">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}