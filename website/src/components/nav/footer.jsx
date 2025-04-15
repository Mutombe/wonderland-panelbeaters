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
                  Panel Beating
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  Fleet Maintenance
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  Suspensions
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  Auto Electrics
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  Upholstery
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
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-red-500 mt-1" />
                <div className="text-gray-400 grid gap-1">
                  <a href="tel:+263772334587" className="hover:text-white">+263 77 233 4587</a>
                  <a href="tel:+263772709581" className="hover:text-white">+263 77 270 9581</a>
                  <a href="tel:+263772392898" className="hover:text-white">+263 77 239 2898</a>
                  <a href="tel:+263242759547" className="hover:text-white">+263 24 275 9547</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-red-500" />
                <a href="mailto:admin@wonderland.co.zw" className="text-gray-400 hover:text-white">
                  admin@wonderland.co.zw
                </a>
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
          <p className="mt-2">
            Developed by <a href="https://zettabyte.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Zettabyte</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
