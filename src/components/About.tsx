import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Sparkles, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData } from '../data/portfolioData';

const SkillProgressBar: React.FC<{ name: string; level: number; index: number }> = ({ name, level, index }) => {
  return (
    <div className="w-full group/skill mb-5">
      <div className="flex justify-between items-center mb-1.5 font-sans text-xs">
        <span className="font-bold text-[var(--fg)] group-hover/skill:text-[#A855F7] transition-colors duration-300">
          {name}
        </span>
        <span className="font-bold text-[#A855F7]">
          {level}%
        </span>
      </div>
      <div className="h-2 w-full bg-[var(--surface-lighter)] rounded-full overflow-hidden border border-[var(--border)]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] }}
          className="h-full rounded-full bg-[#A855F7]"
          style={{
            boxShadow: `0 0 10px rgba(168, 85, 247, 0.3)`
          }}
        />
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const { name, about: bio } = portfolioData;
  const skills = portfolioData.skills;

  const summaryCards = [
    {
      title: 'Education',
      desc: 'Completed MCA @ Galgotias & BCA @ BVU, Delhi.',
      icon: GraduationCap,
      color: 'text-[#A855F7]',
      bgColor: 'bg-[#A855F7]/10'
    },
    {
      title: 'Internships',
      desc: 'Completed multiple Frontend Development internships.',
      icon: Briefcase,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-start text-left mb-16 select-none">
          <span className="text-[10px] uppercase font-black tracking-[0.4em] text-[#A855F7] mb-2">01 // IDENTITY</span>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--fg)] uppercase tracking-tight leading-none">
            About Me
          </h2>
          <div className="h-[2px] w-12 bg-[#A855F7] mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Block: Circular Profile Image & Small Cards */}
          <div className="lg:col-span-5 flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full max-w-[280px]"
            >
              {/* Outer border shape */}
              <div className="absolute inset-[-6px] rounded-full border border-dashed border-[#A855F7]/30 scale-102" />
              
              <div className="w-full aspect-square rounded-full overflow-hidden bg-[var(--surface)] border-4 border-[var(--surface)] shadow-xl p-1 relative z-10">
                <img 
                  src="/profile.png" 
                  alt={name} 
                  className="w-full h-full object-cover rounded-full select-none" 
                />
              </div>
            </motion.div>

            {/* Quick Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[400px]">
              {summaryCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <GlassCard 
                    key={idx}
                    className="p-5 border-[var(--border)] bg-[var(--surface)]/50 rounded-2xl flex flex-col items-start text-left group hover:border-[#A855F7]/30 transition-all duration-300"
                  >
                    <div className={`p-2 rounded-xl ${card.bgColor} ${card.color} w-fit mb-3 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon size={16} />
                    </div>
                    <h4 className="text-xs font-bold text-[var(--fg)] mb-1 uppercase tracking-wider">{card.title}</h4>
                    <p className="text-[10px] text-[var(--text-muted)] leading-relaxed font-semibold">{card.desc}</p>
                  </GlassCard>
                );
              })}
            </div>
          </div>

          {/* Right Block: Summary & Progress Bars */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <h3 className="text-xl md:text-2xl font-black mb-6 text-[var(--fg)] tracking-tight uppercase leading-snug">
              I'm <span className="text-[#A855F7]">Anamika Pandey</span>, a Frontend Developer specializing in <span className="text-[#A855F7]">React.js</span> &amp; modern web technologies
            </h3>

            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed text-sm md:text-base font-semibold mb-8">
              <p>
                I build responsive, user-friendly, and performance-driven web applications with a focus on clean UI, seamless experiences, and scalable solutions.
              </p>
              <p>
                Currently working on <strong className="text-[var(--fg)] font-bold">Women Safety & Empowerment Platform</strong> while exploring <strong className="text-[var(--fg)] font-bold">Advanced React.js</strong> and <strong className="text-[var(--fg)] font-bold">Frontend Development</strong>.
              </p>
            </div>

            {/* Quick Facts Section */}
            <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/30 backdrop-blur-md mb-8 w-full">
              <h4 className="text-xs font-black text-[var(--fg)] uppercase tracking-widest mb-4 opacity-60">
                Quick Facts //
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm font-semibold text-[var(--fg)]/85">
                <li className="flex items-center gap-2.5">
                  <span className="text-base shrink-0 select-none">⚛️</span> <span>React.js Developer</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-base shrink-0 select-none">🚀</span> <span>Frontend Development Internships</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-base shrink-0 select-none">💻</span> <span>Modern Web Applications</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-base shrink-0 select-none">💃</span> <span>Classical Dancer</span>
                </li>
              </ul>
              
              <p className="italic text-[#A855F7] font-bold border-l-2 border-[#A855F7] pl-3 py-1 bg-[#A855F7]/5 rounded-r-lg mt-4 text-xs md:text-sm">
                "Code with creativity, build with purpose 🚀"
              </p>
            </div>

            {/* Animated Progress Bars */}
            <div className="w-full">
              <h4 className="text-xs font-black text-[var(--fg)] uppercase tracking-widest mb-6 opacity-60">
                Tech Stack Capabilities //
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                {skills.map((skill, index) => (
                  <SkillProgressBar 
                    key={index} 
                    name={skill.name} 
                    level={skill.level} 
                    index={index} 
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
