'use client';

import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  ArrowUp
} from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Full-Stack Development', href: '#services' },
    { name: 'System Architecture', href: '#services' },
    { name: 'Tech Consulting', href: '#services' },
    { name: 'Modern Cloud Hosting', href: '#services' }
  ],
  projects: [
    { name: 'Financial Management System', href: '#projects' },
    { name: 'HeroCraft', href: '#projects' },
    { name: 'MAGE AI (Demo)', href: '#projects' },
    { name: 'Portfolio Website', href: '#projects' }
  ],
  contact: [
    { name: 'WhatsApp', href: 'https://wa.link/p4qi6k' },
    { name: 'Contact Form', href: '#contact' }
  ]
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tony Mumu
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full-stack developer passionate about building clean, scalable, and human-centered web solutions. 
              From concept to launch, I make sure every project works beautifully and delivers real results.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.link/p4qi6k"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact via WhatsApp"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:tony@example.com"
                title="Send email"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+8613800000000"
                title="Call phone"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Projects</h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-sm leading-relaxed">
                  <div>Based in Malaysia</div>
                  <div className="text-gray-500">Available for global remote projects</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400"
            >
              <span className="text-sm">© 2025 Tony Mumu. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-sm">for better web experiences.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm">Back to Top</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
