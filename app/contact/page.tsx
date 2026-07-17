import Link from "next/link";

export const metadata = {
  title: "Contact | Phil Boctor",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Contact
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-ink">
          Let&apos;s talk hardware.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          I am interested in mechanical design, product design, robotics
          hardware, aerospace hardware, and product development roles.
        </p>
      </div>
      <section className="mt-12 grid gap-5 md:grid-cols-3">
        <a
          className="focus-ring rounded-lg border border-line bg-white p-6 transition hover:border-accent"
          href="https://www.linkedin.com/in/phil-boctor/"
        >
          <p className="text-sm font-medium text-accent">LinkedIn</p>
          <p className="mt-2 font-semibold text-ink">phil-boctor</p>
        </a>
        <a
          className="focus-ring rounded-lg border border-line bg-white p-6 transition hover:border-accent"
          href="https://github.com/philboctor"
        >
          <p className="text-sm font-medium text-accent">GitHub</p>
          <p className="mt-2 font-semibold text-ink">philboctor</p>
        </a>
        <Link
          className="focus-ring rounded-lg border border-line bg-white p-6 transition hover:border-accent"
          href="/resume"
        >
          <p className="text-sm font-medium text-accent">Resume</p>
          <p className="mt-2 font-semibold text-ink">View resume page</p>
        </Link>
      </section>
    </main>
  );
}
