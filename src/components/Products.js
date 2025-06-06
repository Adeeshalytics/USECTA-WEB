import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, Package, Beaker, Shield, Award, Sparkles, ArrowRight, Search, Filter, Grid, List, Plus, X, Send, Mail, Phone, User, MessageSquare } from 'lucide-react';

// Import all images individually
import benzhexolImage from './images/benzhexol.png';
import bisoprololImage from './images/bisoprolol.png';
import cetirizineImage from './images/cetirizine.png';
import ciprofloxacinImage from './images/ciprofloxacin.png';
import propranololImage from './images/propranolol.png';
import verapamilImage from './images/verapamil.png';
import dicalciumImage from './images/dicalcium.png';
import magnesiumImage from './images/magnesium.png';
import maizeImage from './images/maize.png';
import microcrystallineImage from './images/microcrystalline.png';
import polyethyleneImage from './images/polyethylene.png';
import talcImage from './images/talc.png';
import sodiumImage from './images/sodium.png';
import stearicImage from './images/stearic.png';
import titaniumImage from './images/titanium.png';
import calciumImage from './images/calcium.png';

// Create an images object to keep the dynamic-like access
const images = {
  benzhexol: benzhexolImage,
  bisoprolol: bisoprololImage,
  cetirizine: cetirizineImage,
  ciprofloxacin: ciprofloxacinImage,
  propranolol: propranololImage,
  verapamil: verapamilImage,
  dicalcium: dicalciumImage,
  magnesium: magnesiumImage,
  maize: maizeImage,
  microcrystalline: microcrystallineImage,
  polyethylene: polyethyleneImage,
  talc: talcImage,
  sodium: sodiumImage,
  stearic: stearicImage,
  titanium: titaniumImage,
  calcium: calciumImage
};

