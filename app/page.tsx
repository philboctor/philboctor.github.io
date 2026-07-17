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

      <Section eyebrow="How I work" title="Start with the constraint that matters">
        <div className="relative">
          <div className="absolute left-8 top-12 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-accent/0 via-accent/35 to-accent/0 md:block" />
          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                title: "Define constraints",
                body: "Start with packaging, loads, assembly, manufacturability, and the test that will matter.",
              },
              {
                title: "Build the simplest prototype",
                body: "Make the next unknown physical quickly enough that the hardware can answer back.",
              },
              {
                title: "Test honestly",
                body: "Separate what worked once from what cycles, aligns, seals, or survives reliably.",
              },
              {
                title: "Iterate from failure",
                body: "Use binding, rupture, friction, and messy behavior to isolate the next design change.",
              },
            ].map((item, index) => (
              <Reveal delay={index * 100} key={item.title}>
                <div className="relative h-full rounded-[1.5rem] border border-white/70 bg-white/80 p-6 shadow-card backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-cardHover">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-accent/20 bg-mist text-sm font-semibold text-accent">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal>
          <p className="mt-9 max-w-3xl text-xl leading-8 text-ink">
            Good prototypes do not need to be perfect. They need to reveal the
            next design decision.
          </p>
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
            CAD is where a design becomes organized, but testing is where the
            design becomes honest. A good prototype does not need to be perfect.
            It needs to reveal the next decision.
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
