import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  MediumIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Areeba Irfan",
  initials: "AI",
  location: "Based in Karachi, Pakistan pk",
  locationLink: "https://www.google.com/maps/place/new+york",
  about: "Creative Full Stack Developer. Tech Enthusiast. Problem Solver. 💻",
  summary:
    "I specialize in building accessible, user-friendly web applications with over a year of tech experience. Passionate about solving real-world problems, I create clean, efficient, and scalable code. Currently studying Computer Science and AI, I contribute to open-source and engage in coding challenges.",
  avatarUrl: "/areebairfan.png",
  personalWebsiteUrl: "https://areeba-irfan.dev",
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
        url: "https://medium.com/@areebaIrfan_",
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
      by: "By: GIAIC Community",
      reference: [
        {
          name: "👉 Reference",
          url: "https://github.com/areeba-irfan/100-days-of-code",
        },
      ],
    },
    {
      title: "Completed 100 Days of Coding Challenge",
      by: "By:GIAIC Community",
      reference: [
        {
          name: "👉 Reference",
          url: "https://github.com/areeba-irfan/100-days-of-code",
        },
      ],
    },
    {
      title: "Participated in Ramadan Coding Nights",
      by: "By: GIAIC Community",
      reference: [
        {
          name: "👉 Reference",
          url: "https://github.com/areeba-irfan/ramadan-coding-nights",
        },
      ],
    },
    {
      title: "1$ Dollar Win Recognition",
      by: "By: Sir Asharib Ali (Lead Teacher GIAIC)",
      reference: [
        {
          name: "👉 Reference",
          url: "#",
        },
      ],
    },
    {
      title: "Participated in 3+ Hackathons",
      by: "By: Sir Ameeen Alam (Dean of Faculty GIAIC)",
      reference: [
        {
          name: "👉 Reference",
          url: "#",
        },
      ],
    },
  ],
  work: [
    {
      company: "Freelance",
      link: "",
      badges: ["Remote", "Part-Time"],
      title: "Full Stack Developer",
      start: "2024 Jan",
      end: "Present",
      description:
        "Working as a freelance Full Stack Developer, building web applications for clients using modern technologies like Next.js, Python, and Tailwind CSS.",
      bulletPoints: [
        {
          text: "Developed 5+ projects including e-commerce platforms and AI chatbots",
          link: "",
        },
        {
          text: "Collaborated with clients to deliver responsive and scalable solutions",
          link: "",
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
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "API Development",
    "Full Stack Development",
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
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/GIAIC_Q3/tree/main/%F0%9F%93%82Class_Assignment/assignment_07"
      },
    },
    {
      title: "AI Chatbot with Chainlit",
      techStack: ["Side Project", "Python", "OpenAI SDK", "Chainlit"],
      description:
        "An interactive chatbot built with OpenAI SDK and Chainlit, featuring a responsive Python-based frontend for seamless user interaction.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/GIAIC_Q3/tree/main/Ramadan_Coding_Nights/Day_17_Advance_Agent",
      },
    },
    {
      title: "Gemini Chatbot with Streamlit",
      techStack: ["Side Project", "Python", "Streamlit", "Google Gemini API"],
      description:
        "A chatbot powered by Google's Gemini API, built with Streamlit for a user-friendly interface and efficient conversation handling.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/projects/tree/main/chatbot",
      },
    },
    {
      title: "Resume Generator",
      techStack: ["Side Project", "Python", "HTML", "CSS"],
      description:
        "A tool for creating professional resumes with customizable templates, using Python for backend logic and HTML/CSS for styling.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/projects/tree/main/resume_generator",
      },
    },
    {
      title: "Streamlit Website",
      techStack: ["Side Project", "Python", "Streamlit"],
      description:
        "A website built with Streamlit, generate a quotes and the daily challenge, interactive interface.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/Steamlit-Website",
      },
    },
    {
      title: "Niky Shoes Website",
      techStack: ["Side Project", "Next.js", "Sanity CMS", "Full Stack"],
      description:
        "A full-stack e-commerce platform for shoes, featuring a Next.js frontend and Sanity CMS for content management.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/Nike_Shoes_Ecommerce_Marketplace",
      },
    },
    {
      title: "Agentia_World",
      techStack: ["Side Project", "Next.js", "Sanity CMS", "Full Stack"],
      description:
        "A full-stack e-commerce platform for shoes, featuring a Next.js frontend and Sanity CMS for content management.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/agentia_world",
      },
    },
    {
      title: "Niky Dashboard",
      techStack: ["Side Project", "Next.js", "Sanity CMS", "Full Stack"],
      description:
        "A dashboard for managing the backend and inventory of the Niky Shoes e-commerce platform, built with Next.js and Sanity CMS.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/Niky_Dashboard",
      },
    },
    {
      title: "Bouquet E-commerce Website",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "An e-commerce website for bouquets, featuring a responsive Next.js frontend with a focus on user experience.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/e-commerce",
      },
    },
    {
      title: "Next.js Admin Dashboard",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "A customizable admin dashboard built with Next.js, designed for efficient data management and visualization.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/next.js-Dashboard",
      },
    },
    {
      title: "Blog Website with Comments",
      techStack: ["Side Project", "Next.js", "React", "Frontend"],
      description:
        "A Next.js-powered blog platform with commenting functionality and a responsive design for seamless user engagement.",
      link: {
        label: "github.com",
        href: "https://github.com/areeba-irfan/blog-website",
      },
    },
    {
      title: "Book Hub",
      techStack: ["Side Project", "Next.js", "API", "Frontend"],
      description:
        "A book discovery platform that fetches book data via an API, built with Next.js for a dynamic frontend.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/Book-Hub",
      },
    },
    {
      title: "Personal Portfolio",
      techStack: ["Side Project", "HTML", "CSS", "JavaScript"],
      description:
        "A personal portfolio website showcasing projects and skills, built with HTML, CSS, and JavaScript.",
      link: {
        label: "github.com",
        href: "https://areebairfan.vercel.app/",
      },
    },
    {
      title: "Random User Generator",
      techStack: ["Side Project", "Next.js", "API", "Frontend"],
      description:
        "An application that fetches random user data via an API, built with Next.js for a responsive frontend.",
      link: {
        label: "github.com",
        href: "https://github.com/areeba-irfan/random-user-generator",
      },
    },
    {
      title: "Todo List",
      techStack: ["Side Project", "HTML", "CSS", "JavaScript"],
      description:
        "A simple todo list application for task management, built with HTML, CSS, and JavaScript.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/to-do-list",
      },
    },
    {
      title: "Move Cursor",
      techStack: ["Side Project", "HTML", "CSS", "JavaScript"],
      description:
        "An interactive project that creates dynamic cursor movement effects using HTML, CSS, and JavaScript.",
      link: {
        label: "github.com",
        href: "https://github.com/areeba-irfan/move-cursor",
      },
    },
    {
      title: "Birthday Card",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "A digital birthday card application with animations, built using Next.js for a modern frontend.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/birthday-card",
      },
    },
    {
      title: "Niky Clone",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "A clone of the Niky website, replicating its design and functionality using Next.js.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/shoes-website",
      },
    },
    {
      title: "Music Course Website",
      techStack: ["Side Project", "Next.js", "Frontend"],
      description:
        "A web-based resume builder with customizable templates, built using HTML, CSS, and TypeScript.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/music-course-web",
      },
    },
    {
      title: "Resume Builder",
      techStack: ["Side Project", "HTML", "CSS", "TypeScript"],
      description:
        "A web-based resume builder with customizable templates, built using HTML, CSS, and TypeScript.",
      link: {
        label: "github.com",
        href: "https://github.com/areeba-irfan/resume-builder",
      },
    },
    {
      title: "Animated Projects",
      techStack: ["Side Project", "HTML", "CSS", "TypeScript"],
      description:
        "A functional application with a clean interface, built using HTML, CSS, and TypeScript.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/Animated-Project",
      },
    },
    {
      title: "100 Days of Coding",
      techStack: ["GIAIC", "Web Development", "TypeScript"],
      description:
        "Completed a 100-day coding challenge, building a new project each day to enhance skills.",
      link: {
        label: "github.com",
        href: "https://github.com/areeba-irfan/100-days-of-code",
      },
    },
    {
      title: "Ramadan Coding Nights",
      techStack: ["GIAIC", "Live Coding", "Python"],
      description:
        "Participated in a 20-day Ramadan coding challenge, building Python mini-projects and sharing knowledge.",
      link: {
        label: "github.com",
        href: "https://github.com/AreebaxIrfan/GIAIC_Q3/tree/main/Ramadan_Coding_Nights",
      },
    },
    {
      title: "30 Days of Projects Coding",
      techStack: ["GIAIC", "Web Development", "Next.js"],
      description:
        "Completed a 30-day coding challenge, building a new project each day to enhance skills.",
      link: {
        label: "github.com",
        href: "https://github.com/areeba-irfan/100-days-of-code",
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
      title: "Coding Challenges",
      description: "Completed 3+ challenges",
      icon: "💻",
    },
    {
      title: "Helping Class Fellows",
      description: "Assisted class fellows with computer basics and related topics",
      icon: "🤝" 
    },
    {
      title: "Languages",
      description: "English (Professional), Urdu (Native)",
      icon: "🗣️",
    },
    {
      title: "Hobbies",
      description: "Coding, Writing, Learning",
      icon: "🎓",
    },
  ],
} as const; 