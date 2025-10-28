'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Code, Database, Cloud, Smartphone } from 'lucide-react';
import EasterEggModal from '../animations/EasterEggModal';
import LoadingAnimation from '../animations/LoadingAnimation';

const projectsData = [
  {
    title: 'Financial Management System',
    description: 'A full-featured financial management platform designed for SME operations. Includes customer profiles, repayment tracking, announcements, access control, and analytics — all in one integrated system.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    features: ['Role-based access control (Admin / Staff)', 'Real-time data synchronization', 'Automated repayment calculation', 'Audit logs & activity tracking', 'Dashboard analytics & reporting'],
    icon: Database,
    color: 'blue',
    status: 'In Progress'
  },
  {
    title: 'HeroCraft',
    description: 'An AI co-pilot for content creators — helping them write faster, brainstorm better, and ship confidently.',
    technologies: ['Next.js', 'TypeScript', 'GPT-4', 'Tailwind CSS'],
    features: ['AI-powered content generation', 'Brainstorming templates', 'Real-time editing feedback'],
    icon: Smartphone,
    color: 'purple',
    status: 'Early Beta'
  },
  {
    title: 'MAGE AI (Demo)',
    description: 'An AI assistant demo designed for Malaysian content creators — focused on generating localized video hooks and storytelling ideas.',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS + DaisyUI', 'Framer Motion', 'Supabase'],
    features: ['Modern glassmorphism UI with gradient animations', 'Real-time AI chat and localized content generation', 'Subscription model showcase with ROI calculator', 'Responsive design across all devices'],
    icon: Cloud,
    color: 'orange',
    status: 'Live Demo'
  },
  {
    title: 'Portfolio Website',
    description: 'This site — a reflection of who I am as a developer and creator. Clean layout, mobile-first design, and thoughtful details that work.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    features: ['Mobile-first responsive design', 'Smooth Framer Motion transitions'],
    icon: Code,
    color: 'blue',
    status: 'Completed'
  }
];

export default function ProjectsSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

  const handleProjectClick = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setIsLoading(true);
    
    // 2-3秒加载动画
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 2500);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject('');
  };
  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">
            <span className="text-gradient">My Work</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Here are some projects I've built — combining full-stack development, system design, and real-world problem solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div 
                  className="card card-hover p-8 h-full transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                  onClick={() => handleProjectClick(project.title)}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-${project.color}-100 flex items-center justify-center group-hover:bg-${project.color}-200 group-hover:scale-110 transition-all duration-300 shrink-0`}>
                      <IconComponent className={`w-6 h-6 text-${project.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="heading-md text-gray-900">
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-small text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features</h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-xs text-gray-600 flex items-center">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.title === 'Financial Management System' && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Result</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Improved workflow transparency and reduced manual errors across daily operations.
                        </p>
                      </div>
                    )}

                    {project.title === 'HeroCraft' && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Result</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Accelerates creative output while maintaining personal tone consistency.
                        </p>
                      </div>
                    )}

                    {project.title === 'MAGE AI (Demo)' && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Result</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Demonstrates how GPT-based systems can evolve into user-branded SaaS tools for the local creator market.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-2">
                        🔍 Want to see what happens behind the scenes?
                      </p>
                      <a
                        href="#work-process"
                        className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        See My Work Process →
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-small text-gray-500 mb-6">
            Want to see more project details or discuss implementation ideas?
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-600">
              👉 <a 
                href="#start-project"
                className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200"
              >
                Let's Chat on WhatsApp
              </a> — I'd love to share the stories behind the code.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Easter Egg Modal */}
      <EasterEggModal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectTitle={selectedProject}
      />

      {/* Loading Animation */}
      <LoadingAnimation isVisible={isLoading} />
    </section>
  );
}
