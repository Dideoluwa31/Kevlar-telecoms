"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectsSection() {
  const projects = [
    {
      title: "Smart Campus Fiber Deployment - EKSU",
      desc: "Complete campus-wide optical fiber deployment connecting departments, hostels, and administrative buildings for seamless connectivity.",
      img: "/projects/eksu.jpg",
    },
    {
      title: "FTTx Deployment - Lagos",
      desc: "Comprehensive OSP and ISP fiber deployment for residential and business subscribers, enhancing internet accessibility and reliability.",
      img: "/projects/lagos-fttx.jpg",
    },
    {
      title: "Base Station Deployment - Abuja",
      desc: "Full tower setup, power integration, and network optimization for improved mobile coverage and performance.",
      img: "/projects/base-station.jpg",
    },
    {
      title: "Smart City Infrastructure Project",
      desc: "Deployed intelligent systems, surveillance, and broadband infrastructure for modern urban management and communication.",
      img: "/projects/smart-city.jpg",
    },
    {
      title: "Telecom Equipment Supply & Testing",
      desc: "Supplied and tested mission-critical telecommunications hardware for major national and private network operators.",
      img: "/projects/equipment-supply.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 md:px-16 bg-gray-50 text-center"
      style={{ ["--brand"]: "#019a65" }}
    >
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Latest Projects
        </h3>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Explore some of our recent work across Nigeria — delivering reliable,
          scalable, and sustainable telecom infrastructure solutions.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
          >
            <div className="relative h-56 w-full">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--brand)" }}
              >
                {project.title}
              </h4>
              <p className="text-sm text-gray-600 flex-1">{project.desc}</p>
              <a
                href="#contact"
                className="mt-4 inline-block text-sm font-medium self-start hover:underline"
                style={{ color: "var(--brand)" }}
              >
                Learn more →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
