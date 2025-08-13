"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, offset: 100 });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-14 items-center">
        
        {/* Image */}
        <div data-aos="fade-right">
          <img
            src="https://i.postimg.cc/YSkvZrRd/85.png" 
            alt="NextBrand"
            className="rounded-2xl shadow-2xl border-4 border-yellow-500 w-full hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* About Content */}
        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">About NextBrand</h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            NextBrand is a creative digital agency that helps businesses 
            build powerful online identities. From stunning web design 
            to strategic digital marketing, we specialize in crafting 
            innovative solutions that drive real results.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Our mission is to empower brands with cutting-edge technology 
            and a human-centric design approach — ensuring your brand not 
            only looks great but performs exceptionally in today’s competitive 
            digital landscape.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow hover:shadow-yellow-500/40 transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-yellow-400">120+</h3>
              <p className="text-sm font-medium text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow hover:shadow-yellow-500/40 transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-yellow-400">95%</h3>
              <p className="text-sm font-medium text-gray-300">Client Satisfaction</p>
            </div>
          </div>

          {/* Button */}
          <button
            className="mt-8 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
