import { NextRequest, NextResponse } from "next/server";
import { fetchTikTokVideo, isValidTikTokUrl } from "@/lib/tiktok";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        { error: "URL manquante" },
        { status: 400 }
      );
    }

    if (!isValidTikTokUrl(url)) {
      return NextResponse.json(
        { error: "URL TikTok invalide" },
        { status: 400 }
      );
    }

    const video = await fetchTikTokVideo(url);

    return NextResponse.json({ video });
  } catch (error) {
    console.error("Erreur API video:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur inconnue" },
      { status: 500 }
    );
  }
}
