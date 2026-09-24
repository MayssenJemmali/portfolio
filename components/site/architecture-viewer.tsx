"use client";

import { Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type ArchitectureImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function ArchitectureViewer({ image, title, caption }: { image: ArchitectureImage; title: string; caption: string }) {
  return (
    <Dialog>
      <figure className="case-architecture">
        <div className="case-architecture-frame">
          <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="case-architecture-zoom">
              <Maximize2 aria-hidden="true" /> Zoom architecture
            </Button>
          </DialogTrigger>
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
      <DialogContent className="case-architecture-dialog" aria-describedby={undefined}>
        <DialogTitle>{title}</DialogTitle>
        <div className="case-architecture-dialog-image">
          <img src={image.src} alt={image.alt} width={image.width} height={image.height} decoding="async" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
