import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code, Cpu, Wrench, Palette, Database, Lock, CheckCircle2, Shield, Layout, Eye, Terminal } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData, SkillItem } from '../data/portfolioData';

// Technology Icon Mapper Component
const TechIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className = 'w-6 h-6' }) => {
  switch (icon) {
    case 'html':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 3l1.8 16.2L12 21l6.2-1.8L20 3H4z" fill="#E34F26" stroke="#E34F26" />
          <path d="M12 5.5v13l4.5-1.3 1.3-11.7H12z" fill="#EF652A" stroke="#EF652A" />
        </svg>
      );
    case 'css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 3l1.8 16.2L12 21l6.2-1.8L20 3H4z" fill="#1572B6" stroke="#1572B6" />
          <path d="M12 5.5v13l4.5-1.3 1.3-11.7H12z" fill="#33A9DC" stroke="#33A9DC" />
        </svg>
      );
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F7DF1E" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7 17.5c.8.5 1.7.8 2.6.8 1.4 0 2.2-.7 2.2-2.1v-7.2h-2v7.2c0 .4-.2.6-.6.6-.4 0-.8-.1-1.1-.3l-1.1 1zM14.2 16.8c1 .6 2.1 1 3.2 1 1.6 0 2.6-.8 2.6-2.1 0-1.3-.8-1.9-2.2-2.5-1.4-.6-2.1-1.1-2.1-2.1 0-.9.8-1.7 2.1-1.7 1 0 1.8.3 2.5.8l.9-1.5c-.8-.6-1.9-.9-3.4-.9-2.3 0-3.7 1.4-3.7 3.3 0 1.4.9 2.1 2.3 2.7 1.4.6 2.1 1 2.1 2 0 1.1-.9 1.8-2.3 1.8-1.2 0-2.3-.4-3.2-1l-.8 1.4z" fill="#000000" />
        </svg>
      );
    case 'typescript':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 11.2h-3v-2h8v2h-3v9.5h-2v-9.5zm7.3 3.9c.7.4 1.5.7 2.4.7 1.1 0 1.7-.5 1.7-1.3 0-.8-.6-1.2-1.6-1.6-1.3-.5-2.1-1.2-2.1-2.3 0-1.5 1.2-2.6 3.1-2.6 1.1 0 2 .3 2.7.7l-.6 1.6c-.6-.4-1.3-.6-2.1-.6-.9 0-1.4.4-1.4 1 0 .6.5 1 1.5 1.4 1.4.6 2.2 1.3 2.2 2.5 0 1.6-1.2 2.8-3.3 2.8-1.2 0-2.3-.4-3.1-.9l.6-1.6z" fill="#FFFFFF" />
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38BDF8" aria-hidden="true">
          <path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 3-2.3 5-2 1.1.2 2 1.1 2.9 2 1.5 1.6 3.2 3.3 7.1 3.3 3.3 0 5.3-1.7 6-5-1.3 1.7-3 2.3-5 2-1.1-.2-2-1.1-2.9-2-1.5-1.6-3.2-3.3-7.1-3.3zM6 13c-3.3 0-5.3 1.7-6 5 1.3-1.7 3-2.3 5-2 1.1.2 2 1.1 2.9 2 1.5 1.6 3.2 3.3 7.1 3.3 3.3 0 5.3-1.7 6-5-1.3 1.7-3 2.3-5 2-1.1-.2-2-1.1-2.9-2-1.5-1.6-3.2-3.3-7.1-3.3z" />
        </svg>
      );
    case 'layout':
      return <Layout className={`${className} text-[#06B6D4]`} />;
    case 'accessibility':
      return <Eye className={`${className} text-emerald-400`} />;
    case 'api':
      return <Cpu className={`${className} text-[#A855F7]`} />;
    case 'firebase':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FFCA28" aria-hidden="true">
          <path d="M3.9 17.5L6.6 2.8c.1-.4.6-.5.8-.2l3.4 6.3-6.9 8.6zm15.8-.5L17.2 4.1c-.1-.4-.6-.5-.8-.1L13.8 8l5.9 9zm-1.8 1.6L12.5 22c-.3.2-.8.2-1.1 0L3.7 17.6l8.2-10.3 6 11.3z" />
        </svg>
      );
    case 'database':
      return <Database className={`${className} text-emerald-500`} />;
    case 'lock':
      return <Lock className={`${className} text-amber-400`} />;
    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F05032" aria-hidden="true">
          <path d="M21.9 10.7l-8.6-8.6c-.8-.8-2-.8-2.8 0L8.8 3.8 11 6c.6-.2 1.4 0 1.9.5.5.5.7 1.3.5 1.9l2.2 2.2c.6-.2 1.4 0 1.9.5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.4-.5-2l-2.1-2.1v5.6c.2.2.3.4.3.7 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.4-1.2 1-1.4V8.4c-.6-.2-1-.8-1-1.4 0-.3.1-.6.3-.8L4.8 8.4l-2.7 2.7c-.8.8-.8 2 0 2.8l8.6 8.6c.8.8 2 .8 2.8 0l8.4-8.4c.8-.7.8-2 0-2.8z" />
        </svg>
      );
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      );
    case 'vite':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M21.5 3.5l-9.3 18a.6.6 0 01-1 0L1.9 3.5c-.3-.6.2-1.3.9-1.2l9 1.5 8.8-1.5c.7-.1 1.2.6.9 1.2z" fill="url(#vite-grad-2)" />
          <defs>
            <linearGradient id="vite-grad-2" x1="2" y1="2" x2="22" y2="22">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'vscode':
      return <Terminal className={`${className} text-[#007ACC]`} />;
    case 'figma':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
          <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
          <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
          <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
          <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
        </svg>
      );
    default:
      return <Code className={className} />;
  }
};

