'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const statisticsData = [
  { title: "Security Systems Integrator", value: 90 },
  { title: "ICT and Low Current Systems Supply and Installation", value: 80 },
  { title: "Public and Private Clients", value: 70 },
  { title: "Consultancy Services", value: 90 },
  { title: "Project Tendering", value: 80 },
  { title: "Maintenance Contract Proposals", value: 60 },
  { title: "Security Systems Surveys", value: 90 },
  { title: "Home Automation Proposals", value: 70 },
];

export default function StatisticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="bg-[#E3E3E3] w-full px-4 pb-10 md:pb-16 mx-auto"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        variants={fadeInUp}
        className="mx-auto bg-white rounded-b-xl shadow-lg py-8 md:py-14 md:px-8 px-5 lg:px-16 w-full"
      >
        <div className="text-center mb-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#4183BF] text-white px-6 py-2 mb-3 rounded-full font-semibold text-sm font-oswald tracking-wider"
          >
            Professionals
          </motion.button>
          <motion.h2
            variants={fadeInUp}
            custom={0}
            className="mt-4 text-xl md:text-3xl lg:text-4xl font-bold text-gray-900"
          >
            Our statistics
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 md:gap-x-8 lg:gap-x-16 md:gap-y-10 gap-y-7">
          {statisticsData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              custom={idx + 1}
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              className="space-y-2"
            >
              <div className="flex justify-between items-center text-sm md:text-base font-semibold text-black">
                <span>{item.title}</span>
                <span>{item.value}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.value}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: idx * 0.1 }}
                  className="h-full bg-[#4183BF] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
