export interface TikTokVideo {
  id: string;
  title: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  duration: number;
  thumbnail: string;
  playCount: number;
  likeCount: number;
  downloadUrls: {
    noWatermark: string;
    withWatermark: string;
    audio: string;
  };
}

export interface TikWmResponse {
  code: number;
  msg: string;
  processed_time: number;
  data: {
    id: string;
    title: string;
    duration: number;
    cover: string;
    origin_cover: string;
    play: string;
    wmplay: string;
    hdplay: string;
    music: string;
    play_count: number;
    digg_count: number;
    author: {
      id: string;
      unique_id: string;
      nickname: string;
      avatar: string;
    };
  };
}

const TIKTOK_URL_REGEX = /^https?:\/\/(www\.)?(tiktok\.com|vm\.tiktok\.com)\/.+/i;

export function isValidTikTokUrl(url: string): boolean {
  return TIKTOK_URL_REGEX.test(url);
}

export async function fetchTikTokVideo(url: string): Promise<TikTokVideo> {
  if (!isValidTikTokUrl(url)) {
    throw new Error("URL TikTok invalide");
  }

  const apiUrl = `https://tikwm.com/api/?url=${encodeURIComponent(url)}`;

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération de la vidéo");
  }

  const data: TikWmResponse = await response.json();

  if (data.code !== 0) {
    throw new Error(data.msg || "Erreur lors de la récupération de la vidéo");
  }

  return {
    id: data.data.id,
    title: data.data.title || "Vidéo TikTok",
    author: {
      id: data.data.author.id,
      name: data.data.author.nickname || data.data.author.unique_id,
      avatar: data.data.author.avatar,
    },
    duration: data.data.duration,
    thumbnail: data.data.origin_cover || data.data.cover,
    playCount: data.data.play_count,
    likeCount: data.data.digg_count,
    downloadUrls: {
      noWatermark: data.data.hdplay || data.data.play,
      withWatermark: data.data.wmplay,
      audio: data.data.music,
    },
  };
}
