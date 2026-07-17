"use client";

import { useState } from "react";

type HeroMediaProps = {
  caption?: string;
};

const heroImageSrc = "/images/hero/phil-headshot.JPG";

function AbstractHeroPlaceholder() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(154,190,216,0.95),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.55),transparent_22%),linear-gradient(135deg,#1f2b33_0%,#335f7c_42%,#e8edf0_100%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute left-[10%] top-[18%] h-28 w-44 rounded-3xl border border-white/35 bg-white/12 shadow-inner backdrop-blur-sm transition duration-700 group-hover:translate-y-[-6px]" />
      <div className="absolute right-[12%] top-[22%] h-40 w-32 rounded-[1.75rem] border border-white/35 bg-white/18 shadow-inner backdrop-blur-md transition duration-700 group-hover:translate-x-[-8px]" />
      <div className="absolute bottom-[18%] left-[18%] h-24 w-[54%] rounded-[1.75rem] border border-white/40 bg-white/20 shadow-inner backdrop-blur-md transition duration-700 group-hover:translate-y-[-4px]" />
      <div className="absolute bottom-[24%] left-[25%] h-2 w-[40%] rounded-full bg-white/65" />
      <div className="absolute bottom-[31%] left-[25%] h-2 w-[28%] rounded-full bg-white/35" />
      <div className="absolute bottom-[38%] left-[25%] h-2 w-[34%] rounded-full bg-white/45" />
      <div className="absolute right-[16%] top-[53%] flex h-20 w-20 items-center justify-center rounded-full border border-white/45 bg-white/20 backdrop-blur-md">
        <div className="h-10 w-10 rounded-full border-4 border-white/70 border-r-transparent" />
      </div>
    </>
  );
}

export function HeroMedia({
  caption = "Mechanical Design | Robotics | Product Development",
}: HeroMediaProps) {
  const [showHeroImage, setShowHeroImage] = useState(true);

  return (
    <figure className="media-shell group relative overflow-hidden rounded-[2rem] border border-white/70 bg-ink shadow-soft">
      <div className="relative aspect-[16/10] min-h-[320px] overflow-hidden">
        {showHeroImage ? (
          <img
            alt="Phil Boctor"
            className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
            onError={() => setShowHeroImage(false)}
            src={heroImageSrc}
          />
        ) : (
          <AbstractHeroPlaceholder />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/55 via-ink/18 to-transparent" />
        <div className="absolute inset-x-5 bottom-5 flex flex-col gap-3 rounded-3xl border border-white/45 bg-white/22 p-4 text-white shadow-sm backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <figcaption className="min-w-0 max-w-full whitespace-normal break-words text-sm font-semibold leading-snug">
            {caption}
          </figcaption>
          <span className="rounded-full border border-white/35 bg-white/20 px-3 py-1 text-xs">
            Phil Boctor
          </span>
        </div>
      </div>
    </figure>
  );
}
