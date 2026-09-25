import type { Metadata } from "next";
import { getPortfolio } from "@/data/get-portfolio";

export const metadata: Metadata = {
  title: "SmartPFE | Mayssen Jemmali",
  description: getPortfolio("en").smartPfeDetail.lead,
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
