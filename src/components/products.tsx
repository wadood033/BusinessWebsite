"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  { id: 1, name: "2 BUTTON JERSEY", image: "/2buttonjersey/02.jpg" },
  { id: 2, name: "HODDIES", image: "/hoddies/05.jpg" },
  { id: 3, name: "CREW NECK", image: "/crew_neck/010.jpg" },
  { id: 4, name: "FULL BUTTON WITH PANTS", image: "/fullbuttonwithpants/05.jpg" },
  { id: 5, name: "LS JERSEYS", image: "/lsjerseys/05.jpg" },
  { id: 6, name: "6 POCKET SHORTS", image: "/microfiber6pocketshorts/08.jpg" },
  { id: 7, name: "SOCCER JERSEY", image: "/soccerjersey/06.jpg" },
  { id: 8, name: "AMERICAN FOOTBALL UNIFORM", image: "/americanfootballuniforms/06.jpg" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Products: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20 px-4 md:px-6">
      {/* Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-12 text-center"
      >
        Our Products
      </motion.h2>

      {/* Product Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="relative w-full h-80 sm:h-96 bg-gray-100 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            {/* Product Image */}
            <div className="relative w-full h-full group">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover object-center transition-all duration-300 group-hover:brightness-75"
              />

              {/* Black Fade Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

              {/* Product Name */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center transition-all duration-300 group-hover:text-blue-400">
                <span className="text-white font-semibold text-lg sm:text-xl md:text-2xl tracking-wide">
                  {product.name}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Products;

