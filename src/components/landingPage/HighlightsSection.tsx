import { CardWithIcon } from "@/components/chatbot/card-with-icon";
import { BarChart, Bot, Palette } from "lucide-react";

export function HighlightsSection() {
  return (
    <section className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CardWithIcon
          icon={BarChart}
          title="Ramadan Coding Nights"
          description="Participated in intensive coding sessions during Ramadan, building projects and enhancing skills."
        />
        <CardWithIcon
          icon={Bot}
          title="Leadership"
          description="Led teams in various projects, demonstrating strong communication and organizational skills."
        />
        <CardWithIcon
          icon={Palette}
          title="1$ Dollar Win (2x)"
          description="Successfully completed a challenging project that earned recognition and a symbolic $1 prize."
        />
      </div>
    </section>
  );
}