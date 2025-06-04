import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Chatbot from "@/components/chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Areeba Irfan | Full Stack Developer",
  description:
    "Professional portfolio of Areeba Irfan, a Full Stack Developer specializing in React, Next.js, Python, and more. View projects, skills, and experience.",
  keywords:
    "full stack developer, web developer, react developer, next.js, portfolio, frontend, backend, javascript, typescript",
  authors: [{ name: "Areeba Irfan" }],
  openGraph: {
    title: "Areeba Irfan | Full Stack Developer",
    description:
      "Professional portfolio of Areeba Irfan, a Full Stack Developer specializing in React, Next.js, Python, and more.",
    url: "https://areebairfan.com",
    siteName: "Areeba Irfan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Areeba Irfan | Full Stack Developer",
    description:
      "Professional portfolio of Areeba Irfan, a Full Stack Developer specializing in React, Next.js, Python, and more.",
    creator: "@areebairfan",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://areebairfan.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
                <Chatbot /> 
        {/* Mobile Menu Script */}
        <Script id="mobile-menu-script" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const menuButton = document.getElementById('mobile-menu-button');
              const mobileMenu = document.getElementById('mobile-menu');
              
              if (menuButton && mobileMenu) {
                menuButton.addEventListener('click', function() {
                  mobileMenu.classList.toggle('hidden');
                });
                
                // Close menu when clicking on a link
                const mobileLinks = mobileMenu.querySelectorAll('a');
                mobileLinks.forEach(link => {
                  link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                  });
                });
              }
            });
          `}
        </Script>

        {/* Project Filtering Script */}
        <Script id="project-filtering-script" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const filterButtons = document.querySelectorAll('[data-filter]');
              const projectCards = document.querySelectorAll('[data-project-type]');
              
              if (filterButtons.length && projectCards.length) {
                // Set "All Projects" as active by default
                const allButton = document.querySelector('[data-filter="all"]');
                if (allButton) allButton.classList.add('bg-teal-50');
                
                filterButtons.forEach(button => {
                  button.addEventListener('click', function() {
                    const filter = this.getAttribute('data-filter');
                    
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('bg-teal-50'));
                    this.classList.add('bg-teal-50');
                    
                    // Filter projects
                    if (filter === 'all') {
                      projectCards.forEach(card => {
                        card.style.display = 'block';
                      });
                    } else {
                      projectCards.forEach(card => {
                        const types = card.getAttribute('data-project-type').split(' ');
                        if (types.includes(filter)) {
                          card.style.display = 'block';
                        } else {
                          card.style.display = 'none';
                        }
                      });
                    }
                  });
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  )
}
