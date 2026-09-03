import { TeamMember } from "@/lib/types";
import SocialLinks from "./SocialLinks";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="team-member text-center w-full md:w-[27%] max-w-[400px] mb-[2.6rem] mx-auto md:mx-0">
      <div
        className="team-member__image w-full aspect-square bg-cover bg-no-repeat mb-4"
        style={{
          backgroundImage: `url(${member.image})`,
          backgroundPosition: member.backgroundPosition || 'center'
        }}
      />
      <h3 className="team-member__name font-body text-[1.4rem] font-semibold capitalize m-0 leading-tight">
        {member.name}
      </h3>
      <p className="team-member__position text-[1.2rem] font-medium -mt-[0.4rem] mb-[0.6rem] text-muted">
        {member.position}
      </p>
      <SocialLinks
        youtube={member.youtube}
        website={member.website}
        linkedin={member.linkedin}
        email={member.email}
        github={member.github}
      />
    </div>
  );
}
