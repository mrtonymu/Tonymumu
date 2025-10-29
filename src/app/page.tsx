import dynamic from 'next/dynamic';
import ScrollProgress from '@/components/layout/ScrollProgress';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import BackToTop from '@/components/ui/BackToTop';
import { ProjectCardSkeleton, ServiceCardSkeleton, AboutCardSkeleton } from '@/components/ui/Skeletons';

// Lazy load heavy components with custom skeletons
const ExpertiseSection = dynamic(() => import('@/components/sections/ExpertiseSection'), {
  loading: () => (
    <div className="section-padding">
      <div className="container">
        <div className="h-12 bg-gray-200 rounded w-1/3 mx-auto mb-8 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card p-6 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-2/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
});

const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), {
  loading: () => (
    <div className="section-padding">
      <div className="container">
        <div className="h-12 bg-gray-200 rounded w-1/3 mx-auto mb-8 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  )
});

const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  loading: () => (
    <div className="section-padding">
      <div className="container max-w-4xl">
        <div className="card p-8 animate-pulse mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
          <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <AboutCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  )
});

const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
  loading: () => (
    <div className="section-padding">
      <div className="container">
        <div className="h-12 bg-gray-200 rounded w-1/3 mx-auto mb-8 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ServiceCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  )
});

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => (
    <div className="section-padding">
      <div className="container max-w-4xl">
        <div className="card p-8 animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  )
});

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  loading: () => (
    <footer className="bg-gray-900 text-white py-12 animate-pulse">
      <div className="container">
        <div className="h-6 bg-gray-700 rounded w-1/4 mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      </div>
    </footer>
  )
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