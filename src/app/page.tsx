import Link from "next/link";
import Image from "next/image";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import type { Achievement, TeamMember } from "@/lib/types";
import achievements from "@/data/achievements.json";
import coordinators from "@/data/coordinators.json";
import pastcoordinators from "@/data/pastcoordinators.json";

export default function Home() {
  return (
    <>
      <div className="block block--hero block--2-column">
        <div className="block__image">
          <Image
            src="/images/rendered1.png"
            alt="Rubik Cube Solver by RoboISM"
            width={600}
            height={600}
            priority
          />
        </div>
        <div className="content content--hero">
          <div className="content__heading">
            Robotics<br />
            &amp; AI Club
          </div>
          <div className="content__sub-heading">
            IIT (ISM) Dhanbad
          </div>
          <Link href="#projects" className="button button--primary">
            Our Projects
          </Link>
        </div>
      </div>
      <div className="block block--2-column">
        <div className="block__image">
          <Image src="/images/terracebot.jpeg" alt="" width={400} height={400} />
        </div>
        <div className="content">
          <div className="content__heading">
            About Us
          </div>
          <div className="content__content">
            Robotics & AI Club is a student-run organization/club of Indian Institute of Technology (ISM)
            Dhanbad. The
            Robotics Club is a community of students who derive pleasure in creating mechanical peers that may
            even be
            potent to work without human intervention. Each member of this family is provided mechanical,
            electronic,
            monetary and informatory aid besides the
          </div>
        </div>
      </div>
      <div className="block">
        <div className="content">
          <div className="content__heading">
            Achievements
          </div>
          <div className="content__content" id="achievements">
            {(achievements as Achievement[]).slice(0, 3).map((a, i) => (
              <div
                key={i}
                className="achievement-brief"
              >
                {a.brief}
              </div>
            ))}
          </div>
        </div>
        <Link href="/achievements" className="button button--secondary">
          View All
        </Link>
      </div>

      {/* Project Gallery Teaser */}
      <div className="block" id="projects">
        <div className="content content--with-bottom">
          <div className="content__heading">
            Project Gallery
          </div>
          <div className="content__content content__content--gallery">
            {["/images/others/Bot_4.jpeg", "/images/others/autonomousdronecrop.webp", "/images/others/7.jpg"].map(
              (src, i) => (
                <div key={i} className="gallery-item">
                  <div style={{ backgroundImage: `url('${src}')` }} />
                </div>
              )
            )}
          </div>
        </div>
        <Link href="/projects" className="button button--secondary">
          View All
        </Link>
      </div>

      {/* Current Leadership */}
      <div className="block content">
        <div className="content__heading">
          FIC and Coordinators
        </div>
        <div className="grid">
          {(coordinators as TeamMember[]).map((member, i) => (
            <TeamMemberCard key={i} member={member} />
          ))}
        </div>
      </div>

      {/* Past Leadership */}
      <div className="block content">
        <div className="content__heading">
          Past FIC and Coordinators
        </div>
        <div className="grid">
          {(pastcoordinators as TeamMember[]).map((member, i) => (
            <TeamMemberCard key={i} member={member} />
          ))}
        </div>
      </div>
    </>
  );
}













































// export default function Home() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center px-4 py-20 min-h-screen md:flex-row-reverse md:py-0">
//         <div className="mx-auto mb-10 w-4/5 max-w-[280px] min-w-[240px] md:mx-0 md:mb-0 md:w-1/2 md:max-w-none">
//           <Image
//             src="/images/rendered1.png"
//             alt="Rubik Cube Solver by RoboISM"
//             width={600}
//             height={600}
//             className="w-full block md:w-[90%] md:mx-auto"
//             priority
//           />
//         </div>
//         <div className="mb-10 md:mb-0">
//           <h1 className="font-heading text-charcoal text-center text-[4.5rem] leading-[4.5rem] md:text-[7.2rem] md:leading-[6.8rem] md:tracking-[0.06rem] md:text-left">
//             Robotics
//             <br />
//             &amp; AI Club
//           </h1>
//           <p className="font-heading text-muted text-center text-[2.2rem] leading-[2.2rem] md:text-[3.7rem] md:leading-[4.4rem] md:text-left">
//             IIT (ISM) Dhanbad
//           </p>
//           <Link
//             href="#projects"
//             className="button--primary mx-auto mt-[2.2rem] md:mx-0 md:mt-[1.8rem] md:ml-[0.5rem]"
//           >
//             Our Projects
//           </Link>
//         </div>
//       </section>

