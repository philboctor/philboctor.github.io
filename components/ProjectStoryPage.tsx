import Link from "next/link";
import type { ReactNode } from "react";
import { ProjectVideoPlayer } from "./ProjectVideoPlayer";

type ProjectMeta = {
  label: string;
  value: string;
};

type MediaItem = {
  kind: "image" | "video" | "placeholder";
  src?: string;
  alt: string;
  caption: string;
  featured?: boolean;
  forceMuted?: boolean;
  muted?: boolean;
  poster?: string;
  aspect?: "natural" | "wide" | "standard" | "square" | "portrait";
  emphasis?: "wide" | "full";
  fit?: "cover" | "contain";
  framed?: boolean;
  layout?: "compact" | "standard" | "large" | "wide" | "tall" | "hero" | "full";
};

type ProjectStoryPageProps = {
  title: string;
  summary: string;
  role: string;
  timeline?: string;
  tools: string[];
  hero: MediaItem;
  overview: string;
  challenge: string;
  work: string[];
  workTitle?: string;
  media: MediaItem[];
  mediaLayout?: "default" | "softRobotTiles" | "stewartCompact" | "cubesat" | "threeColumn";
  mediaSectionTitle?: string | null;
  iteration: string;
  outcome: string;
  lessons: string[];
};

const aspectClasses = {
  natural: "",
  wide: "aspect-video",
  standard: "aspect-[4/3]",
  square: "aspect-square",
  portrait: "aspect-[9/16]",
};

const layoutClasses = {
  compact: "md:col-span-3 xl:col-span-4",
  standard: "md:col-span-3 xl:col-span-4",
  large: "md:col-span-3 xl:col-span-6",
  wide: "md:col-span-6 xl:col-span-8",
  tall: "md:col-span-3 xl:col-span-4",
  hero: "md:col-span-6 xl:col-span-12",
  full: "md:col-span-6 xl:col-span-12",
};

function isDisplayableMeta(item: ProjectMeta) {
  return !/todo|confirm/i.test(item.value);
}

