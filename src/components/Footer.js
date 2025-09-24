import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">USECTA</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Specialized in importation and distribution of pharmaceutical raw materials, 
              chemicals, and manufacturing of pharmaceutical products with adherence to 
              international quality standards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('/')}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 cursor-pointer text-left"
                >
                  HOME
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 cursor-pointer text-left"
                >
                  ABOUT US
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/products')}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 cursor-pointer text-left"
                >
                  PRODUCTS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/networks')}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 cursor-pointer text-left"
                >
                  NETWORKS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contact')}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 cursor-pointer text-left"
                >
                  CONTACT US
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">CONTACT INFO</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-orange-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">No 33/5 Pallegunnepana,</p>
                  <p className="text-gray-300 text-sm">Gunnepana Kandy</p>
                  <p className="text-gray-400 text-xs mt-1">Office Address</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-orange-400 mr-3" />
                <div>
                  <p className="text-gray-300 text-sm">+94 71 066 8255</p>
                  <p className="text-gray-400 text-xs">WhatsApp Available</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-orange-400 mr-3" />
                <div>
                  <p className="text-gray-300 text-sm">usectapvtltd@gmail.com</p>
                  <p className="text-gray-400 text-xs">E-Mail Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2025 USECTA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;