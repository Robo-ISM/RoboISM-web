import { FaYoutube, FaGlobe, FaLinkedin, FaEnvelopeSquare, FaGithubSquare } from "react-icons/fa";

interface SocialLinksProps {
  youtube?: string;
  website?: string;
  linkedin?: string;
  email?: string;
  github?: string;
  className?: string;
}

export default function SocialLinks({ youtube, website, linkedin, email, github, className = "" }: SocialLinksProps) {
  return (
    <div className={`team-member__social flex flex-row flex-wrap justify-center items-center ${className}`}>
      {youtube && (
        <a href={youtube} target="_blank" rel="noopener noreferrer" className="mr-[0.2rem] text-[1.4rem] text-inherit">
          <FaYoutube />
        </a>
      )}
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer" className="mr-[0.2rem] text-[1.4rem] text-inherit">
          <FaGlobe />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="mr-[0.2rem] text-[1.4rem] text-inherit">
          <FaLinkedin />
        </a>
      )}
      {email && (
        <a href={email.startsWith('mailto:') ? email : `mailto:${email}`} target="_blank" rel="noopener noreferrer" className="mr-[0.2rem] text-[1.4rem] text-inherit">
          <FaEnvelopeSquare />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="mr-[0.2rem] text-[1.4rem] text-inherit">
          <FaGithubSquare />
        </a>
      )}
    </div>
  );
}
