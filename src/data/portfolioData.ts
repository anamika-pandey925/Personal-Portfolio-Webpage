export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  technology?: string[];
  result?: string;
  longDescription?: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  category: 'Featured' | 'Client Work' | 'Web Apps' | 'Mobile App' | 'UI/UX';
  badge?: string;
  featured?: boolean;
  rating?: number;
  clientReview?: string;
  features?: string[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'UI / Styling' | 'Backend / Services' | 'Tools';
  icon: string;
  description?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  type: 'Internship' | 'Freelance' | 'Client Project';
  current?: boolean;
  technologies: string[];
  responsibilities: string[];
}

export interface Certificate {
  title: string;
  organization: string;
  date: string;
  image: string;
  description: string;
  credentialUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  cgpa?: string;
  certificate?: string;
  details: string[];
}

export const portfolioData = {
  name: 'Anamika Pandey',
  role: 'Frontend Developer',
  tagline: 'Building high-performance, responsive & user-focused web applications with React.js and TypeScript.',
  profileImage: '/profile.png',
  about: {
    greeting: "Hi, I'm Anamika Pandey",
    headline: "Frontend Developer & UI/UX Craftsman",
    bio: "MCA graduate specializing in modern frontend engineering, interactive user interfaces, and responsive component architecture. Guided by the structured precision and creative discipline of classical dance, I approach software design with focus, clean structure, and attention to detail.",
    details: "I focus on developing scalable React.js architectures, responsive cross-device layouts, accessible web interfaces, and clean component design using Tailwind CSS and TypeScript.",
    highlights: [
      { label: 'Degree', value: 'MCA Graduate', subtext: 'Galgotias University (7.96 CGPA)', icon: 'GraduationCap' },
      { label: 'Specialization', value: 'Frontend Developer', subtext: 'React.js & Responsive Web', icon: 'Code2' },
      { label: 'Core Stack', value: 'React.js & TypeScript', subtext: 'Tailwind CSS, JavaScript & Vite', icon: 'Atom' },
      { label: 'Location', value: 'Delhi, India', subtext: 'Open to Frontend Opportunities', icon: 'MapPin' }
    ],
    philosophy: "I translate the meticulous discipline of Classical Dance into architectural code precision—creating web experiences that are aesthetically striking, performant, and reliable."
  },
  
  projects: [
    {
      title: 'Step Up Dance Academy',
      subtitle: 'Client Website & Class Portal',
      description: 'A client website showcasing dance disciplines, certified faculty, batch schedules, student reviews, and automated inquiry registration.',
      problem: 'The academy needed an organized online presence to showcase diverse dance genres, schedule details, and capture student enrollment inquiries.',
      solution: 'Designed and built a fast, responsive web portal with genre directories, trainer schedules, student testimonials, and direct inquiry registration.',
      tech: ['React.js', 'Firebase', 'Tailwind CSS', 'JavaScript', 'HTML5'],
      technology: ['React.js', 'Firebase', 'Tailwind CSS', 'JavaScript', 'HTML5'],
      image: '/step-up-dance.jpg',
      github: 'https://github.com/anamika-pandey925/step-up-dance-academy',
      live: 'https://step-up-dance-academy-coral.vercel.app/',
      category: 'Client Work' as const,
      badge: 'Client Project',
      rating: 5,
      clientReview: 'Anamika created a stunning, highly responsive site for our dance academy. It is fast, beautifully structured, and has significantly boosted our student registrations!',
      features: [
        'Interactive class schedule explorer by dance style and skill level',
        'Student testimonials and showcase media integration',
        'Lead capture inquiry system with automated notifications'
      ],
      keyFeatures: [
        'Interactive class schedule explorer by dance style and skill level',
        'Student testimonials and showcase media integration',
        'Lead capture inquiry system with automated notifications'
      ],
      result: 'Successfully launched the client website, enabling prospective students to easily browse courses and submit registrations.'
    },
    {
      title: 'MithilaKitchen Mobile App',
      subtitle: 'Cross-Platform Food Ordering Application',
      description: 'A mobile food ordering application built with React Native, Expo, and Firebase. Features cuisine exploration, cart management, real-time live order tracking, and Razorpay payment gateway integration.',
      problem: 'Regional food delivery services needed a modern cross-platform mobile application supporting interactive menus, cart management, and seamless payments.',
      solution: 'Built a cross-platform mobile application utilizing React Native and Expo Router, connecting Firebase for authentication and Razorpay for payment workflows.',
      tech: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Razorpay SDK'],
      technology: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Razorpay SDK'],
      image: '/mithila-home.jpg',
      github: 'https://github.com/anamika-pandey925/MithilaKitchen-mobile-app',
      live: 'https://github.com/anamika-pandey925/MithilaKitchen-mobile-app',
      category: 'Mobile App' as const,
      badge: 'Client App',
      rating: 5,
      clientReview: 'Anamika built an exceptionally smooth and reliable food ordering app. The real-time tracking and Razorpay payment gateway work flawlessly. Incredibly professional work! - Mr. Shivam Jha',
      features: [
        'Dynamic multi-category dish catalog with dietary filters and customization add-ons',
        'Secure Razorpay payment gateway checkout with instant transaction verification',
        'Live order status tracking and push notification feedback'
      ],
      keyFeatures: [
        'Dynamic multi-category dish catalog with dietary filters and customization add-ons',
        'Secure Razorpay payment gateway checkout with instant transaction verification',
        'Live order status tracking and push notification feedback'
      ],
      result: 'Delivered a production-ready mobile application with full authentication, cart persistence, and secure transaction handling.'
    },
    {
      title: 'SURAKSHA – Women Safety Platform',
      subtitle: 'Safety, Awareness & Community Hub',
      description: 'A dedicated safety web application providing SOS alert triggers, geo-location sharing simulations, legal awareness resources, and verified helpline directories.',
      problem: 'Women facing distress situations require quick, single-click access to emergency alerts, support contacts, and legal empowerment guidelines.',
      solution: 'Constructed an emergency safety hub featuring rapid SOS triggers, quick-exit privacy buttons, helpline contact lists, and curated safety rights articles.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5'],
      technology: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5'],
      image: '/women-safety.png',
      github: 'https://github.com/anamika-pandey925/suraksha-womens-safety-empowerment',
      live: 'https://suraksha-womens-safety-empowerment.vercel.app/',
      category: 'Web Apps' as const,
      badge: 'Social Impact',
      features: [
        'Instant one-click SOS safety trigger and emergency contact alert simulations',
        'Curated women rights knowledgebase, helpline numbers, and nearby support centers',
        'Discreet quick-exit privacy feature for emergency user protection'
      ],
      keyFeatures: [
        'Instant one-click SOS safety trigger and emergency contact alert simulations',
        'Curated women rights knowledgebase, helpline numbers, and nearby support centers',
        'Discreet quick-exit privacy feature for emergency user protection'
      ],
      result: 'Engineered an accessible web platform providing essential safety resources and emergency simulation capabilities.'
    },
    {
      title: 'AI Resume Builder & Portfolio',
      subtitle: 'Dynamic PDF Generator & Developer Showcase',
      description: 'An interactive portfolio and resume builder web application built with React, TypeScript, and Tailwind CSS. Features dynamic PDF generation, custom theming, and responsive layout systems.',
      problem: 'Developers and job seekers need a seamless, interactive way to showcase real-world projects and export styled, clean resume PDFs on the fly.',
      solution: 'Engineered a full-featured single-page developer platform with live client-side PDF compilation, dark/light theme switching, and smooth section transitions.',
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      technology: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: '/ai-resume.png',
      github: 'https://github.com/anamika-pandey925/Personal-Portfolio-Webpage',
      live: 'https://anamika-pandey-portfolio.netlify.app',
      category: 'Web Apps' as const,
      badge: 'Featured App',
      features: [
        'Client-side vector PDF resume compilation using jsPDF and html2canvas',
        'Responsive interactive component suite with fluid micro-interactions',
        'Verified credential modal viewers and GitHub telemetry integration'
      ],
      keyFeatures: [
        'Client-side vector PDF resume compilation using jsPDF and html2canvas',
        'Responsive interactive component suite with fluid micro-interactions',
        'Verified credential modal viewers and GitHub telemetry integration'
      ],
      result: 'Deployed a responsive, high-performance portfolio application with instant resume export capabilities.'
    },
    {
      title: 'Interactive Quiz Application',
      subtitle: 'Skill Testing & Assessment Platform',
      description: 'A dynamic online quiz platform featuring real-time countdown timer controls, progress tracking indicators, categorized question banks, and detailed score breakdown analytics.',
      problem: 'Students and learners needed an engaging, timed self-assessment interface with immediate performance breakdown and answer reviews.',
      solution: 'Created an interactive JavaScript assessment platform with timer hooks, stateful question sequences, and score calculation engines.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
      technology: ['JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
      image: '/interactive-quiz.png',
      github: 'https://github.com/anamika-pandey925/INTERACTIVE-QUIZ-APPLICATION',
      live: 'https://anamika-pandey925.github.io/INTERACTIVE-QUIZ-APPLICATION/',
      category: 'Web Apps' as const,
      badge: 'Web App',
      features: [
        'Timed question rounds with visual urgency indicators and instant score calculation',
        'Detailed answer analysis review with explanation breakdowns at completion',
        'Clean, accessible keyboard navigation and mobile-first responsive layout'
      ],
      keyFeatures: [
        'Timed question rounds with visual urgency indicators and instant score calculation',
        'Detailed answer analysis review with explanation breakdowns at completion',
        'Clean, accessible keyboard navigation and mobile-first responsive layout'
      ],
      result: 'Deployed a lightweight, responsive testing web app that delivers instant feedback without external server dependencies.'
    },
    {
      title: 'E-Learning Platform UI',
      subtitle: 'Course Portal & Student Dashboard',
      description: 'A modern online learning portal UI featuring interactive course catalogs, filterable modules, student progress dashboards, video lesson players, and sidebar navigations.',
      problem: 'Online learning platforms often present cluttered course hierarchies that hinder student focus and curriculum navigation.',
      solution: 'Designed an intuitive, modular course dashboard with clear module progress indicators, video lesson frames, and dark/light adaptive components.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Modern UI/UX'],
      technology: ['HTML5', 'CSS3', 'JavaScript', 'Modern UI/UX'],
      image: '/elearning-platform.png',
      github: 'https://github.com/anamika-pandey925/E-LEARNING-PLATFORM-UI',
      live: 'https://e-learning-platform-ui-omega.vercel.app/',
      category: 'UI/UX' as const,
      badge: 'UI/UX Design',
      features: [
        'Modular course curriculum drawer with active chapter progress indicators',
        'Filterable course search with difficulty rating and instructor badges',
        'Adaptive card components and smooth micro-interactions'
      ],
      keyFeatures: [
        'Modular course curriculum drawer with active chapter progress indicators',
        'Filterable course search with difficulty rating and instructor badges',
        'Adaptive card components and smooth micro-interactions'
      ],
      result: 'Constructed an aesthetic, accessible learning portal interface with responsive layouts across mobile and desktop.'
    }
  ] as Project[],

  skills: [
    // Frontend
    { name: 'React.js', category: 'Frontend', icon: 'react', description: 'Functional components, hooks, state management, and component lifecycle' },
    { name: 'TypeScript', category: 'Frontend', icon: 'typescript', description: 'Type-safe interfaces, generics, and robust frontend codebases' },
    { name: 'JavaScript', category: 'Frontend', icon: 'javascript', description: 'ES6+ syntax, asynchronous programming, DOM APIs, and closures' },
    { name: 'HTML5', category: 'Frontend', icon: 'html', description: 'Semantic structure, accessible markup, and modern web standards' },
    { name: 'CSS3', category: 'Frontend', icon: 'css', description: 'Flexbox, CSS Grid, media queries, keyframe animations, and variables' },

    // UI / Styling
    { name: 'Tailwind CSS', category: 'UI / Styling', icon: 'tailwind', description: 'Utility-first styling, design system tokens, and responsive layouts' },
    { name: 'Responsive Design', category: 'UI / Styling', icon: 'layout', description: 'Mobile-first breakpoints and cross-device visual consistency' },
    { name: 'Accessibility (a11y)', category: 'UI / Styling', icon: 'accessibility', description: 'Semantic tags, keyboard navigability, and ARIA standards' },
    { name: 'Figma', category: 'UI / Styling', icon: 'figma', description: 'UI wireframing, component design, and developer handoff' },

    // Backend / Services
    { name: 'REST APIs', category: 'Backend / Services', icon: 'api', description: 'Endpoint integration, asynchronous data fetching, and error states' },
    { name: 'Firebase', category: 'Backend / Services', icon: 'firebase', description: 'Authentication, Firestore real-time database, and cloud hosting' },
    { name: 'MongoDB', category: 'Backend / Services', icon: 'database', description: 'Document-based database schemas, collections, and basic queries' },
    { name: 'Authentication', category: 'Backend / Services', icon: 'lock', description: 'User login/signup flows, session handling, and route protection' },

    // Tools
    { name: 'Git', category: 'Tools', icon: 'git', description: 'Version control, branching, committing, and merge workflows' },
    { name: 'GitHub', category: 'Tools', icon: 'github', description: 'Repository management, pull requests, collaboration, and deployment' },
    { name: 'Vite', category: 'Tools', icon: 'vite', description: 'Modern, fast frontend build tooling and development server' },
    { name: 'VS Code', category: 'Tools', icon: 'vscode', description: 'Extensions, debugging, linting, and development workflow' }
  ] as SkillItem[],

  internships: [
    {
      role: 'Web Development Intern (Frontend)',
      company: 'Labmentix Pvt. Ltd',
      period: 'Sep 2025 – Oct 2025',
      location: 'Remote',
      description: 'Engineered responsive, dynamic React components for core web applications. Collaborated on REST API integration, state management logic, and polished Tailwind CSS layouts.',
      type: 'Internship',
      current: true,
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Git'],
      responsibilities: [
        'Developed reusable, modular React components for internal web applications',
        'Integrated asynchronous REST endpoints with structured error handling and loading indicators',
        'Implemented cross-browser responsive layouts adhering to modern web accessibility standards'
      ]
    },
    {
      role: 'Client Website Developer',
      company: 'Step Up Dance Academy',
      period: 'Aug 2025 – Sep 2025',
      location: 'UP, India',
      description: 'Architected and deployed a modern interactive web portal featuring branch directories, choreography highlights, inquiry registration, and trainer schedules.',
      type: 'Client Project',
      technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'Responsive UI'],
      responsibilities: [
        'Designed end-to-end user interface with intuitive navigation and mobile-first experience',
        'Integrated Firebase backend services for student inquiry capture and dynamic updates',
        'Delivered clean, optimized frontend code with smooth transitions and fast page rendering'
      ]
    },
    {
      role: 'Frontend Development Intern',
      company: 'CODTECH IT SOLUTIONS',
      period: 'Feb 2025 – Mar 2025',
      location: 'Remote',
      description: 'Completed an intensive frontend internship focusing on React.js application architectures, responsive component design, and custom form validation workflows.',
      type: 'Internship',
      technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
      responsibilities: [
        'Built interactive dashboard layouts with responsive state-driven components',
        'Constructed custom validated forms with real-time feedback and accessibility attributes',
        'Collaborated via Git/GitHub version control workflows in agile sprint cycles'
      ]
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: 'Sep 2023 – Present',
      location: 'Delhi, India',
      description: 'Designing and building high-performance responsive web applications and landing pages for diverse clients, implementing modern styling and smooth animations.',
      type: 'Freelance',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma'],
      responsibilities: [
        'Transformed Figma designs into pixel-perfect, accessible, and responsive codebases',
        'Optimized frontend assets, code structure, and metadata across client deliveries',
        'Collaborated directly with clients to gather requirements, iterate on prototypes, and deliver on schedule'
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Galgotias University',
      period: '2024 – 2026',
      location: 'Greater Noida, UP',
      grade: 'CGPA: 7.96',
      cgpa: '7.96 / 10',
      certificate: '/gradecard_mca.png',
      details: [
        'Graduated with Master of Computer Applications (MCA) from School of Computing Science & Engineering',
        'Advanced coursework in Data Structures & Algorithms, Modern Web Frameworks, Database Systems, and Cloud Architectures',
        'Secured a strong CGPA of 7.96 / 10 across all academic semesters'
      ]
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Bharati Vidyapeeth (Deemed to be University), Pune',
      period: '2020 – 2023',
      location: 'New Delhi, India',
      grade: 'A Grade (CGPA: 8.28)',
      cgpa: '8.28 / 10',
      certificate: '/degree_bca.jpg',
      details: [
        'Graduated with First Class with Distinction (A Grade), securing CGPA 8.28 in September 2023',
        'Rigorous foundation in Object-Oriented Programming, Database Management (RDBMS), Frontend Web Technologies, and Software Engineering'
      ]
    },
    {
      degree: 'Senior Secondary Certificate Examination (Class XII)',
      institution: 'Rajkiya Pratibha Vikas Vidyalaya, Paschim Vihar A-6 (CBSE)',
      period: '2020',
      location: 'New Delhi, India',
      certificate: '/cert_12th.jpg',
      details: [
        'Successfully completed Senior School Certificate Examination under CBSE in 2020',
        'Attended RPVV Paschim Vihar A-6—a selective specialized school renowned for academic excellence across Delhi'
      ]
    },
    {
      degree: 'Secondary School Examination (Class X)',
      institution: 'Rajkiya Pratibha Vikas Vidyalaya, Paschim Vihar A-6 (CBSE)',
      period: '2018',
      location: 'New Delhi, India',
      certificate: '/cert_10th.jpg',
      details: [
        'Completed Secondary School Examination under CBSE in 2018 with strong academic standing in Mathematics, Science, and English'
      ]
    }
  ] as EducationItem[],

  certificates: [
    {
      title: 'Web Development Internship Certificate',
      organization: 'LABMENTIX PVT. LTD',
      date: 'Sep 2025 – Oct 2025',
      image: '/cert_labmentix.jpg',
      description: 'Awarded for core frontend code contributions and reliable service during the Web Development Internship.'
    },
    {
      title: 'Frontend Web Development Internship',
      organization: 'CODTECH IT SOLUTIONS',
      date: 'Feb 2025 – Mar 2025',
      image: '/cert_codtech_intern.png',
      description: 'Successfully completed professional internship focusing on React.js component architectures and responsive layouts.'
    },
    {
      title: 'Hackathon Excellence Certificate',
      organization: 'CODTECH IT SOLUTIONS',
      date: 'Jan 2025',
      image: '/cert_codtech_hackathon.png',
      description: 'Recognized for creative problem-solving, active technical contribution, and rapid frontend prototyping in the hackathon.'
    },
    {
      title: 'Project Training Completion',
      organization: 'SHREE LAXMI INDUSTRIES',
      date: 'Aug 2025 – Sep 2025',
      image: '/cert_sli.jpg',
      description: 'Industrial project training completion in web systems engineering, implementing live frontend interfaces.'
    },
    {
      title: 'SQL Joins & Relational Queries',
      organization: 'CUVETTE TECH',
      date: 'Oct 2025',
      image: '/cert_cuvette_sql.png',
      description: 'Advanced SQL queries and relational database concepts certification conducted by IIT alumni and data architects.'
    }
  ] as Certificate[],

  contact: {
    email: 'anamika758287@gmail.com',
    phone: '+91 8799735545',
    whatsapp: 'https://wa.me/918799735545',
    whatsappNumber: '+91 8799735545',
    location: 'Delhi, India',
    status: 'Available for Frontend Developer Opportunities'
  },

  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/anamika-pandey-96598b228/',
    github: 'https://github.com/anamika-pandey925',
    leetcode: 'https://leetcode.com/u/Anamaika/',
    instagram: 'https://www.instagram.com/buildwithanamika/',
    instagramHandle: '@BUILDWITHANAMIKA',
    whatsapp: 'https://wa.me/918799735545'
  },

  achievements: [
    {
      title: 'Client Project Success',
      subtitle: 'Step Up Dance Academy & MithilaKitchen',
      description: 'Delivered client-approved web and mobile platforms with clean code and reliable performance.'
    },
    {
      title: 'Hackathon Technical Recognition',
      subtitle: 'CODTECH IT Solutions',
      description: 'Awarded excellence certificate for agile frontend prototyping and creative problem-solving.'
    },
    {
      title: 'Classical Dance to Code Discipline',
      subtitle: 'Artistic Discipline & Precision',
      description: 'Translating rigorous classical dance timing, discipline, and attention to detail into structured, reliable software.'
    }
  ]
};




