import { portfolioData } from '../data/portfolioData';

export const generateResumePDF = async (templateId: string = 'modern'): Promise<void> => {
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
      <span class="text-xs font-semibold">Generating ATS resume PDF...</span>
    </div>
  `;
  document.body.appendChild(toast);

  try {
    const [jsPDFModule, html2canvasModule] = await Promise.all([
      import('jspdf'),
      import('html2canvas')
    ]);
    const jsPDF = jsPDFModule.jsPDF;
    const html2canvas = html2canvasModule.default;

    // Create offscreen multi-page container
    const resumeWrapper = document.createElement('div');
    resumeWrapper.style.position = 'fixed';
    resumeWrapper.style.left = '-9999px';
    resumeWrapper.style.top = '0';
    resumeWrapper.style.zIndex = '-9999';
    resumeWrapper.style.display = 'flex';
    resumeWrapper.style.flexDirection = 'column';
    resumeWrapper.style.gap = '40px';

    // Base Page Style (Exact A4 ratio: 794px width x 1123px height)
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

    // Section Header Helper
    const makeSectionHeader = (title: string) => `
      <div style="border-bottom: 1.5px solid #0f172a; padding-bottom: 2px; margin-top: 13px; margin-bottom: 8px;">
        <h2 style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; color: #0f172a; margin: 0;">${title}</h2>
      </div>
    `;

    // ==========================================
    // PAGE 1
    // ==========================================
    const page1 = document.createElement('div');
    page1.className = 'resume-page';
    page1.style.cssText = pageStyle;
    page1.innerHTML = `
      <!-- Header -->
      <header style="margin-bottom: 2px;">
        <h1 style="font-size: 26px; font-weight: 800; color: #1e3a8a; letter-spacing: -0.01em; margin: 0 0 2px 0; line-height: 1.1;">
          Anamika Pandey
        </h1>
        <p style="font-size: 11px; font-weight: 700; color: #0284c7; letter-spacing: 0.08em; margin: 0 0 7px 0; text-transform: uppercase;">
          FRONTEND DEVELOPER
        </p>
        <div style="font-size: 9px; line-height: 1.5; color: #0284c7; font-weight: 500;">
          <span style="color: #475569;">Delhi, India</span> <span style="color: #cbd5e1;">|</span> 
          <span>+91 8797735545</span> <span style="color: #cbd5e1;">|</span> 
          <span>anamika758287@gmail.com</span> <span style="color: #cbd5e1;">|</span> 
          <span>linkedin.com/in/anamika-pandey-96598b228</span> <span style="color: #cbd5e1;">|</span> 
          <span>github.com/anamika-pandey925</span> <span style="color: #cbd5e1;">|</span> 
          <span>fiverr.com/anamikapande437</span> <span style="color: #cbd5e1;">|</span> 
          <span>leetcode.com/u/Anamaika</span>
        </div>
      </header>

      <!-- 1. PROFESSIONAL SUMMARY -->
      ${makeSectionHeader('PROFESSIONAL SUMMARY')}
      <p style="font-size: 9.5px; line-height: 1.55; color: #1e293b; margin: 0; font-weight: 400; text-align: justify;">
        MCA graduate from Galgotias University (CGPA: 7.96) and BCA graduate (CGPA: 8.28 / 82.8%) with hands-on experience building responsive, high-performance web applications using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Proven ability to deliver production-ready UI components, integrate REST APIs, and create accessible, cross-browser-compatible interfaces. Seeking a frontend development role where clean architecture and precise UI execution drive measurable user impact.
      </p>
      <!-- 2. TECHNICAL SKILLS -->
      ${makeSectionHeader('TECHNICAL SKILLS')}
      <div style="display: flex; flex-direction: column; gap: 4px; font-size: 9.5px;">
        <div style="display: flex; align-items: baseline;">
          <span style="width: 170px; font-weight: 700; color: #0f172a; flex-shrink: 0;">Languages</span>
          <span style="color: #1e293b; font-weight: 400;">JavaScript (ES6+), HTML5, CSS3</span>
        </div>
        <div style="display: flex; align-items: baseline;">
          <span style="width: 170px; font-weight: 700; color: #0f172a; flex-shrink: 0;">Frameworks &amp; Libraries</span>
          <span style="color: #1e293b; font-weight: 400;">React.js, Tailwind CSS, Framer Motion</span>
        </div>
        <div style="display: flex; align-items: baseline;">
          <span style="width: 170px; font-weight: 700; color: #0f172a; flex-shrink: 0;">UI / UX Design</span>
          <span style="color: #1e293b; font-weight: 400;">Figma, Responsive Design, UI/UX Principles</span>
        </div>
        <div style="display: flex; align-items: baseline;">
          <span style="width: 170px; font-weight: 700; color: #0f172a; flex-shrink: 0;">Tools &amp; Platforms</span>
          <span style="color: #1e293b; font-weight: 400;">Vite, Firebase, Git, GitHub</span>
        </div>
        <div style="display: flex; align-items: baseline;">
          <span style="width: 170px; font-weight: 700; color: #0f172a; flex-shrink: 0;">Concepts</span>
          <span style="color: #1e293b; font-weight: 400;">REST API Integration, Component-Based Architecture, Cross-Browser Compatibility, Performance Optimization, Accessibility</span>
        </div>
      </div>
      <!-- 3. EXPERIENCE -->
      ${makeSectionHeader('EXPERIENCE')}
      <div style="display: flex; flex-direction: column; gap: 9px;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1px;">
            <span style="font-size: 10.5px; font-weight: 700; color: #0f172a;">Freelance Frontend Developer</span>
            <span style="font-size: 9px; font-weight: 500; color: #475569;">Sep 2023 – Present</span>
          </div>
          <div style="font-size: 9px; font-weight: 700; color: #0284c7; margin-bottom: 2px;">
            Self-Employed · Delhi, India
          </div>
          <ul style="margin: 0; padding-left: 14px; font-size: 9px; line-height: 1.45; color: #1e293b; font-weight: 400;">
            <li>Designed and delivered lightweight, responsive websites for multiple clients across various industries.</li>
            <li>Implemented clean styling and smooth CSS transitions to enhance user engagement and visual polish.</li>
          </ul>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1px;">
            <span style="font-size: 10.5px; font-weight: 700; color: #0f172a;">Web Development Intern (Frontend)</span>
            <span style="font-size: 9px; font-weight: 500; color: #475569;">Sep 2025 – Oct 2025</span>
          </div>
          <div style="font-size: 9px; font-weight: 700; color: #0284c7; margin-bottom: 2px;">
            Labmentix Pvt. Ltd. · Remote
          </div>
          <ul style="margin: 0; padding-left: 14px; font-size: 9px; line-height: 1.45; color: #1e293b; font-weight: 400;">
            <li>Developed responsive, dynamic React.js components for core web portals, improving UI modularity and reusability.</li>
            <li>Collaborated on REST API integration and state management workflows, ensuring seamless data flow across components.</li>
            <li>Enhanced UI layouts with Tailwind CSS, delivering pixel-accurate designs consistent with Figma mockups.</li>
          </ul>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1px;">
            <span style="font-size: 10.5px; font-weight: 700; color: #0f172a;">Client Website Developer</span>
            <span style="font-size: 9px; font-weight: 500; color: #475569;">Aug 2025 – Sep 2025</span>
          </div>
          <div style="font-size: 9px; font-weight: 700; color: #0284c7; margin-bottom: 2px;">
            Step Up Dance Academy · Delhi, India
          </div>
          <ul style="margin: 0; padding-left: 14px; font-size: 9px; line-height: 1.45; color: #1e293b; font-weight: 400;">
            <li>Designed and launched a full-featured interactive web portal for a dance academy client.</li>
            <li>Implemented branch directories, wedding choreography highlights, online booking requests, and dynamic trainer schedule pages.</li>
            <li>Delivered a mobile-responsive interface ensuring consistent experience across all screen sizes.</li>
          </ul>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1px;">
            <span style="font-size: 10.5px; font-weight: 700; color: #0f172a;">Frontend Development Intern</span>
            <span style="font-size: 9px; font-weight: 500; color: #475569;">Feb 2025 – Mar 2025</span>
          </div>
          <div style="font-size: 9px; font-weight: 700; color: #0284c7; margin-bottom: 2px;">
            Codtech IT Solutions · Remote
          </div>
          <ul style="margin: 0; padding-left: 14px; font-size: 9px; line-height: 1.45; color: #1e293b; font-weight: 400;">
            <li>Completed a structured frontend internship focused on React.js component architecture and reusable UI patterns.</li>
            <li>Built custom form components and implemented responsive CSS layouts, adhering to modern web standards.</li>
          </ul>
        </div>
      </div>
      <!-- 4. PROJECTS -->
      ${makeSectionHeader('PROJECTS')}
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div>
          <div style="font-size: 10px; font-weight: 700; color: #0f172a; margin-bottom: 1px;">
            Step Up Dance Academy – Client Portal
          </div>
          <div style="font-size: 8.5px; font-weight: 700; color: #0284c7; margin-bottom: 2px;">
            Tech Stack: React.js, Firebase, Tailwind CSS, HTML5, JavaScript
          </div>
          <p style="font-size: 9px; line-height: 1.45; color: #1e293b; margin: 0; font-weight: 400;">
            Full-featured client website for a multi-branch dance academy. Features include branch directories, event listings, student reviews, booking requests, and customized trainer schedules. Deployed with Firebase backend.
          </p>
        </div>
        <div>
          <div style="font-size: 10px; font-weight: 700; color: #0f172a; margin-bottom: 1px;">
            Portfolio Website
          </div>
          <div style="font-size: 8.5px; font-weight: 700; color: #0284c7; margin-bottom: 2px;">
            Tech Stack: React.js, Vite, Tailwind CSS, Framer Motion
          </div>
          <p style="font-size: 9px; line-height: 1.45; color: #1e293b; margin: 0; font-weight: 400;">
            Personal developer portfolio with dark/light theme toggle, animated page transitions using Framer Motion, and optimized performance via Vite build tooling.
          </p>
        </div>
        <div>
          <div style="font-size: 10px; font-weight: 700; color: #0f172a; margin-bottom: 1px;">
            Interactive Quiz Application
          </div>
          <div style="font-size: 8.5px; font-weight: 700; color: #0284c7; margin-bottom: 2px;">
            Tech Stack: JavaScript, HTML5, CSS3
          </div>
          <p style="font-size: 9px; line-height: 1.45; color: #1e293b; margin: 0; font-weight: 400;">
            Dynamic online quiz platform featuring real-time timer controls, progress tracking indicators, and detailed performance score sheets. Built with vanilla JavaScript.
          </p>
        </div>
      </div>
    `;
    // ==========================================
    // PAGE 2
    // ==========================================
    const page2 = document.createElement('div');
    page2.className = 'resume-page';
    page2.style.cssText = pageStyle;
    page2.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 8px;">
        <div>
          <div style="font-size: 10px; font-weight: 700; color: #0f172a; margin-bottom: 1px;">
            E-Learning Platform UI
          </div>
          <div style="font-size: 8.5px; font-weight: 700; color: #0284c7; margin-bottom: 2px;">
            Tech Stack: HTML5, CSS3, JavaScript
          </div>
          <p style="font-size: 9px; line-height: 1.45; color: #1e293b; margin: 0; font-weight: 400;">
            Responsive UI for an online learning portal featuring interactive course catalogs, responsive grid layouts, and sidebar navigation components.
          </p>
        </div>
        <div>
          <div style="font-size: 10px; font-weight: 700; color: #0f172a; margin-bottom: 1px;">
            Suraksha – Women Safety Web App
          </div>
          <div style="font-size: 8.5px; font-weight: 700; color: #0284c7; margin-bottom: 2px;">
            Tech Stack: React.js, Tailwind CSS, JavaScript, HTML5
          </div>
          <p style="font-size: 9px; line-height: 1.45; color: #1e293b; margin: 0; font-weight: 400;">
            Community-focused web platform providing safety tools, information hubs, and resource links to support women. Designed with accessibility and ease of use as primary goals.
          </p>
        </div>
      </div>
      ${makeSectionHeader('CERTIFICATIONS')}
      <div style="display: flex; flex-direction: column; gap: 5px; font-size: 9.5px; margin-bottom: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <span style="font-weight: 600; color: #0f172a;">Frontend Web Development Internship Certificate</span>
          <span style="color: #475569; font-weight: 500;">Codtech IT Solutions | Feb 2025</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <span style="font-weight: 600; color: #0f172a;">Web Development Internship Certificate</span>
          <span style="color: #475569; font-weight: 500;">Labmentix Pvt. Ltd. | Sep 2025</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <span style="font-weight: 600; color: #0f172a;">Hackathon Excellence Certificate</span>
          <span style="color: #475569; font-weight: 500;">Codtech IT Solutions | Jan 2025</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <span style="font-weight: 600; color: #0f172a;">SQL Joins Micro-Certification</span>
          <span style="color: #475569; font-weight: 500;">Cuvette Tech | Oct 2025</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <span style="font-weight: 600; color: #0f172a;">Project Training Completion Certificate</span>
          <span style="color: #475569; font-weight: 500;">Shree Laxmi Industries | Aug 2025</span>
        </div>
      </div>
      ${makeSectionHeader('EDUCATION')}
      <div style="display: flex; flex-direction: column; gap: 8px; font-size: 9.5px;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span style="font-weight: 700; color: #0f172a;">Master of Computer Applications (MCA)</span>
            <span style="font-weight: 600; color: #475569;">2024 – 2026</span>
          </div>
          <div style="color: #475569; font-weight: 500; margin-top: 1px;">
            Galgotias University | CGPA 7.96
          </div>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span style="font-weight: 700; color: #0f172a;">Bachelor of Computer Applications (BCA)</span>
            <span style="font-weight: 600; color: #475569;">2020 – 2023</span>
          </div>
          <div style="color: #475569; font-weight: 500; margin-top: 1px;">
            Bharati Vidyapeeth | CGPA 8.28
          </div>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span style="font-weight: 700; color: #0f172a;">Senior School Certificate Examination (Class XII)</span>
            <span style="font-weight: 600; color: #475569;">2020</span>
          </div>
          <div style="color: #475569; font-weight: 500; margin-top: 1px;">
            Rajkiye Pratibha Vikas Vidyalaya Paschim Vihar A-6 (CBSE)
          </div>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span style="font-weight: 700; color: #0f172a;">Secondary School Examination (Class X)</span>
            <span style="font-weight: 600; color: #475569;">2018</span>
          </div>
          <div style="color: #475569; font-weight: 500; margin-top: 1px;">
            Rajkiye Pratibha Vikas Vidyalaya Paschim Vihar A-6 (CBSE)
          </div>
        </div>
      </div>
    `;

    // Append both pages to wrapper
    resumeWrapper.appendChild(page1);
    resumeWrapper.appendChild(page2);
    document.body.appendChild(resumeWrapper);

    // Initialize jsPDF (A4 format)
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pages = resumeWrapper.querySelectorAll<HTMLElement>('.resume-page');

    for (let i = 0; i < pages.length; i++) {
      if (i > 0) {
        pdf.addPage();
      }

      const canvas = await html2canvas(pages[i], {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: 794,
        height: 1123
      });

      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
    }

    pdf.save('Anamika_Pandey_Resume.pdf');
    document.body.removeChild(resumeWrapper);

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
