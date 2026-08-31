import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headset, ArrowUp, Mail, Phone, MessageSquare, Send, X, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FloatingActionsProps {
  onScrollTop: () => void;
  onContactClick: () => void;
}

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

const FloatingActions: React.FC<FloatingActionsProps> = ({ onScrollTop, onContactClick }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = portfolioData.socialLinks.whatsapp || `https://wa.me/${portfolioData.contact.phone.replace(/[^0-9]/g, '')}`;
  const emailUrl = `mailto:${portfolioData.contact.email}`;
  const phoneUrl = `tel:${portfolioData.contact.phone}`;

  return (
    <div className="fixed right-5 sm:right-7 bottom-6 sm:bottom-8 z-50 flex flex-col items-center gap-3 select-none">
      
      {/* Quick Help / Contact Popup Card */}
      <AnimatePresence>
        {isHelpOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="absolute bottom-28 right-0 w-[300px] sm:w-[320px] rounded-3xl p-5 bg-[#090d16]/95 backdrop-blur-2xl border border-cyan-500/30 shadow-[0_10px_40px_rgba(6,182,212,0.25)] text-[var(--fg)] overflow-hidden"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                    <Headset size={18} />
                  </div>
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-[#090d16] animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Quick Support <Sparkles size={12} className="text-cyan-400" />
                  </h4>
                  <p className="text-[11px] text-cyan-300/80 font-mono">Online • Let's connect!</p>
                </div>
              </div>

              <button
                onClick={() => setIsHelpOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Support Modal"
              >
                <X size={14} />
              </button>
            </div>

            {/* Quick Action Links */}
            <div className="mt-3.5 space-y-2 relative z-10">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] hover:bg-[#25D366]/15 border border-white/5 hover:border-[#25D366]/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <WhatsAppIcon size={16} />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-semibold text-white group-hover:text-[#25D366] block transition-colors">WhatsApp Chat</span>
                    <span className="text-[10px] text-slate-400">{portfolioData.contact.phone}</span>
                  </div>
                </div>
                <ExternalLink size={12} className="text-slate-500 group-hover:text-[#25D366] transition-colors" />
              </a>

              {/* Email */}
              <a
                href={emailUrl}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/5 hover:border-cyan-400/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail size={16} />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-semibold text-white group-hover:text-cyan-300 block transition-colors">Send Email</span>
                    <span className="text-[10px] text-slate-400 truncate max-w-[170px] block">{portfolioData.contact.email}</span>
                  </div>
                </div>
                <ExternalLink size={12} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* Direct Message / Scroll to Contact */}
              <button
                onClick={() => {
                  setIsHelpOpen(false);
                  onContactClick();
                }}
                className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-[#A855F7] text-white font-bold text-xs shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <Send size={13} />
                <span>Open Contact Form</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Headset / Support Button (Glowing Cyan Squircle Button as shown in image) */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsHelpOpen(!isHelpOpen)}
        className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center bg-[#07242e]/90 hover:bg-[#092f3d] border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.65)] hover:shadow-[0_0_30px_rgba(6,182,212,0.9)] text-[#00d2ff] hover:text-white backdrop-blur-md transition-all duration-300 cursor-pointer group"
        aria-label="Customer Support & Quick Contact"
        title="Quick Support & Contact"
      >
        {/* Soft pulse glow halo */}
        <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-md group-hover:bg-cyan-400/30 transition-all pointer-events-none" />

        {/* Headset Icon */}
        <Headset 
          size={22} 
          className="relative z-10 stroke-[2.2] group-hover:rotate-6 transition-transform text-[#00d2ff]" 
        />

        {/* Active Ping Indicator */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 border border-[#07242e]" />
        </span>
      </motion.button>

      {/* 2. Scroll to Top Button (Vibrant Gradient Circle Button with Up Arrow as shown in image) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 15 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={onScrollTop}
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#00D2FF] via-[#A855F7] to-[#D946EF] text-white shadow-[0_4px_20px_rgba(168,85,247,0.45)] hover:shadow-[0_6px_25px_rgba(168,85,247,0.7)] transition-all duration-300 cursor-pointer group"
            aria-label="Scroll to Top"
            title="Scroll to Top"
          >
            <ArrowUp 
              size={22} 
              className="stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" 
            />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
};

export default FloatingActions;
