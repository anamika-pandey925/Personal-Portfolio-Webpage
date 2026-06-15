import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, FolderGit2, GitPullRequest, Flame, Star, Github } from 'lucide-react';
import GlassCard from './GlassCard';

const GithubStats: React.FC = () => {
  // Generate a mock contribution graph grid: 7 rows (days) x 32 columns (weeks)
  const rows = 7;
  const cols = 32;
  const totalCells = rows * cols;

  const cellColors = [
    'bg-[#0c0e25]',               // Empty
    'bg-emerald-950/40 border border-emerald-950', // Low
    'bg-emerald-800/50 border border-emerald-900', // Medium
    'bg-[#06B6D4]/30 border border-[#06B6D4]/20',  // High (Cyan Accent)
    'bg-[#7C3AED]/40 border border-[#7C3AED]/30',  // Extra High (Purple Accent)
  ];

  // Helper to generate a nice-looking pseudo-random but repeatable distribution
  const getCellColorClass = (index: number) => {
    // Basic mathematical distribution to look natural
    const val = (Math.sin(index * 0.15) + Math.cos(index * 0.25) + 2) / 4;
    const colorIndex = Math.floor(val * cellColors.length);
    return cellColors[Math.max(0, Math.min(colorIndex, cellColors.length - 1))];
  };

  const statItems = [
    { label: 'Total Repos', value: '16', icon: FolderGit2, color: 'text-[#06B6D4]', shadow: 'shadow-[#06B6D4]/20' },
    { label: 'Total Commits', value: '1,280+', icon: GitCommit, color: 'text-[#7C3AED]', shadow: 'shadow-[#7C3AED]/20' },
    { label: 'Pull Requests', value: '48+', icon: GitPullRequest, color: 'text-[#3B82F6]', shadow: 'shadow-[#3B82F6]/20' },
    { label: 'Active Streak', value: '42 Days', icon: Flame, color: 'text-orange-500', shadow: 'shadow-orange-500/20' },
  ];

  const languages = [
    { name: 'JavaScript', percentage: 48, color: '#F7DF1E' },
    { name: 'React / TS', percentage: 35, color: '#61DAFB' },
    { name: 'Tailwind CSS', percentage: 12, color: '#38B2AC' },
    { name: 'Python / Others', percentage: 5, color: '#3572A5' },
  ];

  return (
    <section id="github-stats" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#06B6D4] mb-3">06 // ANALYTICS</span>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-[0.9]">
            GitHub <span className="bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">Telemetry</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Stats Metrics & Language Donut Bar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Summary Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {statItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <GlassCard key={idx} delay={idx * 0.05} className="p-5 border-white/5 bg-[#0c0e25]/30 rounded-2xl flex flex-col justify-between group hover:border-[#7C3AED]/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                        <Icon size={16} />
                      </div>
                      <span className="text-[7px] text-[#94a3b8]/40 font-black uppercase tracking-wider">Sync OK</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider mb-1">{item.label}</h4>
                      <p className="text-xl font-black text-white tracking-tighter">{item.value}</p>
                    </div>
                  </GlassCard>
                );
              })}
            </div>

            {/* Language Distribution Card */}
            <GlassCard className="p-6 border-white/5 bg-[#0c0e25]/30 rounded-2xl flex-grow flex flex-col justify-center">
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2 italic">
                <Star size={14} className="text-[#06B6D4]" />
                Language Composition
              </h3>
              
              <div className="space-y-4">
                {/* Horizontal Segmented Bar Chart */}
                <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden flex border border-white/5">
                  {languages.map((lang, idx) => (
                    <div 
                      key={idx} 
                      className="h-full"
                      style={{ 
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color
                      }}
                    />
                  ))}
                </div>

                {/* Legend list */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[10px] font-mono">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                      <span className="font-bold text-[#94a3b8]">{lang.name}</span>
                      <span className="text-white/40 ml-auto">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>

          </div>

          {/* Right Block: Contribution Grid Graph Card */}
          <div className="lg:col-span-8 flex">
            <GlassCard className="p-8 border-white/5 bg-[#0c0e25]/20 rounded-3xl w-full flex flex-col justify-between hover:border-[#7C3AED]/20 transition-all duration-500 group relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#06B6D4]/5 blur-[80px] rounded-full -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8 select-none">
                  <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-2.5 italic">
                    <Github size={18} className="text-[#06B6D4]" />
                    Commit Frequency
                  </h3>
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-full border border-[#10b981]/25">
                    Telemetry Live
                  </span>
                </div>

                <p className="text-[#94a3b8] text-xs font-semibold leading-relaxed mb-8 max-w-xl">
                  Visual metrics representing daily commits and version control uploads across various repositories. Updated dynamically via pseudo-live telemetry cycles.
                </p>

                {/* Contribution Pixel Grid */}
                <div className="overflow-x-auto pb-4 select-none">
                  <div className="grid grid-flow-col gap-1.5 w-max" style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}>
                    {[...Array(totalCells)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0.8, opacity: 0.3 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (idx % cols) * 0.01 }}
                        whileHover={{ scale: 1.25, zIndex: 10 }}
                        className={`w-3.5 h-3.5 rounded-sm transition-colors duration-300 ${getCellColorClass(idx)} cursor-pointer`}
                        title={`Commits: ${Math.floor(Math.random() * 8)}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Grid Legend indicators */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5 text-[9px] font-mono select-none">
                <span className="text-[#94a3b8]/40">Telemetry cycle updated 1h ago</span>
                <div className="flex items-center gap-1.5 font-bold text-[#94a3b8]">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#0c0e25]" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-950/40 border border-emerald-950" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-800/50 border border-emerald-900" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#06B6D4]/30 border border-[#06B6D4]/20" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#7C3AED]/40 border border-[#7C3AED]/30" />
                  <span>More</span>
                </div>
              </div>

            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GithubStats;
