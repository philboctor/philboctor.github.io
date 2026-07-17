type SectionProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ eyebrow, title, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h2>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
