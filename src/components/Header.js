import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import usectaLogo from './usecta.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // If menu is being closed, scroll to top smoothly
    if (isMobileMenuOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
                <img 
                  src={usectaLogo} 
                  alt="USECTA Logo" 
                  className="w-10 h-10 object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Company Name */}
              <div className="flex flex-col">
                <h1 className="text-1xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
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
            <button 
              onClick={handleMobileMenuClick}
              className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-700">
              <NavLink
                to="/"
                onClick={handleMobileMenuClick}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-blue-400 bg-gray-800"
                      : "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={handleMobileMenuClick}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-blue-400 bg-gray-800"
                      : "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                onClick={handleMobileMenuClick}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-blue-400 bg-gray-800"
                      : "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                  }`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                onClick={handleMobileMenuClick}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-blue-400 bg-gray-800"
                      : "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;