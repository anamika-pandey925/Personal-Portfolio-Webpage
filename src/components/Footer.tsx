import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const FiverrIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width={size} 
    height={size} 
    className={className}
  >
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"/>
  </svg>
);

interface FooterProps {
  onScrollTop: () => void;
}

const Footer: React.FC<FooterProps> = ({ onScrollTop }) => {
  const { name } = portfolioData;
  const { email } = portfolioData.contact;
  const { linkedin, github, fiverr } = portfolioData.socialLinks;
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
            href={fiverr} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)]/60 hover:text-[var(--fg)] hover:border-[#A855F7] hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] transition-all duration-300"
            aria-label="Fiverr"
          >
            <FiverrIcon size={20} />
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
