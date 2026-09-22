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
  role: "Software Engineer",
  tagline: "Building precise, scalable systems.",
  bio: `Full-stack software engineer with a focus on clean architecture and developer experience.
I enjoy turning complex problems into simple, elegant solutions.`,
  avatarUrl: "/images/avatar.jpg",
  cvUrl: "/files/resume.pdf",
  availability: {
    open: true,
    label: "OPEN TO WORK",
  },
} as const;

// ─── CONTACT & SOCIALS ──────────────────────────────────────
export const contact = {
  email: "johnlestermalonzo29@gmail.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  facebook: "https://facebook.com/yourusername",
  location: "Philippines",
} as const;

// ─── EXPERIENCE ─────────────────────────────────────────────
export const experience: ExperienceEntry[] = [
  {
    company: "Company Name",
    role: "Software Engineer",
    period: "2024 — Present",
    description: "Brief description of responsibilities and key achievements. Keep it to 1–2 sentences.",
    tags: ["--react", "--typescript", "--node"],
  },
  {
    company: "Previous Company",
    role: "Junior Developer",
    period: "2022 — 2024",
    description: "What you built or contributed to. Focus on impact, not just duties.",
    tags: ["--python", "--django", "--postgresql"],
  },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────
export const certifications: Certification[] = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    description: "Validates expertise in developing, deploying, and debugging cloud-based applications using AWS.",
    tags: ["--aws", "--cloud"],
  },
  {
    name: "Professional Cloud Developer",
    issuer: "Google Cloud",
    year: "2023",
    description: "Demonstrates ability to build scalable and highly available applications using Google Cloud technologies.",
    tags: ["--google-cloud", "--gcp"],
  },
  {
    name: "Meta Frontend Developer Certificate",
    issuer: "Meta",
    year: "2022",
    description: "Comprehensive program covering React, UI/UX principles, and modern frontend engineering practices.",
    tags: ["--react", "--frontend"],
  },
];

// ─── EDUCATION ──────────────────────────────────────────────
export const education: Education[] = [
  {
    institution: "University Name",
    degree: "Bachelor of Science in Computer Science",
    period: "2018 — 2022",
    description: "Graduated with honors. Focused on software engineering, data structures, and algorithms.",
  },
  {
    institution: "Senior High School",
    degree: "STEM Strand — Science, Technology, Engineering & Mathematics",
    period: "2016 — 2018",
    description: "Completed STEM strand with distinction. Active member of the programming club.",
  },
];

// ─── ACHIEVEMENTS ───────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    title: "Open Source Contributor",
    description: "Contributed to multiple open source projects with accepted pull requests on GitHub.",
    year: "2024",
  },
  {
    title: "Hackathon 1st Place",
    description: "Won first place at a national-level 24-hour hackathon with a real-time logistics platform.",
    year: "2023",
  },
  {
    title: "Dean's Lister",
    description: "Consistently placed on the Dean's List throughout undergraduate studies.",
    year: "2018 — 2022",
  },
  {
    title: "Best Capstone Project",
    description: "Awarded Best Capstone for an AI-assisted inventory management system.",
    year: "2022",
  },
];

// ─── PROJECTS ───────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "project-one",
    title: "Project One",
    description: "Short description of the project — what it does, why it exists, and what you learned.",
    tags: ["--react", "--typescript", "--tailwind"],
    imageUrl: "/images/projects/project-one.png",
    githubUrl: "https://github.com/yourusername/project-one",
    liveDemoUrl: "https://project-one.vercel.app",
    caseStudyUrl: "",
    featured: true,
  },
  {
    id: "project-two",
    title: "Project Two",
    description: "Another project description. What problem does it solve?",
    tags: ["--python", "--fastapi", "--postgresql"],
    imageUrl: "",
    githubUrl: "https://github.com/yourusername/project-two",
    liveDemoUrl: "",
    caseStudyUrl: "",
    featured: false,
  },
];

// ─── SKILLS / STACK ─────────────────────────────────────────
export const skills: SkillCategory[] = [
  {
    category: "--frontend",
    label: "Frontend",
    items: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript",      level: 85 },
      { name: "Tailwind CSS",    level: 88 },
    ],
  },
  {
    category: "--backend",
    label: "Backend",
    items: [
      { name: "Node.js",      level: 80 },
      { name: "Python",       level: 75 },
      { name: "PostgreSQL",   level: 70 },
    ],
  },
  {
    category: "--devops",
    label: "DevOps & Tools",
    items: [
      { name: "Git / GitHub",  level: 90 },
      { name: "Docker",        level: 65 },
      { name: "Vercel / CI",   level: 75 },
    ],
  },
];

// ─── FAQ ────────────────────────────────────────────────────
export const faq: FaqEntry[] = [
  {
    question: "Are you available for freelance or contract work?",
    answer: "Yes — I'm open to freelance and contract engagements, especially for web applications, APIs, and developer tooling. Feel free to reach out via email to discuss project scope and timeline.",
  },
  {
    question: "What is your preferred tech stack?",
    answer: "My go-to stack is TypeScript + React/Next.js on the frontend, Node.js or Python (FastAPI/Django) on the backend, and PostgreSQL or Supabase for the database. I'm also comfortable with cloud platforms like AWS and GCP.",
  },
  {
    question: "Do you have experience with remote teams?",
    answer: "Absolutely. I've worked with distributed teams across different time zones using tools like Slack, Notion, Linear, and GitHub Projects. I'm self-directed and keep communication async-friendly.",
  },
  {
    question: "What kind of roles are you looking for?",
    answer: "Full-stack or frontend-focused roles at product-driven companies. I'm especially interested in teams that care about DX, code quality, and building tools that developers love to use.",
  },
];

// ─── SIDEBAR METADATA ───────────────────────────────────────
export const siteIdentity = {
  brandId: "DEV_PORTFOLIO_v1.0",
  sysUser: "SYS_USER",
  version: "v1.0.0",
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

interface Achievement {
  title: string;
  description: string;
  year: string;
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
  items: { name: string; level: number }[];
}

interface FaqEntry {
  question: string;
  answer: string;
}
