"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { RiCustomerService2Fill, RiAwardFill, RiTruckFill, RiSettings3Fill } from "react-icons/ri"; 

const WhyChooseUs: React.FC = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 150;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
  }, []);

  return (
    <section ref={ref} className="relative w-full min-h-screen flex items-center justify-center bg-black text-white py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:to-transparent">
        <Image
          src="/factory.jpg"
          alt="Why Choose Us"
          fill
          className="object-cover object-center opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full text-left">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold tracking-wide text-white">Why Choose Us?</h1>
          <p className="text-lg text-gray-400 mt-4 max-w-xl">
            We ensure top-tier quality, fast service, and complete customer satisfaction in everything we do.
          </p>
        </motion.div>

        {/* Counter */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-8 text-7xl font-extrabold text-white"
        >
          +{count}
        </motion.div>
        <p className="text-lg text-gray-500">Companies Trust Us</p>

        {/* Features */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12"
        >
          <div className="flex flex-col items-start">
            <RiCustomerService2Fill className="text-5xl text-white mb-3" />
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-gray-400">Our experts are always available to assist you.</p>
          </div>

          <div className="flex flex-col items-start">
            <RiAwardFill className="text-5xl text-white mb-3" />
            <h3 className="text-xl font-semibold">Proven Excellence</h3>
            <p className="text-gray-400">Award-winning solutions backed by quality assurance.</p>
          </div>

          <div className="flex flex-col items-start">
            <RiTruckFill className="text-5xl text-white mb-3" />
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-gray-400">Timely and efficient order fulfillment.</p>
          </div>

          <div className="flex flex-col items-start">
            <RiSettings3Fill className="text-5xl text-white mb-3" />
            <h3 className="text-xl font-semibold">Custom Solutions</h3>
            <p className="text-gray-400">Tailored to meet your specific needs.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
