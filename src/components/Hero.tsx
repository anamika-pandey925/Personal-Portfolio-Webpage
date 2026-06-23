import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { generateResumePDF } from '../utils/resumeGenerator';

const FiverrIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
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

interface HeroProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onProjectsClick, onContactClick }) => {
  const { name } = portfolioData;
  const { email } = portfolioData.contact;
  const { linkedin, github, fiverr } = portfolioData.socialLinks;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[var(--bg)]"
    >
      {/* Animated Abstract Blobs Behind Portrait */}
      <div className="absolute right-0 top-1/4 w-[60%] h-[60%] pointer-events-none select-none z-0 hidden lg:block overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-[10%] top-[20%] w-[350px] h-[350px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
            rotate: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute right-[25%] bottom-[15%] w-[280px] h-[280px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Info Panel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Welcome Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/25 text-[#A855F7] text-xs font-bold uppercase tracking-wider mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7] animate-ping" />
            Welcome to my space
          </motion.div>

          {/* Prominent Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black tracking-tight text-[var(--fg)] leading-none mb-4 uppercase"
          >
            Hi, I'm <span className="text-[#A855F7]">{name}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            variants={itemVariants}
            className="text-xl md:text-2xl font-extrabold text-[var(--fg)]/85 mb-6 tracking-tight uppercase text-left"
          >
            Frontend Developer
          </motion.h2>

          {/* Paragraphs */}
          <motion.div 
            variants={itemVariants}
            className="space-y-4 mb-8 text-left text-sm md:text-base text-[var(--text-muted)] leading-relaxed font-semibold max-w-xl"
          >
            <p>
              I build modern, responsive, and user-friendly web applications using React.js, JavaScript, Tailwind CSS, HTML, and CSS.
            </p>
            <p>
              Passionate about transforming ideas into interactive digital experiences, I focus on creating clean interfaces, smooth user experiences, and high-performance web solutions.
            </p>
          </motion.div>

          {/* Currently Building Badge/Card */}
          <motion.div 
            variants={itemVariants}
            className="mb-10 p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/30 backdrop-blur-md max-w-md w-full text-left"
          >
            <span className="text-[10px] uppercase font-black tracking-widest text-[#A855F7] mb-2 block select-none">
              🚀 Currently Building
            </span>
            <h3 className="text-base font-extrabold text-[var(--fg)] tracking-tight">
              Advanced Web Applications
            </h3>
          </motion.div>

          {/* Action CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-10 select-none"
          >
            {/* Hire Me CTA */}
            <button
              onClick={onContactClick}
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#A855F7] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#A855F7]/95 transition-all shadow-lg shadow-[#A855F7]/20 active:scale-95 focus:outline-none"
            >
              Hire Me
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Download CV */}
            <button
              onClick={() => generateResumePDF()}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-lighter)] hover:text-[#A855F7] text-[var(--fg)] font-bold text-xs uppercase tracking-wider transition-all active:scale-95 focus:outline-none"
            >
              <Download size={13} />
              Download CV
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-5 text-[var(--fg)]/60"
          >
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#A855F7] transition-colors" 
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#A855F7] transition-colors" 
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={fiverr} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#A855F7] transition-colors" 
              aria-label="Fiverr Profile"
            >
              <FiverrIcon size={24} />
            </a>
            <a 
              href={`mailto:${email}`} 
              className="hover:text-[#A855F7] transition-colors" 
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Portrait Column */}
        <div className="lg:col-span-5 flex justify-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="relative group w-full max-w-[340px]"
          >
            {/* Outline rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#A855F7]/30 scale-105 group-hover:rotate-12 transition-transform duration-700 pointer-events-none" />
            
            {/* Main Portrait Mask */}
            <div className="w-full aspect-square rounded-full overflow-hidden bg-[var(--surface)] border-4 border-[var(--surface)] shadow-2xl relative p-1.5">
              <img 
                src="/profile.png" 
                alt={name} 
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500 select-none" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#A855F7]/10 to-transparent pointer-events-none rounded-full" />
            </div>

            {/* Glowing accent circle */}
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-[#A855F7] to-indigo-500 opacity-20 blur-md -z-10 group-hover:opacity-40 transition-opacity duration-500" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
