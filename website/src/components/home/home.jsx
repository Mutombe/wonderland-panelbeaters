import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Shield,
  Clock,
  Settings,
  RefreshCw,
  ThumbsUp,
  AlertCircle,
  ArrowRight,
  Star,
  Info,
  Car,
  PaintBucket,
  Cog,
  File,
  Wrench,
  Phone,
  MessageSquare,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Award,
  Users,
  Camera,
  FileText,
} from "lucide-react";
import { Clipboard, Zap, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const heroImages = ["/crashed2.png", "/crashed3.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: "99%", label: "Satisfied Clients" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="relative bg-white">
      <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroImages[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 relative lg:py-0 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-4xl"
          >
            <motion.div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <span className="bg-red-500 px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                Premium Auto Body Shop
              </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Quality
              <span className="block text-red-500">You can bank on</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <p className="text-lg sm:text-xl text-white/90">
                Experience unmatched quality in auto body repair, where
                precision meets perfection.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Certified Professional Team",
                  "Latest Technology & Equipment",
                  "Free Detailed Estimates",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3"
                  >
                    <CheckCircle className="text-red-500 shrink-0" size={20} />
                    <span className="text-sm sm:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-20 sm:mb-32">
              <motion.button
                              whileHover={{ scale: 1.02 }}
                              onClick={() => navigate('/contact')}
                whileTap={{ scale: 0.98 }}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 justify-center transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              >
                Get Instant Quote <ArrowRight size={20} />
              </motion.button>

              <motion.a
                href="tel:+263772334587"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/30 hover:border-white bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold flex items-center gap-2 justify-center transition-all duration-300"
              >
                <Phone size={20} />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>

        <MagicalStats />

        {/* Floating Stats */}

        
      </section>
      <FeaturedServicesSection2 />

      {/* Work Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-12 bg-red-500"></div>
              <span className="text-red-500 font-medium">Our Process</span>
              <div className="h-1 w-12 bg-red-500"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Craftsmanship in <span className="text-red-500">Action</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach combines cutting-edge technology with
              traditional craftsmanship to deliver exceptional results on every
              project.
            </p>
          </motion.div>

          {/* Interactive Process Timeline 
          <div className="relative mb-20">
         
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-red-300 to-red-500 transform -translate-x-1/2 hidden md:block" />

            
            {[
              {
                number: "01",
                title: "Comprehensive Assessment",
                icon: <Clipboard size={28} />,
                description:
                  "Our technicians perform a thorough examination of your vehicle, identifying all damage points and structural concerns. We use advanced diagnostic tools to uncover issues invisible to the naked eye.",
                image: "/asess.jpg",
                duration: "1-2 Hours",
                highlights: [
                  "Digital vehicle scanning",
                  "Structural analysis",
                  "Paint condition assessment",
                  "Detailed documentation",
                ],
              },
              {
                number: "02",
                title: "Customized Service Plan",
                icon: <PaintBucket size={28} />,
                description:
                  "We develop a tailored repair strategy specific to your vehicle's needs. Our experts create a comprehensive plan covering materials, techniques, and timeline to ensure optimal results.",
                image: "/plan.jpg",
                duration: "24-48 Hours",
                highlights: [
                  "Transparent cost breakdown",
                  "Material selection guidance",
                  "Process timeline mapping",
                  "Repair priority structuring",
                ],
              },
              {
                number: "03",
                title: "Precision Restoration",
                icon: <Cog size={28} />,
                description:
                  "Our certified technicians execute the repair plan with meticulous attention to detail. Using state-of-the-art equipment and premium materials, we restore your vehicle to its optimal condition.",
                image: "/precision.jpg",
                duration: "3-10 Days",
                highlights: [
                  "Factory-standard techniques",
                  "OEM part integration",
                  "Computer-matched paint mixing",
                  "Progressive quality checks",
                ],
              },
              {
                number: "04",
                title: "Quality Assurance",
                icon: <CheckCircle size={28} />,
                description:
                  "Each vehicle undergoes rigorous inspection and testing before delivery. Our multi-point verification process ensures every repair meets our exacting standards for quality and durability.",
                image: "/quality.webp",
                duration: "24 Hours",
                highlights: [
                  "200-point inspection process",
                  "Paint thickness verification",
                  "Alignment confirmation",
                  "Road test validation",
                ],
              },
            ].map((step, index) => (
{/*<motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center mb-12 md:mb-20 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
          
                <div
                  className={`w-full md:w-5/12 mb-8 md:mb-0 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-xl"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${step.image})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={18} className="text-red-300" />
                        <span className="text-white/80 text-sm">
                          Typical duration: {step.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
                          {step.number}
                        </div>
                        <h4 className="font-bold text-white text-lg">
                          {step.title}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node - Only visible on md and up 
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.1, type: "spring" }}
                    className="relative z-10"
                  >
                    <div className="bg-white h-16 w-16 rounded-full shadow-lg flex items-center justify-center border-4 border-red-500">
                      <div className="text-red-500">{step.icon}</div>
                    </div>
                  </motion.div>
                </div>*/}

                {/* Process Details 
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                  }`}
                >
                  {/* Mobile-only icon - hidden on md and up 
                  <div className="flex items-center gap-4 mb-4 md:hidden">
                    <div className="bg-red-500 h-14 w-14 rounded-full flex items-center justify-center text-white shadow-lg">
                      {step.icon}
                    </div>
                    <div className="bg-red-500/10 px-4 py-2 rounded-full">
                      <span className="font-bold text-red-500">
                        Step {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 hidden md:block">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>

                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Zap size={18} className="text-red-500" />
                      Process Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                          <span className="text-sm text-gray-600">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process number badge - desktop only
                  <div className="hidden md:flex mt-6">
                    <div className="bg-gray-100 rounded-full px-4 py-1 text-sm flex items-center gap-2">
                      <span className="font-medium text-gray-500">
                        Next Step
                      </span>
                      <ArrowRight size={14} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>*/}

          {/* Process Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              Our Service Guarantees
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield size={24} />,
                  title: "Lifetime Warranty",
                  description:
                    "All our repairs come with a comprehensive lifetime warranty for your complete peace of mind.",
                },
                {
                  icon: <Award size={24} />,
                  title: "Certified Expertise",
                  description:
                    "Our technicians are industry certified with continuous training on latest techniques.",
                },
                {
                  icon: <Users size={24} />,
                  title: "Customer-First Approach",
                  description:
                    "We prioritize transparent communication and exceptional service throughout the process.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-red-50 h-16 w-16 rounded-full flex items-center justify-center text-red-500 mb-4">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-xl mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
                  </motion.div>
                  
                  <PricingSection />

          {/* FAQ Accordion */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h3>

            {[
              {
                question: "How long does the typical repair process take?",
                answer:
                  "Repair timelines vary based on the extent of damage and required work. Minor repairs may take 1-3 days, while comprehensive restorations can take 1-2 weeks. We provide detailed timelines during your consultation and keep you updated throughout the process.",
              },
              {
                question: "Do you provide courtesy vehicles during repairs?",
                answer:
                  "Yes, we offer complimentary courtesy vehicles for repairs expected to take more than 24 hours, subject to availability. We also work with most insurance companies to arrange rental coverage when applicable.",
              },
              {/*
                question: "Will my insurance cover your repair services?",
                answer:
                  "We work with all major insurance providers and can guide you through the claims process. Our team handles direct communication with insurance adjusters to ensure smooth processing of your claim.",
              */}
            ].map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/contact")}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto"
            >
              <Camera size={20} />
              Schedule Your Service Consultation
            </motion.button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Restore Your Vehicle?
            </h2>
            <p className="text-xl mb-12">
              Get your free quote today and experience premium auto body repair
              services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => navigate("/contact")}
                className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-semibold"
              >
                Get Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => navigate("/gallery")}
                className="border-2 border-white px-8 py-4 rounded-full font-semibold"
              >
                View Our Work
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [isDetailOpen, setIsDetailOpen] = useState({});
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [comparisonVisible, setComparisonVisible] = useState(false);

  // Animation settings
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  // Pricing data
  const pricingData = {
    monthly: {
      basic: { price: 399, discount: null },
      premium: { price: 699, discount: "15% OFF" },
      complete: { price: 1299, discount: "20% OFF" },
    },
    annually: {
      basic: { price: 349, discount: "Save $600/year" },
      premium: { price: 599, discount: "Save $1200/year" },
      complete: { price: 1099, discount: "Save $2400/year" },
    },
  };

  // Service packages
  const packages = [
    {
      id: "basic",
      name: "Essential",
      description: "Quality repairs for minor to moderate damage",
      features: [
        {
          name: "Minor Dent Repair",
          included: true,
          description: "PDR technology for small dents and dings",
        },
        {
          name: "Basic Paint Touch-up",
          included: true,
          description: "Color matching and blending for small areas",
        },
        {
          name: "Bumper Repair",
          included: true,
          description: "Fixes for minor bumper damage and scratches",
        },
        {
          name: "Interior Detailing",
          included: false,
          description: "Full interior cleaning and restoration",
        },
        {
          name: "Premium Paint Protection",
          included: false,
          description: "Ceramic coating for long-term protection",
        },
      ],
      bestFor: [
        "Individual vehicle owners",
        "Minor cosmetic damage",
        "Budget-conscious customers",
      ],
      turnaround: "3-5 business days",
      rating: 4.7,
      popular: false,
      accent: "bg-blue-500",
    },
    {
      id: "premium",
      name: "Premium",
      description: "Comprehensive repair and restoration solutions",
      features: [
        {
          name: "Full Dent Repair Service",
          included: true,
          description: "Complete dent removal on all vehicle panels",
        },
        {
          name: "Premium Paint Service",
          included: true,
          description: "Full panel respray with premium materials",
        },
        {
          name: "Bumper Repair & Refinish",
          included: true,
          description: "Complete bumper restoration or replacement",
        },
        {
          name: "Interior Detailing",
          included: true,
          description: "Full interior cleaning and restoration",
        },
        {
          name: "Premium Paint Protection",
          included: true,
          description: "Ceramic coating for long-term protection",
        },
      ],
      bestFor: [
        "Luxury vehicle owners",
        "Comprehensive restoration",
        "Quality-focused customers",
      ],
      turnaround: "5-7 business days",
      rating: 4.9,
      popular: true,
      accent: "bg-red-500",
    },
    {
      id: "complete",
      name: "Complete",
      description: "Ultimate restoration package with premium upgrades",
      features: [
        {
          name: "Full Vehicle Restoration",
          included: true,
          description: "Complete bodywork restoration",
        },
        {
          name: "Premium Custom Paint",
          included: true,
          description: "Custom paint with premium finishes",
        },
        {
          name: "Complete Exterior Overhaul",
          included: true,
          description: "Full exterior restoration and enhancement",
        },
        {
          name: "Premium Detailing",
          included: true,
          description: "Interior and exterior detailing with premium products",
        },
        {
          name: "Elite Paint Protection",
          included: true,
          description: "Premium ceramic coating with 10-year guarantee",
        },
      ],
      bestFor: ["Classic car owners", "Show vehicles", "Premium & exotic cars"],
      turnaround: "7-14 business days",
      rating: 5.0,
      popular: false,
      accent: "bg-purple-500",
    },
  ];

  // Toggle billing cycle
  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly");
  };

  // Toggle feature details
  const toggleDetails = (packageId, featureIndex) => {
    const key = `${packageId}-${featureIndex}`;
    setIsDetailOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Calculate savings
  const calculateSavings = (planId) => {
    const monthly = pricingData.monthly[planId].price;
    const annually = pricingData.annually[planId].price;
    return Math.round(((monthly * 12 - annually * 12) / (monthly * 12)) * 100);
  };

  // Get accent color class
  const getAccentColor = (planId) => {
    const plan = packages.find((p) => p.id === planId);
    return plan ? plan.accent : "bg-gray-500";
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50 rounded-full filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-blue-50 rounded-full filter blur-3xl opacity-70 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-1/4 h-1/4 bg-purple-50 rounded-full filter blur-3xl opacity-70 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full mb-6">
            <Sparkles size={18} className="text-red-500 mr-2" />
            <span className="text-sm font-semibold text-red-500">
              Transparent Pricing, Outstanding Value
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Service <span className="text-red-500">Packages</span> Tailored to
            Your Needs
          </h2>

          <p className="text-xl text-gray-600">
            We offer comprehensive auto body repair packages designed to deliver
            exceptional results regardless of your vehicle's condition or your
            budget.
          </p>
        </motion.div>

        {/* Billing cycle toggle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center mb-12"
        >
          <div className="bg-white p-2 rounded-full shadow-lg inline-flex items-center">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                billingCycle === "monthly"
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              Pay Per Service
            </button>

            <button
              onClick={() => setBillingCycle("annually")}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all flex items-center gap-2 ${
                billingCycle === "annually"
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              Maintenance Plan
              <div className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                Save up to 20%
              </div>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all ${
                selectedPlan === pkg.id
                  ? "ring-4 ring-red-500 ring-offset-2"
                  : ""
              }`}
            >
              {/* Package header */}
              <div
                className={`p-8 relative ${
                  pkg.id === "premium"
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                    : pkg.id === "complete"
                    ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white"
                    : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="opacity-90 mb-6">{pkg.description}</p>

                <div className="flex items-end gap-1 mb-2">
                  <span className="text-2xl font-medium">$</span>
                  <span className="text-5xl font-bold">
                    {pricingData[billingCycle][pkg.id].price}
                  </span>
                  <div className="text-white/80 ml-2 self-end mb-1">
                    per service
                  </div>
                </div>

                {pricingData[billingCycle][pkg.id].discount && (
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {pricingData[billingCycle][pkg.id].discount}
                  </div>
                )}
              </div>

              {/* Features list */}
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="font-medium text-gray-900 mb-4">
                    Package Features
                  </h4>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2"
                        onMouseEnter={() =>
                          setHoveredFeature(`${pkg.id}-${featureIndex}`)
                        }
                        onMouseLeave={() => setHoveredFeature(null)}
                      >
                        {feature.included ? (
                          <CheckCircle
                            className={`shrink-0 mt-0.5 ${
                              pkg.id === "premium"
                                ? "text-red-500"
                                : pkg.id === "complete"
                                ? "text-purple-500"
                                : "text-blue-500"
                            }`}
                            size={20}
                          />
                        ) : (
                          <XCircle
                            className="shrink-0 mt-0.5 text-gray-300"
                            size={20}
                          />
                        )}

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="text-gray-700">{feature.name}</div>
                            <button
                              onClick={() =>
                                toggleDetails(pkg.id, featureIndex)
                              }
                              className="text-gray-400 hover:text-gray-600 p-1"
                              aria-label="Show details"
                            >
                              {isDetailOpen[`${pkg.id}-${featureIndex}`] ? (
                                <ChevronUp size={16} />
                              ) : (
                                <ChevronDown size={16} />
                              )}
                            </button>
                          </div>

                          <AnimatePresence>
                            {isDetailOpen[`${pkg.id}-${featureIndex}`] && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-sm text-gray-500 mt-2 overflow-hidden"
                              >
                                {feature.description}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Package details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Turnaround:{" "}
                      <span className="font-medium">{pkg.turnaround}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Star size={18} className="text-yellow-500" />
                    <span className="text-sm text-gray-600">
                      Customer Rating:{" "}
                      <span className="font-medium">{pkg.rating}/5.0</span>
                    </span>
                  </div>
                </div>

                {/* Best for */}
                <div className="mb-8">
                  <h4 className="font-medium text-gray-900 mb-2">Best For</h4>
                  <ul className="space-y-2">
                    {pkg.bestFor.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <ArrowRight
                          size={14}
                          className={`shrink-0 ${
                            pkg.id === "premium"
                              ? "text-red-500"
                              : pkg.id === "complete"
                              ? "text-purple-500"
                              : "text-blue-500"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA button */}
                <button
                  onClick={() => setSelectedPlan(pkg.id)}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    selectedPlan === pkg.id
                      ? pkg.id === "premium"
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : pkg.id === "complete"
                        ? "bg-purple-500 hover:bg-purple-600 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {selectedPlan === pkg.id
                    ? "Selected Package"
                    : "Choose Package"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Plan comparison toggle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <button
            onClick={() => setComparisonVisible(!comparisonVisible)}
            className="inline-flex items-center gap-2 text-red-500 font-medium hover:text-red-600 transition-colors"
          >
            {comparisonVisible ? "Hide" : "Show"} Detailed Comparison
            {comparisonVisible ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>
        </motion.div>

        {/* Plan comparison */}
        <AnimatePresence>
          {comparisonVisible && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-12 overflow-hidden"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Package Comparison
                  </h3>
                  <p className="text-gray-600">
                    See which package is right for your needs
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-4 text-left text-gray-600 font-medium">
                          Feature
                        </th>
                        {packages.map((pkg) => (
                          <th
                            key={pkg.id}
                            className={`p-4 text-center ${
                              pkg.id === "premium"
                                ? "text-red-500"
                                : pkg.id === "complete"
                                ? "text-purple-500"
                                : "text-blue-500"
                            }`}
                          >
                            {pkg.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {/* Pricing row */}
                      <tr className="border-b border-gray-100">
                        <td className="p-4 text-gray-800 font-medium">
                          Starting Price
                        </td>
                        {packages.map((pkg) => (
                          <td key={pkg.id} className="p-4 text-center">
                            <div className="font-bold">
                              ${pricingData[billingCycle][pkg.id].price}
                            </div>
                            {pricingData[billingCycle][pkg.id].discount && (
                              <div className="text-xs text-green-500">
                                {pricingData[billingCycle][pkg.id].discount}
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>

                      {/* Turnaround row */}
                      <tr className="border-b border-gray-100">
                        <td className="p-4 text-gray-800 font-medium">
                          Turnaround Time
                        </td>
                        {packages.map((pkg) => (
                          <td key={pkg.id} className="p-4 text-center">
                            {pkg.turnaround}
                          </td>
                        ))}
                      </tr>

                      {/* Features comparison */}
                      {packages[0].features.map((_, featureIndex) => (
                        <tr
                          key={featureIndex}
                          className="border-b border-gray-100"
                        >
                          <td className="p-4 text-gray-800 font-medium">
                            {packages[0].features[featureIndex].name}
                          </td>
                          {packages.map((pkg) => (
                            <td key={pkg.id} className="p-4 text-center">
                              {pkg.features[featureIndex].included ? (
                                <CheckCircle
                                  className={`mx-auto ${
                                    pkg.id === "premium"
                                      ? "text-red-500"
                                      : pkg.id === "complete"
                                      ? "text-purple-500"
                                      : "text-blue-500"
                                  }`}
                                  size={20}
                                />
                              ) : (
                                <XCircle
                                  className="mx-auto text-gray-300"
                                  size={20}
                                />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}

                      {/* Warranty row */}
                      <tr className="border-b border-gray-100">
                        <td className="p-4 text-gray-800 font-medium">
                          Warranty
                        </td>
                        {packages.map((pkg) => (
                          <td key={pkg.id} className="p-4 text-center">
                            {pkg.id === "complete"
                              ? "Lifetime"
                              : "1 Year Standard"}
                          </td>
                        ))}
                      </tr>

                      {/* Recommended for row */}
                      <tr>
                        <td className="p-4 text-gray-800 font-medium">
                          Recommended For
                        </td>
                        {packages.map((pkg) => (
                          <td key={pkg.id} className="p-4 text-center text-sm">
                            {pkg.bestFor.join(", ")}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const FeaturedServicesSection = () => {
  const services = [
    {
      title: "Collision Repair",
      icon: <Car size={32} />,
      description: "Complete structural repair and restoration",
      features: [
        "Frame Straightening",
        "Panel Replacement",
        "Structural Repair",
      ],
    },
    {
      title: "Custom Paint",
      icon: <PaintBucket size={32} />,
      description: "Premium paint jobs and color matching",
      features: ["Color Matching", "Custom Finishes", "Paint Protection"],
    },
    {
      title: "Dent Removal",
      icon: <Cog size={32} />,
      description: "Paintless dent repair and panel beating",
      features: ["PDR Technology", "Panel Beating", "Spot Repair"],
    },
    {
      title: "Classic Restoration",
      icon: <Camera size={32} />,
      description: "Bringing vintage vehicles back to life",
      features: [
        "Period-Correct Restoration",
        "Custom Fabrication",
        "Authenticity",
      ],
    },
    {
      title: "Fleet Services",
      icon: <Users size={32} />,
      description: "Specialized care for business vehicle fleets",
      features: ["Priority Service", "Volume Discounts", "Maintenance Plans"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full mb-6">
            <Wrench size={18} className="text-red-500 mr-2" />
            <span className="text-sm font-semibold text-red-500">
              Professional Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-red-500">Specialty</span> Services
          </h2>

          <p className="text-xl text-gray-600">
            We offer a comprehensive range of auto body repair and restoration
            services to meet all your vehicle's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-red-500 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle
                      size={16}
                      className="text-red-500 mr-2 shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full filter blur-3xl opacity-30"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Vehicle?
          </h2>

          <p className="text-xl opacity-90 mb-10">
            Schedule a free consultation today and discover why we're the
            trusted choice for premium auto body repairs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-red-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Contact Us Now
            </a>

            <a
              href="#estimate"
              className="border-2 border-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageSquare size={20} />
              Get Free Estimate
            </a>
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center items-center text-center">
            <div>
              <div className="font-bold text-4xl">4.9/5</div>
              <div className="opacity-80">Customer Rating</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/30"></div>

            <div>
              <div className="font-bold text-4xl">15+</div>
              <div className="opacity-80">Years Experience</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/30"></div>

            <div>
              <div className="font-bold text-4xl">100%</div>
              <div className="opacity-80">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Accordion Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp size={20} className="text-red-500" />
        ) : (
          <ChevronDown size={20} className="text-gray-500" />
        )}
      </button>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-6 py-4 bg-gray-50 text-gray-600"
        >
          {answer}
        </motion.div>
      )}
    </motion.div>
  );
};



const FeaturedServicesSection2 = () => {
  const services = [
    {
      title: "Panel Beating",
      icon: <Wrench size={32} />,
      description: "Expert restoration of damaged car panels and Chassis",
      features: ["Metal Reshaping", "Rust Repair", "Custom Fabrication"],
      gradient: "from-red-500/20 via-rose-400/10 to-pink-500/20",
      accent: "bg-red-500",
      accentLight: "bg-red-100",
      textAccent: "text-red-500",
      borderAccent: "border-red-200",
      imageBg: "bg-[url('/restorations.jpg')]"
    },
    {
      title: "Spray Painting",
      icon: <PaintBucket size={32} />,
      description: "Professional automotive refinishing",
      features: ["Climate-Controlled Booth", "Color Blending", "Clear Coat"],
      gradient: "from-red-500/20 via-rose-400/10 to-pink-500/20",
      accent: "bg-red-500",
      accentLight: "bg-red-100",
      textAccent: "text-red-500",
      borderAccent: "border-red-200",
      imageBg: "bg-[url('/panel.jpg')]"
    },

    {
      title: "Vehicle Maintenance",
      icon: <Clock size={32} />,
      description: "Minor and major service packages",
      features: ["Diagnostics", "Fluid Changes", "Component Replacement"],
      gradient: "from-red-500/20 via-rose-400/10 to-pink-500/20",
      accent: "bg-red-500",
      accentLight: "bg-red-100",
      textAccent: "text-red-500",
      borderAccent: "border-red-200",
      imageBg: "bg-[url('/vm.jpg')]"
    },
    {
      title: "Auto Electrics",
      icon: <AlertCircle size={32} />,
      description: "Electrical system diagnosis and repair",
      features: ["Wiring Repair", "Computer Diagnostics", "Battery Services"],
      gradient: "from-red-500/20 via-rose-400/10 to-pink-500/20",
      accent: "bg-red-500",
      accentLight: "bg-red-100",
      textAccent: "text-red-500",
      borderAccent: "border-red-200",
      imageBg: "bg-[url('/autoele.jpg')]"
    },
    {
      title: "Fleet Maintenance",
      icon: <Users size={32} />,
      description: "Specialized care for business vehicle fleets",
      features: ["Priority Service", "Volume Discounts", "Maintenance Plans"],
      gradient: "from-red-500/20 via-rose-400/10 to-pink-500/20",
      accent: "bg-red-500",
      accentLight: "bg-red-100",
      textAccent: "text-red-500",
      borderAccent: "border-red-200",
      imageBg: "bg-[url('/fleet.jpg')]"
    },
    {
      title: "Suspensions",
      icon: <FileText size={32} />,
      description: "Vehicle Suspensions",
      features: ["Direct Billing", "Documentation", "Full Support"],
      gradient: "from-red-500/20 via-rose-400/10 to-pink-500/20",
      accent: "bg-red-500",
      accentLight: "bg-red-100",
      textAccent: "text-red-500",
      borderAccent: "border-red-200",
      imageBg: "bg-[url('/collision.jpg')]"
    },
    {
      title: "Upholstery",
      icon: <Shield size={32} />,
      description: "Interior restoration and custom work",
      features: ["Seat Repairs", "Custom Leather", "Headliner Replacement"],
      gradient: "from-red-500/20 via-rose-400/10 to-pink-500/20",
      accent: "bg-red-500",
      accentLight: "bg-red-100",
      textAccent: "text-red-500",
      borderAccent: "border-red-200",
      imageBg: "bg-[url('/upholstery.jpeg')]"
    },
    {
      title: "Spares",
      icon: <Cog size={32} />,
      description: "We supply parts for all vehicle makes",
      features: ["Engine Repair", "Transmission Service", "Brake Systems"],
      gradient: "from-red-500/20 via-rose-400/10 to-pink-500/20",
      accent: "bg-red-500",
      accentLight: "bg-red-100",
      textAccent: "text-red-500",
      borderAccent: "border-red-200",
      imageBg: "bg-[url('/mech.jpg')]"
    },
    {
      title: "Coach Building",
      icon: <FileText size={32} />,
      description: "For all buses, trucks and trailers",
      features: ["Fleet Branding", "Vinyl Graphics", "Vehicle Wrapping"],
      gradient: "from-red-500/20 via-rose-400/10 to-pink-500/20",
      accent: "bg-red-500",
      accentLight: "bg-red-100",
      textAccent: "text-red-500",
      borderAccent: "border-red-200",
      imageBg: "bg-[url('/5.jpg')]"
    },
    {
      title: "Windscreen & Glass Fitments",
      icon: <Shield size={32} />,
      description: "Expert glass replacement services",
      features: ["Windscreen Replacement", "Side Windows", "Mirror Replacement"],
      gradient: "from-red-500/20 via-rose-400/10 to-pink-500/20",
      accent: "bg-red-500",
      accentLight: "bg-red-100",
      textAccent: "text-red-500",
      borderAccent: "border-red-200",
      imageBg: "bg-[url('/wfitment.webp')]"
    },
    {
      title: "Car Valet",
      icon: <Camera size={32} />,
      description: "Interior and exterior detailing",
      features: ["Deep Cleaning", "Paint Protection", "Engine Bay Detailing"],
      gradient: "from-red-500/20 via-rose-400/10 to-pink-500/20",
      accent: "bg-red-500",
      accentLight: "bg-red-100",
      textAccent: "text-red-500",
      borderAccent: "border-red-200",
      imageBg: "bg-[url('/valet.jpg')]"
    },
    {
      title: "Car Breaking",
      icon: <Wrench size={32} />,
      description: "For all different models",
      features: ["Parts Recovery", "Fluid Recycling", "Metal Recycling"],
      gradient: "from-red-500/20 via-rose-400/10 to-pink-500/20",
      accent: "bg-red-500",
      accentLight: "bg-red-100",
      textAccent: "text-red-500",
      borderAccent: "border-red-200",
      imageBg: "bg-[url('/cbreaking.webp')]"
    },
    {
      title: "Classic Restoration",
      icon: <Camera size={32} />,
      description: "Bringing vintage vehicles back to life",
      features: [
        "Period-Correct Restoration",
        "Custom Fabrication",
        "Authenticity",
      ],
      gradient: "from-red-500/20 via-rose-400/10 to-pink-500/20",
      accent: "bg-red-500",
      accentLight: "bg-red-100",
      textAccent: "text-red-500",
      borderAccent: "border-red-200",
      imageBg: "bg-[url('/resto.jpg')]"
    },


  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-red-500/5 blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full mb-6"
          >
            <Wrench size={18} className="text-red-500 mr-2" />
            <span className="text-sm font-semibold text-red-500">
              Professional Services
            </span>
          </motion.div>

          <motion.h2 
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-red-500">Specialty</span> Services
          </motion.h2>

          <motion.p 
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            We offer a comprehensive range of auto body repair and restoration
            services to meet all your vehicle's needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-2xl shadow-xl overflow-hidden border ${service.borderAccent} group`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-70`}></div>
              
              {/* Content Container */}
              <div className="relative z-10 p-8">
                {/* Service Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    {/* Service Icon with Animated Background */}
                    <div className="relative mb-4">
                      <div className={`absolute inset-0 ${service.accentLight} rounded-full blur-md group-hover:blur-lg transition-all`}></div>
                      <div className={`relative h-16 w-16 ${service.accent} rounded-full flex items-center justify-center text-white shadow-lg`}>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className={`h-20 w-20 rounded-full ${service.accentLight} opacity-50 flex items-center justify-center`}>
                    <Sparkles size={24} className={service.textAccent} />
                  </div>
                </div>
                
                {/* Image Section */}
                <div className="mb-6 group-hover:scale-105 transition-transform duration-500">
                  <div className={`h-40 rounded-xl overflow-hidden shadow-md ${service.imageBg} bg-cover bg-center relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-tr ${service.gradient} opacity-40`}></div>
                  </div>
                </div>
                
                {/* Benefits List */}
                {/*<div className={`p-4 rounded-lg bg-white/90 backdrop-blur-sm mb-6 border ${service.borderAccent}`}>
                  <h4 className={`font-medium mb-3 ${service.textAccent} flex items-center gap-2`}>
                    <Shield size={16} />
                    Service Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle
                          size={16}
                          className={`${service.textAccent} mr-2 shrink-0`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>*/}
                
                {/* Additional Information */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>Fast Turnaround</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full ${service.accentLight} ${service.textAccent} text-xs font-medium`}>
                    Premium Service
                  </div>
                </div>
                
                {/* CTA Button */}
                <motion.a
                  href={`/services/`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 px-4 rounded-lg ${service.accent} text-white font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all`}
                >
                  Learn More
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="/services" 
            className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-red-200 text-gray-800 rounded-full px-8 py-3 font-medium shadow-md hover:shadow-lg transition-all"
          >
            View All Services
            <ArrowRight size={16} className="text-red-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const MagicalStats = () => {
  const stats = [
    { number: 99, label: "Satisfied Clients", suffix: "%" },
    { number: 24, label: "Support", prefix: "", suffix: "/7" },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Particle component
  const Particle = ({ delay }) => (
    <motion.div
      className="absolute w-1 h-1 bg-red-400 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [0, -40, -60],
        x: Math.random() * 40 - 20,
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    />
  );

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center text-white p-4 relative"
            >
              <div className="relative">
                {/* Particles */}
                {[...Array(5)].map((_, i) => (
                  <Particle key={i} delay={i * 0.2} />
                ))}
                
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-red-500 mb-1"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                >
                  <motion.span>
                    {stat.prefix}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isVisible ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      {isVisible && (
                        <CountUp
                          from={0}
                          to={stat.number}
                          duration={2}
                        />
                      )}
                    </motion.span>
                    {stat.suffix}
                  </motion.span>
                </motion.div>
                <div className="text-xs sm:text-sm text-white/80">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Counter component
const CountUp = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(from + (to - from) * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [from, to, duration]);

  return <>{count}</>;
};

