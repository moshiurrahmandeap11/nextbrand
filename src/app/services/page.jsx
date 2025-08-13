"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, offset: 100 });
  }, []);

  const services = [
    {
      title: "Web Development",
      desc: "We craft blazing-fast, responsive, and scalable websites using Next.js, React, and Tailwind CSS. Whether it’s an e-commerce platform, business portfolio, or SaaS dashboard, we ensure high performance and smooth user experience.",
      icon: "💻",
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
      points: [
        "Keyword research & on-page SEO",
        "Google Lighthouse optimization",
        "Content strategy & analytics",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-5xl font-extrabold mb-6 text-yellow-400 tracking-wide"
          data-aos="fade-down"
        >
          Our Services
        </h2>
        <p
          className="text-lg text-gray-400 mb-14 max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          We provide a wide range of digital solutions to bring your ideas to
          life. Our goal is to deliver products that are functional, visually
          appealing, and optimized for growth.
        </p>

        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-10 shadow-lg border border-gray-700 hover:border-yellow-400 hover:shadow-yellow-400/40 transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.desc}</p>
              <ul className="text-gray-400 space-y-2 text-left list-disc pl-5">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
