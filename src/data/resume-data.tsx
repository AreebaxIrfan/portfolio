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
  about: "Agentic AI & Full-Stack Developer. GIAIC Coordinator. IT Instructor. Startup & product builder.",
  summary:
    "Full-stack and Agentic AI developer from Karachi with 2+ years of experience. I build AI agents, LLM-powered apps, and full-stack products with Next.js and Python. I'm studying Computer Science at Virtual University and AI at GIAIC, where I also serve as a coordinator. I teach beginners technology and AI, and I'm growing my own SaaS products.",
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
      description: "Studying Computer Science with a focus on programming and web development.",
    },
    {
      school: "GIAIC (Governor's Initiative on Artificial Intelligence and Computing)",
      degree: "Artificial Intelligence Program",
      start: "2024",
      end: "Present",
      description: "Specialized training in artificial intelligence and machine learning.",
    },
    {
      school: "Government Degree College for Women",
      degree: "Intermediate in Pre Medical",
      start: "2022",
      end: "2024",
      description: "Completed intermediate studies in Pre-Medical, building a strong foundation in science.",
    },
  ],
  experience: [
    {
      company: "GIAIC",
      role: "GIAIC Coordinator",
      description:
        "Coordinating community activities and supporting peers with technical learning and projects.",
    },
    {
      company: "Independent",
      role: "IT Instructor",
      description:
        "Teaching beginners technology and AI, and supporting peers with their learning and projects.",
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
        "AI resume analyzer that evaluates CVs and gives job seekers clear recommendations.",
    },
    {
      name: "Mindvex",
      role: "Founder / Independent Startup Project",
      description:
        "AI study assistant that generates summaries, key points, and quizzes.",
    },
    {
      name: "Glove",
      role: "Founder / Independent Startup Project",
      description:
        "AI skin and eye scanner that analyzes uploaded images to flag potential issues.",
    },
    {
      name: "GlowUpScanner",
      role: "Founder / Independent Startup Project",
    },
    {
      name: "Ryrox",
      role: "Founder / Independent Startup Project",
      description:
        "Brand-focused landing page exploring product identity and web design.",
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
      title: "Completed the 30 Days 30 Projects Challenge",
      by: "GIAIC Community",
      description: "Completed a 30-day coding challenge, building a new project every day to sharpen my skills.",
      reference: [
        {
          name: "Reference",
          url: "https://github.com/AreebaxIrfan/100-days-of-code",
        },
      ],
    },
    {
      title: "Completed the 100 Days of Coding Challenge",
      description: "Completed a 100-day coding challenge, building a new project every day to sharpen my skills.",
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
      description: "Took part in a 20-day Ramadan coding challenge, building Python mini-projects and sharing knowledge.",
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
      description: "Won the $1 Dollar Win recognition twice for converting Figma designs into Next.js implementations.",
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
      description: "Participated in the Startup Challenge.",
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
        "Challenge work includes an E-commerce Website (Frontend), an E-commerce Website (Full Stack), Hackathon-I (a textbook for teaching Physical AI / Humanoid Robotics), and Hackathon-II.",
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
        "A SaaS payment prototype demonstrating subscription and checkout flows, with a polished UI and production-style architecture.",
      link: {
        label: "v0-saa-s-payment-integration.vercel.app",
        href: "https://v0-saa-s-payment-integration.vercel.app/",
      },
    },
    {
      title: "Zyntra",
      techStack: ["SaaS", "Next.js", "TypeScript", "UI/UX", "Product Design"],
      description:
        "A SaaS-inspired interface concept exploring polished user journeys, modular components, and product storytelling.",
      link: {
        label: "zyntra-psi.vercel.app",
        href: "https://zyntra-psi.vercel.app/",
      },
    },
    {
      title: "Virtual University",
      techStack: ["Education", "Next.js", "TypeScript", "Web App", "Learning Platform"],
      description:
        "A virtual university landing page and learning platform concept focused on accessibility, clear user flow, and a modern study experience.",
      link: {
        label: "virtual-university-steel.vercel.app",
        href: "https://virtual-university-steel.vercel.app/",
      },
    },
    {
      title: "Dermateen AI App",
      techStack: ["AI", "Next.js", "TypeScript", "Healthcare", "Vercel"],
      description:
        "An AI-powered dermatology and skincare assistant that analyzes skin concerns and provides smart recommendations.",
      link: {
        label: "v0-dermateen-ai-app.vercel.app",
        href: "https://v0-dermateen-ai-app.vercel.app/",
      },
    },
    {
      title: "Image Expressive Design",
      techStack: ["Design", "AI", "Image Processing", "Frontend", "Creative Tech"],
      description:
        "A design-driven project exploring expressive image composition and visual interpretation with modern creative tech.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/image-expressive-design",
      },
    },
    {
      title: "Faithful Design Renderer",
      techStack: ["Design", "Renderer", "Frontend", "TypeScript", "Creative Engineering"],
      description:
        "A renderer that faithfully reproduces visual layouts and design systems through code-based composition.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/faithful-design-renderer",
      },
    },
    {
      title: "GIAIC Q4 Sunday",
      techStack: ["Learning", "AI", "Next.js", "TypeScript", "Frontend", "Coursework"],
      description:
        "Coursework from GIAIC Q4 Sunday: weekly learning tasks, front-end builds, and AI product experiments.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/GIAIC_Q4_Sunday",
      },
    },
    {
      title: "Ryrox",
      techStack: ["Brand", "Landing Page", "Next.js", "Web Design", "Marketing"],
      description:
        "A brand-focused landing page that highlights product identity through polished visuals and a conversion-driven narrative.",
      link: {
        label: "ryrox.vercel.app",
        href: "https://ryrox.vercel.app/",
      },
    },
    {
      title: "Agents SDK Learning",
      techStack: ["Side Project", "OpenAI Agents SDK", "Python", "TypeScript", "Agentic AI", "OpenAI"],
      description:
        "A learning repository for OpenAI's Agents SDK with multiple agent implementations, including reusable components, context-agent, and lifecycle_agent. Covers agent patterns, context management, lifecycle hooks, and multi-agent orchestration.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/agents-sdk-learning"
      }
    },
    {
      title: "Loop Engineering",
      techStack: ["Side Project", "Python", "Shell", "JavaScript", "PowerShell", "Automation", "CLI"],
      description:
        "A hands-on curriculum of 12 projects on loop engineering: building autonomous loops that run while you sleep. Covers watcher, conditional, scheduled (cron), and event-driven loops, maker-checker patterns, engine vs. loop architecture, cost/failure guards, and capstone projects.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/Loop_Engineering"
      }
    },
    {
      title: "Retrieval Rush",
      techStack: ["Side Project", "TypeScript", "JavaScript", "Next.js", "React", "Tailwind CSS"],
      description:
        "A fast-paced web game built around retrieval and memory challenges, testing recall, speed, and decision-making through a polished Next.js interface.",
      link: {
        label: "retrieval-rush.vercel.app",
        href: "https://retrieval-rush.vercel.app"
      }
    },
    {
      title: "Mindvex",
      techStack: ["Side Project", "Next.js", "Tailwind-CSS", "Google Gemini AI", "Shadcn UI", "auth"],
      description:
        "An AI study assistant that turns any topic, even a single keyword, into structured summaries, key points, and quizzes.",
      link: {
        label: "Vercel",
        href: "https://mindvex.vercel.app/"
      }
    },
    {
      title: "HireX – AI Resume Scanner (MVP Experiment)",
      techStack: ["Side Project", "Next.js", "Tailwind-CSS", "Google Gemini AI", "Shadcn UI", "auth"],
      description:
        "An AI resume analyzer that evaluates CVs, highlights weaknesses, and gives job seekers instant recommendations. Built as a 7-day MVP experiment with Stripe payments and AI parsing, focused on fast launches and early validation.",
      link: {
        label: "vercel",
        href: "https://hire-x-mvp.vercel.app/"
      }
    },
    {
      title: "Glove",
      techStack: ["Side Project", "Next.js", "Tailwind-CSS", "Google Gemini AI", "Shadcn UI", "auth"],
      description:
        "An AI skin and eye scanner that analyzes uploaded images to detect potential issues and recommends suitable medical or skincare products.",
      link: {
        label: "vercel",
        href: "https://glowve.vercel.app/"
      }
    },
    {
      title: "Dermateen AI",
      techStack: ["AI Project", "Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Vercel AI SDK", "Supabase", "Server Actions", "API Routes", "Vercel"],
      description:
        "An AI skin analysis platform that detects acne severity from uploaded images and provides skincare insights. Features Supabase authentication, protected routes, per-user analysis history, and a responsive, scalable SaaS architecture.",
      link: {
        label: "v0-dermateen-ai-app.vercel.app",
        href: "https://v0-dermateen-ai-app.vercel.app/"
      }
    },
    {
      title: "Agent Factory Skills",
      techStack: ["AI Project", "Agentic AI", "Prompt Engineering", "AI Agents", "Markdown", "Automation", "LinkedIn Content Generation"],
      description:
        "A reusable collection of AI agent skills for building and optimizing workflows, including skills for design optimization, LinkedIn post generation, and master prompt engineering.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/agent-factory-skills"
      }
    },
    {
      title: "Physical AI & Humanoid Robotics Course",
      techStack: ["AI Project", "Physical AI", "Humanoid Robotics", "TypeScript", "PowerShell", "Python", "MDX", "CSS", "Educational Platform"],
      description:
        "A digital textbook and interactive learning platform built for Hackathon I, teaching Physical AI, Humanoid Robotics, and intelligent systems through structured content and practical resources.",
      link: {
        label: "textbook-for-teaching-physical-ai-h.vercel.app",
        href: "https://textbook-for-teaching-physical-ai-h.vercel.app/"
      }
    },
    {
      title: "MediScan AI Pro",
      techStack: ["Side Project", "Python", "Streamlit", "Google Gemini AI"],
      description:
        "An AI medical image tool that analyzes visible body parts (e.g., eye, skin) to identify possible conditions and suggest treatments and medications.",
      link: {
        label: "Github",
        href: "https://github.com/areebaxirfan/giaic_q3/blob/main/%F0%9F%93%82Class_Assignment/assignment_07/app.py",
      },
    },
    {
      title: "School Website",
      techStack: ["Side Project", "Next.js", "TailwindCSS", "TypeScript", "Shadcn UI", "Sanity CMS", "Full-stack"],
      description:
        "A responsive school website for students, parents, and staff, with dynamic content management, event scheduling, and easy access to academic resources and updates.",
      link: {
        label: "Website Link",
        href: "https://khadija-school.vercel.app/",
      },
    },
    {
      title: "AI Chatbot with Chainlit",
      techStack: ["Side Project", "Python", "OpenAI SDK", "Chainlit"],
      description:
        "An interactive chatbot built with the OpenAI SDK and Chainlit, with a responsive Python-based interface.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/GIAIC_Q3/tree/main/Ramadan_Coding_Nights/Day_17_Advance_Agent",
      },
    },
    {
      title: "Gemini Chatbot with Streamlit",
      techStack: ["Side Project", "Python", "Streamlit", "Google Gemini API"],
      description:
        "A Streamlit chatbot powered by Google's Gemini API, with a clean interface and smooth conversation handling.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/projects/tree/main/chatbot",
      },
    },
    {
      title: "Resume Generator",
      techStack: ["Side Project", "Python", "HTML", "CSS"],
      description:
        "A resume creation tool with customizable templates, using Python for backend logic and HTML/CSS for styling.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/projects/tree/main/resume_generator",
      },
    },
    {
      title: "Streamlit Website",
      techStack: ["Side Project", "Python", "Streamlit"],
      description:
        "An interactive Streamlit website that generates quotes and daily challenges.",
      link: {
        label: "Website Link",
        href: "https://growth-mindset-companion.streamlit.app/",
      },
    },
    {
      title: "Niky Shoes Website",
      techStack: ["Side Project", "Next.js", "Sanity CMS", "Full-stack"],
      description:
        "A full-stack shoe e-commerce platform with a Next.js frontend and Sanity CMS for content management.",
      link: {
        label: "Website Link",
        href: "https://nike-shoes-ecommerce-marketplace.vercel.app/",
      },
    },
    {
      title: "Agentia_World",
      techStack: ["Side Project", "Next.js", "TailwindCSS", "TypeScript", "Shadcn UI"],
      description:
        "A website presenting enterprise AI agents, with sections for capabilities, AI solutions, pricing, and contact. Built with Next.js and Tailwind CSS.",
      link: {
        label: "Website Link",
        href: "https://agentia-world-chi.vercel.app/",
      },
    },
    {
      title: "Niky Dashboard",
      techStack: ["Side Project", "Next.js", "Sanity CMS", "Full-stack"],
      description:
        "An admin dashboard for managing the backend and inventory of the Niky Shoes platform, built with Next.js and Sanity CMS.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/Niky_Dashboard",
      },
    },
    {
      title: "Bouquet E-commerce Website",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "A responsive bouquet e-commerce website built with Next.js, with a focus on user experience.",
      link: {
        label: "Website Link",
        href: "https://boquate-websitexyz.vercel.app/",
      },
    },
    {
      title: "Next.js Admin Dashboard",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "A customizable admin dashboard built with Next.js for efficient data management and visualization.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/next.js-Dashboard",
      },
    },
    {
      title: "Blog Website with Comments",
      techStack: ["Side Project", "Next.js", "React", "Frontend"],
      description:
        "A Next.js blog platform with commenting and a responsive design for smooth reader engagement.",
      link: {
        label: "Website Link",
        href: "https://blog-website-khaki-eight.vercel.app/",
      },
    },
    {
      title: "Book Hub",
      techStack: ["Side Project", "Next.js", "API", "Frontend"],
      description:
        "A book discovery platform built with Next.js that fetches book data from an API.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/Book-Hub",
      },
    },
    {
      title: "Personal Portfolio",
      techStack: ["Side Project", "HTML", "CSS", "JavaScript", "Frontend"],
      description:
        "My personal portfolio showcasing projects and skills, built with HTML, CSS, and JavaScript.",
      link: {
        label: "Vercel",
        href: "https://areebaxirfan.vercel.app/",
      },
    },
    {
      title: "Random User Generator",
      techStack: ["Side Project", "Next.js", "API", "Full-stack"],
      description:
        "A responsive Next.js app that fetches and displays random user data from an API.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/random-user-generator",
      },
    },
    {
      title: "Todo List",
      techStack: ["Side Project", "HTML", "CSS", "JavaScript"],
      description:
        "A simple to-do app for task management, built with HTML, CSS, and JavaScript.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/to-do-list",
      },
    },
    {
      title: "Move Cursor",
      techStack: ["Side Project", "HTML", "CSS", "JavaScript", "Frontend"],
      description:
        "An interactive project with dynamic cursor movement effects, built with HTML, CSS, and JavaScript.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/Cursor-Move-Project",
      },
    },
    {
      title: "Birthday Card",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "An animated digital birthday card built with Next.js.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/birthday-card",
      },
    },
    {
      title: "Niky Clone",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "A Next.js clone of the Niky website that replicates its design and functionality.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/shoes-website",
      },
    },
    {
      title: "Music Course Website",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "A Next.js website for guitar, vocal, and music production courses, with individual course pages, testimonials, and instructor sections.",
      link: {
        label: "Website Link",
        href: "https://music-course-web.vercel.app/",
      },
    },
    {
      title: "Resume/CV Builder",
      techStack: ["Side Project", "HTML", "CSS", "TypeScript", "Frontend"],
      description:
        "A web-based resume builder with customizable templates, built with HTML, CSS, and TypeScript.",
      link: {
        label: "GitHub",
        href: "https://resume-builderxyz.vercel.app/",
      },
    },
    {
      title: "Animated Projects",
      techStack: ["Side Project", "HTML", "CSS", "TypeScript", "Frontend"],
      description:
        "A collection of animated web projects with a clean interface, built with HTML, CSS, and TypeScript.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/Animated-Project",
      },
    },
    {
      title: "Python Projects",
      techStack: ["Side Project", "Python", "Streamlit"],
      description:
        "A collection of Python applications with clean interfaces, built with Streamlit.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/Agentic_AI/tree/main/projects",
      },
    },
    {
      title: "100 Days of Coding",
      techStack: ["GIAIC", "Web Development", "TypeScript"],
      description:
        "Completed a 100-day coding challenge, building a new project every day to sharpen my skills.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/100-days-of-code",
      },
    },
    {
      title: "Ramadan Coding Nights",
      techStack: ["GIAIC", "Live Coding", "Python"],
      description:
        "Took part in a 20-day Ramadan coding challenge, building Python mini-projects and sharing knowledge.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/GIAIC_Q3/tree/main/Ramadan_Coding_Nights",
      },
    },
    {
      title: "30 Days of Projects Coding",
      techStack: ["GIAIC", "Web Development", "Next.js"],
      description:
        "Completed a 30-day coding challenge, building a new project every day to sharpen my skills.",
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
      title: "Helping Class Fellows in Coding",
      description: "Helped class fellows with computer basics and related topics",
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