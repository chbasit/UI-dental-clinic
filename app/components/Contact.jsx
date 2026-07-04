import React from 'react';

export default function VisitOurStudio() {
  const officeHours = [
    { day: 'Monday', time: '10am – 7pm' },
    { day: 'Tuesday', time: '10am – 7pm' },
    { day: 'Wednesday', time: '10am – 7pm' },
    { day: 'Thursday', time: '10am – 7pm' },
    { day: 'Friday', time: '10am – 7pm' },
    { day: 'Saturday', time: '10am – 7pm' },
  ];

  const mapLink = "https://www.google.com/maps/place/Jheel+Park+Rd,+Block+2+PECHS,+Karachi,+Pakistan/@24.8690089,67.0590852,17z/data=!4m15!1m8!3m7!1s0x3eb33e911ac9b255:0x28ac06104d71a0c2!2sJheel+Park+Rd,+Block+2+PECHS,+Karachi,+Pakistan!3b1!8m2!3d24.8690041!4d67.0616601!16s%2Fg%2F11h4yp7k_k!3m5!1s0x3eb33e911ac9b255:0x28ac06104d71a0c2!8m2!3d24.8690041!4d67.0616601!16s%2Fg%2F11h4yp7k_k?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D&source=embed";

  return (
    <div className="bg-[#F8F5F0] py-16 px-4 md:px-10 lg:px-16">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

    <div className="border border-[#1A1A1A] rounded-2xl p-8 md:p-12 flex flex-col justify-between "> <div> 
     <h2 className="text-4xl md:text-5xl font-normal mb-6"> Visit Our Clinic </h2> 
     <p className="text-sm md:text-base font-normal leading-relaxed text-[#2C2C2C] max-w-xl"> Aslam Dental Care is conveniently located at Bungalow 217, Opposite Jheel Park Rd, Delhi Mercantile Society, PECHS Block-03, Karachi, Pakistan. <a href="/contact" className="underline underline-offset-4 hover:opacity-80 font-medium">Contact Us</a> or call <a href="tel:03222182569" className="underline underline-offset-4 font-medium">03222182569</a> for more details. </p> </div> 
     <div className="border-t border-[#1A1A1A] my-8 w-full" /> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"> 
        {/* Phone Block */} <div className="flex flex-col gap-2"> 
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Phone</span> <a href="tel:3123226882" className="text-base font-medium hover:opacity-70 transition-opacity"> +92 3222182569 </a> </div>
           {/* Hours Block with left thin border line */} <div className="flex flex-col gap-2 md:border-l md:border-[#1A1A1A]/30 md:pl-8"> <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Hours</span> 
           <ul className="text-sm space-y-1.5 font-normal"> 
            {officeHours.map((schedule, index) => ( <li key={index} className="flex gap-1"> 
              <span className="font-semibold w-24">{schedule.day}:</span> <span className="text-gray-700">
                {schedule.time}</span> </li> ))} </ul> </div> </div> {/* Thin Divider Line 2 */} 
                <div className="border-t border-[#1A1A1A] my-8 w-full" />
                 {/* Bottom Row: Address & Google Maps Embed Viewport */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end"> 
                    {/* Address Block */} <div className="flex flex-col gap-3"> 
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Address</span> 
                      <address className="not-italic text-sm leading-relaxed text-gray-800"> Bungalow 217, Opposite Jheel Park Rd, Delhi Mercantile Society<br /> 
                      PECHS Block-03, Karachi, Pakistan. </address>
                       <a href={mapLink} target="_blank" rel="noopener noreferrer"
                        className="text-sm font-semibold underline underline-offset-4 inline-flex items-center gap-1 group mt-2" > 
                        Get Directions <span className="inline-block transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                         </a> </div> {/* Visual Mini Map UI Container */} 
           
         <div className="w-full h-56 rounded-lg overflow-hidden relative">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8489236635464!2d67.05908517529687!3d24.869008944915528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e911ac9b255%3A0x28ac06104d71a0c2!2sJheel%20Park%20Rd%2C%20Block%202%20PECHS%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1783150391144!5m2!1sen!2s"
    className="w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-300"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
  </div> 
                          </div>

    {/* RIGHT SIDE BOOKING FORM */}

    <div className="  p-8 lg:p-10">

    

      <h3 className="text-3xl md:text-5xl font-normal  text-[#1A1A1A]">
        Schedule Your Visit
      </h3>

      <p className="text-gray-700 mt-4">
        Fill out the form below and our team will contact you shortly to
        confirm your appointment.
      </p>

      <form className="mt-10 space-y-6">

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-[#6E8568]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-[#6E8568]"
          />

        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-[#6E8568]"
        />

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="date"
            className="w-full rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-[#6E8568]"
          />

          <select
            className="w-full rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-[#6E8568]"
          >
            <option>Select Treatment</option>
            <option>Dental Cleaning</option>
            <option>Teeth Whitening</option>
            <option>Dental Implants</option>
            <option>Invisalign</option>
            <option>Root Canal</option>
            <option>Emergency Care</option>
          </select>

        </div>

        <textarea
          rows={4}
          placeholder="Tell us about your concern..."
          className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none resize-none focus:border-[#6E8568]"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-[#963f36] hover:bg-[#5d745] cursor-pointer text-white py-4 text-lg transition-all duration-300"
        >
          Book Appointment
        </button>

      </form>

    </div>

  </div>
</div>
  );
}