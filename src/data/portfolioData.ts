export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  category: string;
  badge?: string;
  rating?: number;
  clientReview?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  type: 'Internship' | 'Academic' | 'Freelance';
  current?: boolean;
}

export interface Certificate {
  title: string;
  organization: string;
  date: string;
  image: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
}

export const portfolioData = {
  personalInfo: {
    name: 'Anamika Pandey',
    email: 'anamika758287@gmail.com',
    whatsapp: '918799735545',
    linkedin: 'https://www.linkedin.com/in/anamika-pandey-96598b228/',
    github: 'https://github.com/anamika-pandey925',
    location: 'Delhi, India',
    bio: 'MCA Graduate specializing in building responsive, high-performance web applications and sleek UI/UX designs. Guided by the structured precision and creative discipline of classical dance, I treat code like choreography—fluid, precise, and purposeful.',
  },
  
  projects: [
    {
      title: "Women's Safety Platform (Suraksha)",
      description: 'A responsive safety portal featuring instant SOS alerts, real-time location sharing, emergency contact management, and community support boards.',
      tech: ['React.js', 'Node.js', 'Express.js', 'WebSockets', 'Tailwind CSS'],
      image: '/women-safety.png',
      github: 'https://github.com/anamika-pandey925/women-safety-platform',
      live: 'https://anamika-pandey925.github.io/Women-Empowerment-Safety/',
      category: 'Web App',
      badge: 'Active'
    },
    {
      title: 'Interactive Quiz Application',
      description: 'A dynamic online quiz platform featuring real-time timer controls, progress tracking indicators, and detailed performance score sheets.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      image: '/interactive-quiz.png',
      github: 'https://github.com/anamika-pandey925/INTERACTIVE-QUIZ-APPLICATION',
      live: 'https://anamika-pandey925.github.io/INTERACTIVE-QUIZ-APPLICATION/',
      category: 'Vanilla JS'
    },
    {
      title: 'E-Learning Platform',
      description: 'A premium, modern online learning portal UI featuring interactive course catalogs, responsive grids, and sidebar navigations.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: '/elearning-platform.png',
      github: 'https://github.com/anamika-pandey925/E-LEARNING-PLATFORM-UI',
      live: 'https://anamika-pandey-portfolio.netlify.app',
      category: 'UI/UX Design'
    },
    {
      title: 'Step Up Dance Academy',
      description: 'A modern, responsive client website showcasing dance classes, events, student reviews, and branches across multiple dance styles.',
      tech: ['React.js', 'Firebase', 'Tailwind CSS', 'HTML5', 'JavaScript'],
      image: '/step-up-dance.jpg',
      github: 'https://github.com/anamika-pandey925/step-up-dance-academy',
      live: 'https://step-up-dance-academy-coral.vercel.app/',
      category: 'Web App',
      badge: 'First Client Project',
      rating: 5,
      clientReview: 'Anamika created a stunning, highly responsive site for our dance academy. It is fast, beautifully structured, and has greatly boosted our registrations!'
    },
    {
      title: 'Portfolio Website',
      description: 'An elegant, responsive portfolio website featuring a dark/light theme toggle, Framer Motion transitions, and clean layouts.',
      tech: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      image: '/ai-resume.png',
      github: 'https://github.com/anamika-pandey925/Personal-Portfolio-Webpage',
      live: 'https://anamika-pandey-portfolio.netlify.app',
      category: 'Frontend Dev',
      badge: 'Featured'
    },
    {
      title: 'Business Landing Page',
      description: 'A highly optimized premium landing page for a modern SaaS business featuring scroll animations, responsive structures, and newsletter signups.',
      tech: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
      image: '/landing-page.png',
      github: 'https://github.com/anamika-pandey925/business-landing-page',
      live: 'https://anamika-landing-page.netlify.app',
      category: 'Web Design'
    }
  ] as Project[],

  skills: [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 92 },
    { name: 'Tailwind CSS', level: 94 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Figma', level: 85 },
    { name: 'Git & GitHub', level: 88 },
    { name: 'Responsive Design', level: 96 }
  ] as Skill[],

  certificates: [
    {
      title: 'Project Training Completion',
      organization: 'SHREE LAXMI INDUSTRIES',
      date: 'Aug 2025 - Sep 2025',
      image: '/cert_sli.jpg',
      description: 'Successfully completed industrial project training within the web systems department, applying web development principles.'
    },
    {
      title: 'Full Stack Internship Certificate',
      organization: 'LABMENTIX PVT. LTD',
      date: 'Sep 2025 - Oct 2025',
      image: '/cert_labmentix.jpg',
      description: 'Awarded for exceptional service and code contributions as a Web Development Intern.'
    },
    {
      title: 'Frontend Web Development Internship',
      organization: 'CODTECH IT SOLUTIONS',
      date: 'Feb 2025 - Mar 2025',
      image: '/cert_codtech_intern.png',
      description: 'Completed a 4-week professional internship focusing on React.js implementation and responsive layouts.'
    },
    {
      title: 'Hackathon Excellence Certificate',
      organization: 'CODTECH IT SOLUTIONS',
      date: 'Jan 2025',
      image: '/cert_codtech_hackathon.png',
      description: 'Recognized for active participation, technical contributions, and creative problem solving in the frontend hackathon.'
    },
    {
      title: 'SQL Joins Micro-Certification',
      organization: 'CUVETTE TECH',
      date: 'Oct 2025',
      image: '/cert_cuvette_sql.png',
      description: 'Earned joins and relational queries certification conducted by IIT alumni and database experts.'
    }
  ] as Certificate[],

  experience: [
    {
      role: 'Web Development Intern (Frontend)',
      company: 'Labmentix Pvt. Ltd',
      period: 'Sep 2025 - Oct 2025',
      location: 'Remote',
      description: 'Developed responsive, dynamic React components for core web portals. Collaborated on REST API integration and state logic enhancements using Tailwind CSS.',
      type: 'Internship',
      current: true
    },
    {
      role: 'Client Website Developer',
      company: 'Step Up Dance Academy',
      period: 'Aug 2025 - Sep 2025',
      location: 'UP, India',
      description: 'Built and launched a premium interactive web portal. Features branch directories, wedding choreography highlights, booking requests, and customized trainer schedules.',
      type: 'Freelance'
    },
    {
      role: 'Frontend Development Internship',
      company: 'CODTECH IT SOLUTIONS',
      period: 'Feb 2025 - Mar 2025',
      location: 'Remote',
      description: 'Completed a professional internship focusing on React.js implementation, custom forms, and reusable component structure with responsive CSS layouts.',
      type: 'Internship'
    },
    {
      role: 'Freelance Web Development Projects',
      company: 'Self-Employed',
      period: 'Sep 2023 - Present',
      location: 'Delhi, India',
      description: 'Designing and launching lightweight responsive sites for various clients, implementing clean styling and smooth transitions.',
      type: 'Freelance'
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: 'Masters of Computer Applications (MCA)',
      institution: 'Galgotias University',
      period: '2024 – Present',
      location: 'Greater Noida, India'
    },
    {
      degree: 'Bachelors of Computer Applications (BCA)',
      institution: 'Bharati Vidyapeeth',
      period: '2020 – 2023',
      location: 'New Delhi, India',
      grade: '82.8%'
    }
  ] as EducationItem[]
};


