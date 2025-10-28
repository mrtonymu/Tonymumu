'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Settings, 
  BarChart3,
  Shield,
  Zap,
  Users,
  Globe
} from 'lucide-react';

const servicesData = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'From frontend to backend, I build complete, maintainable systems that stay consistent across every layer.',
    features: [
      'Frontend & Backend Development',
      'API Design & Integration',
      'Database Design & Optimization',
      'System Testing & Performance Review'
    ],
    color: 'blue',
    price: 'Custom-built for your goals. [Get a Quote]'
  },
  {
    icon: Database,
    title: 'System Architecture',
    description: 'Designing scalable systems that grow with your business — not against it.',
    features: [
      'Microservices & Modular Architecture',
      'Database Optimization',
      'Performance Tuning',
      'Security Design & Best Practices'
    ],
    color: 'purple',
    price: 'Quote on Request'
  },
  {
    icon: Cloud,
    title: 'Modern Cloud Hosting',
    description: 'Deploying full-stack web apps with modern hosting platforms like Vercel and Supabase — simple, fast, and built for scalability.',
    features: [
      'Frontend & API Hosting (Vercel)',
      'Supabase Backend Setup & Management',
      'Database Configuration & Auth Integration',
      'Version Control & Continuous Deployment'
    ],
    color: 'orange',
    price: 'Launch your project with confidence. [Get Quote]'
  },
  {
    icon: Smartphone,
    title: 'Responsive Websites',
    description: 'Designing and developing websites that look great and work smoothly on every device.',
    features: [
      'Mobile-Friendly Design',
      'Cross-Browser Compatibility',
      'Performance Optimization',
      'SEO-Ready Setup'
    ],
    color: 'blue',
    price: 'Launch a site that feels effortless. [Get Quote]'
  },
  {
    icon: Settings,
    title: 'Tech Consulting',
    description: 'Helping clients make smarter tech decisions — from choosing the right stack to improving existing workflows.',
    features: [
      'Tech Stack Recommendations',
      'Code & Architecture Review',
      'Troubleshooting & Optimization',
      'Technical Guidance for Teams'
    ],
    color: 'purple',
    price: 'Practical advice, real impact. [Get Quote]'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics Setup',
    description: 'Helping creators and small businesses make sense of their data through simple, visual dashboards.',
    features: [
      'Data Collection & Processing',
      'Dashboard Visualization (e.g., Supabase, Chart.js)',
      'Report Generation',
      'Performance Tracking'
    ],
    color: 'orange',
    price: 'Turn numbers into clarity. [Get Quote]'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Requirements Analysis',
    description: 'I start by understanding your goals — not just the technical specs, but why the project matters. This step helps shape a clear, realistic plan before a single line of code is written.',
    icon: Users
  },
  {
    step: '02',
    title: 'Solution Design',
    description: 'Together, we map out how the system should work — balancing structure, scalability, and simplicity. I turn ideas into a practical blueprint that fits your needs and timeline.',
    icon: Globe
  },
  {
    step: '03',
    title: 'Development',
    description: 'This is where design becomes real. I build clean, maintainable code with attention to both function and detail, ensuring the project runs smoothly from the inside out.',
    icon: Code
  },
  {
    step: '04',
    title: 'Testing & Deployment',
    description: 'Before launch, everything is tested and refined for stability, speed, and usability. Once ready, your project is deployed and optimized for real-world performance.',
    icon: Shield
  },
  {
    step: '05',
    title: 'Maintenance & Support',
    description: 'After launch, I stay around to make sure everything keeps running as it should. From small updates to ongoing improvements — I\'m here to help you grow.',
    icon: Zap
  }
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">
            <span className="text-gradient">Services</span>
          </h2>
                 <p className="text-body max-w-3xl mx-auto">
                   I provide end-to-end web development services — from idea to deployment — helping creators and businesses build products that are fast, scalable, and truly theirs.
                 </p>
        </motion.div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card card-hover p-6 h-full transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full bg-${service.color}-100 flex items-center justify-center mb-6 group-hover:bg-${service.color}-200 group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className={`w-8 h-8 text-${service.color}-600`} />
                    </div>
                    <h3 className="heading-md mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-small text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="w-full mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Service Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-xs text-gray-600 flex items-center">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto w-full">
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-3">
                          {service.price.includes('[Get a Quote]') 
                            ? service.price.replace(' [Get a Quote]', '')
                            : service.price.includes('[Get Quote]')
                            ? service.price.replace(' [Get Quote]', '')
                            : service.price
                          }
                        </p>
                      </div>
                              <a
                                href="#start-project"
                                className="btn-primary w-full text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                              >
                                Get a Quote
                              </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Work Process */}
        <motion.div
          id="work-process"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="heading-md mb-8 text-gray-900">Work Process</h3>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.step} className="relative">
                    <div className="card p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {step.step}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Connection Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
