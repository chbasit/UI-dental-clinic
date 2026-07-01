import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F8f5f0] ">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl text-[#2A2A2A] font-semibold mb-5">
              Avenue Dental
            </h2>

            <p className="text-[#666] leading-7">
              Creating confident smiles through gentle, modern dental care.
              Our experienced team is committed to providing exceptional
              treatment in a comfortable and welcoming environment.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-[#DCCFC2] flex items-center justify-center hover:bg-[#C89078] hover:text-white transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-[#DCCFC2] flex items-center justify-center hover:bg-[#C89078] hover:text-white transition-all duration-300"
              >
                <FaInstagram size={16} />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-[#DCCFC2] flex items-center justify-center hover:bg-[#C89078] hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn size={16} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold text-[#2A2A2A] mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-[#666]">
              <li>
                <Link href="/" className="hover:text-[#C89078] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-[#C89078] transition">
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-[#C89078] transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[#C89078] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-[#2A2A2A] mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-[#666]">
              <li>General Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Dental Implants</li>
              <li>Teeth Whitening</li>
              <li>Emergency Dentistry</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-[#2A2A2A] mb-5">
              Contact
            </h3>

            <div className="space-y-5 text-[#666]">
              <div className="flex gap-3">
                <MapPin
                  className="text-[#C89078] mt-1 shrink-0"
                  size={20}
                />

                <p>
                  Avenue Dental
                  <br />
                  1844 W Chicago Ave
                  <br />
                  Chicago, IL 60622
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#C89078]" size={20} />

                <a
                  href="tel:3123226882"
                  className="hover:text-[#C89078] transition"
                >
                  (312) 322 6882
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#C89078]" size={20} />

                <a
                  href="mailto:info@avenuedental.com"
                  className="hover:text-[#C89078] transition"
                >
                  info@avenuedental.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-[#E6DDD3] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#777] text-center md:text-left">
            © {new Date().getFullYear()} Avenue Dental. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-[#666] hover:text-[#C89078] transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-[#666] hover:text-[#C89078] transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}