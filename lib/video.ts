import { fetchTikTokVideo, isValidTikTokUrl, TikTokVideo } from "./tiktok";
import { fetchInstagramVideo, isValidInstagramUrl, InstagramVideo } from "./instagram";

export type Platform = "tiktok" | "instagram";

export interface VideoInfo {
  platform: Platform;
  id: string;
  title: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  duration: number;
  thumbnail: string;
  playCount?: number;
  likeCount?: number;
  downloadUrls: {
    noWatermark?: string;
    withWatermark?: string;
    video?: string;
    audio?: string;
  };
}

export function detectPlatform(url: string): Platform | null {
  if (isValidTikTokUrl(url)) return "tiktok";
  if (isValidInstagramUrl(url)) return "instagram";
  return null;
}

export function isValidUrl(url: string): boolean {
  return isValidTikTokUrl(url) || isValidInstagramUrl(url);
}

function tiktokToVideoInfo(video: TikTokVideo): VideoInfo {
  return {
    platform: "tiktok",
    id: video.id,
    title: video.title,
    author: video.author,
    duration: video.duration,
    thumbnail: video.thumbnail,
    playCount: video.playCount,
    likeCount: video.likeCount,
    downloadUrls: {
      noWatermark: video.downloadUrls.noWatermark,
      withWatermark: video.downloadUrls.withWatermark,
      audio: video.downloadUrls.audio,
    },
  };
}

function instagramToVideoInfo(video: InstagramVideo): VideoInfo {
  return {
    platform: "instagram",
    id: video.id,
    title: video.title,
    author: video.author,
    duration: video.duration,
    thumbnail: video.thumbnail,
    downloadUrls: {
      video: video.downloadUrls.video,
      audio: video.downloadUrls.audio,
    },
  };
}

export async function fetchVideo(url: string): Promise<VideoInfo> {
  const platform = detectPlatform(url);

  if (!platform) {
    throw new Error("URL non supportée. Utilisez un lien TikTok ou Instagram.");
  }

  if (platform === "tiktok") {
    const video = await fetchTikTokVideo(url);
    return tiktokToVideoInfo(video);
  }

  if (platform === "instagram") {
    const video = await fetchInstagramVideo(url);
    return instagramToVideoInfo(video);
  }

  throw new Error("Plateforme non supportée");
}
