import { Code2, Cpu, Database, Terminal } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  badge?: string;
  rating?: string;
  review?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: any;
  color: string;
  skills: Skill[];
}

export interface Certificate {
  title: string;
  organization: string;
  date: string;
  image: string;
  description: string;
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

export const portfolioData = {
  personalInfo: {
    name: 'Anamika Pandey',
    email: 'anamika758287@gmail.com',
    whatsapp: '918799735545',
    linkedin: 'https://www.linkedin.com/in/anamika-pandey-96598b228/',
    github: 'https://github.com/anamika-pandey925',
    location: 'Delhi, India',
    bio: 'MCA candidate specializing in building responsive, high-performance web applications using the React.js ecosystem. Guided by the structured precision and creative discipline of classical dance, I treat code like choreography—fluid, precise, and purposeful.',
  },
  
  projects: [
    {
      title: 'Suraksha - Women\'s Safety',
      description: 'A responsive safety portal featuring instant SOS notifications, real-time location sharing tracker, emergency contacts management, and community support boards. (Note: This project is under active development)',
      tech: ['React.js', 'Node.js', 'Express.js', 'WebSockets', 'Tailwind CSS'],
      image: '/women-safety.png',
      github: 'https://github.com/anamika-pandey925/women-safety-platform',
      live: 'https://anamika-pandey925.github.io/Women-Empowerment-Safety/',
      badge: 'Active Development'
    },
    {
      title: 'Step Up Dance Academy',
      description: 'A premium web portal built for Step Up Dance Academy. Features branch directories, wedding choreography highlights, booking requests, and customized trainer schedules.',
      tech: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      image: '/step-up-dance.jpg',
      github: 'https://github.com/anamika-pandey925/step-up-dance-academy',
      live: 'https://step-up-dance-academy-coral.vercel.app/',
      badge: 'First Client Project',
      rating: '5/5',
      review: 'Exceptional website design! It perfectly captures the rhythm and movement of our academy. Very easy to manage and completely responsive.'
    },
    {
      title: 'Interactive Quiz Application',
      description: 'A dynamic exam taking app with responsive timer controls, progress tracking indicators, and categorized score sheets.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      image: '/interactive-quiz.png',
      github: 'https://github.com/anamika-pandey925/INTERACTIVE-QUIZ-APPLICATION',
      live: 'https://anamika-pandey925.github.io/INTERACTIVE-QUIZ-APPLICATION/'
    },
    {
      title: 'E-Learning Platform UI',
      description: 'A premium, modern online learning portal UI featuring interactive course catalogs, responsive grids, and sidebar navigations.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: '/elearning-platform.png',
      github: 'https://github.com/anamika-pandey925/E-LEARNING-PLATFORM-UI',
      live: 'https://anamika-pandey-portfolio.netlify.app'
    },
    {
      title: 'Premium Developer Portfolio',
      description: 'An ultra-premium cyberpunk developer portfolio built with React, TypeScript, and Framer Motion, featuring smooth animations and scroll reveals.',
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: '/ai-resume.png',
      github: 'https://github.com/anamika-pandey925/Personal-Portfolio-Webpage',
      live: 'https://anamika-pandey-portfolio.netlify.app'
    }
  ] as Project[],

  skills: [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'text-[#7C3AED]',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Tailwind CSS', level: 96 },
        { name: 'HTML5', level: 98 },
        { name: 'CSS3', level: 94 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: Terminal,
      color: 'text-[#06B6D4]',
      skills: [
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 85 },
        { name: 'Java', level: 78 },
        { name: 'Python', level: 75 }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Cpu,
      color: 'text-[#3B82F6]',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 82 },
        { name: 'Postman', level: 88 }
      ]
    },
    {
      title: 'Other Technologies',
      icon: Database,
      color: 'text-emerald-400',
      skills: [
        { name: 'SQL & PostgreSQL', level: 85 },
        { name: 'Node.js', level: 82 },
        { name: 'Express.js', level: 80 },
        { name: 'Django', level: 70 }
      ]
    }
  ] as SkillCategory[],

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
      role: 'Web Development Intern',
      company: 'Labmentix Pvt. Ltd',
      period: 'Sep 2025 - Oct 2025',
      location: 'Remote',
      description: 'Developed responsive, dynamic React components for core web portals. Collaborated on REST API integration and state logic enhancements.',
      type: 'Internship',
      current: true
    },
    {
      role: 'Project Trainee',
      company: 'Shree Laxmi Industries',
      period: 'Aug 2025 - Sep 2025',
      location: 'UP, India',
      description: 'Built internal dashboard widgets and tabular reports to streamline log flows, using HTML5, CSS3, and JavaScript.',
      type: 'Internship'
    },
    {
      role: 'Frontend Development Intern',
      company: 'CODTECH IT SOLUTIONS',
      period: 'Feb 2025 - Mar 2025',
      location: 'Remote',
      description: 'Crafted custom, reusable UI forms and state-driven modules in React.js. Synced styled Tailwind CSS views with backend services.',
      type: 'Internship'
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: 'Sep 2023 - Present',
      location: 'Delhi, India',
      description: 'Designing and launching lightweight responsive sites for various clients, implementing clean styling and smooth transitions.',
      type: 'Freelance'
    },
    {
      role: 'Master of Computer Applications (MCA)',
      company: 'Galgotias University',
      period: '2024 - Present',
      location: 'Greater Noida, India',
      description: 'Focusing on advanced algorithms, cloud computing, database structures, and web technologies.',
      type: 'Academic'
    }
  ] as ExperienceItem[]
};
