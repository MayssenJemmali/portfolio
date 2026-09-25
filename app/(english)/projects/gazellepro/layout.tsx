import type { Metadata } from "next";
import { getPortfolio } from "@/data/get-portfolio";

export const metadata: Metadata = {
  title: "GazellePro | Mayssen Jemmali",
  description: getPortfolio("en").gazelleProDetail.lead,
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
