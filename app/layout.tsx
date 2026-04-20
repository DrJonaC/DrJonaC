import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { siteMeta } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: `${siteMeta.name} | ${siteMeta.title}`,
  description: siteMeta.statement,
  metadataBase: new URL(siteMeta.siteUrl),
  applicationName: siteMeta.name,
  keywords: [
    "Jianan Chen",
    "LLM agent systems",
    "agent memory",
    "memory privacy",
    "trustworthy AI",
    "MIDAS",
    "Pensieve"
  ],
  openGraph: {
    title: `${siteMeta.name} | ${siteMeta.title}`,
    description: siteMeta.statement,
    url: siteMeta.siteUrl,
    siteName: siteMeta.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} | ${siteMeta.title}`,
    description: siteMeta.statement
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[var(--color-bg)] text-[var(--color-fg)] antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-x-0 top-[-10rem] h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_55%)]" />
          <div className="absolute inset-y-0 right-[-12rem] w-[28rem] bg-[radial-gradient(circle,_rgba(16,185,129,0.12),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(245,245,247,0.95)_36%,rgba(237,239,242,0.82))]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(10,10,10,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.45)_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
