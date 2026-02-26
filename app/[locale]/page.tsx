"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePostHog } from "posthog-js/react";
import DownloadForm from "@/components/DownloadForm";
import VideoPreview from "@/components/VideoPreview";
import DownloadOptions from "@/components/DownloadOptions";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { TikTokVideo } from "@/lib/tiktok";

export default function Home() {
  const t = useTranslations("home");
  const posthog = usePostHog();
  const [video, setVideo] = useState<TikTokVideo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (url: string) => {
    setIsLoading(true);
    setError(null);
    setVideo(null);

    posthog.capture("video_search", { url });

    try {
      const response = await fetch("/api/video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t("fetchError"));
      }

      setVideo(data.video);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : t("genericError");
      posthog.capture("video_search_error", { url, error: message });
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-hidden relative">
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-fuchsia-600/20 blur-3xl animate-pulse-glow delay-200"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="absolute top-4 right-4 md:top-8 md:right-8">
          <LanguageSwitcher />
        </div>

        <header className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Video<span className="text-gradient">Chorus</span>
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide text-white/60 max-w-md mx-auto">
            {t("tagline")}
          </p>
        </header>

        <div className="flex flex-col items-center gap-8">
          <div className="w-full flex justify-center animate-fade-in-up delay-100">
            <DownloadForm onSearch={handleSearch} isLoading={isLoading} />
          </div>

          {error && (
            <div
              role="alert"
              aria-live="assertive"
              className="w-full max-w-2xl border-l-4 border-red-500 bg-red-500/10 backdrop-blur-sm rounded-r-xl p-4 text-red-200 animate-fade-in"
            >
              {error}
            </div>
          )}

          {video && (
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full animate-fade-in-up delay-200">
              <VideoPreview video={video} />
              <DownloadOptions video={video} />
            </div>
          )}

          {!video && !error && !isLoading && (
            <div className="text-center text-white/60 mt-8 animate-fade-in delay-300">
              <svg
                aria-hidden="true"
                focusable="false"
                className="w-16 h-16 mx-auto mb-4 opacity-30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <p className="font-light tracking-wide">{t("placeholder")}</p>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}
