import { SectionHeader } from "@/components/landingPage/section-header";
import { Bot } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="space-y-6">
      <SectionHeader badge="Contact" title="Get In Touch" />
      <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="h-14 w-14 rounded-full bg-teal-100 flex items-center justify-center">
            <Bot className="h-7 w-7 text-teal-500" />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-xl font-bold">Chat With Me</h3>
            <p className="text-gray-600 max-w-2xl">
              I'm available for freelance work, full-time positions, or just a friendly chat. Use the chatbot in the
              bottom right corner to get in touch with me. Whether you need to schedule a meeting, discuss a
              project, or ask questions, I'm just a message away!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}