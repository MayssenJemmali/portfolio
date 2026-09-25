"use client";

import { Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { localeCopy, type Locale } from "@/data/locale-copy";

type ArchitectureImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function ArchitectureViewer({ image, title, caption, locale = "en" }: { image: ArchitectureImage; title: string; caption: string; locale?: Locale }) {
  return (
    <Dialog>
      <figure className="case-architecture">
        <div className="case-architecture-frame">
          <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="case-architecture-zoom">
              <Maximize2 aria-hidden="true" /> {localeCopy[locale].casePage.zoomArchitecture}
            </Button>
          </DialogTrigger>
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
      <DialogContent className="case-architecture-dialog" aria-describedby={undefined} closeLabel={locale === "fr" ? "Fermer" : "Close"}>
        <DialogTitle>{title}</DialogTitle>
        <div className="case-architecture-dialog-image">
          <img src={image.src} alt={image.alt} width={image.width} height={image.height} decoding="async" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
