import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building, Truck, Star, User, ChevronUp, ChevronDown } from "lucide-react";

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("corporate");
  const [isTestimonialExpanded, setIsTestimonialExpanded] = useState(false);

  const corporateClients = [
    "Zimbabwe Tourism Authority",
    "FBC Insurance",
    "Alliance Insurance",
    "Hunter Adams Insurance Brokers",
    "Parogon Printers",
    "Old Mutual Insurance",
    "Ministry Of Industry",
    "Zimbabwe Power Company",
    "Credsure Insurance",
    "Incorporated Food & Beverages",
    "Evolution Insurance",
    "Fourways Concrete",
    "Led Travel & Tours",
    "Tusilago Kitchens",
    "Cell Insurance",
    "Nashua Zimbabwe"
  ];

  const suppliers = [
    "Nash Paints",
    "Boc Gases",
    "Pak Japan Motors",
    "Astra Paints",
    "Zimoco",
    "Midas",
    "Toyota Zimbabwe",
    "Nissan Clover Leaf Motors",
    "Gesture Paints",
    "Mazuda Spares",
    "Electrosales",
    "Paint & Air Centre"
  ];

  const testimonials = [
    {
      name: "David Moyo",
      company: "Zimbabwe Tourism Authority",
      content: "Wonderland Panel Beaters has consistently provided exceptional service for our fleet vehicles. Their attention to detail and quick turnaround time has been invaluable to our operations.",
      rating: 5
    },
    {
      name: "Sarah Nkomo",
      company: "FBC Insurance",
      content: "As an insurance company, we value partners who deliver quality repairs with minimal hassle for our clients. Wonderland has proven to be reliable and professional in all our dealings.",
      rating: 5
    },
    {
      name: "Michael Takura",
      company: "Cell Insurance",
      content: "We've been working with Wonderland Panel Beaters for over 3 years, and they consistently exceed our expectations in terms of quality and service delivery for our insured clients.",
      rating: 4
    }
  ];

  const staggeredAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-600 text-white">
        <div className="absolute inset-0 bg-[url('/workshop.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Our Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Wonderland Panel Beaters boasts a high level of experience. Our quality, productivity and efficiency outstrips many entities of the same size.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden">
              <button
                className={`px-6 py-3 text-lg font-medium ${
                  activeTab === "corporate"
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("corporate")}
              >
                <Building className="inline-block mr-2" size={20} />
                Corporate Clients
              </button>
              <button
                className={`px-6 py-3 text-lg font-medium ${
                  activeTab === "suppliers"
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("suppliers")}
              >
                <Truck className="inline-block mr-2" size={20} />
                Our Suppliers
              </button>
              <button
                className={`px-6 py-3 text-lg font-medium ${
                  activeTab === "testimonials"
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("testimonials")}
              >
                <Star className="inline-block mr-2" size={20} />
                Testimonials
              </button>
            </div>
          </div>

          {activeTab === "corporate" && (
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggeredAnimation}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12">Our Corporate Clientele</h2>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {corporateClients.map((client, index) => (
                    <motion.div
                      key={index}
                      variants={itemAnimation}
                      className="flex items-center p-4 rounded-lg border border-gray-100 hover:bg-red-50 transition-colors duration-300"
                    >
                      <Building className="mr-3 text-red-500" size={24} />
                      <span className="font-medium">{client}</span>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={itemAnimation}
                    className="flex items-center p-4 rounded-lg border border-gray-100 bg-gray-50"
                  >
                    <User className="mr-3 text-gray-500" size={24} />
                    <span className="text-gray-600 italic">And many individual clients too numerous to mention</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === "suppliers" && (
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggeredAnimation}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-6">Our Suppliers</h2>
              <p className="text-center text-gray-600 mb-12">
                The company sources its products from both the local and foreign markets, which include South Africa, Dubai and Botswana.
              </p>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {suppliers.map((supplier, index) => (
                    <motion.div
                      key={index}
                      variants={itemAnimation}
                      className="flex items-center p-4 rounded-lg border border-gray-100 hover:bg-red-50 transition-colors duration-300"
                    >
                      <Truck className="mr-3 text-red-500" size={24} />
                      <span className="font-medium">{supplier}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === "testimonials" && (
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggeredAnimation}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
              <motion.div className="space-y-6">
                {testimonials.slice(0, isTestimonialExpanded ? testimonials.length : 2).map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={itemAnimation}
                    className="bg-white rounded-2xl shadow-lg p-8"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.company}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.content}</p>
                  </motion.div>
                ))}
                <div className="text-center">
                  <button
                    onClick={() => setIsTestimonialExpanded(!isTestimonialExpanded)}
                    className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
                  >
                    {isTestimonialExpanded ? (
                      <>
                        Show less <ChevronUp className="ml-1" size={16} />
                      </>
                    ) : (
                      <>
                        View more <ChevronDown className="ml-1" size={16} />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Global Reach</h2>
            <p className="text-lg text-gray-600 mb-12">
              Wonderland Panel Beaters sources high-quality products from international markets to provide the best service to our clients.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
                {/* This would be replaced with an actual map component or image */}
                <div className="absolute inset-0 bg-[url('/api/placeholder/800/450')] bg-cover bg-center"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-600 font-medium">Interactive World Map</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { country: "Zimbabwe", desc: "Local suppliers providing quality materials" },
                  { country: "South Africa", desc: "Premium automotive parts and paint supplies" },
                  { country: "Dubai & Botswana", desc: "Specialized equipment and materials" }
                ].map((location, index) => (
                  <div key={index} className="p-4 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-lg mb-2">{location.country}</h3>
                    <p className="text-gray-600">{location.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Growing List of Satisfied Clients</h2>
            <p className="text-xl mb-12">
              Experience the Wonderland difference for your vehicle repair and maintenance needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg"
            >
              Contact Us Today
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;