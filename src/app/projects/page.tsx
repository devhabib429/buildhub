'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';

// Mock data - replace with your actual data fetching
const projects: Project[] = [
  {
    id: 1,
    title: "BuildHub",
    description: "Open-source developer community platform",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    stars: 128,
    forks: 45,
    author: {
      name: "John Doe",
      avatar: "https://github.com/github.png",
      github: "johndoe"
    },
    githubUrl: "https://github.com/nextdrios/buildhub",
    featured: true,
    categories: ["Web", "Open Source"],
    status: "active"
  },
  // Add more projects...
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Web', 'Mobile', 'AI/ML', 'Open Source'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.categories.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0D1117,#161B22)] opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Featured Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover amazing open-source projects built by our community members.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border ${
                selectedCategory === category
                  ? 'border-purple-500 text-purple-500'
                  : 'border-gray-700 text-gray-400 hover:border-gray-500'
              } transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-xl bg-[#161B22] border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        project.status === 'active' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats & Author */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
                      <div className="flex items-center space-x-4">
                        <img
                          src={project.author.avatar}
                          alt={project.author.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-gray-400 text-sm">
                          {project.author.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .25a.75.75 0 0 1 .673.418l3.058 6.197 6.839.994a.75.75 0 0 1 .415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 0 1-1.088.791L12 18.347l-6.117 3.216a.75.75 0 0 1-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 0 1 .416-1.28l6.838-.993L11.328.668A.75.75 0 0 1 12 .25z" />
                          </svg>
                          {project.stars}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm-3.25-1.75a3.25 3.25 0 1 0 6.5 0 3.25 3.25 0 0 0-6.5 0zm-3-12.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM2.5 4.75a3.25 3.25 0 1 0 6.5 0 3.25 3.25 0 0 0-6.5 0zM18.25 6.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM15 4.75a3.25 3.25 0 1 0 6.5 0 3.25 3.25 0 0 0-6.5 0z" />
                          </svg>
                          {project.forks}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
} 