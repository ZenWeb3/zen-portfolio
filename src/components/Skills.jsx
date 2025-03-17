"use client";
import React from "react";
import { motion } from "framer-motion";
import { stacks } from "../data/data";

const Skills = () => {
  return (
    <section className="mt-20 sm:mt-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left mb-5"
      >
        <h1 className="sm:text-3xl text-2xl mb-6 font-bold flex items-center">
          Technical Proficiency
          <span className="ml-3 transform hover:scale-110 transition-transform">
            🛠️
          </span>
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
        <p className="text-base text-[#FFFFFF99]">
          A comprehensive toolkit refined through years of hands-on experience.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {stacks.map((stack, index) => (
          <motion.div
            key={stack.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative bg-[#130b1c]/80 backdrop-blur-lg rounded-lg border border-[#ffffff10] overflow-hidden hover:bg-[#130b1c] hover:scale-[1.02] transition-transform"
          >
            <div className="flex flex-col h-full p-8">
              <h2 className="font-signika-bold">{stack.lang}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
