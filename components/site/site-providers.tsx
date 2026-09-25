"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { LocaleProvider } from "@/components/site/locale-provider";

export function SiteProviders({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
    </LocaleProvider>
  );
}
