"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Services",
    "Locations",
    "Packages",
    "About",
  ];

  return (
    <>
      {/* Top Offer Bar */}
      <div className="bg-[#DBF6E9] text-center py-2">
        <p className="text-[11px] md:text-xs lg:text-sm tracking-[3px] font-medium uppercase text-gray-700">
          ✦ Overnight Aligners: Up To $700 OFF ✦
        </p>
      </div>

      {/* Navbar */}
      <nav className="bg-[#FAF7F5] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-6">
            <h1 className="text-2xl md:text-3xl font-normal tracking-tight">
              Avenue
              <span className="ml-1">Dental</span>
            </h1>

            <p className="hidden lg:block text-gray-600 text-lg">
              (312) 322-6882
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-10">

            {navItems.map((item) => (
              <Link
                href="/"
                key={item}
                className="uppercase  text-gray-600 text-md hover:text-gray-500 transition"
              >
                {item}
              </Link>
            ))}

            <button className="bg-[#1F1B1A] text-white px-8 py-3 rounded-full uppercase tracking-[2px] text-sm font-semibold hover:bg-black transition">
              Book Now
            </button>

          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-5 bg-white">

            {navItems.map((item) => (
              <Link
                href="/"
                key={item}
                className="uppercase text-sm font-medium"
              >
                {item}
              </Link>
            ))}

            <button className="bg-[#1F1B1A] text-white rounded-full py-3 mt-3">
              Book Now
            </button>

          </div>
        </div>
      </nav>
    </>
  );
}