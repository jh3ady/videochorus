"use client";

import { useTranslations } from "next-intl";
import { usePostHog } from "posthog-js/react";
import { TikTokVideo } from "@/lib/tiktok";

interface DownloadOptionsProps {
  video: TikTokVideo;
}

export default function DownloadOptions({ video }: DownloadOptionsProps) {
  const t = useTranslations("downloadOptions");
  const posthog = usePostHog();

  const handleDownload = (url: string, type: string, variant: string) => {
    posthog.capture("video_download", {
      video_id: video.id,
      author: video.author.name,
      type,
      variant,
    });
    const extension = type === "audio" ? "mp3" : "mp4";
    const filename = `${video.author.name}-${video.id}.${extension}`;
    const downloadUrl = `/api/download?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename)}`;
    window.open(downloadUrl, "_blank");
  };

  return (
    <div className="w-full md:max-w-sm space-y-3 animate-fade-in-up delay-300">
      <button
        onClick={() => handleDownload(video.downloadUrls.noWatermark, "video", "no_watermark")}
        className="w-full flex items-center justify-between px-5 py-5 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-semibold rounded-2xl transition-all group btn-glow shadow-lg shadow-emerald-500/20 active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
      >
        <span className="flex items-center gap-3">
          <svg aria-hidden="true" focusable="false" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {t("noWatermark")}
        </span>
        <span className="flex items-center gap-2">
          <span className="bg-white/20 px-2 py-0.5 rounded-md text-xs font-medium">MP4</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-md text-xs font-medium">{t("recommended")}</span>
        </span>
      </button>

      <button
        onClick={() => handleDownload(video.downloadUrls.withWatermark, "video", "with_watermark")}
        className="w-full flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-2xl transition-all group hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
      >
        <span className="flex items-center gap-3">
          <svg aria-hidden="true" focusable="false" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {t("withWatermark")}
        </span>
        <span className="bg-white/10 px-2 py-0.5 rounded-md text-xs">MP4</span>
      </button>

      <button
        onClick={() => handleDownload(video.downloadUrls.audio, "audio", "audio_only")}
        className="w-full flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-2xl transition-all group hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
      >
        <span className="flex items-center gap-3">
          <svg aria-hidden="true" focusable="false" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          {t("audioOnly")}
        </span>
        <span className="bg-white/10 px-2 py-0.5 rounded-md text-xs">MP3</span>
      </button>
    </div>
  );
}
