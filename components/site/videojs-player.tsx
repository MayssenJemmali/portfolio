"use client";

import { useEffect, useRef } from "react";

type VideoJsPlayerProps = {
  src: string;
  poster: string;
  title: string;
};

export function VideoJsPlayer({ src, poster, title }: VideoJsPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let disposed = false;
    let player: { dispose: () => void } | undefined;

    void import("video.js").then((videojsModule) => {
      const video = videoRef.current;
      if (disposed || !video) return;

      player = videojsModule.default(video, {
        controls: true,
        responsive: true,
        fluid: false,
        preload: "metadata",
        poster,
        sources: [{ src, type: "video/mp4" }],
      });
    });

    return () => {
      disposed = true;
      player?.dispose();
    };
  }, [poster, src]);

  return (
    <div className="case-video-player">
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered"
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={title}
      />
    </div>
  );
}
