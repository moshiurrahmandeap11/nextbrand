"use client";

import React, { useState, useEffect } from "react";
import { Search, Star, ShoppingCart, Eye, Heart, ArrowRight, Grid, List, Zap, Award, TrendingUp } from "lucide-react";
import axios from "axios";
import Link from "next/link";

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    setIsVisible(true);
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getBadgeColor = (badge) => {
    const colors = {
      Bestseller: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      New: "bg-green-500/20 text-green-300 border-green-500/30",
      Popular: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      Premium: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      Featured: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      Sale: "bg-red-500/20 text-red-300 border-red-500/30",
    };
    return colors[badge] || "bg-white/10 text-white border-white/20";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-300 text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Error</h3>
          <p className="text-red-400 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-orange-500 text-black rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/3 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-white/5 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 min-h-screen">
        {/* Header Section */}
        <div
          className={`bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Title & Stats */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-2">
                  Our Products
                </h1>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>{products.length} Premium Products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>1000+ Happy Customers</span>
                  </div>
                </div>
              </div>

              {/* Search & View Toggle */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-300 w-full sm:w-80"
                    aria-label="Search products"
                  />
                </div>
                <div className="flex bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === "list"
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                    aria-label="List view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group relative bg-black/20 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:border-white/20 transition-all duration-500 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {/* Image Placeholder */}
                    <div className="relative h-48 bg-white/5 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      {/* Overlay Actions */}
                      <div
                        className={`absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-3 transition-all duration-300 ${
                          hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Link
                          href={`/products/details?id=${product.id}`}
                          className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
                          aria-label={`View details for ${product.title}`}
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button
                          className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
                          aria-label={`Add ${product.title} to wishlist`}
                        >
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      {/* Price & Action */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-white">{product.price}</span>
                        </div>
                        <button
                          className="group/btn flex items-center gap-2 px-4 py-2 bg-orange-500 text-black backdrop-blur-md border border-orange-600/20 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg"
                          aria-label={`Add ${product.title} to cart`}
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group bg-black/20 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-white/20 transition-all duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image Placeholder */}
                      <div className="w-full md:w-48 h-32 bg-white/5 rounded-xl flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                            <p className="text-gray-400 mb-3">{product.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="mb-4">
                              <div className="text-2xl font-bold text-white">{product.price}</div>
                            </div>
                            <button
                              className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-black backdrop-blur-md border border-orange-600/20 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg"
                              aria-label={`Add ${product.title} to cart`}
                            >
                              <ShoppingCart className="w-4 h-4" />
                              <span>Add to Cart</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search</p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-6 py-3 bg-orange-500 text-black rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 8s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;