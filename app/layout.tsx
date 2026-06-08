import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "RawCraft — Premium Raw Materials for Furniture Makers",
    template: "%s | RawCraft",
  },
  description:
    "Premium fabrics, solid woods, quality foams and raw materials for furniture craftsmen. Sourced responsibly, delivered with care across India.",
  keywords: [
    "furniture raw materials",
    "upholstery fabric",
    "solid wood",
    "foam",
    "sofa materials",
    "India",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "RawCraft",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
