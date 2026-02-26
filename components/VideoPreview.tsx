"use client";

import Image from "next/image";
import { TikTokVideo } from "@/lib/tiktok";

interface VideoPreviewProps {
  video: TikTokVideo;
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

export default function VideoPreview({ video }: VideoPreviewProps) {
  return (
    <div className="w-full max-w-xs bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
      <div className="relative aspect-[9/16]">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-sm text-white">
          {formatDuration(video.duration)}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Image
            src={video.author.avatar}
            alt={video.author.name}
            width={40}
            height={40}
            className="rounded-full"
            unoptimized
          />
          <span className="font-medium text-white">{video.author.name}</span>
        </div>
        <p className="text-white/80 text-sm line-clamp-2 mb-3">{video.title}</p>
        <div className="flex gap-4 text-white/60 text-sm">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            {formatNumber(video.playCount)}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {formatNumber(video.likeCount)}
          </span>
        </div>
      </div>
    </div>
  );
}
