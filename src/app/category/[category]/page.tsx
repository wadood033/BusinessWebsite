"use client";

import { useParams } from "next/navigation";
import { categoryData } from "../../lib/categoryData";
import Image from "next/image";

// Define type for category route parameter
interface Params {
  category?: string;
}

const CategoryPage = () => {
  const params = useParams() as Params;
  const category = params.category || "";
  const data = categoryData[category];

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center p-10">
        <h1 className="text-3xl font-bold">Category Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center pt-28 p-10">
      {/* Category Title with Black Underline */}
      <h1 className="text-4xl font-bold text-center mb-12 relative">
        {data.title}
        <span className="block w-28 h-[3px] bg-black mx-auto mt-2" />
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-4">
        {data.products.map((product, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg px-12 py-2 shadow-md w-full max-w-[300px] group flex flex-col"
          >
            {/* Image Wrapper with fixed height */}
            <div className="relative w-full h-[180px] overflow-hidden rounded-lg">
              {/* First Image (Initial State) */}
              <Image
                src={product.image}
                alt={`Image of ${product.name}`}
                width={180}
                height={105}
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              />

              {/* Second Image (On Hover) */}
              <Image
                src={product.hoverImage}
                alt={`Hover image of ${product.name}`}
                width={180}
                height={105}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              />
            </div>

            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
            <p className="text-sm text-gray-500">Material: {product.material}</p>
            <p className="text-sm text-gray-500">Sizing: {product.sizing}</p>
            <p className="text-sm text-gray-500">Delivery: {product.delivery}</p>
            <p
              className={`text-sm font-semibold ${
                product.customPrinting === "Available" ? "text-green-600" : "text-red-600"
              }`}
            >
              Custom Printing: {product.customPrinting}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