const Skills: React.FC = () => {
  const allSkills = portfolioData.skills;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'UI / Styling', 'Backend / Services', 'Tools'];

  const filteredSkills = selectedCategory === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#06B6D4]/5 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#A855F7]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 select-none">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/25 text-[#A855F7] text-xs font-mono font-bold tracking-widest uppercase mb-2.5">
              <Sparkles size={13} />
              <span>02 // CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--fg)] tracking-tight">
              Skills &amp; Technologies
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#A855F7] to-[#06B6D4] rounded-full mt-3" />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white shadow-md shadow-[#A855F7]/20 font-bold'
                    : 'bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--fg)] hover:bg-[var(--surface-lighter)] border border-[var(--border)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Compact & Clean Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <GlassCard className="p-4 sm:p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 hover:bg-[var(--surface)] hover:border-[#A855F7]/40 hover:shadow-lg hover:shadow-[#A855F7]/10 transition-all duration-200 group flex flex-col justify-between h-full text-left">
                  <div>
                    {/* Top Row: Compact Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--surface-lighter)] border border-[var(--border)] flex items-center justify-center p-2.5 group-hover:scale-110 group-hover:border-[#A855F7]/40 transition-all duration-200 shadow-sm flex-shrink-0">
                        <TechIcon icon={skill.icon} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] px-2.5 py-0.5 rounded-full bg-[var(--surface-lighter)]/70 border border-[var(--border)]">
                        {skill.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-sm sm:text-base font-bold text-[var(--fg)] group-hover:text-[#A855F7] transition-colors mb-1.5 tracking-tight">
                      {skill.name}
                    </h3>
                    {skill.description && (
                      <p className="text-xs text-[var(--text-muted)] font-normal leading-relaxed mb-3 line-clamp-2">
                        {skill.description}
                      </p>
                    )}
                  </div>

                  {/* Core Stack Indicator */}
                  <div className="pt-2.5 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] mt-1">
                    <span className="flex items-center gap-1.5 text-[#A855F7] font-semibold text-[11px]">
                      <CheckCircle2 size={13} className="text-[#A855F7]" />
                      Production-Ready
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;


