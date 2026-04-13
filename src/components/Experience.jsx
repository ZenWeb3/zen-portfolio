"use client";

import { experience } from "@/data/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left column - Title */}
          <div>
            <span className="section-title">Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Where I've worked
            </h2>
            <p className="text-[#a1a1a1]">
              Building real-world products across different industries, from
              healthcare to hospitality to Web3.
            </p>
          </div>

          {/* Right column - Timeline */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#00ff88] before:rounded-full after:absolute after:left-[3px] after:top-4 after:w-px after:h-full after:bg-[#222] last:after:hidden"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-xs px-2 py-1 rounded font-mono ${
                      exp.period === "Current"
                        ? "bg-[#00ff88]/10 text-[#00ff88]"
                        : "bg-[#222] text-[#666]"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-[#00ff88] text-sm mb-2">{exp.company}</p>
                <p className="text-sm text-[#a1a1a1]">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-20 pt-20 border-t border-[#222]">
          <span className="section-title">Achievements</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-12">
            Recognition & wins
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6 hover-lift">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold mb-2">
                Story Protocol Hackathon
              </h3>
              <p className="text-sm text-[#a1a1a1]">
                Built Proofa. A decentralized proof of authenticity platform.
                November 2025.
              </p>
            </div>

            <div className="card p-6 hover-lift">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="text-lg font-semibold mb-2">
                Open Source Publisher
              </h3>
              <p className="text-sm text-[#a1a1a1]">
                Published zeroReg on npm and PyPI. A human-readable regex builder
                used by developers worldwide.
              </p>
            </div>

            <div className="card p-6 hover-lift">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold mb-2">
                B.Sc. Software Engineering
              </h3>
              <p className="text-sm text-[#a1a1a1]">
                Graduated with a degree in Software Engineering. 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}