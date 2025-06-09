import {
    LinkedInIcon,
    XIcon,
    MediumIcon,
    InstagramIcon,
    FacebookIcon,
  } from "@/components/icons";
  import { RESUME_DATA } from "@/data/resume-data";
  
  export function SocialLinks() {
    return (
      <div className="flex gap-3">
        {RESUME_DATA.contact.social.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-teal-300 hover:bg-teal-50 transition-colors"
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon className="h-5 w-5 text-teal-500" />
          </a>
        ))}
      </div>
    );
  }
