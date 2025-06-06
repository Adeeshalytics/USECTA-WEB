import React, { useState } from 'react';
import { Clock, Award, Users, Globe, Truck, CheckCircle, Star, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      title: "Delivery On Time",
      description: "We provide timely delivery with efficient logistics, so your orders arrive exactly when needed.",
      icon: Truck,
      delay: "0ms"
    },
    {
      id: 2,
      title: "Quality Products",
      description: "We use cutting-edge technology to ensure that our chemicals meet your requirements.",
      icon: Award,
      delay: "100ms"
    },
    {
      id: 3,
      title: "Professional Team",
      description: "Our professional team combines industry expertise and a client-focused approach to deliver customized chemical solutions.",
      icon: Users,
      delay: "200ms"
    },
    {
      id: 4,
      title: "Worldwide Network",
      description: "Our multinational team ensures the availability of reliable services worldwide.",
      icon: Globe,
      delay: "300ms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-6 relative overflow-hidden">
      {/* Simple Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Star className="w-4 h-4" />
            Why Choose Us
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative">
            WHY <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">CHOOSE US</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === feature.id;
            
            return (
              <div
                key={feature.id}
                className="group relative transition-all duration-700 ease-out"
                style={{ animationDelay: feature.delay }}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`
                    relative p-8 rounded-3xl h-full transition-all duration-500 ease-out cursor-pointer
                    bg-white shadow-lg hover:shadow-2xl
                    ${isHovered ? 'transform -translate-y-4 scale-105' : 'transform translate-y-0 scale-100'}
                    backdrop-blur-sm border border-gray-100
                    hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500
                  `}
                >
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className={`
                      relative mb-6 transition-all duration-500
                      ${isHovered ? 'transform rotate-12 scale-110' : 'transform rotate-0 scale-100'}
                    `}>
                      <div className={`
                        w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden
                        bg-gray-50 shadow-lg group-hover:shadow-xl group-hover:bg-white/20
                        transition-all duration-500
                      `}>
                        <Icon 
                          className={`
                            w-10 h-10 transition-all duration-500
                            text-gray-600 group-hover:text-white
                            ${isHovered ? 'animate-pulse' : ''}
                          `} 
                        />
                      </div>
                      
                      {/* Floating particles effect */}
                      {isHovered && (
                        <>
                          <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                          <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-300"></div>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className={`
                      text-2xl font-bold mb-4 transition-all duration-300
                      text-gray-800 group-hover:text-white
                    `}>
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className={`
                      text-base leading-relaxed transition-all duration-300
                      text-gray-600 group-hover:text-white/90
                    `}>
                      {feature.description}
                    </p>

                    {/* Hover indicator */}
                    <div className={`
                      absolute bottom-4 right-4 transition-all duration-500
                      ${isHovered ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-4'}
                    `}>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card number indicator */}
                <div className={`
                  absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 z-20
                  bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg
                  ${isHovered ? 'transform scale-125 rotate-12' : 'transform scale-100 rotate-0'}
                `}>
                  {feature.id}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <CheckCircle className="w-6 h-6 group-hover:animate-spin" />
            Experience Excellence Today
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://wa.me/94710668255" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 cursor-pointer group animate-bounce"
        >
          <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WhyChooseUs;