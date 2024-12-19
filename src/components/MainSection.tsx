'use client';
import React, { useState } from "react";
import Link from "next/link";
import productData from "../data/products.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

function FeaturedProducts() {
  const [visibleProducts, setVisibleProducts] = useState(12);

  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 12);
  };

  const products = productData.products.slice(0, visibleProducts);

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED PRODUCTS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Online Shopping Website
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: Product) => (
             <Link href={`/product/${product.id}`}>
              <BackgroundGradient
              key={product.id}
              className="rounded-lg overflow-hidden max-w-sm h-96 p-1 md:p-4 dark:bg-zinc-900 shadow-md"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <div className="p-0">
                <h3 className="text-lg font-bold text-white">{product.title}</h3>
                <p className="hidden md:block text-sm text-white">
                  {product.description.slice(0, 50)}...
                </p>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4">
                  <span className="text-white font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-yellow-500 text-sm font-medium md:ml-4 md:mt-0 mt-2">
                    ⭐ {product.rating}
                  </span>
                </div>
                <Link href={`/product/${product.id}`}>
                  <button className=" mt-4 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-200 text-center">
                    Buy Now
                  </button>
                </Link>
              </div>
            </BackgroundGradient>
           </Link>
        
          ))}
        </div>
        {visibleProducts < productData.products.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeaturedProducts;



