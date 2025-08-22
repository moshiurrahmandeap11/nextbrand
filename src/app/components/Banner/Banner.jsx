"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Zap, ArrowRight } from 'lucide-react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <Sparkles className="w-5 h-5" />, text: "Premium Design" },
    { icon: <Zap className="w-5 h-5" />, text: "Lightning Fast" },
    { icon: <ChevronRight className="w-5 h-5" />, text: "Next Generation" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-white/3 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className={`lg:w-1/2 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-gray-300 text-sm mb-8 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Introducing Nextbrand</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
              Next
              <span className="text-gray-300">brand</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Elevate your digital presence with cutting-edge design and unparalleled performance.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500 backdrop-blur-md ${
                    activeFeature === index 
                      ? 'bg-white/10 border-white/20 text-white scale-105 shadow-lg' 
                      : 'bg-white/5 border-white/10 text-gray-400'
                  }`}
                >
                  {feature.icon}
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/15 shadow-lg">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-4 border border-white/10 rounded-xl font-semibold text-white backdrop-blur-md hover:bg-white/5 transition-all duration-300 hover:border-white/20 shadow-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Interactive Element */}
          <div className={`lg:w-1/2 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative">
              
              {/* Main Card */}
              <div className="relative bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg animate-float border border-white/20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl shadow-lg animate-float animation-delay-1000 border border-white/10"></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Experience the Future
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Built with Next.js 14+, featuring server components, advanced animations, and modern design patterns.
                  </p>
                  
                  {/* Progress Bars */}
                  <div className="space-y-4">
                    {['Performance', 'Design', 'Innovation'].map((skill, index) => (
                      <div key={skill} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{skill}</span>
                          <span className="text-white">95%</span>
                        </div>
                        <div className="w-full bg-white/5 backdrop-blur-sm rounded-full h-2 border border-white/10">
                          <div 
                            className="bg-white/30 h-2 rounded-full transition-all duration-1000 ease-out backdrop-blur-sm"
                            style={{
                              width: isVisible ? '95%' : '0%',
                              animationDelay: `${index * 200}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-white/50 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-white/30 rounded-full animate-ping animation-delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity="0.25" 
            fill="url(#gradient1)"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:'#ffffff'}} />
              <stop offset="100%" style={{stopColor:'#6b7280'}} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default Banner;