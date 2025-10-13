"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ApproachSection() {
  const approaches = [
    {
      icon: "🌍",
      title: "Transforming Workspaces Beyond Boundaries",
      desc: "From device-centric to user-centric — work beyond boundaries is our mission.",
    },
    {
      icon: "🤝",
      title: "Enhance Unified Customer Experience",
      desc: "A highly collaborative, connected experience is our goal.",
    },
    {
      icon: "🚀",
      title: "Driving Dynamic Delivery",
      desc: "Driving productivity and reducing latency is our core.",
    },
  ];

  return (
    <section
      id="approach"
      className="relative overflow-hidden text-center text-white"
      style={{ ["--brand"]: "#019a65" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/services/approach-bg.jpg"
          alt="Kevlar Telecoms Approach"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Header */}
      <div className="py-20 px-6 md:px-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="inline-block bg-[var(--brand)] text-white text-xs uppercase tracking-wider px-4 py-1 rounded-full"
        >
          Our Approach
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          Our Approach to Achieving Meaningful Change
        </motion.h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {approaches.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white text-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 flex flex-col items-center"
            >
              <div
                className="text-4xl mb-4"
                style={{ color: "var(--brand)" }}
              >
                {item.icon}
              </div>
              <h3
                className="text-lg font-semibold text-center mb-2"
                style={{ color: "var(--brand)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
