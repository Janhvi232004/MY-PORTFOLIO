import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  monster,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

// ================= NAVIGATION =================
const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  { id: navigationPaths.about, title: "About" },
  { id: navigationPaths.work, title: "Projects" },
  { id: navigationPaths.contact, title: "Contact" },
];

// ================= SERVICES =================
const services = [
  { title: "AI Engineer", icon: web },
  { title: "Machine Learning Developer", icon: creator },
  { title: "Full Stack AI Developer", icon: mobile },
  { title: "Data Scientist", icon: backend },
];

// ================= TECHNOLOGIES =================
const technologies = [
  { name: "Python", icon: java },
  { name: "C++", icon: java },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Next JS", icon: nextJs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "Git", icon: git },
];

// ================= EXPERIENCE =================
const experiences = [
  {
    title: "Artificial Intelligence Intern",
    company_name: "InternForte",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Apr 2025 - Jun 2025",
    points: [
      "Implemented Machine Learning models including supervised, unsupervised, and reinforcement learning.",
      "Developed AI-powered solutions integrating NLP and predictive analytics.",
      "Worked on real-world datasets and optimized ML pipelines.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "InternForte",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Performed Exploratory Data Analysis (EDA) and data preprocessing.",
      "Built dashboards and insights for data-driven decision making.",
      "Worked with real-world datasets for analytics and visualization.",
    ],
  },
  {
    title: "CHRO CHIEF HUMAN RESOURCE OFFICER",
    company_name: "CyberShield Club",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Organized cybersecurity awareness events and student engagement programs.",
      "Led recruitment, technical workshops, and student leadership initiatives.",
      "Promoted technical growth and communication strategies in the club.",
    ],
  },
];

// ================= PROJECTS =================
const projects = [
  {
    name: "Multimodal Healthcare AI Diagnostic Suite",
    description:
      "A multimodal AI system analyzing MRI, X-ray, and blood reports using CNNs to predict disease risks with real-time health recommendations and AI chatbot.",
    tags: [
      { name: "AI", color: "blue-text-gradient" },
      { name: "RAG", color: "green-text-gradient" },
      { name: "NextJS", color: "pink-text-gradient" },
    ],
    image: aptihealthWeb,
    hosted_link: "#",
  },
  {
    name: "Automated Text Summarization Tool",
    description:
      "Built using Gemini API for extractive and abstractive summarization of large documents with batch processing and structured output.",
    tags: [
      { name: "NLP", color: "blue-text-gradient" },
      { name: "Gemini API", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: zealWeb,
    hosted_link: "#",
  },
  {
    name: "Custom Knowledge Base Q&A System",
    description:
      "LLM-powered system using GPT-4 and RAG to query private datasets with vector embeddings and semantic search to reduce hallucinations.",
    tags: [
      { name: "LLM", color: "blue-text-gradient" },
      { name: "Vector DB", color: "green-text-gradient" },
      { name: "RAG", color: "pink-text-gradient" },
    ],
    image: rollWeb,
    hosted_link: "#",
  },
];

// ================= PERSONAL INFO =================
const personalInfo = {
  name: "Janhvi",
  fullName: "Janhvi Indapurkar",
  email: "janhvi.indapurkar23@gmail.com",
  mobile: "+91 9860106171",
  role: "Artificial Intelligence Engineer | GenAI Developer",

  about: `I am a B.Tech Artificial Intelligence student and aspiring AI Engineer with strong expertise in Machine Learning, Data Science, and Large Language Models (LLMs). I have hands-on experience building multimodal AI systems, RAG-based chatbots, and healthcare diagnostic platforms. Passionate about solving real-world problems using AI, I love building scalable, intelligent applications that bridge data with actionable insights.`,

  projectsIntro: `These projects showcase my work in Artificial Intelligence, Machine Learning, and Full-Stack Development. Each project demonstrates my ability to design intelligent systems, integrate AI models, and build real-world applications with production-ready architectures.`,
};

// ================= PUBLIC LINKS =================
const publicUrls = {
  resume: "https://drive.google.com/file/d/18zvP7nONHkrjJ4X9DnbgBIb7DpDAC4mO/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/janhvi-indapurkar-a93871293/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/YOUR_GITHUB_USERNAME",
      icon: github,
    },
  },
};

// ================= EXPORTS =================
export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
