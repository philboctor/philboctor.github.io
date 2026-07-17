import Link from "next/link";
import { HeroMedia } from "@/components/HeroMedia";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { featuredProjects } from "@/data/projects";

const skills = [
  "Mechanical design",
  "Mechanism design",
  "CAD",
  "Prototyping",
  "Testing and validation",
  "Design for manufacturing",
  "Robotics hardware",
  "System integration",
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                PHILOPATEER "PHIL" BOCTOR
              </p>
              <p className="mt-5 max-w-xl text-lg font-medium leading-8 text-ink">
                I design mechanical systems through the messy middle between
                concept and working hardware.
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                I turn engineering concepts into tested, manufacturable hardware.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                I'm Philopateer "Phil" Boctor, a Yale Mechanical Engineering
                graduate focused on mechanical design, robotics hardware, and
                product development. I design and build physical systems by
                working through constraints in packaging, manufacturability,
                actuation, assembly, testing, and validation.
              </p>
              <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
                <Link className="button-primary link-arrow w-full sm:w-auto" href="/projects">
                  View Projects
                </Link>
                <Link className="button-secondary link-arrow w-full sm:w-auto" href="/resume">
                  View Resume
                </Link>
                <Link className="button-secondary w-full sm:w-auto" href="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <HeroMedia />
          </Reveal>
        </div>
        <Reveal delay={180}>
          <div className="mt-12 grid gap-3 rounded-[1.5rem] border border-white/70 bg-white/55 p-3 shadow-sm backdrop-blur sm:grid-cols-3">
            {[
              "Yale B.S. in Mechanical Engineering",
              "ABET-Accredited Engineering Program",
              "Seeking Full-Time Opportunities",
            ].map((item) => (
              <div
                className="rounded-[1.15rem] border border-line/70 bg-white/75 px-5 py-4 text-sm font-semibold text-ink"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Section eyebrow="Selected work" title="Hardware projects with real constraints">
        <Reveal>
          <p className="max-w-3xl text-base leading-7 text-muted">
            A few projects that show how I approach hardware design, from compact
            mechanisms and robotic hands to test platforms and soft actuators.
          </p>
        </Reveal>
        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal delay={index * 90} key={project.slug}>
              <ProjectCard featured project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-9 flex justify-center">
            <Link className="button-secondary link-arrow" href="/projects">
              Explore the full project list
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="Skills" title="Mechanical and product design toolkit">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <Reveal key={skill}>
              <div className="rounded-full border border-white/70 bg-white/75 px-5 py-3 text-sm font-medium text-ink shadow-sm backdrop-blur">
                {skill}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Engineering philosophy" title="The prototype starts arguing back">
        <Reveal>
          <div className="max-w-3xl rounded-[1.75rem] border border-white/70 bg-white/70 p-8 shadow-card backdrop-blur">
            <p className="text-base leading-7 text-muted">
              I learn fastest by building. I start in CAD, make a prototype, test it, and revise whatever does not work. I also try to think about manufacturing and assembly early, so the final design works off the screen too.
            </p>
            <Link
              className="focus-ring link-arrow mt-6 inline-flex text-sm font-semibold text-accent hover:text-ink"
              href="/resume"
            >
              See experience and resume
            </Link>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
