"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/data";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import Skills from "./Skills";

const Project = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left mb-5"
      >
        <h1 className="sm:text-3xl text-2xl mb-6 font-bold">
          Projects
          <span className="inline-block ml-4 transform hover:scale-110 transition-transform">
            🚀
          </span>
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
        <p className="text-base md:text-left text-[#FFFFFF99]">
          Showcasing some of my latest work and experiments in tech
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative bg-[#130b1c]/80 backdrop-blur-lg rounded-lg hover:scale-[1.02] transition-transform overflow-hidden border hover:bg-[#130b1c]  border-[#ffffff10]"
          >
            <div className="flex relative flex-col h-full p-8">
              <h3 className="text-bold text-2xl font-signika-bold mb-3">
                {project.title}
              </h3>
              <p className="text-purple-400 font-medium mb-4 text-sm">
                {project.lang}
              </p>
              <p className="text-[#FFFFFF99] text-[16px] mb-0 flex-grow">
                {project.description}
              </p>
              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center group/link"
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-white hover:text-purple-300 transition-colors"
                >
                  <span className="text-sm font-medium">View Project</span>
                  <MoveUpRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
};

export default Project;

