import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, ExternalLink, Sparkles, Award, Trophy, Star } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData, Certificate } from '../data/portfolioData';

const LeetCodeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className}
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

const Certificates: React.FC = () => {
  const certificates = portfolioData.certificates;
  const achievements = portfolioData.achievements;
  const { leetcode } = portfolioData.socialLinks;
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#A855F7]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 select-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/25 text-[#A855F7] text-[11px] font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles size={12} />
            <span>06 // CREDENTIALS &amp; HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--fg)] tracking-tight">
            Certifications &amp; Achievements
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#A855F7] to-[#06B6D4] rounded-full mt-4" />
        </div>

        {/* Achievements & LeetCode Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/40 hover:border-[#A855F7]/30 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#A855F7]/10 text-[#A855F7] flex items-center justify-center mb-4">
                    <Trophy size={18} />
                  </div>
                  <h3 className="text-base font-bold text-[var(--fg)] mb-1 tracking-tight">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-mono text-[#06B6D4] mb-2">{ach.subtitle}</p>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* LeetCode & Competitive Coding Quick Banner */}
        {leetcode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 p-6 sm:p-8 rounded-3xl border border-[#FFA116]/20 bg-gradient-to-r from-[#FFA116]/10 via-[var(--surface)] to-transparent flex flex-col sm:flex-row items-center justify-between gap-6 text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FFA116]/15 border border-[#FFA116]/30 flex items-center justify-center shrink-0">
                <LeetCodeIcon size={28} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#FFA116]">
                  Problem Solving &amp; Algorithms
                </span>
                <h3 className="text-xl font-extrabold text-[var(--fg)] tracking-tight">
                  LeetCode Active Problem Solver
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Practicing Data Structures, Algorithms, Dynamic Programming, and Frontend Coding Challenges.
                </p>
              </div>
            </div>

            <a
              href={leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFA116] hover:bg-[#FFB03A] text-black font-bold text-xs uppercase tracking-wider transition-all shrink-0 shadow-lg shadow-[#FFA116]/20 hover:scale-105"
            >
              <span>View LeetCode Profile</span>
              <ExternalLink size={13} />
            </a>
          </motion.div>
        )}

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex"
            >
              <GlassCard className="group flex flex-col h-full w-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/30 hover:bg-[var(--surface)] hover:border-[#A855F7]/40 hover:shadow-xl hover:shadow-[#A855F7]/5 transition-all duration-300 text-left">
                
                {/* Certificate Preview Image */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-48 overflow-hidden bg-black/40 shrink-0 cursor-pointer border-b border-[var(--border)] group/img"
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-contain p-3 group-hover/img:scale-105 transition-transform duration-500 select-none"
                    onError={(e) => {
                      e.currentTarget.src = '/certificate.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-1.5 rounded-full bg-white text-black text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg">
                      Click to Preview
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#A855F7]">
                      <ShieldCheck size={14} />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                        {cert.organization}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[var(--fg)] group-hover:text-[#A855F7] transition-colors mb-2 tracking-tight">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {cert.date}
                    </span>

                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A855F7] hover:text-[#C084FC] transition-colors uppercase tracking-wider"
                    >
                      <span>Verify</span>
                      <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Image Preview */}
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
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[var(--surface-lighter)] border border-[var(--border)] text-[var(--fg)]/80 hover:text-[#A855F7] transition-colors focus:outline-none"
                aria-label="Close Preview"
              >
                <X size={18} />
              </button>

              <div className="w-full text-left pr-10">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#A855F7] block mb-1">
                  Verified Industry Certificate • {selectedCert.organization}
                </span>
                <h3 className="text-lg font-bold text-[var(--fg)]">
                  {selectedCert.title}
                </h3>
              </div>

              <div className="w-full flex items-center justify-center bg-black/40 rounded-2xl overflow-hidden p-3 border border-[var(--border)] max-h-[65vh]">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-md"
                />
              </div>

              <div className="w-full flex items-center justify-center gap-2 text-xs font-mono text-[var(--text-muted)] bg-[var(--surface-lighter)] py-2.5 px-4 rounded-xl border border-[var(--border)]">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Officially Verified Credential Certificate
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
