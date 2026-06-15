import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavClick }) => {
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
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'certificates', name: 'Certificates' },
    { id: 'experience', name: 'Experience' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-5 px-4 font-sans">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full max-w-5xl rounded-full transition-all duration-500 flex items-center justify-between border backdrop-blur-3xl shadow-2xl ${
          isScrolled
            ? 'bg-[#050816]/70 py-2.5 px-6 border-[#7C3AED]/20 shadow-[#7C3AED]/10 scale-[0.98]'
            : 'bg-[#050816]/30 py-3.5 px-8 border-white/5'
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => onNavClick('home')}
          className="text-xl font-black bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent shrink-0 focus:outline-none tracking-tighter"
        >
          ANAMIKA<span className="text-[#06B6D4]">.</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavClick(link.id)}
                className={`relative text-[10px] uppercase font-black tracking-[0.18em] transition-all px-3.5 py-2 rounded-full focus:outline-none select-none ${
                  isActive ? 'text-[#06B6D4]' : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#7C3AED]/10 rounded-full -z-10 border border-[#7C3AED]/20 shadow-[0_0_15px_rgba(124,58,237,0.15)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Right side status & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Availability Badge */}
          <div className="availability-badge">
            <div className="availability-dot" />
            <span className="text-[7.5px] font-black tracking-widest text-[#10b981]">Open to Work</span>
          </div>

          {/* Hire Me CTA */}
          <button
            onClick={() => onNavClick('contact')}
            className="text-[9px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-105 active:scale-95 transition-all select-none shadow-lg focus:outline-none"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden text-white p-2 rounded-full bg-white/5 border border-white/5 transition-all hover:border-[#7C3AED]/40"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] bg-[#050816]/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-7 md:hidden"
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 text-white border border-white/5"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>

            {/* Links */}
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.id;
              return (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 8 }}
                >
                  <button
                    onClick={() => {
                      onNavClick(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-3xl font-black tracking-tight focus:outline-none ${
                      isActive ? 'text-[#06B6D4]' : 'text-[#94a3b8] hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span className="text-[#7C3AED]">.</span>
                  </button>
                </motion.div>
              );
            })}

            {/* Hire button */}
            <button
              onClick={() => {
                onNavClick('contact');
                setMobileMenuOpen(false);
              }}
              className="mt-6 px-10 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-black text-xs tracking-widest uppercase shadow-lg shadow-[#7C3AED]/20 focus:outline-none"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
