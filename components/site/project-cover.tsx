"use client";

import { useEffect, useRef, useState } from "react";

type CoverImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export function ProjectCover({ images }: { images: CoverImage[] }) {
  const [current, setCurrent] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [firstReady, setFirstReady] = useState(false);
  const [enteredView, setEnteredView] = useState(false);
  const [allowMotion, setAllowMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (firstImageRef.current?.complete && firstImageRef.current.naturalWidth > 0) {
      setFirstReady(true);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEnteredView(true);
        observer.disconnect();
      }
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setAllowMotion(!preference.matches);
      if (preference.matches) setIncoming(null);
    };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!firstReady || !enteredView || !allowMotion || images.length < 2) return;

    let cancelled = false;
    let displayTimer: number | undefined;
    let fadeTimer: number | undefined;
    const next = (current + 1) % images.length;
    const preloader = new Image();
    preloader.decoding = "async";

    const preloadTimer = window.setTimeout(() => {
      preloader.onload = () => {
        const decoded = preloader.decode?.() ?? Promise.resolve();
        decoded.catch(() => {}).then(() => {
          if (cancelled) return;
          displayTimer = window.setTimeout(() => {
            setIncoming(next);
            fadeTimer = window.setTimeout(() => {
              setCurrent(next);
              setIncoming(null);
            }, 650);
          }, 3600);
        });
      };
      preloader.src = images[next].src;
    }, 300);

    return () => {
      cancelled = true;
      window.clearTimeout(preloadTimer);
      window.clearTimeout(displayTimer);
      window.clearTimeout(fadeTimer);
      preloader.onload = null;
    };
  }, [allowMotion, current, enteredView, firstReady, images]);

  const shown = images[current];
  const nextImage = incoming === null ? null : images[incoming];

  return (
    <div className="project-image-wrap" ref={containerRef} data-cover-index={current} data-cover-count={images.length}>
      <img
        ref={firstImageRef}
        src={shown.src}
        alt={shown.alt}
        width={shown.width ?? 1536}
        height={shown.height ?? 864}
        loading="eager"
        decoding="async"
        onLoad={() => setFirstReady(true)}
      />
      {nextImage && (
        <img
          className="project-cover-next"
          src={nextImage.src}
          alt=""
          aria-hidden="true"
          width={nextImage.width ?? 1536}
          height={nextImage.height ?? 864}
          decoding="async"
        />
      )}
    </div>
  );
}
