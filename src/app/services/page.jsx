"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, offset: 100 });
  }, []);

  const services = [
    {
      title: "Web Development",
      desc: "We craft blazing-fast, responsive, and scalable websites using Next.js, React, and Tailwind CSS. Whether it's an e-commerce platform, business portfolio, or SaaS dashboard, we ensure high performance and smooth user experience.",
      icon: "💻",
      slug: "web-development",
      points: [
        "Next.js & React expertise",
        "Responsive & mobile-first design",
        "Optimized for speed & SEO",
      ],
    },
    {
      title: "UI/UX Design",
      desc: "We design user interfaces that are not just beautiful but also intuitive. From wireframes to fully interactive prototypes, we focus on engaging your audience and boosting conversions.",
      icon: "🎨",
      slug: "ui-ux-design",
      points: [
        "Figma, Adobe XD, & Sketch",
        "Smooth animations & micro-interactions",
        "User-centered design principles",
      ],
    },
    {
      title: "SEO Optimization",
      desc: "We help your website rank higher and reach more people by implementing modern SEO techniques, structured data, and fast-loading pages.",
      icon: "🚀",
      slug: "seo-optimization",
      points: [
        "Keyword research & on-page SEO",
        "Google Lighthouse optimization",
        "Content strategy & analytics",
      ],
    },
  ];

  const handleCardClick = (slug) => {
    setIsAnimating(true);
    setTimeout(() => {
      router.push(`/services/${slug}`);
    }, 600);
  };

  return (
    <>
      {/* Overlay animation */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-br from-purple-700 via-pink-600 to-yellow-500 z-[9999]"
          />
        )}
      </AnimatePresence>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/6 w-72 h-72 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-black/20"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Header Section */}
          <div className="mb-16">
            <h2
              className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-yellow-400 tracking-wide drop-shadow-2xl"
              data-aos="fade-down"
            >
              Our Services
            </h2>
            <div
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 max-w-4xl mx-auto"
              data-aos="fade-up"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                We provide a wide range of digital solutions to bring your ideas to
                life. Our goal is to deliver products that are functional, visually
                appealing, and optimized for growth.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(service.slug)}
                className="block group cursor-pointer"
              >
                <div
                  className="backdrop-blur-xl bg-gradient-to-b from-white/15 to-white/5 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 h-full hover:scale-[1.02] hover:bg-gradient-to-b hover:from-white/20 hover:to-white/10 hover:border-white/30"
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  {/* Icon with glow effect */}
                  <div className="relative mb-8">
                    <div className="text-7xl mb-4 filter drop-shadow-2xl group-hover:animate-bounce transition-all duration-500">
                      {service.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-yellow-200 group-hover:to-white transition-all duration-500">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                      {service.desc}
                    </p>
                  </div>

                  {/* Points */}
                  <div className="space-y-3 text-left">
                    {service.points.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-3 group-hover:transform group-hover:translate-x-2 transition-all duration-500"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-500">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom gradient line */}
                  <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="600">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your project and create something amazing together.
              </p>
              <button className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 hover:from-purple-700 hover:via-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                Get Started Today
              </button>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-30 animate-ping animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-400 rounded-full opacity-50 animate-ping animation-delay-2000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 animate-ping animation-delay-3000"></div>
          <div className="absolute top-3/4 left-1/6 w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-ping animation-delay-4000"></div>
        </div>
      </section>
    </>
  );
};

export default Services;
