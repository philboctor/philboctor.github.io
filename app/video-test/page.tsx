import { VideoDiagnostics } from "./VideoDiagnostics";

export const metadata = {
  title: "Video Diagnostics | Phil Boctor",
};

const failingVideoSources = [
  {
    label: "Stewart Hand Rubik's cube grasping video",
    page: "/projects/stewart-hand-gear-differential",
    src: "/images/projects/stewart-hand/IMG_0688.mp4",
  },
  {
    label: "Stewart Hand differential working video",
    page: "/projects/stewart-hand-gear-differential",
    src: "/images/projects/stewart-hand/Stewart%20Hand%20Differential%20Working.mp4",
  },
  {
    label: "Verustruct internship full prototype motion video",
    page: "/projects/verustruct-tsf-retraction-mechanisms",
    src: "/images/projects/verustruct/selected/img-1633.mp4",
  },
];

export default function VideoTestPage() {
  if (process.env.NODE_ENV === "production") {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-ink">
          Video diagnostics are available in development only.
        </h1>
      </main>
    );
  }

  return (
    <main>
      <VideoDiagnostics sources={failingVideoSources} />
    </main>
  );
}
