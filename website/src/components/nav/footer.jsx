import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/logo-white.png" alt="Logo" className="h-12 mb-6" />
            <p className="text-gray-400">
              Professional panel beating services in Harare. Quality work, guaranteed satisfaction.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Collision Repair</li>
              <li className="text-gray-400">Spray Painting</li>
              <li className="text-gray-400">Dent Removal</li>
              <li className="text-gray-400">General Service</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={20} />
                +263 77 233 4587
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={20} />
                17025 Cedora Road, Graniteside, Harare
              </li>
              <li className="flex items-center gap-2">
                <Clock size={20} />
                Mon - Sat: 8:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Wonderland Panel Beaters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;