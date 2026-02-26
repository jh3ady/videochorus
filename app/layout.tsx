import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ConsentProvider } from "@/lib/consent";
import { PostHogProvider, ConditionalAnalytics } from "./providers";
import { PostHogPageView } from "./PostHogPageView";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://videochorus.jdevelop.io"),
  title: "VideoChorus - Télécharger des vidéos TikTok",
  description:
    "Télécharge tes vidéos TikTok préférées en HD, avec ou sans watermark",
  applicationName: "VideoChorus",
  authors: [{ name: "JDevelop", url: "https://jdevelop.io" }],
  keywords: [
    "télécharger vidéo TikTok",
    "download TikTok",
    "TikTok downloader",
    "sans watermark",
    "without watermark",
    "HD",
    "téléchargement TikTok",
    "sauvegarde vidéo TikTok",
    "TikTok video download",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "VideoChorus - Télécharger des vidéos TikTok",
    description:
      "Télécharge tes vidéos TikTok préférées en HD, avec ou sans watermark",
    url: "https://videochorus.jdevelop.io",
    siteName: "VideoChorus",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "VideoChorus - Télécharger des vidéos TikTok",
    description:
      "Télécharge tes vidéos TikTok préférées en HD, avec ou sans watermark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "VideoChorus",
                description:
                  "Télécharge tes vidéos TikTok préférées en HD, avec ou sans watermark",
                url: "https://videochorus.jdevelop.io",
                applicationCategory: "MultimediaApplication",
                operatingSystem: "Web",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "EUR",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "JDevelop",
                url: "https://jdevelop.io",
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "contact@jdevelop.io",
                  contactType: "customer service",
                },
              },
            ]),
          }}
        />
        <ConsentProvider>
          <PostHogProvider>
            <PostHogPageView />
            {children}
            <ConditionalAnalytics />
          </PostHogProvider>
          <CookieConsent />
        </ConsentProvider>
      </body>
    </html>
  );
}
