import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import GridBackground from './components/GridBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'experience', 'contact'];
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once to set initial active tab
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-[#050816] text-[#E2E8F0] min-h-screen selection:bg-[#7C3AED]/30 selection:text-white overflow-x-hidden relative font-sans">
      {/* Premium Visual Layer */}
      <CustomCursor />
      <GridBackground />
      <div className="noise-overlay" aria-hidden="true" />

      {/* Floating Pill Navbar */}
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Single Page Sections */}
      <main className="relative z-10 w-full">
        <Hero onProjectsClick={() => handleNavClick('projects')} />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Experience />
        <GithubStats />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onScrollTop={() => handleNavClick('home')} />
    </div>
  );
};

export default App;
