  "use client";
 import Image from "next/image";
 import { FaTools, FaRocket, FaHandshake, FaGlobe } from "react-icons/fa";
 import { useEffect, useRef } from "react";
 import gsap from "gsap";
 import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

 const services = [
   {
      
     title: "Detailed Site Survey and Installation Planning",
     description:
       "Deep and thorough study that covers the site before starting the  project and providing the appropriate security kit, identification of the location and the gaps that we may face during the installation process in an effective and appropriate way. Issuing a comprehensive and detailed report explaining the progress of the project with full support for the accurate explanations and data that ensure transparent and accurate documentation of the project.",
     image: "/policy1.webp",
   },
   {
     title: "Skilled Professionals with Global Standards",
     description:
       "We are a team of highly skilled and qualified academic and field technicians. Our team works according to international standards and respects the client’s opinion as well as the project process. Our services are top in professionalism, quality and keeping pace with development. It is an open space and a fertile field of skill with periodic updating that depends on the latest of modern science.",
     image: "/policy2.webp",
   },
   {
      
     title: "Client-Focused Innovation and Flexibility",
     description: "Work on studying the needs of customers and starting from them to find solutions and alternatives that provide convenience and flexibility. We take the role of the client and see his specific needs and understand his concern as we predict his reactions and this is our secret to attract customers towards our services.",
     image: "/policy3.webp",
   },
   
 ];
 
export default function Vertical_Timeline() {
  
   const cardRefs = useRef([]);

  useEffect(() => {
  cardRefs.current.forEach((el, index) => {
    if (!el) return;

    const isLeftColumn = index % 2 === 0;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
          end: "bottom top",
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
    <section className="bg-[#E3E3E3]  px-4  w-full">
      <div className=" bg-black py-6 md:py-16 mx-auto md:px-8 px-5 lg:px-14 w-full overflow-hidden">
        {/* Content Section */}
        <div className="lg:py-8 py-4">
          <button className="bg-[#4183BF] text-white px-4 py-2 mb-3 rounded-full font-semibold text-sm text-center font-oswald">
            Our Mission
          </button>
          <h1 className="md:text-2xl text-lg lg:text-3xl xl:text-4xl font-light font-oswald py-4 text-white">
            Our Policy Is Based On Transparency, Clarity And A Thoughtful Prior
            Agreement Concerning Kinds Of Services And Strategies Of
            Application.
          </h1>

          <p className="leading-relaxed text-[#e2e2e2] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] font-oswald">
            Furthermore, We Are Transforming Abstract Thoughts And Imagination
            Into High Quality Services Implementing The Finest Technical Tools.
            We Help You Avoid The Trouble Of Research Providing You With A
            Variety Of Modern Technical And Electronic Services.
          </p>
        </div>
       <div className="grid md:grid-cols-2 md:gap-y-6 gap-y-3 gap-x-0 md:gap-x-6">
     {services.map((service, index) => (
   <div key={index} ref={(el) => (cardRefs.current[index] = el)}
  className="w-full overflow-hidden rounded-lg shadow hover:shadow-lg transition group bg-white">
  {/* Image Section */}
  <div className="w-full h-72 relative">
    <Image
      src={service.image}
      alt={service.title}
      width={600}
      height={300}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Text Section (below image) */}
   {/* Text Section (below image) */}
<div className="px-6 py-5 bg-[#0f0f0f] text-white border border-gray-700 rounded-b-lg shadow-inner">
  <h3 className="text-xl md:text-2xl font-semibold font-oswald text-[#4183BF] mb-2">
    {service.title}
  </h3>
  <p className="text-sm md:text-base font-poppins text-gray-200 leading-relaxed">
    {service.description}
  </p>
</div>
</div>

                 ))}
               </div>
      </div>
    </section>
  );
}