import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Atom, MapPin, Sparkles, Award, ArrowUpRight, Compass, HeartHandshake } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData } from '../data/portfolioData';

const About: React.FC = () => {
  const { name, role, profileImage, about } = portfolioData;

  const infoCards = [
    {
      title: 'MCA Graduate',
      subtitle: 'Galgotias University (7.96 CGPA)',
      icon: GraduationCap,
      color: 'text-[#A855F7]',
      border: 'hover:border-[#A855F7]/40',
      bg: 'bg-[#A855F7]/10'
    },
    {
      title: 'Frontend Developer',
      subtitle: 'Modern UI/UX & Responsive Web',
      icon: Code2,
      color: 'text-[#06B6D4]',
      border: 'hover:border-[#06B6D4]/40',
      bg: 'bg-[#06B6D4]/10'
    },
    {
      title: 'React Developer',
      subtitle: 'React.js, TypeScript & Tailwind',
      icon: Atom,
      color: 'text-[#8B5CF6]',
      border: 'hover:border-[#8B5CF6]/40',
      bg: 'bg-[#8B5CF6]/10'
    },
    {
      title: 'Delhi, India',
      subtitle: 'Open to Worldwide Opportunities',
      icon: MapPin,
      color: 'text-emerald-400',
      border: 'hover:border-emerald-400/40',
      bg: 'bg-emerald-400/10'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 select-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/25 text-[#A855F7] text-[11px] font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles size={12} />
            <span>01 // IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--fg)] tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#A855F7] to-[#06B6D4] rounded-full mt-4" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Profile Card & Quick Info */}
          <div className="lg:col-span-5 flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[320px] group"
            >
              {/* Glowing Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#A855F7] via-[#6366F1] to-[#06B6D4] rounded-3xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500 -z-10" />

              {/* Profile Card Container */}
              <div className="rounded-3xl p-3 bg-[var(--surface)] border border-[var(--border)] shadow-2xl overflow-hidden relative">
                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-black/40 relative">
                  <img 
                    src={profileImage} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    onError={(e) => {
                      e.currentTarget.src = '/profile.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Status Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-left">
                    <div>
                      <h4 className="text-xs font-black text-white">{name}</h4>
                      <p className="text-[10px] text-[#A855F7] font-semibold">{role}</p>
                    </div>
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              {infoCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                  >
                    <GlassCard className={`p-4 border-[var(--border)] bg-[var(--surface)]/50 rounded-2xl flex flex-col items-start text-left transition-all duration-300 ${card.border} group`}>
                      <div className={`p-2.5 rounded-xl ${card.bg} ${card.color} mb-3 group-hover:scale-110 transition-transform`}>
                        <Icon size={16} />
                      </div>
                      <h3 className="text-xs font-bold text-[var(--fg)] mb-0.5 tracking-tight">{card.title}</h3>
                      <p className="text-[10px] text-[var(--text-muted)] font-medium leading-relaxed">{card.subtitle}</p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Bio, Interests, Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#A855F7] mb-2 font-bold">
              Engineering with Purpose //
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--fg)] tracking-tight mb-6 leading-snug">
              Creating seamless digital experiences with clean code &amp; human-centered design.
            </h3>

            <div className="space-y-4 text-[var(--text-muted)] text-sm sm:text-base leading-relaxed font-normal mb-8">
              <p>
                I am an <strong className="text-[var(--fg)] font-semibold">MCA graduate</strong> specializing in modern frontend engineering, interactive user interfaces, and responsive web applications. My foundation bridges algorithmic problem-solving with creative frontend engineering.
              </p>
              <p>
                From interactive client platforms like <strong className="text-[var(--fg)] font-semibold">Step Up Dance Academy</strong> to scalable mobile applications like <strong className="text-[var(--fg)] font-semibold">MithilaKitchen</strong>, I build solutions with React.js, TypeScript, Tailwind CSS, and modern API integrations.
              </p>
            </div>

            {/* Choreography to Code Philosophy Callout */}
            <div className="p-6 rounded-3xl border border-[#A855F7]/25 bg-gradient-to-r from-[#A855F7]/10 via-[var(--surface)] to-transparent backdrop-blur-md mb-8 w-full">
              <div className="flex items-center gap-2 mb-2 text-[#A855F7] text-xs font-mono font-bold uppercase tracking-widest">
                <span>💃</span>
                <span>Philosophy &amp; Artistic Precision</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--fg)] font-medium italic leading-relaxed">
                "{about.philosophy}"
              </p>
            </div>

            {/* Key Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-lighter)]/30 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--fg)] mb-1">
                  <span className="text-[#06B6D4]">✦</span> Responsive &amp; Mobile-First
                </div>
                <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                  Pixel-perfect rendering across 375px mobile screens up to 4K ultra-wide monitors.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-lighter)]/30 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--fg)] mb-1">
                  <span className="text-[#A855F7]">✦</span> Component Modularity
                </div>
                <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                  Reusable, type-safe, and self-documenting React components with clean state management.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;

