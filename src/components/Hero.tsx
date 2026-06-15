import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onProjectsClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onProjectsClick }) => {
  const { name, email, linkedin, github } = portfolioData.personalInfo;

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Profile Image & Glowing Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-br from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] shadow-2xl shadow-[#7C3AED]/20 group">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0c0e25] relative z-10">
              <img 
                src="/profile.jpg" 
                alt={name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            {/* Pulsing ring outer glow */}
            <div className="absolute inset-0 rounded-full border border-white/10 z-20 pointer-events-none" />
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] opacity-30 blur-md -z-10 group-hover:opacity-60 transition-opacity duration-500" />
          </div>
          
          {/* Online status badge */}
          <div className="absolute bottom-2 right-2 bg-[#050816] border border-[#7C3AED]/30 px-3.5 py-1 rounded-full flex items-center gap-2 shadow-xl z-30">
            <div className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-[8px] font-black uppercase tracking-widest text-white">Online</span>
          </div>
        </motion.div>

        {/* Small Handcrafted text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-6 bg-[#7C3AED]/30" />
          <span className="text-[9px] uppercase font-black tracking-[0.5em] text-[#94a3b8]">
            Handcrafted by <span className="text-white font-bold">{name}</span>
          </span>
          <div className="h-px w-6 bg-[#7C3AED]/30" />
        </motion.div>

        {/* Massive Typography */}
        <div className="relative mb-8 select-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-[0.85] text-white flex flex-col items-center"
          >
            <span>ARCHITECTING</span>
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(124,58,237,0.15)]">
              COMPLEXITY
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl text-base md:text-xl text-[#94a3b8] leading-relaxed mb-12 font-medium space-y-2"
        >
          <p className="text-white font-bold tracking-wide">
            MCA Student <span className="text-[#06B6D4] font-black">//</span> Frontend Developer
          </p>
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-[#94a3b8]/60">
            React.js <span className="text-[#7C3AED]">•</span> JavaScript <span className="text-[#7C3AED]">•</span> Tailwind CSS
          </p>
        </motion.div>

        {/* Action Buttons CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-5 mb-16"
        >
          {/* View Projects */}
          <button
            onClick={onProjectsClick}
            className="group relative inline-flex items-center gap-3.5 px-8 py-4.5 rounded-full bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#7C3AED] hover:text-white transition-all duration-500 overflow-hidden shadow-2xl shadow-white/5 active:scale-95 focus:outline-none"
          >
            View Projects
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-350" />
          </button>

          {/* Download Resume */}
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3.5 px-8 py-4.5 rounded-full border border-white/10 bg-white/5 text-white font-black text-[10px] uppercase tracking-[0.3em] hover:border-[#06B6D4]/50 hover:bg-[#06B6D4]/10 hover:text-[#06B6D4] transition-all backdrop-blur-xl active:scale-95 shadow-lg"
          >
            <Download size={14} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-6"
        >
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-white transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${email}`} className="text-[#94a3b8] hover:text-white transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
