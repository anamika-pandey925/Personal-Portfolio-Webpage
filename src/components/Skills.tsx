import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { portfolioData } from '../data/portfolioData';

const SkillProgress: React.FC<{ name: string; level: number; delay: number; color: string }> = ({ 
  name, level, delay, color 
}) => {
  return (
    <div className="w-full group/skill">
      <div className="flex justify-between items-center mb-2 font-mono text-[10px]">
        <span className="font-black uppercase tracking-wider text-[#94a3b8] group-hover/skill:text-white transition-colors duration-300">
          {name}
        </span>
        <span className="font-bold text-white/60 group-hover/skill:text-white transition-colors duration-300">
          {level}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.25, 1, 0.5, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, #7C3AED, ${color === 'text-[#7C3AED]' ? '#8B5CF6' : color === 'text-[#06B6D4]' ? '#06B6D4' : '#3B82F6'}, #06B6D4)`,
            boxShadow: `0 0 10px rgba(124, 88, 237, 0.35)`
          }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = portfolioData.skills;

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#06B6D4] mb-3">02 // STACK</span>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-[0.9]">
            Technical <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              >
                <GlassCard className="p-8 md:p-10 border-white/5 bg-[#0c0e25]/30 rounded-3xl h-full flex flex-col justify-between hover:border-[#7C3AED]/20 transition-all duration-500 group relative card-glow-track">
                  {/* Glowing corner overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#7C3AED]/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <div className={`p-3.5 rounded-2xl bg-white/5 border border-white/10 ${category.color} group-hover:scale-110 transition-transform duration-500`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="text-2xl font-black text-white italic tracking-tight uppercase">
                        {category.title}<span className="text-[#06B6D4]">.</span>
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {category.skills.map((skill, skillIdx) => (
                        <SkillProgress 
                          key={skillIdx} 
                          name={skill.name} 
                          level={skill.level} 
                          color={category.color}
                          delay={catIdx * 0.1 + skillIdx * 0.08}
                        />
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
