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
     
      <header className="fixed top-0 left-0 w-full z-50"> 
        <nav className="bg-[#fff] backdrop-blur-md shadow-sm">
          <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-14 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/ros.png"
                alt="Avenue Dental"
                width={64}
                height={64}
                className="object-contain"
              />

              <div>
                <h1 className="text-md md:text-2xl font-semibold tracking-wider leading-none text-[#133A34]">
                 Ross Valley
                </h1>
                <p className="block text-sm md:text-xl text-[#133A34] tracking-wider ">
                  Dental
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
                 (415) 454-5667
              </p>

              <button className="bg-[#133A34] text-white px-2 py-1 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl tracking-[2px] text-sm font-regular hover:bg-[#133A34] cursor-pointer transition">
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
            <div className="bg-[#Fff]/95 px-6 py-6 flex flex-col gap-5 shadow-md">
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

              <button className="bg-[#133A34] text-white rounded-lg py-3">
                Book Now
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer because navbar is fixed */}
      <div className="h-[70px] md:h-[80px]" />
    </>
  );
}