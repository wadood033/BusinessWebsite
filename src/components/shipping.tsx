"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logisticsPartners = [
  { name: "DHL", src: "/dhllogo.png" },
  { name: "FedEx", src: "/fedexlogo.png" },
  { name: "UPS", src: "/upslogo.png" },
  { name: "TCS", src: "/tcslogo.png" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Shipping: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:w-1/2 text-center lg:text-left space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Seamless Shipping with Our Trusted Partners
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We partner with global logistics leaders to ensure timely and secure delivery of your products, anywhere in the world.
            </p>
            <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl mx-auto lg:mx-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                Why Choose Our Delivery?
              </h3>
              <ul className="text-gray-700 space-y-4 text-base md:text-lg">
                <li><span className="text-green-500 mr-2">✔</span> Worldwide Reach with real-time tracking</li>
                <li><span className="text-green-500 mr-2">✔</span> Safe Packaging & Secure Delivery</li>
                <li><span className="text-green-500 mr-2">✔</span> Fast Processing Times</li>
                <li><span className="text-green-500 mr-2">✔</span> 24/7 Support for shipping inquiries</li>
              </ul>
            </div>
          </motion.div>

          {/* Logo Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-8 justify-center items-center"
          >
            {logisticsPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-white p-6 shadow-lg rounded-xl transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <div className="relative w-36 h-20 md:w-44 md:h-24">
                  <Image src={partner.src} alt={partner.name} fill className="object-contain" />
                </div>
                <p className="mt-4 text-gray-800 font-semibold text-lg text-center">{partner.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Partner Bar */}
        <div className="mt-20 py-12 border-t border-gray-200">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
              Proud Logistics Collaborations
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
              {logisticsPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-lg p-3 px-6 shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="relative w-24 h-14 md:w-28 md:h-16 grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                    <Image src={partner.src} alt={partner.name} fill className="object-contain" />
                  </div>
                  <p className="ml-4 font-medium text-gray-700 hidden md:block">{partner.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
