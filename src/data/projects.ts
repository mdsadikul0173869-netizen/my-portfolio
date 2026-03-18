// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  category: "App" | "SEO" | "Blog";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AutoLead AI",
    description: "A professional SaaS platform for automated lead generation, helping businesses identify and capture potential clients efficiently.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://autolead-ai-cie9.vercel.app/",
    category: "App",
  },
  {
    id: 2,
    title: "Sabiha Learning App",
    description: "An AI-powered grammar learning application built with Gemini API and Supabase to provide interactive educational experiences.",
    techStack: ["Next.js", "Gemini API", "Supabase", "Node.js"],
    link: "#", 
    category: "App",
  },
  {
    id: 3,
    title: "Borgurar Rannaghor",
    description: "A dedicated culinary blog focusing on traditional regional recipes, optimized for search engines and local audience engagement.",
    techStack: ["Blogger", "SEO", "Content Marketing"],
    link: "#", 
    category: "Blog",
  },
  {
    id: 4,
    title: "SEO Service in Cox's Bazar",
    description: "Targeted Local SEO strategy and implementation for businesses in Cox's Bazar and Mymensingh, achieving top rankings using technical optimization.",
    techStack: ["Rank Math", "Technical SEO", "Local SEO"],
    link: "https://webseoagencybd.com",
    category: "SEO",
  }
];

export const skills = {
  seo: [
    "On-Page SEO", 
    "Technical SEO", 
    "Schema Markup", 
    "Rank Math Specialist", 
    "Google Ads (2025 Certified)"
  ],
  development: [
    "Next.js", 
    "React", 
    "Node.js", 
    "Tailwind CSS", 
    "Supabase"
  ],
  security: [
    "Ethical Hacking", 
    "Nmap", 
    "Kali Linux", 
    "Network Security"
  ]
};