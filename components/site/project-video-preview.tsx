"use client";

import { useEffect, useRef, useState } from "react";

type ProjectVideoPreviewProps = {
  src: string;
  poster: string;
  title: string;
  playbackRate?: number;
};

export function ProjectVideoPreview({ src, poster, title, playbackRate = 1 }: ProjectVideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = false;
    video.defaultPlaybackRate = playbackRate;
    video.playbackRate = playbackRate;

    const syncPlayback = () => {
      if (isVisible && !motionPreference.matches) {
        void video.play().catch(() => {});
      } else {
        video.pause();
        if (motionPreference.matches) video.currentTime = 0;
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) setShouldLoad(true);
      syncPlayback();
    });

    observer.observe(video);
    motionPreference.addEventListener("change", syncPlayback);

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, [playbackRate, shouldLoad]);

  return (
    <div className="project-image-wrap project-image-wrap--video">
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`${title} preview`}
      />
    </div>
  );
}
