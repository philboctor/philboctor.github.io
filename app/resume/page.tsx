import Link from "next/link";
import { existsSync } from "node:fs";
import { join } from "node:path";

export const metadata = {
  title: "Resume | Phil Boctor",
};

const skills = [
  "NX",
  "SolidWorks",
  "Solid Edge",
  "Onshape",
  "MATLAB",
  "Arduino",
  "LabJack",
  "FDM and SLA 3D printing",
  "Laser cutting",
  "Waterjetting",
  "Lathe",
  "Mill",
  "Silicone casting",
];

export default function ResumePage() {
  const hasResumePdf = existsSync(join(process.cwd(), "public", "resume.pdf"));

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Resume
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-ink">
            Mechanical design, prototyping, and validation.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Recent Yale Mechanical Engineering graduate focused on mechanical
            design ownership, mechanism development, product design constraints,
            and prototype testing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {hasResumePdf ? (
              <a
                className="focus-ring rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent"
                href="/resume.pdf"
              >
                Download resume
              </a>
            ) : null}
            <Link
              className="focus-ring rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent"
              href="/contact"
            >
              Contact
            </Link>
            <a
              className="focus-ring rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent"
              href="https://www.linkedin.com/in/phil-boctor/"
            >
              LinkedIn
            </a>
            <a
              className="focus-ring rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent"
              href="https://github.com/philboctor554"
            >
              GitHub
            </a>
          </div>
          {!hasResumePdf ? (
            <p className="mt-4 text-sm text-muted">
              Resume PDF is not available in this local build yet.
            </p>
          ) : null}
        </div>
        <section className="rounded-lg border border-line bg-white p-6">
          <h2 className="text-xl font-semibold text-ink">Experience focus</h2>
          <div className="mt-6 space-y-5 text-sm leading-6 text-muted">
            <p>
              Mechanical design ownership across actuator-driven mechanisms,
              compact drivetrains, robotic test platforms, and fabrication-heavy
              prototypes.
            </p>
            <p>
              Comfortable translating ambiguous hardware problems into CAD,
              prototypes, test observations, and next design decisions.
            </p>
            <p>
              Education: B.S. Mechanical Engineering, Yale University.
            </p>
          </div>
          <h2 className="mt-8 text-xl font-semibold text-ink">Tools and fabrication</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-muted"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
      <section className="mt-12 rounded-lg border border-dashed border-line bg-white p-5">
        {hasResumePdf ? (
          <object
            aria-label="Resume PDF preview"
            className="aspect-[8.5/11] w-full rounded-md bg-paper"
            data="/resume.pdf"
            type="application/pdf"
          >
            <div className="flex aspect-[8.5/11] items-center justify-center rounded-md bg-paper text-center text-sm font-medium text-muted">
              Resume preview unavailable in this browser.
            </div>
          </object>
        ) : (
          <div className="flex aspect-[8.5/11] items-center justify-center rounded-md bg-paper text-center text-sm font-medium text-muted">
            Resume preview unavailable until the PDF is added.
          </div>
        )}
      </section>
    </main>
  );
}
