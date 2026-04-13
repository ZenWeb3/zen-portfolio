"use client";

import { stacks } from "@/data/data";

export default function About() {
  const stackCategories = {
    Languages: stacks.filter((s) => s.category === "language"),
    Frontend: stacks.filter((s) => s.category === "frontend"),
    Backend: stacks.filter((s) => s.category === "backend"),
    Mobile: stacks.filter((s) => s.category === "mobile"),
    Database: stacks.filter((s) => s.category === "database"),
    Web3: stacks.filter((s) => s.category === "web3"),
    Tools: stacks.filter((s) => s.category === "tools"),
  };

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left column - Text */}
          <div>
            <span className="section-title">About</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Building digital products that matter
            </h2>
            <div className="space-y-4 text-[#a1a1a1]">
              <p>
                I'm a software developer based in Nigeria, passionate about
                building products at the intersection of{" "}
                <span className="text-[#fafafa]">Web3</span>,{" "}
                <span className="text-[#fafafa]">AI</span>, and{" "}
                <span className="text-[#fafafa]">fintech</span>.
              </p>
              <p>
                Currently working as a Software Developer at{" "}
                <span className="text-[#00ff88]">Rootcare Pharmaceuticals</span>{" "}
                where I build and maintain their inventory management system,
                while also interning in IT & Networking at{" "}
                <span className="text-[#00ff88]">Ceedapeg Hotels</span>.
              </p>
              <p>
                Previously shipped mobile apps at{" "}
                <span className="text-[#fafafa]">Suiver</span>. I've won
                multiple hackathons including W3Node Cape Town and Story
                Protocol, and published open-source packages used by developers
                worldwide.
              </p>
            </div>

            {/* Quick links */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.npmjs.com/package/zeroreg"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-tag hover:bg-[#00ff88]/10"
              >
                npm/zeroreg →
              </a>
              <a
                href="https://pypi.org/project/zeroreg/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-tag hover:bg-[#00ff88]/10"
              >
                pypi/zeroreg →
              </a>
            </div>
          </div>

          {/* Right column - Skills */}
          <div>
            <span className="section-title">Tech Stack</span>
            <div className="mt-6 space-y-6">
              {Object.entries(stackCategories).map(([category, items]) => (
                items.length > 0 && (
                  <div key={category}>
                    <h3 className="text-sm text-[#666] mb-3 font-mono">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((stack) => (
                        <span key={stack.id} className="tech-tag">
                          {stack.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}