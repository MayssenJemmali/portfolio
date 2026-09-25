"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { localeCopy, type Locale } from "@/data/locale-copy";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export function ProjectGallery({ images, label, locale = "en" }: { images: GalleryImage[]; label?: string; locale?: Locale }) {
  const copy = localeCopy[locale].casePage;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <Carousel className="project-gallery" opts={{ align: "start", loop: false }} setApi={setApi} aria-label={label ?? copy.screenshots}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image.src}>
            <figure className="project-gallery-slide">
              <div className="project-gallery-image">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
              <figcaption>{image.caption}</figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="project-gallery-controls">
        <span aria-live="polite">{String(current).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
        <div>
          <Button className="project-gallery-nav" variant="outline" size="icon" aria-label={copy.previousScreenshot} disabled={!canPrev} onClick={() => api?.scrollPrev()}>
            <ArrowLeft aria-hidden="true" />
          </Button>
          <Button className="project-gallery-nav" variant="outline" size="icon" aria-label={copy.nextScreenshot} disabled={!canNext} onClick={() => api?.scrollNext()}>
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
    </Carousel>
  );
}
