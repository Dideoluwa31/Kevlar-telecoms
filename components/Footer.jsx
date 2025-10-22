"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 md:px-16"
      style={{ ["--brand"]: "#019a65" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo/kevlarlogo1.png"
              alt="Kevlar Telecoms Logo"
              width={200}
              height={100}
              className="object-contain rounded-md"
            />
            
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            A licensed ICT and telecommunications company committed to providing
            reliable, innovative, and sustainable connectivity solutions across
            Nigeria and beyond.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "About Us", href: "#about " },
              { name: "Services", href: "#services" },
              { name: "Our Approach", href: "#approach" },
              { name: "Projects", href: "#projects" },
              { name: "Clients", href: "#clients" },
              { name: "Contact", href: "#contact" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-[var(--brand)] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-white font-semibold mb-4 text-lg">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-[var(--brand)] mt-0.5" />
              <span>Villa 1, Maccat Villa, Apo Legislative Qtrs, Zone E, FCT Abuja</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={18} className="text-[var(--brand)] mt-0.5" />
              <a href="mailto:admin@kevlartelecoms.com" className="hover:text-[var(--brand)]">
                admin@kevlartelecoms.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={18} className="text-[var(--brand)] mt-0.5" />
              <a href="tel:+2348069546092" className="hover:text-[var(--brand)]">
                +234 806 954 6092
              </a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-5">
            {[
              { icon: <Facebook size={20} />, link: "#" },
              { icon: <Twitter size={20} />, link: "#" },
              { icon: <Linkedin size={20} />, link: "#" },
              { icon: <Instagram size={20} />, link: "#" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                whileHover={{ scale: 1.15 }}
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-[var(--brand)] transition-colors"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
     <div className="mt-12 border-t border-gray-800 pt-6 text-center text-md text-gray-500">
        © {new Date().getFullYear()} Kevlar Telecoms Limited. All rights reserved. <br />
        Developed by{" "}
        <a
          href="https://github.com/prince-jagaban"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#019a65] hover:text-[#017a50] px-2 font-medium transition-colors"
        >
          Usman Habib
        </a>

        <a
          href="https://github.com/Dideoluwa31"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#019a65] hover:text-[#017a50] px-2 font-medium transition-colors"
        >
          Asubiojo Oreoluwa
        </a>
      </div>

    </footer>
  );
}
