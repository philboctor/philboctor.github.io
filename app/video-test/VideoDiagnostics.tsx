"use client";

import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { ProjectVideoPlayer } from "@/components/ProjectVideoPlayer";

type DiagnosticSource = {
  label: string;
  page: string;
  src: string;
};

type VideoState = {
  canplay: boolean;
  currentTime: number;
  duration: number | null;
  error: boolean;
  errorCode: number | null;
  fullscreenElement: boolean;
  fullscreenRequested: boolean;
  loadedmetadata: boolean;
  networkState: number | null;
  pause: boolean;
  play: boolean;
  readyState: number | null;
  videoHeight: number | null;
  videoWidth: number | null;
};

const initialState: VideoState = {
  canplay: false,
  currentTime: 0,
  duration: null,
  error: false,
  errorCode: null,
  fullscreenElement: false,
  fullscreenRequested: false,
  loadedmetadata: false,
  networkState: null,
  pause: false,
  play: false,
  readyState: null,
  videoHeight: null,
  videoWidth: null,
};

const events = [
  "loadedmetadata",
  "canplay",
  "play",
  "pause",
  "error",
  "timeupdate",
] as const;

function readVideoState(video: HTMLVideoElement, previous: VideoState): VideoState {
  return {
    ...previous,
    currentTime: Number.isFinite(video.currentTime) ? Number(video.currentTime.toFixed(2)) : 0,
    duration: Number.isFinite(video.duration) ? Number(video.duration.toFixed(2)) : null,
    errorCode: video.error?.code ?? null,
    fullscreenElement: document.fullscreenElement === video,
    networkState: video.networkState,
    readyState: video.readyState,
    videoHeight: video.videoHeight || null,
    videoWidth: video.videoWidth || null,
  };
}

function DiagnosticReadout({ state, source }: { state: VideoState; source: DiagnosticSource }) {
  return (
    <dl className="grid gap-2 rounded-2xl border border-white/70 bg-white/80 p-4 text-sm leading-6 text-muted shadow-sm sm:grid-cols-2">
      <div className="sm:col-span-2">
        <dt className="font-semibold text-ink">Source</dt>
        <dd className="break-all">{source.src}</dd>
      </div>
      <div>
        <dt className="font-semibold text-ink">Project page</dt>
        <dd>{source.page}</dd>
      </div>
      <div>
        <dt className="font-semibold text-ink">Events</dt>
        <dd>
          metadata {String(state.loadedmetadata)}, canplay {String(state.canplay)}, play{" "}
          {String(state.play)}, pause {String(state.pause)}, error {String(state.error)}
        </dd>
      </div>
      <div>
        <dt className="font-semibold text-ink">Error / network / ready</dt>
        <dd>
          error {state.errorCode ?? "none"}, network {state.networkState ?? "n/a"}, ready{" "}
          {state.readyState ?? "n/a"}
        </dd>
      </div>
      <div>
        <dt className="font-semibold text-ink">Media metadata</dt>
        <dd>
          duration {state.duration ?? "n/a"}s, {state.videoWidth ?? "?"} x{" "}
          {state.videoHeight ?? "?"}, current {state.currentTime}s
        </dd>
      </div>
      <div>
        <dt className="font-semibold text-ink">Fullscreen</dt>
        <dd>
          requested {String(state.fullscreenRequested)}, entered{" "}
          {String(state.fullscreenElement)}
        </dd>
      </div>
    </dl>
  );
}

function useVideoDiagnostics(
  label: string,
  source: DiagnosticSource,
  wrapperRef?: RefObject<HTMLElement | null>,
) {
  const directRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<VideoState>(initialState);

  useEffect(() => {
    const foundVideo = directRef.current ?? wrapperRef?.current?.querySelector("video");
    if (!(foundVideo instanceof HTMLVideoElement)) {
      return;
    }
    const video = foundVideo;

    function update(eventName: string) {
      setState((previous) => {
        const next = readVideoState(video, {
          ...previous,
          canplay: previous.canplay || eventName === "canplay",
          error: previous.error || eventName === "error",
          loadedmetadata: previous.loadedmetadata || eventName === "loadedmetadata",
          pause: previous.pause || eventName === "pause",
          play: previous.play || eventName === "play",
        });
        console.info(`[video-test:${label}] ${eventName}`, source.src, next);
        return next;
      });
    }

    const handlers = events.map((eventName) => {
      const handler = () => update(eventName);
      video.addEventListener(eventName, handler);
      return { eventName, handler };
    });

    const fullscreenHandler = () => update("fullscreenchange");
    document.addEventListener("fullscreenchange", fullscreenHandler);

    update("mounted");

    return () => {
      handlers.forEach(({ eventName, handler }) => video.removeEventListener(eventName, handler));
      document.removeEventListener("fullscreenchange", fullscreenHandler);
    };
  }, [label, source.src, wrapperRef]);

  return { directRef, state };
}

function PlainVideoTest({ source }: { source: DiagnosticSource }) {
  const { directRef, state } = useVideoDiagnostics("plain", source);

  return (
    <article className="grid gap-4">
      <h3 className="text-xl font-semibold text-ink">{source.label}</h3>
      <video
        className="block w-full max-w-4xl rounded-2xl bg-black"
        controls
        playsInline
        preload="metadata"
        ref={directRef}
      >
        <source src={source.src} type="video/mp4" />
      </video>
      <DiagnosticReadout source={source} state={state} />
    </article>
  );
}

function SharedPlayerTest({ source }: { source: DiagnosticSource }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { state } = useVideoDiagnostics("shared", source, wrapperRef);

  return (
    <article className="grid gap-4">
      <h3 className="text-xl font-semibold text-ink">{source.label}</h3>
      <div className="relative max-w-4xl rounded-2xl bg-black" ref={wrapperRef}>
        <ProjectVideoPlayer
          alt={`${source.label} isolated shared player test`}
          className="block h-auto w-full rounded-2xl"
          src={source.src}
        />
      </div>
      <DiagnosticReadout source={source} state={state} />
    </article>
  );
}

export function VideoDiagnostics({ sources }: { sources: DiagnosticSource[] }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Development diagnostic
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink">
          Video playback tests
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">
          This unlinked route compares plain native video elements against the shared
          project video player, outside masonry, media cards, overlays, links, and
          captions.
        </p>
      </div>

      <section className="mt-12 grid gap-10">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          Section A - Plain native video tests
        </h2>
        {sources.map((source) => (
          <PlainVideoTest key={`plain-${source.src}`} source={source} />
        ))}
      </section>

      <section className="mt-16 grid gap-10">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          Section B - Existing shared player tests
        </h2>
        {sources.map((source) => (
          <SharedPlayerTest key={`shared-${source.src}`} source={source} />
        ))}
      </section>
    </div>
  );
}
