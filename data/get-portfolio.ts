import {
  annonceTnDetail,
  communityRoles,
  deepSkynDetail,
  experiences,
  gazelleProDetail,
  portfolioFr,
  profile,
  projects,
  smartPfeDetail,
} from "@/data/portfolio";
import type { Locale } from "@/data/locale-copy";

export function getPortfolio(locale: Locale) {
  if (locale === "fr") return portfolioFr;

  return {
    profile,
    projects,
    experiences,
    communityRoles,
    smartPfeDetail,
    deepSkynDetail,
    annonceTnDetail,
    gazelleProDetail,
  };
}
