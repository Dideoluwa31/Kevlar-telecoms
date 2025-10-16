"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white/80 backdrop-blur-sm py-12 px-6 md:px-16"
      style={{ ["--brand"]: "#019a65" }}
    >
      <div className=" relative max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-center">
        {/* Text content */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            About Kevlar Telecoms
          </h2>

          <p className="mt-4 text-gray-700 text-xl leading-relaxed">
            <strong>KEVLAR TELECOMS LIMITED</strong> is a licensed indigenously
            owned ICT and Telecommunications company that has been operating in
            the Nigerian telecommunications sphere and beyond. As the world
            continues to evolve, Kevlar remains committed to contributing to
            sustainable innovations and modern solutions geared toward effective
            service delivery, customer satisfaction, and lasting partnerships.
          </p>

          <p className="mt-4 text-gray-700 text-xl leading-relaxed">
            With a track record spanning over five years, Kevlar has developed
            a strong team of multi-domain experts with in-depth industry
            knowledge. We are strategically positioned to help our clients make
            their businesses more efficient, simple, cost-effective, and secure
            through sustainable products and solutions.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white font-medium"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Explore Services
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 text-gray-800"
            >
              View Projects
            </a>
            {/* Download Button */}
      
          <a
            href="/kevlar-company-profile.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white font-medium"
            style={{ backgroundColor: "var(--brand)" }}
          >
            Download Company Profile
          </a>
       
          </div>
        </motion.div>

        {/* Right visual / Stats */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[rgba(1,154,101,0.06)] to-white p-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <CardStat title="Years Active" value="5+" />
            <CardStat title="Clients" value="20+" />
            <CardStat title="Projects" value="50+" />
          </div>

          <div className="mt-6 text-lg text-gray-600">
            <p className="mb-3">Our expertise spans across:</p>
            <ul className="grid gap-1 text-sm sm:text-sm">
              <li>• Fiber Optic Deployment (Backhaul, Metro, Last-Mile)</li>
              <li>• Structured Cabling & Data Centers</li>
              <li>• Smart City & Campus Solutions</li>
              <li>• CCTV & Telecom Equipment Supply</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CardStat({ title, value }) {
  return (
    <div className="flex flex-col gap-1 bg-white rounded-xl p-4 shadow-sm text-center">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="text-2xl font-bold" style={{ color: "var(--brand)" }}>
        {value}
      </div>
    </div>
  );
}
