import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Map,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-6">Wonderland Panel Beaters</h3>
            <p className="text-gray-400 mb-6">
              Providing expert auto body repair services with integrity and
              precision since 1997.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/wonderlandpanelbeaters?igsh=bTFjOGEzaHRtaWh2&utm_source=qr"
                className="text-gray-400 hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/wonderlandpanelbeaters"
                className="text-gray-400 hover:text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://zw.linkedin.com/in/wonderland-panel-beaters-b28515175"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  Collision Repair
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  Dent Removal
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  Paint Restoration
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  Frame Alignment
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  Glass Replacement
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Map size={16} className="text-red-500" />
                <span className="text-gray-400">
                  17025 Cedora Road, Graniteside, Harare
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-red-500" />
                <span className="text-gray-400">+263 77 233 4587</span>
                <span className="text-gray-400">+263 77 270 9581</span>
                <span className="text-gray-400">+263 77 239 2898</span>
                <span className="text-gray-400">+263 24 275 9547</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-red-500" />
                <span className="text-gray-400">admin@wonderland.co.zw</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-red-500" />
                <span className="text-gray-400">Mon-Fri: 8AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Wonderland Panel Beaters. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
