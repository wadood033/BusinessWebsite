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
    <section className="w-full bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Side: Text Content */}
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
              We understand the importance of reliable and efficient shipping. That's why we've partnered with leading logistics companies worldwide to ensure your orders are delivered safely and on time, every time.
            </p>
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl mx-auto lg:mx-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                Experience Hassle-Free Delivery
              </h3>
              <ul className="text-gray-700 space-y-4 text-base md:text-lg">
                <li><span className="text-green-500 mr-2">✔</span> Global Reach: Delivering to your doorstep, wherever you are.</li>
                <li><span className="text-green-500 mr-2">✔</span> Secure Handling: Ensuring your products arrive in perfect condition.</li>
                <li><span className="text-green-500 mr-2">✔</span> Real-time Tracking: Stay informed with up-to-the-minute delivery updates.</li>
                <li><span className="text-green-500 mr-2">✔</span> Dedicated Support: Our team is here to assist you with any shipping inquiries.</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side: Shipping Partner Logos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:w-1/2 grid grid-cols-2 gap-12 justify-center items-center"
          >
            {logisticsPartners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-full max-w-md"
              >
                <div className="relative w-40 h-24 md:w-48 md:h-28">
                  <Image src={partner.src} alt={partner.name} fill className="object-contain" />
                </div>
                <p className="mt-4 text-gray-800 font-semibold text-lg text-center">{partner.name}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Section for Emphasizing Partnerships */}
        <div className="mt-16 md:mt-24 py-12 border-t border-gray-200">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Proudly Partnering With Industry Leaders
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {logisticsPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center rounded-md py-3 px-6 shadow-sm ${
                    partner.name === "UPS" || partner.name === "FedEx" ? "" : "bg-white-100"
                  }`}
                >
                  <div className="relative w-24 h-14 md:w-32 md:h-18">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition duration-300"
                    />
                  </div>
                  <p className="ml-3 font-medium text-gray-700 hidden md:block">{partner.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;