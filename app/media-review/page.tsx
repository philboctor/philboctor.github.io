import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { MediaReviewClient } from "./MediaReviewClient";

export const metadata = {
  title: "Media Review | Phil Boctor",
};

export const dynamic = "force-static";

export default function MediaReviewPage() {
  const manifestPath = join(process.cwd(), ".media-review", "media-manifest.json");

  if (!existsSync(manifestPath)) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Media Review
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-ink">
          Media inventory has not been generated yet.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          Run <code className="rounded bg-white px-1.5 py-0.5">node scripts/media-inventory.mjs</code>{" "}
          from the project root to scan <code>Website Media/</code> and create
          local review previews.
        </p>
      </main>
    );
  }

  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Local media review
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-ink">
          Review raw project media before publishing.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          This page uses ignored temporary previews from <code>public/media-review/</code>.
          Final publishable assets should still be selected deliberately and moved
          later into <code>public/images/projects/</code>.
        </p>
        <p className="mt-4 text-sm text-muted">
          Manifest generated: {manifest.generatedAt}. Total files: {manifest.totalFiles}.
        </p>
      </div>
      <div className="mt-12">
        <MediaReviewClient manifest={manifest} />
      </div>
    </main>
  );
}
