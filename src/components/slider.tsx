"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const images: string[] = [
  "/homepage1.jpeg",
  "/homepage2.jpg",
  "/homepage3.jpg",
];

const Slider: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={600}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="w-full h-full relative">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                priority
                className="object-cover mt-20"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-3 sm:p-5 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 ease-in-out z-10">
        <FaChevronLeft className="text-lg sm:text-2xl" />
      </button>

      <button className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-3 sm:p-5 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 ease-in-out z-10">
        <FaChevronRight className="text-lg sm:text-2xl" />
      </button>

      <a
        href="https://web.whatsapp.com/send?phone=923277145151"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out z-20 flex items-center space-x-2"
      >
        <FaWhatsapp className="text-lg" />
        <span className="hidden sm:inline">Let&rsquo;s Talk Now</span>
      </a>

      <style jsx global>{`
        .swiper-container,
        .swiper-slide {
          width: 100% !important;
          height: 100vh !important;
        }

        .swiper-slide > div {
          position: relative;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 1024px) {
          .swiper-slide > div > span {
            top: 5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;
