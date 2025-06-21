import { RESUME_DATA } from "@/data/resume-data";

export function SocialLinks() {
  return (
    <nav className="flex gap-3" aria-label="Social media links">
      {RESUME_DATA.contact.social.map((social) => {
        const Icon = social.icon; // Alias for clarity
        return (
          <a
            key={social.name}
            href={social.url}
            className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-teal-500 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300"
            aria-label={`Visit ${social.name} profile`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="h-5 w-5 text-teal-500" aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
}