//       {/* About Us Teaser */}
//       <section className="flex flex-col items-center justify-center px-4 py-8 md:flex-row md:justify-between md:mb-[1.6rem]">
//         <div className="mx-auto mb-10 w-4/5 max-w-[280px] min-w-[240px] md:mx-0 md:mb-0 md:w-[30%] md:max-w-none">
//           <Image
//             src="/images/terracebot.jpeg"
//             alt="Terrace Farming Robot"
//             width={400}
//             height={400}
//             className="w-full block"
//           />
//         </div>
//         <div className="w-full md:w-[60%]">
//           <h2 className="font-heading text-charcoal text-center text-[2.5rem] leading-[5rem] md:text-[3.2rem] md:tracking-[0.04rem] md:text-left">
//             About Us
//           </h2>
//           <p className="text-center text-muted text-[1.1rem] font-medium md:text-[1.25rem] md:text-left">
//             Robotics &amp; AI Club is a student-run organization/club of Indian
//             Institute of Technology (ISM) Dhanbad. The Robotics Club is a
//             community of students who derive pleasure in creating mechanical
//             peers that may even be potent to work without human intervention.
//             Each member of this family is provided mechanical, electronic,
//             monetary and informatory aid besides the
//           </p>
//         </div>
//       </section>

//       {/* Achievements Teaser */}
//       <section className="flex flex-col items-center px-4 py-8 md:mb-[1.6rem]">
//         <h2 className="font-heading text-charcoal text-center text-[2.5rem] leading-[5rem] md:text-[3.2rem] md:tracking-[0.04rem]">
//           Achievements
//         </h2>
//         <div className="py-[0.4rem] pb-[0.8rem] w-full">
//           {(achievements as Achievement[]).slice(0, 3).map((a, i) => (
//             <div
//               key={i}
//               className="mb-[0.4em] p-4 bg-card-bg font-normal text-[1.25rem]"
//             >
//               {a.brief}
//             </div>
//           ))}
//         </div>
//         <Link href="/achievements" className="button--secondary">
//           View All
//         </Link>
//       </section>

//       {/* Project Gallery Teaser */}
//       <section className="flex flex-col items-center px-4 py-8" id="projects">
//         <div className="mb-8 w-full">
//           <h2 className="font-heading text-charcoal text-center text-[2.5rem] leading-[5rem] md:text-[3.2rem] md:tracking-[0.04rem]">
//             Project Gallery
//           </h2>
//           <div className="flex flex-wrap items-center justify-center py-0 md:py-4">
//             {["/images/Bot_4.jpeg", "/images/autonomousdronecrop.webp", "/images/7.jpg"].map(
//               (src, i) => (
//                 <div
//                   key={i}
//                   className="block w-[45%] max-w-[180px] min-w-[150px] mx-[0.4rem] my-[0.2rem] md:w-[20%] md:max-w-none md:grow"
//                 >
//                   <div
//                     className="w-full pt-[85%] bg-cover bg-center"
//                     style={{ backgroundImage: `url('${src}')` }}
//                   />
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//         <Link href="/projects" className="button--secondary">
//           View All
//         </Link>
//       </section>

//       {/* Current Leadership */}
//       <section className="px-4 py-8">
//         <h2 className="font-heading text-charcoal text-center text-[2.5rem] leading-[5rem] md:text-[3.2rem] md:tracking-[0.04rem]">
//           FIC and Coordinators
//         </h2>
//         <div className="flex flex-wrap justify-center md:justify-around items-start w-full py-4">
//           {(coordinators as TeamMember[]).map((member, i) => (
//             <TeamMemberCard key={i} member={member} />
//           ))}
//         </div>
//       </section>

//       {/* Past Leadership */}
//       <section className="px-4 py-8 md:mt-[3.2rem] md:pb-0">
//         <h2 className="font-heading text-charcoal text-center text-[2.5rem] leading-[5rem] md:text-[3.2rem] md:tracking-[0.04rem]">
//           Past FIC and Coordinators
//         </h2>
//         <div className="flex flex-wrap justify-center md:justify-around items-start w-full py-4">
//           {(pastcoordinators as TeamMember[]).map((member, i) => (
//             <TeamMemberCard key={i} member={member} />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }
