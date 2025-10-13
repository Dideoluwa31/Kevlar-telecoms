"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { FiSun, FiMoon } from "react-icons/fi";
import ThemeToggle from "@/Components/ThemeToggle";

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        navBg
          ? "bg-[#019a65] dark:bg-gray-900 shadow-md"
          : "bg-transparent"
      }`}>
         <ThemeToggle />
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain cursor-pointer transform transition-transform duration-700 hover:rotate-[360deg]"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            KEVLAR TELECOMSNIG LIMITED
          </h1>
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          {["home", "services", "about", "contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full text-lg transition-all"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </ScrollLink>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400 w-5 h-5" />
            ) : (
              <FiMoon className="text-gray-700 dark:text-gray-200 w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
