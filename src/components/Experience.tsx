import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Sparkles, CheckCircle2, ChevronRight, Laptop, Award } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData, ExperienceItem } from '../data/portfolioData';

const ExperienceNode: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="relative pl-8 sm:pl-16 pb-14 last:pb-0 group text-left"
    >
      {/* Timeline Line */}
      <div className="absolute left-[15px] sm:left-[27px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-[#A855F7]/40 via-[var(--border)] to-transparent group-last:bg-transparent" />
      
      {/* Timeline Glowing Node */}
      <div className={`absolute left-0 sm:left-3 top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-2xl border flex items-center justify-center transition-all duration-500 z-10 ${
        item.current
          ? 'bg-gradient-to-br from-[#A855F7] to-[#7C3AED] border-[#A855F7] text-white shadow-lg shadow-[#A855F7]/30 scale-105'
          : 'bg-[var(--surface)] border-[var(--border)] text-[var(--text-muted)] group-hover:border-[#A855F7]/50 group-hover:text-[#A855F7]'
      }`}>
        {item.type === 'Client Project' ? (
          <Laptop size={16} />
        ) : (
          <Briefcase size={16} />
        )}
      </div>

      {/* Experience Content Card */}
      <GlassCard className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
        item.current
          ? 'bg-[var(--surface)]/60 border-[#A855F7]/30 shadow-xl shadow-[#A855F7]/5'
          : 'bg-[var(--surface)]/30 border-[var(--border)] hover:border-[#A855F7]/30 hover:shadow-lg'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--fg)] tracking-tight">
                {item.role}
              </h3>
              {item.current && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Current
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[var(--text-muted)]">
              <span className="text-[#A855F7] font-bold">{item.company}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-[#06B6D4]" />
                {item.location}
              </span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-[var(--surface-lighter)] text-[10px] uppercase font-mono tracking-wider">
                {item.type}
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-lighter)]/70 border border-[var(--border)] text-xs font-mono text-[var(--fg)]/80 shrink-0 w-fit">
            <Calendar size={12} className="text-[#A855F7]" />
            <span>{item.period}</span>
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed font-normal mb-5">
          {item.description}
        </p>

        {/* Responsibilities list */}
        {item.responsibilities && item.responsibilities.length > 0 && (
          <div className="mb-6 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] font-bold mb-2">
              Key Contributions //
            </h4>
            <ul className="space-y-2">
              {item.responsibilities.map((resp, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--fg)]/85 leading-relaxed">
                  <CheckCircle2 size={15} className="text-[#A855F7] shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Used Badges */}
        <div className="pt-4 border-t border-[var(--border)] flex flex-wrap gap-2 items-center">
          <span className="text-[11px] font-mono uppercase text-[var(--text-muted)] font-bold mr-1">
            Stack:
          </span>
          {item.technologies.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-lg bg-[var(--surface-lighter)]/60 text-[var(--fg)]/80 text-[11px] font-mono font-medium border border-[var(--border)] hover:border-[#A855F7]/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const experiences = portfolioData.internships;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#A855F7]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-8 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 select-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/25 text-[#A855F7] text-[11px] font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles size={12} />
            <span>03 // EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--fg)] tracking-tight">
            Work &amp; Internships
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#A855F7] to-[#06B6D4] rounded-full mt-4" />
        </div>

        {/* Timeline Items */}
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

