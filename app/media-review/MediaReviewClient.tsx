"use client";

import { useMemo, useState } from "react";

type MediaItem = {
  originalPath: string;
  folderGroup: string;
  fileName: string;
  extension: string;
  mediaType: "image" | "video" | "unsupported";
  sizeMB: number;
  width: number | null;
  height: number | null;
  webReady: boolean;
  status: string;
  reviewPath: string | null;
  suggestedProjectFolder: string;
  suggestedUse: string;
  notes: string;
};

type Manifest = {
  generatedAt: string;
  totalFiles: number;
  folderSummary: Array<{
    folder: string;
    count: number;
    totalSizeMB: number;
    extensions: Record<string, number>;
    mediaTypes: Record<string, number>;
  }>;
  items: MediaItem[];
};

const selectionOptions = [
  "Do not use",
  "Use as homepage/project card",
  "Use as project hero",
  "Use in project page gallery",
  "Use as demo video",
  "Use later / maybe",
];

function Preview({ item }: { item: MediaItem }) {
  if (!item.reviewPath) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-mist px-4 text-center text-sm font-medium text-muted">
        Preview unavailable. Review source locally.
      </div>
    );
  }

  if (item.mediaType === "video") {
    return (
      <video
        className="aspect-[4/3] w-full bg-ink object-cover"
        controls
        muted
        playsInline
        src={item.reviewPath}
      />
    );
  }

  if (item.mediaType === "image") {
    return (
      <img
        alt={`Review preview for ${item.fileName}`}
        className="aspect-[4/3] w-full bg-mist object-cover"
        src={item.reviewPath}
      />
    );
  }

  return (
    <div className="flex aspect-[4/3] items-center justify-center bg-mist px-4 text-center text-sm font-medium text-muted">
      Unsupported file type
    </div>
  );
}

export function MediaReviewClient({ manifest }: { manifest: Manifest }) {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});

  const groupedItems = useMemo(() => {
    return manifest.items.reduce<Record<string, MediaItem[]>>((groups, item) => {
      groups[item.folderGroup] = groups[item.folderGroup] ?? [];
      groups[item.folderGroup].push(item);
      return groups;
    }, {});
  }, [manifest.items]);

  const exportData = useMemo(() => {
    return manifest.items
      .filter((item) => selections[item.originalPath] && selections[item.originalPath] !== "Do not use")
      .map((item) => ({
        originalPath: item.originalPath,
        fileName: item.fileName,
        folderGroup: item.folderGroup,
        suggestedProjectFolder: item.suggestedProjectFolder,
        suggestedUse: item.suggestedUse,
        selection: selections[item.originalPath],
        reviewerNote: notes[item.originalPath] ?? "",
      }));
  }, [manifest.items, notes, selections]);

  return (
    <div className="space-y-12">
      <section className="grid gap-4 md:grid-cols-3">
        {manifest.folderSummary.map((summary) => (
          <article
            className="rounded-[1.25rem] border border-white/70 bg-white/80 p-5 shadow-card backdrop-blur"
            key={summary.folder}
          >
            <h2 className="text-lg font-semibold text-ink">{summary.folder}</h2>
            <p className="mt-2 text-sm text-muted">
              {summary.count} files, {summary.totalSizeMB} MB
            </p>
            <p className="mt-3 text-xs leading-5 text-muted">
              {Object.entries(summary.extensions)
                .map(([extension, count]) => `${extension}: ${count}`)
                .join(", ")}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-[1.5rem] border border-white/70 bg-white/80 p-6 shadow-card backdrop-blur">
        <h2 className="text-xl font-semibold text-ink">Selection export</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Choose uses below, then copy this JSON into a follow-up message when
          you are ready to move selected files into final public project folders.
        </p>
        <textarea
          className="mt-4 h-56 w-full rounded-lg border border-line bg-paper p-4 font-mono text-xs text-ink"
          readOnly
          value={JSON.stringify(exportData, null, 2)}
        />
      </section>

      {Object.entries(groupedItems).map(([group, items]) => (
        <section className="space-y-5" key={group}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              {group}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
              {items.length} media items
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <article
                className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/85 shadow-card backdrop-blur"
                key={item.originalPath}
              >
                <Preview item={item} />
                <div className="space-y-3 p-4">
                  <div>
                    <h3 className="break-words text-sm font-semibold text-ink">
                      {item.fileName}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      {item.folderGroup} · {item.extension} · {item.sizeMB} MB
                      {item.width && item.height ? ` · ${item.width}x${item.height}` : ""}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 font-semibold text-accent">
                      {item.status}
                    </span>
                    <span className="rounded-full border border-line bg-paper px-2.5 py-1 text-muted">
                      {item.suggestedUse}
                    </span>
                  </div>
                  <p className="text-xs leading-5 text-muted">{item.notes}</p>
                  <select
                    className="w-full rounded-md border border-line bg-white px-3 py-2 text-sm text-ink"
                    onChange={(event) =>
                      setSelections((current) => ({
                        ...current,
                        [item.originalPath]: event.target.value,
                      }))
                    }
                    value={selections[item.originalPath] ?? "Do not use"}
                  >
                    {selectionOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <input
                    className="w-full rounded-md border border-line bg-white px-3 py-2 text-sm text-ink"
                    onChange={(event) =>
                      setNotes((current) => ({
                        ...current,
                        [item.originalPath]: event.target.value,
                      }))
                    }
                    placeholder="Reviewer note or caption idea"
                    value={notes[item.originalPath] ?? ""}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
