"use client";

import { useTranslations } from "next-intl";
import { useConsent } from "@/lib/consent";

export function CookieSettingsButton() {
  const t = useTranslations("cookieSettings");
  const { setShowBanner } = useConsent();

  return (
    <button
      onClick={() => setShowBanner(true)}
      className="hover:text-violet-400 transition-colors cursor-pointer min-h-[44px] px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:rounded"
    >
      {t("manage")}
    </button>
  );
}
