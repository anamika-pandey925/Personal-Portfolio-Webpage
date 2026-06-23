import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavClick, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 font-sans border-b border-transparent bg-transparent">
      <div 
        className={`w-full mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'py-4 backdrop-blur-md bg-[var(--bg)]/85 shadow-sm border-b border-[var(--border)]'
            : 'py-6'
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-black text-[#A855F7] tracking-tight focus:outline-none"
        >
          ANAMIKA<span className="text-[var(--fg)]">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  to={link.id === 'home' ? '/' : `/${link.id}`}
                  className={`relative text-xs uppercase tracking-wider font-bold transition-all px-4 py-2 rounded-full focus:outline-none select-none ${
                    isActive ? 'text-[#A855F7]' : 'text-[var(--fg)]/70 hover:text-[var(--fg)]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill-active"
                      className="absolute inset-0 bg-[#A855F7]/10 rounded-full -z-10 border border-[#A855F7]/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-lighter)] hover:text-[#A855F7] text-[var(--fg)] transition-all select-none focus:outline-none"
              aria-label="Toggle Theme Mode"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-lighter)] text-[var(--fg)] transition-all select-none focus:outline-none"
            aria-label="Toggle Theme Mode"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Mobile menu trigger */}
          <button
            className="text-[var(--fg)] p-2 rounded-full bg-[var(--surface)] border border-[var(--border)] transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 top-[70px] z-[99] bg-[var(--bg)] border-b border-[var(--border)] py-6 shadow-xl flex flex-col items-center gap-4 md:hidden"
          >
            {/* Links */}
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  to={link.id === 'home' ? '/' : `/${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-bold tracking-tight focus:outline-none py-2 ${
                    isActive ? 'text-[#A855F7]' : 'text-[var(--fg)]/70 hover:text-[var(--fg)]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="flex flex-col gap-3 w-full px-8 mt-4 select-none">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-[#A855F7] text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#A855F7]/20 focus:outline-none hover:bg-[#A855F7]/95 transition-all"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
