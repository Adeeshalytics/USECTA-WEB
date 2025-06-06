import React, { useState, useEffect } from 'react';
import { Globe, Pill, FlaskConical, Truck, Building2, Search, Users } from 'lucide-react';

const USECTANetworkPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const regions = [
    {
      name: 'Europe',
      description: 'Advanced pharmaceutical manufacturing and R&D hub with stringent quality standards',
      icon: '🇪🇺',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Asia',
      description: 'Leading source of APIs and raw materials with competitive manufacturing costs',
      icon: '🌏',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'North America',
      description: 'Premium market for pharmaceutical products with advanced regulatory frameworks',
      icon: '🇺🇸',
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Latin America',
      description: 'Growing pharmaceutical market with expanding manufacturing capabilities',
      icon: '🌎',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Africa',
      description: 'Emerging pharmaceutical market with increasing demand for quality medicines',
      icon: '🌍',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Middle East',
      description: 'Strategic pharmaceutical hub connecting global supply chains',
      icon: '🕌',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const services = [
    {
      icon: <Pill className="w-8 h-8" />,
      title: 'API Importation',
      description: 'Premium active pharmaceutical ingredients sourced globally'
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'Chemical Solutions',
      description: 'Industrial chemicals and specialized research materials'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'GMP Manufacturing',
      description: 'Pharmaceutical manufacturing adhering to global standards'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Global Distribution',
      description: 'Efficient supply chain and logistics worldwide'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'R&D Materials',
      description: 'Specialized chemicals for pharmaceutical research'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Trading Services',
      description: 'Wholesale and retail pharmaceutical raw materials'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">GLOBAL NETWORK</span>
            </div>
          </div>

          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              PHARMACEUTICAL SUPPLY
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                WHERE YOU NEED IT, WHEN YOU NEED IT.
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-light">
                TRUST USECTA
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
              USECTA's global reach spans across continents, enabling us to deliver premium pharmaceutical 
              raw materials, APIs, and chemical solutions efficiently and reliably. Our international network 
              ensures compliance with the highest regulatory standards while maintaining exceptional quality 
              across all pharmaceutical manufacturing and research applications.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Regional Network */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {regions.map((region, index) => (
            <div
              key={region.name}
              className={`group transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative p-6 rounded-2xl border bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                {/* Region Info */}
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-4 font-medium tracking-wider">
                    USECTA Network
                  </div>
                  <h3 className="text-xl font-bold">{region.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-pointer group">
            <span>Connect with Our Global Network</span>
            <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default USECTANetworkPage;