import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Award,
  Shield,
  ArrowRight,
  Calendar,
  CheckCircle,
  Star,
  History,
  Map,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: 'url(/workshop.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Story of <span className="text-red-500">Excellence</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              For over 15 years, we've been passionate about restoring vehicles to their former glory. 
              Our commitment to quality craftsmanship and customer satisfaction has made us the premier 
              auto body shop in the region.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 text-white"
            >
              Our Services <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/team.jpg" 
                  alt="Our Team" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-red-500 text-white p-6 md:p-8 rounded-xl shadow-lg max-w-xs">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-xl">Years of Excellence in Auto Body Repair</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              
              <div className="mb-8 text-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Our mission is simple: to provide the highest quality auto body repair services 
                  with integrity, precision, and customer care that exceeds expectations.
                </p>
                <p>
                  We believe in transparency throughout the repair process, using only premium 
                  materials, and standing behind our work with industry-leading warranties.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Quality", icon: <Award size={24} />, desc: "Uncompromising standards in every repair" },
                  { title: "Integrity", icon: <Shield size={24} />, desc: "Honest assessments and transparent pricing" },
                  { title: "Expertise", icon: <Users size={24} />, desc: "Certified technicians with ongoing training" },
                  { title: "Innovation", icon: <History size={24} />, desc: "Latest equipment and repair techniques" }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-xl"
                  >
                    <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-red-500">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">
              Our certified professionals bring decades of combined experience to every repair,
              ensuring the highest quality workmanship.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Michael Thompson",
                position: "Master Technician",
                image: "/team-member1.jpg",
                cert: "I-CAR Platinum Certified",
                exp: "20+ Years Experience"
              },
              {
                name: "Sarah Johnson",
                position: "Paint Specialist",
                image: "/team-member2.jpg",
                cert: "PPG Certified",
                exp: "15+ Years Experience"
              },
              {
                name: "David Chen",
                position: "Body Work Expert",
                image: "/team-member3.jpg",
                cert: "ASE Certified",
                exp: "12+ Years Experience"
              },
              {
                name: "Lisa Rodriguez",
                position: "Customer Service Manager",
                image: "/team-member4.jpg",
                cert: "Customer Service Excellence",
                exp: "10+ Years Experience"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-red-500 font-medium mb-4">{member.position}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award size={16} />
                      <span>{member.cert}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={16} />
                      <span>{member.exp}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to becoming the region's most trusted auto body shop
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-100"></div>
            
            <div className="space-y-24">
              {[
                {
                  year: "2008",
                  title: "Our Beginning",
                  description: "Founded with just 3 team members and a passion for quality repairs"
                },
                {
                  year: "2012",
                  title: "Expansion",
                  description: "Moved to our current location and tripled our capacity"
                },
                {
                  year: "2016",
                  title: "Industry Recognition",
                  description: "Received our first industry award for excellence in customer service"
                },
                {
                  year: "2023",
                  title: "Industry Leaders",
                  description: "Expanded our services and became the region's premier auto body shop"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-red-500 z-10"></div>
                  
                  {/* Content Box */}
                  <div className={`w-5/12 bg-gray-50 p-8 rounded-xl shadow-lg ${
                    index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                  }`}>
                    <div className="inline-block px-4 py-2 bg-red-500 text-white rounded-full text-sm font-bold mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-white/80">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Robert Parker",
                vehicle: "BMW 3 Series",
                comment: "After my accident, I thought my car would never look the same again. The team restored it perfectly. Couldn't be happier with the results!"
              },
              {
                name: "Jennifer Williams",
                vehicle: "Toyota Highlander",
                comment: "Professional, transparent, and fast. They kept me updated throughout the entire process and delivered exactly what they promised."
              },
              {
                name: "Marcus Stevens",
                vehicle: "Audi Q5",
                comment: "The attention to detail is incredible. They didn't just repair the damage - they made my car look better than before the accident!"
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl relative"
              >
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="inline-block mr-1 text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                
                <p className="text-white/90 mb-6 italic">"{review.comment}"</p>
                
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-white/70">{review.vehicle}</p>
                </div>
                
                <div className="absolute top-6 right-8 text-red-500 opacity-30">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 text-white text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Premium Auto Body Services?</h2>
            <p className="text-xl mb-10">
              Contact us today and see why we're the most trusted name in auto body repair.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 hover:bg-white/90 px-10 py-4 rounded-full font-semibold text-lg"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;