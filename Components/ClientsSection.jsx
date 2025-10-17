"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsSection() {
  const clients = [
    { name: "3Way Communications", img: "/clients/3way.png" },
    { name: "Ekiti State University", img: "/clients/eksu.png" },
    { name: "IPNX Nigeria", img: "/clients/ipnx.png" },
    { name: "FiberOne Broadband", img: "/clients/fiberone.png" },
    { name: "KKONTech", img: "/clients/kkontech.png" },
    { name: "LASG", img: "/clients/lasg.jpg" },
    { name: "NIMC", img: "/clients/nimc.jpg" },
    { name: "Galaxy BackBone", img: "/clients/gbb.png" },
    { name: "NCC", img: "/clients/ncclogo.png" },

  ];

  // Duplicate for smooth infinite loop
  const allClients = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="py-16 px-6 md:px-16 bg-white text-center overflow-hidden"
      style={{ ["--brand"]: "#019a65" }}
    >
      {/* Header */}
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Clients & Partners
        </h3>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Trusted by leading organizations across Nigeria’s telecommunications
          and ICT industry.
        </p>
      </div>

      {/* Scrolling Logos */}
      <div className="relative mt-10 w-full overflow-hidden">
        <motion.div
          className="flex gap-6 sm:gap-10 items-center min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 15, // smoother scroll
            ease: "linear",
          }}
        >
          {allClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 h-16 sm:w-36 sm:h-20 md:w-40 md:h-24 bg-gray-50 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative w-full h-full p-3 flex items-center justify-center">
                <Image
                  src={client.img}
                  alt={client.name}
                  fill
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* subtle gradient fade at edges */}
        <div className="absolute top-0 left-0 w-12 sm:w-16 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-12 sm:w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
