"use client";

import { projects } from "@/data/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="section-title">Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Selected work
            </h2>
          </div>
          <a
            href="https://github.com/ZenWeb3"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 text-sm text-[#a1a1a1] hover:text-[#00ff88] transition-colors flex items-center gap-2"
          >
            View all on GitHub
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`card p-6 hover-lift group ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#666]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.award && (
                      <span className="text-xs px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] rounded font-mono">
                        {project.award}
                      </span>
                    )}
                    {project.contribution && (
                      <span className="text-xs px-2 py-1 bg-[#666]/20 text-[#a1a1a1] rounded font-mono">
                        Contributor
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#666] hover:text-[#fafafa] transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#666] hover:text-[#00ff88] transition-colors"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-[#00ff88] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#a1a1a1] mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}