import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageLoader from "@/components/PageLoader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jadz — Headlight Restoration & Cleaning",
  description:
    "Restore your vision. Professional headlight cleaning and restoration — near-original clarity in 30 minutes, $50 per car, protected for 1–2 years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Reveal animations are gated behind html.js so content is never
            hidden for no-JS visitors or crawlers. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js");`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
