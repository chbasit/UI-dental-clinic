"use client";

import React, { useState } from "react";

const insurances = [
  "Aetna PPO", "Ameritas", "Assurant (DHA) Insurance Co", "Blue Cross/Blue Shield PPO",
  "Cigna PPO", "Delta Dental PPO", "Delta Dental Premier", "Dental Health Alliance (DHA) PPO",
  "Dental Network of America", "Dentamax Network", "First Commonwealth PPO", "GE Life",
  "Great West", "Guardian", "Humana PPO", "Humana Comp Benefits", "Lincoln Financial Group",
  "Logistics Health Inc.", "Maverest Dental Network", "Met Life", "Mutual of Omaha",
  "Olympia", "Preferred Plan PPO", "Principal Financial Group", "Sun Life", "Unicorn",
  "United Concordia", "United Health Care", "Wellpoint"
];

export default function AcceptedInsurances() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter functionality to make it interactive and user-friendly
  const filteredInsurances = insurances.filter((insurance) =>
    insurance.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-[#963F36] text-white py-20 px-6 sm:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <p className="uppercase tracking-[3px] text-[#DDF5ED] font-semibold text-xs sm:text-sm mb-4">
              Seamless Processing
            </p>
            <h2 className=" font-normal text-white text-4xl md:text-5xl lg:text-5xl mb-4">
              Accepted Insurances
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              We accept and maximize benefits for all major PPO insurance networks. If you don't see your specific provider below, reach out to our team to verify your coverage.
            </p>
          </div>

          {/* Inline Live Search Filter Bar */}
          <div className="w-full md:max-w-xs relative">
            <input
              type="text"
              placeholder="Search your insurance..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#DDF5ED]/50 transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Insurance Display Grid */}
        {filteredInsurances.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredInsurances.map((provider, index) => (
              <div 
                key={index}
                className="bg-white/[0.02] border border-white/5 rounded-xl p-4 sm:p-5 flex items-center gap-3.5 hover:bg-white/[0.04] hover:border-white/10 transition duration-200 group"
              >
                {/* Accent Checkmark Icon */}
                <div className="w-5 h-5 rounded-full bg-[#DDF5ED]/10 flex items-center justify-center flex-shrink-0 text-[#DDF5ED] group-hover:bg-[#DDF5ED] group-hover:text-[#1B1413] transition duration-300">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <span className="text-sm font-medium tracking-wide text-white/90 group-hover:text-white transition">
                  {provider}
                </span>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search Fallback State */
          <div className="text-center py-12 border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
            <p className="text-white/40 text-sm">No insurance providers found matching "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-3 text-xs text-[#DDF5ED] underline tracking-wider font-semibold uppercase"
            >
              View Full List
            </button>
          </div>
        )}

        {/* Notice Disclaimer Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-white/60">
            <span className="text-[#DDF5ED] font-medium">Please note:</span> Insurance policies change frequently. We recommend confirming coverage parameters directly with your carrier before scheduling procedures.
          </p>
          <button className="text-xs font-bold uppercase tracking-[2px] text-[#1B1413] bg-white hover:bg-[#DDF5ED] transition px-5 py-2.5 rounded-full flex-shrink-0">
            Ask Our Team
          </button>
        </div>

      </div>
    </section>
  );
}