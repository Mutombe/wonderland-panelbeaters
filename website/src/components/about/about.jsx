import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Clock,
  Cog,
  Car,
  FileText,
  ThumbsUp,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const tabContent = {
    mission: (
      <div className="space-y-4">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          At Wonderland Panel Beaters, our mission is to restore vehicles to
          their pre-accident condition using state-of-the-art equipment, premium
          materials, and expert craftsmanship. We are committed to providing
          exceptional service with integrity, precision, and transparency.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          We believe every vehicle deserves the highest quality of care, and
          every customer deserves peace of mind. Our panel beating services are
          backed by industry-leading warranties, ensuring your complete
          satisfaction.
        </p>
      </div>
    ),
    process: (
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="bg-red-100 rounded-full p-3 text-red-500 flex-shrink-0 mb-2 sm:mb-0">
            <FileText size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">Free Assessment</h4>
            <p className="text-gray-700">
              Every repair begins with a thorough assessment and detailed cost
              estimate.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="bg-red-100 rounded-full p-3 text-red-500 flex-shrink-0 mb-2 sm:mb-0">
            <Cog size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">Expert Repair</h4>
            <p className="text-gray-700">
              Our certified technicians use advanced techniques and premium
              materials.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="bg-red-100 rounded-full p-3 text-red-500 flex-shrink-0 mb-2 sm:mb-0">
            <ThumbsUp size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">Quality Assurance</h4>
            <p className="text-gray-700">
              Every vehicle undergoes a rigorous inspection before delivery.
            </p>
          </div>
        </div>
      </div>
    ),
    commitment: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <p className="text-gray-700 font-medium">
            Lifetime Warranty on Workmanship
          </p>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <p className="text-gray-700 font-medium">
            Only OEM and Premium Parts Used
          </p>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <p className="text-gray-700 font-medium">
            Transparent Pricing - No Hidden Costs
          </p>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <p className="text-gray-700 font-medium">Regular Progress Updates</p>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
          <p className="text-gray-700 font-medium">
            Insurance Claim Assistance
          </p>
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Mobile Navigation Toggle */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={toggleMenu}
          className="bg-white p-2 rounded-full shadow-lg"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 bg-white z-40 p-6 pt-16 flex flex-col md:hidden"
        >
          <div className="flex flex-col space-y-4">
            <a href="/" className="text-xl font-bold">
              Home
            </a>
            <a href="/about" className="text-xl font-bold text-red-600">
              About Us
            </a>
            <a href="/services" className="text-xl font-bold">
              Services
            </a>
            <a href="/gallery" className="text-xl font-bold">
              Gallery
            </a>
            <a href="/contact" className="text-xl font-bold">
              Contact
            </a>
          </div>
          <div className="mt-auto">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-red-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-red-600" />
                <span>info@wonderlandpanelbeaters.com</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <Facebook className="text-blue-600" />
                <Instagram className="text-pink-600" />
                <Twitter className="text-blue-400" />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-30">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-red-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
          onClick={() => navigate("/contact")}
        >
          <Phone size={24} />
        </motion.button>
      </div>

      {/* Hero Section with Parallax */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/wonder.jpg)",
            scale: scale,
            opacity: opacity,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </motion.div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
              Bringing Your Vehicle Back to{" "}
              <span className="text-red-500">Life</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 leading-relaxed max-w-2xl">
              For over 15 years, Wonderland Panel Beaters has been the trusted
              name in premium auto body repair. Our expert craftsmen restore
              vehicles to their pre-accident condition using cutting-edge
              techniques and premium materials.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold flex items-center gap-2 text-white"
                onClick={() => navigate("/services")}
              >
                Our Services{" "}
                <ArrowRight size={16} className="hidden md:inline" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold flex items-center gap-2 text-red-600"
                onClick={() => navigate("/contact")}
              >
                Get a Quote <Phone size={16} className="hidden md:inline" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Our Mission Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/wonder.jpg"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 md:-bottom-10 -right-5 md:-right-10 bg-red-600 text-white p-4 md:p-8 rounded-xl shadow-lg max-w-xs">
                <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">
                  15+
                </div>
                <div className="text-sm md:text-xl">
                  Years of Excellence in Auto Body Repair
                </div>
              </div>

              {/* Floating Certificate - Hidden on smallest screens */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -top-5 md:-top-10 -left-5 md:-left-10 bg-white p-3 md:p-4 rounded-lg shadow-lg hidden sm:block"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <Award className="text-yellow-500" size={24} />
                  <div>
                    <div className="text-xs md:text-sm text-gray-500">
                      Certified by
                    </div>
                    <div className="text-sm md:text-base font-bold">
                      Auto Body Association
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                Our Commitment to Excellence
              </h2>

              {/* Tabs - Scrollable on mobile */}
              <div className="flex border-b border-gray-200 mb-6 overflow-x-auto scrollbar-hide pb-1">
                {[
                  { id: "mission", label: "Our Mission" },
                  { id: "process", label: "Our Process" },
                  { id: "commitment", label: "Our Commitment" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 md:px-4 py-2 md:py-3 font-medium text-sm md:text-base whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-b-2 border-red-600 text-red-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8 md:mb-10"
              >
                {tabContent[activeTab]}
              </motion.div>

              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    title: "Quality",
                    icon: <Award size={24} />,
                    desc: "Uncompromising standards in every repair",
                  },
                  {
                    title: "Integrity",
                    icon: <Shield size={24} />,
                    desc: "Honest assessments and transparent pricing",
                  },
                  {
                    title: "Expertise",
                    icon: <Users size={24} />,
                    desc: "Certified technicians with ongoing training",
                  },
                  {
                    title: "Innovation",
                    icon: <History size={24} />,
                    desc: "Latest equipment and repair techniques",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-4 md:p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="bg-red-50 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4 text-red-600">
                      {value.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {value.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">
              Our certified professionals bring decades of combined experience
              to every repair, ensuring the highest quality workmanship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Mr Johns",
                position: "Master Technician",
                image: "/user.jpg",
                cert: "I-CAR Platinum Certified",
                exp: "20+ Years Experience",
              },
              {
                name: "Mrs Johns",
                position: "Paint Specialist",
                image: "/user.jpg",
                cert: "PPG Certified",
                exp: "15+ Years Experience",
              },
              {
                name: "Chelsea Johns",
                position: "Marketing",
                image: "/user.jpg",
                cert: "ASE Certified",
                exp: "12+ Years Experience",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="h-48 md:h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-4 md:p-6 border-t border-gray-100">
                  <h3 className="text-lg md:text-xl font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-medium mb-3 md:mb-4">
                    {member.position}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                      <Award
                        size={16}
                        className="text-yellow-500 flex-shrink-0"
                      />
                      <span>{member.cert}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                      <Calendar size={16} className="flex-shrink-0" />
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
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Our Journey
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">
              From humble beginnings to becoming the region's most trusted auto
              body shop
            </p>
          </motion.div>

          {/* Timeline for medium and large screens */}
          <div className="hidden md:block relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-100"></div>

            <div className="space-y-16 md:space-y-24">
              {[
                {
                  year: "2008",
                  title: "Our Beginning",
                  description:
                    "Founded with just 3 team members and a passion for quality repairs",
                },
                {
                  year: "2012",
                  title: "Expansion",
                  description:
                    "Moved to our current location and tripled our capacity",
                },
                {
                  year: "2016",
                  title: "Industry Recognition",
                  description:
                    "Received our first industry award for excellence in customer service",
                },
                {
                  year: "2023",
                  title: "Industry Key Player",
                  description:
                    "Expanded our services and became the region's premier auto body shop",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-red-600 z-10"></div>

                  {/* Content Box */}
                  <div
                    className={`w-5/12 bg-white p-4 md:p-8 rounded-xl shadow-lg ${
                      index % 2 === 0 ? "mr-auto" : "ml-auto"
                    }`}
                  >
                    <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-red-600 text-white rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline for small screens */}
          <div className="md:hidden space-y-6 md:space-y-8">
            {[
              {
                year: "2008",
                title: "Our Beginning",
                description:
                  "Founded with just 3 team members and a passion for quality repairs",
              },
              {
                year: "2012",
                title: "Expansion",
                description:
                  "Moved to our current location and tripled our capacity",
              },
              {
                year: "2016",
                title: "Industry Recognition",
                description:
                  "Received our first industry award for excellence in customer service",
              },
              {
                year: "2023",
                title: "Industry Leaders",
                description:
                  "Expanded our services and became the region's premier auto body shop",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg"
              >
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-red-600 text-white rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4">
                  {milestone.year}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  {milestone.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-red-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Restore Your Vehicle?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Contact us today for a free assessment and experience the Wonderland
            difference.
          </p>
          <button
            className="bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

const StatisticsSection = () => {
  const stats = [
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 10000, label: "Vehicles Repaired", suffix: "+" },
    { value: 99, label: "Customer Satisfaction", suffix: "%" },
    { value: 24, label: "Emergency Service", suffix: "/7" },
  ];

  // Particle component for magical effect
  const Particle = ({ delay }) => (
    <motion.div
      className="absolute w-1 h-1 bg-red-400 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [0, -30, -40],
        x: Math.random() * 30 - 15,
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );

  const CountUp = ({ value, duration = 2, formatNumber = false }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(value * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [value, duration]);

    return <>{formatNumber ? count.toLocaleString() : count}</>;
  };

  return (
    <section className="bg-gray-50 py-8 md:py-12 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-3 md:p-4 relative group"
            >
              {/* Magical particles */}
              {[...Array(5)].map((_, i) => (
                <Particle key={i} delay={i * 0.2} />
              ))}

              <motion.div
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-1 md:mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: index * 0.1,
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <CountUp
                    value={stat.value}
                    formatNumber={stat.value >= 1000}
                  />
                  {stat.suffix}
                </motion.span>
              </motion.div>

              <motion.div
                className="text-xs md:text-sm lg:text-base text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
