import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, FileText, X, ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData, EducationItem } from '../data/portfolioData';

const EducationNode: React.FC<{ item: EducationItem; index: number; onViewCert: (cert: string, title: string) => void }> = ({ 
  item, index, onViewCert 
}) => {
  const isLatest = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
      className="relative pl-10 md:pl-16 pb-16 last:pb-0 group"
    >
      {/* Connector vertical line */}
      <div className="absolute left-[18px] md:left-[24px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-[#A855F7]/50 via-[var(--border)] to-transparent group-last:bg-transparent" />
      
      {/* Timeline cap node */}
      <div className={`absolute left-0 md:left-[6px] top-1 w-9 h-9 md:w-10 md:h-10 rounded-2xl border flex items-center justify-center transition-all duration-500 z-10 ${
        isLatest
          ? 'bg-gradient-to-br from-[#A855F7] to-indigo-500 border-[#A855F7] shadow-[0_0_15px_rgba(168,85,247,0.3)] text-white'
          : 'bg-[var(--surface)] border-[var(--border)] text-[var(--fg)]/50 group-hover:border-[#A855F7]/50 group-hover:text-[#A855F7]'
      }`}>
        <GraduationCap size={16} />
      </div>

      <GlassCard className={`p-6 md:p-8 border-[var(--border)] transition-all duration-500 rounded-3xl ${
        isLatest 
          ? 'bg-[#A855F7]/5 border-[#A855F7]/20 shadow-xl shadow-[#A855F7]/2' 
          : 'bg-[var(--surface)]/20 hover:border-[#A855F7]/10'
      }`}>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-black text-white italic leading-tight mb-2 tracking-tight group-hover:text-[#A855F7] transition-colors duration-300">
              {item.degree}
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-black text-[#A855F7] uppercase tracking-wider">{item.institution}</span>
              <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#94a3b8]/70 flex items-center gap-1.5">
                <MapPin size={10} className="text-indigo-400" />
                {item.location}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-[#94a3b8] shrink-0">
              <Calendar size={10} className="text-indigo-400" />
              {item.period}
            </div>
            {item.grade && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black uppercase tracking-widest text-emerald-400 shrink-0">
                <Award size={10} />
                {item.grade}
              </div>
            )}
          </div>
        </div>

        {item.details && item.details.length > 0 && (
          <ul className="space-y-2 mb-6 text-left">
            {item.details.map((detail, idx) => (
              <li key={idx} className="text-[var(--text-muted)] text-xs font-semibold leading-relaxed flex items-start gap-2.5">
                <span className="text-[#A855F7] mt-1 text-[8px] select-none">✦</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Button: View Certificate */}
        {item.certificate && (
          <div className="flex justify-start">
            <button
              onClick={() => onViewCert(item.certificate!, item.degree)}
              className="flex items-center gap-2 bg-[var(--surface-lighter)] hover:bg-[#A855F7] hover:text-white text-[var(--fg)] border border-[var(--border)] hover:border-[#A855F7] transition-all duration-300 rounded-full px-5 py-2.5 text-[9px] font-black uppercase tracking-widest shadow-md hover:shadow-lg hover:shadow-[#A855F7]/10"
            >
              <FileText size={12} /> View Certificate <ExternalLink size={10} />
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

  const handleViewCert = (image: string, title: string) => {
    setSelectedCert({ image, title });
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#A855F7]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#A855F7] mb-3">02 // ACADEMICS</span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--fg)] uppercase tracking-tight leading-none">
            Education Journey
          </h2>
          <div className="h-[2px] w-12 bg-[#A855F7] mt-4" />
        </div>

        {/* Timeline List */}
        <div className="relative">
          {educationItems.map((edu, index) => (
            <EducationNode 
              key={index} 
              item={edu} 
              index={index} 
              onViewCert={handleViewCert}
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
            className="fixed inset-0 z-[150] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
          >
            {/* Background dismiss clicker */}
            <div 
              className="absolute inset-0 cursor-zoom-out" 
              onClick={() => setSelectedCert(null)} 
            />

            {/* Content modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-3xl bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-5 md:p-8 flex flex-col gap-6 items-center max-h-[92vh] overflow-y-auto z-10 backdrop-blur-2xl shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[var(--surface-lighter)] border border-[var(--border)] text-[var(--fg)]/80 hover:text-[#A855F7] hover:border-[#A855F7] transition-colors focus:outline-none"
                aria-label="Close Preview"
              >
                <X size={16} />
              </button>

              {/* Header Title */}
              <div className="w-full text-left pr-10">
                <span className="text-[9px] uppercase font-black tracking-[0.2em] text-[#A855F7] block mb-1">
                  Verified Academic Credential
                </span>
                <h3 className="text-base md:text-lg font-black text-[var(--fg)] uppercase tracking-tight italic">
                  {selectedCert.title}
                </h3>
              </div>

              {/* Certificate Image Frame */}
              <div className="w-full flex items-center justify-center bg-black/10 rounded-2xl overflow-hidden p-3 border border-[var(--border)] max-h-[65vh]">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-md"
                />
              </div>

              {/* Bottom verify notice */}
              <div className="w-full flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#94a3b8]/60 bg-white/5 py-2.5 px-4 rounded-full border border-white/5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Officially Issued Certificate &amp; Academic Grade Records
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;
