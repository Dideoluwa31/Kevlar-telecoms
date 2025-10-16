"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";

// --- Reusable Input Component ---
const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  icon: Icon,
  options,
}) => {
  const isSelect = type === "select";
  const inputStyle = `w-full p-3 border ${
    disabled
      ? "bg-gray-50 border-gray-200 text-gray-500"
      : "bg-white border-gray-300 focus:border-green-500"
  } rounded-lg focus:outline-none transition duration-150 ease-in-out`;

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-600">
        {label}
      </label>
      <div className="relative">
        {isSelect ? (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={inputStyle + " appearance-none pr-10"}
            disabled={disabled}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={inputStyle}
            disabled={disabled}
          />
        )}
        {isSelect && (
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        )}
        {Icon && !isSelect && (
          <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        )}
      </div>
    </div>
  );
};

// -------------------- MAIN COMPONENT --------------------
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ WhatsApp Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "2348069546092"; // Kevlar WhatsApp number

    const message = `
Hello Kevlar Telecoms! 👋
I would like to make an inquiry.

🧍 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
📋 Subject: ${formData.subject}

💬 Message:
${formData.message}
`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* -------------------- HEADER BANNER -------------------- */}
      <header className="relative pt-12 pb-64 md:pb-80 lg:pb-96 bg-gradient-to-r from-green-200 via-green-300 to-green-400 overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto text-center items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="lg:w-1/2 pt-10 mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 max-w-md mx-auto">
              Kindly reach out to us for quick responses and expert assistance.
            </p>
          </div>
        </motion.div>
      </header>

      {/* -------------------- CONTACT FORM -------------------- */}
      <motion.div
        className="max-w-5xl mx-auto -mt-40 md:-mt-52 lg:-mt-64 relative z-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.div
          className="bg-white p-6 sm:p-10 lg:p-12 rounded-3xl shadow-[0_20px_50px_rgba(1,154,101,0.15)] hover:shadow-[0_20px_60px_rgba(1,154,101,0.25)] transition duration-500"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Enter your name"
              />

              <FormInput
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="Enter your phone number"
              />

              <FormInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Enter your email address"
              />

              <FormInput
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleFormChange}
                placeholder="Enter your subject"
              />
            </div>

            <motion.div variants={fadeUp}>
              <label className="text-sm font-medium text-gray-600 mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Type your message here..."
                className="border border-gray-300 p-3 rounded-lg w-full focus:border-green-500 focus:outline-none transition duration-150 ease-in-out"
                required
              ></textarea>
            </motion.div>

            {/* WhatsApp Submit Button */}
            <motion.div
              className="flex flex-col items-center pt-4"
              variants={fadeUp}
            >
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full md:w-auto px-10 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.672.15-.198.297-.771.967-.945 1.166-.173.198-.348.223-.645.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.672-1.611-.921-2.207-.243-.579-.487-.5-.672-.51-.173-.009-.372-.011-.571-.011-.198 0-.521.074-.793.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.625.711.226 1.358.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.571-.347z" />
                  <path d="M20.52 3.48C18.29 1.251 15.24 0 12 0 5.383 0 0 5.383 0 12c0 2.117.555 4.187 1.606 6.02L0 24l6.162-1.606A11.93 11.93 0 0012 24c6.617 0 12-5.383 12-12 0-3.24-1.251-6.29-3.48-8.52zM12 22.054a9.99 9.99 0 01-5.088-1.396l-.364-.215-3.662.954.977-3.567-.238-.373A9.948 9.948 0 012.04 12c0-5.497 4.463-9.96 9.96-9.96 2.661 0 5.165 1.037 7.045 2.918A9.934 9.934 0 0121.96 12c0 5.497-4.463 9.96-9.96 9.96z" />
                </svg>
                Send via WhatsApp
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>

      {/* -------------------- FIND US SECTION -------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.h2
          className="text-4xl text-center font-extrabold text-gray-800 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Find Us Here
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[ 
            { icon: <Phone className="w-6 h-6 text-green-700" />, label: "Phone", value: "+234 806 954 6092", href: "tel:+2348069546092" },
            { icon: <Mail className="w-6 h-6 text-green-700" />, label: "Email", value: "info@kevlartelecoms.com", href: "mailto:info@kevlartelecoms.com" },
            { icon: <MapPin className="w-6 h-6 text-green-700" />, label: "Location", value: "Villa 1, Maccat Villa, Apo Legislative Qtrs, Zone E, FCT Abuja" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center space-x-4 p-6 bg-green-50 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeUp}
            >
              <div className="p-3 bg-green-200 rounded-full">{item.icon}</div>
              <div>
                <p className="text-sm font-medium text-gray-500">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-lg font-semibold text-gray-800 hover:text-green-600 transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg font-semibold text-gray-800">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map */}
        <motion.div
          className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <iframe
            className="w-full h-64 md:h-96 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.0223218814946!2d7.4840075008514235!3d9.004474338865665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0d7cec2e0ff5%3A0xe07009cb420e5bef!2sMACCATT%20VILLAS!5e1!3m2!1sen!2sng!4v1760454131682!5m2!1sen!2sng"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <a
            href="https://www.google.com/maps?q=Villa+1,+Maccat+Villa,+Apo+Legislative+Qtrs,+Zone+E,+FCT+Abuja"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 p-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg cursor-pointer transition duration-300"
          >
            View in Google Maps
          </a>
        </motion.div>
      </section>
    </div>
  );
}
