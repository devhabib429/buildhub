'use client';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const features = [
    {
      title: 'Open Source',
      description: 'Contribute to the community and build together.',
      icon: '⚡',
      gradient: 'from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]'
    },
    {
      title: 'Showcase',
      description: 'Share your projects with passionate developers.',
      icon: '🚀',
      gradient: 'from-[#FF9A9E] via-[#FAD0C4] to-[#FBC2EB]'
    },
    {
      title: 'Collaborate',
      description: 'Connect with developers and build amazing things.',
      icon: '🤝',
      gradient: 'from-[#4158D0] via-[#C850C0] to-[#FFCC70]'
    }
  ];

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#0D1117] overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D1117,#161B22)]" />
        
        {/* Animated grid */}
        <motion.div 
          className="absolute inset-0"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1117]/50 to-[#0D1117]" />
        </motion.div>
        
        {/* Enhanced particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.5, 0.1],
                scale: [1, Math.random() + 0.5, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-to-r ${
                i === 0 ? 'from-blue-500 to-purple-500' :
                i === 1 ? 'from-purple-500 to-pink-500' :
                'from-pink-500 to-orange-500'
              }`}
              animate={{
                x: [
                  Math.random() * 1000 - 500,
                  Math.random() * 1000 - 500,
                  Math.random() * 1000 - 500
                ],
                y: [
                  Math.random() * 1000 - 500,
                  Math.random() * 1000 - 500,
                  Math.random() * 1000 - 500
                ],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* GitHub-style Contribution Graph Animation */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 opacity-20">
              <div className="grid grid-cols-12 gap-1">
                {[...Array(84)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-sm bg-green-500"
                    initial={{ opacity: 0.1 }}
                    animate={{ opacity: [0.1, 0.5, 0.1] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.02,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]">
                WHERE DEVELOPERS
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] mt-2">
                UNITE
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Join the open-source revolution. Build, share, and grow together.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/docs" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF3CAC] to-[#784BA0] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative px-8 py-4 bg-[#161B22] rounded-full leading-none flex items-center divide-x divide-gray-600">
                  <span className="pr-6 text-gray-100">Get Started</span>
                  <span className="pl-6 text-[#FF3CAC] group-hover:text-white transition duration-200">→</span>
                </div>
              </Link>

              <Link href="https://github.com/yourusername/yourrepo" className="group relative" target="_blank">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4158D0] to-[#C850C0] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative px-8 py-4 bg-[#161B22] rounded-full leading-none flex items-center space-x-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-gray-100">Star on GitHub</span>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Animated background glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700`} />
                
                {/* Card */}
                <div className="relative overflow-hidden p-8 rounded-xl bg-[#161B22] border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm">
                  {/* Animated corner accent */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rotate-12 transform group-hover:scale-150 transition-transform duration-500" />
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative text-4xl mb-6 w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-black to-gray-800"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="relative z-10">{feature.icon}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-4 relative">
                    {feature.title}
                    <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </h3>
                  <p className="text-gray-400 leading-relaxed relative z-10">
                    {feature.description}
                  </p>

                  {/* Interactive elements */}
                  <motion.div 
                    className="mt-6 flex items-center text-sm text-gray-400 group/link"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">Learn more</span>
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
