"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
  const services = [
    {
      title: "Smart City Deployment",
      desc: "Building intelligent urban ecosystems through IoT connectivity, surveillance, and sustainable communication infrastructure.",
      img: "/services/smart-city.jpg",
    },
    {
      title: "Smart School / Campus Solution Deployment",
      desc: "Empowering educational institutions with digital learning infrastructure and campus-wide connectivity solutions.",
      img: "/services/smart-school.jpg",
    },
    {
      title: "Optic Fibre Deployment & Maintenance (Backhaul, Metro, Last Mile)",
      desc: "Designing, deploying, and maintaining high-capacity fiber optic infrastructure for telecom and enterprise clients.",
      img: "/services/fibre-deployment.jpg",
    },
    {
      title: "FTT(x) Deployment (OSP and ISP)",
      desc: "Comprehensive Fiber-To-The-Home (FTTH) and OSP/ISP implementations using modern GPON standards.",
      img: "/services/fttx.jpg",
    },
    {
      title: "Structured Cabling & Data Center Solutions",
      desc: "Providing professional cabling infrastructure and integrated data center networking for optimized performance.",
      img: "/services/data-center.jpg",
    },
    {
      title: "Infrastructure Testing & Acceptance",
      desc: "Ensuring all deployed infrastructures meet global telecom standards through rigorous testing and certification.",
      img: "/services/testing.jpg",
    },
    {
      title: "Telecommunications Equipment Supply",
      desc: "Supplying top-quality telecom equipment, accessories, and hardware for network deployment and upgrades.",
      img: "/services/equipment.jpg",
    },
    {
      title: "Base Station Deployment",
      desc: "Designing, installing, and maintaining mobile base stations to enhance network coverage and reliability.",
      img: "/services/base-station.jpg",
    },
    {
      title: "Digital Educational Solutions",
      desc: "Delivering innovative e-learning platforms and digital classroom technologies for schools and universities.",
      img: "/services/digital-edu.jpg",
    },
    {
      title: "CCTV Installation & Maintenance Training",
      desc: "Expert installation, configuration, and training for CCTV systems, ensuring safety and operational efficiency.",
      img: "/services/cctv.jpg",
    },
    {
      title: "Consulting",
      desc: "Offering professional consulting across telecommunications, project management, and ICT transformation.",
      img: "/services/consulting.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 px-6 md:px-16 bg-gray-50"
      style={{ ["--brand"]: "#019a65" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl sm:text-4xl  font-bold text-gray-900">
            Our Services
          </h3>
          <p className="mt-3 text-black text-xl max-w-2xl mx-auto">
            Kevlar Telecoms provides a full spectrum of ICT and
            telecommunications services designed to deliver reliable,
            sustainable, and innovative solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="rounded-2xl bg-white shadow-sm hover:shadow-xl overflow-hidden border border-transparent hover:border-[var(--brand)] group"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <div className="p-5 flex flex-col">
                <h4 className="font-semibold text-lg text-gray-900">
                  {service.title}
                </h4>
                <p className="mt-2 text-lg text-gray-600 leading-relaxed flex-1">
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-block text-sm font-medium"
                  style={{ color: "var(--brand)" }}
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
