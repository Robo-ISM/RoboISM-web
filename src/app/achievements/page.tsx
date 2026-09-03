import type { Metadata } from "next";
import AchievementCard from "@/components/ui/AchievementCard";
import type { Achievement } from "@/lib/types";
import achievements from "@/data/achievements.json";

export const metadata: Metadata = {
  title: "Achievements",
};

export default function AchievementsPage() {
  return (
    <div className="px-4 py-8 text-center">
      <h1 className="font-heading text-charcoal text-[2.8rem] mb-[0.2em]">
        Achievements
      </h1>
      {(achievements as Achievement[]).map((achievement, i) => (
        <AchievementCard key={i} achievement={achievement} />
      ))}
    </div>
  );
}
