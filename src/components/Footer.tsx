import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onScrollTop: () => void;
}

const Footer: React.FC<FooterProps> = ({ onScrollTop }) => {
  const { name, email, linkedin, github } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-[var(--bg)] py-12 font-sans select-none transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-sm font-black text-[#A855F7] tracking-tight">
            ANAMIKA<span className="text-[var(--fg)]">.</span>
          </span>
          <p className="text-[10px] font-bold text-[var(--fg)]/40 uppercase tracking-widest">
            © {currentYear} {name}. All Rights Reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)]/60 hover:text-[var(--fg)] hover:border-[#A855F7] hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)]/60 hover:text-[var(--fg)] hover:border-[#A855F7] hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a 
            href={`mailto:${email}`} 
            className="p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)]/60 hover:text-[var(--fg)] hover:border-[#A855F7] hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Scroll back to top */}
        <motion.button
          onClick={onScrollTop}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center justify-center p-3 rounded-full bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/20 hover:bg-[#A855F7] hover:text-white transition-all duration-300 shadow-lg shadow-[#A855F7]/10 focus:outline-none"
          aria-label="Back to Top"
        >
          <ChevronUp size={20} className="group-hover:animate-bounce" />
        </motion.button>

      </div>
    </footer>
  );
};

export default Footer;
