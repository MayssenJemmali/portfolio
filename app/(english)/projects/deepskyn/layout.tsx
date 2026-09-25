import type { Metadata } from "next";
import { getPortfolio } from "@/data/get-portfolio";

export const metadata: Metadata = {
  title: "DeepSkyn | Mayssen Jemmali",
  description: getPortfolio("en").deepSkynDetail.lead,
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
