import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Terminal, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { generateResumePDF } from '../utils/resumeGenerator';

// LeetCode SVG Icon
const LeetCodeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
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

// Instagram SVG Icon
const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
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

// WhatsApp SVG Icon
const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
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

interface HeroProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onProjectsClick, onContactClick }) => {
  const { name, role, contact, socialLinks } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-24 overflow-hidden bg-[var(--bg)]"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#A855F7]/15 via-[#06B6D4]/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[320px] h-[320px] bg-[#A855F7]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] dark:bg-white/[0.03] border border-white/[0.09] shadow-sm backdrop-blur-md mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-[var(--fg)]/90">
                Open to Frontend Developer Opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[var(--fg)] leading-[1.08] mb-3"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#06B6D4]">{name}</span>
            </motion.h1>

            {/* Second Line Role */}
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--fg)]/80 mb-6 flex items-center gap-3 flex-wrap"
            >
              <span>{role}</span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/25">
                React.js / TypeScript Specialist
              </span>
            </motion.h2>

            {/* Short Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed mb-8 max-w-2xl"
            >
              Frontend Developer specializing in building responsive, component-driven web applications with React.js, TypeScript, and Tailwind CSS. Crafting fluid interfaces with precision and clean architecture.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              {/* View My Work */}
              <button
                onClick={onProjectsClick}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-[#A855F7]/25 hover:shadow-xl hover:shadow-[#A855F7]/40 hover:scale-[1.02] active:scale-95 focus:outline-none w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Download Resume */}
              <button
                onClick={() => generateResumePDF('modern')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-[var(--border)] bg-[var(--surface-lighter)]/40 hover:bg-[var(--surface-lighter)] text-[var(--fg)] font-bold text-sm tracking-wide transition-all duration-300 hover:border-[#A855F7]/40 hover:scale-[1.02] active:scale-95 focus:outline-none w-full sm:w-auto"
              >
                <Download size={15} className="text-[#A855F7]" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Social Links & Quick Contact */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center flex-wrap gap-2.5 sm:gap-3 pt-4 border-t border-[var(--border)] w-full max-w-xl"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mr-1 sm:mr-2">
                Connect //
              </span>

              <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                {/* GitHub */}
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 sm:p-2.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)]/70 hover:text-white hover:bg-[#A855F7] hover:border-[#A855F7] transition-all duration-300 hover:scale-110 shadow-sm" 
                  aria-label="GitHub Profile"
                >
                  <Github size={16} />
                </a>

                {/* LinkedIn */}
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 sm:p-2.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)]/70 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 hover:scale-110 shadow-sm" 
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>

                {/* LeetCode */}
                <a 
                  href={socialLinks.leetcode} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 sm:p-2.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)]/70 hover:text-white hover:bg-[#FFA116] hover:border-[#FFA116] transition-all duration-300 hover:scale-110 shadow-sm" 
                  aria-label="LeetCode Profile"
                >
                  <LeetCodeIcon size={16} />
                </a>

                {/* Instagram with Instagram gradient on hover */}
                <a 
                  href={socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 sm:p-2.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)]/70 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all duration-300 hover:scale-110 shadow-sm" 
                  aria-label="Instagram Profile @BUILDWITHANAMIKA"
                  title="@BUILDWITHANAMIKA"
                >
                  <InstagramIcon size={16} />
                </a>

                {/* WhatsApp with WhatsApp green on hover */}
                <a 
                  href={socialLinks.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 sm:p-2.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--fg)]/70 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 hover:scale-110 shadow-sm" 
                  aria-label="Chat on WhatsApp"
                >
                  <WhatsAppIcon size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>


          {/* Right Column: 3D Developer Code Visual Card */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative w-full max-w-[480px]"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#A855F7] via-[#6366F1] to-[#06B6D4] rounded-3xl opacity-20 blur-xl -z-10 group-hover:opacity-40 transition-opacity duration-700" />

              {/* Code Terminal Mockup Card */}
              <div className="rounded-3xl border border-white/[0.1] bg-[#0c101c]/90 backdrop-blur-2xl shadow-2xl overflow-hidden font-mono text-left">
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#111728]/80 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                    <Terminal size={12} className="text-[#A855F7]" />
                    <span>DeveloperProfile.tsx</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Active
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-5 text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto selection:bg-[#A855F7]/30">
                  <p className="text-slate-500 italic">// Frontend Developer Profile</p>
                  <p className="mt-1">
                    <span className="text-[#F43F5E]">const</span> <span className="text-[#38BDF8]">developer</span>: <span className="text-[#FBBF24]">DeveloperProfile</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span> <span className="text-[#34D399]">'Anamika Pandey'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">role:</span> <span className="text-[#34D399]">'Frontend Developer'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">education:</span> <span className="text-[#34D399]">'MCA @ Galgotias University'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">coreStack:</span> [
                  </p>
                  <p className="pl-8 text-[#A855F7]">
                    'React.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-slate-400">strengths:</span> [
                  </p>
                  <p className="pl-8 text-[#38BDF8]">
                    'Responsive UI', 'Clean Components', 'Performance'
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-slate-400">status:</span> <span className="text-emerald-400">'Ready for Impact 🚀'</span>
                  </p>
                  <p>&#125;;</p>

                  <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-sans">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      Compiled successfully
                    </span>
                    <span className="text-[#A855F7] font-mono font-bold">0 errors / 0 warnings</span>
                  </div>
                </div>
              </div>

              {/* Floating Technology Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -top-5 -right-4 p-2.5 sm:p-3 rounded-2xl bg-[#0c101c]/90 border border-white/10 shadow-xl backdrop-blur-xl items-center gap-2 text-xs font-bold text-white z-20 pointer-events-none"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#61DAFB]/15 flex items-center justify-center text-[#61DAFB] text-sm">
                  ⚛️
                </div>
                <span>React Specialist</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="hidden sm:flex absolute -bottom-5 -left-4 p-2.5 sm:p-3 rounded-2xl bg-[#0c101c]/90 border border-white/10 shadow-xl backdrop-blur-xl items-center gap-2 text-xs font-bold text-white z-20 pointer-events-none"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#38BDF8]/15 flex items-center justify-center text-[#38BDF8] text-sm">
                  🎨
                </div>
                <span>Modern UI / UX</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

