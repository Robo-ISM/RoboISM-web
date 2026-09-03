import type { Metadata } from "next";
import ProjectCard from "@/components/ui/ProjectCard";
import type { Project } from "@/lib/types";
import projects from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="px-4 py-8 text-center">
      <h1 className="font-heading text-charcoal text-[2.8rem] mb-[0.2em]">
        Projects
      </h1>
      {(projects as Project[]).map((project, i) => (
        <ProjectCard key={i} project={project} index={i + 1} />
      ))}
    </div>
  );
}
