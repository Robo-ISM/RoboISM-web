import type { Metadata } from "next";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import type { TeamMember } from "@/lib/types";
import alumni from "@/data/alumni.json";

export const metadata: Metadata = {
  title: "Alumni",
};

export default function AlumniPage() {
  return (
    <div className="px-4 py-8 text-center">
      <h1 className="font-heading text-charcoal text-[2.8rem] mb-[0.2em]">
        Our Alumni
      </h1>
      <div className="flex flex-wrap justify-center md:justify-around items-start w-full py-4">
        {(alumni as TeamMember[]).map((member, i) => (
          <TeamMemberCard key={i} member={member} />
        ))}
      </div>
    </div>
  );
}
