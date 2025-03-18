import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Info Bar - Both Mobile and Desktop */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-2">
                <Phone size={16} />
                +263 77 233 4587
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                17025 Cedora Road, Graniteside, Harare
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              Mon - Sat: 8:00 AM - 6:00 PM
            </div>
          </div>
          {/* Mobile Top Bar */}
          <div className="md:hidden flex justify-center items-center text-sm">
            <span className="flex items-center gap-2">
              <Phone size={16} />
              +263 77 233 4587
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-lg'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-shrink-0"
              >
                <img
                  src="/logo1.jpeg"
                  alt="Wonderland Panel Beaters"
                  className="h-15"
                />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className={`text-gray-800 font-medium transition-colors ${
                      isActive(item.href) ? 'text-red-600 border-b-2 border-red-600' : 'hover:text-red-600'
                    }`}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-6 py-2 rounded-full font-medium"
              >
                Get Quote
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden flex items-center gap-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="text-sm font-medium">Menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <div className="container mx-auto px-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      whileHover={{ x: 10 }}
                      className={`py-3 font-medium border-b border-gray-100 ${
                        isActive(item.href) ? 'text-red-600' : 'text-gray-800 hover:text-red-600'
                      }`}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-red-600 text-white px-6 py-3 rounded-full font-medium"
                >
                  Get Quote
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;