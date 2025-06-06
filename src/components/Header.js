import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 shadow-lg border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            {/* Professional Logo */}
            <NavLink 
              to="/" 
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="relative">
                    {/* Molecule/Chemical structure icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                      <circle cx="6" cy="6" r="2" fill="currentColor" />
                      <circle cx="18" cy="6" r="2" fill="currentColor" />
                      <circle cx="6" cy="18" r="2" fill="currentColor" />
                      <circle cx="18" cy="18" r="2" fill="currentColor" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                      <line x1="8" y1="6" x2="10" y2="12" stroke="currentColor" strokeWidth="2" />
                      <line x1="14" y1="12" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
                      <line x1="8" y1="18" x2="10" y2="12" stroke="currentColor" strokeWidth="2" />
                      <line x1="14" y1="12" x2="16" y2="18" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Company Name */}
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                  USECTA
                </h1>
                <p className="text-xs text-gray-400 font-medium tracking-wide">
                  PHARMACEUTICAL RAW MATERIALS
                </p>
              </div>
            </NavLink>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-800 hover:text-blue-400 ${
                  isActive 
                    ? "text-blue-400 bg-gray-800 shadow-sm" 
                    : "text-gray-300 hover:shadow-sm"
                } group`
              }
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </NavLink>
            
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-800 hover:text-blue-400 ${
                  isActive 
                    ? "text-blue-400 bg-gray-800 shadow-sm" 
                    : "text-gray-300 hover:shadow-sm"
                } group`
              }
            >
              About
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </NavLink>
            
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-800 hover:text-blue-400 ${
                  isActive 
                    ? "text-blue-400 bg-gray-800 shadow-sm" 
                    : "text-gray-300 hover:shadow-sm"
                } group`
              }
            >
              Products
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </NavLink>
            
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-800 hover:text-blue-400 ${
                  isActive 
                    ? "text-blue-400 bg-gray-800 shadow-sm" 
                    : "text-gray-300 hover:shadow-sm"
                } group`
              }
            >
              Contact
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;