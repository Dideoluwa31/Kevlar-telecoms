"use client";

import Image from "next/image";

export default function LandingPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-200 via-green-300 to-green-400 dark:from-green-900 dark:via-green-800 dark:to-black transition-colors duration-700">
      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col justify-center items-start h-[80vh] px-10 md:px-20 text-left">
        <p className="uppercase tracking-wide text-sm font-semibold text-green-700 dark:text-green-400">
          Technology Related Consultancy
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mt-4">
          We bring great <br />
          <span className="text-green-700 dark:text-green-400">Ideas</span> to life
        </h1>

        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-md">
          We provide the most responsive and functional IT design for companies and businesses worldwide.
        </p>

        <button className="mt-6 px-6 py-3 rounded-xl font-semibold text-white bg-green-700 hover:bg-green-800 dark:bg-green-500 dark:hover:bg-green-400 transition">
          Read More
        </button>
      </div>

      {/* FLIPPED CURVED DIVIDER (blends with gradient) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83
               C906.67,72,823.78,31.06,743.84,14.19
               C661.39-3.06,578.69,1.62,495.74,18.47
               C418.9,34.07,339.52,64.27,261.07,83.17
               C189.32,100,117.52,104.81,45.78,93.45
               C30.07,91,15,87.27,0,83.25
               V120H1200V96.36
               C1137.12,112.41,1063.6,113.63,985.66,92.83Z"
            fill="url(#blendGradient)"
          ></path>
          <defs>
            <linearGradient id="blendGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A7F3D0" /> {/* light green top */}
              <stop offset="100%" stopColor="#F0FDF4" /> {/* pale green bottom */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* IMAGE BOX SECTION */}
      <div className="relative  z-30 grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-20 pb-20 bg-gradient-to-r from-green-100 via-green-50 to-green-100 dark:from-green-950 dark:via-green-900 dark:to-black transition-colors duration-700">
        {[
          "/landingpageimg/one.jpeg",
          "/landingpageimg/two.jpeg",
          "/landingpageimg/three.jpeg",
          "/landingpageimg/four.jpeg",
        ].map((img, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-xl hover:-translate-y-8 transition-transform duration-500"
          >
            <Image
              src={img}
              alt={`Box ${i + 1}`}
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
