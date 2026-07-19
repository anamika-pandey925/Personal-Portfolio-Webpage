import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import GridBackground from './components/GridBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GithubStats from './components/GithubStats';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

// Lazy-loaded components for routes
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Certificates = lazy(() => import('./components/Certificates'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

// Helper component to scroll to top on route change
const ScrollToTop: React.FC<{ lenis: Lenis | null }> = ({ lenis }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
};

const AppContent: React.FC = () => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Determine active section based on the URL pathname
  const getActiveSection = (path: string) => {
    if (path === '/') return 'home';
    return path.replace('/', '');
  };
  const activeSection = getActiveSection(location.pathname);

  useEffect(() => {
    // Sync theme with document class
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.title = `${portfolioData.name} | Portfolio`;
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
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

  const handleNavClick = (sectionId: string) => {
    const path = sectionId === 'home' ? '/' : `/${sectionId}`;
    navigate(path);
  };

  return (
    <div className="bg-[var(--bg)] text-[var(--fg)] min-h-screen selection:bg-[#A855F7]/30 selection:text-[var(--fg)] overflow-x-hidden relative font-sans transition-colors duration-300">
      {/* Premium Visual Layer */}
      <CustomCursor />
      <GridBackground />
      <div className="noise-overlay opacity-[0.02] dark:opacity-[0.04]" aria-hidden="true" />
      <ScrollToTop lenis={lenisInstance} />

      {/* Sticky Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onNavClick={handleNavClick} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* Multi-Page Route Selector */}
      <main className="relative z-10 w-full min-h-[75vh]">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#A855F7]"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={
              <>
                <Hero 
                  onProjectsClick={() => navigate('/projects')} 
                  onContactClick={() => navigate('/contact')} 
                />
                <GithubStats />
              </>
            } />
            
            <Route path="/about" element={
              <>
                <About />
                <Education />
                <Experience />
                <Certificates />
              </>
            } />

            <Route path="/services" element={<Services />} />
            
            <Route path="/projects" element={<Projects />} />
            
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer onScrollTop={() => {
        if (location.pathname !== '/') {
          navigate('/');
        } else {
          if (lenisInstance) {
            lenisInstance.scrollTo(0);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }} />
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
