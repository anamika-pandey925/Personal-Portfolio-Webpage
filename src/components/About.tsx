import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Sparkles, MapPin, Heart } from 'lucide-react';
import GlassCard from './GlassCard';

const About: React.FC = () => {

  const cards = [
    {
      title: 'Academic Focus',
      subtitle: 'MCA Candidate',
      description: 'Currently pursuing Masters at Galgotias University. Completed BCA at Bharati Vidyapeeth Delhi.',
      icon: GraduationCap,
      color: 'text-[#7C3AED]',
      bgColor: 'bg-[#7C3AED]/5',
      borderColor: 'group-hover:border-[#7C3AED]/30'
    },
    {
      title: 'Practical Experience',
      subtitle: 'Frontend Internships',
      description: 'Completed 3 internships (Labmentix, CODTECH, Shree Laxmi Industries) focusing on React development.',
      icon: Code2,
      color: 'text-[#06B6D4]',
      bgColor: 'bg-[#06B6D4]/5',
      borderColor: 'group-hover:border-[#06B6D4]/30'
    },
    {
      title: 'Artistic Rhythm',
      subtitle: 'Classical Dancer',
      description: 'A Bharatanatyam dancer, bringing the structured precision and creative flow of stage performance into code.',
      icon: Sparkles,
      color: 'text-[#3B82F6]',
      bgColor: 'bg-[#3B82F6]/5',
      borderColor: 'group-hover:border-[#3B82F6]/30'
    },
    {
      title: 'Operations HQ',
      subtitle: 'Delhi, India',
      description: 'Based in Delhi, building responsive web interfaces and real-time frontend logic.',
      icon: MapPin,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/5',
      borderColor: 'group-hover:border-emerald-500/30'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#7C3AED] mb-3">01 // IDENTITY</span>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-[0.9]">
            Identity <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">&amp; Bio</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Block: Bio */}
          <div className="lg:col-span-6 flex">
            <GlassCard className="p-8 md:p-12 border-white/5 flex flex-col justify-center rounded-3xl bg-[#0c0e25]/40 h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/5 blur-[120px] rounded-full -mr-32 -mt-32" />
              
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-white tracking-tight leading-[1.1] italic">
                CREATING THROUGH <br />
                <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">FLOW &amp; PRECISION.</span>
              </h3>
              
              <div className="space-y-6 text-[#94a3b8] leading-relaxed text-base md:text-lg font-medium">
                <p>
                  As an MCA student at <span className="text-white font-bold">Galgotias University</span> with a solid foundation from Bharati Vidyapeeth, I specialize in crafting interactive user journeys in the frontend.
                </p>
                <p>
                  My training as a **classical dancer** shapes my development philosophy: I believe that code behaves like a choreography. Every responsive card, loading element, and animated section must flow in perfect timing to deliver a truly premium product.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Right Block: 2x2 Grid of Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="flex"
                >
                  <GlassCard className={`p-8 border-white/5 flex flex-col justify-between rounded-3xl bg-[#0c0e25]/30 w-full hover:border-[#7C3AED]/20 transition-all duration-500 group`}>
                    <div className="flex flex-col">
                      <div className={`p-3.5 rounded-2xl ${card.bgColor} ${card.color} w-fit mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5`}>
                        <Icon size={24} />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#94a3b8]/50 mb-2">
                        {card.subtitle}
                      </span>
                      <h4 className="text-xl font-black text-white italic tracking-tight mb-4">
                        {card.title}
                      </h4>
                      <p className="text-xs text-[#94a3b8] font-medium leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-1.5 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart size={10} className={`${card.color} fill-current`} />
                      <span className="text-[7px] font-black uppercase tracking-widest text-[#94a3b8]">Verified Status</span>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
