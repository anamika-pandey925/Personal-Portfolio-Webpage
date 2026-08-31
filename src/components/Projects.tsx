import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Star, ArrowUpRight } from 'lucide-react';
import GlassCard from './GlassCard';
import { portfolioData, Project } from '../data/portfolioData';

// Large Project Card
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="flex"
    >
      <GlassCard className="group flex flex-col h-full w-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/40 hover:bg-[var(--surface)] hover:border-[#A855F7]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#A855F7]/5 relative text-left">
        
        {/* Project Preview Image */}
        <div className="relative h-60 sm:h-64 overflow-hidden bg-black/40 shrink-0 border-b border-[var(--border)]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none" 
            onError={(e) => {
              e.currentTarget.src = '/elearning-platform.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Category / Badge Tags */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-black/70 border border-white/10 rounded-full backdrop-blur-md">
              {project.badge || project.category}
            </span>
          </div>

          {/* Overlay Action Buttons */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-black/80 hover:bg-[#A855F7] text-white border border-white/10 hover:border-[#A855F7] rounded-full transition-all duration-300 shadow-lg hover:scale-110"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={15} />
            </a>
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-black/80 hover:bg-[#06B6D4] text-white border border-white/10 hover:border-[#06B6D4] rounded-full transition-all duration-300 shadow-lg hover:scale-110"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Content Box */}
        <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#A855F7]">
                {project.category}
              </span>
              {project.rating && (
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star size={12} className="fill-amber-400" />
                  <span>Client-Approved</span>
                </div>
              )}
            </div>

            <h3 className="text-xl font-extrabold text-[var(--fg)] group-hover:text-[#A855F7] transition-colors mb-2 tracking-tight">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="text-xs font-mono text-[var(--text-muted)] mb-3">
                {project.subtitle}
              </p>
            )}

            <p className="text-xs sm:text-sm text-[var(--text-muted)] font-normal leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Client review quote if present */}
            {project.clientReview && (
              <div className="mb-6 p-3.5 rounded-2xl bg-amber-500/[0.04] border border-amber-500/15">
                <p className="text-xs text-[var(--fg)]/80 italic font-medium">
                  "{project.clientReview}"
                </p>
              </div>
            )}
          </div>

          {/* Tech stack badges & action row */}
          <div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)] mb-5">
              {project.tech.map((t, idx) => (
                <span 
                  key={idx} 
                  className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-[var(--surface-lighter)]/70 text-[var(--fg)]/80 font-medium border border-[var(--border)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <a 
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A855F7] hover:text-[#C084FC] transition-colors uppercase tracking-wider"
              >
                <span>Explore Project</span>
                <ArrowUpRight size={14} />
              </a>

              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--fg)] transition-colors"
              >
                <Github size={13} />
                <span>Code</span>
              </a>
            </div>
          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const allProjects = portfolioData.projects;
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Client Work', 'Web Apps', 'Mobile App', 'UI/UX'];

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      {/* Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#A855F7]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 select-none">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/25 text-[#A855F7] text-[11px] font-mono font-bold tracking-widest uppercase mb-3">
              <Sparkles size={12} />
              <span>04 // PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--fg)] tracking-tight">
              Featured Work &amp; Projects
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#A855F7] to-[#06B6D4] rounded-full mt-4" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all focus:outline-none ${
                  filter === cat
                    ? 'bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white shadow-lg shadow-[#A855F7]/20 font-bold'
                    : 'bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--fg)] hover:bg-[var(--surface-lighter)] border border-[var(--border)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Project Grid */}
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

