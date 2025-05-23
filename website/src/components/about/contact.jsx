import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Calendar,
  FileText,
  Car,
  Map
} from 'lucide-react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    vehicle: '',
    serviceDate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitted: true, error: false });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        vehicle: '',
        serviceDate: ''
      });
    }, 1000);
  };

  // Map component with Leaflet
  const MapComponent = () => {
    useEffect(() => {
      // Create script and link elements to load Leaflet
      const loadLeaflet = () => {
        // Add Leaflet CSS if not already present
        if (!document.querySelector('[href$="leaflet.css"]')) {
          const linkEl = document.createElement('link');
          linkEl.rel = 'stylesheet';
          linkEl.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
          document.head.appendChild(linkEl);
        }
        
        // Add Leaflet JS if not already present
        if (!window.L) {
          const scriptEl = document.createElement('script');
          scriptEl.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
          scriptEl.onload = initializeMap;
          document.head.appendChild(scriptEl);
        } else {
          initializeMap();
        }
      };
      
      // Initialize map after Leaflet is loaded
      const initializeMap = () => {
        if (!document.getElementById('map')) return;
        
        // Check if map is already initialized to prevent duplicate maps
        if (window.mapInstance) {
          window.mapInstance.remove();
        }
        
        // Initialize the map
        const map = window.L.map('map').setView([-17.8689835,31.0470053,17], 13); // Coordinates for Harare
        window.mapInstance = map; // Store reference for cleanup
        
        // Add OpenStreetMap tile layer
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // Add marker for business location
        // These coordinates are for Harare - replace with your actual business location
        const businessLocation = [-17.8689835,31.0470053,17];
        const marker = window.L.marker(businessLocation).addTo(map);
        
        marker.bindPopup("<b>Wonderland Auto Body Shop</b><br>17025 Cedora Road, Graniteside, Harare").openPopup();
      };
      
      loadLeaflet();
      
      // Clean up on component unmount
      return () => {
        if (window.mapInstance) {
          window.mapInstance.remove();
          window.mapInstance = null;
        }
      };
    }, []);
    
    return (
      <div id="map" className="w-full h-full rounded-xl"></div>
    );
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: ['+263 772 334 587'],
      action: { text: 'Call Now', href: 'tel:+263772334587' }
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: ['0242759547'],
      action: { text: 'Call Now', href: 'tel:0242759547' }
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: ['077 270 9851'],
      action: { text: 'Call Now', href: 'tel:0772709851' }
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: [ 'admin@wonderland.co.zw', 'wonderpbtrs@gmail.com',],
      action: { text: 'Send Email', href: 'mailto:admin@wonderland.co.zw' }
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      details: ['17025 Cedora Road, Graniteside', 'Harare, Zimbabwe'],
      action: { text: 'Get Directions', href: 'https://g.co/kgs/dy6H9XV' }
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: ['Mon-Fri: 8AM-4', 'Sat: 8AM-1PM, Sun: Closed'],
      action: { text: 'Book Appointment', href: '/contact' }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Have questions or need a quote? Contact our team for prompt and professional assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 -mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="bg-red-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-red-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <div className="space-y-1 mb-4">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <a 
                  href={item.action.href} 
                  className="inline-flex items-center gap-2 text-red-500 font-medium hover:text-red-600 transition-colors"
                >
                  {item.action.text} <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Map Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Location</h2>
                  <p className="text-gray-600 mb-6">
                    Conveniently located in central Harare with easy access from major highways.
                    Free parking available on premises.
                  </p>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-lg h-96">
                  {/* Real Map Component */}
                  <MapComponent />
                </div>

                {/*<div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Emergency Services</h3>
                  <p className="text-gray-600 mb-4">
                    24/7 towing and emergency assistance available for accidents and breakdowns.
                  </p>
                  <a 
                    href="tel:+263772334587" 
                    className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Phone size={20} /> Emergency Assistance
                  </a>
                </div> */}
              </motion.div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {formStatus.submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-500" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700 mb-6">
                      Thank you for reaching out. One of our representatives will contact you shortly.
                    </p>
                    <button 
                      onClick={() => setFormStatus({ submitted: false, error: false })} 
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                          placeholder="+263 7XX XXX XXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Subject*
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        >
                          <option value="">Select a subject</option>
                          <option value="quote">Request a Quote</option>
                          <option value="appointment">Schedule Appointment</option>
                          <option value="information">General Information</option>
                          <option value="feedback">Feedback</option>
                          <option value="insurance">Insurance Claim</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Vehicle Details
                        </label>
                        <div className="flex items-center">
                          <Car size={20} className="text-gray-400 mr-2" />
                          <input
                            type="text"
                            name="vehicle"
                            value={formData.vehicle}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            placeholder="Year, Make & Model"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Preferred Service Date
                        </label>
                        <div className="flex items-center">
                          <Calendar size={20} className="text-gray-400 mr-2" />
                          <input
                            type="date"
                            name="serviceDate"
                            value={formData.serviceDate}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Message*
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Please provide details about your vehicle repair needs..."
                      ></textarea>
                    </div>

                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="consent" 
                        className="h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-500" 
                        required
                      />
                      <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                        I consent to having this website store my submitted information so they can respond to my inquiry.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full md:w-auto"
                    >
                      <Send size={20} /> Send Message
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Professional Services</h2>
            <p className="text-gray-600">
              With over 20 years of experience, we provide comprehensive auto body repair services with professional quality and excellent customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Panel Beating',
                icon: <FileText size={32} />,
                description: 'Professional restoration of vehicle body panels damaged in collisions.'
              },
              {
                title: 'Auto Painting',
                icon: <MessageSquare size={32} />,
                description: 'High-quality automotive painting with color matching technology.'
              },
              {
                title: 'Dent Removal',
                icon: <CheckCircle size={32} />,
                description: 'Paintless dent repair and traditional dent removal services.'
              },
              {
                title: 'Framework',
                icon: <Car size={32} />,
                description: 'Chassis and framework repairs to restore vehicle structural integrity.'
              },
              {
                title: 'Insurance Claims',
                icon: <FileText size={32} />,
                description: 'Assistance with insurance claims and direct billing to insurers.'
              },
              {
                title: 'Free Estimates',
                icon: <CheckCircle size={32} />,
                description: 'Detailed and transparent cost estimates for all repair services.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-red-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-red-500 font-medium hover:text-red-600 transition-colors"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our services, process, and policies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: 'How long does a typical auto body repair take?',
                answer: 'Repair timeframes depend on the extent of damage. Minor repairs may take 1-2 days, while major collision repairs can take 1-2 weeks. We provide a specific timeline after inspection.'
              },
              {
                question: 'Do you work with insurance companies?',
                answer: 'Yes, we work with all major insurance companies in Zimbabwe and can handle the claims process on your behalf, making the repair process hassle-free for you.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}

            <div className="text-center mt-10">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                View All FAQs <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Restore Your Vehicle?</h2>
            <p className="text-xl text-white/90 mb-10">
              Whether you need collision repair, paint touch-ups, or complete restoration, 
              our skilled technicians are ready to bring your vehicle back to its pre-accident condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+263772334587" 
                className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                <Phone size={20} /> Call Now
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-medium transition-colors"
              >
                <Calendar size={20} /> Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default ContactPage;