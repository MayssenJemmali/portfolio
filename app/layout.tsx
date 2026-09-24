import type { Metadata } from "next";
import "video.js/dist/video-js.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jemmali Mohamed Mayssen | Software Engineering & AI",
  description: "Portfolio of a software engineering student building complete software systems with a focus on practical AI, architecture, and reliable delivery.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
