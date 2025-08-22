"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"; // Import client-side signOut here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const navLinks = ["Products","Services", "About", "Contact"];

  const handleLogout = () => {
    signOut({ callbackUrl: "/" }); // Use client-side signOut with redirect
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg sticky w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold tracking-wider"
        >
          <Link href="/">⚡ NextBrand</Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-lg">
            {navLinks.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="transition-colors duration-300"
                >
                  {item}
                </Link>
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.li>
            ))}
          </ul>

          {/* Desktop User Info or Get Started Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {status === "authenticated" ? (
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold text-orange-400">
                  {session.user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95"
              >
                Get Started
              </Link>
            )}
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-gray-800 p-4 space-y-4 rounded-2xl"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="block relative group hover:text-orange-300 transition-colors"
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
        
        {/* Mobile User Info or Get Started Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="pt-4 border-t border-gray-700"
        >
          {status === "authenticated" ? (
            <div className="flex flex-col space-y-4">
              <span className="text-lg font-semibold text-orange-400 text-center">
                {session.user.name}
              </span>
              <button
                onClick={handleLogout}
                className="block w-full text-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
          )}
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;