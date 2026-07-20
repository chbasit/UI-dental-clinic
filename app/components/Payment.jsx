import React from "react";

export default function PaymentPlans() {
  return (
    <section className="bg-[#fff] text-[#1A1A1A] py-20 px-6 sm:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-[1450px] mx-auto">
        
        {/* Header Section */}
        <div className=" mb-16 text-center">
         
          <h2 className="font-normal text-[#1A1A1A] text-4xl md:text-5xl lg:text-5xl mb-6">
            Payment Plans
          </h2>
          <p className="text-[#1A1A1A] leading-relaxed text-base sm:text-lg lg:text-xl font-normal">
            At Avenue Dental we work with our patients to make beautiful, healthy smiles affordable and attainable! Dental care is a necessary part of overall health and well-being, thus we believe that financial considerations should not be an obstacle to getting the treatment you need and desire.
          </p>
        </div>

        {/* Financial Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Office Membership */}
          <div className="border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#DDF5ED]/40 transition duration-300">
            <div>
              <div className=" text-gray-900  font-bold text-lg  md:text-3xl mb-6">
                01
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
                Office Membership Discount Plan
              </h3>
              <p className="text-[#1A1A1A] text-sm sm:text-base leading-relaxed">
                Our in-house Dental Discount Plan is a great way to save money on your needed care for those without insurance.
              </p>
            </div>
            <button className=" mt-8 text-xs font-bold uppercase tracking-[2px] text-gray-900 bg-white px-5 py-2.5 rounded-full cursor-pointer  hover:scale-105 text-center gap-2">
              Learn More <span>→</span>
            </button>
          </div>

          {/* Card 2: CareCredit */}
          <div className=" border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#DDF5ED]/40 transition duration-300">
            <div>
              <div className="text-gray-900 font-bold text-lg md:text-3xl mb-6">
                02
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
                Financing Through CareCredit
              </h3>
              <p className="text-[#1A1A1A] text-sm sm:text-base leading-relaxed">
                We are a proud CareCredit participant for patients who prefer flexible third-party financing solutions.
              </p>
            </div>
            <a 
              href="https://www.carecredit.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-8 text-xs font-bold uppercase tracking-[2px] text-gray-900 bg-white hover:text-[#1B1413] hover:scale-105 cursor-pointer px-5 py-2.5 rounded-full transition text-center"
            >
              Visit CareCredit
            </a>
          </div>

          {/* Card 3: Insurance */}
          <div className=" border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#DDF5ED]/40 transition duration-300">
            <div>
              <div className="text-gray-900 font-bold text-lg md:text-3xl mb-6">
                03
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
                PPO Insurances
              </h3>
              <p className="text-[#1A1A1A] text-sm sm:text-base leading-relaxed">
                We accept all major PPO insurances to help maximize your benefits. Take a look at our full network list.
              </p>
            </div>
            <button className="mt-8 text-xs font-bold uppercase tracking-[2px] text-gray-900 bg-white hover:scale-105 transition px-6 py-3 rounded-full text-center font-bold">
              See Providers List
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}