"use client";

import { useState } from "react";
import { usePostHog } from "posthog-js/react";
import DownloadForm from "@/components/DownloadForm";
import VideoPreview from "@/components/VideoPreview";
import DownloadOptions from "@/components/DownloadOptions";
import Footer from "@/components/Footer";
import { TikTokVideo } from "@/lib/tiktok";

export default function Home() {
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
        throw new Error(data.error || "Erreur lors de la récupération");
      }

      setVideo(data.video);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Une erreur est survenue";
      posthog.capture("video_search_error", { url, error: message });
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Video<span className="text-pink-500">Chorus</span>
          </h1>
          <p className="text-white/70 text-lg max-w-md mx-auto">
            Télécharge tes vidéos TikTok préférées en HD, avec ou sans watermark
          </p>
        </header>

        <div className="flex flex-col items-center gap-8">
          <DownloadForm onSearch={handleSearch} isLoading={isLoading} />

          {error && (
            <div className="w-full max-w-2xl bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-red-200 text-center">
              {error}
            </div>
          )}

          {video && (
            <div className="flex flex-col md:flex-row gap-8 items-start justify-center w-full">
              <VideoPreview video={video} />
              <DownloadOptions video={video} />
            </div>
          )}

          {!video && !error && !isLoading && (
            <div className="text-center text-white/50 mt-8">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p>Colle un lien TikTok pour commencer</p>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}
