"use client";

import Link from "next/link";
import Image from "next/image";
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
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Top Offer Bar */}
        <div className="bg-[#DBF6E9] text-center py-2">
          <p className="text-[11px] md:text-xs lg:text-sm tracking-[3px] font-medium uppercase text-gray-700">
            ✦ Wake Up To A Straighter Smile  ✦
          </p>
        </div>

        {/* Navbar */}
        <nav className="bg-[#FAF7F5]/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logi.png"
                alt="Avenue Dental"
                width={64}
                height={64}
                className="object-contain"
              />

              <div>
                <h1 className="text-xl md:text-2xl font-semibold tracking-wider leading-none text-[#963f36]">
                  Aslam Dental
                </h1>
                <p className="hidden md:block text-xl text-[#963f36] tracking-wider ">
                  care
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="uppercase text-sm tracking-wide text-gray-700 hover:text-black transition"
                >
                  {item}
                </Link>
              ))}

              <p className="text-gray-700 font-medium">
                 +92 3222182569
              </p>

              <button className="bg-[#963f36] text-white px-8 py-3 rounded-lg tracking-[2px] text-sm font-normal hover:bg-[#963f36] cursor-pointer transition">
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              open ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="bg-[#FAF5F7]/95 px-6 py-6 flex flex-col gap-5 shadow-md">
              {navItems.map((item) => (
                <Link
                  href="/"
                  key={item}
                  className="uppercase text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </Link>
              ))}

              <p className="font-medium">(312) 322-6882</p>

              <button className="bg-[#963f36] text-white rounded-lg py-3">
                Book Now
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer because navbar is fixed */}
      <div className="h-[112px] md:h-[112px]" />
    </>
  );
}