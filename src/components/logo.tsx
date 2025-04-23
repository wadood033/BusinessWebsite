"use client";

import Image from "next/image";

const ThreeImagesRow: React.FC = () => {
  return (
    <section className="w-full flex  pt-5">
      {/* Image 1 */}
      <div className="w-1/3 h-[200px] relative">
        <Image
          src="/chamber.png"
          alt="Chamber"
          fill
          className="object-contain bg-transparent"
        />
      </div>

      {/* Image 2 */}
      <div className="w-1/3 h-[200px] relative">
        <Image
          src="/psga.jpeg"
          alt="PSGA"
          fill
          className="object-contain bg-transparent"
        />
      </div>

      {/* Image 3 */}
      <div className="w-1/3 h-[200px] relative">
        <Image
          src="/prgmea.jpg"
          alt="PRGMEA"
          fill
          className="object-contain bg-transparent"
        />
      </div>
    </section>
  );
};

export default ThreeImagesRow;
