import Link from "next/link";
import type { Project } from "@/data/projects";

function ProjectVisual({ project }: { project: Project }) {
  if (project.media.kind === "image" && project.media.src) {
    return (
      <img
        alt={`${project.title} project visual`}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        src={project.media.src}
      />
    );
  }

  if (project.media.kind === "video" && project.media.src) {
    return (
      <video
        aria-label={`${project.title} project visual`}
        autoPlay
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        loop
        muted
        playsInline
        src={project.media.src}
      />
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(135deg,#eef3f5,#cddde7_48%,#f8faf9)] transition duration-700 group-hover:scale-105">
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(47,111,159,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(47,111,159,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute left-[12%] top-[16%] h-20 w-28 rounded-3xl border border-white/80 bg-white/55 shadow-sm backdrop-blur" />
      <div className="absolute right-[13%] top-[22%] h-28 w-20 rounded-[1.5rem] border border-white/80 bg-white/45 shadow-sm backdrop-blur" />
      <div className="absolute bottom-[18%] left-[18%] h-20 w-[58%] rounded-[1.5rem] border border-white/80 bg-white/55 shadow-sm backdrop-blur" />
      <div className="absolute bottom-[31%] left-[28%] h-2 w-[34%] rounded-full bg-accent/35" />
      <div className="absolute bottom-[39%] left-[28%] h-2 w-[24%] rounded-full bg-ink/20" />
      <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
        Project visual
      </span>
    </div>
  );
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const href =
    project.status === "case-study" ? `/projects/${project.slug}` : "/projects";
  const cta = "View project";

  return (
    <article
      className={`group overflow-hidden rounded-[1.5rem] border border-white/70 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-cardHover ${
        featured ? "md:first:col-span-2" : ""
      }`}
    >
      <Link className="focus-ring block" href={href}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <ProjectVisual project={project} />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-2/3 bg-gradient-to-t from-ink/24 via-ink/8 to-transparent md:block" />
          <div className="absolute inset-x-4 bottom-4 hidden translate-y-2 rounded-3xl border border-white/80 bg-white/90 p-4 opacity-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_18px_45px_rgba(31,43,51,0.18)] backdrop-blur-2xl transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {project.type}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/80">
              {project.summary}
            </p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {project.skills.slice(0, 3).map((skill) => (
                  <span
                    className="rounded-full border border-accent/20 bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-ink/75 shadow-sm"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <span className="shrink-0 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent transition group-hover:translate-x-1 group-hover:bg-accent group-hover:text-white">
                {cta}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white/95 p-5 md:hidden">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {project.type}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-ink/80">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.skills.slice(0, 3).map((skill) => (
              <span
                className="rounded-full border border-accent/15 bg-paper px-3 py-1 text-xs font-medium text-ink/75"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
          <span className="mt-5 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent">
            {cta}
          </span>
        </div>
      </Link>
    </article>
  );
}
