import {
  Code2,
  Database,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Workflow,
  Palette,
  Shield,
  Zap,
} from 'lucide-react';
import { TimelineItem } from '../components/Timeline';

// Personal Information
export const personalInfo = {
  name: 'Santhosh K',
  title: 'Full-Stack Developer',
  roles: ['Full-Stack Developer', 'System Architect', 'Automation Expert'],
  company: 'Cybomb Technologies',
  location: 'Chennai, India',
  bio: "To obtain a position of fullstack developer where I can maximize my skill for the benefit of the organization.",
  email: 'santhoshkrish0205@gmail.com',
  phone: '+91 9360164622',
  availability: 'Available for freelance projects',
};

// Skills Data
// Skills Data
export const skillsData = [
  {
    icon: Code2,
    name: 'Frontend Ecosystem',
    level: 95,
    category: 'Frontend',
    description: 'React.js, Vite, Bootstrap, Tailwind, HTML5, CSS3, JavaScript (ES6+)',
  },
  {
    icon: Server,
    name: 'Backend Development',
    level: 90,
    category: 'Backend',
    description: 'Node.js, Express.js, Python, RESTful APIs',
  },
  {
    icon: Database,
    name: 'Database Management',
    level: 85,
    category: 'Database',
    description: 'MongoDB, MySQL, Schema Design',
  },
  {
    icon: Workflow,
    name: 'n8n Automation',
    level: 92,
    category: 'Automation',
    description: 'Workflow automation, API integrations, AI features',
  },
  {
    icon: Cloud,
    name: 'Deployment & DevOps',
    level: 80,
    category: 'DevOps',
    description: 'Linux servers, PM2, Environment configuration',
  },
  {
    icon: GitBranch,
    name: 'Version Control',
    level: 88,
    category: 'DevOps',
    description: 'Git, GitHub, Agile Collaboration',
  },
  {
    icon: Palette,
    name: 'UI/UX & Design',
    level: 85,
    category: 'Design',
    description: 'Figma to Code, Mobile-first design, UI Alignment',
  },
  {
    icon: Shield,
    name: 'Security & Auth',
    level: 82,
    category: 'Security',
    description: 'Role-based access (RBAC), Authentication',
  },
];

// Experience Timeline
export const experienceTimeline: TimelineItem[] = [
  {
    title: 'FullStack Developer',
    organization: 'Cybomb Technologies Pvt Ltd - Chennai',
    location: 'Hybrid',
    period: 'June 2025 - Present',
    description:
      'Developing and maintaining full-stack web applications used in production environments.',
    achievements: [
      'Developing and maintaining full-stack web applications used in production environments',
      'Building scalable frontend interfaces using React.js with modular, reusable components',
      'Designing backend logic, APIs, and database structures for business-critical systems',
      'Implementing role-based access control and authentication across multiple platforms',
      'Integrating AI-driven features and n8n automation workflows into web applications',
      'Collaborating with product and design teams to translate requirements into deployable solutions',
      'Handling deployment, environment configuration, and production debugging on Linux servers',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    organization: 'Cybomb Technologies LLP - Chennai',
    location: 'Chennai',
    period: 'November 2024 - May 2025',
    description:
      'Started as a frontend developer intern, focusing on building responsive user interfaces and learning full-stack development fundamentals.',
    achievements: [
      'Created and deployed multiple responsive portfolio websites using HTML, CSS, Bootstrap, and JavaScript',
      'Converted Figma designs into pixel-accurate, mobile-first web interfaces',
      'Improved UI alignment, animations, and overall user experience across multiple products',
      'Worked closely with backend developers to integrate APIs and dynamic data',
      'Assisted in optimizing frontend performance and fixing cross-browser compatibility issues',
      'Gained hands-on experience with real-world production codebases and agile workflows',
    ],
  },
];

// Education Timeline
export const educationTimeline: TimelineItem[] = [
  {
    title: 'Bachelor of Technology (B.Tech) in Computer Science Engineering',
    organization: 'SASTRA UNIVERSITY - KUMBAKONAM',
    location: 'Chennai, India',
    period: 'October 2020 - May 2024',
    description:
      'Graduated with a degree in Computer Science Engineering.',
    achievements: [
      'Completed coursework in Core Java, Advanced Java, SQL, HTML, CSS, JavaScript',
      'Participated in agile collaboration and problem-solving activities',
    ],
  },
];

// Certifications & Achievements
export const achievements = [
  {
    title: 'Java Full Stack Development Certification',
    issuer: 'Greens Technology, Velachery, Chennai',
    year: '2024',
    icon: Code2,
  },
];

// Personal Interests
export const interests = [
  {
    title: 'Open Source',
    description: 'Contributing to open-source projects and building developer tools',
    icon: GitBranch,
  },
  {
    title: 'Tech Blogging',
    description: 'Writing technical articles and sharing knowledge with the community',
    icon: Code2,
  },
  {
    title: 'Automation',
    description: 'Exploring new ways to automate workflows and increase productivity',
    icon: Zap,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing beautiful and intuitive user interfaces',
    icon: Palette,
  },
];

// Stats for Home Page
export const stats = [
  { label: 'Months of Experience', value: '14+', icon: Code2 },
  { label: 'Works Completed', value: '5+', icon: Zap },
  { label: 'Technologies Mastered', value: '5+', icon: Database },
  { label: 'Workflows Automated', value: '10+', icon: Smartphone },
];
