"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const navLinks = [ "Services", "About",  "Contact"];

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
        <ul className="hidden md:flex space-x-8 text-lg">
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
      </motion.div>
    </nav>
  );
};

export default Navbar;
