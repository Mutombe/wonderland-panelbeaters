import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Camera,
  Play,
  ChevronDown,
  Phone,
  ArrowRightCircle,
  Maximize,
  X,
  MessageCircle,
  Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const [currentComparisonIndex, setCurrentComparisonIndex] = useState(0);
    const [sliderValue, setSliderValue] = useState(50);
    const navigate = useNavigate();
  const sliderRef = useRef(null);
  
  // Categories for filtering
  const categories = ['All', 'Collision Repair', 'Custom Paint', 'Dent Removal', 'Restoration'];
  
  // Gallery items with before/after images
  const galleryItems = [
    {
      id: 1,
      category: 'Collision Repair',
      title: 'Side Panel Collision Repair',
      description: 'Complete restoration of severe side impact damage',
      beforeImage: '/before-collision-1.jpg',
      afterImage: '/after-collision-1.jpg',
      clientName: 'Michael Thompson',
      testimonial: "Incredible work! You can't even tell my car was in an accident.",
      rating: 5,
      tags: ['Panel Replacement', 'Paint Matching', 'Structural Repair']
    },
    {
      id: 2,
      category: 'Custom Paint',
      title: 'Metallic Blue Respray',
      description: 'Full vehicle respray with premium metallic finish',
      beforeImage: '/before-paint-1.jpg',
      afterImage: '/after-paint-1.jpg',
      clientName: 'Sarah Williams',
      testimonial: 'The color is absolutely stunning, better than original!',
      rating: 5,
      tags: ['Custom Color', 'Metallic Finish', 'Clear Coat Protection']
    },
    {
      id: 3,
      category: 'Dent Removal',
      title: 'Hail Damage Restoration',
      description: 'Multiple dent removal across hood and roof',
      beforeImage: '/before-dent-1.jpg',
      afterImage: '/after-dent-1.jpg',
      clientName: 'Robert Chen',
      testimonial: 'Amazing results with no repainting required',
      rating: 5,
      tags: ['PDR Technique', 'Multiple Panels', 'Preservation']
    },
    {
      id: 4,
      category: 'Restoration',
      title: 'Classic Car Restoration',
      description: 'Complete restoration of 1967 classic model',
      beforeImage: '/before-restoration-1.jpg',
      afterImage: '/after-restoration-1.jpg',
      clientName: 'David Miller',
      testimonial: "You brought my father's car back to life. Incredible craftsmanship!",
      rating: 5,
      tags: ['Vintage', 'Full Restoration', 'Panel Fabrication']
    },
    {
      id: 5,
      category: 'Collision Repair',
      title: 'Front End Collision Repair',
      description: 'Comprehensive repair of front-end damage',
      beforeImage: '/before-collision-2.jpg',
      afterImage: '/after-collision-2.jpg',
      clientName: 'Jennifer Lopez',
      testimonial: 'Perfect repair and finished ahead of schedule!',
      rating: 5,
      tags: ['Bumper Replacement', 'Frame Alignment', 'Headlight Restoration']
    },
    {
      id: 6,
      category: 'Custom Paint',
      title: 'Matte Black Conversion',
      description: 'Full vehicle conversion to premium matte finish',
      beforeImage: '/before-paint-2.jpg',
      afterImage: '/after-paint-2.jpg',
      clientName: 'Kevin Hart',
      testimonial: 'The matte finish is exactly what I wanted. Turns heads everywhere!',
      rating: 5,
      tags: ['Matte Finish', 'Full Vehicle', 'Protective Coating']
    }
  ];
  
  // Filter gallery items based on active category
  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);
  
  // Handle slider movement for before/after comparison
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  // Handle slider drag for mobile devices
  const handleTouchMove = (e) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const newValue = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderValue(newValue);
    }
  };
  
  // Open comparison modal with specific gallery item
  const openComparisonModal = (index) => {
    setCurrentComparisonIndex(index);
    setIsComparisonModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  // Close comparison modal
  const closeComparisonModal = () => {
    setIsComparisonModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Navigation for comparison modal
  const navigateComparison = (direction) => {
    const newIndex = (currentComparisonIndex + direction + filteredItems.length) % filteredItems.length;
    setCurrentComparisonIndex(newIndex);
    setSliderValue(50); // Reset slider position
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gallery-hero-bg.jpg')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-red-500"></div>
              <span className="text-red-500 font-medium">Our Work</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transformation <span className="text-red-500">Gallery</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8">
              Witness the artistry and precision of our auto body work through our 
              portfolio of before and after transformations.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2"
            >
              <Camera size={20} />
              Schedule Your Transformation
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Category Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === category 
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Preview Image with CTA overlay */}
                <div 
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => openComparisonModal(index)}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.afterImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 text-white font-medium">
                      <Maximize size={18} />
                      See Before/After
                    </div>
                  </div>
                </div>
                
                {/* Gallery Item Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-3 py-1 bg-red-50 text-red-500 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold text-gray-700">
                          {item.clientName.charAt(0)}
                        </div>
                        <span className="text-sm font-medium">{item.clientName}</span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="px-6 py-3 bg-gray-50 border-t border-gray-100 text-sm flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => openComparisonModal(index)}
                >
                  <span className="font-medium">Compare Before/After</span>
                  <ArrowRightCircle size={18} className="text-red-500" />
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400">
                No items found in this category
              </h3>
              <p className="text-gray-500 mt-2">
                Try selecting a different category or check back later
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready for Your Vehicle's Transformation?
            </h2>
            <p className="text-xl mb-12">
              Whether it's collision repair, custom paint, or restoration work,
              our team delivers exceptional results every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+263772334587"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 justify-center"
              >
                <Phone size={20} />
                Call For Consultation
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="border-2 border-white/30 hover:border-white bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold flex items-center gap-2 justify-center"
              >
                Get Free Quote
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Before/After Comparison Modal */}
      <AnimatePresence>
        {isComparisonModalOpen && filteredItems[currentComparisonIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <div className="absolute top-4 right-4 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeComparisonModal}
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20"
              >
                <X size={24} className="text-white" />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigateComparison(-1)}
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20"
              >
                <ArrowLeft size={24} className="text-white" />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigateComparison(1)}
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20"
              >
                <ArrowRight size={24} className="text-white" />
              </motion.button>
            </div>
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-5xl flex flex-col"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-t-xl p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {filteredItems[currentComparisonIndex].title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {filteredItems[currentComparisonIndex].description}
                  </p>
                </div>
                <div className="bg-red-500 rounded-full px-4 py-1 text-sm font-medium">
                  {filteredItems[currentComparisonIndex].category}
                </div>
              </div>
              
              {/* Before/After Comparison Slider */}
              <div 
                className="relative w-full h-[60vh] md:h-[70vh] bg-black overflow-hidden"
                ref={sliderRef}
                onTouchMove={handleTouchMove}
              >
                {/* Before Image (Full Width) */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${filteredItems[currentComparisonIndex].beforeImage})` 
                  }}
                />
                
                {/* After Image (Clipped by slider) */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${filteredItems[currentComparisonIndex].afterImage})`,
                    clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)` 
                  }}
                />
                
                {/* Divider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-white"
                  style={{ left: `${sliderValue}%` }}
                />
                
                {/* Slider Handle */}
                <div 
                  className="absolute top-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-move transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${sliderValue}%` }}
                >
                  <div className="flex items-center">
                    <ArrowLeft size={12} className="text-gray-700" />
                    <ArrowRight size={12} className="text-gray-700" />
                  </div>
                </div>
                
                {/* Before/After Labels */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium">
                  After
                </div>
                
                {/* Hidden slider for accessibility */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={handleSliderChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  aria-label="Before and after comparison slider"
                />
              </div>
              
              {/* Testimonial Section */}
              <div className="bg-white/5 backdrop-blur-md rounded-b-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-white shrink-0">
                    {filteredItems[currentComparisonIndex].clientName.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium text-white">
                        {filteredItems[currentComparisonIndex].clientName}
                      </h4>
                      <div className="flex">
                        {[...Array(filteredItems[currentComparisonIndex].rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/80 italic">
                      "{filteredItems[currentComparisonIndex].testimonial}"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6 text-white/60 text-sm">
                <span>Use slider to compare before and after images</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;