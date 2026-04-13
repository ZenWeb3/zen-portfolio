"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00ff88]/3 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#222] bg-[#111] mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="text-sm text-[#a1a1a1] font-mono">
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="block">Samuel</span>
          <span className="block text-gradient">Edohoeket</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-[#a1a1a1] max-w-2xl mx-auto mb-4 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Software Developer crafting{" "}
          <span className="text-[#fafafa]">Web3</span>,{" "}
          <span className="text-[#fafafa]">AI-powered</span>, and{" "}
          <span className="text-[#fafafa]">full-stack</span> solutions.
        </p>

        {/* Alias */}
        <p
          className={`text-lg text-[#a1a1a1] mb-10 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          popularly known as{" "}
          <span className="text-[#00ff88] font-semibold">Zen</span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a href="#projects" className="btn-primary">
            View Projects
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a href="/pdf/Samuel_Edohoeket_CV.pdf" download className="btn-secondary">
            Download CV
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </div>

        {/* Quick stats */}
        <div
          className={`flex items-center justify-center gap-8 md:gap-12 text-center transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#fafafa]">
              2+
            </div>
            <div className="text-xs md:text-sm text-[#666] font-mono">
              Hackathon Wins
            </div>
          </div>
          <div className="w-px h-10 bg-[#222]" />
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#fafafa]">
              10+
            </div>
            <div className="text-xs md:text-sm text-[#666] font-mono">
              Projects Shipped
            </div>
          </div>
          <div className="w-px h-10 bg-[#222]" />
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#fafafa]">
              3+
            </div>
            <div className="text-xs md:text-sm text-[#666] font-mono">
              Years Building
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-[#666] font-mono">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#666] to-transparent" />
        </div>
      </div>
    </section>
  );
}
