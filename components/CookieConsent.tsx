"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useConsent } from "@/lib/consent";

export default function CookieConsent() {
  const t = useTranslations("cookieConsent");
  const { consent, isReady, showBanner, acceptAll, refuseAll, updateConsent } =
    useConsent();
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsToggle, setAnalyticsToggle] = useState(
    consent?.analytics ?? false
  );

  if (!isReady || !showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label={t("ariaLabel")}
      className="fixed bottom-0 inset-x-0 z-50 bg-gray-950/95 backdrop-blur-xl border-t border-white/5 p-4 md:p-6 pb-[env(safe-area-inset-bottom,16px)] animate-fade-in-up"
    >
      <div className="max-w-4xl mx-auto">
        {!showCustomize ? (
          <>
            <p className="text-white/80 text-sm mb-4">
              {t("message")}{" "}
              <Link
                href="/privacy-policy"
                className="text-violet-400 hover:text-violet-300 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:rounded"
              >
                {t("learnMore")}
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={refuseAll}
                className="flex-1 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-lg transition-colors text-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                {t("refuse")}
              </button>
              <button
                onClick={() => {
                  setAnalyticsToggle(consent?.analytics ?? false);
                  setShowCustomize(true);
                }}
                className="flex-1 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-medium rounded-lg transition-colors text-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                {t("customize")}
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 px-5 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-medium rounded-lg transition-colors text-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {t("acceptAll")}
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-white/80 text-sm mb-4">
              {t("customizeTitle")}
            </p>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">
                    {t("essentialCookies")}
                  </p>
                  <p className="text-white/50 text-xs">
                    {t("essentialDescription")}
                  </p>
                </div>
                <span className="text-white/50 text-xs">{t("alwaysActive")}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">
                    {t("analyticsCookies")}
                  </p>
                  <p className="text-white/50 text-xs">
                    {t("analyticsDescription")}
                  </p>
                </div>
                <button
                  role="switch"
                  aria-checked={analyticsToggle}
                  aria-label={t("analyticsAriaLabel")}
                  onClick={() => setAnalyticsToggle(!analyticsToggle)}
                  className={`relative w-11 h-6 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 ${
                    analyticsToggle ? "bg-violet-500" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      analyticsToggle ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowCustomize(false)}
                className="flex-1 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-medium rounded-lg transition-colors text-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                {t("back")}
              </button>
              <button
                onClick={() => updateConsent({ analytics: analyticsToggle })}
                className="flex-1 px-5 py-2.5 bg-violet-500 hover:bg-violet-600 text-white font-medium rounded-lg transition-colors text-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {t("saveChoices")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
