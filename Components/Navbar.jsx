// components/Navbar.js
"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [navBackground, setNavBackground] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileLogoRotated, setIsMobileLogoRotated] = useState(false);
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileLogoClick = () => {
    setIsMobileLogoRotated(!isMobileLogoRotated);
  };

  // Determine if we're on the homepage
  const isHomePage = pathname === "/";

  // Navigation links configuration
  const navLinks = [
    { name: "Home", id: "home", href: "/" },
    { name: "About", id: "about", href: "/" },
    { name: "Services", id: "services", href: "/" },
    { name: "Contact", id: "contact", href: "/contactus" },
    { name: "Sectors", id: "sectors", href: "/" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 
      bg-white shadow-[0_4px_15px_rgba(0,0,0,0.15)]`}
    >
      <div className="container mx-auto p-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo and Brand Name Combined */}
            <div className="flex items-center space-x-15">
              <div
                className={`w-20 h-20 items-center ${isMobileLogoRotated ? "rotate-360" : ""} 
                transition-all duration-500 cursor-pointer`}
                onClick={handleMobileLogoClick}
              >
                <Image
                  src="/logo/infralogo2-removebg-preview (1).png"
                  alt="logo"
                  width={200}
                  height={200}
                  className="object-contain rounded-full hover:rotate-180 transition-transform duration-500"
                />
              </div>
              <h1 className="text-lg font-bold font-serif text-[#1f888d]">
                INFRAGENIX NIGERIAN LIMITED
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-15 text-md text-[#1f888d]">
              {navLinks.map((link) =>
                link.href === "/contactus" ? (
                  <Link
                    key={link.name}
                    href="/contactus"
                    className="cursor-pointer text-[#1f888d] hover:text-blue-300"
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
                    className="cursor-pointer text-[#1f888d] hover:text-blue-300"
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <Link
                    key={link.name}
                    href={`${link.href}#${link.id}`}
                    className="cursor-pointer text-[#1f888d]hover:text-blue-300"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#1f888d]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden text-[#2dd9e1] shadow-md transition-all duration-300 bg-blue-900">
            {navLinks.map((link) =>
              link.href === "/contactus" ? (
                <Link
                  key={link.name}
                  href="/contactus"
                  className="cursor-pointer block px-4 py-2 hover:bg-blue-700"
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
                  className="cursor-pointer block px-4 py-2 hover:bg-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <Link
                  key={link.name}
                  href={`${link.href}#${link.id}`}
                  className="cursor-pointer block px-4 py-2 hover:bg-blue-700"
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
