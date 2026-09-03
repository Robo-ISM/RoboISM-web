import { Achievement } from "@/lib/types";

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div className="flex flex-col md:flex-row mt-[2.4rem]">
      <div 
        className="w-full max-w-[400px] md:w-1/2 md:min-w-[400px] md:max-w-[475px] bg-cover bg-center mx-auto md:mx-0 pt-[min(300px,max(75%,225px))] md:pt-[min(285px,max(30%,240px))]"
        style={{ backgroundImage: `url(${achievement.image})` }}
      />
      <div className="text-center md:text-left py-[1rem] px-0 md:py-[1rem] md:px-[1.8rem] flex-1">
        <h3 className="text-[1.6rem] font-semibold mb-2">{achievement.title}</h3>
        <p className="font-normal text-[1.05rem] mb-2">{achievement.description}</p>
        <p className="font-semibold text-[1.05rem]">{achievement.participants}</p>
      </div>
    </div>
  );
}
