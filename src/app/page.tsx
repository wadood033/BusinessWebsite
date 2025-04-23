import Slider from "@/components/slider"; // Import Swiper slider component
import Shipping from "@/components/shipping"; // Import Shipping section
import Products from "@/components/products"; // Import Products section
import Whyus from "@/components/whyus"; // Import Whyus section
import Logo from "@/components/logo"; // Import Logo section

import "./globals.css";

export default function Home() {
  return (
    <section className="w-screen min-h-screen overflow-hidden">
      {/* Slider Section */}
      <div className="w-full h-screen">
        <Slider />
      </div>

      {/* Shipping Section */}
      <div className="w-full min-h-screen">
        <Shipping />
      </div>

      {/* Products Section */}
      <div className="w-full min-h-screen">
        <Products />
      </div>

      {/* Whyus Section */}
      <div className="w-full min-h-screen">
        <Whyus />
      </div>

      {/* Logo Section */}
      <div className="w-full min-h-[240px]">
        <Logo />
      </div>

    
     
    </section>
  );
}
