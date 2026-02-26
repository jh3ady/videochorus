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
  title: "VideoChorus - Télécharger des vidéos TikTok",
  description: "Télécharge tes vidéos TikTok préférées en HD, avec ou sans watermark",
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
