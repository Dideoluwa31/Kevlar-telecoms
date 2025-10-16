"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";


const slides = [
  "/landingpageimg/one.jpeg",
  "/landingpageimg/two.jpeg",
  "/landingpageimg/three.jpeg",
];

export default function LandingPage() {
  const [current, setCurrent] = useState(0);
  const { theme } = useTheme();

  // auto image slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={`relative min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-700
        ${theme === "dark"
          ? "bg-gradient-to-r from-black via-green-900 to-green-700"
          : "bg-gradient-to-l from-white via-green-100 to-green-300"
        }`}
    >
      {/* bottom curve */}
      <div
        className={`absolute bottom-0 left-0 w-full h-24 rounded-t-[100px]
          ${theme === "dark" ? "bg-green-950" : "bg-green-200"}
        `}
      ></div>

      {/* Auto-scrolling transparent info bar */}
      <div className="absolute bottom-[20%] left-0 w-full overflow-hidden">
        <div className="w-full h-16 bg-opacity-30 border border- white backdrop-blur-md flex items-center">
          <motion.div
            className="flex whitespace-nowrap text-lg font-semibold px-10"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            <span className="mx-10">
              🌿 Welcome to our world of nature & balance
            </span>
            <span className="mx-10">
              ✨ Experience beauty, calm, and innovation
            </span>
            <span className="mx-10">
              🌸 Designed with love and green energy
            </span>
          </motion.div>
        </div>
      </div>

      {/* Right-hand Image Frame */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[40%] max-w-lg h-[70%] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Image
              src={slides[current]}
              alt="slide"
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* indicator dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === i
                  ? theme === "dark"
                    ? "bg-green-400 scale-110"
                    : "bg-green-700 scale-110"
                  : theme === "dark"
                    ? "bg-white/40"
                    : "bg-black/40"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
 