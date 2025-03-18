import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Car, PaintBucket, Wrench, Shield, Clock, CheckCircle,
  Cog, FileText, AlertCircle, Camera, ArrowRight, Phone
} from 'lucide-react';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const mainServices = [
    {
      id: 1,
      title: 'Collision Repair',
      icon: <Car size={32} />,
      description: 'Complete collision repair and vehicle restoration services',
      longDescription: 'Our comprehensive collision repair service handles everything from minor damages to major accident repairs. We use state-of-the-art equipment and techniques to restore your vehicle to its pre-accident condition.',
      features: [
        'Frame straightening and alignment',
        'Panel repair and replacement',
        'Structural repairs',
        'Post-repair safety inspections',
        'Insurance claim assistance'
      ],
      process: [
        'Initial damage assessment',
        'Digital imaging and documentation',
        'Repair plan development',
        'Professional repair execution',
        'Quality control inspection'
      ]
    },
    {
      id: 2,
      title: 'Premium Paint Services',
      icon: <PaintBucket size={32} />,
      description: 'Expert color matching and premium paint finishes',
      longDescription: 'Our paint shop delivers showroom-quality finishes using premium materials and advanced spray techniques. We guarantee perfect color matching and lasting protection.',
      features: [
        'Computerized color matching',
        'Premium paint products',
        'Clear coat protection',
        'Custom paint jobs',
        'Paint correction services'
      ],
      process: [
        'Surface preparation',
        'Primer application',
        'Color matching verification',
        'Paint application',
        'Clear coat and finishing'
      ]
    },
    {
      id: 3,
      title: 'Dent Removal',
      icon: <Cog size={32} />,
      description: 'Paintless dent repair and panel beating',
      longDescription: "Using advanced PDR techniques and traditional panel beating methods, we remove dents while preserving your vehicle's original paint finish.",
      features: [
        'Paintless dent repair (PDR)',
        'Traditional panel beating',
        'Hail damage repair',
        'Door ding removal',
        'Minor collision repair'
      ],
      process: [
        'Damage assessment',
        'Technique selection',
        'Dent removal process',
        'Surface refinishing',
        'Quality inspection'
      ]
    }
  ];

  const ServiceCard = ({ service, isSelected, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`cursor-pointer rounded-2xl p-8 transition-all duration-300 ${
        isSelected ? 'bg-red-500 text-white' : 'bg-white hover:bg-red-50'
      }`}
      onClick={() => onClick(service)}
    >
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
        isSelected ? 'bg-white/20' : 'bg-red-50'
      }`}>
        <div className={isSelected ? 'text-white' : 'text-red-500'}>
          {service.icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
      <p className={`mb-6 ${isSelected ? 'text-white/90' : 'text-gray-600'}`}>
        {service.description}
      </p>
      
      <div className="flex items-center gap-2">
        <span>Learn more</span>
        <ArrowRight size={20} />
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Auto Body Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              From minor repairs to complete restorations, our expert team delivers 
              premium quality workmanship on every project.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Shield size={24} />, text: 'Lifetime Warranty' },
                { icon: <Clock size={24} />, text: 'Quick Turnaround' },
                { icon: <Cog size={24} />, text: 'Expert Technicians' },
                { icon: <CheckCircle size={24} />, text: 'Quality Guaranteed' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-white/10 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isSelected={selectedService?.id === service.id}
                onClick={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Selected Service Detail */}
      {selectedService && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">{selectedService.title} Process</h2>
              
              <p className="text-xl text-gray-600 mb-12">
                {selectedService.longDescription}
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="text-red-500" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Our Process</h3>
                  <div className="space-y-6">
                    {selectedService.process.map((step, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-semibold">
                          {index + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-12">
              Contact us now for a free consultation and estimate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+263772334587"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-500 px-8 py-4 rounded-full font-semibold flex items-center gap-2 justify-center"
              >
                <Phone size={20} />
                Call Now
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white px-8 py-4 rounded-full font-semibold"
              >
                Request Quote
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;