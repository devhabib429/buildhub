'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-[#0D1117] border-t border-gray-800/30">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div 
              className="relative w-8 h-8"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                B
              </div>
            </motion.div>
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-6">
            {[
              { name: 'Docs', href: '/docs' },
              { name: 'Projects', href: '/projects' },
              { name: 'Developers', href: '/developers' },
              { name: 'Contribute', href: '/contribute' }
            ].map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
              >
                <Link 
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/nextdrios/buildhub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} BuildHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 