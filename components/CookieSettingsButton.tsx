"use client";

import { useConsent } from "@/lib/consent";

export function CookieSettingsButton() {
  const { setShowBanner } = useConsent();

  return (
    <button
      onClick={() => setShowBanner(true)}
      className="hover:text-white/60 transition-colors cursor-pointer"
    >
      Gérer les cookies
    </button>
  );
}
