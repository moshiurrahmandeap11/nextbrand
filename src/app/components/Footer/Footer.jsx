"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">⚡ NextBrand</h2>
            <p className="text-sm text-gray-400">
              High-quality web solutions built with Next.js & love.  
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-orange-500 text-2xl transition-colors"><FaFacebook /></a>
              <a href="#" className="hover:text-orange-500 text-2xl transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-orange-400 text-2xl transition-colors"><FaLinkedin /></a>
              <a href="#" className="hover:text-orange-400 text-2xl transition-colors"><FaGithub /></a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} NextBrand. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
