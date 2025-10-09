"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    title: "Provide superior & best quality results.",
    text: "Our Company has consistently embraced innovation to provide a superior level of excellence.",
    image: "/landingpageimg/one.jpeg",
  },
  {
    id: 2,
    title: "Building Reliable Connections.",
    text: "Delivering strong communication networks and infrastructure that last.",
    image: "/landingpageimg/two.jpeg",
  },
  {
    id: 3,
    title: "Innovating for a Digital Future.",
    text: "We lead with technology to create smarter business solutions.",
    image: "/landingpageimg/three.jpeg",
  },
  {
    id: 4,
    title: "Empowering Industries with Connectivity.",
    text: "Enhancing productivity through dependable systems.",
    image: "/landingpageimg/four.jpeg",
  },
  {
    id: 5,
    title: "Your Trusted Technology Partner.",
    text: "Our expertise drives sustainable progress.",
    image: "/images/slide5.jpg",
  },
  {
    id: 6,
    title: "Committed to Excellence Always.",
    text: "We go beyond expectations to deliver the best results.",
    image: "/images/slide6.jpg",
  },
];

export default function LandingCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Glossy Green Overlay */}
          <div
            className="absolute left-0 top-0 h-full w-[45%] lg:w-[40%] flex items-center px-12 sm:px-16"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,180,150,0.95) 0%, rgba(0,150,130,0.85) 100%)",
              boxShadow: "10px 0 25px rgba(0,0,0,0.3)",
              backdropFilter: "blur(6px)",
              clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="text-white space-y-5 max-w-md">
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-base lg:text-lg text-white/90">{slide.text}</p>
              <button className="mt-4 text-sm font-semibold border-b-2 border-white/70 hover:border-white transition-all flex items-center gap-2">
                <span>→ KNOW MORE ABOUT US</span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 text-black p-3 rounded-full z-20 backdrop-blur-sm"
      >
        <FiChevronLeft className="text-2xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 text-black p-3 rounded-full z-20 backdrop-blur-sm"
      >
        <FiChevronRight className="text-2xl" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
