"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, offset: 100 });
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-yellow-400 text-center mb-12"
          data-aos="fade-down"
        >
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-6">
              Have a project idea or just want to say hi?  
              Fill out the form and I’ll get back to you as soon as possible!
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                📍 <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                📧 <span>moshiurrahman@example.com</span>
              </li>
              <li className="flex items-center gap-3">
                📱 <span>+880 1234 567 890</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form
            data-aos="fade-left"
            className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
          >
            <div>
              <label className="block mb-2 text-sm font-semibold">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
