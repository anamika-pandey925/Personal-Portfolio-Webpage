import React from 'react';
import { motion } from 'framer-motion';

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020617]">
      {/* Neo-Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-[0.06]" />

      {/* Cyber Scanline overlay */}
      <div className="absolute inset-0 bg-scanlines opacity-[0.02]" />

      {/* Background Watermark */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 text-[18vw] font-black text-white/[0.015] select-none tracking-tighter italic font-sans leading-none uppercase">
        ANAMIKA
      </div>

      {/* Radial Gradient Ambient Highlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#7C3AED]/20 to-transparent blur-[120px] opacity-65 animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#06B6D4]/15 to-transparent blur-[150px] opacity-55" />
      <div className="absolute top-[40%] left-[60%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-br from-[#3B82F6]/10 to-transparent blur-[100px] opacity-45" />

      {/* Floating Spark particles / Neon dust */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = Math.random() * 20 + 20;
          const delay = Math.random() * -20;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] opacity-35"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -150, 0],
                x: [0, Math.random() * 60 - 30, 0],
                opacity: [0.1, 0.6, 0.1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GridBackground;
