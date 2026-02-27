import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { BrandProvider } from "@/themes/BrandProvider";
import { BrandSwitcher } from "@/components/BrandSwitcher";
import { SiteNavigation } from "@/components/SiteNavigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webflow POC — Multi-Brand Platform",
  description:
    "Proof of Concept: Webflow DevLink + Next.js for multi-brand websites with API integrations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <BrandProvider>
          <DevLinkProvider>
            <SiteNavigation />
            {children}
          </DevLinkProvider>
          <BrandSwitcher />
        </BrandProvider>
      </body>
    </html>
  );
}
