"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "CCTV Cameras", "Recorders", "Routers", "Switches"];

const products = [
  {
    id: 1,
    name: "Indoor Wi-Fi Camera",
    desc: "2K Pan-Tilt Indoor Wi-Fi Security Camera (16GB)",
    image: "/cam1.webp",
    hoverImage: "/cam1-1.webp",
    category: "CCTV Cameras",
  },
  {
    id: 2,
    name: "Indoor Wi-Fi Camera",
    desc: "2K Indoor Wi-Fi Security Camera (16GB)",
    image: "/cam2.webp",
    hoverImage: "/cam2-2.webp",
    category: "CCTV Cameras",
  },
  {
    id: 3,
    name: "Outdoor Wi-Fi Camera",
    desc: "4K Dual-Lens Wi-Fi Security Camera with Smart Security Lighting (32GB)",
    image: "/cam3.webp",
    hoverImage: "/cam3-3.webp",
    category: "CCTV Cameras",
  },
  {
    id: 4,
    name: "Outdoor Wi-Fi Camera",
    desc: "2K Pan-Tilt Outdoor Wi-Fi Security Camera (32GB)",
    image: "/cam4.webp",
    hoverImage: "/cam4-4.webp",
    category: "Recorders",
  },
  {
    id: 5,
    name: "Outdoor Wi-Fi Camera",
    desc: "4K Spotlight Indoor/Outdoor Wi-Fi 6 Security Camera (32GB, Cloud-Enabled)",
    image: "/cam5.webp",
    hoverImage: "/cam5-5.webp",
    category: "CCTV Cameras",
  },
  {
    id: 6,
    name: "Wired Smart Doorbell",
    desc: "Lorex 1080p Wi-Fi Video Doorbell (Wired, 32GB)",
    image: "/doorbill1.webp",
    hoverImage: "/doorbill1-1.webp",
    category: "Routers",
  },
  {
    id: 7,
    name: "Battery Smart Doorbell",
    desc: "Lorex 2K Wi-Fi Video Doorbell (Battery-Operated, 32GB, Cloud-Enabled)",
    image: "/doorbill2.webp",
    hoverImage: "/doorbill2-2.webp",
    category: "Switches",
  },
  {
    id: 8,
    name: "Wi-Fi Floodlight",
    desc: "Lorex 2K Wi-Fi Floodlight Security Camera (32GB, Cloud-Enabled)",
    image: "/fludlight1.webp",
    hoverImage: "/fludlight1-1.webp",
    category: "Routers",
  },
  {
    id: 9,
    name: "Wi-Fi Floodlight",
    desc: "Lorex 1080p Wi-Fi Floodlight Security Camera (32GB)",
    image: "/fludlight2.webp",
    hoverImage: "/fludlight2-2.webp",
    category: "Switches",
  },
];

export default function FilterGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  useEffect(() => {
    // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const boxes = gsap.utils.toArray(".product-box");

    boxes.forEach((box, index) => {
      const direction =
        index % 4 === 0
          ? { x: -100 }
          : index % 4 === 1
          ? { y: 100 }
          : index % 4 === 2
          ? { y: -100 }
          : { x: 100 };

      gsap.fromTo(
        box,
        { opacity: 0, ...direction },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play reverse play",
          },
        }
      );
    });
  }, [filteredProducts]);

  return (
    <section className="bg-[#E3E3E3] w-full mx-auto">
      <div className="relative z-30 lg:-mt-10 block px-4 pb-5 pt-5 lg:pt-0 lg:pb-10">
        <div className="mx-auto bg-white rounded-3xl shadow-lg lg:py-8 py-10 md:px-8 px-5 lg:px-14 w-full">
          <div className="max-w-full w-full">
            {/* Heading */}
            <div className="block md:py-4 lg:py-8 text-center">
              <h2 className="2xl:text-5xl xl:text-3xl lg:text-3xl md:text-2xl text-xl leading-loose font-oswald pb-2 text-[#4183BF] font-bold">
                Our Products
              </h2>
            </div>

            {/* Categories */}
             <div className="overflow-x-auto w-full scrollbar-none">
               <div className="flex md:flex-wrap flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-[#4183BF] scrollbar-track-gray-200 md:justify-center gap-3 lg:gap-6 xl:py-24 lg:py-16 md:py-12 py-8 px-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`flex-shrink-0 px-3 md:px-4 md:py-3 py-2 rounded-full md:text-base text-sm font-medium font-oswald border transition whitespace-nowrap ${
            activeCategory === cat
              ? "bg-white text-[#4183BF] border-[#4183BF]"
              : "border-white text-white bg-[#4183BF] hover:bg-white hover:text-[#4183BF] hover:border-[#4183BF]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
            </div>
            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-8 md:gap-4 lg:gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-box group relative overflow-hidden rounded-lg shadow-md transition"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 bg-[#e3e3e3ff]"
                  />
                  {product.hoverImage && (
                    <Image
                      src={product.hoverImage}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  )}

                  <div className="absolute bottom-0 left-0 w-full p-4 bg-transparent text-black transition-colors duration-300 group-hover:text-white">
                    <h3 className="font-semibold text-black text-base font-oswald md:text-lg group-hover:text-white">
                      {product.name}
                    </h3>
                    {product.desc && (
                      <p className="text-black font-oswald text-sm group-hover:text-white">
                        {product.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
