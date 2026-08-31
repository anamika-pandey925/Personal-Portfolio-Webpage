import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const LeetCodeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className}
    aria-hidden="true"
  >
    <path 
      d="M16.102 17.93l-2.697 2.607c-.466.451-1.211.451-1.677 0l-4.51-4.359a1.096 1.096 0 0 1 0-1.62l4.51-4.359c.466-.451 1.211-.451 1.677 0l2.697 2.606a1.18 1.18 0 0 1-.03 1.701l-1.954 1.888a.294.294 0 0 0-.03.424l1.984 1.917a1.18 1.18 0 0 1 .03 1.701z" 
      fill="#FFA116" 
    />
    <path 
      d="M17.098 14.225l3.226-3.118a1.21 1.21 0 0 0 0-1.748l-8.232-7.958a1.21 1.21 0 0 0-1.714 0l-8.232 7.958a1.21 1.21 0 0 0 0 1.748l3.226 3.118 4.292-4.148c.81-.784 2.112-.784 2.922 0l4.51 4.359a.302.302 0 0 0 .426 0l2.302-2.21z" 
      fill="currentColor" 
    />
  </svg>
);

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

interface FooterProps {
  onScrollTop: () => void;
}

const Footer: React.FC<FooterProps> = ({ onScrollTop }) => {
  const { name, role } = portfolioData;
  const { email } = portfolioData.contact;
  const { linkedin, github, leetcode, instagram, whatsapp } = portfolioData.socialLinks;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-[var(--surface)]/40 py-12 font-sans select-none transition-colors duration-300">
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="text-base font-extrabold text-[var(--fg)] tracking-tight">
              ANAMIKA<span className="text-[#A855F7]">.</span>
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)]">• {role}</span>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            © {currentYear} {name}. Designed &amp; Developed with React &amp; TypeScript.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center flex-wrap gap-2.5">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-[var(--surface-lighter)] text-[var(--fg)] hover:text-white hover:bg-[#A855F7] transition-all duration-300 shadow-sm hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-[var(--surface-lighter)] text-[var(--fg)] hover:text-white hover:bg-[#0A66C2] transition-all duration-300 shadow-sm hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a 
            href={leetcode} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-[var(--surface-lighter)] text-[var(--fg)] hover:text-white hover:bg-[#FFA116] transition-all duration-300 shadow-sm hover:scale-110"
            aria-label="LeetCode Profile"
          >
            <LeetCodeIcon size={16} />
          </a>
          <a 
            href={instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-[var(--surface-lighter)] text-[var(--fg)] hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all duration-300 shadow-sm hover:scale-110"
            aria-label="Instagram Profile @BUILDWITHANAMIKA"
            title="@BUILDWITHANAMIKA"
          >
            <InstagramIcon size={16} />
          </a>
          <a 
            href={whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-[var(--surface-lighter)] text-[var(--fg)] hover:text-white hover:bg-[#25D366] transition-all duration-300 shadow-sm hover:scale-110"
            aria-label="WhatsApp Chat"
          >
            <WhatsAppIcon size={16} />
          </a>
          <a 
            href={`mailto:${email}`} 
            className="p-2.5 rounded-full bg-[var(--surface-lighter)] text-[var(--fg)] hover:text-white hover:bg-[#06B6D4] transition-all duration-300 shadow-sm hover:scale-110"
            aria-label="Send Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Back to Top Action */}
        <motion.button
          onClick={onScrollTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-lighter)] border border-[var(--border)] text-[var(--fg)] text-xs font-mono font-semibold hover:border-[#A855F7]/40 hover:text-[#A855F7] transition-all cursor-pointer"
          aria-label="Back to Top"
        >
          <span>Back to top</span>
          <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-[#A855F7]" />
        </motion.button>

      </div>
    </footer>
  );
};

export default Footer;


