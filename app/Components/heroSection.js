"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ title, subtitle, buttonText, showButton = true }) {
  const headingRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 70%",
        end: "bottom top",
        scrub: true,
      },
    });

    scrollTimeline
      .from(headingRef.current, {
        opacity: 0,
        y: 40,
        rotateX: -45,
        ease: "power2.out",
        duration: 1,
      })
      .to(
        headingRef.current,
        {
          scale: 1.2,
          y: -40,
          ease: "power2.out",
          duration: 1,
        },
        "+=0.2"
      )
      .to(
        videoRef.current,
        {
          scale: 1.5,
          ease: "power2.out",
          duration: 1,
        },
        "-=1"
      );
  }, []);

  return (
    <section className="relative w-full lg:h-[500px] md:h-[400px] h-auto py-20 flex flex-col justify-center items-center text-center px-10 overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="//domar.com/cdn/shop/videos/c/vp/dfca249eaa7d4a4c88b75e0092f22140/dfca249eaa7d4a4c88b75e0092f22140.SD-480p-1.5Mbps-19438992.mp4?v=0"
          type="video/mp4"
        />
        <img
          src="//domar.com/cdn/shop/files/preview_images/dfca249eaa7d4a4c88b75e0092f22140.thumbnail.0000000000_800x.jpg?v=1697279399"
          alt="Fallback poster"
        />
      </video>

      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10" />

      {/* ✨ Content */}
      <div className="text-white w-full md:w-[60%] z-20">
        <h1
          ref={headingRef}
          className="text-lg md:text-2xl lg:text-4xl xl:text-5xl font-extrabold mb-4 font-nunito"
        >
          {title}
        </h1>

        <p className="text-gray-400 text-base md:text-lg mb-6 font-nunito">
          {subtitle}
        </p>

        {showButton && (
          <button className="bg-gradient-to-r from-[#3B798A] to-[#73E7F3] font-nunito text-white px-3 md:px-6 py-2 text-sm md:text-base md:py-3 rounded-sm font-medium hover:opacity-90 transition">
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}
