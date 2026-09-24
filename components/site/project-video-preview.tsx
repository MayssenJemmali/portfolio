"use client";

import { useEffect, useRef } from "react";

type ProjectVideoPreviewProps = {
  src: string;
  poster: string;
  title: string;
};

export function ProjectVideoPreview({ src, poster, title }: ProjectVideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = false;

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
      syncPlayback();
    });

    observer.observe(video);
    motionPreference.addEventListener("change", syncPlayback);

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, []);

  return (
    <div className="project-image-wrap project-image-wrap--video">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`${title} preview`}
      />
    </div>
  );
}
