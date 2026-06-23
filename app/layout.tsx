import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D-Sight Screeners | Simple Screening Equipment Comparison",
  description:
    "Compare three D-Sight screener models and request help choosing screening equipment for soil, gravel, compost, and sand.",
  keywords: [
    "D-Sight screeners",
    "screening equipment",
    "soil screener",
    "gravel screener",
    "compost screener",
    "contractor equipment",
  ],
  openGraph: {
    title: "D-Sight Screeners",
    description:
      "Simple, reliable screening equipment for contractors, farms, landscaping businesses, and property owners.",
    images: ["/images/d-sight-screener-hero.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
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
