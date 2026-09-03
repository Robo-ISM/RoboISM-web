import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col items-center mt-[2.4rem] md:flex-row md:mt-0 md:py-[2.8rem] ${isEven ? 'md:flex-row-reverse' : ''}`}>
      <img 
        src={project.image} 
        alt={project.name}
        className="w-full max-w-[400px] min-w-[300px] md:w-[40%] md:min-w-[400px]"
      />
      <div className="text-center md:text-left py-[1.4rem] px-0 md:py-[1.5rem] md:px-[2.4rem] flex-1">
        <h3 className="text-[1.6rem] font-semibold mb-3">{project.name}</h3>
        <div 
          className="text-[1.05rem] font-normal mb-4"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <div className="flex flex-wrap justify-center md:justify-start">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-charcoal text-white px-3 py-2 font-medium inline-block mt-1 mr-2 no-underline hover:bg-black"
            >
              View Github
            </a>
          )}
          {project.video && (
            <a 
              href={project.video} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-charcoal text-white px-3 py-2 font-medium inline-block mt-1 mr-2 no-underline hover:bg-black"
            >
              View Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
