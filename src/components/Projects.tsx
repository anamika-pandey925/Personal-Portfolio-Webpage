import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData, Project } from '../data/portfolioData';

const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="flex"
    >
      <GlassCard className="group flex flex-col h-full overflow-hidden rounded-3xl border-white/5 bg-[#0c0e25]/30 hover:border-[#7C3AED]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7C3AED]/10 relative">
        
        {/* Project Thumbnail Image Container */}
        <div className="relative h-52 overflow-hidden bg-black/40 shrink-0 select-none">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0" 
          />
          {project.badge && (
            <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[8.5px] font-black uppercase tracking-widest text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/30 rounded-full backdrop-blur-md shadow-lg shadow-[#06B6D4]/10 animate-pulse">
              {project.badge}
            </span>
          )}
        </div>

        {/* Info & CTA details */}
        <div className="p-6 md:p-8 flex flex-col flex-grow">
          {/* Tech tags list */}
          <div className="flex flex-wrap gap-1.5 mb-5 select-none">
            {project.tech.map((t, idx) => (
              <span 
                key={idx} 
                className="text-[8.5px] px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] uppercase tracking-wider font-black border border-[#7C3AED]/20"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-black mb-3 text-white group-hover:text-[#06B6D4] transition-colors duration-300 italic tracking-tight uppercase">
            {project.title}<span className="text-[#06B6D4]">.</span>
          </h3>

          <p className="text-[#94a3b8] text-xs font-medium leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {project.review && (
            <div className="mb-6 p-4 rounded-2xl bg-[#06B6D4]/5 border border-[#06B6D4]/10 text-xs text-[#94a3b8] italic font-medium relative select-none">
              <div className="flex justify-between items-center mb-2 not-italic">
                <span className="font-mono text-[9px] uppercase tracking-wider font-black text-[#06B6D4]">
                  Client Review
                </span>
                <span className="text-amber-400 font-bold text-[10px]">
                  ⭐ {project.rating}
                </span>
              </div>
              "{project.review}"
            </div>
          )}

          <div className="flex items-center gap-3.5 mt-auto select-none pt-4 border-t border-white/5">
            {/* GitHub button */}
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-[#7C3AED] hover:text-white text-white border border-white/10 hover:border-[#7C3AED] transition-all duration-300 rounded-full py-3 text-[9px] font-black uppercase tracking-widest"
            >
              <Github size={12} /> GitHub
            </a>

            {/* Live demo button */}
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#06B6D4]/10 hover:bg-[#06B6D4] hover:text-white text-[#06B6D4] border border-[#06B6D4]/20 hover:border-[#06B6D4] transition-all duration-300 rounded-full py-3 text-[9px] font-black uppercase tracking-widest"
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          </div>
        </div>

      </GlassCard>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#7C3AED] mb-3">03 // ARCHIVE</span>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-[0.9]">
            Flagship <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">Creations</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
