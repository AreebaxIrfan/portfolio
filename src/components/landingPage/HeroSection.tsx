import { Badge } from "@/components/ui/badge";
import {  MapPin } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { RESUME_DATA } from "@/data/resume-data";

export function HeroSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-start py-12 "
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Left: Name and Title */}
        <div className="flex-1">
          <Badge className="mb-4 bg-teal-100 text-teal-800 font-semibold shadow-sm hover:bg-teal-200 transition-colors duration-300">
            Available for hire
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
            Hi, I'm {RESUME_DATA.name}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-500">
              Full Stack Developer
            </span>
          </h1>
           {/* Social Links */}
           <div className="mt-4 ">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Connect With Me</h3>
            <div className="flex justify-center md:justify-start">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full overflow-hidden border-4 border-teal-400 bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
          <img
            src={RESUME_DATA.avatarUrl}
            alt={`${RESUME_DATA.name}'s Profile Picture`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Bottom: Summary, Location, Socials, Highlights, Buttons */}
      <div className="container mx-auto px-4 mt-8 text-center md:text-left">
        <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
          {RESUME_DATA.summary}
        </p>

        <div className="space-y-6 mt-6">
          {/* Location */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
            <MapPin className="h-4 w-4 text-teal-500" />
            <a
              href={RESUME_DATA.locationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 hover:underline transition-colors duration-200"
            >
              {RESUME_DATA.location}
            </a>
          </div>

         
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {RESUME_DATA.keyHighlights
            .filter((highlight) =>
              ["Experience", "Projects", "Hackathons", "Coding Challenges"].includes(highlight.title)
            )
            .map((highlight) => (
              <div
                key={highlight.title}
                className="bg-teal-100 p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-200"
              >
                <p className="text-lg font-bold text-teal-700">{highlight.description.split(" ")[0]}</p>
                <p className="text-xs text-gray-600">{highlight.title}</p>
              </div>
            ))}
        </div>

              
      </div>
    </section>
  );
}