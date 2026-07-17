import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Phil Boctor",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Projects
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-ink">
          Engineering design projects.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          These projects are organized around the design decisions, tradeoffs,
          failures, and testing work behind the hardware.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal delay={index * 90} key={project.slug}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
