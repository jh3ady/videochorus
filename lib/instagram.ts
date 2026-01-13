export interface InstagramVideo {
  id: string;
  title: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  duration: number;
  thumbnail: string;
  downloadUrls: {
    video: string;
    audio?: string;
  };
}

const INSTAGRAM_URL_REGEX = /^https?:\/\/(www\.)?(instagram\.com|instagr\.am)\/(reel|reels|p)\/[\w-]+/i;

export function isValidInstagramUrl(url: string): boolean {
  return INSTAGRAM_URL_REGEX.test(url);
}

export async function fetchInstagramVideo(url: string): Promise<InstagramVideo> {
  if (!isValidInstagramUrl(url)) {
    throw new Error("URL Instagram invalide");
  }

  // Utilise l'API de saveig.app
  const apiUrl = "https://v3.saveig.app/api/ajaxSearch";

  const formData = new URLSearchParams();
  formData.append("q", url);
  formData.append("t", "media");
  formData.append("lang", "en");

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "Origin": "https://saveig.app",
      "Referer": "https://saveig.app/",
    },
    body: formData.toString(),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération du Reel");
  }

  const data = await response.json();

  if (data.status !== "ok" || !data.data) {
    throw new Error("Impossible de récupérer le Reel Instagram");
  }

  // Parse le HTML retourné pour extraire les infos
  const html = data.data;

  // Extraire l'URL de la vidéo
  const videoMatch = html.match(/href="([^"]+)"[^>]*class="[^"]*abutton[^"]*download-media/);
  const videoUrl = videoMatch ? videoMatch[1] : null;

  if (!videoUrl) {
    throw new Error("Impossible de trouver le lien de téléchargement");
  }

  // Extraire la thumbnail
  const thumbMatch = html.match(/<img[^>]+src="([^"]+)"[^>]*class="[^"]*download-item__photo/);
  const thumbnail = thumbMatch ? thumbMatch[1] : "";

  // Extraire l'ID du reel depuis l'URL
  const idMatch = url.match(/\/(reel|reels|p)\/([\w-]+)/);
  const id = idMatch ? idMatch[2] : Date.now().toString();

  return {
    id,
    title: "Reel Instagram",
    author: {
      id: "instagram",
      name: "Instagram",
      avatar: "",
    },
    duration: 0,
    thumbnail,
    downloadUrls: {
      video: videoUrl,
    },
  };
}
