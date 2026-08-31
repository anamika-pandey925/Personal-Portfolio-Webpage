import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import GridBackground from './components/GridBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import GithubStats from './components/GithubStats';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { portfolioData } from './data/portfolioData';

const AppContent: React.FC = () => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
  });
  const [activeSection, setActiveSection] = useState<string>('home');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.title = `${portfolioData.name} | Frontend Developer Portfolio`;
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.2,
      infinite: false,
    });

    setLenisInstance(lenis);

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Section observer to update active section in Navbar
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'github-stats', 'education', 'certifications', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash / path navigation on initial load
  useEffect(() => {
    const path = location.pathname.replace('/', '') || location.hash.replace('#', '');
    if (path) {
      setTimeout(() => {
        scrollToSection(path);
      }, 300);
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      if (lenisInstance) lenisInstance.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      if (lenisInstance) {
        lenisInstance.scrollTo(element, { offset: -70 });
      } else {
        const top = element.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setActiveSection(sectionId);
    }
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <div className="bg-[var(--bg)] text-[var(--fg)] min-h-screen selection:bg-[#A855F7]/30 selection:text-[var(--fg)] overflow-x-hidden relative font-sans transition-colors duration-300">
      {/* Background Decor */}
      <CustomCursor />
      <GridBackground />
      <div className="noise-overlay opacity-[0.02] dark:opacity-[0.04]" aria-hidden="true" />

      {/* Sticky Glass Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onNavClick={handleNavClick} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* Main Single-Page Developer Flow */}
      <main className="relative z-10 w-full">
        <Hero 
          onProjectsClick={() => scrollToSection('projects')} 
          onContactClick={() => scrollToSection('contact')} 
        />
        
        <About />
        
        <Skills />
        
        <Experience />
        
        <Projects />

        <GithubStats />
        
        <Education />
        
        <Certificates />
        
        <Contact />
      </main>

      {/* Floating Action Buttons (Headset Quick Connect & Scroll To Top) */}
      <FloatingActions 
        onScrollTop={() => scrollToSection('home')} 
        onContactClick={() => scrollToSection('contact')} 
      />

      {/* Modern Developer Footer */}
      <Footer onScrollTop={() => scrollToSection('home')} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

