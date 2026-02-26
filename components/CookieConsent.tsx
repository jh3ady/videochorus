"use client";

import { useState } from "react";
import Link from "next/link";
import { useConsent } from "@/lib/consent";

export default function CookieConsent() {
  const { consent, isReady, showBanner, acceptAll, refuseAll, updateConsent } =
    useConsent();
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsToggle, setAnalyticsToggle] = useState(
    consent?.analytics ?? false
  );

  if (!isReady || !showBanner) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-white/10 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {!showCustomize ? (
          <>
            <p className="text-white/80 text-sm mb-4">
              Ce site utilise des cookies d&apos;analyse pour améliorer votre
              expérience. Aucun cookie publicitaire n&apos;est utilisé.{" "}
              <Link
                href="/politique-de-confidentialite"
                className="text-pink-400 hover:text-pink-300 underline"
              >
                En savoir plus
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={refuseAll}
                className="flex-1 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-lg transition-colors text-sm"
              >
                Refuser
              </button>
              <button
                onClick={() => {
                  setAnalyticsToggle(consent?.analytics ?? false);
                  setShowCustomize(true);
                }}
                className="flex-1 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-medium rounded-lg transition-colors text-sm"
              >
                Personnaliser
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-lg transition-colors text-sm"
              >
                Accepter tout
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-white/80 text-sm mb-4">
              Personnalisez vos préférences de cookies :
            </p>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">
                    Cookies essentiels
                  </p>
                  <p className="text-white/50 text-xs">
                    Nécessaires au fonctionnement du site
                  </p>
                </div>
                <span className="text-white/40 text-xs">Toujours actifs</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">
                    Cookies d&apos;analyse
                  </p>
                  <p className="text-white/50 text-xs">
                    PostHog, Vercel Analytics &mdash; mesure d&apos;audience
                    anonyme
                  </p>
                </div>
                <button
                  onClick={() => setAnalyticsToggle(!analyticsToggle)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    analyticsToggle ? "bg-pink-500" : "bg-white/20"
                  }`}
                  aria-label="Activer ou désactiver les cookies d'analyse"
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
                className="flex-1 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-medium rounded-lg transition-colors text-sm"
              >
                Retour
              </button>
              <button
                onClick={() => updateConsent({ analytics: analyticsToggle })}
                className="flex-1 px-5 py-2.5 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg transition-colors text-sm"
              >
                Enregistrer mes choix
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
