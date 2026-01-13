"use client";

import { TikTokVideo } from "@/lib/tiktok";

interface DownloadOptionsProps {
  video: TikTokVideo;
}

export default function DownloadOptions({ video }: DownloadOptionsProps) {
  const handleDownload = (url: string, type: string) => {
    const extension = type === "audio" ? "mp3" : "mp4";
    const filename = `${video.author.name}-${video.id}.${extension}`;
    const downloadUrl = `/api/download?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename)}`;
    window.open(downloadUrl, "_blank");
  };

  return (
    <div className="w-full max-w-md space-y-3">
      <button
        onClick={() => handleDownload(video.downloadUrls.noWatermark, "video")}
        className="w-full flex items-center justify-between px-5 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all group"
      >
        <span className="flex items-center gap-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          HD Sans watermark
        </span>
        <span className="text-white/70 group-hover:text-white transition-colors">MP4</span>
      </button>

      <button
        onClick={() => handleDownload(video.downloadUrls.withWatermark, "video")}
        className="w-full flex items-center justify-between px-5 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-xl transition-all group"
      >
        <span className="flex items-center gap-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Avec watermark
        </span>
        <span className="text-white/50 group-hover:text-white/70 transition-colors">MP4</span>
      </button>

      <button
        onClick={() => handleDownload(video.downloadUrls.audio, "audio")}
        className="w-full flex items-center justify-between px-5 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-xl transition-all group"
      >
        <span className="flex items-center gap-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          Audio seulement
        </span>
        <span className="text-white/50 group-hover:text-white/70 transition-colors">MP3</span>
      </button>
    </div>
  );
}
