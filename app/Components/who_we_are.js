"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const historyData = [
  {
    heading: "We are SSS 'Engineers and Technicians'",
    description: `A Distinctive Pole And High Ranking Institution Which Is Attracting Clients’ Views Day By Day And Its Platform Of Services Is Progressively Getting Wider. SSS Is Giving A Total Coverage Of The Emerging Clients’ Needs Required In The Era Of Technology. Our Company Is Offering A Wide Range Of Services Which Represent An Outcome Of Years Of Experience And Promising Services.`,

    button: "Who We Are",
    
    image: "/whoweare.jpg",
  },
  {
    heading: "Our journey starts here",
    description: `Start your journey with us to boost productivity, optimize resources, and secure your IT environment. Let us guide you toward smarter solutions and lasting success.`,
    button: "Our Journey",
    image: "/vision.webp",
  },
];

export default function Who_we_are() {
  return (
    <section className="bg-[#E3E3E3] w-full mx-auto overflow-hidden">
      <div className="relative z-30 lg:-mt-10 block px-4">
        <div className="mx-auto bg-white rounded-t-3xl shadow-lg lg:py-10 py-8 w-full">
          {historyData.map((data, index) => (
            <div
              key={index}
              className={`flex w-full md:justify-between md:items-center justify-between flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              } py-6 md:py-10 space-y-6 md:space-y-0 md:px-8 px-5 lg:px-14`}
            >
              {/* Text Section */}
              <div className="max-w-full w-full md:w-[50%] lg:w-[55%] space-y-3">
                {/* Heading & Button Animation */}
                <motion.div
                  initial={{ x: index === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ amount: 0.5 }}
                >
                  <button className="bg-[#4183BF] text-white px-4 py-2 mb-3 rounded-full font-semibold text-sm text-center font-oswald">
                    {data.button}
                  </button>
                  <h3 className="font-bold text-[#000000] 2xl:text-5xl xl:text-3xl lg:text-3xl md:text-2xl text-xl leading-tight font-oswald pb-2">
                    {data.heading}
                  </h3>
                </motion.div>

                {/* Description Fade Zoom */}
                <motion.p
                  className="md:text-lg text-justify 2xl:text-xl text-sm text-[#555555] font-normal font-oswald"
                  style={{ wordSpacing: "2px" }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  viewport={{ amount: 0.5 }}
                >
                  {data.description}
                </motion.p>
              </div>

              {/* Image Section Animation */}
              <motion.div
                initial={
                  index === 0
                    ? { x: 100, opacity: 0 }
                    : { y: -100, opacity: 0 }
                }
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ amount: 0.5 }}
                className="lg:w-[40%] md:w-[50%] max-w-full"
              >
                <Image
                  src={data.image}
                  alt={data.heading}
                  width={400}
                  height={400}
                  className="w-full max-w-full object-cover rounded-lg"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}