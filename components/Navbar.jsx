"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation"; // ✅ to detect current page
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";


export default function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ detect current route

  // determine if we are on home page
  const isHomePage = pathname === "/";

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
    { name: "About", id: "about", href: "/#about" },
    { name: "Services", id: "services", href: "/#services" },
    { name: "Projects", id: "projects", href: "/#projects" },
    { name: "Contact", id: "contact", href: "/contactus" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        navBg
          ? "bg-[#F6FFF6] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="max-w-7xl h-20 flex justify-between items-center px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
           <Image
             src="/logo/kevlar.png"
             alt="Kevlar Logo"
             width={200}
             height={120}
             className="object-contain cursor-pointer transform transition-transform duration-500 hover:scale-105"
           />
         </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-white">
            {navLinks.map((link) => {
              if (link.href === "/contactus") {
                // Contact button
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="cursor-pointer bg-white hover:bg-green-700 text-green-900 hover:text-white font-semibold px-5 py-2 rounded-full text-lg"
                  >
                    {link.name}
                  </Link>
                );
              }

              // If on home page, use react-scroll
              if (isHomePage) {
                return (
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
                );
              }

              // If on another page, link back to home + section
              return (
                <Link
                  key={link.name}
                  href={`/#${link.id}`}
                  className="cursor-pointer bg-white hover:bg-green-700 text-green-900 hover:text-white font-semibold px-5 py-2 rounded-full text-lg"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full md:hidden text-green-900 shadow-md bg-[#F6FFF6] transition-all duration-300">
            {navLinks.map((link) => {
              if (link.href === "/contactus") {
                return (
                  <Link
                    key={link.name}
                    href="/contactus"
                    className="block px-4 py-2 hover:bg-green-700 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              }

              if (isHomePage) {
                return (
                  <ScrollLink
                    key={link.name}
                    to={link.id}
                    smooth={true}
                    duration={800}
                    offset={-50}
                    className="block px-4 py-2 hover:bg-green-700 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={`/#${link.id}`}
                  className="block px-4 py-2 hover:bg-green-700 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
