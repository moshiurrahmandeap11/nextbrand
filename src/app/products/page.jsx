"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        console.log("Fetched products:", response.data);
        setProducts(response.data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Please try again.");
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return (
      <div className="container mx-auto p-6 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
        <h1 className="text-3xl font-bold mb-6">Error</h1>
        <p className="text-red-400 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-orange-500 rounded-lg text-black font-semibold hover:bg-orange-600 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      {products.length === 0 ? (
        <p className="text-gray-300">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-500/30 rounded-lg bg-gray-800/30 backdrop-blur-md hover:bg-gray-800/50 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-100">{product.title}</h2>
              <p className="font-bold mb-2 text-gray-200">{product.price}</p>
              <Link
                href={`/products/details?id=${product.id}`}
                className="px-4 py-2 bg-orange-500 text-black rounded-lg hover:bg-orange-600 font-semibold transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;