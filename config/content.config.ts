// ============================================================
//  PORTFOLIO CONTENT CONFIG
//  Edit this file to update everything on your portfolio.
//  No component files need to be touched for content changes.
//
//  NOTE ON STATIC ASSETS (IMAGES & FILES):
//  Next.js does NOT auto-scan root folders. All static assets must
//  be placed inside the `public/` directory:
//    • Images: public/images/avatar.jpg   -> "/images/avatar.jpg"
//    • Files:  public/files/resume.pdf    -> "/files/resume.pdf"
// ============================================================

// ─── PERSONAL INFO ──────────────────────────────────────────
export const personal = {
  name: "John Lester Malonzo",
  greeting: "Hello, I’m John Lester.",
  role: "Solutions Software Engineer",
  tagline: "I build practical software solutions to problems.",
  bio: `I'm John, a Computer Science graduate from the University of the East. I like taking a messy problem, find solution and try to make a software people can use.`,
  avatarUrl: "/images/avatar.jpg",
  cvUrl: "/files/resume.pdf",
  availability: {
    open: true,
    label: "Open to work",
  },
} as const;

// ─── CONTACT & SOCIALS ──────────────────────────────────────
export const contact = {
  email: "malonzo22.johnlester@gmail.com",
  phone: "09473413800",
  github: "https://github.com/LuckyProgramme",
  linkedin: "https://www.linkedin.com/in/john-lester-malonzo/",
  location: "Herbosa, Tondo, Manila, Philippines",
} as const;

// ─── EXPERIENCE ─────────────────────────────────────────────
export const experience: ExperienceEntry[] = [
  {
    company: "CODEV",
    role: "Quality Assurance Intern",
    period: "2025",
    description: "Supported the development lifecycle of a fintech SaaS platform through QA testing and Ruby with RSpec. Reviewed peer test scripts to find possible data issues and check that they followed company practices.",
    tags: ["RSpec", "Ruby", "QA testing"],
  },
  {
    company: "Entertainment Multimedia Computing Student Society  ",
    role: "Student Organization Program Head & Team Lead",
    period: "2024 — 2026",
    description: "Managed event proposals and planning sessions, helping organizations secure approval and deliver events on time. Directed committees responsible for event logistics and program flow.",
    tags: ["Event Planning", "Team Leadership", "Program Management"],
  },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────

// ─── EDUCATION ──────────────────────────────────────────────
export const education: Education[] = [
  {
    institution: "University of the East",
    degree: "Bachelor of Science in Computer Science",
    period: "Graduated 2026",
    description: "Computer Science graduate with a focus on AI-integrated development and applied software projects.",
  },
];

// ─── PROJECTS ───────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "deal-finder",
    title: "Deal Finder",
    description: "A Python tool that collects Carousell listings and filters secondhand deals using Google Sheets input. Gemini API semantic matching helps compare listings and calculate confidence scores.",
    tags: ["Python", "BeautifulSoup4", "Gemini API", "Google Sheets API"],
    imageUrl: "",
    githubUrl: "https://github.com/LuckyProgramme/carousell_listing_scraper.git",
    liveDemoUrl: "",
    caseStudyUrl: "",
    featured: true,
  },
  {
    id: "tugon-general-mathematics-ai-tutor",
    title: "Tugon: General Mathematics AI Tutor",
    description: "An AI-driven educational platform created for an undergraduate thesis. Built with React, TypeScript, and Supabase, with a Vercel CI/CD workflow for quick feature updates based on student and teacher feedback.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Express.js", "Supabase", "Postgres"],
    imageUrl: "",
    githubUrl: "",
    liveDemoUrl: "http://tugonv2.vercel.app",
    caseStudyUrl: "",
    featured: false,
  },
  {
    id: "milktea-pos",
    title: "Milktea Point-Of-Sale System",
    description: "A web-based point-of-sale application with a Java backend, Apache server environment, and responsive HTML and JavaScript frontend. SQL queries support transaction processing and ingredient inventory workflows.",
    tags: ["Java", "JavaScript", "HTML5", "CSS", "Apache", "SQL"],
    imageUrl: "",
    githubUrl: "https://github.com/LuckyProgramme/Milktea-POS.git",
    liveDemoUrl: "",
    caseStudyUrl: "",
    featured: false,
  },
];

// ─── SKILLS / STACK ─────────────────────────────────────────
export const skills: SkillCategory[] = [
  {
    category: "frontend",
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS"],
  },
  {
    category: "backend",
    label: "Backend",
    items: ["Python", "Java", "Express.js", "Node.js", "SQL"],
  },
  {
    category: "tools",
    label: "Tools & platforms",
    items: ["Supabase", "Firebase", "Vercel", "Docker", "Postman"],
  },
];

export const moreTools = ["Apache / Tomcat", "WSL2", "VS Code", "Figma", "Google Stitch", "Codex"];

export const sectionCopy = {
  projects: "A few things I built while learning to turn an idea into something useful.",
  skills: "I use Python and web tools to build practical projects. Here are the technologies I have worked with.",
  contact: "Have a role or project in mind? Email me and tell me what you’re working on.",
} as const;

// ─── FAQ ────────────────────────────────────────────────────
export const faq: FaqEntry[] = [
  {
    question: "What kind of work do you do?",
    answer: "I work on Python development, web applications, AI-integrated projects, and quality assurance. I enjoy turning practical problems into useful software.",
  },
  {
    question: "What technologies have you used?",
    answer: "My experience includes Python, JavaScript, Java, TypeScript, React, Express.js, SQL, Supabase, Firebase, Vercel, Apache, Docker, Postman, and RSpec.",
  },
  {
    question: "What projects have you built?",
    answer: "Some relevant projects that shows my experience include a Carousell deal finder webscraper script, the Tugon General Mathematics AI Tutor in which I integrated shows AI integration and web development experience, and a Milktea point-of-sale system on some exposure to Java.",
  },
  {
    question: "Are you open to work?",
    answer: "Yes. I am open to opportunities in Python development, and web development.",
  },
];

// ─── SIDEBAR METADATA ───────────────────────────────────────
export const siteIdentity = {
  brandId: "MALONZO_DEV",
  sysUser: "LESTER MALONZO",
} as const;

// ─── TYPE DEFINITIONS ───────────────────────────────────────

interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  description: string;
  tags: string[];
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveDemoUrl: string;
  caseStudyUrl: string;
  featured: boolean;
}

interface SkillCategory {
  category: string;
  label: string;
  items: string[];
}

interface FaqEntry {
  question: string;
  answer: string;
}
