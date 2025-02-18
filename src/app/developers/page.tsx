'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Developer } from '@/types';

// Mock data - replace with your actual data fetching
const developers: Developer[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Full Stack Developer",
    avatar: "https://github.com/github.png",
    location: "San Francisco, CA",
    bio: "Building awesome things with Next.js and TypeScript",
    skills: ["React", "TypeScript", "Node.js"],
    github: "johndoe",
    twitter: "johndoe",
    website: "https://johndoe.dev",
    projects: 12,
    followers: 245,
    contributions: 1234,
    featured: true
  },
  // Add more developers...
];

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

export default function DevelopersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('All');

  const allSkills = ['All', ...new Set(developers.flatMap(dev => dev.skills))];

  const filteredDevelopers = developers.filter(dev => {
    const matchesSearch = dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dev.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = selectedSkill === 'All' || dev.skills.includes(selectedSkill);
    return matchesSearch && matchesSkill;
  });

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Enhanced Background with animated gradient */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117] animate-gradientMove" 
             style={{ backgroundSize: '200% 200%' }} />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Our Developer Community
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with talented developers from around the world.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <input
              type="text"
              placeholder="Search developers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-xl bg-[#161B22] border border-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {allSkills.map((skill) => (
              <motion.button
                key={skill}
                onClick={() => setSelectedSkill(skill)}
                className={`px-6 py-2 rounded-full border ${
                  selectedSkill === skill
                    ? 'border-purple-500 text-purple-500'
                    : 'border-gray-700 text-gray-400 hover:border-gray-500'
                } transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Developers Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredDevelopers.map((developer, index) => (
              <motion.div
                key={developer.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group gradient-border"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#161B22] p-6">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Developer Profile */}
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center space-x-4 mb-6"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.img
                        src={developer.avatar}
                        alt={developer.name}
                        className="w-16 h-16 rounded-full border-2 border-gray-800"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      />
                      <div>
                        <motion.h3 
                          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
                          whileHover={{ scale: 1.05 }}
                        >
                          {developer.name}
                        </motion.h3>
                        <p className="text-gray-400">{developer.role}</p>
                      </div>
                    </motion.div>

                    <p className="text-gray-400 mb-6">{developer.bio}</p>

                    {/* Enhanced Skills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {developer.skills.map((skill) => (
                        <AnimatedSkill key={skill} skill={skill} />
                      ))}
                    </div>

                    {/* Enhanced Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-800">
                      <AnimatedStat value={developer.projects} label="Projects" />
                      <AnimatedStat value={developer.followers} label="Followers" />
                      <AnimatedStat value={developer.contributions} label="Contributions" />
                    </div>

                    {/* Enhanced Social Links */}
                    <div className="flex justify-center space-x-4 mt-6">
                      {developer.github && (
                        <motion.a
                          href={`https://github.com/${developer.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-icon-link"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {/* GitHub icon */}
                        </motion.a>
                      )}
                      {developer.twitter && (
                        <motion.a
                          href={`https://twitter.com/${developer.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-icon-link"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {/* Twitter icon */}
                        </motion.a>
                      )}
                      {developer.website && (
                        <motion.a
                          href={developer.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-icon-link"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {/* Website icon */}
                        </motion.a>
                      )}
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