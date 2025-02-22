'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import projectsData from '@/data/projects.json';
import Fuse from 'fuse.js';

// Use the data from projects.jsonn
const projects: Project[] = projectsData.projects;

// Configure Fuse.js for search
const fuse = new Fuse(projects, {
  keys: ['title', 'description', 'tech', 'categories', 'author.name'],
  threshold: 0.4,
});

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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    key={project.id}
    layout
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group card-3d neon-border hover-glow"
    whileHover={{ scale: 1.02 }}
  >
    <div className="relative overflow-hidden rounded-xl bg-[#161B22]/80 p-6 glass-effect">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <motion.h3 
            className="text-xl font-bold animated-gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            {project.title}
          </motion.h3>
          <motion.span 
            className={`px-3 py-1 rounded-full text-xs ${
              project.status === 'active' ? 'bg-green-500/20 text-green-400' :
              project.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-gray-500/20 text-gray-400'
            }`}
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          >
            {project.status}
          </motion.span>
        </div>

        <p className="text-gray-400 mb-6">{project.description}</p>

        {/* Tech Stack with enhanced animations */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <motion.span
              key={tech}
              className="tech-pill"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [-2, 2, -2, 0],
                transition: { duration: 0.3 }
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Author Info */}
        <div className="flex items-center space-x-3 mb-6">
          <motion.img
            src={project.author.avatar}
            alt={project.author.name}
            className="w-8 h-8 rounded-full border border-gray-800"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.8 }}
          />
          <span className="text-gray-400 text-sm">{project.author.name}</span>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-800/50 backdrop-blur-sm">
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
            className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-center transform transition-all"
            whileHover={{ 
              scale: 1.05,
              backgroundImage: 'linear-gradient(to right, #4158D0, #C850C0, #FFCC70)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.a>
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = searchQuery 
    ? fuse.search(searchQuery).map(result => result.item)
    : projects;

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Enhanced Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117] animate-gradientMove" 
             style={{ backgroundSize: '200% 200%' }} />
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
      <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-16">
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
            Discover innovative projects from our community of developers.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <motion.input
              type="text"
              placeholder="Search projects by name, tech stack, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-[#161B22]/80 border border-gray-800/50 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 mt-12"
          >
            <p className="text-xl">No projects found matching your search.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
} 