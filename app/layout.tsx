import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZIEPX - Mobile Payments for Zimbabwe & Africa",
  description: "Secure mobile payment platform enabling financial inclusion across Zimbabwe and Africa. Support for multiple currencies, P2P transfers, and in-store payments.",
  keywords: ["mobile payments", "Zimbabwe", "Africa", "financial inclusion", "digital payments", "ZiG", "P2P transfers"],
  openGraph: {
    title: "ZIEPX - Mobile Payments for Zimbabwe & Africa",
    description: "Secure mobile payment platform enabling financial inclusion across Zimbabwe and Africa.",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
