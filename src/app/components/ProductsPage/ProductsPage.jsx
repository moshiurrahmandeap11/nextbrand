"use client";

import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, ShoppingCart, Eye, Heart, ArrowRight, Grid, List, Zap, Shield, Award, TrendingUp } from 'lucide-react';

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'web', name: 'Web Design', count: 8 },
    { id: 'mobile', name: 'Mobile Apps', count: 6 },
    { id: 'branding', name: 'Branding', count: 5 },
    { id: 'marketing', name: 'Marketing', count: 5 }
  ];

  const products = [
    {
      id: 1,
      title: 'Premium Web Template',
      category: 'web',
      price: '$299',
      originalPrice: '$399',
      rating: 4.9,
      reviews: 128,
      image: '/api/placeholder/400/300',
      badge: 'Bestseller',
      description: 'Modern responsive web template with glassmorphism design',
      features: ['Responsive Design', 'Dark Mode', 'SEO Optimized']
    },
    {
      id: 2,
      title: 'Brand Identity Kit',
      category: 'branding',
      price: '$199',
      originalPrice: '$249',
      rating: 4.8,
      reviews: 96,
      image: '/api/placeholder/400/300',
      badge: 'New',
      description: 'Complete brand identity package with logo variations',
      features: ['Logo Design', 'Brand Guidelines', 'Print Ready']
    },
    {
      id: 3,
      title: 'Mobile App UI Kit',
      category: 'mobile',
      price: '$149',
      originalPrice: '$199',
      rating: 4.7,
      reviews: 74,
      image: '/api/placeholder/400/300',
      badge: 'Popular',
      description: 'Comprehensive mobile app UI components and screens',
      features: ['50+ Screens', 'Component Library', 'Figma Source']
    },
    {
      id: 4,
      title: 'Marketing Dashboard',
      category: 'marketing',
      price: '$399',
      originalPrice: '$499',
      rating: 4.9,
      reviews: 156,
      image: '/api/placeholder/400/300',
      badge: 'Premium',
      description: 'Advanced analytics dashboard with real-time data',
      features: ['Real-time Analytics', 'Custom Reports', 'API Integration']
    },
    {
      id: 5,
      title: 'E-commerce Template',
      category: 'web',
      price: '$349',
      originalPrice: '$449',
      rating: 4.8,
      reviews: 203,
      image: '/api/placeholder/400/300',
      badge: 'Featured',
      description: 'Complete e-commerce solution with payment integration',
      features: ['Payment Gateway', 'Inventory System', 'Admin Panel']
    },
    {
      id: 6,
      title: 'Social Media Kit',
      category: 'marketing',
      price: '$99',
      originalPrice: '$129',
      rating: 4.6,
      reviews: 87,
      image: '/api/placeholder/400/300',
      badge: 'Sale',
      description: 'Social media templates and brand assets',
      features: ['Instagram Templates', 'Facebook Covers', 'Story Templates']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeColor = (badge) => {
    const colors = {
      'Bestseller': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'New': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Popular': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Premium': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Featured': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      'Sale': 'bg-red-500/20 text-red-300 border-red-500/30'
    };
    return colors[badge] || 'bg-white/10 text-white border-white/20';
  };

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
        <div className={`bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
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
                    <span>24 Premium Products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>1000+ Happy Customers</span>
                  </div>
                </div>
              </div>

              {/* Search & View Toggle */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-300 w-full sm:w-80"
                  />
                </div>

                {/* View Toggle */}
                <div className="flex bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid' 
                        ? 'bg-white/10 text-white shadow-lg' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'list' 
                        ? 'bg-white/10 text-white shadow-lg' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className={`lg:w-1/4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl sticky top-32">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Categories</h3>
                </div>

                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-white/10 border border-white/20 text-white shadow-lg'
                          : 'hover:bg-white/5 text-gray-400 hover:text-white border border-transparent'
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-white/5 text-gray-500'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                      <Shield className="w-6 h-6 text-white mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Licensed</div>
                      <div className="text-white font-semibold">100%</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                      <Zap className="w-6 h-6 text-white mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Support</div>
                      <div className="text-white font-semibold">24/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`lg:w-3/4 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="group relative bg-black/20 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:border-white/20 transition-all duration-500 hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    >
                      {/* Badge */}
                      {product.badge && (
                        <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${getBadgeColor(product.badge)}`}>
                          {product.badge}
                        </div>
                      )}

                      {/* Image */}
                      <div className="relative h-48 bg-white/5 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <Zap className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Overlay Actions */}
                        <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-3 transition-all duration-300 ${
                          hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <button className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300">
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

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 backdrop-blur-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Rating & Reviews */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-white font-medium">{product.rating}</span>
                          <span className="text-gray-400 text-sm">({product.reviews})</span>
                        </div>

                        {/* Price & Action */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white">{product.price}</span>
                            <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                          </div>
                          <button className="group/btn flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-lg">
                            <ShoppingCart className="w-4 h-4" />
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // List View
                <div className="space-y-4">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="group bg-black/20 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-white/20 transition-all duration-500"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Image */}
                        <div className="w-full md:w-48 h-32 bg-white/5 rounded-xl flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                                {product.badge && (
                                  <span className={`px-2 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${getBadgeColor(product.badge)}`}>
                                    {product.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-400 mb-3">{product.description}</p>
                              
                              {/* Features */}
                              <div className="flex flex-wrap gap-2 mb-3">
                                {product.features.map((feature, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 backdrop-blur-sm"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>

                              {/* Rating */}
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < Math.floor(product.rating)
                                          ? 'fill-yellow-400 text-yellow-400'
                                          : 'text-gray-600'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-white font-medium">{product.rating}</span>
                                <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
                              </div>
                            </div>

                            {/* Price & Action */}
                            <div className="text-right">
                              <div className="mb-4">
                                <div className="text-2xl font-bold text-white">{product.price}</div>
                                <div className="text-gray-500 line-through text-sm">{product.originalPrice}</div>
                              </div>
                              <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/15 transition-all duration-300 shadow-lg">
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
                  <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/15 transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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
          background-image: 
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
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