import type { Metadata } from "next";
import { getPortfolio } from "@/data/get-portfolio";

export const metadata: Metadata = {
  title: "AnnonceTN | Mayssen Jemmali",
  description: getPortfolio("en").annonceTnDetail.lead,
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