function MediaFrame({
  item,
  priority = false,
  mosaic = false,
  variantGrid = false,
  tileClassName = "",
}: {
  item: MediaItem;
  priority?: boolean;
  mosaic?: boolean;
  variantGrid?: boolean;
  tileClassName?: string;
}) {
  const resolvedAspect =
    item.aspect ?? (item.kind === "video" || item.kind === "placeholder" ? "wide" : "natural");
  const aspect = aspectClasses[resolvedAspect];
  const isNatural = resolvedAspect === "natural";
  const isVideo = item.kind === "video";
  const fit = item.fit ?? (item.kind === "image" || item.kind === "placeholder" ? "contain" : "cover");
  const usesTightFrame = item.kind === "image" && item.framed === true;
  const src = item.src ? item.src.replace(/ /g, "%20").replace(/#/g, "%23") : undefined;
  const poster = item.poster ? item.poster.replace(/ /g, "%20").replace(/#/g, "%23") : undefined;
  const mediaShellClass = `relative ${isVideo ? "isolate z-0" : ""} ${aspect} overflow-hidden ${
    usesTightFrame ? "bg-mist p-2" : isVideo ? "bg-black" : "bg-white"
  }`;
  const layout = item.layout ?? (item.emphasis === "full" ? "full" : item.emphasis === "wide" ? "wide" : "standard");
  const layoutClass = tileClassName || (variantGrid && !mosaic ? layoutClasses[layout] : "");
  const priorityPortraitClass = priority && resolvedAspect === "portrait" ? "mx-auto max-w-xl" : "";

  return (
    <figure
      className={`relative isolate overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/80 shadow-card backdrop-blur [will-change:auto] ${
        mosaic ? "mb-6 inline-block w-full break-inside-avoid" : "self-start"
      } ${layoutClass} ${priorityPortraitClass}`}
    >
      <div className={mediaShellClass}>
        {item.kind === "image" && src ? (
          <img
            alt={item.alt}
            className={
              isNatural
                ? "block h-auto w-full object-contain"
                : `block h-full w-full ${usesTightFrame ? "rounded-[1rem] object-contain" : fit === "contain" ? "object-contain" : "object-cover"}`
            }
            src={src}
          />
        ) : item.kind === "video" && src ? (
          <ProjectVideoPlayer
            alt={item.alt}
            className={`relative z-10 block h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
            forceMuted={item.forceMuted ?? false}
            muted={item.muted ?? false}
            poster={poster}
            src={src}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#f7f9f8,#e5edf1)] p-8">
            <div className="max-w-md rounded-2xl border border-white/80 bg-white/75 p-6 text-center shadow-sm backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Project visual
              </p>
              <p className="mt-3 text-base font-semibold text-ink">{item.alt}</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Media will be added here when available.
              </p>
            </div>
          </div>
        )}
      </div>
      <figcaption className="border-t border-line/70 px-4 py-3 text-base leading-7 text-muted">
        {item.caption}
      </figcaption>
    </figure>
  );
}

function MediaSection({
  title,
  children,
}: {
  title: string | null;
  children: ReactNode;
}) {
  if (title === null) {
    return <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">{children}</section>;
  }

  return <Section title={title}>{children}</Section>;
}

function MasonryMediaGrid({
  items,
  columns = "three",
  includeVideosInMasonry = false,
}: {
  items: MediaItem[];
  columns?: "two" | "three";
  includeVideosInMasonry?: boolean;
}) {
  const columnClass =
    columns === "two"
      ? "columns-1 gap-6 md:columns-2"
      : "columns-1 gap-6 md:columns-2 xl:columns-3";
  const videoGridClass =
    columns === "two"
      ? "grid gap-6 md:grid-cols-2"
      : "grid gap-6 md:grid-cols-2 xl:grid-cols-3";
  const videoTileClass = (item: MediaItem) => {
    if (item.layout !== "full") {
      return "";
    }

    return columns === "two" ? "md:col-span-2" : "md:col-span-2 xl:col-span-3";
  };
  const chunks = items.reduce<Array<{ kind: "masonry" | "video"; items: MediaItem[] }>>(
    (groups, item) => {
      const kind = item.kind === "video" && !includeVideosInMasonry ? "video" : "masonry";
      const previous = groups[groups.length - 1];

      if (previous?.kind === kind) {
        previous.items.push(item);
      } else {
        groups.push({ kind, items: [item] });
      }

      return groups;
    },
    [],
  );

  return (
    <div className="grid gap-6">
      {chunks.map((chunk, index) =>
        chunk.kind === "video" ? (
          <div className={videoGridClass} key={`video-${index}`}>
            {chunk.items.map((item) => (
              <MediaFrame
                item={item}
                key={item.src ?? item.alt}
                tileClassName={videoTileClass(item)}
              />
            ))}
          </div>
        ) : (
          <div className={columnClass} key={`masonry-${index}`}>
            {chunk.items.map((item) => (
              <MediaFrame item={item} key={item.src ?? item.alt} mosaic />
            ))}
          </div>
        ),
      )}
    </div>
  );
}

function SoftRobotTiledMediaGrid({ items }: { items: MediaItem[] }) {
  return <MasonryMediaGrid items={items} />;
}

function StewartCompactMediaGrid({ items }: { items: MediaItem[] }) {
  return <MasonryMediaGrid columns="two" items={items} />;
}

function ThreeColumnMediaGrid({ items }: { items: MediaItem[] }) {
  return (
    <div className="grid items-start gap-6 md:grid-cols-3">
      {items.map((item) => (
        <MediaFrame item={item} key={item.src ?? item.alt} />
      ))}
    </div>
  );
}

function CubeSatMediaGrid({ items }: { items: MediaItem[] }) {
  const [firstDropTest, secondDropTest, ...buildViews] = items;

  return (
    <div className="grid gap-10">
      {firstDropTest && secondDropTest ? (
        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-ink">
            Drop-test demos
          </h3>
          <div className="mt-6 grid items-start gap-6 lg:grid-cols-2">
            {[firstDropTest, secondDropTest].map((item) => (
              <MediaFrame item={item} key={item.src ?? item.alt} />
            ))}
          </div>
        </section>
      ) : null}
      {buildViews.length ? (
        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-ink">
            Build and drive views
          </h3>
          <div className="mt-6">
            <MasonryMediaGrid columns="two" includeVideosInMasonry items={buildViews} />
          </div>
        </section>
      ) : null}
    </div>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function WorkNotesPanel({
  items,
  title = "Engineering Contributions",
}: {
  items: string[];
  title?: string;
}) {
  return (
    <section className="rounded-[1.5rem] border border-white/70 bg-white/80 p-6 shadow-card backdrop-blur sm:p-7">
      <div className="flex items-center gap-3">
        <span className="h-8 w-1 rounded-full bg-accent" aria-hidden="true" />
        <h2 className="text-xl font-semibold tracking-tight text-ink">
          {title}
        </h2>
      </div>
      <ul className="mt-6 grid gap-x-8 gap-y-4 text-sm leading-6 text-muted md:grid-cols-2">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectStoryPage({
  title,
  summary,
  role,
  timeline,
  tools,
  hero,
  overview,
  challenge,
  work,
  workTitle,
  media,
  mediaLayout = "default",
  mediaSectionTitle = "Build and test views",
  iteration,
  outcome,
  lessons,
}: ProjectStoryPageProps) {
  const meta: ProjectMeta[] = [
    { label: "Role", value: role },
    ...(timeline ? [{ label: "Timeline", value: timeline }] : []),
    { label: "Tools and skills", value: tools.join(", ") },
  ].filter(isDisplayableMeta);
  const featuredIndex = Math.max(0, media.findIndex((item) => item.featured));
  const featuredMedia = media[featuredIndex];
  const processMedia = media.filter((_, index) => index !== featuredIndex);
  const usesSoftRobotTiles = mediaLayout === "softRobotTiles";
  const usesStewartCompact = mediaLayout === "stewartCompact";
  const usesCubeSatLayout = mediaLayout === "cubesat";
  const usesThreeColumnLayout = mediaLayout === "threeColumn";
  const usesCustomMediaLayout = usesSoftRobotTiles || usesStewartCompact || usesCubeSatLayout || usesThreeColumnLayout;
  const usesVariantGrid = !usesCustomMediaLayout && processMedia.some((item) => item.layout);
  const variantMedia = usesVariantGrid ? processMedia : [];
  const emphasizedMedia = usesVariantGrid || usesCustomMediaLayout ? [] : processMedia.filter((item) => item.emphasis);
  const mosaicMedia = usesVariantGrid || usesCustomMediaLayout ? [] : processMedia.filter((item) => !item.emphasis);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link className="focus-ring link-arrow text-sm font-semibold text-accent" href="/projects">
          Back to projects
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Project
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">{summary}</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/70 bg-white/80 p-6 shadow-card backdrop-blur">
            <dl className="grid gap-5 text-sm">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="font-semibold text-ink">{item.label}</dt>
                  <dd className="mt-1 leading-6 text-muted">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="mt-10">
          <MediaFrame item={{ ...hero, featured: true }} priority />
        </div>
      </section>

      <section className="border-y border-white/70 bg-white/45">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
          <h2 className="text-xl font-semibold text-ink">Overview</h2>
          <p className="text-base leading-7 text-muted md:col-span-2">
            {overview}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Visual walkthrough
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The build details carried the story
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">{challenge}</p>
        </div>
        <div className="mt-8 grid gap-6">
          {featuredMedia ? <MediaFrame item={featuredMedia} priority /> : null}
          <WorkNotesPanel items={work} title={workTitle} />
        </div>
      </section>

      {emphasizedMedia.length ? (
        <Section title="Key build views">
          <MasonryMediaGrid items={emphasizedMedia} />
        </Section>
      ) : null}

      {variantMedia.length ? (
        <MediaSection title={mediaSectionTitle}>
          <MasonryMediaGrid items={variantMedia} />
        </MediaSection>
      ) : null}

      {usesSoftRobotTiles ? (
        <MediaSection title={mediaSectionTitle}>
          <SoftRobotTiledMediaGrid items={processMedia} />
        </MediaSection>
      ) : null}

      {usesStewartCompact ? (
        <MediaSection title={mediaSectionTitle}>
          <StewartCompactMediaGrid items={processMedia} />
        </MediaSection>
      ) : null}

      {usesCubeSatLayout ? (
        <MediaSection title={mediaSectionTitle}>
          <CubeSatMediaGrid items={processMedia} />
        </MediaSection>
      ) : null}

      {usesThreeColumnLayout ? (
        <MediaSection title={mediaSectionTitle}>
          <ThreeColumnMediaGrid items={processMedia} />
        </MediaSection>
      ) : null}

      {mosaicMedia.length ? (
        <MediaSection title={mediaSectionTitle}>
          <MasonryMediaGrid items={mosaicMedia} />
        </MediaSection>
      ) : null}

      <Section title="Iteration and testing">
        <p className="rounded-[1.25rem] border border-white/70 bg-white/80 p-6 text-base leading-7 text-muted shadow-card backdrop-blur">
          {iteration}
        </p>
      </Section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12 [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
        <article className="rounded-[1.5rem] border border-white/70 bg-white/80 p-6 shadow-card backdrop-blur">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Outcome</h2>
          <p className="mt-4 text-sm leading-6 text-muted">{outcome}</p>
        </article>
        <article className="rounded-[1.5rem] border border-white/70 bg-white/80 p-6 shadow-card backdrop-blur">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">What I learned</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted sm:grid-cols-2">
            {lessons.map((lesson) => (
              <li className="border-l-2 border-accent/40 pl-3" key={lesson}>
                {lesson}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
