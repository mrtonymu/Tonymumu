import dynamic from 'next/dynamic';
import ScrollProgress from '@/components/layout/ScrollProgress';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import BackToTop from '@/components/ui/BackToTop';

// Lazy load heavy components
const ExpertiseSection = dynamic(() => import('@/components/sections/ExpertiseSection'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
});

const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
});

const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
});

const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
});

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
});

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      
      <div id="home">
        <HeroSection />
      </div>
      
      <div id="expertise">
        <ExpertiseSection />
      </div>
      
      <div id="projects">
        <ProjectsSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="services">
        <ServicesSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
      
      <Footer />
      <BackToTop />
    </main>
  );
}