"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const ErrorPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, offset: 50 });
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <div className="text-center max-w-xl" data-aos="zoom-in">
        <h1 className="text-9xl font-extrabold text-yellow-400 mb-6">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link href="/" className="inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
