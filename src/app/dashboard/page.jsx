"use client";

import React from "react";
import Link from "next/link";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center">
        <div className="max-w-md w-full bg-gray-800/30 backdrop-blur-md border border-gray-500/30 rounded-lg p-6 sm:p-8 text-center transition-all duration-300 hover:bg-gray-800/50">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-6">
            Dashboard
          </h1>
          <Link
            href="/dashboard/add-product"
            className="inline-block px-6 py-3 bg-orange-500 text-black rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95"
          >
            Add Product
          </Link>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
