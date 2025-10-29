'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'What I Do', href: '#expertise' },
  { name: 'My Work', href: '#projects' },
  { name: 'About Me', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: "Let's Chat", href: '#start-project' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // 检测当前活跃的section
      const sections = navigationItems.map(item => ({
        id: item.href.substring(1), // 移除 #
        href: item.href
      }));
      
      const scrollPosition = window.scrollY + 150; // 偏移量，提前触发
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i].href);
        if (section) {
          const offsetTop = section.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sections[i].href);
            break;
          }
        }
      }
      
      // 如果滚动到顶部，设置home为活跃
      if (window.scrollY < 100) {
        setActiveSection('#home');
      }
    };

    // 初始检查
    handleScroll();

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <button
                onClick={() => scrollToSection('#home')}
                className="text-xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
              >
                Tony Mumu
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:block"
            >
              <div className="flex items-center space-x-8">
                {navigationItems.map((item, index) => {
                  const isActive = activeSection === item.href || (item.href === '#home' && activeSection === '');
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`font-medium transition-colors duration-200 relative group ${
                        isActive 
                          ? 'text-blue-600' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                      <span 
                        className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden md:block"
            >
              <a
                href="#start-project"
                className="btn-primary text-sm"
              >
                Let's Chat
              </a>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:hidden"
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
      >
        <div className="container py-4">
          <div className="space-y-2">
            {navigationItems.map((item, index) => {
              const isActive = activeSection === item.href || (item.href === '#home' && activeSection === '');
              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50 font-medium' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </motion.button>
              );
            })}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: navigationItems.length * 0.1 }}
              className="pt-4 border-t border-gray-200"
            >
              <a
                href="#start-project"
                className="w-full btn-primary text-center block"
              >
                Let's Chat
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
        />
      )}
    </>
  );
}
