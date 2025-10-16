"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import ThemeToggle from "@/Components/ThemeToggle";


export default function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ✅ Added this line

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Navigation links
  const navLinks = [
    { name: "Home", id: "home", href: "/" },
    { name: "About", id: "about", href: "/" },
    { name: "Services", id: "services", href: "/" },
    { name: "Contact", id: "contact", href: "/contactus" },
    { name: "Sectors", id: "sectors", href: "/" },
  ];

  const isHomePage = true; // ✅ Temporarily define this if you haven’t yet

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        navBg
          ? "bg-[#F6FFF6] dark:bg-gray-900 shadow-md"
          : "bg-transparent"
      }`}
    >
      
      <div className="container mx-auto">
          <div className="max-w-7xl h-20 flex justify-between items-center px-4">
            <div className="">
              <Image
                src="/logo/kevlar.png"
                alt="Logo"
                width={200}
                height={120}
                
                className="object-contain  cursor-pointer transform transition-transform duration-500 hover:rotate-[360deg]"
              />
            </div>
            
            {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6 text-white">
                {navLinks.map((link) =>
                  link.href === "/contactus" ? (
                    <Link
                      key={link.name}
                      href="/contactus"
                      className="cursor-pointer bg-white hover:bg-green-700 text-green-900 hover:text-white font-semibold px-5 py-2 rounded-full text-lg "
                    >
                      {link.name}
                    </Link>
                  ) : isHomePage ? (
                    <ScrollLink
                      key={link.name}
                      to={link.id}
                      smooth={true}
                      duration={800}
                      offset={-50}
                      className="cursor-pointer bg-white hover:bg-green-700 text-green-900 hover:text-white font-semibold px-5 py-2 rounded-full text-lg"
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <Link
                      key={link.name}
                      href={`${link.href}#${link.id}`}
                      className="cursor-pointer bg-white hover:bg-green-700 text-green-900 hover:text-white font-semibold px-5 py-2 rounded-full text-lg"
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
          

          {/* Mobile Menu Button */}
              <button className="md:hidden text-green-900" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
              </button>

        </div>
        {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full md:hidden text-green-900 shadow-md transition-all duration-300 bg-[#F6FFF6]">
              {navLinks.map((link) =>
                link.href === "/contactus" ? (
                  <Link
                    key={link.name}
                    href="/contactus"
                    className="cursor-pointer block px-4 py-2 hover:bg-green-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : isHomePage ? (
                  <ScrollLink
                    key={link.name}
                    to={link.id}
                    smooth={true}
                    duration={800}
                    offset={-50}
                    className="cursor-pointer block px-4 py-2 hover:bg-green-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <Link
                    key={link.name}
                    href={`${link.href}#${link.id}`}
                    className="cursor-pointer block px-4 py-2 hover:bg-green-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          )}
      </div>
    </nav>
  );
}
