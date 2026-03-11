'use client'
import { ArrowUpRightIcon, CodeBracketIcon, EyeIcon, StarIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online store with payment integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=400&h=250&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      rating: 4.9,
      views: "12.5K",
    },
    {
      title: "Task Management App",
      description: "Productivity tool with real-time collaboration",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop",
      tags: ["React", "Firebase", "Tailwind"],
      rating: 4.8,
      views: "8.3K",
    },
    {
      title: "Portfolio Website Builder",
      description: "Drag-and-drop website builder with templates",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
      tags: ["Next.js", "Framer Motion", "Vercel"],
      rating: 4.7,
      views: "15.2K",
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking with biometric auth",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
      tags: ["React Native", "Node.js", "AWS"],
      rating: 4.9,
      views: "22.1K",
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0F19]">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ui-color/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Section Header */}
      <h1 className="text-text text-3xl sm:text-4xl w-full font-semibold text-center drop-shadow-[0_4px_58px] drop-shadow-ui-color/40 border-b-2 border-b-ui-color/10 py-4 rounded-xl">
        Explore my latest
        <span className="text-text-third ml-2">
          Featured <br className="hidden sm:flex" />
          <span className="bg-invert mx-1 px-3 rounded-2xl text-invert-text drop-shadow-[0_4px_38px] drop-shadow-ui-color/20">
            Projects
          </span>{" "}
          In Action.
        </span>
      </h1>

      {/* Projects Container */}
      <div className="relative max-w-7xl mx-auto mt-10">
        {/* Projects Container - Horizontal Scroll */}
        <div className="relative overflow-x-auto pb-8 scrollbar-hide">
          <div className="flex gap-6 min-w-max px-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-80 flex-shrink-0 bg-ui-color/12 rounded-3xl p-4 gap-2 transition-all ease-in cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-ui-color/20"
              >
                <div className="flex flex-col bg-ui-color/12 w-full h-fit drop-shadow-[0_4px_20px] drop-shadow-ui-color/60 border-2 border-ui-color/20 rounded-3xl p-4 gap-2">
                  {/* Project Image */}
                  <div className="w-full h-40 rounded-2xl overflow-hidden border-2 border-ui-color/40 flex items-start p-3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute top-3 left-3 p-1.5 bg-secondary/40 backdrop-blur-md font-semibold text-[13px] px-3 rounded-2xl flex items-center gap-2 text-text">
                      <StarIcon className="text-yellow-300 size-4" />
                      {project.rating}
                    </div>
                  </div>

                  {/* Project Title */}
                  <span className="font-semibold text-text flex items-center gap-2">
                    {project.title}
                    <div className="size-2 bg-green-300 rounded-3xl" />
                  </span>

                  {/* Project Description */}
                  <p className="text-text-third text-sm">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex bg-invert text-invert-text py-1.5 px-3 text-sm font-semibold rounded-[14px] flex-1 text-center justify-center hover:bg-ui-color hover:text-white transition-all"
                      aria-label="View Live Demo"
                    >
                      <EyeIcon className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                    <a
                      href="#"
                      className="flex bg-ui-color/20 text-ui-color-text items-center py-1.5 px-3 text-sm font-semibold rounded-[14px] text-center justify-center hover:bg-ui-color/30 transition-all"
                      aria-label="View Code"
                    >
                      <CodeBracketIcon className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography Section Below */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-ui-color to-purple-500 bg-clip-text text-transparent">
              Built With Modern Tech
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every project is crafted with attention to detail, performance, and user experience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects