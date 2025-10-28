import { Project, Service, ProcessStep, AboutData, NavigationItem, FooterLink } from '../types';

// 项目数据
export const projectsData: Project[] = [
  {
    title: 'Financial Management System',
    status: 'In Progress',
    description: 'A full-featured financial management platform designed for SME operations. Includes customer profiles, repayment tracking, announcements, access control, and analytics — all in one integrated system.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Role-based access control (Admin / Staff)',
      'Real-time data synchronization',
      'Automated repayment calculation',
      'Audit logs & activity tracking',
      'Dashboard analytics & reporting'
    ],
    result: 'Improved workflow transparency and reduced manual errors across daily operations.'
  },
  {
    title: 'HeroCraft',
    status: 'Early Beta',
    description: 'An AI co-pilot for content creators — helping them write faster, brainstorm better, and ship confidently.',
    techStack: ['Next.js', 'TypeScript', 'GPT-4', 'Tailwind CSS'],
    features: [
      'AI-powered content generation',
      'Brainstorming templates',
      'Real-time editing feedback'
    ],
    result: 'Accelerates creative output while maintaining personal tone consistency.'
  },
  {
    title: 'MAGE AI (Demo)',
    status: 'Live Demo',
    description: 'An AI assistant demo designed for Malaysian content creators — focused on generating localized video hooks and storytelling ideas.',
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS + DaisyUI', 'Framer Motion', 'Supabase'],
    features: [
      'Modern glassmorphism UI with gradient animations',
      'Real-time AI chat and localized content generation',
      'Subscription model showcase with ROI calculator',
      'Responsive design across all devices'
    ],
    result: 'Demonstrates how GPT-based systems can evolve into user-branded SaaS tools for the local creator market.'
  },
  {
    title: 'Portfolio Website',
    status: 'Completed',
    description: 'This site — a reflection of who I am as a developer and creator. Clean layout, mobile-first design, and thoughtful details that work.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'Mobile-first responsive design',
      'Smooth Framer Motion transitions'
    ]
  }
];

// 服务数据
export const servicesData: Service[] = [
  {
    title: 'Full-Stack Development',
    description: 'From frontend to backend, I build complete, maintainable systems that stay consistent across every layer. Each project is crafted for clarity, speed, and future growth.',
    features: [
      'Frontend & Backend Development',
      'API Design & Integration',
      'Database Design & Optimization',
      'System Testing & Performance Review'
    ],
    price: 'Custom-built for your goals.'
  },
  {
    title: 'System Architecture',
    description: 'Designing scalable systems that grow with your business — not against it. I focus on clean architecture that\'s easy to extend, secure, and built to last.',
    features: [
      'Microservices & Modular Architecture',
      'Database Optimization',
      'Performance Tuning',
      'Security Design & Best Practices'
    ],
    price: 'Launch your project with confidence.'
  },
  {
    title: 'Modern Cloud Hosting',
    description: 'Deploying full-stack web apps with modern hosting platforms like Vercel and Supabase — simple, fast, and built for scalability.',
    features: [
      'Frontend & API Hosting (Vercel)',
      'Supabase Backend Setup & Management',
      'Database Configuration & Auth Integration',
      'Version Control & Continuous Deployment'
    ],
    price: 'Launch your project with confidence.'
  },
  {
    title: 'Responsive Websites',
    description: 'Designing and developing websites that look great and work smoothly on every device. Each site is optimized for performance, usability, and long-term growth.',
    features: [
      'Mobile-Friendly Design',
      'Cross-Browser Compatibility',
      'Performance Optimization',
      'SEO-Ready Setup'
    ],
    price: 'Launch a site that feels effortless.'
  },
  {
    title: 'Tech Consulting',
    description: 'Helping clients make smarter tech decisions — from choosing the right stack to improving existing workflows. I keep things simple, practical, and built around real business needs.',
    features: [
      'Tech Stack Recommendations',
      'Code & Architecture Review',
      'Troubleshooting & Optimization',
      'Technical Guidance for Teams'
    ],
    price: 'Practical advice, real impact.'
  },
  {
    title: 'Data Analytics Setup',
    description: 'Helping creators and small businesses make sense of their data through simple, visual dashboards. You don\'t need complex tools — just clear insights that drive better decisions.',
    features: [
      'Data Collection & Processing',
      'Dashboard Visualization (e.g., Supabase, Chart.js)',
      'Report Generation',
      'Performance Tracking'
    ],
    price: 'Turn numbers into clarity.'
  }
];

// 工作流程步骤
export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Requirements Analysis',
    description: 'I start by understanding your goals — not just the technical specs, but why the project matters. This step helps shape a clear, realistic plan before a single line of code is written.'
  },
  {
    step: '02',
    title: 'Solution Design',
    description: 'Together, we map out how the system should work — balancing structure, scalability, and simplicity. I turn ideas into a practical blueprint that fits your needs and timeline.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'This is where design becomes real. I build clean, maintainable code with attention to both function and detail, ensuring the project runs smoothly from the inside out.'
  },
  {
    step: '04',
    title: 'Testing & Deployment',
    description: 'Before launch, everything is tested and refined for stability, speed, and usability. Once ready, your project is deployed and optimized for real-world performance.'
  },
  {
    step: '05',
    title: 'Maintenance & Support',
    description: 'After launch, I stay around to make sure everything keeps running as it should. From small updates to ongoing improvements — I\'m here to help you grow.'
  }
];

// About 数据
export const aboutData: AboutData[] = [
  {
    icon: 'User',
    title: 'Background',
    description: 'From customer support to full-stack development — my path wasn\'t traditional, but it taught me to build with empathy, not ego. Now I combine hands-on business insight with technical depth to turn real-world problems into practical web solutions.',
    details: ['Frontline Support Experience (Singtel, Microsoft)', 'Real-world Business Understanding', 'Full-Stack Web Development']
  },
  {
    icon: 'Award',
    title: 'Core Strengths',
    description: 'Bridging people and systems — I design architectures that are intuitive for users and efficient for teams. Each line of code serves a purpose: clarity, speed, and maintainability.',
    details: ['System Architecture & Database Design', 'Performance Optimization', 'Human-Centered Design Thinking']
  },
  {
    icon: 'Clock',
    title: 'Work Philosophy',
    description: 'Great work is a balance of structure and soul. I aim to ship clean, maintainable products — delivered on time, but never rushed.',
    details: ['Clarity Over Complexity', 'Quality First', 'Continuous Iteration']
  },
  {
    icon: 'Target',
    title: 'Service Goals',
    description: 'Helping solo creators and small businesses go digital without losing their authenticity. You don\'t need a big agency — just the right partner who cares about your growth.',
    details: ['Custom Web Development', 'Digital Transformation', 'Long-Term Collaboration']
  }
];

// 导航数据
export const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'What I Do', href: '#expertise' },
  { name: 'My Work', href: '#projects' },
  { name: 'About Me', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: "Let's Chat", href: '#start-project' }
];

// Footer 链接数据
export const footerLinks = {
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
