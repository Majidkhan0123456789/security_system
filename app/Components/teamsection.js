 "use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { MdEmail, MdPhone } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Abdulaziz Fahad Al Thunayan",
    title: "CEO",
    email: "abdulaziz@sttc.com.sa",
    phone: "",
  },
  {
    name: "Abdulaziz Ismail",
    title: "Managing Director",
    email: "A.Ismail@sss-lcs.com",
    phone: "+966 56 101 3909",
  },
  {
    name: "A. Al-Kilani",
    title: "Head of Electrical Department",
    email: "a.alkilani@sss-lcs.com",
    phone: "+966 53 730 4897",
  },
  {
    name: "Mansoor Baig",
    title: "Project Manager & Consultant",
    email: "mansoor@sttc.com.sa",
    phone: "+966 53 931 7218",
  },
];

export default function TeamSection() {
const sectionRef = useRef(null);
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
          // toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        el,
        {
          opacity: 1,
          y: 150,
          y: isLeftColumn ? -100 :250,
          translateYY: 200,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          rotateX: 0,
          ease: "power2.out",
          duration: 1,
        
        }); });},[]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#E3E3E3] w-full px-4 lg:pb-20 md:pb-10 pb-5">
      <div className="relative z-30 block">
        <div className="mx-auto bg-white rounded-t-3xl shadow-lg lg:py-10 py-8 w-full">
          <div className="w-full lg:py-12 md:py-6 py-3 md:px-8 px-5 lg:px-14 overflow-hidden">
            <div className="w-full text-center">
              <motion.h2
              initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ amount: 0.5 }}
              className="md:text-xl lg:text-2xl xl:text-4xl font-extrabold text-black mb-4 font-oswald">
                At Security System Solution (SSS), our success is driven by the
                dedication and expertise of our talented team.
              </motion.h2>
              <motion.p initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  viewport={{ amount: 0.5 }}  className="text-black lg:text-lg text-sm md:text-base lg:mb-12 md:mb-6 mb-3 font-normal mx-auto font-oswald">
                Get to know the individuals behind our innovative security
                solutions: At SSS, we're more than just a team – we're a family
                united by a common goal: to provide unparalleled security
                solutions and peace of mind to our clients. Get to know us
                better and discover why SSS is the trusted choice for all your
                security needs.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center lg:py-10 md:py-6 py-3">
  {teamMembers.map((member, index) => (
    <div
      key={index}
      ref={(el) => (cardRefs.current[index] = el)}
      className="team-card bg-white hover:shadow-lg md:p-4 lg:p-6 rounded-lg transition transform hover:scale-105 duration-300 w-[90%] max-w-xs"
    >
      <div className="w-24 h-24 mx-auto mb-6">
        <Image
          src="/avatar.webp"
          alt="avatar"
          width={100}
          height={100}
          className="h-24 w-24 rounded-full"
        />
      </div>
      <h3 className="text-lg font-semibold text-black font-oswald text-center">
        {member.name}
      </h3>
      <hr className="my-3 border-[#A1A1A1]" />
      <span className="text-[#6E6E6E] my-2 font-oswald md:text-[14px] sm:text-sm text-center block">
        {member.title}
      </span>
      <div className="flex items-center justify-center space-x-3 my-2">
        <MdEmail className="text-lg text-[#757575]" />
        <span className="lg:text-[18px] md:text-[16px] text-[14px] font-oswald text-[#757575]">
          {member.email}
        </span>
      </div>
      {member.phone && (
        <div className="flex items-center justify-center gap-1 my-2">
          <MdPhone className="text-lg text-[#757575]" />
          <span className="lg:text-[18px] md:text-[16px] text-[14px] font-oswald text-[#757575]">
            {member.phone}
          </span>
        </div>
      )}
    </div>
  ))}
</div>

          </div>
        </div>
      </div>
    </section>
  );
}