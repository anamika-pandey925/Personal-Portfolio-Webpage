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
      <span class="text-xs font-semibold">Generating resume PDF...</span>
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
    resumeContainer.style.fontFamily = "'Inter', system-ui, -apple-system, sans-serif";
    resumeContainer.style.boxSizing = 'border-box';
    resumeContainer.style.zIndex = '-9999';

    if (templateId === 'modern') {
      resumeContainer.style.padding = '45px 50px';

      // Header details:
      const fiverrClean = socialLinks.fiverr ? socialLinks.fiverr.replace('https://', '') : '';
      const leetcodeClean = socialLinks.leetcode ? socialLinks.leetcode.replace('https://', '') : '';
      
      const contactDetails = [
        contact.location,
        contact.phone ? `+91 ${contact.phone.replace('+91', '').replace('91', '').trim()}` : '',
        contact.email,
        socialLinks.linkedin ? socialLinks.linkedin.replace('https://www.linkedin.com/in/', 'linkedin.com/in/').replace('https://', '') : '',
        socialLinks.github ? socialLinks.github.replace('https://', '') : '',
        fiverrClean ? `fiverr.com/users/anamikapande437/manage_gigs?current_filter=active` : '',
        leetcodeClean ? `leetcode.com/u/Anamaika/` : ''
      ].filter(Boolean).join(' | ');

      const cvEducationHtml = education
        ? education.map((edu, idx) => {
            let inst = edu.institution;
            if (inst.includes('Bharati Vidyapeeth')) {
              inst = 'Bharati Vidyapeeth';
            }
            if (inst.includes('Rajkiye Pratibha Vikas Vidyalaya')) {
              inst = 'Rajkiye Pratibha Vikas Vidyalaya Paschim Vihar A-6 (CBSE)';
            }
            
            let gradeStr = '';
            if (edu.grade) {
              const cleanGrade = edu.grade.replace('A Grade', '').replace('Grade:', '').replace('(', '').replace(')', '').trim();
              gradeStr = ` | ${cleanGrade}`;
            }

            return `
              <div class="${idx > 0 ? 'mt-3' : ''}">
                <div class="flex justify-between items-baseline mb-0.5">
                  <h4 class="font-extrabold text-[#0f172a] text-[10.5px]">
                    ${edu.degree}
                  </h4>
                  <span class="text-[9px] font-bold text-slate-500">${edu.period}</span>
                </div>
                <div class="text-[9.5px] text-slate-600 font-semibold">
                  ${inst}${gradeStr}
                </div>
              </div>
            `;
          }).join('')
        : '';

      const categorizeSkills = (skillsArray: { name: string; level: number }[]) => {
        const categories = {
          Languages: [] as string[],
          Frameworks: [] as string[],
          Tools: [] as string[],
          Design: [] as string[]
        };

        skillsArray.forEach(s => {
          const nameLower = s.name.toLowerCase();
          if (nameLower.includes('javascript') || nameLower.includes('typescript') || nameLower.includes('html') || nameLower.includes('css') || nameLower.includes('python') || nameLower.includes('java') || nameLower.includes('c++') || nameLower.includes('sql')) {
            categories.Languages.push(s.name);
          } else if (nameLower.includes('react') || nameLower.includes('expo') || nameLower.includes('tailwind') || nameLower.includes('framer') || nameLower.includes('vite') || nameLower.includes('next.js') || nameLower.includes('fiber') || nameLower.includes('three.js')) {
            categories.Frameworks.push(s.name);
          } else if (nameLower.includes('figma') || nameLower.includes('git') || nameLower.includes('github') || nameLower.includes('firebase') || nameLower.includes('razorpay') || nameLower.includes('vercel') || nameLower.includes('netlify')) {
            categories.Tools.push(s.name);
          } else {
            categories.Design.push(s.name);
          }
        });

        return categories;
      };

      const skillCats = categorizeSkills(skills);
      const cvSkillsHtml = `
        <tr class="align-top">
          <td class="w-36 font-bold text-slate-800 pb-2">Languages</td>
          <td class="text-slate-600 font-medium pb-2">${skillCats.Languages.join(', ')}</td>
        </tr>
        <tr class="align-top">
          <td class="w-36 font-bold text-slate-800 pb-2">Frameworks & Libraries</td>
          <td class="text-slate-600 font-medium pb-2">${skillCats.Frameworks.join(', ')}</td>
        </tr>
        <tr class="align-top">
          <td class="w-36 font-bold text-slate-800 pb-2">Tools & Platforms</td>
          <td class="text-slate-600 font-medium pb-2">${skillCats.Tools.join(', ')}</td>
        </tr>
        <tr class="align-top">
          <td class="w-36 font-bold text-slate-800 pb-2">Design & Concepts</td>
          <td class="text-slate-600 font-medium pb-2">${skillCats.Design.join(', ')}</td>
        </tr>
      `;

      const cvExperienceHtml = internships
        ? internships.map((job, idx) => {
            const bullets = job.description
              .split('.')
              .map(b => b.trim())
              .filter(Boolean);
            
            return `
              <div class="${idx > 0 ? 'mt-4' : ''}">
                <div class="flex justify-between items-baseline mb-0.5">
                  <h4 class="font-extrabold text-[#0f172a] text-[11px] uppercase tracking-tight">
                    ${job.role}
                  </h4>
                  <span class="text-[9px] font-bold text-slate-500">${job.period}</span>
                </div>
                <div class="text-[9px] font-black text-[#0891b2] uppercase tracking-widest mb-1.5">
                  ${job.company} · ${job.location || 'Remote'}
                </div>
                <ul class="list-disc pl-4 space-y-1 text-[9.5px] text-slate-600 font-semibold leading-relaxed">
                  ${bullets.map(b => `<li>${b}.</li>`).join('')}
                </ul>
              </div>
            `;
          }).join('')
        : '';

      const cvProjectsHtml = projects
        ? projects.map((project, idx) => {
            return `
              <div class="${idx > 0 ? 'mt-4' : ''}">
                <h4 class="font-extrabold text-[#0f172a] text-[10.5px]">${project.title}</h4>
                <div class="text-[9px] font-black text-[#0891b2] uppercase tracking-widest mb-1">
                  Tech Stack: ${project.tech.join(', ')}
                </div>
                <p class="text-[9.5px] text-slate-600 font-semibold leading-relaxed">
                  ${project.description}
                </p>
              </div>
            `;
          }).join('')
        : '';

      const cvCertificationsHtml = certificates
        ? certificates.map((cert) => {
            return `
              <tr class="align-top">
                <td class="font-bold text-slate-800 pb-2">${cert.title}</td>
                <td class="text-right text-slate-500 font-semibold pb-2">${cert.organization} | ${cert.date}</td>
              </tr>
            `;
          }).join('')
        : '';

      resumeContainer.innerHTML = `
        <div class="px-2 py-2" style="font-family: 'Inter', sans-serif;">
          <!-- Name & Title -->
          <header class="mb-4">
            <h1 class="text-3xl font-black text-[#0f172a] tracking-tight leading-none mb-1">${name}</h1>
            <p class="text-xs font-bold text-[#0891b2] tracking-wider uppercase mb-3">${role}</p>
            <div class="text-[10px] text-slate-500 font-semibold leading-relaxed max-w-full">
              ${contactDetails}
            </div>
            <hr class="border-t border-slate-300 mt-3" />
          </header>

          <!-- 1. Professional Summary -->
          <section class="mb-6">
            <h3 class="text-[11px] font-black text-[#0f172a] uppercase tracking-wider border-b border-slate-350 pb-1 mb-2">
              Professional Summary
            </h3>
            <p class="text-[10px] leading-relaxed text-slate-600 font-medium">
              ${about}
            </p>
          </section>

          <!-- 2. Technical Skills -->
          <section class="mb-6">
            <h3 class="text-[11px] font-black text-[#0f172a] uppercase tracking-wider border-b border-slate-350 pb-1 mb-2.5">
              Technical Skills
            </h3>
            <table class="w-full text-[10px] border-collapse text-left">
              <tbody>
                ${cvSkillsHtml}
              </tbody>
            </table>
          </section>

          <!-- 3. Experience -->
          <section class="mb-6">
            <h3 class="text-[11px] font-black text-[#0f172a] uppercase tracking-wider border-b border-slate-350 pb-1 mb-3">
              Experience
            </h3>
            <div class="space-y-4">
              ${cvExperienceHtml}
            </div>
          </section>

          <!-- 4. Projects -->
          <section class="mb-6">
            <h3 class="text-[11px] font-black text-[#0f172a] uppercase tracking-wider border-b border-slate-350 pb-1 mb-3">
              Projects
            </h3>
            <div class="space-y-4">
              ${cvProjectsHtml}
            </div>
          </section>

          <!-- 5. Certifications -->
          <section class="mb-6">
            <h3 class="text-[11px] font-black text-[#0f172a] uppercase tracking-wider border-b border-slate-350 pb-1 mb-3">
              Certifications
            </h3>
            <table class="w-full text-[9.5px] text-left border-collapse">
              <tbody>
                ${cvCertificationsHtml}
              </tbody>
            </table>
          </section>

          <!-- 6. Education -->
          <section class="mb-6">
            <h3 class="text-[11px] font-black text-[#0f172a] uppercase tracking-wider border-b border-slate-350 pb-1 mb-3">
              Education
            </h3>
            <div class="space-y-3">
              ${cvEducationHtml}
            </div>
          </section>
        </div>
      `;
    } else if (templateId === 'classic') {
      resumeContainer.style.padding = '45px 50px';

      const classicHeaderHtml = `
        <header class="text-center mb-6">
          ${name ? `<h1 class="text-3xl font-extrabold text-[#0f172a] tracking-tight mb-1">${name}</h1>` : ''}
          ${role ? `<p class="text-xs font-bold text-[#475569] uppercase tracking-widest mb-3">${role}</p>` : ''}
          
          <div class="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-[9px] font-semibold text-slate-500 uppercase tracking-wider border-t border-b border-slate-200 py-2">
            ${contact?.location ? `<div>${contact.location}</div>` : ''}
            ${contact?.email ? `<div class="before:content-['•'] before:mr-3 before:text-slate-350 flex items-center gap-3">${contact.email}</div>` : ''}
            ${contact?.phone ? `<div class="before:content-['•'] before:mr-3 before:text-slate-350 flex items-center gap-3">${contact.phone}</div>` : ''}
            ${socialLinks?.github ? `<div class="before:content-['•'] before:mr-3 before:text-slate-350 flex items-center gap-3">${socialLinks.github.replace('https://', '')}</div>` : ''}
            ${socialLinks?.linkedin ? `<div class="before:content-['•'] before:mr-3 before:text-slate-350 flex items-center gap-3">${socialLinks.linkedin.replace('https://www.', '').replace('https://', '')}</div>` : ''}
            ${socialLinks?.fiverr ? `<div class="before:content-['•'] before:mr-3 before:text-slate-350 flex items-center gap-3">fiverr.com/anamikapande437</div>` : ''}
            ${socialLinks?.leetcode ? `<div class="before:content-['•'] before:mr-3 before:text-slate-350 flex items-center gap-3">leetcode.com/u/Anamaika</div>` : ''}
          </div>
        </header>
      `;

      const classicExperienceHtml = internships
        ? internships.map(exp => `
          <div class="mb-3">
            <div class="flex justify-between items-baseline mb-0.5">
              <div class="flex items-center gap-2">
                <h4 class="font-extrabold text-[#0f172a] text-[11px] uppercase tracking-tight">${exp.role}</h4>
                <span class="text-[9.5px] text-slate-400 font-bold uppercase tracking-wider">@ ${exp.company}</span>
              </div>
              <span class="text-[9px] font-black text-slate-450 uppercase tracking-widest">${exp.period}</span>
            </div>
            <div class="text-[8.5px] font-bold text-[#475569] uppercase tracking-wider mb-1">${exp.location}</div>
            <p class="text-[10px] text-slate-600 leading-relaxed font-medium">${exp.description}</p>
          </div>
        `).join('')
        : '';

      const classicProjectsHtml = projects
        ? projects.map(proj => `
          <div class="mb-3">
            <div class="flex justify-between items-baseline">
              <h5 class="font-bold text-[#0f172a] text-[10.5px]">${proj.title} <span class="text-[8px] text-slate-400 font-bold ml-2">// ${proj.category}</span></h5>
              <span class="text-[8.5px] text-[#4F46E5] font-black uppercase tracking-wider">${proj.tech.join(', ')}</span>
            </div>
            <p class="text-[10px] text-slate-500 leading-relaxed mt-0.5">${proj.description}</p>
          </div>
        `).join('')
        : '';

      const classicSkillsHtml = skills
        ? skills.map(skill => `
          <span class="px-2 py-0.5 bg-slate-50 text-slate-700 text-[8px] font-bold uppercase tracking-wider border border-slate-200 rounded-md mb-1 mr-1 inline-block">
            ${skill.name}
          </span>
        `).join('')
        : '';

      const classicEducationHtml = education
        ? education.map(edu => `
          <div class="mb-2.5">
            <div class="flex justify-between items-baseline">
              <h5 class="font-extrabold text-[#0f172a] text-[10.5px] leading-tight">${edu.degree}</h5>
              <span class="text-[8.5px] text-slate-400 font-bold uppercase tracking-widest">${edu.period}</span>
            </div>
            <p class="text-[9px] text-slate-500 font-semibold uppercase tracking-wider">${edu.institution} ${edu.grade ? `// Grade: ${edu.grade}` : ''}</p>
          </div>
        `).join('')
        : '';

      const classicCertificatesHtml = certificates
        ? certificates.map(cert => `
          <div class="mb-2 text-[9px] flex justify-between items-baseline">
            <div>
              <span class="font-bold text-[#0f172a]">${cert.title}</span>
              <span class="text-slate-400 uppercase tracking-widest text-[8px] font-bold ml-2">// ${cert.organization}</span>
            </div>
            <span class="text-slate-455 uppercase tracking-widest text-[8px] font-bold">${cert.date.split(' ')[0]} ${cert.date.split(' ').slice(-1)[0]}</span>
          </div>
        `).join('')
        : '';

      resumeContainer.innerHTML = `
        ${classicHeaderHtml}
        
        <div class="flex flex-col gap-4 mt-2">
          <!-- Summary -->
          ${about ? `
            <section style="page-break-inside: avoid; break-inside: avoid;">
              <h3 class="text-[9px] font-black text-[#0f172a] uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">01 // Professional Summary</h3>
              <p class="text-[10px] leading-relaxed text-slate-600 font-medium">
                ${about}
              </p>
            </section>
          ` : ''}

          <!-- Experience -->
          ${classicExperienceHtml ? `
            <section style="page-break-inside: avoid; break-inside: avoid;">
              <h3 class="text-[9px] font-black text-[#0f172a] uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">02 // Experience</h3>
              <div class="space-y-1.5">
                ${classicExperienceHtml}
              </div>
            </section>
          ` : ''}

          <!-- Technical Stack -->
          ${classicSkillsHtml ? `
            <section style="page-break-inside: avoid; break-inside: avoid;">
              <h3 class="text-[9px] font-black text-[#0f172a] uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">03 // Technical Stack</h3>
              <div class="flex flex-wrap">
                ${classicSkillsHtml}
              </div>
            </section>
          ` : ''}

          <!-- Projects -->
          ${classicProjectsHtml ? `
            <section style="page-break-inside: avoid; break-inside: avoid;">
              <h3 class="text-[9px] font-black text-[#0f172a] uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">04 // Selected Projects</h3>
              <div class="space-y-1.5">
                ${classicProjectsHtml}
              </div>
            </section>
          ` : ''}

          <!-- Education -->
          ${classicEducationHtml ? `
            <section style="page-break-inside: avoid; break-inside: avoid;">
              <h3 class="text-[9px] font-black text-[#0f172a] uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">05 // Education</h3>
              <div class="space-y-1">
                ${classicEducationHtml}
              </div>
            </section>
          ` : ''}

          <!-- Certificates -->
          ${classicCertificatesHtml ? `
            <section style="page-break-inside: avoid; break-inside: avoid;">
              <h3 class="text-[9px] font-black text-[#0f172a] uppercase tracking-widest border-b border-slate-200 pb-1 mb-2">06 // Certifications</h3>
              <div class="space-y-1">
                ${classicCertificatesHtml}
              </div>
            </section>
          ` : ''}

          <!-- Achievements -->
          ${achievements && achievements.length > 0 ? `
            <section class="pt-3 border-t border-slate-200" style="page-break-inside: avoid; break-inside: avoid;">
              ${achievements.map(ach => `
                <p class="text-[9px] text-slate-500 leading-relaxed italic font-medium">
                  "${ach}"
                </p>
              `).join('')}
            </section>
          ` : ''}
        </div>
      `;
    } else if (templateId === 'creative') {
      resumeContainer.style.padding = '0';

      const creativeContactHtml = `
        <div class="space-y-3 text-[9px] text-slate-600 font-bold uppercase tracking-wider">
          ${contact?.location ? `
            <div>
              <span class="text-[#0d9488] block text-[8px] font-black tracking-widest mb-0.5">Location</span>
              <span class="text-slate-800">${contact.location}</span>
            </div>
          ` : ''}
          ${contact?.email ? `
            <div>
              <span class="text-[#0d9488] block text-[8px] font-black tracking-widest mb-0.5">Email</span>
              <span class="text-slate-800 break-all" style="word-break: break-all;">${contact.email}</span>
            </div>
          ` : ''}
          ${contact?.phone ? `
            <div>
              <span class="text-[#0d9488] block text-[8px] font-black tracking-widest mb-0.5">WhatsApp</span>
              <span class="text-slate-800">${contact.phone}</span>
            </div>
          ` : ''}
          ${socialLinks?.github ? `
            <div>
              <span class="text-[#0d9488] block text-[8px] font-black tracking-widest mb-0.5">GitHub</span>
              <span class="text-slate-800 break-all" style="word-break: break-all;">${socialLinks.github.replace('https://', '')}</span>
            </div>
          ` : ''}
          ${socialLinks?.linkedin ? `
            <div>
              <span class="text-[#0d9488] block text-[8px] font-black tracking-widest mb-0.5">LinkedIn</span>
              <span class="text-slate-800 break-all" style="word-break: break-all;">${socialLinks.linkedin.replace('https://www.', '').replace('https://', '')}</span>
            </div>
          ` : ''}
          ${socialLinks?.fiverr ? `
            <div>
              <span class="text-[#0d9488] block text-[8px] font-black tracking-widest mb-0.5">Fiverr</span>
              <span class="text-slate-800 break-all" style="word-break: break-all;">fiverr.com/anamikapande437</span>
            </div>
          ` : ''}
          ${socialLinks?.leetcode ? `
            <div>
              <span class="text-[#0d9488] block text-[8px] font-black tracking-widest mb-0.5">LeetCode</span>
              <span class="text-slate-800 break-all" style="word-break: break-all;">leetcode.com/u/Anamaika</span>
            </div>
          ` : ''}
        </div>
      `;

      const creativeSkillsHtml = skills
        ? skills.map(skill => `
          <span class="px-2 py-0.5 bg-[#f0fdfa] text-[#0f766e] text-[8px] font-black uppercase tracking-widest border border-[#ccfbf1] rounded-md mb-1 mr-1 inline-block">
            ${skill.name}
          </span>
        `).join('')
        : '';

      const creativeEducationHtml = education
        ? education.map(edu => `
          <div class="mb-3">
            <p class="text-[8px] font-black text-[#0d9488] uppercase tracking-widest mb-0.5">${edu.period}</p>
            <h5 class="font-extrabold text-[#0f172a] text-[10.5px] leading-tight">${edu.degree}</h5>
            <p class="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">${edu.institution}</p>
          </div>
        `).join('')
        : '';

      const creativeCertificatesHtml = certificates
        ? certificates.map(cert => `
          <div class="mb-2 text-[9px]">
            <p class="font-bold text-[#0f172a]">${cert.title}</p>
            <p class="text-slate-500 uppercase tracking-widest text-[8px] font-bold">${cert.organization} // ${cert.date.split(' ')[0]} ${cert.date.split(' ').slice(-1)[0]}</p>
          </div>
        `).join('')
        : '';

      const creativeExperienceHtml = internships
        ? internships.map(exp => `
          <div class="mb-4">
            <div class="flex justify-between items-baseline mb-0.5">
              <h4 class="font-extrabold text-[#0f172a] text-[12px] uppercase tracking-tight">${exp.role}</h4>
              <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest">${exp.period}</span>
            </div>
            <div class="text-[9px] font-bold text-[#0d9488] uppercase tracking-wider mb-1">${exp.company} // ${exp.location}</div>
            <p class="text-[10.5px] text-slate-600 leading-relaxed font-medium">${exp.description}</p>
          </div>
        `).join('')
        : '';

      const creativeProjectsHtml = projects
        ? projects.map(proj => `
          <div class="mb-3">
            <div class="flex justify-between items-baseline">
              <h5 class="font-bold text-[#0f172a] text-[11px]">${proj.title}</h5>
              <span class="text-[8.5px] text-slate-400 font-bold uppercase tracking-wider">${proj.category}</span>
            </div>
            <div class="text-[8.5px] font-bold text-[#0d9488] uppercase tracking-widest mb-0.5">${proj.tech.join(', ')}</div>
            <p class="text-[10.5px] text-slate-500 leading-relaxed">${proj.description}</p>
          </div>
        `).join('')
        : '';

      resumeContainer.innerHTML = `
        <div class="flex items-stretch" style="min-height: 1130px; height: auto; min-height: fit-content; overflow: visible;">
          <!-- Left Shaded Sidebar -->
          <div style="width: 240px; background-color: #f8fafc; border-right: 1px solid #e2e8f0; padding: 40px 20px; flex-shrink: 0; display: flex; flex-direction: column; gap: 24px; box-sizing: border-box;">
            <!-- Contact -->
            <section class="w-full">
              <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 border-b border-slate-200 pb-1">Contact</h3>
              ${creativeContactHtml}
            </section>

            <!-- Technical Stack -->
            ${creativeSkillsHtml ? `
              <section class="w-full">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 border-b border-slate-200 pb-1">Skills</h3>
                <div class="flex flex-wrap w-full">
                  ${creativeSkillsHtml}
                </div>
              </section>
            ` : ''}

            <!-- Education -->
            ${creativeEducationHtml ? `
              <section class="w-full">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 border-b border-slate-200 pb-1">Education</h3>
                <div>
                  ${creativeEducationHtml}
                </div>
              </section>
            ` : ''}

            <!-- Certifications -->
            ${creativeCertificatesHtml ? `
              <section class="w-full">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 border-b border-slate-200 pb-1">Certificates</h3>
                <div>
                  ${creativeCertificatesHtml}
                </div>
              </section>
            ` : ''}
          </div>

          <!-- Right Main Column -->
          <div style="flex-grow: 1; width: calc(100% - 240px); padding: 40px 30px; display: flex; flex-direction: column; gap: 20px; min-height: fit-content; overflow: visible; box-sizing: border-box;">
            <!-- Main Header -->
            <header class="mb-4">
              ${name ? `<h1 class="text-3xl font-extrabold text-[#0f172a] tracking-tighter mb-0.5">${name}</h1>` : ''}
              ${role ? `<p class="text-sm font-black text-[#0d9488] uppercase tracking-[0.2em] italic">${role}</p>` : ''}
            </header>

            <!-- Summary -->
            ${about ? `
              <section style="page-break-inside: avoid; break-inside: avoid;">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-[8.5px] font-black text-[#0d9488] uppercase tracking-[0.2em]">01 // Professional Summary</span>
                  <div class="flex-grow h-[1px] bg-slate-100"></div>
                </div>
                <p class="text-[10.5px] leading-relaxed text-slate-600 font-medium">
                  ${about}
                </p>
              </section>
            ` : ''}

            <!-- Experience -->
            ${creativeExperienceHtml ? `
              <section style="page-break-inside: avoid; break-inside: avoid;">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-[8.5px] font-black text-[#0d9488] uppercase tracking-[0.2em]">02 // Experience</span>
                  <div class="flex-grow h-[1px] bg-slate-100"></div>
                </div>
                <div class="space-y-3">
                  ${creativeExperienceHtml}
                </div>
              </section>
            ` : ''}

            <!-- Projects -->
            ${creativeProjectsHtml ? `
              <section style="page-break-inside: avoid; break-inside: avoid;">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-[8.5px] font-black text-[#0d9488] uppercase tracking-[0.2em]">03 // Selected Projects</span>
                  <div class="flex-grow h-[1px] bg-slate-100"></div>
                </div>
                <div class="space-y-3">
                  ${creativeProjectsHtml}
                </div>
              </section>
            ` : ''}

            <!-- Achievements -->
            ${achievements && achievements.length > 0 ? `
              <section class="mt-auto pt-4 border-t border-slate-150" style="page-break-inside: avoid; break-inside: avoid;">
                ${achievements.map(ach => `
                  <p class="text-[9.5px] text-[#0d9488] leading-relaxed italic font-medium">
                    "${ach}"
                  </p>
                `).join('')}
              </section>
            ` : ''}
          </div>
        </div>
      `;
    }

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
