import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  MediumIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/icons";

// Define Project interface for strict typing
export interface Project {
  title: string;
  techStack: string[]; // Strictly string[]
  description: string;
  link: {
    label: string;
    href: string;
  };
}

// Define the overall ResumeData interface for better type safety
export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    social: Array<{
      name: string;
      url: string;
      icon: React.ComponentType;
    }>;
  };
  education: Array<{
    school: string;
    degree: string;
    start: string;
    end: string;
    description: string;
  }>;
  experience: Array<{
    company: string;
    role: string;
    start?: string;
    end?: string;
    description: string;
  }>;
  startups: Array<{
    name: string;
    role: string;
    description?: string;
  }>;
  achievements: Array<{
    title: string;
    by: string;
    description: string;
    reference: Array<{
      name: string;
      url: string;
    }>;
  }>;
  skills: string[];
  projects: Project[];
  keyHighlights: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export const RESUME_DATA: ResumeData = {
  name: "Areeba Irfan",
  initials: "AI",
  location: "Based in Karachi, Pakistan",
  locationLink: "https://www.google.com/maps/place/Karachi,+Pakistan",
  about: "AI & Full-Stack Developer. GIAIC Coordinator. IT Instructor. Startup & product builder.",
  summary:
    "Associate Degree in Computer Science student at Virtual University with AI-focused training at GIAIC, where I also serve as a GIAIC Coordinator. Started my technology journey in 2023 and entered the professional tech space in August 2024. I build AI and full-stack projects, teach beginner students in technology and AI, and focus on growing my own software/SaaS products.",
  avatarUrl: "/areebairfan.png",
  personalWebsiteUrl: "https://areebaxirfan.vercel.app/",
  contact: {
    email: "the.areebairfan@gmail.com",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/areebairfan/",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/AreebaxIrfan",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "https://x.com/areebaXirfan",
        icon: XIcon,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/areebaxirfan/",
        icon: InstagramIcon,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/AreebaxIrfan/",
        icon: FacebookIcon,
      },
      {
        name: "Medium",
        url: "https://medium.com/@areebaxirfan",
        icon: MediumIcon,
      },
    ],
  },
  education: [
    {
      school: "Virtual University",
      degree: "Associate Degree in Computer Science",
      start: "2025",
      end: "Present",
      description: "Currently pursuing an Associate Degree in Computer Science, focusing on programming and web development.",
    },
    {
      school: "GIAIC (Governor's Initiative on Artificial Intelligence and Computing)",
      degree: "Artificial Intelligence Program",
      start: "2024",
      end: "Present",
      description: "Enrolled in a specialized AI training program, learning advanced concepts in artificial intelligence and machine learning.",
    },
    {
      school: "Government Degree College for Women",
      degree: "Intermediate in Pre Medical",
      start: "2022",
      end: "2024",
      description: "Completed intermediate education with a focus on pre-medical studies, gaining foundational knowledge in science",
    },
  ],
  experience: [
    {
      company: "GIAIC",
      role: "GIAIC Coordinator",
      description:
        "Helping coordinate activities and supporting peers with technical learning and projects.",
    },
    {
      company: "Independent",
      role: "IT Instructor",
      description:
        "Teaching beginner students in technology and AI while supporting peers with technical learning and projects.",
    },
  ],
  startups: [
    {
      name: "AIFLEX",
      role: "Co-Founder",
    },
    {
      name: "HireX",
      role: "Co-Founder",
      description:
        "AI-powered resume analyzer product that evaluates CVs and gives recommendations for job seekers.",
    },
    {
      name: "Mindvex",
      role: "Founder / Independent Startup Project",
      description:
        "AI-powered study assistant that generates summaries, key points, and quizzes.",
    },
    {
      name: "Glove",
      role: "Founder / Independent Startup Project",
      description:
        "AI-based skin and eye scanner that analyzes uploaded images to detect potential issues.",
    },
    {
      name: "GlowUpScanner",
      role: "Founder / Independent Startup Project",
    },
    {
      name: "Ryrox",
      role: "Founder / Independent Startup Project",
      description:
        "Brand-focused landing page/product exploring product identity and web design.",
    },
    {
      name: "Zyntra",
      role: "Founder / Independent Startup Project",
      description:
        "SaaS-inspired product concept exploring polished user journeys and product design.",
    },
  ],
  achievements: [
    {
      title: "Completed 30 Days 30 Projects Challenge",
      by: "GIAIC Community",
      description: "Successfully completed a 30-day coding challenge, building a new project each day to enhance skills.",
      reference: [
        {
          name: "Reference",
          url: "https://github.com/AreebaxIrfan/100-days-of-code",
        },
      ],
    },
    {
      title: "Completed 100 Days of Coding Challenge",
      description: "Successfully completed a 100-day coding challenge, building a new project each day to enhance skills.",
      by: "GIAIC Community",
      reference: [
        {
          name: "Reference",
          url: "https://github.com/AreebaxIrfan/100-days-of-code",
        },
      ],
    },
    {
      title: "Participated in Ramadan Coding Nights",
      description: "Participated in a 20-day Ramadan coding challenge, building Python mini-projects and sharing knowledge.",
      by: "GIAIC Community",
      reference: [
        {
          name: "Reference",
          url: "https://github.com/AreebaxIrfan/ramadan-coding-nights",
        },
      ],
    },
    {
      title: "$1 Dollar Win Recognition (2-Time Winner)",
      description: "Received the $1 Dollar Win recognition twice for successfully converting Figma designs into Next.js implementations.",
      by: "Sir Asharib Ali (Lead Teacher GIAIC)",
      reference: [
        {
          name: "Reference",
          url: "#",
        },
      ],
    },
    {
      title: "Startup Challenge",
      description: "Participated in the Startup Challenge",
      by: "Sir Asharib Ali (Lead Teacher GIAIC)",
      reference: [
        {
          name: "Reference",
          url: "https://hire-x-mvp.vercel.app/",
        },
      ],
    },
    {
      title: "Hackathon & Challenge Projects",
      description:
        "Identifiable challenge work: E-commerce Website (Frontend), E-commerce Website (Full Stack), Hackathon-I — Create a Textbook for Teaching Physical AI / Humanoid Robotics, and Hackathon-II.",
      by: "Sir Ameen Alam (Dean of Faculty GIAIC)",
      reference: [
        {
          name: "Reference",
          url: "#",
        },
      ],
    },
  ],
  skills: [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Python",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "Docker",
    "RAG",
    "Qdrant",
    "Redis",
    "Celery",
    "AI/LLM Integrations",
    "API Development",
    "Full-stack Development",
    "Tech Teaching",
    "Content Creation",
    "Technical Writing",
  ],
  projects: [
    {
      title: "SaaS Payment Integration",
      techStack: ["Side Project", "Next.js", "Stripe", "Payments", "SaaS", "Vercel"],
      description:
        "A SaaS payment integration prototype built to demonstrate subscription and checkout flows with a polished UI and production-style architecture.",
      link: {
        label: "v0-saa-s-payment-integration.vercel.app",
        href: "https://v0-saa-s-payment-integration.vercel.app/",
      },
    },
    {
      title: "Zyntra",
      techStack: ["SaaS", "Next.js", "TypeScript", "UI/UX", "Product Design"],
      description:
        "A visual product and SaaS-inspired interface concept built to explore polished user journeys, modular components, and product storytelling.",
      link: {
        label: "zyntra-psi.vercel.app",
        href: "https://zyntra-psi.vercel.app/",
      },
    },
    {
      title: "Virtual University",
      techStack: ["Education", "Next.js", "TypeScript", "Web App", "Learning Platform"],
      description:
        "A virtual university landing experience and learning platform concept focused on accessibility, user flow, and modern study experiences.",
      link: {
        label: "virtual-university-steel.vercel.app",
        href: "https://virtual-university-steel.vercel.app/",
      },
    },
    {
      title: "Dermateen AI App",
      techStack: ["AI", "Next.js", "TypeScript", "Healthcare", "Vercel"],
      description:
        "An AI-powered dermatologist and skincare assistant application focused on analyzing skin concerns and providing smart recommendations.",
      link: {
        label: "v0-dermateen-ai-app.vercel.app",
        href: "https://v0-dermateen-ai-app.vercel.app/",
      },
    },
    {
      title: "Image Expressive Design",
      techStack: ["Design", "AI", "Image Processing", "Frontend", "Creative Tech"],
      description:
        "A design-driven project exploring expressive image composition and visual interpretation using modern creative technology workflows.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/image-expressive-design",
      },
    },
    {
      title: "Faithful Design Renderer",
      techStack: ["Design", "Renderer", "Frontend", "TypeScript", "Creative Engineering"],
      description:
        "A renderer-focused project designed to faithfully reproduce visual layouts and design systems through code-based composition.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/faithful-design-renderer",
      },
    },
    {
      title: "GIAIC Q4 Sunday",
      techStack: ["Learning", "AI", "Next.js", "TypeScript", "Frontend", "Coursework"],
      description:
        "A coursework-focused project for GIAIC Q4 Sunday, showcasing weekly learning tasks, front-end builds, and AI-driven product experimentation.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/GIAIC_Q4_Sunday",
      },
    },
    {
      title: "Ryrox",
      techStack: ["Brand", "Landing Page", "Next.js", "Web Design", "Marketing"],
      description:
        "A brand-focused landing page experience designed to highlight product identity, polished visuals, and a conversion-driven marketing narrative.",
      link: {
        label: "ryrox.vercel.app",
        href: "https://ryrox.vercel.app/",
      },
    },
    {
      title: "Agents SDK Learning",
      techStack: ["Side Project", "OpenAI Agents SDK", "Python", "TypeScript", "Agentic AI", "OpenAI"],
      description:
        "A comprehensive learning repository for OpenAI's Agents SDK featuring multiple agent implementations: 00.Components (reusable agent components), 01.Prep (preparation exercises), agent-clone, context-agent, lifecycle_agent, new_agent, one_agent. Covers agent patterns, context management, lifecycle hooks, and multi-agent orchestration.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/agents-sdk-learning"
      }
    },
    {
      title: "Loop Engineering",
      techStack: ["Side Project", "Python", "Shell", "JavaScript", "PowerShell", "Automation", "CLI"],
      description:
        "A hands-on curriculum of 12 projects teaching loop engineering patterns — building autonomous loops that run while you sleep. Includes watcher loops, conditional loops, scheduled loops (cron), maker-checker patterns, engine vs loop architecture, event-driven loops, cost/failure guards, and capstone projects. Each project teaches a heartbeat pattern by making you build a real, working loop.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/Loop_Engineering"
      }
    },
    {
      title: "Retrieval Rush",
      techStack: ["Side Project", "TypeScript", "JavaScript", "Next.js", "React", "Tailwind CSS"],
      description:
        "A fast-paced web game built around retrieval and memory challenges. Players interact with a polished Next.js interface designed to test recall, speed, and decision-making through an engaging game experience.",
      link: {
        label: "retrieval-rush.vercel.app",
        href: "https://retrieval-rush.vercel.app"
      }
    },
    {
      title: "Mindvex",
      techStack: ["Side Project", "Next.js", "Tailwind-CSS", "Google Gemini AI", "Shadcn UI", "auth"],
      description:
        "An AI-powered study assistant that generates accurate summaries, key points, and topic-based quizzes. Users can enter any topic or even a single keyword to instantly get structured learning material.",
      link: {
        label: "Vercel",
        href: "https://mindvex.vercel.app/"
      }
    },
    {
      title: "HireX – AI Resume Scanner (MVP Experiment)",
      techStack: ["Side Project", "Next.js", "Tailwind-CSS", "Google Gemini AI", "Shadcn UI", "auth"],
      description:
        "An AI-powered resume analyzer that evaluates CVs, highlights weaknesses, and gives instant professional recommendations for job seekers. Built as a 7-day MVP experiment with Stripe payments and AI parsing, focusing on fast launches and early validation.",
      link: {
        label: "vercel",
        href: "https://hire-x-mvp.vercel.app/"
      }
    },
    {
      title: "Glove",
      techStack: ["Side Project", "Next.js", "Tailwind-CSS", "Google Gemini AI", "Shadcn UI", "auth"],
      description:
        "An AI-based skin and eye scanner that analyzes uploaded images to detect potential issues and recommends suitable medical or skincare products.",
      link: {
        label: "vercel",
        href: "https://glowve.vercel.app/"
      }
    },
    {
      title: "Dermateen AI",
      techStack: ["AI Project", "Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Vercel AI SDK", "Supabase", "Server Actions", "API Routes", "Vercel"],
      description:
        "An AI-powered skin analysis platform that analyzes uploaded skin images to detect acne severity and provide intelligent skincare insights. Features secure Supabase authentication, protected routes, user-specific analysis history, AI-powered image analysis, responsive UI, and a scalable SaaS architecture.",
      link: {
        label: "v0-dermateen-ai-app.vercel.app",
        href: "https://v0-dermateen-ai-app.vercel.app/"
      }
    },
    {
      title: "Agent Factory Skills",
      techStack: ["AI Project", "Agentic AI", "Prompt Engineering", "AI Agents", "Markdown", "Automation", "LinkedIn Content Generation"],
      description:
        "A reusable collection of AI agent skills for building and optimizing intelligent workflows. Includes specialized skills for design optimization, LinkedIn post generation, and master prompt engineering, providing structured instructions that can be reused across AI agents and automation workflows.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/agent-factory-skills"
      }
    },
    {
      title: "Physical AI & Humanoid Robotics Course",
      techStack: ["AI Project", "Physical AI", "Humanoid Robotics", "TypeScript", "PowerShell", "Python", "MDX", "CSS", "Educational Platform"],
      description:
        "A modern educational platform created for Hackathon I to teach Physical AI, Humanoid Robotics, and intelligent systems through a structured digital textbook and interactive learning experience. The project combines educational content, web technologies, and AI-focused learning resources to provide a practical foundation for understanding next-generation robotics.",
      link: {
        label: "textbook-for-teaching-physical-ai-h.vercel.app",
        href: "https://textbook-for-teaching-physical-ai-h.vercel.app/"
      }
    },
    {
      title: "MediScan AI Pro",
      techStack: ["Side Project", "Python", "Streamlit", "Google Gemini AI"],
      description:
        "An AI-powered medical image diagnostic tool that analyzes images of visible body parts (e.g., eye, skin) to provide disease identification, treatment recommendations, and medication suggestions.",
      link: {
        label: "Github",
        href: "https://github.com/areebaxirfan/giaic_q3/blob/main/%F0%9F%93%82Class_Assignment/assignment_07/app.py",
      },
    },
    {
      title: "School Website",
      techStack: ["Side Project", "Next.js", "TailwindCSS", "TypeScript", "Shadcn UI", "Sanity CMS", "Full-stack"],
      description:
        "A modern, responsive school website built to provide an intuitive user experience for students, parents, and staff. Features include dynamic content management, event scheduling, and seamless navigation for accessing academic resources and updates.",
      link: {
        label: "Website Link",
        href: "https://khadija-school.vercel.app/",
      },
    },
    {
      title: "AI Chatbot with Chainlit",
      techStack: ["Side Project", "Python", "OpenAI SDK", "Chainlit"],
      description:
        "An interactive chatbot built with OpenAI SDK and Chainlit, featuring a responsive Python-based frontend for seamless user interaction.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/GIAIC_Q3/tree/main/Ramadan_Coding_Nights/Day_17_Advance_Agent",
      },
    },
    {
      title: "Gemini Chatbot with Streamlit",
      techStack: ["Side Project", "Python", "Streamlit", "Google Gemini API"],
      description:
        "A chatbot powered by Google's Gemini API, built with Streamlit for a user-friendly interface and efficient conversation handling.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/projects/tree/main/chatbot",
      },
    },
    {
      title: "Resume Generator",
      techStack: ["Side Project", "Python", "HTML", "CSS"],
      description:
        "A tool for creating professional resumes with customizable templates, using Python for backend logic and HTML/CSS for styling.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/projects/tree/main/resume_generator",
      },
    },
    {
      title: "Streamlit Website",
      techStack: ["Side Project", "Python", "Streamlit"],
      description:
        "A website built with Streamlit, featuring quote generation and daily challenges with an interactive interface.",
      link: {
        label: "Website Link",
        href: "https://growth-mindset-companion.streamlit.app/",
      },
    },
    {
      title: "Niky Shoes Website",
      techStack: ["Side Project", "Next.js", "Sanity CMS", "Full-stack"],
      description:
        "A full-stack e-commerce platform for shoes, featuring a Next.js frontend and Sanity CMS for content management.",
      link: {
        label: "Website Link",
        href: "https://nike-shoes-ecommerce-marketplace.vercel.app/",
      },
    },
    {
      title: "Agentia_World",
      techStack: ["Side Project", "Next.js", "TailwindCSS", "TypeScript", "Shadcn UI"],
      description:
        "A website for Agentia World presenting enterprise AI agents — featuring capabilities, AI solutions, pricing, and contact sections — built with Next.js and Tailwind CSS.",
      link: {
        label: "Website Link",
        href: "https://agentia-world-chi.vercel.app/",
      },
    },
    {
      title: "Niky Dashboard",
      techStack: ["Side Project", "Next.js", "Sanity CMS", "Full-stack"],
      description:
        "A dashboard for managing the backend and inventory of the Niky Shoes e-commerce platform, built with Next.js and Sanity CMS.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/Niky_Dashboard",
      },
    },
    {
      title: "Bouquet E-commerce Website",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "An e-commerce website for bouquets, featuring a responsive Next.js frontend with a focus on user experience.",
      link: {
        label: "Website Link",
        href: "https://boquate-websitexyz.vercel.app/",
      },
    },
    {
      title: "Next.js Admin Dashboard",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "A customizable admin dashboard built with Next.js, designed for efficient data management and visualization.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/next.js-Dashboard",
      },
    },
    {
      title: "Blog Website with Comments",
      techStack: ["Side Project", "Next.js", "React", "Frontend"],
      description:
        "A Next.js-powered blog platform with commenting functionality and a responsive design for seamless user engagement.",
      link: {
        label: "Website Link",
        href: "https://blog-website-khaki-eight.vercel.app/",
      },
    },
    {
      title: "Book Hub",
      techStack: ["Side Project", "Next.js", "API", "Frontend"],
      description:
        "A book discovery platform that fetches book data via an API, built with Next.js for a dynamic frontend.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/Book-Hub",
      },
    },
    {
      title: "Personal Portfolio",
      techStack: ["Side Project", "HTML", "CSS", "JavaScript", "Frontend"],
      description:
        "A personal portfolio website showcasing projects and skills, built with HTML, CSS, and JavaScript.",
      link: {
        label: "Vercel",
        href: "https://areebaxirfan.vercel.app/",
      },
    },
    {
      title: "Random User Generator",
      techStack: ["Side Project", "Next.js", "API", "Full-stack"],
      description:
        "An application that fetches random user data via an API, built with Next.js for a responsive frontend.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/random-user-generator",
      },
    },
    {
      title: "Todo List",
      techStack: ["Side Project", "HTML", "CSS", "JavaScript"],
      description:
        "A simple todo list application for task management, built with HTML, CSS, and JavaScript.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/to-do-list",
      },
    },
    {
      title: "Move Cursor",
      techStack: ["Side Project", "HTML", "CSS", "JavaScript", "Frontend"],
      description:
        "An interactive project that creates dynamic cursor movement effects using HTML, CSS, and JavaScript.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/Cursor-Move-Project",
      },
    },
    {
      title: "Birthday Card",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "A digital birthday card application with animations, built using Next.js for a modern frontend.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/birthday-card",
      },
    },
    {
      title: "Niky Clone",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "A clone of the Niky website, replicating its design and functionality using Next.js.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/shoes-website",
      },
    },
    {
      title: "Music Course Website",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "A music course website featuring guitar, vocal, and music production courses with individual course pages, testimonials, and instructor sections, built with Next.js.",
      link: {
        label: "Website Link",
        href: "https://music-course-web.vercel.app/",
      },
    },
    {
      title: "Resume/CV Builder",
      techStack: ["Side Project", "HTML", "CSS", "TypeScript", "Frontend"],
      description:
        "A web-based resume builder with customizable templates, built using HTML, CSS, and TypeScript.",
      link: {
        label: "GitHub",
        href: "https://resume-builderxyz.vercel.app/",
      },
    },
    {
      title: "Animated Projects",
      techStack: ["Side Project", "HTML", "CSS", "TypeScript", "Frontend"],
      description:
        "A collection of animated web projects with a clean interface, built using HTML, CSS, and TypeScript.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/Animated-Project",
      },
    },
    {
      title: "Python Projects",
      techStack: ["Side Project", "Python", "Streamlit"],
      description:
        "A collection of Python-based applications with clean interfaces, built using Streamlit and Python.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/Agentic_AI/tree/main/projects",
      },
    },
    {
      title: "100 Days of Coding",
      techStack: ["GIAIC", "Web Development", "TypeScript"],
      description:
        "Completed a 100-day coding challenge, building a new project each day to enhance skills.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/100-days-of-code",
      },
    },
    {
      title: "Ramadan Coding Nights",
      techStack: ["GIAIC", "Live Coding", "Python"],
      description:
        "Participated in a 20-day Ramadan coding challenge, building Python mini-projects and sharing knowledge.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/GIAIC_Q3/tree/main/Ramadan_Coding_Nights",
      },
    },
    {
      title: "30 Days of Projects Coding",
      techStack: ["GIAIC", "Web Development", "Next.js"],
      description:
        "Completed a 30-day coding challenge, building a new project each day to enhance skills.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/100-days-of-code",
      },
    },
  ],
  keyHighlights: [
    {
      title: "Experience",
      description: "Started 2023 · Professional Aug 2024",
      icon: "💼",
    },
    {
      title: "Projects",
      description: "30+ projects completed",
      icon: "🚀",
    },
    {
      title: "Hackathons & Challenges",
      description: "Hackathon-I & II + e-commerce builds",
      icon: "🏆",
    },
    {
      title: "Helping Class Fellows In Coding",
      description: "Assisted class fellows with computer basics and related topics",
      icon: "🤝",
    },
    {
      title: "Languages",
      description: "English, Urdu",
      icon: "🗣️",
    },
    {
      title: "Hobbies",
      description: "Coding, Writing, Learning",
      icon: "🎓",
    },
  ],
} as const;