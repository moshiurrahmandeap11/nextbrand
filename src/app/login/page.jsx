"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { login } from "@/lib/actions/auth";

const SignIn = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Logo/Brand */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            ⚡ NextBrand
          </Link>
        </motion.div>

        {/* Main Card */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1 variants={itemVariants} className="text-3xl font-bold mb-2">
              Welcome Back! 👋
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-400">
              Login into your account
            </motion.p>
          </div>

          {/* Social Login */}
          <motion.div variants={itemVariants} className="space-y-3">
            <button
              onClick={() => login()} // Removed "github" argument
              className="w-full bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 rounded-xl px-6 py-3 flex items-center justify-center space-x-3 text-white transition-all duration-300 hover:border-gray-500"
            >
              <span className="text-xl">🔍</span>
              <span>Log in with Github</span>
            </button>
          </motion.div>

          {/* Sign Up Link */}
          <motion.div variants={itemVariants} className="text-center mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link href="/signup" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                Create a new Account
              </Link>
            </p>
          </motion.div>
        </motion.div>

        {/* Back to Home */}
        <motion.div variants={itemVariants} className="text-center mt-6">
          <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
            ← Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignIn;