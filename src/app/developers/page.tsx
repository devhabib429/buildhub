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
      {/* Background Elements */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D1117,#161B22)]" />
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

        {/* Developers Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredDevelopers.map((developer) => (
              <motion.div
                key={developer.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#161B22] border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <motion.img
                        src={developer.avatar}
                        alt={developer.name}
                        className="w-16 h-16 rounded-full border-2 border-gray-800"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {developer.name}
                        </h3>
                        <p className="text-gray-400">{developer.role}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6">{developer.bio}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {developer.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-800">
                      <div className="text-center">
                        <div className="text-xl font-semibold text-white">
                          {developer.projects}
                        </div>
                        <div className="text-sm text-gray-400">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-semibold text-white">
                          {developer.followers}
                        </div>
                        <div className="text-sm text-gray-400">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-semibold text-white">
                          {developer.contributions}
                        </div>
                        <div className="text-sm text-gray-400">Contributions</div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mt-6">
                      {developer.github && (
                        <motion.a
                          href={`https://github.com/${developer.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
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
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </motion.a>
                      )}
                      {developer.website && (
                        <motion.a
                          href={developer.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
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