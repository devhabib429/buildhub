'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Developer } from '@/types';
import developersData from '@/data/developers.json';
import Fuse from 'fuse.js';

// Use the data from developers.json
const developers: Developer[] = developersData.developers;

// Configure Fuse.js for search
const fuse = new Fuse(developers, {
  keys: ['name', 'role', 'location', 'skills', 'bio'],
  threshold: 0.4,
});

const AnimatedSkill = ({ skill }: { skill: string }) => (
  <motion.span
    className="tech-pill"
    whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
    transition={{ duration: 0.3 }}
  >
    {skill}
  </motion.span>
);

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

const DeveloperCard = ({ developer, index }: { developer: Developer; index: number }) => (
  <motion.div
    key={developer.id}
    layout
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group card-3d neon-border hover-glow"
    whileHover={{ scale: 1.02 }}
  >
    <div className="relative overflow-hidden rounded-xl bg-[#161B22]/80 p-6 glass-effect">
      {/* Shine effect */}
      <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100" />
      
      <div className="relative z-10">
        {/* Profile Header */}
        <motion.div 
          className="flex items-center space-x-4 mb-6"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div className="relative">
            <motion.img
              src={developer.avatar}
              alt={developer.name}
              className="w-16 h-16 rounded-full border-2 border-gray-800"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse-slow" />
          </motion.div>
          
          <div>
            <motion.h3 
              className="text-xl font-bold animated-gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              {developer.name}
            </motion.h3>
            <p className="text-gray-400">{developer.role}</p>
          </div>
        </motion.div>

        {/* Location */}
        <div className="flex items-center text-gray-400 mb-4">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {developer.location}
        </div>

        <p className="text-gray-400 mb-6">{developer.bio}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {developer.skills.map((skill, i) => (
            <motion.span
              key={skill}
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
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-800/50 backdrop-blur-sm">
          <AnimatedStat value={developer.projects} label="Projects" />
          <AnimatedStat value={developer.followers} label="Followers" />
          <AnimatedStat value={developer.contributions} label="Contributions" />
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-6">
          {developer.github && (
            <motion.a
              href={`https://github.com/${developer.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </motion.a>
          )}
          {developer.twitter && (
            <motion.a
              href={`https://twitter.com/${developer.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </motion.a>
          )}
          {developer.website && (
            <motion.a
              href={developer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z"/>
              </svg>
            </motion.a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function DevelopersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDevelopers = searchQuery 
    ? fuse.search(searchQuery).map(result => result.item)
    : developers;

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Enhanced Background with animated gradient */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117] animate-gradientMove" 
             style={{ backgroundSize: '200% 200%' }} />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Our Developers
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with talented developers from around the world.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <motion.input
              type="text"
              placeholder="Search by name, role, skills, or location..."
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

        {/* Developers Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredDevelopers.map((developer, index) => (
              <DeveloperCard key={developer.id} developer={developer} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredDevelopers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 mt-12"
          >
            <p className="text-xl">No developers found matching your search.</p>
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