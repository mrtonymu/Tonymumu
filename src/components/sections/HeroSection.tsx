'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-indigo-400/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-400/10 rounded-full blur-3xl"></div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-xl mb-8">
              <span className="text-gradient">Tony Mumu</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Based in Kuala Lumpur, Malaysia.
            </h2>
            <p className="text-body max-w-2xl mx-auto mb-8">
              I craft clean, reliable web solutions for creators and business owners who want results, not complexity.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              From system design to launch, every project is built with care and built to last.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
                  <a
                    href="#start-project"
                    className="btn-primary inline-flex items-center gap-2 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Let's Work Together
                  </a>
                  <a
                    href="#projects"
                    className="btn-secondary inline-flex items-center gap-2 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  >
                    View My Work
                    <ArrowRight className="w-5 h-5" />
                  </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-small text-gray-500 px-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Full-Stack Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Backend Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>SaaS Setup</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
