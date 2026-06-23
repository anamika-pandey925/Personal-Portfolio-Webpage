import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { portfolioData } from '../data/portfolioData';

export const generateResumePDF = async (): Promise<void> => {
  // 1. Create toast loader
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl bg-indigo-950/95 border-indigo-500/30 text-indigo-200 transition-all duration-300';
  toast.style.fontFamily = 'system-ui, -apple-system, sans-serif';
  toast.innerHTML = `
    <div class="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
      <svg class="animate-spin h-4 w-4 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
    <div class="flex flex-col text-left">
      <span class="text-[9px] uppercase font-black tracking-widest opacity-50">System Action</span>
      <span class="text-xs font-semibold">Generating resume PDF...</span>
    </div>
  `;
  document.body.appendChild(toast);

  try {
    const { name, role, about, skills, projects, certificates, internships, education, contact, socialLinks, achievements } = portfolioData;

    // 2. Create offscreen container
    const resumeContainer = document.createElement('div');
    resumeContainer.style.position = 'fixed';
    resumeContainer.style.left = '-9999px';
    resumeContainer.style.top = '0';
    resumeContainer.style.width = '800px';
    resumeContainer.style.height = 'auto';
    resumeContainer.style.minHeight = '1130px';
    resumeContainer.style.backgroundColor = '#ffffff';
    resumeContainer.style.color = '#1e293b';
    resumeContainer.style.padding = '40px 45px';
    resumeContainer.style.fontFamily = "'Inter', system-ui, -apple-system, sans-serif";
    resumeContainer.style.boxSizing = 'border-box';
    resumeContainer.style.zIndex = '-9999';

    // 3. Build HTML structure
    const experienceHtml = internships
      ? internships.map(exp => `
        <div class="mb-4">
          <div class="flex justify-between items-baseline mb-0.5">
            <h4 class="font-extrabold text-[#0f172a] text-[12px] uppercase tracking-tight">${exp.role}</h4>
            <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest">${exp.period}</span>
          </div>
          <div class="text-[9px] font-bold text-[#4F46E5] uppercase tracking-wider mb-1">${exp.company} // ${exp.location}</div>
          <p class="text-[10.5px] text-slate-600 leading-relaxed font-medium">${exp.description}</p>
        </div>
      `).join('')
      : '';

    const projectsHtml = projects
      ? projects.map(proj => `
        <div class="mb-3">
          <div class="flex justify-between items-baseline">
            <h5 class="font-bold text-[#0f172a] text-[11px]">${proj.title}</h5>
            <span class="text-[8.5px] text-slate-400 font-bold uppercase tracking-wider">${proj.category}</span>
          </div>
          <div class="text-[8.5px] font-bold text-[#4F46E5] uppercase tracking-widest mb-0.5">${proj.tech.join(', ')}</div>
          <p class="text-[10.5px] text-slate-500 leading-relaxed">${proj.description}</p>
        </div>
      `).join('')
      : '';

    const skillsHtml = skills
      ? skills.map(skill => `
        <span class="px-2 py-1 bg-slate-50 text-slate-700 text-[8px] font-black uppercase tracking-widest border border-slate-100 rounded-md mb-1.5 mr-1.5 inline-block">
          ${skill.name}
        </span>
      `).join('')
      : '';

    const educationHtml = education
      ? education.map(edu => `
        <div class="mb-3">
          <p class="text-[8.5px] font-black text-[#4F46E5] uppercase tracking-widest mb-0.5">${edu.period}</p>
          <h5 class="font-extrabold text-[#0f172a] text-[11px] leading-tight">${edu.degree}</h5>
          <p class="text-[9.5px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">${edu.institution}</p>
          ${edu.grade ? `<span class="inline-block mt-0.5 text-[8px] font-black bg-slate-50 px-1 py-0.5 rounded text-slate-400 border border-slate-100 tracking-widest">Grade: ${edu.grade}</span>` : ''}
        </div>
      `).join('')
      : '';

    const certificatesHtml = certificates
      ? certificates.map(cert => `
        <div class="mb-2 text-[9.5px]">
          <p class="font-bold text-[#0f172a]">${cert.title}</p>
          <p class="text-slate-500 uppercase tracking-widest text-[8px] font-bold">${cert.organization} // ${cert.date.split(' ')[0]} ${cert.date.split(' ').slice(-1)[0]}</p>
        </div>
      `).join('')
      : '';

    resumeContainer.innerHTML = `
      <!-- Top header line -->
      <div class="h-1.5 w-full bg-[#4F46E5] mb-6" style="margin-left: -45px; margin-right: -45px; width: calc(100% + 90px);"></div>
      
      <!-- Main Header -->
      <header class="mb-6">
        ${name ? `<h1 class="text-3xl font-extrabold text-[#0f172a] tracking-tighter mb-0.5">${name}</h1>` : ''}
        ${role ? `<p class="text-sm font-black text-[#4F46E5] uppercase tracking-[0.2em] italic mb-4">${role}</p>` : ''}
        
        <div class="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-widest border-t border-b border-slate-100 py-2.5">
          ${contact?.location ? `
            <div class="flex items-center gap-1">
              <span class="text-[#4F46E5] opacity-70">Loc:</span> <span class="text-slate-800">${contact.location}</span>
            </div>
          ` : ''}
          ${contact?.email ? `
            <div class="flex items-center gap-1">
              <span class="text-[#4F46E5] opacity-70">Email:</span> <span class="text-slate-800">${contact.email}</span>
            </div>
          ` : ''}
          ${contact?.phone ? `
            <div class="flex items-center gap-1">
              <span class="text-[#4F46E5] opacity-70">WhatsApp:</span> <span class="text-slate-800">${contact.phone}</span>
            </div>
          ` : ''}
          ${socialLinks?.github ? `
            <div class="flex items-center gap-1">
              <span class="text-[#4F46E5] opacity-70">GitHub:</span> <span class="text-slate-800">${socialLinks.github.replace('https://', '')}</span>
            </div>
          ` : ''}
          ${socialLinks?.linkedin ? `
            <div class="flex items-center gap-1">
              <span class="text-[#4F46E5] opacity-70">LinkedIn:</span> <span class="text-slate-800">${socialLinks.linkedin.replace('https://www.', '').replace('https://', '')}</span>
            </div>
          ` : ''}
        </div>
      </header>

      <!-- Main Layout Grid -->
      <div class="grid grid-cols-[1.2fr_1fr] gap-8 items-stretch" style="min-height: 800px; height: auto; min-height: fit-content; overflow: visible;">
        <!-- Left Column (Main Content) -->
        <div class="flex flex-col gap-5" style="border-right: 1px solid #f1f5f9; padding-right: 20px; height: auto; min-height: fit-content; overflow: visible; flex-grow: 1;">
          <!-- Summary -->
          ${about ? `
            <section style="page-break-inside: avoid; break-inside: avoid; height: auto; min-height: fit-content; overflow: visible;">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-[8.5px] font-black text-[#4F46E5] uppercase tracking-[0.2em]">01 // Professional Summary</span>
                <div class="flex-grow h-[1px] bg-slate-100"></div>
              </div>
              <p class="text-[10.5px] leading-relaxed text-slate-600 font-medium" style="word-wrap: break-word; overflow-wrap: break-word;">
                ${about}
              </p>
            </section>
          ` : ''}

          <!-- Experience -->
          ${experienceHtml ? `
            <section style="page-break-inside: avoid; break-inside: avoid; height: auto; min-height: fit-content; overflow: visible;">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-[8.5px] font-black text-[#4F46E5] uppercase tracking-[0.2em]">02 // Experience</span>
                <div class="flex-grow h-[1px] bg-slate-100"></div>
              </div>
              <div class="space-y-3" style="word-wrap: break-word; overflow-wrap: break-word;">
                ${experienceHtml}
              </div>
            </section>
          ` : ''}

          <!-- Certifications -->
          ${certificatesHtml ? `
            <section style="page-break-inside: avoid; break-inside: avoid; height: auto; min-height: fit-content; overflow: visible;">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-[8.5px] font-black text-[#4F46E5] uppercase tracking-[0.2em]">03 // Certificates</span>
                <div class="flex-grow h-[1px] bg-slate-100"></div>
              </div>
              <div style="word-wrap: break-word; overflow-wrap: break-word;">
                ${certificatesHtml}
              </div>
            </section>
          ` : ''}
        </div>

        <!-- Right Column (Sidebar) -->
        <div class="flex flex-col gap-5" style="height: auto; min-height: fit-content; overflow: visible; flex-grow: 1;">
          <!-- Skills -->
          ${skillsHtml ? `
            <section style="page-break-inside: avoid; break-inside: avoid; height: auto; min-height: fit-content; overflow: visible;">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-[8.5px] font-black text-[#4F46E5] uppercase tracking-[0.2em]">04 // Technical Stack</span>
                <div class="flex-grow h-[1px] bg-slate-100"></div>
              </div>
              <div class="flex flex-wrap" style="word-wrap: break-word; overflow-wrap: break-word;">
                ${skillsHtml}
              </div>
            </section>
          ` : ''}

          <!-- Projects -->
          ${projectsHtml ? `
            <section style="page-break-inside: avoid; break-inside: avoid; height: auto; min-height: fit-content; overflow: visible;">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-[8.5px] font-black text-[#4F46E5] uppercase tracking-[0.2em]">05 // Projects</span>
                <div class="flex-grow h-[1px] bg-slate-100"></div>
              </div>
              <div class="space-y-3" style="word-wrap: break-word; overflow-wrap: break-word;">
                ${projectsHtml}
              </div>
            </section>
          ` : ''}

          <!-- Education -->
          ${educationHtml ? `
            <section style="page-break-inside: avoid; break-inside: avoid; height: auto; min-height: fit-content; overflow: visible;">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-[8.5px] font-black text-[#4F46E5] uppercase tracking-[0.2em]">06 // Education</span>
                <div class="flex-grow h-[1px] bg-slate-100"></div>
              </div>
              <div style="word-wrap: break-word; overflow-wrap: break-word;">
                ${educationHtml}
              </div>
            </section>
          ` : ''}

          <!-- Personality Note -->
          ${achievements && achievements.length > 0 ? `
            <section class="mt-auto pt-5 border-t border-slate-100" style="page-break-inside: avoid; break-inside: avoid; height: auto; min-height: fit-content; overflow: visible;">
              ${achievements.map(ach => `
                <p class="text-[9.5px] text-slate-500 leading-relaxed italic font-medium" style="word-wrap: break-word; overflow-wrap: break-word;">
                  "${ach}"
                </p>
              `).join('')}
            </section>
          ` : ''}
        </div>
      </div>
    `;

    document.body.appendChild(resumeContainer);

    // 4. Capture with html2canvas
    const canvas = await html2canvas(resumeContainer, {
      scale: 2, // High resolution output
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: resumeContainer.scrollWidth,
      windowHeight: resumeContainer.scrollHeight
    });

    const imgData = canvas.toDataURL('image/png');
    
    // 5. Generate PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
    const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm
    
    const imgWidth = pdfWidth; // 210
    const imgHeight = (canvas.height / canvas.width) * imgWidth;
    const pageHeightPx = (canvas.width * pdfHeight) / imgWidth;
    
    let heightLeft = canvas.height;
    let positionPx = 0;
    let page = 0;
    
    while (heightLeft > 0) {
      if (page > 0) {
        pdf.addPage();
      }
      
      const positionMm = -(positionPx / canvas.width) * imgWidth;
      pdf.addImage(imgData, 'PNG', 0, positionMm, imgWidth, imgHeight, undefined, 'FAST');
      
      positionPx += pageHeightPx;
      heightLeft -= pageHeightPx;
      page++;
    }
    
    // 6. Save PDF
    pdf.save('Anamika_Pandey_Resume.pdf');

    // 7. Cleanup DOM elements
    document.body.removeChild(resumeContainer);

    // 8. Update toast to Success state
    toast.className = 'fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl bg-emerald-950/95 border-emerald-500/30 text-emerald-200 transition-all duration-300';
    toast.innerHTML = `
      <div class="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <div class="flex flex-col text-left">
        <span class="text-[9px] uppercase font-black tracking-widest opacity-50">System Action</span>
        <span class="text-xs font-semibold">Resume downloaded successfully!</span>
      </div>
    `;

    setTimeout(() => {
      toast.remove();
    }, 4000);

  } catch (error) {
    console.error('PDF Generation Error:', error);
    
    // Update toast to Error state
    toast.className = 'fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl bg-rose-950/95 border-rose-500/30 text-rose-200 transition-all duration-300';
    toast.innerHTML = `
      <div class="p-1.5 rounded-lg bg-rose-500/20 text-rose-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
      </div>
      <div class="flex flex-col text-left">
        <span class="text-[9px] uppercase font-black tracking-widest opacity-50">System Error</span>
        <span class="text-xs font-semibold">Failed to generate PDF. Check console.</span>
      </div>
    `;

    setTimeout(() => {
      toast.remove();
    }, 5000);
  }
};
