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
    <footer className="relative z-10 border-t border-white/5 bg-[#050816] py-12 font-sans select-none">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-sm font-black bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent tracking-tighter">
            ANAMIKA<span className="text-[#06B6D4]">.</span>
          </span>
          <p className="text-[10px] font-bold text-[#94a3b8]/40 uppercase tracking-widest">
            © {currentYear} {name}. All Rights Reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-white/5 border border-white/10 text-[#94a3b8] hover:text-white hover:border-[#7C3AED] hover:shadow-[0_0_10px_rgba(124,58,237,0.3)] transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-white/5 border border-white/10 text-[#94a3b8] hover:text-white hover:border-[#7C3AED] hover:shadow-[0_0_10px_rgba(124,58,237,0.3)] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a 
            href={`mailto:${email}`} 
            className="p-3 rounded-full bg-white/5 border border-white/10 text-[#94a3b8] hover:text-white hover:border-[#7C3AED] hover:shadow-[0_0_10px_rgba(124,58,237,0.3)] transition-all duration-300"
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
          className="group flex items-center justify-center p-3 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/20 hover:bg-[#7C3AED] hover:text-white transition-all duration-300 shadow-lg shadow-[#7C3AED]/10 focus:outline-none"
          aria-label="Back to Top"
        >
          <ChevronUp size={20} className="group-hover:animate-bounce" />
        </motion.button>

      </div>
    </footer>
  );
};

export default Footer;
