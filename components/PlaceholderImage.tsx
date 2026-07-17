type PlaceholderImageProps = {
  label: string;
  caption?: string;
};

export function PlaceholderImage({ label, caption }: PlaceholderImageProps) {
  return (
    <figure className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white p-4 shadow-card">
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,#eef3f5,#cddde7_48%,#f8faf9)] text-center text-sm font-medium text-muted">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(47,111,159,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(47,111,159,0.16)_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="absolute left-[12%] top-[18%] h-16 w-28 rounded-3xl border border-white/80 bg-white/55 shadow-sm backdrop-blur" />
        <div className="absolute bottom-[18%] right-[14%] h-24 w-40 rounded-[1.5rem] border border-white/80 bg-white/45 shadow-sm backdrop-blur" />
        <span className="relative rounded-full border border-white/80 bg-white/75 px-4 py-2 text-ink shadow-sm backdrop-blur">
          Project visual: {label}
        </span>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm leading-6 text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
