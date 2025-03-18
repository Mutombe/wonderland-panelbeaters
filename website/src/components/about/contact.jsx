import React, { useState } from 'react';
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

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: ['+263 772 334 587', '+263 242 776 543'],
      action: { text: 'Call Now', href: 'tel:+263772334587' }
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: ['info@wonderland.co.zw', 'admin@wonderland.co.zw'],
      action: { text: 'Send Email', href: 'mailto:info@wonderland.co.zw' }
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      details: ['17025 Cedora Road, Graniteside', 'Harare, Zimbabwe'],
      action: { text: 'Get Directions', href: '#' }
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: ['Mon-Fri: 8AM-6PM', 'Sat: 9AM-2PM, Sun: Closed'],
      action: { text: 'Book Appointment', href: '#' }
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
                  {/* Replace with actual map component or embed */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <Map size={48} className="text-gray-400" />
                    <span className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow text-sm font-medium">
                      Interactive Map
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
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
                </div>
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
              {
                question: 'Do you offer warranties on your work?',
                answer: 'Yes, we provide a 2-year warranty on all panel beating and painting work, giving you peace of mind about the quality of our repairs.'
              },
              {
                question: 'Can I get a courtesy car while mine is being repaired?',
                answer: 'Yes, we offer courtesy vehicles subject to availability. Please inquire about this service when booking your repair.'
              }
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
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Auto Body Shop</h3>
              <p className="text-gray-400 mb-6">
                Professional auto body repairs and painting services in Harare, Zimbabwe.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons */}
                {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="bg-gray-700 hover:bg-red-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    {/* Replace with actual social icons */}
                    <div className="h-5 w-5 bg-white opacity-80 rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {['Panel Beating', 'Auto Painting', 'Dent Removal', 'Framework', 'Insurance Claims'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="text-red-500 mr-3 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-400">123 Repair Street, Harare, Zimbabwe</span>
                </li>
                <li className="flex items-center">
                  <Phone className="text-red-500 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-400">+263 772 334 587</span>
                </li>
                <li className="flex items-center">
                  <Mail className="text-red-500 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-400">info@autobodyshop.com</span>
                </li>
                <li className="flex items-center">
                  <Clock className="text-red-500 mr-3 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Mon-Fri: 8AM-6PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Auto Body Shop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;