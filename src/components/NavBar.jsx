import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#121212] opacity-90 py-1 ">
      <div className="container mx-auto flex items-center  justify-between h-16 px-10 lg:px-12">
        {/* Brand Logo */}
        <div className="flex items-center">
          <a href="/" className="font-bold  sm:text-3xl text-2xl text-white">
            Zen⚡
          </a>
        </div>
        {/* GitHub Link */}
        <div className="flex items-center">
          <a
            href="http://www.github.com/zenweb3"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 relative rounded-full px-1 py-1 transition-all duration-300 border-2 border-transparent bg-transparent before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:-z-10 before:p-[2px] before:content-['']"
          >
            <span className="flex items-center gap-3 bg-[#111] px-4 py-2 rounded-full">
              <Image
                src="/icons/github.png"
                alt="GitHub icon"
                width={32}
                height={32}
                className="opacity-100 w-6 h-6 md:w-8 md:h-8 transition-opacity duration-300 group-hover:opacity-80"
              />
              <span className="text-white font-bold">GitHub</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
