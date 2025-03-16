"use client";
import React, { useState } from "react";

const HeroImageEffect = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <div
      className="relative rounded-full h-fit overflow-hidden inline-block"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute w-24 h-24 bg-white/20 blur-xl rounded-full transition-opacity duration-300 pointer-events-none"
          style={{
            left: position.x - 48,
            top: position.y - 48,
          }}
        />
      )}

      {children}
    </div>
  );
};

export default HeroImageEffect;
