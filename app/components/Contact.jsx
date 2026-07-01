import React from 'react';

export default function VisitOurStudio() {
  const officeHours = [
    { day: 'Monday', time: '10am – 7pm' },
    { day: 'Tuesday', time: '10am – 7pm' },
    { day: 'Wednesday', time: '10am – 7pm' },
    { day: 'Thursday', time: '7am – 4pm' },
    { day: 'Friday', time: '7am – 4pm' },
    { day: 'Saturday', time: '7am – 3pm' },
  ];

  const mapLink = "https://www.google.com/maps?cid=14635826898866865110&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed";

  return (
    <div className="bg-[#F8F5F0] min-h-screen py-4 px-4 md:px-12 flex justify-center items-center  text-[#1A1A1A]">
      <div className="max-w-8xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Side: Large Studio Image Frame */}
        <div className="relative  overflow-hidden min-h-138 lg:min-h-full ">
          <img 
            src="./images/contact.webp" 
            alt="Avenue Dental chicago" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Clean Structured Info Box */}
        <div className="border border-[#1A1A1A] rounded-2xl p-8 md:p-12 flex flex-col justify-between ">
          
          <div>
            {/* Header Title */}
            <h2 className="text-4xl md:text-5xl font-normal  mb-6">
              Visit Our Studio
            </h2>
            
            {/* Description Text */}
            <p className="text-sm md:text-base font-normal leading-relaxed text-[#2C2C2C] max-w-xl">
              Avenue Dental is conveniently located in the West Town/ Ukrainian Village neighborhood of Chicago. <a href="/contact" className="underline underline-offset-4 hover:opacity-80 font-medium">Contact Us</a> or call <a href="tel:3123226882" className="underline underline-offset-4 font-medium">(312) 322 6882</a> for more details.
            </p>
          </div>

          {/* Thin Divider Line 1 */}
          <div className="border-t border-[#1A1A1A] my-8 w-full" />

          {/* Middle Row: Phone & Hours Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Phone Block */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Phone</span>
              <a href="tel:3123226882" className="text-base font-medium hover:opacity-70 transition-opacity">
                (312) 322-6882
              </a>
            </div>

            {/* Hours Block with left thin border line */}
            <div className="flex flex-col gap-2 md:border-l md:border-[#1A1A1A]/30 md:pl-8">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Hours</span>
              <ul className="text-sm space-y-1.5 font-normal">
                {officeHours.map((schedule, index) => (
                  <li key={index} className="flex gap-1">
                    <span className="font-semibold w-24">{schedule.day}:</span>
                    <span className="text-gray-700">{schedule.time}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Thin Divider Line 2 */}
          <div className="border-t border-[#1A1A1A] my-8 w-full" />

          {/* Bottom Row: Address & Google Maps Embed Viewport */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            
            {/* Address Block */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Address</span>
              <address className="not-italic text-sm leading-relaxed text-gray-800">
                1844 W Chicago Ave,<br />
                Chicago, IL 60622
              </address>
              <a 
                href={mapLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold underline underline-offset-4 inline-flex items-center gap-1 group mt-2"
              >
                Get Directions 
                <span className="inline-block transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            </div>

            {/* Visual Mini Map UI Container */}
            <div className="w-full h-50 rounded-lg overflow-hidden relative ">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.0763953556015!2d-87.67595562337775!3d41.89551466421453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d34b5b12301%3A0x4e2b915a95fa9c1b!2sAvenue%20Dental!5e0!3m2!1sen!2sus!4v1719820000000!5m2!1sen!2sus" 
                className="w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-300"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}