const ProductRange = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestForm, setRequestForm] = useState({
    productName: '',
    category: 'Active Pharmaceutical Ingredients',
    standard: '',
    description: '',
    contactName: '',
    email: '',
    phone: '',
    company: '',
    additionalNotes: ''
  });
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const products = [
    {
      id: 1,
      name: "Benzhexol Hydrochloride",
      standard: "BP 2023/BP 2024",
      category: "Active Pharmaceutical Ingredients",
      description: "High-purity pharmaceutical compound used in neurological treatments with excellent bioavailability and stability.",
      image: images['benzhexol'],
      color: "from-blue-500 to-cyan-500",
      properties: ["High Purity", "Stable", "Bioavailable"]
    },
    {
      id: 2,
      name: "Bisoprolol Fumarate",
      standard: "BP 2023/BP 2024",
      category: "Active Pharmaceutical Ingredients",
      description: "Beta-blocker compound with superior cardiovascular benefits and excellent patient tolerance profile.",
      image: images['bisoprolol'],
      color: "from-purple-500 to-pink-500",
      properties: ["Cardioselective", "Long-acting", "Well-tolerated"]
    },
    {
      id: 3,
      name: "Cetirizine Dihydrochloride",
      standard: "BP 2023/BP 2024",
      category: "Active Pharmaceutical Ingredients",
      description: "Second-generation antihistamine with minimal sedative effects and excellent allergic response control.",
      image: images['cetirizine'],
      color: "from-green-500 to-teal-500",
      properties: ["Non-sedating", "Long-lasting", "Effective"]
    },
    {
      id: 4,
      name: "Ciprofloxacin Hydrochloride",
      standard: "USP 46/USP 47",
      category: "Active Pharmaceutical Ingredients",
      description: "Broad-spectrum fluoroquinolone antibiotic with excellent tissue penetration and antimicrobial activity.",
      image: images['ciprofloxacin'],
      color: "from-orange-500 to-red-500",
      properties: ["Broad-spectrum", "High penetration", "Bactericidal"]
    },
    {
      id: 5,
      name: "Propranolol Hydrochloride",
      standard: "BP 2023/BP 2024",
      category: "Active Pharmaceutical Ingredients",
      description: "Non-selective beta-blocker with proven efficacy in cardiovascular and neurological conditions.",
      image: images['propranolol'],
      color: "from-indigo-500 to-purple-500",
      properties: ["Non-selective", "Proven efficacy", "Versatile"]
    },
    {
      id: 6,
      name: "Verapamil Hydrochloride",
      standard: "BP 2023/BP 2024",
      category: "Active Pharmaceutical Ingredients",
      description: "Calcium channel blocker with excellent anti-arrhythmic properties and cardiovascular protection.",
      image: images['verapamil'],
      color: "from-teal-500 to-blue-500",
      properties: ["Anti-arrhythmic", "Cardioprotective", "Reliable"]
    },
    {
      id: 7,
      name: "Di-basic Calcium Phosphate",
      standard: "BP 2023/BP 2024, USP 46/USP 47",
      category: "Excipients",
      description: "High-quality pharmaceutical excipient with excellent binding and disintegration properties.",
      image: images['dicalcium'],
      color: "from-gray-500 to-slate-500",
      properties: ["Binding agent", "Disintegrant", "Stable"]
    },
    {
      id: 8,
      name: "Magnesium Stearate",
      standard: "BP 2023/BP 2024",
      category: "Excipients",
      description: "Premium pharmaceutical lubricant ensuring smooth tablet production and consistent quality.",
      image: images['magnesium'],
      color: "from-amber-500 to-orange-500",
      properties: ["Lubricant", "Flow enhancer", "Consistent"]
    },
    {
      id: 9,
      name: "Maize Starch",
      standard: "BP 2023/BP 2024",
      category: "Excipients",
      description: "Natural pharmaceutical binder and disintegrant with excellent compressibility characteristics.",
      image: images['maize'],
      color: "from-yellow-500 to-amber-500",
      properties: ["Natural", "Compressible", "Versatile"]
    },
    {
      id: 10,
      name: "Microcrystalline Cellulose",
      standard: "USP 46/USP 47, BP 2023/BP 2024",
      category: "Excipients",
      description: "Superior pharmaceutical filler with exceptional binding properties and tablet integrity.",
      image: images['microcrystalline'],
      color: "from-emerald-500 to-green-500",
      properties: ["Superior binding", "Tablet integrity", "Reliable"]
    },
    {
      id: 11,
      name: "Polyethylene Glycol",
      standard: "USP 46/USP 47",
      category: "Excipients",
      description: "Versatile pharmaceutical polymer for coating, binding, and controlled-release applications.",
      image: images['polyethylene'],
      color: "from-cyan-500 to-blue-500",
      properties: ["Versatile", "Controlled-release", "Biocompatible"]
    },
    {
      id: 12,
      name: "Purified Talc",
      standard: "BP 2023/BP 2024",
      category: "Excipients",
      description: "High-purity pharmaceutical grade talc for anti-adherent and glidant applications.",
      image: images['talc'],
      color: "from-stone-500 to-gray-500",
      properties: ["High purity", "Anti-adherent", "Smooth flow"]
    },
    {
      id: 13,
      name: "Sodium Starch Glycolate",
      standard: "BP 2023/BP 2024",
      category: "Excipients",
      description: "Super disintegrant with rapid tablet dissolution and excellent moisture resistance.",
      image: images['sodium'],
      color: "from-violet-500 to-purple-500",
      properties: ["Super disintegrant", "Rapid dissolution", "Moisture resistant"]
    },
    {
      id: 14,
      name: "Stearic Acid",
      standard: "BP 2023/BP 2024",
      category: "Excipients",
      description: "Premium pharmaceutical lubricant with excellent release properties and tablet quality.",
      image: images['stearic'],
      color: "from-rose-500 to-pink-500",
      properties: ["Premium quality", "Release agent", "Consistent"]
    },
    {
      id: 15,
      name: "Titanium Dioxide",
      standard: "BP 2023/BP 2024",
      category: "Excipients",
      description: "High-grade pharmaceutical colorant and opacifier with superior coverage and stability.",
      image: images['titanium'],
      color: "from-slate-500 to-zinc-500",
      properties: ["Superior coverage", "Stable", "High-grade"]
    },
    {
      id: 16,
      name: "Calcium Carbonate",
      standard: "Pharmaceutical Grade",
      category: "Excipients",
      description: "Premium pharmaceutical calcium carbonate with excellent buffering capacity and bioavailability.",
      image: images['calcium'],
      color: "from-blue-500 to-indigo-500",
      properties: ["Buffering agent", "Bioavailable", "Premium grade"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Active Pharmaceutical Ingredients', name: 'APIs', count: products.filter(p => p.category === 'Active Pharmaceutical Ingredients').length },
    { id: 'Excipients', name: 'Excipients', count: products.filter(p => p.category === 'Excipients').length }
  ];

  // Enhanced search functionality
  useEffect(() => {
    let filtered = products;
    
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Enhanced search filter
    if (searchTerm.trim()) {
      const searchTermLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(product => {
        // Search in multiple fields with better matching
        const nameMatch = product.name.toLowerCase().includes(searchTermLower);
        const standardMatch = product.standard.toLowerCase().includes(searchTermLower);
        const categoryMatch = product.category.toLowerCase().includes(searchTermLower);
        const descriptionMatch = product.description.toLowerCase().includes(searchTermLower);
        const propertiesMatch = product.properties.some(prop => 
          prop.toLowerCase().includes(searchTermLower)
        );
        
        // Also check for partial word matches
        const words = searchTermLower.split(' ');
        const wordMatch = words.some(word => 
          product.name.toLowerCase().includes(word) ||
          product.standard.toLowerCase().includes(word) ||
          product.category.toLowerCase().includes(word)
        );
        
        return nameMatch || standardMatch || categoryMatch || descriptionMatch || propertiesMatch || wordMatch;
      });
    }
    
    setFilteredProducts(filtered);
    setCurrentSlide(0); // Reset to first slide when filtering
  }, [searchTerm, selectedCategory]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredProducts.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredProducts.length / 3)) % Math.ceil(filteredProducts.length / 3));
  };

  const handleRequestFormChange = (field, value) => {
    setRequestForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the request to your backend
    console.log('Product request submitted:', requestForm);
    setRequestSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setShowRequestModal(false);
      setRequestSubmitted(false);
      setRequestForm({
        productName: '',
        category: 'Active Pharmaceutical Ingredients',
        standard: '',
        description: '',
        contactName: '',
        email: '',
        phone: '',
        company: '',
        additionalNotes: ''
      });
    }, 2000);
  };

  const ProductCard = ({ product, index }) => {
    const isHovered = hoveredProduct === product.id;
    
    return (
      <div
        className={`group relative transition-all duration-700 ease-out ${
          viewMode === 'grid' ? 'h-full' : ''
        }`}
        onMouseEnter={() => setHoveredProduct(product.id)}
        onMouseLeave={() => setHoveredProduct(null)}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className={`
          relative overflow-hidden transition-all duration-500 cursor-pointer
          ${viewMode === 'grid' 
            ? `rounded-3xl bg-white shadow-lg hover:shadow-2xl h-full ${isHovered ? 'transform -translate-y-4 scale-105' : 'transform translate-y-0 scale-100'}`
            : `rounded-2xl bg-white shadow-md hover:shadow-xl p-6 ${isHovered ? 'transform scale-102' : 'transform scale-100'}`
          }
          backdrop-blur-sm border border-gray-100 hover:border-gray-200
        `}>
          {/* Grid View Content */}
          {viewMode === 'grid' ? (
            <>
              {/* Product Number */}
              <div className={`absolute top-4 left-4 z-20 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg transition-all duration-500 bg-gradient-to-r ${product.color} ${isHovered ? 'transform scale-125 rotate-12' : 'transform scale-100 rotate-0'}`}>
                {product.id}
              </div>

              {/* Image Section */}
              <div className="relative overflow-hidden h-64 rounded-t-3xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain"
                />
                {/* Light overlay only on hover */}
                <div className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                {/* Floating icons */}
                {isHovered && (
                  <>
                    <div className="absolute top-4 right-4 animate-bounce">
                      <Beaker className="w-6 h-6 text-white/80" />
                    </div>
                    <div className="absolute bottom-4 right-4 animate-pulse delay-200">
                      <Shield className="w-5 h-5 text-white/80" />
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${product.color} text-white px-3 py-1 rounded-full text-xs font-medium mb-3 shadow-sm`}>
                  <Package className="w-3 h-3" />
                  {product.category === 'Active Pharmaceutical Ingredients' ? 'API' : 'Excipient'}
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-gray-900">
                  {product.name}
                </h3>

                {/* Standard */}
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">
                    {product.standard}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Properties */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.properties.map((property, idx) => (
                    <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-100">
                      {property}
                    </span>
                  ))}
                </div>

                {/* View Product Button */}
                <button className="group/btn flex items-center gap-2 text-orange-600 font-semibold transition-all duration-300 hover:text-orange-700 text-sm">
                  <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                  View Product
                  <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isHovered ? 'transform translate-x-1' : 'transform translate-x-0'}`} />
                </button>
              </div>
            </>
          ) : (
            /* List View Content - Redesigned for better layout */
            <div className="flex items-start gap-6">
              {/* Product Image */}
              <div className="flex-shrink-0 w-32 h-32 rounded-xl relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain p-2"
                />
                {/* Light overlay only on hover */}
                <div className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white bg-black/30`}>
                  {product.id}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${product.color} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                        <Package className="w-3 h-3" />
                        {product.category === 'Active Pharmaceutical Ingredients' ? 'API' : 'Excipient'}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-3 h-3 text-gray-500" />
                        <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">
                          {product.standard}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="group/btn flex items-center gap-1 text-orange-600 font-semibold transition-all duration-300 hover:text-orange-700 text-sm flex-shrink-0">
                    <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    View
                    <ArrowRight className={`w-3 h-3 transition-all duration-300 ${isHovered ? 'transform translate-x-1' : 'transform translate-x-0'}`} />
                  </button>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Properties */}
                <div className="flex flex-wrap gap-1">
                  {product.properties.map((property, idx) => (
                    <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">
                      {property}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Hover Glow Effect */}
          <div className={`absolute inset-0 ${viewMode === 'grid' ? 'rounded-3xl' : 'rounded-2xl'} bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-orange-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Premium Quality
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            RANGE OF <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">PRODUCTS</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
            WE OFFER
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto"></div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          {/* Search and Filter */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, standard, category, or properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 border border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              )}
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({selectedCategory === 'all' ? category.count : filteredProducts.filter(p => selectedCategory === 'all' || p.category === selectedCategory).length})
                </option>
              ))}
            </select>
          </div>

          {/* View Mode Toggle and Request Button */}
          <div className="flex items-center gap-4">
            {/* Request Product Button */}
            <button
              onClick={() => setShowRequestModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium"
            >
              <Plus className="w-5 h-5" />
              Request Product
            </button>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-xl border border-gray-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search terms or category filter, or request a new product
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                Clear all filters
              </button>
              <button
                onClick={() => setShowRequestModal(true)}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Request Product
              </button>
            </div>
          </div>
        )}

        {/* Products Display */}
        {filteredProducts.length > 0 && (
          <>
            {viewMode === 'grid' ? (
              <>
                {/* Carousel Navigation */}
                {Math.ceil(filteredProducts.length / 3) > 1 && (
                  <div className="flex justify-between items-center mb-8">
                    <button
                      onClick={prevSlide}
                      className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-200 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={currentSlide === 0}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {Array.from({ length: Math.ceil(filteredProducts.length / 3) }, (_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === index 
                              ? 'bg-gradient-to-r from-orange-500 to-red-500 shadow-md' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={nextSlide}
                      className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-200 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={currentSlide === Math.ceil(filteredProducts.length / 3) - 1}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}

                {/* Grid Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {filteredProducts.slice(currentSlide * 3, currentSlide * 3 + 3).map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              </>
            ) : (
              /* List Layout */
              <div className="space-y-4 mb-12">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}

            {/* Results Summary */}
            <div className="text-center mt-12">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''} 
                {selectedCategory !== 'all' && (
                  <span> in <span className="font-semibold">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
                )}
                {searchTerm && (
                  <span> matching "<span className="font-semibold">{searchTerm}</span>"</span>
                )}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Request Product Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setShowRequestModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="p-8 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Request a Product</h2>
                  <p className="text-gray-600">Can't find what you're looking for? Request it here!</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {!requestSubmitted ? (
                <div className="space-y-6">
                  {/* Product Information */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-blue-600" />
                      Product Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Product Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={requestForm.productName}
                          onChange={(e) => handleRequestFormChange('productName', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="e.g., Metformin Hydrochloride"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category *
                        </label>
                        <select
                          required
                          value={requestForm.category}
                          onChange={(e) => handleRequestFormChange('category', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="Active Pharmaceutical Ingredients">Active Pharmaceutical Ingredients</option>
                          <option value="Excipients">Excipients</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Required Standard
                      </label>
                      <input
                        type="text"
                        value={requestForm.standard}
                        onChange={(e) => handleRequestFormChange('standard', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="e.g., BP 2024, USP 47, EP 11"
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Description
                      </label>
                      <textarea
                        value={requestForm.description}
                        onChange={(e) => handleRequestFormChange('description', e.target.value)}
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Describe the product, its intended use, specific requirements, etc."
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-orange-600" />
                      Contact Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={requestForm.contactName}
                          onChange={(e) => handleRequestFormChange('contactName', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          value={requestForm.company}
                          onChange={(e) => handleRequestFormChange('company', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            required
                            value={requestForm.email}
                            onChange={(e) => handleRequestFormChange('email', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            value={requestForm.phone}
                            onChange={(e) => handleRequestFormChange('phone', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-purple-600" />
                      Additional Information
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        value={requestForm.additionalNotes}
                        onChange={(e) => handleRequestFormChange('additionalNotes', e.target.value)}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Any additional requirements, quantity needed, timeline, special specifications, or other relevant information..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowRequestModal(false)}
                      className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleRequestSubmit}
                      className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium"
                    >
                      <Send className="w-5 h-5" />
                      Submit Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Success Message */
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Request Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your product request. Our team will review it and get back to you within 24-48 hours.
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                    <p className="text-sm text-green-700">
                      <strong>What's next?</strong> Our product specialists will evaluate your request and contact you with availability, pricing, and timeline information.
                    </p>
                  </div>
                </div>
              )}

              
            </div>
          </div>
        </div>
      )}

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

export default ProductRange;