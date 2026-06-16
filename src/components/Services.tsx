import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Monitor, Code2, Smartphone, Zap, Layers } from 'lucide-react';
import GlassCard from './GlassCard';

const servicesList = [
  {
    title: 'UI/UX Design',
    desc: 'Creating wireframes, low/high-fidelity prototypes, and user-centric interfaces in Figma that map smooth digital journeys.',
    icon: PenTool,
  },
  {
    title: 'Web Design',
    desc: 'Designing premium visual graphics, customized typography settings, and cohesive modern color systems tailored to target audiences.',
    icon: Monitor,
  },
  {
    title: 'Frontend Development',
    desc: 'Writing optimized, structural frontend code in React.js and Tailwind CSS with reusable clean components.',
    icon: Code2,
  },
  {
    title: 'Mobile Responsive Design',
    desc: 'Structuring fluid grid patterns and media query rules so that pages render perfectly on mobile, tablet, and desktop screens.',
    icon: Smartphone,
  },
  {
    title: 'Website Optimization',
    desc: 'Auditing page performance, optimizing asset sizes, and improving overall SEO rankings for fast page load indicators.',
    icon: Zap,
  },
  {
    title: 'Prototyping',
    desc: 'Mapping interactive click-through prototypes and component-level micro-interactions to validate design decisions early.',
    icon: Layers,
  },
];

const Services: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      {/* Background visual highlight */}
      <div className="absolute left-[10%] top-[40%] w-[300px] h-[300px] rounded-full bg-[#A855F7]/5 blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-start text-left mb-16 select-none">
          <span className="text-[10px] uppercase font-black tracking-[0.4em] text-[#A855F7] mb-2">02 // SERVICES</span>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--fg)] uppercase tracking-tight leading-none">
            My Services
          </h2>
          <div className="h-[2px] w-12 bg-[#A855F7] mt-4" />
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="flex"
              >
                <GlassCard className="p-8 border-[var(--border)] bg-[var(--surface)]/30 rounded-3xl w-full flex flex-col justify-between hover:border-[#A855F7]/30 hover:shadow-lg hover:shadow-[#A855F7]/5 transition-all duration-500 group relative">
                  <div>
                    {/* Icon container with hover scaling */}
                    <div className="p-3.5 rounded-2xl bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/15 w-fit mb-6 group-hover:scale-110 group-hover:bg-[#A855F7]/20 transition-all duration-500">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-lg font-black text-[var(--fg)] mb-3 uppercase tracking-tight group-hover:text-[#A855F7] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-[var(--text-muted)] text-xs font-semibold leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Decorative glowing bottom tag */}
                  <div className="mt-8 pt-4 border-t border-[var(--border)] flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none">
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#A855F7]">Request info</span>
                    <span className="text-xs text-[#A855F7]">→</span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
