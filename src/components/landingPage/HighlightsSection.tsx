import { CardWithIcon } from "@/components/chatbot/card-with-icon";
import { BarChart, Bot, Palette } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function HighlightsSection() {
  const achievements = RESUME_DATA.keyHighlights.filter((achievement) =>
    ["Ramadan Coding Nights", "Leadership", "1$ Dollar Win (2x)", "Startup Challenge" ].includes(achievement.title)
  );
  return (
    <section className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CardWithIcon
          icon={BarChart}
          title={achievements[0]?.title}
          description={achievements[0]?.description}
        />
        <CardWithIcon
          icon={Bot}
          title={achievements[1]?.title}
          description={achievements[1]?.description}
        />
        <CardWithIcon
          icon={Palette}
          title={achievements[2]?.title}
          description={achievements[2]?.description}
        />
        <CardWithIcon
          icon={BarChart}
          title={achievements[3]?.title}
          description={achievements[3]?.description}
        />
        <CardWithIcon
          icon={Bot}
          title={achievements[4]?.title}
          description={achievements[4]?.description}
        />
      </div>
    </section>
  );
}