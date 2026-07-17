"use client";

import { useEffect, useRef, useState } from "react";

type ProjectVideoPlayerProps = {
  alt: string;
  className: string;
  forceMuted?: boolean;
  muted?: boolean;
  poster?: string;
  src: string;
};

export function ProjectVideoPlayer({
  alt,
  className,
  forceMuted = false,
  muted = false,
  poster,
  src,
}: ProjectVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const shouldStartMuted = muted || forceMuted;

  useEffect(() => {
    function pauseOnPageHide() {
      if (document.hidden) {
        videoRef.current?.pause();
      }
    }

    document.addEventListener("visibilitychange", pauseOnPageHide);
    window.addEventListener("pagehide", pauseOnPageHide);

    return () => {
      document.removeEventListener("visibilitychange", pauseOnPageHide);
      window.removeEventListener("pagehide", pauseOnPageHide);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.defaultMuted = shouldStartMuted;
    }
  }, [shouldStartMuted, src]);

  useEffect(() => {
    const video = videoRef.current;

    if (!forceMuted || !video) {
      return;
    }
    const currentVideo = video;

    function enforceMute() {
      currentVideo.defaultMuted = true;
      currentVideo.muted = true;
      currentVideo.volume = 0;
    }

    enforceMute();
    currentVideo.addEventListener("loadedmetadata", enforceMute);
    currentVideo.addEventListener("play", enforceMute);
    currentVideo.addEventListener("volumechange", enforceMute);

    return () => {
      currentVideo.removeEventListener("loadedmetadata", enforceMute);
      currentVideo.removeEventListener("play", enforceMute);
      currentVideo.removeEventListener("volumechange", enforceMute);
    };
  }, [forceMuted, src]);

  function pauseOtherProjectVideos() {
    document.querySelectorAll<HTMLVideoElement>("video[data-project-video]").forEach((video) => {
      if (video !== videoRef.current && !video.paused) {
        video.pause();
      }
    });
  }

  return (
    <>
      <video
        aria-label={alt}
        className={className}
        controls
        data-project-video
        muted={shouldStartMuted}
        onCanPlay={() => setHasError(false)}
        onError={() => setHasError(true)}
        onPlay={pauseOtherProjectVideos}
        playsInline
        poster={poster}
        preload="metadata"
        ref={videoRef}
      >
        <source src={src} type="video/mp4" />
      </video>
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/90 p-6 text-center text-white">
          <div className="max-w-sm">
            <p className="text-sm font-semibold">
              This video could not be played in your browser.
            </p>
            <a
              className="mt-3 inline-flex rounded-full border border-white/35 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
              href={src}
            >
              Open video file
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
