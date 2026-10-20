import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { siteMeta, withBasePath } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${siteMeta.name} | ${siteMeta.title}`,
  description: siteMeta.statement,
  metadataBase: new URL(siteMeta.siteOrigin),
  applicationName: siteMeta.name,
  keywords: [
    "Jianan Chen",
    "LLM agent systems",
    "agent memory",
    "memory privacy",
    "trustworthy AI",
    "MIDAS",
    "Pensieve",
  ],
  openGraph: {
    title: `${siteMeta.name} | ${siteMeta.title}`,
    description: siteMeta.statement,
    url: siteMeta.siteUrl,
    siteName: siteMeta.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: withBasePath("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Jianan Chen portfolio social share image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} | ${siteMeta.title}`,
    description: siteMeta.statement,
    images: [withBasePath("/twitter-image")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[var(--color-bg)] text-[var(--color-fg)] antialiased">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
