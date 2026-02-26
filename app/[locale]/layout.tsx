import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";
import { ConsentProvider } from "@/lib/consent";
import { PostHogProvider, ConditionalAnalytics } from "../providers";
import { PostHogPageView } from "../PostHogPageView";
import CookieConsent from "@/components/CookieConsent";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return {
    metadataBase: new URL("https://videochorus.jdevelop.io"),
    title: t("title"),
    description: t("description"),
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
      "descargar vídeo TikTok",
      "sin marca de agua",
      "descarga TikTok",
      "TikTok-Video herunterladen",
      "ohne Wasserzeichen",
      "TikTok herunterladen",
      "baixar vídeo TikTok",
      "sem marca d'água",
      "download TikTok português",
      "scaricare video TikTok",
      "senza filigrana",
      "TikTok download italiano",
    ],
    robots: "index, follow",
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
        fr: "/fr",
        es: "/es",
        de: "/de",
        pt: "/pt",
        it: "/it",
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://videochorus.jdevelop.io",
      siteName: "VideoChorus",
      locale: ({ fr: "fr_FR", en: "en_US", es: "es_ES", de: "de_DE", pt: "pt_PT", it: "it_IT" } as Record<string, string>)[locale] ?? "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations("structuredData");

  // Static JSON-LD structured data (no user input, safe to serialize)
  const structuredData = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "VideoChorus",
      description: t("description"),
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
  ]);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
        <NextIntlClientProvider messages={messages}>
          <ConsentProvider>
            <PostHogProvider>
              <PostHogPageView />
              {children}
              <ConditionalAnalytics />
            </PostHogProvider>
            <CookieConsent />
          </ConsentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
