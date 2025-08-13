import React from 'react';

const ServicesPages = ({ params }) => {
    const slug = params.slug; 

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

    // Find the service by slug
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
                    <p className="text-gray-300">The service you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-8">
                            <div className="text-8xl md:text-9xl mb-4 filter drop-shadow-2xl animate-bounce">
                                {service.icon}
                            </div>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6 leading-tight">
                            {service.title}
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            {service.desc}
                        </p>
                    </div>

                    {/* Main Content Card */}
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-[1.02]">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Left Side - Features */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
                                    <span className="text-yellow-400 mr-4">✨</span>
                                    Key Features
                                </h2>
                                
                                <div className="space-y-6">
                                    {service.points.map((point, index) => (
                                        <div 
                                            key={index}
                                            className="flex items-start group hover:transform hover:scale-105 transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                                                <span className="text-white text-sm font-bold">✓</span>
                                            </div>
                                            <p className="text-gray-200 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side - Call to Action */}
                            <div className="space-y-8">
                                <div className="backdrop-blur-lg bg-gradient-to-br from-white/15 to-white/5 border border-white/25 rounded-2xl p-8 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Ready to Get Started?
                                    </h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        Let's discuss your project and bring your vision to life with our expert {service.title.toLowerCase()} services.
                                    </p>
                                    
                                    <div className="space-y-4">
                                        <button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                                            Start Your Project
                                        </button>
                                        
                                        <button className="w-full backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                                            View Portfolio
                                        </button>
                                    </div>
                                </div>

                                {/* Stats or Additional Info */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                                        <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                                        <div className="text-gray-300 text-sm">Projects Done</div>
                                    </div>
                                    <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                                        <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
                                        <div className="text-gray-300 text-sm">Client Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="mt-16 text-center">
                        <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl p-6 inline-block">
                            <p className="text-gray-400 mb-4">Explore our other services</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {services
                                    .filter(s => s.slug !== slug)
                                    .map((otherService, index) => (
                                        <a 
                                            key={index}
                                            href={`/services/${otherService.slug}`}
                                            className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                                        >
                                            <span>{otherService.icon}</span>
                                            <span className="hidden md:inline">{otherService.title}</span>
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPages;