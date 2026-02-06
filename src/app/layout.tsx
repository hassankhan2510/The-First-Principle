import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thefirstprinciple.app"),
  title: {
    default: "The First Principle | Islamic Philosophy & Apologetics",
    template: "%s | The First Principle",
  },
  description: "A first-principles approach to Islamic Philosophy. Dismantling modern atheism and secular ideologies with logic, science, and rigorous theology.",
  keywords: ["Islamic Philosophy", "Apologetics", "God", "Atheism", "Islam vs Science", "Liberalism", "Evolution"],
  authors: [{ name: "The First Principle Team" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "The First Principle",
    description: "Teaches how to think, not just what to chant. A logical defense of Islam.",
    url: "https://thefirstprinciple.app",
    siteName: "The First Principle",
    images: [
      {
        url: "/logo.png", // We should ideally have a landscape OG image, but using logo for now
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The First Principle",
    description: "Teaches how to think, not just what to chant.",
    images: ["/logo.png"],
  },
};

import Shell from "@/components/layout/Shell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable}`}>
        <Shell>
          {children}
        </Shell>
        <Analytics />
      </body>
    </html>
  );
}
