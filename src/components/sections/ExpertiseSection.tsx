'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Globe, Settings } from 'lucide-react';

const expertiseData = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'End-to-end development that just works. From frontend to backend, everything stays consistent, maintainable, and easy to grow.',
    color: 'blue'
  },
  {
    icon: Database,
    title: 'System Architecture',
    description: 'Designing scalable systems that handle growth with ease. Optimized for performance, reliability, and security from day one.',
    color: 'purple'
  },
  {
    icon: Cloud,
    title: 'Tech Consulting',
    description: 'Helping you pick the right tech stack and strategy for your goals. No jargon — just clear, practical guidance that works.',
    color: 'orange'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Making sure your site looks and feels great on every device — desktop, tablet, or mobile. No compromises.',
    color: 'blue'
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Modern, fast, and reliable web apps built with today\'s best tools and clean development practices.',
    color: 'purple'
  },
  {
    icon: Settings,
    title: 'Project Management',
    description: 'Keeping everything on track, on time, and transparent — from first meeting to final delivery. Smooth process, no surprises.',
    color: 'orange'
  }
];

export default function ExpertiseSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">
            <span className="text-gradient">What I'm Good At</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            I turn ideas into reliable, scalable web products — built with modern tech and a focus on real-world results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card card-hover p-8 h-full transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full bg-${item.color}-100 flex items-center justify-center mb-6 group-hover:bg-${item.color}-200 group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className={`w-8 h-8 text-${item.color}-600`} />
                    </div>
                    <h3 className="heading-md mb-4 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-small leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
