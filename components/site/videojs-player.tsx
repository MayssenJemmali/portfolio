"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/data/locale-copy";

type VideoJsPlayerProps = {
  src: string;
  poster: string;
  title: string;
  locale?: Locale;
};

export function VideoJsPlayer({ src, poster, title, locale = "en" }: VideoJsPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let disposed = false;
    let player: { dispose: () => void } | undefined;

    void import("video.js").then(async (videojsModule) => {
      const video = videoRef.current;
      if (disposed || !video) return;

      if (locale === "fr") {
        const french = await import("video.js/dist/lang/fr.json");
        if (disposed) return;
        videojsModule.default.addLanguage("fr", french.default);
      }

      player = videojsModule.default(video, {
        controls: true,
        responsive: true,
        fluid: false,
        preload: "metadata",
        poster,
        language: locale,
        sources: [{ src, type: "video/mp4" }],
      });
    });

    return () => {
      disposed = true;
      player?.dispose();
    };
  }, [locale, poster, src]);

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
