"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/app/components/ProtectedRoute/ProtectedRoute";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.price || !formData.description) {
      setError("All fields are required.");
      return;
    }
    if (isNaN(formData.price) || formData.price <= 0) {
      setError("Price must be a valid positive number.");
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/products", formData);
      setSuccess(true);
      setFormData({ title: "", price: "", description: "" });
      setTimeout(() => router.push("/products"), 1500); // Redirect after 1.5s
    } catch (err) {
      setError("Failed to add product. Please try again.");
      console.error("Error adding product:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center">
        <div className="max-w-md w-full bg-gray-800/30 backdrop-blur-md border border-gray-500/30 rounded-lg p-6 sm:p-8 transition-all duration-300 hover:bg-gray-800/50">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-6 text-center">
            Add New Product
          </h1>
          <Link
            href="/dashboard"
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
            Back to Dashboard
          </Link>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-gray-200 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700/50 text-white border border-gray-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter product title"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-gray-200 mb-1">
                Price ($)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700/50 text-white border border-gray-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter product price"
                step="0.01"
                min="0"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-gray-200 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700/50 text-white border border-gray-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter product description"
                rows="4"
                aria-required="true"
              ></textarea>
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && (
              <p className="text-green-400 text-sm">
                Product added successfully! Redirecting...
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 bg-orange-500 text-black rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AddProduct;
