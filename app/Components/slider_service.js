"use client";
import Slider from "react-slick";
import Image from "next/image";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlus } from "react-icons/fa";
const services = [
  {
    title: "Security Systems",
    description: "Surveillance, alarms, and access control.",
    image: "/slider_service1.jpg",
  },
  {
    title: "Wired & Wireless Network Systems",
    description:
      "Our services include the provision of wireless networks according to the needs of customers whether...",
    image: "/slider_service2.jpg",
  },
  {
    title: "Home Automation System",
    description: "Smart home lighting, climate, and appliances control.",
    image: "/slider_service3.jpg",
  },
  {
    title: "Autometic Door System",
    description: "Surveillance, alarms, and access control.",
    image: "/slider_service4.jpg",
  },
  {
    title: "CCTV",
    description:
      "Our services include the provision of wireless networks according to the needs of customers whether...",
    image: "/slider_service5.jpg",
  },
  {
    title: "Electric Door Lock System",
    description: "Smart home lighting, climate, and appliances control.",
    image: "/slider_service6.jpg",
  },
];

export default function ServiceSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-black text-white py-10 lg:px-14 px-5 md:px-8  font-oswald ">
      <Slider {...settings}>
        {services.map((service, index) => (
           <div key={index} className="md:px-4 px-2">
  <div className="relative group rounded-md overflow-hidden shadow-lg">
    <Image  src={service.image}   alt={service.title}  width={500} height={300} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"/>
    {/* Overlay on Hover */}
    <div className="absolute inset-0 bg-blue-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-around flex-col px-4">
        <div className="transform -translate-y-10 group-hover:translate-y-0 transition-all duration-500 ">
        <div className="">
                 <p className="inline-block lg:text-base text-sm font-oswald font-semibold border border-white rounded-full px-4 py-1 mb-3">
                    {service.title}
                    </p>
                </div>
                </div>
                <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ">
      <FaPlus className="text-white text-xl font-light font-oswald mb-3 mx-auto" />
     </div> 
     <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ">
      <p className="text-white lg:text-lg md:text-base text-sm font-oswald font-normal leading-relaxed inline-block py-4">
        {service.description}
      </p>
      </div>
    </div>
  </div>
  
  {/* Bottom title outside hover group */}
  <div className="mt-3 text-center font-semibold md:text-lg text-base">
    {service.title}
  </div>
</div>

        ))}
      </Slider>
    </section>
  );
}
