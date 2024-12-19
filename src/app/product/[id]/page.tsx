'use client';
import React from "react";
import { useParams } from "next/navigation";
import productData from "../../../data/products.json";
import { GlareCard } from "../../../components/ui/glare-card";
import { InfiniteMovingCards } from "../../../components/ui/infinite-moving-cards";
 

function ProductDetails() {
  const { id } = useParams(); // Access the dynamic route parameter
  const product = productData.products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="py-12 bg-gray-900 text-white text-center">
        <p className="text-2xl">Product not found!</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-900 h-[100vh] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="mt-14 flex justify-center items-center">
        <GlareCard className="flex flex-col items-center justify-center">
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
      <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
    </GlareCard>
         
        </div>

        {/* Right Section */}
        <div className="mt-16 p-6 bg-gray-900">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="mt-4">{product.description}</p>
          <div className="mt-4">
            <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            <span className="ml-4 text-yellow-500">⭐ {product.rating}</span>
          </div>
          <button className="mt-6 bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-700">
            Add to Cart
          </button>
        </div>
      </div>
      {/* reviews and ratings */}
      <div className="h-[14rem] w-full bg-gray-900 dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-6 z-10">Reviews and Ratings</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={product.reviews}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
    </div>
  );
}

export default ProductDetails;

