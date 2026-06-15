import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData, Certificate } from '../data/portfolioData';

const CertificateCard: React.FC<{ cert: Certificate; index: number; onPreview: () => void }> = ({ 
  cert, index, onPreview 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex"
    >
      <GlassCard className="group flex flex-col h-full overflow-hidden rounded-3xl border-white/5 bg-[#0c0e25]/30 hover:border-[#7C3AED]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7C3AED]/10 flex flex-col">
        {/* Certificate preview container */}
        <div 
          onClick={onPreview}
          className="relative h-48 overflow-hidden bg-black/50 shrink-0 cursor-pointer select-none"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent z-10 opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <img 
            src={cert.image} 
            alt={cert.title} 
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 relative z-0" 
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck size={14} className="text-[#06B6D4]" />
            <span className="text-[8.5px] uppercase tracking-widest font-black text-[#06B6D4]/80">
              {cert.organization}
            </span>
          </div>

          <h3 className="text-xl font-black mb-3 text-white group-hover:text-[#7C3AED] transition-colors duration-300 italic tracking-tight uppercase">
            {cert.title}
          </h3>

          <div className="flex items-center gap-1.5 mb-4 select-none">
            <div className="h-[1px] w-3 bg-[#7C3AED]/40" />
            <span className="text-[#94a3b8]/50 text-[9px] font-bold tracking-wider">{cert.date}</span>
          </div>

          <p className="text-[#94a3b8] text-[11px] font-medium leading-relaxed mb-6 flex-grow">
            {cert.description}
          </p>

          <button
            onClick={onPreview}
            className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-[#7C3AED] hover:text-white text-white border border-white/10 hover:border-[#7C3AED] transition-all duration-300 rounded-full py-3.5 text-[9px] font-black uppercase tracking-widest"
          >
            Verify Credential <ExternalLink size={12} />
          </button>
        </div>
      </GlassCard>
    </motion.div>
  );
};

const Certificates: React.FC = () => {
  const certs = portfolioData.certificates;
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#06B6D4] mb-3">04 // VERIFICATION</span>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-[0.9]">
            Verified <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">Credentials</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <CertificateCard 
              key={index} 
              cert={cert} 
              index={index} 
              onPreview={() => setSelectedCert(cert)} 
            />
          ))}
        </div>

      </div>

      {/* Modal image overlay preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 select-none"
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
              className="relative w-full max-w-4xl bg-[#0c0e25]/60 border border-white/10 rounded-3xl p-4 md:p-8 flex flex-col md:flex-row gap-8 items-center max-h-[90vh] overflow-y-auto z-10 backdrop-blur-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/5 border border-white/10 text-[#94a3b8] hover:text-white hover:border-[#7C3AED] transition-colors focus:outline-none"
                aria-label="Close Preview"
              >
                <X size={18} />
              </button>

              {/* Certificate Image */}
              <div className="w-full md:w-3/5 h-[40vh] md:h-[60vh] flex items-center justify-center bg-black/40 rounded-2xl overflow-hidden p-2">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>

              {/* Certificate Details */}
              <div className="w-full md:w-2/5 text-left flex flex-col justify-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#06B6D4] mb-3 block">
                  {selectedCert.organization}
                </span>
                <h3 className="text-3xl font-black text-white italic leading-[1.1] mb-4 uppercase">
                  {selectedCert.title}
                </h3>
                <span className="text-[#94a3b8]/50 text-xs font-bold block mb-6">{selectedCert.date}</span>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-8">
                  {selectedCert.description}
                </p>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-black text-[10px] uppercase tracking-widest hover:shadow-lg hover:scale-105 active:scale-95 transition-all w-fit"
                >
                  Dismiss Preview
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
