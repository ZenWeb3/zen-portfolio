"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Smartphone,
  Database,
  Palette,
  Link,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "FRONTEND DEVELOPMENT",
    description:
      "Building modern and responsive web applications with React.js, React Native, and TailwindCSS. Focusing on performance, UI/UX, and accessibility.",
    icon: Code,
    category: "Development",
  },
  {
    id: 2,
    title: "BACKEND DEVELOPMENT",
    description:
      "Developing scalable and secure backend systems with FastAPI,  and Appwrite. Creating RESTful APIs and database management.",
    icon: Server,
    category: "Development",
  },
  {
    id: 3,
    title: "MOBILE-APP DEVELOPMENT",
    description:
      "Building end-to-end web and mobile applications by integrating frontend and backend technologies for seamless user experiences.",
    icon: Smartphone,
    category: "Development",
  },
  {
    id: 4,
    title: "SMART CONTRACT DEVELOPMENT (SUI - MOVE)",
    description:
      "Exploring Move Smart Contract development on the Sui blockchain. Experimenting with DApps and blockchain integration.",
    icon: Link,
    category: "Blockchain",
  },
  {
    id: 5,
    title: "DATABASE MANAGEMENT",
    description:
      "Designing and managing databases using SQL and NoSQL technologies. Ensuring data integrity and optimization for high performance.",
    icon: Database,
    category: "Infrastructure",
  },
  {
    id: 6,
    title: "UI/UX DESIGN",
    description:
      "Designing intuitive and visually appealing user interfaces. Focusing on user-centered design principles, modern trends, and seamless user experience.",
    icon: Palette,
    category: "Design",
  },
];

const Services = () => {
  return (
    <section className="sm:py-24 py-20 px-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left mb-5"
      >
        <h1 className="sm:text-3xl text-2xl mb-6 font-bold">
          Services
          <span className="inline-block ml-4 transform hover:scale-110 transition-transform">
            🔥
          </span>
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
        <p className="text-[#FFFFFF99] text-base md:text-left ">
          Specialized in multiple domains of software engineering
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[#130b1c]/80 backdrop-blur-lg p-6 rounded-lg border  border-[#ffffff10] hover:scale-[1.02] transition-transform"
          >
            <service.icon className="w-8 h-8 mb-2 text-purple-400" strokeWidth={1.5} />

            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-[#FFFFFF99] text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
