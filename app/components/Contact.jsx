import React from 'react';

export default function VisitOurStudio() {
  const officeHours = [
    { day: 'Monday', time: '9am –  5:30pm (Lunch 1:00  –  2:00pm)' },
    { day: 'Tuesday', time: '9am –  5:30pm (Lunch 1:00  –  2:00pm)' },
    { day: 'Wednesday', time: '9am –  5:30pm (Lunch 1:00  –  2:00pm)' },
    { day: 'Thursday', time: '9am –  5:30pm (Lunch 1:00  –  2:00pm)' },
    { day: 'Friday', time: '9am –  2:00pm ' },
    { day: 'Saturday', time: 'By Appointment' },
    {day: 'Sunday', time:"closed"}
  ];


  return (
    <div className="bg-[#fff] py-16 px-4 md:px-10 lg:px-16">
  <div className="max-w-[1450px] mx-auto grid lg:grid-cols-2 items-start">

    <div className="border border-[#1A1A1A] rounded-2xl p-8 md:p-12 flex flex-col justify-between "> <div> 
     <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-wide leading-tight text-[#1A1A1A] "> Visit Our Clinic </h2> 
     <p className="text-sm md:text-base font-normal leading-relaxed text-gray-700 max-w-xl"> Ross Valley Dental is conveniently located at 915 Sir Francis Drake Blvd, Suite 1 San Anselmo, CA 94960. <a href="/contact" className="underline underline-offset-4 hover:opacity-80 font-medium">Contact Us</a> or call <a href="tel:(415) 454-5667" className="underline underline-offset-4 font-medium">(415) 454-5667</a> for more details. </p> </div> 
    <ul className="text-sm md:text-md space-y-3 font-normal mt-8"> 
            {officeHours.map((schedule, index) => ( <li key={index} className="flex "> 
              <span className="font-semibold w-24">{schedule.day}:</span> <span className="text-gray-700">
                {schedule.time}</span> </li> ))} </ul> 
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-end mt-4">       
         <div className="w-full h-70 rounded-lg overflow-hidden relative">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.8573306289363!2d-122.56898472423175!3d37.98045870028537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808597116faf9f9d%3A0x73f3d3561697cd4f!2s915%20Sir%20Francis%20Drake%20Blvd%20%231%2C%20San%20Anselmo%2C%20CA%2094960%2C%20USA!5e0!3m2!1sen!2s!4v1783232032356!5m2!1sen!2s"
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

    

      <h3 className="text-3xl md:text-5xl font-normal  text-[#1A1A1A] tracking-wide leading-tight">
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
          className="w-full rounded-lg bg-[#133A34] hover:bg-[#5d745] cursor-pointer text-white py-4 text-lg transition-all duration-300"
        >
          Book Appointment
        </button>

      </form>

    </div>

  </div>
</div>
  );
}