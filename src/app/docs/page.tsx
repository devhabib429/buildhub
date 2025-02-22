'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState('getting-started');

  const tabs = [
    { id: 'getting-started', label: 'Getting Started', icon: '🚀' },
    { id: 'contribution', label: 'How to Contribute', icon: '🤝' },
    { id: 'data-structure', label: 'Data Structure', icon: '📊' },
    { id: 'guidelines', label: 'Guidelines', icon: '📋' },
  ];

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
            Everything you need to know about BuildHub and how to contribute.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full border ${
                activeTab === tab.id
                  ? 'border-purple-500 text-purple-500'
                  : 'border-gray-700 text-gray-400 hover:border-gray-500'
              } transition-all duration-300 flex items-center gap-2`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Keep your existing tab content but wrap each in motion.div */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#161B22]/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/30"
            >
              {/* Your existing content for each tab remains the same */}
              {activeTab === 'getting-started' && (
                <div className="space-y-6 text-gray-300">
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="bg-blue-500/10 text-blue-400 p-2 rounded-lg">1</span>
                      Fork the Repository
                    </h3>
                    <div className="prose prose-invert max-w-none">
                      <ol className="list-decimal list-inside space-y-4 text-gray-300">
                        <li>Go to the project repository on GitHub</li>
                        <li>Click the &quot;Fork&quot; button in the top right corner</li>
                        <li>Clone your forked repository locally:
                          <pre className="mt-2 p-4 bg-black/30 rounded-xl overflow-x-auto">
                            <code>git clone https://github.com/yourusername/project-name.git</code>
                          </pre>
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="bg-purple-500/10 text-purple-400 p-2 rounded-lg">2</span>
                      Set Up Your Environment
                    </h3>
                    <div className="prose prose-invert max-w-none">
                      <ul className="list-disc list-inside space-y-4 text-gray-300">
                        <li>Install Node.js 18 or higher</li>
                        <li>Install project dependencies:
                          <pre className="mt-2 p-4 bg-black/30 rounded-xl overflow-x-auto">
                            <code>npm install</code>
                          </pre>
                        </li>
                        <li>Create a new branch for your changes:
                          <pre className="mt-2 p-4 bg-black/30 rounded-xl overflow-x-auto">
                            <code>git checkout -b feature/your-feature-name</code>
                          </pre>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'contribution' && (
                <div className="space-y-6 text-gray-300">
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6">How to Contribute</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-500/10 text-blue-400 p-2 rounded-lg">1</div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">Fork & Clone</h4>
                          <p className="text-gray-300">Fork the repository and clone it locally</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-500/10 text-purple-400 p-2 rounded-lg">2</div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">Create Branch</h4>
                          <p className="text-gray-300">Create a new branch for your changes</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-pink-500/10 text-pink-400 p-2 rounded-lg">3</div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">Make Changes</h4>
                          <p className="text-gray-300">Add your project or developer profile</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-green-500/10 text-green-400 p-2 rounded-lg">4</div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">Submit PR</h4>
                          <p className="text-gray-300">Create a pull request with your changes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'data-structure' && (
                <div className="space-y-8">
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
                </div>
              )}

              {activeTab === 'guidelines' && (
                <div className="space-y-6 text-gray-300">
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6">Contribution Guidelines</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="bg-white/5 rounded-xl p-6">
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <span className="text-blue-400">📝</span> Content
                        </h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          <li>Use clear, concise descriptions</li>
                          <li>Provide accurate information</li>
                          <li>Keep content professional</li>
                          <li>Use appropriate categories</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-xl p-6">
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <span className="text-purple-400">🔍</span> Quality
                        </h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          <li>Valid JSON format</li>
                          <li>Proper indentation</li>
                          <li>No trailing commas</li>
                          <li>UTF-8 encoding</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 