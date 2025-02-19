'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState('getting-started');

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
            Documentation
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn how to integrate and contribute to our developer community platform.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['getting-started', 'data-structure', 'api-reference', 'guidelines'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full border ${
                activeTab === tab
                  ? 'border-purple-500 text-purple-500'
                  : 'border-gray-700 text-gray-400 hover:border-gray-500'
              } transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </motion.button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'getting-started' && (
              <motion.div
                key="getting-started"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Start</h3>
                  <div className="space-y-6 text-gray-300">
                    <p>Follow these steps to get started with our platform:</p>
                    <div className="space-y-4">
                      <div className="bg-black/30 p-4 rounded-xl">
                        <p className="text-sm font-mono">npm install @buildhub/client</p>
                      </div>
                      <p>Initialize the client in your application:</p>
                      <div className="bg-black/30 p-4 rounded-xl">
                        <pre className="text-sm font-mono text-gray-300">
{`import { BuildHub } from '@buildhub/client';

const client = new BuildHub({
  apiKey: 'your-api-key'
});`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'data-structure' && (
              <motion.div
                key="data-structure"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Developer Schema</h3>
                  <pre className="p-4 bg-black/30 rounded-xl overflow-x-auto text-sm text-gray-300">
                    <code>{`{
  "id": number,
  "name": string,
  "role": string,
  "avatar": string,
  "location": string,
  "bio": string,
  "skills": string[],
  "github": string,
  "twitter": string,
  "website": string,
  "projects": number,
  "followers": number,
  "contributions": number,
  "featured": boolean
}`}</code>
                  </pre>
                </div>

                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Project Schema</h3>
                  <pre className="p-4 bg-black/30 rounded-xl overflow-x-auto text-sm text-gray-300">
                    <code>{`{
  "id": number,
  "title": string,
  "description": string,
  "longDescription": string,
  "image": string,
  "tech": string[],
  "stars": number,
  "forks": number,
  "author": {
    "name": string,
    "avatar": string,
    "github": string
  },
  "demoUrl": string,
  "githubUrl": string,
  "featured": boolean,
  "categories": string[],
  "status": string
}`}</code>
                  </pre>
                </div>
              </motion.div>
            )}

            {/* Add other tab content sections similarly */}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 