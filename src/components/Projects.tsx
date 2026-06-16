import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData, Project } from '../data/portfolioData';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="flex"
    >
      <GlassCard className="group flex flex-col h-full min-h-[460px] overflow-hidden rounded-3xl border-[var(--border)] bg-[var(--surface)]/30 hover:border-[#A855F7]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#A855F7]/5 relative select-none">
        
        {/* Thumbnail Image Container */}
        <div className="relative h-56 overflow-hidden bg-black/20 shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-0" 
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop';
            }}
          />
          {project.badge && (
            <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[8px] font-black uppercase tracking-widest text-[#A855F7] bg-[#A855F7]/10 border border-[#A855F7]/35 rounded-full backdrop-blur-md">
              {project.badge}
            </span>
          )}

          {/* Hover Overlay with Action Buttons */}
          <div className="absolute inset-0 bg-[var(--bg)]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex flex-col items-center justify-center gap-4">
            <h4 className="text-white text-sm font-black uppercase tracking-wider mb-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
              {project.title}
            </h4>
            <div className="flex items-center gap-3 select-none translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {/* GitHub Button */}
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[var(--surface)] hover:bg-[#A855F7] hover:text-white border border-[var(--border)] text-[var(--fg)] hover:border-[#A855F7] hover:scale-110 rounded-full transition-all duration-300 shadow-lg"
                aria-label="GitHub Repository"
              >
                <Github size={16} />
              </a>
              {/* Live Demo Button */}
              <a 
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[var(--surface)] hover:bg-[#A855F7] hover:text-white border border-[var(--border)] text-[var(--fg)] hover:border-[#A855F7] hover:scale-110 rounded-full transition-all duration-300 shadow-lg"
                aria-label="Live Demo Link"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Info Content */}
        <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
          {/* Category Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#A855F7] px-2 py-0.5 rounded bg-[#A855F7]/10 w-fit">
              {project.category}
            </span>
          </div>

          <h3 className="text-lg font-black mb-3 text-[var(--fg)] group-hover:text-[#A855F7] transition-colors duration-300 uppercase tracking-tight">
            {project.title}
          </h3>

          <p className="text-[var(--text-muted)] text-xs font-semibold leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {project.rating && (
            <div className="mb-6 p-4 rounded-2xl bg-yellow-500/5 border border-yellow-500/15 backdrop-blur-md">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(project.rating)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {project.clientReview && (
                <p className="text-[10px] text-[var(--fg)]/75 italic font-bold leading-normal">
                  "{project.clientReview}"
                </p>
              )}
            </div>
          )}

          {/* Tech stack badge tags */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)]">
            {project.tech.map((t, idx) => (
              <span 
                key={idx} 
                className="text-[8px] px-2.5 py-0.5 rounded-full bg-[var(--surface-lighter)] text-[var(--fg)]/70 font-bold uppercase tracking-wider border border-[var(--border)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </GlassCard>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects = portfolioData.projects;
  const [filter, setFilter] = useState('All');

  // Dynamically extract categories
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 select-none">
          <div className="flex flex-col items-start text-left">
            <span className="text-[10px] uppercase font-black tracking-[0.4em] text-[#A855F7] mb-2">03 // PORTFOLIO</span>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--fg)] uppercase tracking-tight leading-none">
              My Projects
            </h2>
            <div className="h-[2px] w-12 bg-[#A855F7] mt-4" />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-4 md:pt-0">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-wider border transition-all focus:outline-none ${
                  filter === cat
                    ? 'bg-[#A855F7] text-white border-[#A855F7] shadow-lg shadow-[#A855F7]/10'
                    : 'bg-[var(--surface)] hover:bg-[var(--surface-lighter)] text-[var(--fg)]/70 border-[var(--border)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
