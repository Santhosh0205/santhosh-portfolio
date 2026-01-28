export interface Work {
  slug: string;
  title: string;
  role: string;
  company: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string; // Optional live demo URL
  // Extended case study data
  caseStudy: {
    overview: string;
    challenges: string[];
    solutions: string[];
    keyFeatures: {
      title: string;
      description: string;
    }[];
    contributions: string[]; // My specific contributions
    highlights: {
      label: string;
      value: string;
    }[]; // Project highlights/stats
    results: string[];
    duration: string;
  };
}

export const works: Work[] = [
  {
    slug: "job-portal-platform",
    title: "Job Portal Platform",
    role: "Full-Stack Developer",
    company: "Cybomb Technologies",
    category: "Platform",
    description: "Built a full-featured job portal from scratch to production.",
    features: [
      "Implemented role-based access for job seekers, recruiters, and admins",
      "Designed smooth, responsive UI for job listings and dashboards",
      "Integrated AI-powered chat system to assist users with job discovery and queries",
    ],
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "Bootstrap",
      "AI Integration",
      "Socket.io",
    ],
    caseStudy: {
      overview:
        "A comprehensive job portal platform that connects job seekers with recruiters, featuring role-based access control, real-time notifications, and AI-powered assistance for enhanced user experience.",
      challenges: [
        "Building a scalable multi-role authentication system",
        "Implementing real-time notifications across user types",
        "Integrating AI chat without compromising performance",
        "Designing an intuitive UI for diverse user needs",
      ],
      solutions: [
        "Implemented JWT-based auth with role-specific middleware and permissions",
        "Used Socket.io for real-time communication and notifications",
        "Optimized AI integration with caching and async processing",
        "Conducted user research and iterated on UI/UX designs",
      ],
      keyFeatures: [
        {
          title: "Role-Based Access Control",
          description:
            "Separate dashboards and permissions for job seekers, recruiters, and administrators",
        },
        {
          title: "AI-Powered Chat",
          description:
            "Intelligent chatbot to help users discover jobs and answer queries instantly",
        },
        {
          title: "Real-Time Notifications",
          description:
            "Instant updates for job applications, status changes, and messages",
        },
        {
          title: "Advanced Job Search",
          description:
            "Filter by location, salary, experience, and skills with smart suggestions",
        },
      ],
      contributions: [
        "Architected the entire frontend using React with modular component structure",
        "Designed and implemented the complete authentication system with JWT",
        "Built real-time notification system using Socket.io",
        "Integrated AI chatbot with n8n automation workflows",
        "Created responsive UI components with Tailwind CSS",
        "Implemented admin dashboard with analytics and user management",
      ],
      highlights: [
        { label: "Lines of Code", value: "15,000+" },
        { label: "API Endpoints", value: "50+" },
        { label: "User Roles", value: "3" },
        { label: "Real-time Events", value: "25+" },
      ],
      results: [
        "Reduced job discovery time by 60%",
        "Improved user engagement with AI chat integration",
        "Streamlined recruitment process for employers",
      ],
      duration: "4 months",
    },
  },
  {
    slug: "seo-audit-tool",
    title: "SEO Audit Tool",
    role: "Full-Stack Developer",
    company: "Cybomb Technologies",
    category: "SaaS & Tools",
    description:
      "Developed a full-stack SEO audit tool with advanced result analysis.",
    features: [
      "Integrated Google Lighthouse API with n8n automation workflows",
      "Built AI-powered business name and keyword generation features",
      "Designed UI, project structure, and backend logic end to end",
    ],
    techStack: [
      "React",
      "Node.js",
      "n8n",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "Bootstrap",
      "Google Lighthouse API",
      "AI",
    ],
    caseStudy: {
      overview:
        "A powerful SEO audit platform that leverages Google Lighthouse API and AI to provide comprehensive website analysis, keyword suggestions, and actionable improvement recommendations.",
      challenges: [
        "Integrating multiple APIs for comprehensive SEO analysis",
        "Processing large amounts of data efficiently",
        "Creating intuitive visualizations for complex SEO metrics",
        "Building reliable automation workflows",
      ],
      solutions: [
        "Built modular API integration layer with fallback mechanisms",
        "Implemented job queues for background processing",
        "Designed interactive charts and score breakdowns",
        "Used n8n for robust, maintainable automation",
      ],
      keyFeatures: [
        {
          title: "Lighthouse Integration",
          description:
            "Automated performance, accessibility, and SEO audits using Google Lighthouse",
        },
        {
          title: "AI Keyword Generation",
          description:
            "Smart keyword and business name suggestions powered by AI",
        },
        {
          title: "Automated Reports",
          description:
            "Scheduled audits with email notifications and PDF exports",
        },
        {
          title: "Historical Tracking",
          description:
            "Track SEO improvements over time with visual comparisons",
        },
      ],
      contributions: [
        "Designed complete UI/UX for the audit dashboard",
        "Integrated Google Lighthouse API with custom scoring logic",
        "Built n8n automation workflows for scheduled audits",
        "Implemented AI-powered keyword generation features",
        "Created PDF export functionality for audit reports",
      ],
      highlights: [
        { label: "Audit Metrics", value: "100+" },
        { label: "API Integrations", value: "5" },
        { label: "Automation Workflows", value: "8" },
        { label: "Report Types", value: "4" },
      ],
      results: [
        "Automated SEO audits saving 5+ hours per client",
        "Improved SEO scores for audited websites",
        "Streamlined reporting for digital marketing teams",
      ],
      duration: "3 months",
    },
  },
  {
    slug: "billing-inventory-system",
    title: "Billing & Inventory Management System",
    role: "Full-Stack Developer",
    company: "Cybomb Technologies",
    category: "Enterprise",
    description:
      "Built an end-to-end billing system from development to production deployment.",
    features: [
      "Implemented custom invoice generation and inventory management",
      "Designed role-based dashboards and access control",
      "Implemented tenant-based database architecture per organization",
    ],
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "Bootstrap",
      "Multi-tenant Architecture",
    ],
    caseStudy: {
      overview:
        "A multi-tenant enterprise solution for managing billing, invoicing, and inventory across multiple organizations with isolated data and customizable workflows.",
      challenges: [
        "Designing scalable multi-tenant database architecture",
        "Ensuring data isolation between organizations",
        "Building flexible invoice templates",
        "Managing complex inventory relationships",
      ],
      solutions: [
        "Implemented tenant-based MongoDB collections with middleware isolation",
        "Built customizable invoice generator with PDF export",
        "Created inventory tracking with low-stock alerts",
        "Designed role hierarchies for organizational teams",
      ],
      keyFeatures: [
        {
          title: "Multi-Tenant Architecture",
          description:
            "Isolated databases per organization ensuring complete data separation",
        },
        {
          title: "Custom Invoicing",
          description:
            "Flexible invoice templates with automated calculations and PDF generation",
        },
        {
          title: "Inventory Tracking",
          description:
            "Real-time stock management with alerts and purchase order automation",
        },
        {
          title: "Role-Based Dashboards",
          description:
            "Customized views for admins, managers, and staff members",
        },
      ],
      results: [
        "Reduced billing errors by 80%",
        "Automated inventory restocking alerts",
        "Enabled multi-branch management from single platform",
      ],
      duration: "5 months",
    },
  },
  {
    slug: "hrms-platform",
    title: "HRMS Platform",
    role: "Full-Stack Developer",
    company: "Cybomb Technologies",
    category: "Enterprise",
    description: "Developed an HRMS system for employee lifecycle management.",
    features: [
      "Implemented onboarding and offboarding workflows",
      "Built attendance tracking with facial recognition",
      "Designed dynamic company policy creation and organization management",
      "Implemented time logs, reports, and secure file sharing",
    ],
    techStack: [
      "React",
      "Node.js",
      "Facial Recognition",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "Bootstrap",
    ],
    caseStudy: {
      overview:
        "A comprehensive Human Resource Management System that streamlines the entire employee lifecycle from onboarding to offboarding, with advanced features like facial recognition attendance.",
      challenges: [
        "Integrating facial recognition for attendance",
        "Building complex workflow automations",
        "Managing sensitive employee data securely",
        "Creating dynamic policy management system",
      ],
      solutions: [
        "Integrated facial recognition API with fallback options",
        "Built configurable workflow engine for HR processes",
        "Implemented encryption and access controls for sensitive data",
        "Created template-based policy system with version control",
      ],
      keyFeatures: [
        {
          title: "Facial Recognition Attendance",
          description:
            "Contactless attendance marking using advanced facial recognition technology",
        },
        {
          title: "Onboarding Automation",
          description:
            "Automated workflows for new employee documentation and training",
        },
        {
          title: "Policy Management",
          description:
            "Dynamic company policy creation with acknowledgment tracking",
        },
        {
          title: "Time & Reports",
          description:
            "Comprehensive time logging with customizable report generation",
        },
      ],
      results: [
        "Reduced onboarding time by 70%",
        "Eliminated buddy punching with facial recognition",
        "Centralized HR operations for multi-branch companies",
      ],
      duration: "6 months",
    },
  },
  {
    slug: "resume-analyzer",
    title: "Resume Analyzer Platform",
    role: "Full-Stack Developer",
    company: "Cybomb Technologies",
    category: "AI & Automation",
    description: "Built an AI-powered resume analysis platform.",
    features: [
      "Implemented cover letter generation and mock interview features",
      "Designed authentication, login, and user history management",
      "Integrated n8n-powered automation workflows",
    ],
    techStack: [
      "React",
      "Node.js",
      "n8n",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "Bootstrap",
      "AI/ML",
    ],
    caseStudy: {
      overview:
        "An AI-powered platform that analyzes resumes, generates tailored cover letters, and provides mock interview practice to help job seekers improve their applications.",
      challenges: [
        "Parsing diverse resume formats accurately",
        "Generating contextually relevant cover letters",
        "Building realistic mock interview experiences",
        "Handling AI processing without blocking UI",
      ],
      solutions: [
        "Built multi-format parser with fallback strategies",
        "Fine-tuned AI prompts for personalized outputs",
        "Created interactive interview simulator with feedback",
        "Implemented async processing with progress indicators",
      ],
      keyFeatures: [
        {
          title: "Resume Analysis",
          description:
            "AI-powered parsing and scoring with improvement suggestions",
        },
        {
          title: "Cover Letter Generator",
          description:
            "Automatically generate tailored cover letters for specific job listings",
        },
        {
          title: "Mock Interviews",
          description:
            "Practice with AI-generated questions based on your resume and target role",
        },
        {
          title: "User History",
          description:
            "Track all analyses, generated content, and interview sessions",
        },
      ],
      results: [
        "Helped users improve resume scores by average 40%",
        "Generated 10,000+ cover letters",
        "Reduced job application preparation time",
      ],
      duration: "3 months",
    },
  },
  {
    slug: "news-reading-website",
    title: "News Reading Website",
    role: "Full-Stack Developer",
    company: "Cybomb Technologies",
    category: "Platform",
    description:
      "Developed backend admin panel with role-based access control.",
    features: [
      "Implemented news feed automation and approval workflows",
      "Built history tracking for content moderation",
      "Enhanced frontend UI with alignment fixes and smooth animations",
    ],
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "Bootstrap",
      "Automation",
      "Motion",
    ],
    caseStudy: {
      overview:
        "A modern news platform with automated content aggregation, editorial workflows, and a smooth reading experience enhanced with animations and responsive design.",
      challenges: [
        "Automating news aggregation from multiple sources",
        "Building efficient content moderation workflows",
        "Creating engaging reading experience",
        "Handling high-traffic content delivery",
      ],
      solutions: [
        "Built RSS and API integrations for content aggregation",
        "Implemented multi-stage approval workflow",
        "Added smooth animations and reading progress indicators",
        "Optimized content delivery with caching strategies",
      ],
      keyFeatures: [
        {
          title: "Content Automation",
          description:
            "Automated news feed aggregation from multiple trusted sources",
        },
        {
          title: "Editorial Workflow",
          description:
            "Multi-stage approval process with role-based access control",
        },
        {
          title: "Smooth Animations",
          description:
            "Enhanced UI with Motion library for engaging user experience",
        },
        {
          title: "History Tracking",
          description:
            "Complete audit trail for all content modifications",
        },
      ],
      results: [
        "Reduced content publishing time by 50%",
        "Improved user engagement with animations",
        "Streamlined editorial review process",
      ],
      duration: "2 months",
    },
  },
  {
    slug: "website-ai-chatbot",
    title: "Website AI Chatbot",
    role: "Automation Developer",
    company: "Cybomb Technologies",
    category: "AI & Automation",
    description:
      "Built AI chatbot for websites using n8n automation workflows.",
    features: [
      "Integrated chatbot into live websites for real-time user interaction",
      "Designed automation logic for intelligent responses and workflows",
    ],
    techStack: [
      "n8n",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "Bootstrap",
      "AI Integration",
      "JavaScript",
    ],
    caseStudy: {
      overview:
        "An intelligent chatbot solution that integrates seamlessly into websites, providing real-time customer support and automated workflows using n8n automation platform.",
      challenges: [
        "Creating natural conversation flows",
        "Integrating with diverse website stacks",
        "Handling context across conversation sessions",
        "Building reliable automation pipelines",
      ],
      solutions: [
        "Designed conversation trees with AI fallback",
        "Built embeddable widget compatible with any website",
        "Implemented session management for context retention",
        "Used n8n for robust, visual automation workflows",
      ],
      keyFeatures: [
        {
          title: "Easy Integration",
          description:
            "Simple embed script for adding chatbot to any website",
        },
        {
          title: "AI-Powered Responses",
          description:
            "Intelligent responses with context awareness and learning",
        },
        {
          title: "n8n Workflows",
          description:
            "Visual automation builder for custom business logic",
        },
        {
          title: "Analytics Dashboard",
          description:
            "Track conversations, response times, and user satisfaction",
        },
      ],
      results: [
        "Reduced support ticket volume by 40%",
        "24/7 customer support availability",
        "Improved customer satisfaction scores",
      ],
      duration: "2 months",
    },
  },
  {
    slug: "superadmin-management-system",
    title: "SuperAdmin Management System",
    role: "Full-Stack Developer",
    company: "Cybomb Technologies",
    category: "Enterprise",
    description:
      "Unified multiple admin panels into a centralized SuperAdmin system.",
    features: [
      "Implemented master control logic and centralized authentication",
      "Built multi-admin credential and permission management",
    ],
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "Bootstrap",
      "Auth",
      "Microservices",
    ],
    caseStudy: {
      overview:
        "A centralized administration platform that unifies multiple project admin panels, providing master control over all systems with granular permission management.",
      challenges: [
        "Unifying disparate authentication systems",
        "Managing permissions across multiple projects",
        "Building secure cross-project access",
        "Creating intuitive multi-system dashboard",
      ],
      solutions: [
        "Implemented SSO-like centralized authentication",
        "Built granular permission matrix for all systems",
        "Used secure tokens for cross-project authorization",
        "Designed unified dashboard with project switching",
      ],
      keyFeatures: [
        {
          title: "Centralized Auth",
          description:
            "Single sign-on authentication across all managed systems",
        },
        {
          title: "Permission Matrix",
          description:
            "Granular access control for different admin roles and projects",
        },
        {
          title: "Multi-Project Dashboard",
          description:
            "View and manage all systems from one unified interface",
        },
        {
          title: "Audit Logging",
          description:
            "Complete activity tracking across all managed platforms",
        },
      ],
      results: [
        "Simplified admin management across 5+ projects",
        "Reduced admin credential management overhead",
        "Improved security with centralized access control",
      ],
      duration: "3 months",
    },
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(works.map((w) => w.category))),
];
