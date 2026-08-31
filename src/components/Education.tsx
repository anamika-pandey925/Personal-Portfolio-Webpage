import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, FileText, X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData, EducationItem } from '../data/portfolioData';

const EducationNode: React.FC<{ 
  item: EducationItem; 
  index: number; 
  onViewCert: (cert: string, title: string) => void 
}> = ({ item, index, onViewCert }) => {
  const isLatest = index === 0;

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
      
      {/* Timeline Node */}
      <div className={`absolute left-0 sm:left-3 top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-2xl border flex items-center justify-center transition-all duration-500 z-10 ${
        isLatest
          ? 'bg-gradient-to-br from-[#A855F7] to-[#7C3AED] border-[#A855F7] text-white shadow-lg shadow-[#A855F7]/30 scale-105'
          : 'bg-[var(--surface)] border-[var(--border)] text-[var(--text-muted)] group-hover:border-[#A855F7]/50 group-hover:text-[#A855F7]'
      }`}>
        <GraduationCap size={16} />
      </div>

      {/* Content Card */}
      <GlassCard className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
        isLatest
          ? 'bg-[var(--surface)]/60 border-[#A855F7]/30 shadow-xl shadow-[#A855F7]/5'
          : 'bg-[var(--surface)]/30 border-[var(--border)] hover:border-[#A855F7]/30 hover:shadow-lg'
      }`}>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--fg)] tracking-tight">
                {item.degree}
              </h3>
              {item.grade && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {item.grade}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[var(--text-muted)]">
              <span className="text-[#A855F7] font-bold">{item.institution}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-[#06B6D4]" />
                {item.location}
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-lighter)]/70 border border-[var(--border)] text-xs font-mono text-[var(--fg)]/80 shrink-0 w-fit">
            <Calendar size={12} className="text-[#A855F7]" />
            <span>{item.period}</span>
          </div>
        </div>

        {/* Academic Details Bullets */}
        {item.details && item.details.length > 0 && (
          <ul className="space-y-2 mb-6">
            {item.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--fg)]/80 leading-relaxed">
                <span className="text-[#A855F7] text-xs mt-0.5">✦</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Certificate View Button */}
        {item.certificate && (
          <div className="pt-3 border-t border-[var(--border)] flex justify-start">
            <button
              onClick={() => onViewCert(item.certificate!, item.degree)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-lighter)] hover:bg-[#A855F7] hover:text-white text-[var(--fg)] border border-[var(--border)] hover:border-[#A855F7] transition-all text-xs font-semibold uppercase tracking-wider shadow-sm"
            >
              <FileText size={13} />
              <span>View Gradecard / Degree</span>
              <ExternalLink size={11} />
            </button>
          </div>
        )}
      </GlassCard>
    </motion.div>
  );
};

const Education: React.FC = () => {
  const educationItems = portfolioData.education;
  const [selectedCert, setSelectedCert] = useState<{ image: string; title: string } | null>(null);

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#06B6D4]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-8 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 select-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/25 text-[#A855F7] text-[11px] font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles size={12} />
            <span>05 // ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--fg)] tracking-tight">
            Education Journey
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#A855F7] to-[#06B6D4] rounded-full mt-4" />
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {educationItems.map((edu, index) => (
            <EducationNode 
              key={index} 
              item={edu} 
              index={index} 
              onViewCert={(image, title) => setSelectedCert({ image, title })}
            />
          ))}
        </div>

      </div>

      {/* Modal Image Preview for Certificate / Degree */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          >
            <div 
              className="absolute inset-0 cursor-pointer" 
              onClick={() => setSelectedCert(null)} 
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-3xl bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 sm:p-7 flex flex-col gap-5 items-center max-h-[92vh] overflow-y-auto z-10 shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[var(--surface-lighter)] border border-[var(--border)] text-[var(--fg)]/80 hover:text-[#A855F7] transition-colors focus:outline-none"
                aria-label="Close Preview"
              >
                <X size={18} />
              </button>

              <div className="w-full text-left pr-10">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#A855F7] block mb-1">
                  Verified Academic Credential
                </span>
                <h3 className="text-lg font-bold text-[var(--fg)]">
                  {selectedCert.title}
                </h3>
              </div>

              {/* Certificate Image Frame */}
              <div className="w-full flex items-center justify-center bg-black/40 rounded-2xl overflow-hidden p-3 border border-[var(--border)] max-h-[65vh]">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-md"
                />
              </div>

              <div className="w-full flex items-center justify-center gap-2 text-xs font-mono text-[var(--text-muted)] bg-[var(--surface-lighter)] py-2.5 px-4 rounded-xl border border-[var(--border)]">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Officially Issued Degree &amp; Academic Records
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;

