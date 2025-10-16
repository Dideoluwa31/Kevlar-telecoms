"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";

// Custom icons and components for the doctor's stats and avatar
const DoctorStats = ({ count, label, icon }) => (
  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-gray-700">
    {icon}
    <div>
      <div className="text-xl font-bold text-cyan-600">{count}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  </div>
);

// --- Reusable Form Input Component ---
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
    Message: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ WhatsApp Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "2348069546092"; // Your business WhatsApp number

    const message = `
Hello! 👋
I would like to book an appointment.

🧍 Name: ${formData.name}
📞 Phone: ${formData.phone}
📅 Email: ${formData.email}
⏰ Subjects: ${formData.subjects}
    

Message:
${form.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const bannerClasses =
    "relative pt-12 pb-64 md:pb-80 lg:pb-96 bg-gradient-to-r from-green-200 via-green-300 to-green-400 overflow-hidden";

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* -------------------- HEADER BANNER -------------------- */}
      <header className={bannerClasses}>
        <div className="max-w-7xl mx-auto text-center items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-1/2  pt-4">
            <h1 className="text-5xl md:text-6xl  font-extrabold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Kindly reach us to get the latest response and treatment
            </p>
          </div>
        </div>
      </header>

      {/* -------------------- APPOINTMENT FORM -------------------- */}
      <div className="max-w-5xl mx-auto -mt-40 md:-mt-52 lg:-mt-64 relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]">
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
                name="phone"
                type="text"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Enter your Email address"
              />
              <FormInput
                label="subjects"
                name="Subjects"
                value={formData.subjects}
                onChange={handleFormChange}
                placeholder="Enter your Subject"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="6"
                type="text"
                value={formData.Message}
                onChange={handleFormChange}
                placeholder="Message"
                className="border p-3 rounded-lg w-full"
                required>
              </textarea>
            </div>

            {/* WhatsApp Submit Button */}
            <div className="flex flex-col items-center pt-4">
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
            </div>
          </form>
        </div>
      </div>

      {/* -------------------- FIND US SECTION -------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <h2 className="text-4xl text-center font-extrabold text-gray-800 mb-10">
          Find Us Here
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center space-x-4 p-6 bg-green-50 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="p-3 bg-green-200 rounded-full">
              <Phone className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Phone</p>
              <a
                href="tel:+2348069546092"
                className="text-lg font-semibold text-gray-800 hover:text-green-600 transition"
              >
                +2348069546092
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-6 bg-green-50 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="p-3 bg-green-200 rounded-full">
              <Mail className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <a
                href="mailto:hello@carecenter.gohealth.com"
                className="text-lg font-semibold text-gray-800 hover:text-green-600 transition"
              >
                hello@carecenter.gohealth.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-6 bg-green-50 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="p-3 bg-green-200 rounded-full">
              <MapPin className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Location</p>
              <address className="text-lg font-semibold text-gray-800 not-italic">
                Villa 1, Maccat Villa, Apo Legislative Qtrs, Zone E, FCT Abuja
              </address>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl relative">
          <iframe
            className="w-full h-64 md:h-96 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.0223218814946!2d7.4840075008514235!3d9.004474338865665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0d7cec2e0ff5%3A0xe07009cb420e5bef!2sMACCATT%20VILLAS!5e1!3m2!1sen!2sng!4v1760454131682!5m2!1sen!2sng"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute bottom-4 right-4 p-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg cursor-pointer transition duration-300">
            View in Google Maps
          </div>
        </div>
      </section>
    </div>
  );
}
