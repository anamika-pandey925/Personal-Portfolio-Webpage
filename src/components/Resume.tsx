import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, Printer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const Resume: React.FC = () => {
  const { personalInfo, experience, projects, skills, education, certificates } = portfolioData;

  return (
    <div className="min-h-screen bg-slate-100 py-8 font-sans text-slate-800 antialiased print:bg-white print:py-0 select-none">
      {/* Header controls (hidden on print) */}
      <div className="max-w-[900px] mx-auto mb-4 px-4 flex justify-between items-center print:hidden">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#6366f1] transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>
        
        <button 
          onClick={() => window.print()} 
          className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-6 py-3 rounded-full font-black shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 uppercase tracking-widest text-[9px]"
        >
          <Printer size={14} />
          Print / Download PDF
        </button>
      </div>

      {/* Main Resume A4 Page */}
      <div className="bg-white max-w-[900px] mx-auto p-12 shadow-xl border-t-[6px] border-[#6366f1] print:shadow-none print:max-w-full print:p-8 print:border-t-[6px] print:border-[#6366f1] min-h-[297mm]">
        
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-[#0f172a] tracking-tighter mb-2">{personalInfo.name}</h1>
          <p className="text-base font-bold text-[#6366f1] uppercase tracking-[0.2em] italic mb-6">Frontend Engineer // React.js Specialist</p>
          
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-t border-b border-slate-100 py-4">
            <div className="flex items-center gap-1.5">
              <MapPin size={12} className="text-[#6366f1]/70" />
              <span className="text-slate-800">{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={12} className="text-[#6366f1]/70" />
              <a href={`mailto:${personalInfo.email}`} className="text-slate-800 hover:text-[#6366f1] transition-colors">{personalInfo.email}</a>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={12} className="text-[#6366f1]/70" />
              <a href="tel:8799735545" className="text-slate-800 hover:text-[#6366f1] transition-colors">+91 8799735545</a>
            </div>
            <div className="flex items-center gap-1.5">
              <Github size={12} className="text-[#6366f1]/70" />
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-800 hover:text-[#6366f1] transition-colors">github.com/anamika-pandey925</a>
            </div>
            <div className="flex items-center gap-1.5">
              <Linkedin size={12} className="text-[#6366f1]/70" />
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-800 hover:text-[#6366f1] transition-colors">linkedin.com/in/anamika-pandey</a>
            </div>
          </div>
        </header>

        {/* Two-Column Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] gap-12">
          
          {/* Left Column (Main content) */}
          <div className="space-y-10">
            {/* Summary */}
            <section>
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#6366f1] mb-4 flex items-center gap-3">
                Professional Summary
                <div className="flex-grow h-[1px] bg-slate-100" />
              </div>
              <p className="text-[12.5px] leading-relaxed text-slate-600 font-medium">
                {personalInfo.bio}
              </p>
            </section>

            {/* Experience */}
            <section>
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#6366f1] mb-4 flex items-center gap-3">
                Work Experience
                <div className="flex-grow h-[1px] bg-slate-100" />
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-extrabold text-[#0f172a] text-sm uppercase tracking-tight">{exp.role}</h4>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{exp.period}</span>
                    </div>
                    <div className="text-[10px] font-bold text-[#6366f1] uppercase tracking-wider mb-2">{exp.company} // {exp.location}</div>
                    <p className="text-[11.5px] text-slate-600 leading-relaxed font-medium">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#6366f1] mb-4 flex items-center gap-3">
                Project Archive
                <div className="flex-grow h-[1px] bg-slate-100" />
              </div>
              
              <div className="space-y-4">
                {projects.slice(0, 4).map((proj, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h5 className="font-bold text-[#0f172a] text-[12px]">{proj.title}</h5>
                      <span className="text-[8.5px] text-slate-400 font-bold uppercase tracking-wider">{proj.category}</span>
                    </div>
                    <div className="text-[8.5px] font-bold text-[#6366f1] uppercase tracking-widest mb-1">{proj.tech.join(', ')}</div>
                    <p className="text-[11.5px] text-slate-500 leading-relaxed">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-10">
            {/* Core Stack */}
            <section>
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#6366f1] mb-4 flex items-center gap-3">
                Core Stack
                <div className="flex-grow h-[1px] bg-slate-100" />
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-50 text-slate-700 text-[8.5px] font-black uppercase tracking-widest border border-slate-100 rounded-md">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>

            {/* Academic */}
            <section>
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#6366f1] mb-4 flex items-center gap-3">
                Academic
                <div className="flex-grow h-[1px] bg-slate-100" />
              </div>
              <div className="space-y-5">
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <p className="text-[9px] font-black text-[#6366f1] uppercase tracking-widest mb-1">{edu.period}</p>
                    <h5 className="font-extrabold text-[#0f172a] text-[12px] leading-tight">{edu.degree}</h5>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{edu.institution}</p>
                    {edu.grade && (
                      <span className="inline-block mt-1.5 text-[8.5px] font-black bg-slate-50 px-2 py-0.5 rounded text-slate-400 border border-slate-100 tracking-widest">{edu.grade}</span>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#6366f1] mb-4 flex items-center gap-3">
                Certificates
                <div className="flex-grow h-[1px] bg-slate-100" />
              </div>
              <div className="space-y-4">
                {certificates.slice(0, 4).map((cert, idx) => (
                  <div key={idx} className="text-[11px]">
                    <p className="font-bold text-[#0f172a]">{cert.title}</p>
                    <p className="text-slate-500 uppercase tracking-widest text-[8px] font-bold mt-0.5">{cert.organization} // {cert.date}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Personality Note */}
            <section className="pt-8 border-t border-slate-100">
              <p className="text-[11px] text-slate-500 leading-relaxed italic font-medium">
                "I translate the meticulous discipline of **Classical Dance** into architectural code precision."
              </p>
            </section>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Resume;
