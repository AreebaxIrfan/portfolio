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
  achievements: Array<{
    title: string;
    by: string;
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
  about: "Creative Full Stack Developer. UI and UX Expert. Tech Enthusiast. Problem Solver. 💻",
  summary:
    "I specialize in building accessible, user-friendly web applications with over a year of tech experience. Passionate about solving real-world problems, I create clean, efficient, and scalable code. Currently studying Computer Science and AI, I contribute to open-source and engage in coding challenges.",
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
  ],
  achievements: [
    {
      title: "Completed 30 Days 30 Projects Challenge",
      by: "GIAIC Community",
      reference: [
        {
          name: "Reference",
          url: "https://github.com/AreebaxIrfan/100-days-of-code",
        },
      ],
    },
    {
      title: "Completed 100 Days of Coding Challenge",
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
      by: "GIAIC Community",
      reference: [
        {
          name: "Reference",
          url: "https://github.com/AreebaxIrfan/ramadan-coding-nights",
        },
      ],
    },
    {
      title: "1$ Dollar Win Recognition",
      by: "Sir Asharib Ali (Lead Teacher GIAIC)",
      reference: [
        {
          name: "Reference",
          url: "#",
        },
      ],
    },
    {
      title: "Participated in 3+ Hackathons",
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
    "API Development",
    "Full-stack Development",
    "Tech Teaching",
    "Content Creation",
    "Technical Writing",
  ],
  projects: [
    {
      title: "MediScan AI Pro",
      techStack: ["Side Project", "Python", "Streamlit", "Google Gemini AI"],
      description:
        "An AI-powered medical image diagnostic tool that analyzes images of visible body parts (e.g., eye, skin) to provide disease identification, treatment recommendations, and medication suggestions.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/GIAIC_Q3/tree/main/%F0%9F%93%82Class_Assignment/assignment_07",
      },
    },
    {
      title: "School Website",
      techStack: ["Side Project", "Next.js", "TailwindCSS", "TypeScript", "Shadcn UI", "Sanity CMS", "Full-stack"],
      description:
        "A modern, responsive school website built to provide an intuitive user experience for students, parents, and staff. Features include dynamic content management, event scheduling, and seamless navigation for accessing academic resources and updates.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/Khadija-School",
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
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/Steamlit-Website",
      },
    },
    {
      title: "Niky Shoes Website",
      techStack: ["Side Project", "Next.js", "Sanity CMS", "Full-stack"],
      description:
        "A full-stack e-commerce platform for shoes, featuring a Next.js frontend and Sanity CMS for content management.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/Nike_Shoes_Ecommerce_Marketplace",
      },
    },
    {
      title: "Agentia_World",
      techStack: ["Side Project", "Next.js", "TailwindCSS", "TypeScript", "Shadcn UI"], // Fixed comma and removed duplicate
      description:
        "A full-stack e-commerce platform for shoes, featuring a Next.js frontend and dynamic content management.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/agentia_world",
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
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/e-commerce",
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
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/blog-website",
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
        href: "https://areebairfan.vercel.app/",
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
        href: "https://github.com/AreebaxIrfan/move-cursor",
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
        "A website for music courses, featuring a responsive design and interactive elements built with Next.js.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/music-course-web",
      },
    },
    {
      title: "Resume Builder",
      techStack: ["Side Project", "HTML", "CSS", "TypeScript", "Frontend"],
      description:
        "A web-based resume builder with customizable templates, built using HTML, CSS, and TypeScript.",
      link: {
        label: "GitHub",
        href: "https://github.com/AreebaxIrfan/resume-builder",
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
      description: "1+ years in tech industry",
      icon: "💼",
    },
    {
      title: "Projects",
      description: "30+ projects completed",
      icon: "🚀",
    },
    {
      title: "Hackathons",
      description: "Participated in 3+ hackathons",
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
