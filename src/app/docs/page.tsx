'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState('getting-started');

  const tabs = [
    { id: 'getting-started', label: 'Getting Started', icon: '🚀' },
    { id: 'contribution', label: 'How to Contribute', icon: '🤝' },
    { id: 'data-structure', label: 'Data Structure', icon: '📊' },
    { id: 'guidelines', label: 'Guidelines', icon: '📋' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Documentation
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Learn how to contribute to our developer community and showcase your projects
            </p>
          </motion.div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {/* Getting Started */}
              {activeTab === 'getting-started' && (
                <motion.div
                  key="getting-started"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-8">
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="bg-blue-500/10 text-blue-400 p-2 rounded-lg">1</span>
                        Fork the Repository
                      </h3>
                      <div className="prose prose-invert max-w-none">
                        <ol className="list-decimal list-inside space-y-4 text-gray-300">
                          <li>Go to the project repository on GitHub</li>
                          <li>Click the "Fork" button in the top right corner</li>
                          <li>Clone your forked repository locally:
                            <pre className="mt-2 p-4 bg-black/30 rounded-xl overflow-x-auto">
                              <code>git clone https://github.com/your-username/project-name.git</code>
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
                </motion.div>
              )}

              {/* Data Structure */}
              {activeTab === 'data-structure' && (
                <motion.div
                  key="data-structure"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
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
                </motion.div>
              )}

              {/* Guidelines */}
              {activeTab === 'guidelines' && (
                <motion.div
                  key="guidelines"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-8">
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
                </motion.div>
              )}

              {/* Contribution Process */}
              {activeTab === 'contribution' && (
                <motion.div
                  key="contribution"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-8">
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
} 