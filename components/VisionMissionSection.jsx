"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function VisionMissionSection() {
  return (
    <section
      id="vision-mission"
      className="py-16 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white"
      style={{ ["--brand"]: "#019a65" }}
    >
      <div className="max-w-7xl mx-auto text-center mb-10">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Our Vision & Mission
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-3 text-gray-600 max-w-2xl mx-auto"
        >
          Kevlar Telecoms is committed to advancing connectivity, innovation,
          and sustainability across Africa’s telecommunications landscape.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Vision Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="rounded-2xl bg-white shadow-md hover:shadow-xl p-8 flex flex-col items-center text-center border-t-4"
          style={{ borderColor: "var(--brand)" }}
        >
          <div
            className="text-5xl mb-4"
            style={{ color: "var(--brand)" }}
          >
            👁️
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed text-lg lg:text-base">
            To be a leading telecom and smart infrastructure company delivering
            innovative and sustainable connectivity solutions across Africa —
            empowering communities and businesses through technology.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="rounded-2xl bg-white shadow-md hover:shadow-xl p-8 flex flex-col items-center text-center border-t-4"
          style={{ borderColor: "var(--brand)" }}
        >
          <div
            className="text-5xl mb-4"
            style={{ color: "var(--brand)" }}
          >
            🎯
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed text-lg lg:text-base">
            To provide cutting-edge telecommunications, fiber optics, and smart
            technology solutions through operational excellence, continuous
            innovation, and strategic partnerships that deliver measurable value
            and customer satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
