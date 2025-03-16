"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import HeroImageEffect from "./HeroImageEffect";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section className="pt-[100px] pb-5 px-0">
      <div className="absolute bottom-[0px] right-[0px] w-[300px] h-[300px]  bg-gradient-to-br from-purple-600 to-blue-500 blur-[150px] opacity-30 pointer-events-none"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-between gap-5 w-full"
      >
        <div className="lg:w-1/2 text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 1, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-extrabold font-signika-bold text-white mb-4 text-4xl sm:text-5xl lg:text-6xl leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Samuel",
                1500,
                "a Fullstack Dev",
                1500,
                "a Mobile App Dev",
                1500,
                "a Web3 Enthusiast",
                1500,
              ]}
              wrapper="span"
              speed={50}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 inline-block text-4xl sm:text-5xl lg:text-6xl"
              repeat={Infinity}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[#adb7be] sm:text-lg mb-4 text-base lg:text-xl"
          >
            Hey there! I'm Samuel Edohoeket, a passionate Fullstack Developer
            specializing in both web and mobile development. With a strong
            foundation in React, Next.js, React Native, Python, and Firebase, I
            build modern, high-performance applications that deliver seamless
            user experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="sm:flex gap-5"
          >
            <button className="rounded-full text-white w-full sm:w-fit bg-gradient-to-r  from-purple-600 to-blue-500 px-6 py-3 font-bold cursor-pointer mt-3 hover:opacity-80 transition-all duration-300">
              Hire Me
            </button>
            <button className="rounded-full w-full sm:w-fit bg-gradient-to-r from-purple-600 to-blue-500 px-1 py-1 mt-3 text-white font-bold cursor-pointer">
              <span className="block bg-[#121212] rounded-full px-5 py-2 transition-opacity opacity-100 hover:opacity-80">
                Download CV
              </span>
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:w-1/2 flex justify-center"
        >
          <HeroImageEffect>
            <div className="rounded-full bg-[#181818] w-[200px] lg:w-[300px] h-[180px] lg:h-[300px] items-center overflow-hidden flex justify-center">
              <Image
                src="/images/portfolio-img.png"
                alt="Portfolio Image"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </HeroImageEffect>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
