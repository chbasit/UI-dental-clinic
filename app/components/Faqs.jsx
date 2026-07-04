"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How soon can I book an appointment?",
      answer:
        "We strive to offer appointments within a few days, and same-day emergency visits are available whenever possible. Contact our office and we'll find the earliest convenient time for you.",
    },
    {
      question: "Do I need insurance?",
      answer:
        "No. We welcome both insured and uninsured patients. Our team will help you understand your coverage, explain treatment costs, and discuss flexible payment options if needed.",
    },
    {
      question: "What's included in my first visit?",
      answer:
        "Your first visit typically includes a comprehensive dental examination, digital X-rays if required, an oral health assessment, and a consultation where we discuss your treatment options and answer any questions.",
    },
    {
      question: "Do you treat anxious patients ?",
      answer:
        "Absolutely. We specialize in creating a calm and welcoming environment. Our gentle approach, clear communication, and comfort-focused care help patients feel relaxed throughout their visit.",
    },
    {
      question: "Do you offer emergency appointments.",
      answer:
        "Yes. We reserve time each day for dental emergencies such as severe tooth pain, broken teeth, swelling, or injuries. Please call us as early as possible for immediate assistance.",
    },
    {
      question: "Is your office eco-friendly?",
      answer:
        "Yes. We are committed to sustainable dentistry by using digital records, reducing paper waste, and incorporating environmentally conscious practices whenever possible.",
    },
  ];

  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3);

  const [openIndex, setOpenIndex] = useState(null);

  const renderFaqs = (items, offset = 0) =>
    items.map((faq, index) => {
      const currentIndex = index + offset;
      const isOpen = openIndex === currentIndex;

      return (
        <div
          key={currentIndex}
          className={`border-b border-[#D9D2C9] ${
            index === 0 ? "border-t border-[#D9D2C9]" : ""
          }`}
        >
          <button
            onClick={() =>
              setOpenIndex(isOpen ? null : currentIndex)
            }
            className="w-full flex justify-between items-center py-6 text-left"
          >
            <h3 className="text-lg md:text-xl font-normal pr-4">
              {faq.question}
            </h3>

            <ChevronDown
              className={`w-6 h-6 text-[#E29B9B] transition-transform duration-300 cursor-pointer ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300  cursor-pointer ${
              isOpen ? "max-h-40 pb-6" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 leading-7 pr-8">
              {faq.answer}
            </p>
          </div>
        </div>
      );
    });

  return (
    <section className="bg-[#F8F5F0] py-26 px-6 text-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-normal mb-16 tracking-wide leading-tight">
          Frequently Asked
          <br />
          Questions
        </h2>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
          <div>{renderFaqs(leftFaqs, 0)}</div>

          <div>{renderFaqs(rightFaqs, 3)}</div>
        </div>
      </div>
    </section>
  );
}