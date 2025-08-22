"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setError("No product ID provided.");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products?id=${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch product data.");
        }
        const data = await res.json();
        setProduct(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError("Failed to load product details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-300 text-lg">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p className="text-red-400 mb-6 text-center max-w-md">{error}</p>
        <div className="flex gap-4">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-orange-500 text-black rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            Retry
          </button>
          <Link
            href="/products"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link
          href="/products"
          className="px-6 py-3 bg-orange-500 text-black rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors duration-300 mb-6"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        Back to Products
      </Link>
      <div className="max-w-3xl mx-auto bg-gray-800/30 backdrop-blur-md border border-gray-500/30 rounded-lg p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:bg-gray-800/50">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-100">{product.title}</h1>
        <p className="text-gray-200 mb-4 text-base sm:text-lg leading-relaxed">{product.description}</p>
        <p className="text-2xl font-semibold text-orange-500 mb-6">{product.price}</p>
        <button
          className="px-6 py-3 bg-orange-500 text-black rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;