'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Hero Section with Geometric Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-purple-600/20 to-slate-900/80 z-10" />
          
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [transform-origin:0_0] scale-150 -skew-y-6 animate-grid" />

          {/* Floating Elements */}
          {mounted && (
            <div className="absolute inset-0">
              {[...Array(3)].map((_, i) => (
                <div
                  key={`circle-${i}`}
                  className="absolute rounded-full mix-blend-overlay animate-pulse"
                  style={{
                    background: `radial-gradient(circle, ${['#4F46E5', '#7C3AED', '#2563EB'][i]} 0%, transparent 70%)`,
                    width: `${[400, 300, 350][i]}px`,
                    height: `${[400, 300, 350][i]}px`,
                    left: `${[20, 60, 40][i]}%`,
                    top: `${[30, 50, 20][i]}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${4 + i}s`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Animated Code Blocks */}
          {mounted && (
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <div
                  key={`code-${i}`}
                  className="absolute bg-gradient-to-r from-white/5 to-white/10 rounded-lg backdrop-blur-sm p-4 animate-float-code"
                  style={{
                    width: `${120 + Math.random() * 100}px`,
                    height: `${80 + Math.random() * 60}px`,
                    left: `${Math.random() * 80}%`,
                    top: `${Math.random() * 80}%`,
                    animationDelay: `${i * 0.7}s`,
                    animationDuration: `${15 + Math.random() * 10}s`,
                    transform: `rotate(${Math.random() * 20 - 10}deg)`,
                  }}
                >
                  <div className="flex gap-1.5 mb-2">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="w-2 h-2 rounded-full bg-white/20" />
                    ))}
                  </div>
                  <div className="space-y-1">
                    {[...Array(3)].map((_, j) => (
                      <div 
                        key={j} 
                        className="h-1.5 bg-white/10 rounded"
                        style={{ width: `${30 + Math.random() * 70}%` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8 inline-block">
              <div className="relative">
                <div className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 animate-pulse" />
                <span className="relative bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text text-lg font-medium px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                  Build. Share. Grow.
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              <span className="block animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Where
              </span>
              <span className="block animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Developers
                </span>
              </span>
              <span className="block animate-slide-up" style={{ animationDelay: '0.6s' }}>
                Unite
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-gray-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Join our thriving community of developers. Share your projects,
              <br className="hidden md:block" /> get inspired, and grow together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
              <Link
                href="/docs"
                className="group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              >
                <span className="relative z-10 font-semibold flex items-center gap-2">
                  Documentation
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="/projects"
                className="group relative overflow-hidden px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white border border-white/10 hover:border-white/25 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 transition-all duration-300"
              >
                <span className="relative z-10 font-semibold flex items-center gap-2">
                  Explore Projects
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 rounded-full bg-white/50 animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-blue-600/5 to-purple-600/5" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-6">
              Why Join BuildHub?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Join a thriving community of developers who are passionate about building, sharing, and growing together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Showcase Projects",
                description: "Share your best work with the community and get valuable feedback from fellow developers.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                ),
                gradient: "from-blue-400 to-blue-600",
              },
              {
                title: "Connect with Others",
                description: "Build meaningful relationships with developers from around the world who share your passion.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                gradient: "from-purple-400 to-purple-600",
              },
              {
                title: "Grow Together",
                description: "Learn from others, contribute to open-source projects, and level up your development skills.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                gradient: "from-pink-400 to-red-600",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-white/10"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{
                    background: `linear-gradient(90deg, ${feature.gradient.split(' ')[1]} 0%, ${feature.gradient.split(' ')[3]} 100%)`,
                  }}
                />

                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-4 mb-6`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-white/60">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-blue-600/5 to-purple-600/5" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          {/* Animated Circles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={`cta-circle-${i}`}
                className="absolute rounded-full mix-blend-overlay animate-float"
                style={{
                  background: `radial-gradient(circle, ${['#4F46E5', '#7C3AED', '#2563EB'][i]}20 0%, transparent 70%)`,
                  width: `${[500, 400, 450][i]}px`,
                  height: `${[500, 400, 450][i]}px`,
                  left: `${[-10, 60, 90][i]}%`,
                  top: `${[10, 50, -10][i]}%`,
                  animationDelay: `${i * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-8 animate-bounce-slow">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-white/80 text-sm">Join 500+ developers</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-fade-in">
              Ready to Showcase Your Work?
            </h2>
            
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Join hundreds of developers who are already sharing their projects and making meaningful connections in our thriving community.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/docs"
                className="group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              >
                <span className="relative z-10 font-semibold flex items-center justify-center gap-2">
                  Get Started Now
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <a
                href="https://github.com/yourusername/buildhub"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white border border-white/10 hover:border-white/25 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 transition-all duration-300"
              >
                <span className="relative z-10 font-semibold flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.509 11.509 0 016.008 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.911 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Star on GitHub
                  <span className="px-2 py-1 text-xs bg-white/20 rounded-full">1.2k</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
