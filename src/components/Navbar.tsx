import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateResumePDF } from '../utils/resumeGenerator';

interface NavbarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavClick, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadingResume, setDownloadingResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'education', name: 'Education' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleDownloadResume = () => {
    setDownloadingResume(true);
    generateResumePDF('modern');
    setTimeout(() => setDownloadingResume(false), 1200);
  };

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 font-sans">
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 pb-2">
        <nav 
          className={`w-full flex items-center justify-between px-5 md:px-7 py-3 rounded-2xl md:rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[var(--surface)]/80 backdrop-blur-xl border border-[var(--border)] shadow-xl shadow-black/20'
              : 'bg-[var(--surface)]/40 backdrop-blur-md border border-[var(--border)]/60'
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="group flex items-center gap-2 text-left focus:outline-none"
            aria-label="Back to Home"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#A855F7] to-[#06B6D4] flex items-center justify-center text-white font-black text-sm shadow-md shadow-[#A855F7]/30 group-hover:scale-105 transition-transform">
              AP
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-[var(--fg)] group-hover:text-[#A855F7] transition-colors leading-none">
                ANAMIKA<span className="text-[#A855F7]">.</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
                Frontend Dev
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] dark:bg-black/20 px-3 py-1.5 rounded-full border border-white/[0.04]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-xs font-semibold tracking-wide transition-all px-3.5 py-1.5 rounded-full focus:outline-none select-none ${
                    isActive ? 'text-white font-bold' : 'text-[var(--text-muted)] hover:text-[var(--fg)]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill-active"
                      className="absolute inset-0 bg-gradient-to-r from-[#A855F7] to-[#7C3AED] rounded-full -z-10 shadow-md shadow-[#A855F7]/25"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Right Action Tools */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[var(--border)] bg-[var(--surface-lighter)]/50 hover:bg-[var(--surface-lighter)] hover:text-[#A855F7] text-[var(--fg)] transition-all select-none focus:outline-none"
              aria-label="Toggle Theme Mode"
            >
              {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
            </button>

            {/* Resume Button */}
            <button
              onClick={handleDownloadResume}
              disabled={downloadingResume}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#A855F7]/25 hover:shadow-lg hover:shadow-[#A855F7]/40 hover:scale-[1.02] active:scale-95 focus:outline-none"
            >
              <FileDown size={13} className={downloadingResume ? 'animate-bounce' : 'group-hover:-translate-y-0.5 transition-transform'} />
              <span>{downloadingResume ? 'Generating...' : 'Resume'}</span>
            </button>
          </div>

          {/* Mobile menu triggers */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-[var(--border)] bg-[var(--surface-lighter)]/60 text-[var(--fg)] focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-[var(--border)] bg-[var(--surface-lighter)]/60 text-[var(--fg)] focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mx-4 my-2 p-5 rounded-3xl bg-[var(--surface)]/95 backdrop-blur-2xl border border-[var(--border)] shadow-2xl flex flex-col gap-2 z-[99]"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-left px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive 
                        ? 'bg-[#A855F7]/15 text-[#A855F7] font-bold border border-[#A855F7]/30' 
                        : 'text-[var(--fg)]/80 hover:bg-[var(--surface-lighter)] hover:text-[var(--fg)]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-40" />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 mt-2 border-t border-[var(--border)] flex flex-col gap-2">
              <button
                onClick={handleDownloadResume}
                disabled={downloadingResume}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#A855F7]/25"
              >
                <FileDown size={14} />
                <span>{downloadingResume ? 'Generating PDF...' : 'Download Resume'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

