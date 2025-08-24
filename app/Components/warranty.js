"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WarrantySection() {
  const rows = [
    {
      heading: "Minimum period is one (1) year Warranty",
      paragraph:
        "SSS Co. is obliged to warrant all supplied equipment/devices for any possible factory defect/s excluding damages caused by misuse and force majeure.",
      images: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"],
    },
    {
      heading: "Individual Approach",
      paragraph:
        "It allows individuals, entrepreneurs and companies the opportunity to obtain everything that will provide an atmosphere of comfort, safety and security in residential locations, workplaces or public places.",
      images: ["/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg"],
    },
    {
      heading: "Modern Equipment",
      paragraph:
        "Spare parts availability will be up to ten (10) years prior to the discontinuation of every product that SSS Co. has been dealt with. An excellent service that clients have been aspiring from such contractor like us.",
      images: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"],
    },
  ];

  const sectionRefs = useRef([]);
  const textRefs = useRef([]);
  const imagesRefs = useRef([]);

 useEffect(() => {
  rows.forEach((_, index) => {
    // Move text upward on scroll
    if (textRefs.current[index]) {
      gsap.to(textRefs.current[index], {
        y: -150,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRefs.current[index],
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Animate images with slight float + rotate
    if (imagesRefs.current[index]) {
      imagesRefs.current[index].forEach((img, i) => {
        const direction = i % 2 === 0 ? -200 : 200;
        if (img) {
          gsap.to(img, {
            y: -150,
            x: direction,
            rotation: direction > 0 ? 40 : -40,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRefs.current[index],
              start: "top 60%",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }
  });
}, []);


  return (
    <section className="bg-black w-full lg:py-32 overflow-hidden relative">
      <div className="grid grid-cols-1 gap-10">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            ref={(el) => (sectionRefs.current[rowIndex] = el)}
            className="relative w-full text-white flex justify-center items-center h-[700px]"
          >
            {/* ✍️ Text */}
            <div
              ref={(el) => (textRefs.current[rowIndex] = el)}
              className="absolute z-[5] opacity-0 mx-auto bg-[#080808] p-6 rounded shadow text-center w-[70%] lg:w-[33%]"
            >
              <div className="w-16 h-16 border border-[#4183BF] rounded-full flex items-center justify-center text-xl font-oswald mb-4 mx-auto">
                <div className="w-4 h-4 border-2 border-[#4183BF]"></div>
              </div>
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-light font-oswald mb-3">
                {row.heading}
              </h2>
              <p className="text-white text-base font-oswald">
                {row.paragraph}
              </p>
            </div>

            {/* 🌌 Images */}
            <div className="absolute inset-0 z-[10] flex justify-center items-center pointer-events-none">
              <div className="grid grid-cols-2 gap-x-10">
                {row.images.map((src, i) => (
                  <div
                    key={i}
                    className="rotated-img"
                    ref={(el) => {
                      if (!imagesRefs.current[rowIndex])
                        imagesRefs.current[rowIndex] = [];
                      imagesRefs.current[rowIndex][i] = el;
                    }}
                  >
                    <Image
                      src={src}
                      alt={`img${rowIndex + 1}-${i + 1}`}
                      width={300}
                      height={200}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}