import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Network from './components/Network';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Products />
              <WhyChooseUs />
              <Network />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
              {/* Hero Section for About Page */}
              <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                    About USECTA
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-tight">
                    WHO <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">WE ARE</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-12 font-light">
                    USECTA is dedicated to providing high-quality chemicals and pharmaceutical solutions worldwide. 
                    We specialize in the importation, manufacturing, and distribution of raw materials and products 
                    for the pharmaceutical and industrial sectors, ensuring compliance with global standards.
                  </p>
                  
                  {/* Decorative element */}
                  <div className="flex items-center justify-center gap-4 mb-1">
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Mission & Vision Section */}
              <div className="bg-white/70 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-10">
                  <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg border border-orange-100">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-700 leading-relaxed">
                          To deliver premium pharmaceutical and chemical solutions that meet the highest industry standards, 
                          while fostering innovation and maintaining unwavering commitment to quality and safety.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                        <p className="text-gray-700 leading-relaxed">
                          To be the global leader in pharmaceutical and chemical distribution, recognized for our excellence, 
                          reliability, and contribution to advancing healthcare and industrial innovation worldwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Components without additional padding/margin */}
              <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50">
                <div style={{ padding: 0, margin: 0 }}>
                  <WhyChooseUs />
                </div>
                <div style={{ padding: 0, margin: 0 }}>
                  <Network />
                </div>
              </div>
              
            </div>
            
          } />
          <Route path="/products" element={<Products />} />
          <Route path="/networks" element={<Network />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;