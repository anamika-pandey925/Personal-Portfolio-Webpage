import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Compass } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData, ExperienceItem } from '../data/portfolioData';

const ExperienceNode: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
  const isInternship = item.type === 'Internship';
  const isAcademic = item.type === 'Academic';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="relative pl-12 md:pl-20 pb-16 last:pb-0 group"
    >
      {/* Connector vertical line */}
      <div className="absolute left-[18px] md:left-[30px] top-4 bottom-0 w-[2.5px] bg-gradient-to-b from-[#A855F7]/40 via-[var(--border)] to-transparent group-last:bg-transparent" />
      
      {/* Timeline Circle Node */}
      <div className={`absolute left-0 md:left-2 top-0.5 w-10 h-10 md:w-12 md:h-12 rounded-2xl border flex items-center justify-center transition-all duration-700 z-10 ${
        item.current
          ? 'bg-gradient-to-br from-[#A855F7] to-indigo-500 border-[#A855F7] shadow-[0_0_20px_rgba(168,85,247,0.4)] text-white'
          : 'bg-[var(--surface)] border-[var(--border)] text-[var(--fg)]/40 group-hover:border-[#A855F7]/40 group-hover:text-[#A855F7]'
      }`}>
        {isAcademic ? (
          <GraduationCap size={18} />
        ) : isInternship ? (
          <Briefcase size={18} />
        ) : (
          <Compass size={18} />
        )}
      </div>

      <GlassCard className={`p-8 border-[var(--border)] transition-all duration-700 rounded-3xl ${
        item.current 
          ? 'bg-[#A855F7]/5 border-[#A855F7]/25 shadow-xl shadow-[#A855F7]/5' 
          : 'bg-[var(--surface)]/20 hover:border-[#A855F7]/15'
      }`}>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-black text-white italic leading-none mb-2.5 uppercase tracking-tight">
              {item.role}
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-black text-[#7C3AED] uppercase tracking-wider">{item.company}</span>
              <div className="h-1 w-1 rounded-full bg-white/20" />
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#94a3b8]/60 flex items-center gap-1">
                <MapPin size={10} className="text-[#06B6D4]" />
                {item.location}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-[#94a3b8] shrink-0 w-fit">
            <Calendar size={10} className="text-[#06B6D4]" />
            {item.period}
          </div>
        </div>

        <p className="text-[#94a3b8] text-xs leading-relaxed font-medium mb-6">
          {item.description}
        </p>

        {/* Verification Status */}
        <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-[#94a3b8]/40 px-3 py-1 bg-white/5 rounded-full border border-white/5 w-fit">
          <Award size={10} className="text-[#06B6D4]/50" />
          {item.current ? 'Current Active Residency' : 'Completed cycle'}
        </div>

      </GlassCard>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const experiences = portfolioData.internships;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#A855F7] mb-3">05 // TIMELINE</span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--fg)] uppercase tracking-tight leading-none">
            Experience Timeline
          </h2>
          <div className="h-[2px] w-12 bg-[#A855F7] mt-4" />
        </div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceNode key={index} item={exp} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
