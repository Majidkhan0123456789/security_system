 "use client";
import Image from "next/image";
import { FaTools, FaRocket, FaHandshake, FaGlobe } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const services = [
  {
    icon: <FaTools size={32} />,
    title: "Reliable Support",
    description:
      "We believe in standing by our clients at every stage. Our expert support team is available to resolve issues quickly and professionally.",
    image: "/smart_lightbulb_cam.jpg",
  },
  {
    icon: <FaRocket size={32} />,
    title: "Innovative Technology",
    description:
      "Embracing the future, we integrate the latest tech to optimize workflows, reduce costs, and enhance overall efficiency.",
    image: "/dual_lens_cam.jpg",
  },
  {
    icon: <FaHandshake size={32} />,
    title: "Client-Centered Approach",
    description:
      "Your satisfaction is our mission. We prioritize clear communication, transparency, and delivering on our promises.",
    image: "/spotlight_cam.jpg",
  },
  {
    icon: <FaGlobe size={32} />,
    title: "Global Standards",
    description:
      "With a focus on international best practices, our services reflect quality, precision, and trust that go beyond borders.",
    image: "/doorbell.jpg",
  },
];

function CompanyGives() {
  
  const cardRefs = useRef([]);

  useEffect(() => {
  cardRefs.current.forEach((el, index) => {
    if (!el) return;

    const isLeftColumn = index % 2 === 0;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
        end: "top 30%",
        scrub: true,
      },
    });

    tl.fromTo(
      el,
      {
        opacity: 0,
        y: 150,
        x: isLeftColumn ? -100 : 100,
        rotateX: -45,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        rotateX: 0,
        ease: "power2.out",
        duration: 1,
      }
    );
  });
}, []);

  return (
    <section className="bg-black text-white font-oswald mx-auto md:px-8 px-5 lg:px-14 lg:pt-28 py-7 md:py-10 lg:pb-10">
      <div className="text-center mb-10">
        <h1 className="md:text-2xl text-lg lg:text-3xl xl:text-4xl font-bold">
          What We Give
        </h1>
      </div>

      <div className="grid md:grid-cols-2 md:gap-y-6 gap-y-3 gap-x-0 md:gap-x-6">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="relative w-full h-72 overflow-hidden rounded-lg shadow hover:shadow-lg transition group"
          >
            {/* Image */}
            <div className="relative w-full h-full">
              <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300"/>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center">
              <div className="px-6 py-4 text-white">
                <span className="lg:text-xl md:text-lg text-base font-bold py-2 block">
                  {service.icon}
                </span>
                <h3 className="xl:text-2xl lg:text-xl md:text-lg text-base py-2 font-oswald">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base font-oswald block">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompanyGives;
