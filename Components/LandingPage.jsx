"use client"; // This must be at the top since WhoWeAre is a client component

import React from 'react';
// Added icons for WhoWeAre section
import { Compass, Laptop2, SearchCheck, BarChart3, Home, Webcam, Cable, Server, Antenna, Cctv } from 'lucide-react';


// --- Data for the Hero/Services Section (App Component) ---
const heroServices = [
  { icon: Compass, title: "Strategy & Discovery", description: "We provide the most responsive and functional IT design for companies and businesses worldwide.", color: "text-blue-600" },
  { icon: Laptop2, title: "Software Solution", description: "We provide the most responsive and functional IT design for companies and businesses worldwide.", color: "text-orange-600" },
  { icon: SearchCheck, title: "Technology Solution", description: "We provide the most responsive and functional IT design for companies and businesses worldwide.", color: "text-teal-600" },
  { icon: BarChart3, title: "Business Analytics", description: "We provide the most responsive and functional IT design for companies and businesses worldwide.", color: "text-indigo-600" },
];

// --- Service Card Component (from the first file) ---
const ServiceCard = ({ icon: Icon, title, description, color }) => (
  <div className="bg-white p-4 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 min-w-[250px]">
    {/* Note: The style attribute is adjusted slightly for compatibility */}
    <div className={`p-4 rounded-xl inline-block mb-4 ${color.replace('text-', 'bg-')} bg-opacity-10`}>
      <Icon className={`w-8 h-8 ${color}`} />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </div>
);

// --- Who We Are Component ---
// UPDATED: Replaced image paths with imported icons and added an iconColor property
const whoWeAreServices = [
  {
    title: "SMART CITY DEPLOYMENT",
    icon: Home, // Using a Home icon
    iconColor: "text-blue-400",
    bg: "bg-[#0a0e0f]",
    textColor: "text-white",
  },
  {
    title: "CAMPUS SOLUTION DEPLOYMENT",
    icon: Webcam, // Using a Campus/Graduation icon
    iconColor: "text-yellow-600",
    bg: "bg-[#f9f9f9]",
    textColor: "text-black",
  },
  {
    title: "FTT(x) DEPLOYMENT",
    icon: Cable, // Using a Cable icon for Fiber
    iconColor: "text-red-500",
    bg: "bg-[#222222]",
    textColor: "text-white",
  },
  {
    title: "CABLING AND DATA CENTER SOLUTIONS",
    icon: Server, // Using a Server icon for Data Center
    iconColor: "text-green-500",
    bg: "bg-[#f2f2f2]",
    textColor: "text-black",
  },
  {
    title: "BASE STATION DEPLOYMENT",
    icon: Antenna, // Using an Antenna icon
    iconColor: "text-indigo-400",
    bg: "bg-[#0a0e0f]",
    textColor: "text-white",
  },
  {
    title: "CCTV INSTALLATION",
    icon: Cctv, // Using a CCTV icon
    iconColor: "text-orange-500",
    bg: "bg-[#fafafa]",
    textColor: "text-black",
  },
];

const WhoWeAre = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Who We Are
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {whoWeAreServices.map((item, index) => {
          const Icon = item.icon; // Get the Icon component from the data
          return (
            <div
              key={index}
              className={`${item.bg} ${item.textColor} rounded-3xl p-10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 min-h-[300px]`}
            >
              <div>
                {/* UPDATED: Render the Icon component instead of the Image */}
                <div className={`mb-6 p-4 rounded-xl inline-block ${item.iconColor.replace('text-', 'bg-')} bg-opacity-10`}>
                  <Icon className={`w-10 h-10 ${item.iconColor}`} />
                </div>
                
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <div className="w-8 h-1 bg-green-600 mb-6"></div>
              </div>

              <button
                className={`px-6 py-2 rounded-md font-medium text-sm w-fit ${
                  item.bg === "bg-[#b40000]" // Adjusted logic, though this specific background doesn't exist now
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-[#019a65] text-white hover:bg-green-800"
                } transition`}
              >
                Explore
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// --- Main Application Component ---
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Hero Section Container with White-to-Green Gradient Background */}
      <header className="relative pt-16 pb-48 md:pb-64 bg-gradient-to-r from-white to-emerald-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content (Aligned Left) */}
          <div className="max-w-3xl pt-10 md:pt-20">
            <p className="text-base font-semibold uppercase tracking-wider text-green-900 opacity-80 mb-3">
              TECHNOLOGY RELATED CONSULTANCY
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-green-900 leading-tight mb-6">
              KEVLAR TELECOMS <br className="hidden sm:inline" /> LIMITED
            </h1>
            <p className="text-xl text-GREEN-900 opacity-90 mb-8 max-w-xl">
              delivers quality projects on time for our clients and also maintaining continuous improvements in the world
            </p>
            <button className="bg-white text-emerald-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Read More
            </button>
          </div>
        </div>
        {/* Decorative Circle (Similar to original image) */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-30 blur-3xl transform -translate-x-1/2 -translate-y-1/2 hidden md:block" aria-hidden="true"></div>
      </header>

      {/* Overlapping Service Card Section */}
      <section className="relative -mt-32 sm:-mt-48 z-20 mb-16">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
            {heroServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* --- Inserted WhoWeAre Component Here --- 
        The sections naturally stack: Hero -> Overlapping Cards -> Who We Are.
      */}
      <WhoWeAre />

    </div>
  );
};

export default App;