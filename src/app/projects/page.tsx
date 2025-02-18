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

// Add this new component for animated stats
const AnimatedStat = ({ value, label }: { value: number, label: string }) => (
  <motion.div 
    className="text-center"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <motion.div 
      className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {value}
    </motion.div>
    <div className="text-sm text-gray-400">{label}</div>
  </motion.div>
);

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Web', 'Mobile', 'AI/ML', 'Open Source'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.categories.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Enhanced Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D1117,#161B22)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />
        {/* Animated particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5, 1],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
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

        {/* Enhanced Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group gradient-border"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#161B22] p-6">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Project Header */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.h3 
                        className="text-xl font-bold"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                          {project.title}
                        </span>
                      </motion.h3>
                      <motion.span 
                        className={`px-3 py-1 rounded-full text-xs ${
                          project.status === 'active' ? 'bg-green-500/20 text-green-400' :
                          project.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {project.status}
                      </motion.span>
                    </div>

                    <p className="text-gray-400 mb-6">{project.description}</p>

                    {/* Enhanced Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="tech-pill"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-800">
                      <AnimatedStat value={project.stars} label="Stars" />
                      <AnimatedStat value={project.forks} label="Forks" />
                      <AnimatedStat value={project.tech.length} label="Technologies" />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-6">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-center hover:from-blue-600 hover:to-purple-700 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                      </motion.a>
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