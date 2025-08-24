"use client";

export default function ContactPage() {
  return (
    <section className="px-12 flex items-center py-12 bg-white">
      <div className="flex flex-col md:flex-row justify-center items-center lg:items-start lg:space-x-28 md:space-x-16 space-x-0 space-y-4 lg:space-y-0 ">
        {/* LEFT COLUMN - OFFICE INFO */}
        <div className="lg:w-1/3 md:space-y-6 space-y-3">
        <div className="block">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-xl text-lg leading-loose font-oswald pb-2 text-[#4183BF] font-bold ">
                Our Offices
              </h2>
              </div>
          <div className="space-y-6  text-black leading-relaxed">
            <div>
              <h3 className="font-medium text-base md:text-lg xl:text-xl ">Prince Turki Al-Awwal Rd, Signature Center 2 – 2nd Floor, P.O. Box: 64006, Riyadh 11536, KSA</h3>
             
              <span className=" block py-2">
                 
                <a href="info@sss-lcs.com" className="text-[#4183BF] font-oswald lg:text-lg text-base">
                   info@sss-lcs.com
                </a>
              </span>
              <span className="block py-2" > +966 (11) 207-9557 </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <div className="lg:w-1/2 md:space-y-6 space-y-3">
        <div className="block">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-xl text-lg leading-loose font-oswald pb-2  text-black font-bold ">Contact Form</h2>
            </div>

          <p className="text-black mb-6 md:text-base text-sm">
            Please let us know a little more about your requirements so we can
            connect you with the most appropriate advisor.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4183BF] "
              />
              <input
                type="text"
                placeholder="Company Name"
                className="flex-1 p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4183BF]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4183BF]"
              />
              <input
                type="tel"
                placeholder="Telephone"
                className="flex-1 p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4183BF]"
              />
            </div>

            <textarea
              placeholder="Tell us more about your requirements"
              className="w-full p-3 h-32 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4183BF] resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#4183BF] hover:bg-white hover:border hover:border-[#4183BF] hover:text-[#4183BF] text-white px-8 py-3 rounded font-semibold transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
