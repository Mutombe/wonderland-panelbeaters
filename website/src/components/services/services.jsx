import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Car,
  PaintBucket,
  Wrench,
  Shield,
  Clock,
  CheckCircle,
  Cog,
  FileText,
  AlertCircle,
  Camera,
  ArrowRight,
  Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const mainServices = [
    {
      id: 1,
      title: "Collision Repair",
      icon: <Car size={32} />,
      description: "Complete collision repair and vehicle restoration services",
      longDescription:
        "Our comprehensive collision repair service handles everything from minor damages to major accident repairs. We use state-of-the-art equipment and techniques to restore your vehicle to its pre-accident condition.",
      features: [
        "Frame straightening and alignment",
        "Panel repair and replacement",
        "Structural repairs",
        "Post-repair safety inspections",
        "Insurance claim assistance",
      ],
      process: [
        "Initial damage assessment",
        "Digital imaging and documentation",
        "Repair plan development",
        "Professional repair execution",
        "Quality control inspection",
      ],
    },
    {
      id: 2,
      title: "Premium Paint Services",
      icon: <PaintBucket size={32} />,
      description: "Expert color matching and premium paint finishes",
      longDescription:
        "Our paint shop delivers showroom-quality finishes using premium materials and advanced spray techniques. We guarantee perfect color matching and lasting protection.",
      features: [
        "Computerized color matching",
        "Premium paint products",
        "Clear coat protection",
        "Custom paint jobs",
        "Paint correction services",
      ],
      process: [
        "Surface preparation",
        "Primer application",
        "Color matching verification",
        "Paint application",
        "Clear coat and finishing",
      ],
    },
    {
      id: 3,
      title: "Dent Removal",
      icon: <Cog size={32} />,
      description: "Paintless dent repair and panel beating",
      longDescription:
        "Using advanced PDR techniques and traditional panel beating methods, we remove dents while preserving your vehicle's original paint finish.",
      features: [
        "Paintless dent repair (PDR)",
        "Traditional panel beating",
        "Hail damage repair",
        "Door ding removal",
        "Minor collision repair",
      ],
      process: [
        "Damage assessment",
        "Technique selection",
        "Dent removal process",
        "Surface refinishing",
        "Quality inspection",
      ],
    },
    {
      id: 4,
      title: "Panel Beating",
      icon: <Wrench size={32} />,
      description: "Expert panel repair and replacement services",
      longDescription:
        "Our skilled panel beaters restore damaged vehicle panels to their original form using traditional craftsmanship and modern techniques. We handle everything from minor dents to major structural damage.",
      features: [
        "Metal panel reshaping",
        "Welding and fabrication",
        "Custom panel fabrication",
        "Rust repair and prevention",
        "Classic car restoration",
      ],
      process: [
        "Comprehensive damage evaluation",
        "Panel removal if necessary",
        "Precision reshaping and repair",
        "Surface preparation for painting",
        "Fitment and alignment verification",
      ],
    },
    {
      id: 5,
      title: "Spray Painting",
      icon: <PaintBucket size={32} />,
      description: "Professional automotive spray painting and refinishing",
      longDescription:
        "Our spray painting service uses climate-controlled spray booths and premium automotive paints to deliver flawless finishes. We offer everything from single-panel resprays to complete vehicle color changes.",
      features: [
        "Climate-controlled spray booths",
        "High-quality automotive paints",
        "Expert color blending",
        "Metallic and pearl finish specialists",
        "Environmental compliance",
      ],
      process: [
        "Surface preparation and cleaning",
        "Masking and protection",
        "Primer and base coat application",
        "Color coat application",
        "Clear coat and polishing",
      ],
    },
    {
      id: 6,
      title: "Vehicle Maintenance",
      icon: <Clock size={32} />,
      description: "Comprehensive minor and major service packages",
      longDescription:
        "Keep your vehicle running at peak performance with our minor and major service packages. Our certified technicians follow manufacturer specifications to ensure reliability and longevity of your vehicle.",
      features: [
        "Manufacturer-specified maintenance",
        "Comprehensive diagnostics",
        "Fluid replacement and top-ups",
        "Filter replacement",
        "Component inspection and replacement",
      ],
      process: [
        "Initial vehicle assessment",
        "Diagnostic scanning",
        "Service execution based on schedule",
        "Quality check and road test",
        "Detailed service report",
      ],
    },
    {
      id: 7,
      title: "Auto Electrics",
      icon: <AlertCircle size={32} />,
      description: "Complete automotive electrical system diagnosis and repair",
      longDescription:
        "Our auto electrical specialists diagnose and repair all vehicle electrical issues using advanced diagnostic equipment. From simple battery replacements to complex wiring problems, we keep your vehicle's electrical systems operating perfectly.",
      features: [
        "Computerized electrical diagnostics",
        "Wiring repair and replacement",
        "Battery testing and replacement",
        "Alternator and starter repair",
        "Electronic module programming",
      ],
      process: [
        "System diagnostic scan",
        "Circuit testing and analysis",
        "Component isolation and testing",
        "Repair or replacement service",
        "System verification and testing",
      ],
    },
    {
      id: 8,
      title: "Upholstery",
      icon: <Shield size={32} />,
      description: "Interior restoration and custom upholstery solutions",
      longDescription:
        "Revitalize your vehicle's interior with our professional upholstery services. From repairs to complete custom interior redesigns, our upholstery experts work with premium materials to create beautiful, durable interiors.",
      features: [
        "Seat repair and reupholstering",
        "Custom leather interiors",
        "Headliner replacement",
        "Door panel and dashboard repair",
        "Carpet replacement and cleaning",
      ],
      process: [
        "Interior assessment and consultation",
        "Material selection and design",
        "Disassembly and pattern creation",
        "Custom fabrication and fitting",
        "Final assembly and quality check",
      ],
    },
    {
      id: 9,
      title: "Mechanical Repairs",
      icon: <Cog size={32} />,
      description: "Comprehensive engine and mechanical system repairs",
      longDescription:
        "Our certified mechanics provide expert repair services for all vehicle mechanical systems. From engine rebuilds to transmission repairs, we have the expertise and equipment to handle complex mechanical issues.",
      features: [
        "Engine diagnostics and repair",
        "Transmission service and repair",
        "Suspension and steering system repairs",
        "Brake system service",
        "Cooling system maintenance",
      ],
      process: [
        "Comprehensive mechanical inspection",
        "Diagnostic testing and analysis",
        "Detailed repair plan and estimate",
        "Professional repair execution",
        "Post-repair testing and verification",
      ],
    },
    {
      id: 10,
      title: "Vehicle Labelling",
      icon: <FileText size={32} />,
      description: "Professional vehicle branding and commercial graphics",
      longDescription:
        "Transform your vehicles with our professional labelling and branding services. Whether for fleet identification, business promotion, or custom designs, we apply high-quality vinyl graphics that withstand the elements.",
      features: [
        "Commercial fleet branding",
        "Custom vinyl graphics",
        "Reflective safety markings",
        "Vehicle wrapping",
        "UV-resistant materials",
      ],
      process: [
        "Design consultation and mockup",
        "Surface preparation",
        "Precision cutting and alignment",
        "Professional application",
        "Final inspection and care instructions",
      ],
    },
    {
      id: 11,
      title: "Windscreen Replacements",
      icon: <Shield size={32} />,
      description: "Expert windscreen and mirror replacement services",
      longDescription:
        "Our windscreen specialists provide professional replacement of damaged windscreens, windows, and mirrors. We use only quality glass and proper sealing techniques to ensure safety and prevent leaks.",
      features: [
        "OEM-quality windscreen replacements",
        "Side and rear window installation",
        "Door mirror replacement",
        "Chip repair services",
        "Tinting options available",
      ],
      process: [
        "Damage assessment",
        "Glass selection and ordering",
        "Safe removal of damaged glass",
        "Precision installation and sealing",
        "Leak testing and quality verification",
      ],
    },
    {
      id: 12,
      title: "Car Valet",
      icon: <Camera size={32} />,
      description: "Comprehensive interior and exterior detailing services",
      longDescription:
        "Our professional valet service restores your vehicle's appearance to showroom condition. From basic cleaning to premium detailing packages, we use specialist equipment and products for immaculate results.",
      features: [
        "Interior deep cleaning",
        "Exterior wash and polish",
        "Engine bay detailing",
        "Paint correction and protection",
        "Leather treatment and conditioning",
      ],
      process: [
        "Initial condition assessment",
        "Exterior wash and decontamination",
        "Interior vacuuming and cleaning",
        "Surface treatment and protection",
        "Final inspection and touch-ups",
      ],
    },
    {
      id: 13,
      title: "Car Breaking",
      icon: <Wrench size={32} />,
      description: "Environmentally responsible vehicle dismantling",
      longDescription:
        "Our car breaking service dismantles end-of-life vehicles in an environmentally responsible manner. We salvage quality used parts for resale and ensure proper recycling of all materials.",
      features: [
        "Certified vehicle dismantling",
        "Quality used parts recovery",
        "Environmental compliance",
        "Fluid drainage and disposal",
        "Metal recycling",
      ],
      process: [
        "Vehicle assessment and documentation",
        "Hazardous material removal",
        "Systematic parts removal and testing",
        "Parts cataloging and storage",
        "Remaining material recycling",
      ],
    }
  ];

  const ServiceCard = ({ service, isSelected, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`cursor-pointer rounded-2xl p-8 transition-all duration-300 ${
        isSelected ? "bg-red-500 text-white" : "bg-white hover:bg-red-50"
      }`}
      onClick={() => onClick(service)}
    >
      <div
        className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
          isSelected ? "bg-white/20" : "bg-red-50"
        }`}
      >
        <div className={isSelected ? "text-white" : "text-red-500"}>
          {service.icon}
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
      <p className={`mb-6 ${isSelected ? "text-white/90" : "text-gray-600"}`}>
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
      <Hero />

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
              <h2 className="text-3xl font-bold mb-8">
                {selectedService.title} Process
              </h2>

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
            <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
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
                onClick={() => navigate("/contact")}
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

const Hero = () => {
  return (
    <section className="relative min-h-[600px] py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/wonder.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/70" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 to-red-800/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_50%)]" />

      {/* Animated shine effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 3,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Professional Auto Body Services
          </h1>
          <p className="text-xl text-white/90 mb-8">
            From minor repairs to complete restorations, our expert team
            delivers premium quality workmanship on every project.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Clock size={24} />, text: "Quick Turnaround" },
              { icon: <Cog size={24} />, text: "Expert Technicians" },
              { icon: <CheckCircle size={24} />, text: "Quality Guaranteed" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="text-sm text-white group-hover:text-white/90 transition-colors duration-300">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
};

export default ServicesPage;
