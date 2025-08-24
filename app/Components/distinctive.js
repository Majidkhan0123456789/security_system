"use client";
import { useState } from "react";

export default function Distinctive() {
  return (
    <section className="bg-black text-white font-oswald mx-auto md:px-8 px-5 lg:px-14 lg:py-16 md:py-10 py-7">
      {/* Vertical Timeline */}
      <div className="flex md:justify-center items-center lg:mb-10 md:mb-5 mb-2">
        <div className="relative flex flex-col items-center">
          {/* Top Circle */}
          <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-white border-4 border-black z-10" />

          {/* Line */}
          <div className="h-20 w-1 bg-white" />

          {/* Middle Circle + Horizontal Extension */}
          <div className="relative md:hidden block">
            {/* Middle Circle */}
            <div className="w-6 h-6 rounded-full bg-white border-2 border-black z-10 mx-auto" />

            {/* Horizontal Line + Right Circle + Label */}
            <div className="absolute left-full md:riht-full  top-1/2 transform -translate-y-1/2 flex items-center">
            <div className="h-1 w-6 bg-white z-10 md:hidden block" />
            <div className="w-4 h-4 rounded-full bg-white border-2 border-black block md:hidden z-10"/>
              <div className=" ml-6 mt-8 text-white text-md font-oswald font-semibold block md:hidden">
                explore
              </div>
              {/* ********************-------------*********************** */}
            </div>
          </div>
{/* Middle Circle + Left Extension for Laptop */}
<div className="relative md:block hidden">
  {/* Middle Circle */}
  <div className="w-6 h-6 rounded-full bg-white border-2 border-black z-10 mx-auto" />

  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 hidden md:flex items-center -translate-x-full">
  {/* Explore text */}
    <div className="mr-3 mt-8 text-white text-md font-oswald font-semibold">
      explore
    </div>
  {/* Small circle */}
    <div className="w-4 h-4 rounded-full bg-white border-2 border-black ml-1" />
  {/* Horizontal line */}
    <div className="h-1 w-6 bg-white" />
  
    
    
    

    
  </div>
</div>

          {/* Line */}
          <div className="h-20 w-1 bg-white" />

          {/* Bottom Circle */}
          <div className="md:w-10 md:h-10 h-7 w-7 rounded-full bg-white border-4 border-black z-10" />
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:py-8 md:py-4 py-2">
        <h1 className="md:text-2xl text-lg lg:text-3xl xl:text-4xl font-light font-oswald md:py-4 py-2">
          We Are SSS 'Engineers and Technicians'
        </h1>
        <h2 className="text-base md:text-base lg:text-lg xl:text-xl font-oswald md:py-4 py-2 lg:py-4 font-semibold">
          A Distinctive Pole And High Ranking Institution
        </h2>
        <p className="leading-relaxed text-[#e2e2e2] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] font-oswald">
          Which Is Attracting Clients’ Views Day By Day And Its Platform Of
          Services Is Progressively Getting Wider. SSS Is Giving A Total
          Coverage Of The Emerging Clients’ Needs Required In The Era Of
          Technology. Our Company Is Offering A Wide Range Of Services Which
          Represent An Outcome Of Years Of Experience And Promising Services.
        </p>
      </div>
    </section>
  );
}
