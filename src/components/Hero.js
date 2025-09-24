import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Hero = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [particlePositions, setParticlePositions] = useState([]);

  // Generate random particles for background animation
  useEffect(() => {
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1,
    }));
    setParticlePositions(particles);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticlePositions(prev => prev.map(particle => ({
        ...particle,
        y: particle.y <= -5 ? 105 : particle.y - particle.speed,
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate sections
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 3);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Fade in animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      title: "Empowering Progress, Enabling Innovation",
      subtitle: "Delivering Excellence in Pharmaceutical and Chemical Solutions",
      description: "Leading the industry with premium pharmaceutical raw materials and chemical solutions that meet the highest global standards.",
      cta: "Explore Our Solutions"
    },
    {
      title: "Our Vision",
      subtitle: "Global Leadership in Pharmaceutical Distribution",
      description: "To be the global leader in pharmaceutical and chemical distribution, recognized for our excellence, reliability, and contribution to advancing healthcare and industrial innovation worldwide.",
      cta: "Learn About Our Vision"
    },
    {
      title: "Our Mission",
      subtitle: "Premium Solutions, Unwavering Quality",
      description: "To deliver premium pharmaceutical and chemical solutions that meet the highest industry standards, while fostering innovation and maintaining unwavering commitment to quality and safety.",
      cta: "Discover Our Mission"
    }
  ];

  return (
    <>
      <Helmet>
        <title>USECTA | Leading Pharmaceutical Raw Materials Supplier in Sri Lanka</title>
        <meta 
          name="description" 
          content="USECTA is a trusted supplier of high-quality pharmaceutical raw materials, APIs, and chemical solutions in Sri Lanka. Discover our comprehensive range of products and services."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {particlePositions.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animation: `twinkle 3s infinite ${particle.id * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Geometric Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-cyan-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-40 w-28 h-28 border border-blue-300 rotate-12 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-cyan-400 animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div 
          className={`relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto text-center">
            {/* Dynamic Content Sections */}
            <div className="relative mb-16">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 transform ${
                    currentSection === index 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95 absolute inset-0'
                  }`}
                >
                  <div className="space-y-6 sm:space-y-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
                      {section.title}
                    </h2>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200 font-light max-w-3xl mx-auto">
                      {section.subtitle}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                      {section.description}
                    </p>
                    <div className="pt-4">
                      <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                        <span className="relative z-10">{section.cta}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section Indicators */}
            <div className="flex justify-center space-x-3 mb-16">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSection === index 
                      ? 'bg-blue-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Quality Assured</h3>
                <p className="text-sm sm:text-base text-gray-300">Global standards compliance</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Innovation Driven</h3>
                <p className="text-sm sm:text-base text-gray-300">Cutting-edge solutions</p>
              </div>
              
              <div className="text-center group sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Global Reach</h3>
                <p className="text-sm sm:text-base text-gray-300">Worldwide distribution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <style jsx>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;