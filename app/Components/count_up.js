"use client";
import { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CountUp from "react-countup";
import { FaUsers, FaHandshake, FaBuilding, FaAward } from "react-icons/fa";
import { useRef } from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  },
};

const stats = [
  { value: 30, label: "team workers", icon: <FaUsers size={28} /> },
  { value: 100, label: "our clients", icon: <FaHandshake size={28} /> },
  { value: 3, label: "city offices", icon: <FaBuilding size={28} /> },
  { value: 20, label: "our awards", icon: <FaAward size={28} /> },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // 🔄 reset when out of view
    }
  }, [isInView, controls]);

  return (
    <section className="bg-black text-white md:px-8 px-5 lg:px-14 lg:py-20 md:py-10 py-5">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center space-y-3"
          >
            <div className="text-cyan-500">{stat.icon}</div>
            <h3 className="text-3xl font-bold">
              <CountUp end={stat.value} duration={2} key={isInView ? "visible" : "hidden"} />+
            </h3>
            <p className="uppercase text-sm font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}