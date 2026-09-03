import type { Metadata } from "next";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import type { TeamMember } from "@/lib/types";
import coordinators from "@/data/coordinators.json";
import members from "@/data/members.json";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  // Group members by position/year
  const allMembers = members as TeamMember[];
  const finalYear = allMembers.filter(
    (m) =>
      m.position === "Super-Final Year" || m.position === "Final Year"
  );
  const prefinalYear = allMembers.filter(
    (m) => m.position === "Prefinal Year"
  );
  const secondYear = allMembers.filter(
    (m) => m.position === "Second Year"
  );

  return (
    <div className="px-4 py-8 text-center">
      <h1 className="font-heading text-charcoal text-[2.8rem] mb-[0.2em]">
        About Us
      </h1>
      <p className="font-description text-charcoal font-normal mb-[2em] leading-[1.25em] max-w-[600px] mx-auto">
        Robotics &amp; AI Club is a student-run organization/club of Indian
        Institute of Technology (ISM) Dhanbad. The Robotics Club is a community
        of students who derive pleasure in creating mechanical peers that may
        even be potent to work without human intervention. Each member of this
        family is provided mechanical, electronic, monetary and informatory aid
        besides the indispensable guidance of experienced members. The Club,
        through its regular lectures and workshops, is incessantly involved in
        producing robots such as autonomous and manual robots, a lot many more
        that make up the plethoric and diverse robotic arsenal.
      </p>

      <h1 className="font-heading text-charcoal text-[2.8rem] mb-[0.2em]">
        Our Team
      </h1>

      {/* Coordinators & FICs */}
      <div className="flex flex-wrap justify-center md:justify-around items-start w-full py-4">
        {(coordinators as TeamMember[]).map((member, i) => (
          <TeamMemberCard key={`coord-${i}`} member={member} />
        ))}
      </div>

      {/* Final Year Members */}
      {finalYear.length > 0 && (
        <div className="flex flex-wrap justify-center md:justify-around items-start w-full py-4">
          {finalYear.map((member, i) => (
            <TeamMemberCard key={`fy-${i}`} member={member} />
          ))}
        </div>
      )}

      {/* Prefinal Year Members */}
      {prefinalYear.length > 0 && (
        <div className="flex flex-wrap justify-center md:justify-around items-start w-full py-4">
          {prefinalYear.map((member, i) => (
            <TeamMemberCard key={`pf-${i}`} member={member} />
          ))}
        </div>
      )}

      {/* Second Year Members */}
      {secondYear.length > 0 && (
        <div className="flex flex-wrap justify-center md:justify-around items-start w-full py-4">
          {secondYear.map((member, i) => (
            <TeamMemberCard key={`sy-${i}`} member={member} />
          ))}
        </div>
      )}
    </div>
  );
}
