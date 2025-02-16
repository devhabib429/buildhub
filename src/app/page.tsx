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
                href="/contribute"
                className="group relative overflow-hidden px-8 py-4 rounded-xl bg-white text-slate-900 hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10 font-semibold">Start Building</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/projects"
                className="group relative overflow-hidden px-8 py-4 rounded-xl border border-white/20 text-white hover:border-white/40 transition-colors duration-300"
              >
                <span className="relative z-10 font-semibold">Explore Projects</span>
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Join DevShowcase?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Showcase Projects</h3>
              <p className="text-gray-600">
                Share your best work with the community and get feedback from other developers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect with Others</h3>
              <p className="text-gray-600">
                Build relationships with developers from around the world.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Grow Together</h3>
              <p className="text-gray-600">
                Learn from others and contribute to the open-source community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Showcase Your Work?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join hundreds of developers who are already sharing their projects and making connections.
          </p>
          <Link
            href="/contribute"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
}
