import { portfolioData } from '../data/portfolioData';

export const generateResumePDF = async (_templateId: string = 'modern'): Promise<void> => {
  // ── Toast Loader ──────────────────────────────────────────────────────────
  const toast = document.createElement('div');
  toast.className =
    'fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl bg-indigo-950/95 border-indigo-500/30 text-indigo-200 transition-all duration-300';
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
      <span class="text-xs font-semibold">Generating ATS resume PDF...</span>
    </div>
  `;
  document.body.appendChild(toast);

  try {
    const [jsPDFModule, html2canvasModule] = await Promise.all([
      import('jspdf'),
      import('html2canvas'),
    ]);
    const jsPDF = jsPDFModule.jsPDF;
    const html2canvas = html2canvasModule.default;

    // ── Pull live data from portfolioData ────────────────────────────────────
    const { name, role, contact, socialLinks, skills, internships, projects, certificates, education } = portfolioData;

    // ── Derived skill groups from portfolioData.skills ───────────────────────
    const frontendSkills = skills.filter(s => s.category === 'Frontend').map(s => s.name).join(', ');
    const uiSkills      = skills.filter(s => s.category === 'UI / Styling').map(s => s.name).join(', ');
    const backendSkills = skills.filter(s => s.category === 'Backend / Services').map(s => s.name).join(', ');
    const toolSkills    = skills.filter(s => s.category === 'Tools').map(s => s.name).join(', ');

    // ── Helper: escape HTML special chars ───────────────────────────────────
    const esc = (str: string) =>
      str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // ── A4 page style ────────────────────────────────────────────────────────
    const pageStyle = `
      width: 794px;
      height: 1123px;
      padding: 44px 48px;
      background-color: #ffffff;
      color: #0f172a;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      overflow: hidden;
    `;

    // ── Section header HTML ──────────────────────────────────────────────────
    const makeSectionHeader = (title: string) => `
      <div style="border-bottom: 1.5px solid #0f172a; padding-bottom: 2px; margin-top: 13px; margin-bottom: 8px;">
        <h2 style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; color: #0f172a; margin: 0;">${title}</h2>
      </div>
    `;

    // ── Build project entry HTML ─────────────────────────────────────────────
    const makeProjectEntry = (p: typeof projects[0]) => {
      const techLine = (p.technology ?? p.tech ?? []).join(', ');
      const desc = p.solution ?? p.description;
      return `
        <div>
          <div style="font-size: 10px; font-weight: 700; color: #0f172a; margin-bottom: 1px;">
            ${esc(p.title)}${p.subtitle ? ` – ${esc(p.subtitle)}` : ''}
          </div>
          <div style="font-size: 8.5px; font-weight: 700; color: #0284c7; margin-bottom: 2px;">
            Tech Stack: ${esc(techLine)}
          </div>
          <p style="font-size: 9px; line-height: 1.45; color: #1e293b; margin: 0; font-weight: 400;">
            ${esc(desc)}
          </p>
        </div>
      `;
    };

    // ── Build experience entry HTML ──────────────────────────────────────────
    const makeExpEntry = (exp: typeof internships[0]) => `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1px;">
          <span style="font-size: 10.5px; font-weight: 700; color: #0f172a;">${esc(exp.role)}</span>
          <span style="font-size: 9px; font-weight: 500; color: #475569;">${esc(exp.period)}</span>
        </div>
        <div style="font-size: 9px; font-weight: 700; color: #0284c7; margin-bottom: 2px;">
          ${esc(exp.company)} · ${esc(exp.location)}
        </div>
        <ul style="margin: 0; padding-left: 14px; font-size: 9px; line-height: 1.45; color: #1e293b; font-weight: 400;">
          ${exp.responsibilities.map(r => `<li>${esc(r)}</li>`).join('')}
        </ul>
      </div>
    `;

    // ── Build cert entry HTML ────────────────────────────────────────────────
    const makeCertEntry = (c: typeof certificates[0]) => `
      <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <span style="font-weight: 600; color: #0f172a; font-size: 9.5px;">${esc(c.title)}</span>
        <span style="color: #475569; font-weight: 500; font-size: 9px;">${esc(c.organization)} | ${esc(c.date)}</span>
      </div>
    `;

    // ── Build education entry HTML ────────────────────────────────────────────
    const makeEduEntry = (e: typeof education[0]) => `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <span style="font-weight: 700; color: #0f172a; font-size: 9.5px;">${esc(e.degree)}</span>
          <span style="font-weight: 600; color: #475569; font-size: 9px;">${esc(e.period)}</span>
        </div>
        <div style="color: #475569; font-weight: 500; margin-top: 1px; font-size: 9px;">
          ${esc(e.institution)}${e.cgpa ? ` | CGPA ${esc(e.cgpa)}` : ''}
        </div>
      </div>
    `;

    // ── Contact line ─────────────────────────────────────────────────────────
    const sep = `<span style="color: #cbd5e1;">|</span>`;
    const linkedinHandle = socialLinks.linkedin.replace('https://www.linkedin.com/in/', 'linkedin.com/in/');
    const githubHandle   = socialLinks.github.replace('https://github.com/', 'github.com/');
    const leetcodeHandle = socialLinks.leetcode.replace('https://leetcode.com/u/', 'leetcode.com/u/');

    // ── Projects split for page layout ────────────────────────────────────────
    // Page 1 shows top 4 projects, Page 2 shows the rest
    const page1Projects = projects.slice(0, 4);
    const page2Projects = projects.slice(4);

    // Sort internships: Freelance first (shows longest tenure), then rest by period descending
    const sortedInternships = [...internships].sort((a, b) => {
      if (a.type === 'Freelance') return -1;
      if (b.type === 'Freelance') return 1;
      return 0;
    });

    // ── Offscreen wrapper ────────────────────────────────────────────────────
    const resumeWrapper = document.createElement('div');
    resumeWrapper.style.cssText = `
      position: fixed;
      left: -9999px;
      top: 0;
      z-index: -9999;
      display: flex;
      flex-direction: column;
      gap: 40px;
    `;

    // ════════════════════════════════════════════════════════════════════════
    // PAGE 1
    // ════════════════════════════════════════════════════════════════════════
    const page1 = document.createElement('div');
    page1.className = 'resume-page';
    page1.style.cssText = pageStyle;
    page1.innerHTML = `
      <!-- HEADER (from portfolioData.contact & socialLinks) -->
      <header style="margin-bottom: 2px;">
        <h1 style="font-size: 26px; font-weight: 800; color: #1e3a8a; letter-spacing: -0.01em; margin: 0 0 2px 0; line-height: 1.1;">
          ${esc(name)}
        </h1>
        <p style="font-size: 11px; font-weight: 700; color: #0284c7; letter-spacing: 0.08em; margin: 0 0 7px 0; text-transform: uppercase;">
          ${esc(role)}
        </p>
        <div style="font-size: 9px; line-height: 1.6; color: #0284c7; font-weight: 500; display: flex; flex-wrap: wrap; gap: 4px; align-items: center;">
          <span style="color: #475569;">${esc(contact.location)}</span> ${sep}
          <span>${esc(contact.phone)}</span> ${sep}
          <span>${esc(contact.email)}</span> ${sep}
          <span>${esc(linkedinHandle)}</span> ${sep}
          <span>${esc(githubHandle)}</span> ${sep}
          <span>${esc(leetcodeHandle)}</span>
        </div>
      </header>

      <!-- 1. PROFESSIONAL SUMMARY -->
      ${makeSectionHeader('PROFESSIONAL SUMMARY')}
      <p style="font-size: 9.5px; line-height: 1.55; color: #1e293b; margin: 0; font-weight: 400; text-align: justify;">
        ${esc(portfolioData.about.bio)} ${esc(portfolioData.about.details)}
      </p>

      <!-- 2. TECHNICAL SKILLS (from portfolioData.skills) -->
      ${makeSectionHeader('TECHNICAL SKILLS')}
      <div style="display: flex; flex-direction: column; gap: 4px; font-size: 9.5px;">
        <div style="display: flex; align-items: baseline;">
          <span style="width: 170px; font-weight: 700; color: #0f172a; flex-shrink: 0;">Languages &amp; Core</span>
          <span style="color: #1e293b; font-weight: 400;">${esc(frontendSkills)}</span>
        </div>
        <div style="display: flex; align-items: baseline;">
          <span style="width: 170px; font-weight: 700; color: #0f172a; flex-shrink: 0;">UI / Styling</span>
          <span style="color: #1e293b; font-weight: 400;">${esc(uiSkills)}</span>
        </div>
        <div style="display: flex; align-items: baseline;">
          <span style="width: 170px; font-weight: 700; color: #0f172a; flex-shrink: 0;">Backend / Services</span>
          <span style="color: #1e293b; font-weight: 400;">${esc(backendSkills)}</span>
        </div>
        <div style="display: flex; align-items: baseline;">
          <span style="width: 170px; font-weight: 700; color: #0f172a; flex-shrink: 0;">Tools &amp; Platforms</span>
          <span style="color: #1e293b; font-weight: 400;">${esc(toolSkills)}, Netlify, Vercel</span>
        </div>
        <div style="display: flex; align-items: baseline;">
          <span style="width: 170px; font-weight: 700; color: #0f172a; flex-shrink: 0;">Concepts</span>
          <span style="color: #1e293b; font-weight: 400;">REST API Integration, Component-Based Architecture, Cross-Browser Compatibility, Performance Optimization, Accessibility (a11y)</span>
        </div>
      </div>

      <!-- 3. EXPERIENCE (from portfolioData.internships) -->
      ${makeSectionHeader('EXPERIENCE')}
      <div style="display: flex; flex-direction: column; gap: 9px;">
        ${sortedInternships.map(makeExpEntry).join('')}
      </div>

      <!-- 4. PROJECTS — Page 1 (top 4 from portfolioData.projects) -->
      ${makeSectionHeader('PROJECTS')}
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${page1Projects.map(makeProjectEntry).join('')}
      </div>
    `;

    // ════════════════════════════════════════════════════════════════════════
    // PAGE 2
    // ════════════════════════════════════════════════════════════════════════
    const page2 = document.createElement('div');
    page2.className = 'resume-page';
    page2.style.cssText = pageStyle;
    page2.innerHTML = `
      <!-- Continued PROJECTS (remaining from portfolioData.projects) -->
      ${page2Projects.length > 0 ? `
      <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 8px;">
        ${page2Projects.map(makeProjectEntry).join('')}
      </div>` : ''}

      <!-- CERTIFICATIONS (from portfolioData.certificates) -->
      ${makeSectionHeader('CERTIFICATIONS')}
      <div style="display: flex; flex-direction: column; gap: 5px; margin-bottom: 10px;">
        ${certificates.map(makeCertEntry).join('')}
      </div>

      <!-- EDUCATION (from portfolioData.education) -->
      ${makeSectionHeader('EDUCATION')}
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${education.map(makeEduEntry).join('')}
      </div>
    `;

    // ── Render & export PDF ───────────────────────────────────────────────────
    resumeWrapper.appendChild(page1);
    resumeWrapper.appendChild(page2);
    document.body.appendChild(resumeWrapper);

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pages = resumeWrapper.querySelectorAll<HTMLElement>('.resume-page');

    for (let i = 0; i < pages.length; i++) {
      if (i > 0) pdf.addPage();
      const canvas = await html2canvas(pages[i], {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: 794,
        height: 1123,
      });
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
    }

    pdf.save(`${name.replace(/\s+/g, '_')}_Resume.pdf`);
    document.body.removeChild(resumeWrapper);

    // ── Success toast ─────────────────────────────────────────────────────────
    toast.className =
      'fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl bg-emerald-950/95 border-emerald-500/30 text-emerald-200 transition-all duration-300';
    toast.innerHTML = `
      <div class="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <div class="flex flex-col text-left">
        <span class="text-[9px] uppercase font-black tracking-widest opacity-50">System Action</span>
        <span class="text-xs font-semibold">Resume downloaded successfully!</span>
      </div>
    `;
    setTimeout(() => toast.remove(), 4000);

  } catch (error) {
    console.error('PDF Generation Error:', error);
    toast.className =
      'fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl bg-rose-950/95 border-rose-500/30 text-rose-200 transition-all duration-300';
    toast.innerHTML = `
      <div class="p-1.5 rounded-lg bg-rose-500/20 text-rose-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
      </div>
      <div class="flex flex-col text-left">
        <span class="text-[9px] uppercase font-black tracking-widest opacity-50">System Error</span>
        <span class="text-xs font-semibold">Failed to generate PDF. Check console.</span>
      </div>
    `;
    setTimeout(() => toast.remove(), 5000);
  }
};
