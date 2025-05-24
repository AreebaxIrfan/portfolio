import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { RESUME_DATA } from "@/data/resume-data";

export function HeroSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-start py-8 sm:py-12 lg:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between gap-6 sm:gap-8 lg:gap-12">
        {/* Left: Name and Title */}
        <div className="flex-1 text-center md:text-left">
          <Badge className="mb-4 bg-teal-100 text-teal-800 font-semibold shadow-sm hover:bg-teal-200 transition-colors duration-300">
            Available for hire
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
            Hi, I'm {RESUME_DATA.name}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-500">
              Full Stack Developer
            </span>
          </h1>
          {/* Social Links */}
          <div className="mt-4 sm:mt-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
              Connect With Me
            </h3>
            <div className="flex justify-center md:justify-start">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full overflow-hidden border-4 border-teal-400 bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:brightness-110">
          <img
            src={RESUME_DATA.avatarUrl}
            alt={`${RESUME_DATA.name}'s Profile Picture`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Bottom: Summary, Location, Socials, Highlights */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-12 text-center md:text-left">
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-full sm:max-w-3xl mx-auto md:mx-0">
          {RESUME_DATA.summary}
        </p>

        <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
          {/* Location */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
            <MapPin className="h-4 w-4 text-teal-500" />
            <a
              href={RESUME_DATA.locationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-gray-600 hover:text-teal-500 hover:underline transition-colors duration-200"
            >
              {RESUME_DATA.location}
            </a>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {RESUME_DATA.keyHighlights
            .filter((highlight) =>
              ["Experience", "Projects", "Hackathons", "Coding Challenges","Languages","Hobbies"].includes(highlight.title)
            )
            .map((highlight) => (
              <div
                key={highlight.title}
                className="bg-teal-100 p-4 rounded-lg text-center transition-all duration-200 hover:shadow-md hover:bg-teal-200"
              >
                <p className="text-xs sm:text-sm text-gray-600">{highlight.title}</p>
                <p className="text-base sm:text-lg font-bold text-teal-700">
                  {highlight.description}
                </p>
                
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
