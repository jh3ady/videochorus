"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePostHog } from "posthog-js/react";

interface DownloadFormProps {
  onSearch: (url: string) => void;
  isLoading: boolean;
}

export default function DownloadForm({ onSearch, isLoading }: DownloadFormProps) {
  const t = useTranslations("downloadForm");
  const posthog = usePostHog();
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSearch(url.trim());
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      posthog.capture("url_paste");
      setUrl(text);
    } catch {
      // Clipboard access denied
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <label htmlFor="tiktok-url" className="sr-only">
            {t("label")}
          </label>
          <input
            id="tiktok-url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={t("placeholder")}
            className="w-full px-4 py-4 pr-24 text-base rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent backdrop-blur-xl transition-all"
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={handlePaste}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 text-sm text-white/70 hover:text-white bg-white/10 hover:bg-white/15 rounded-xl transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:rounded-xl"
          >
            <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {t("paste")}
          </button>
        </div>
        <button
          type="submit"
          disabled={isLoading || !url.trim()}
          aria-busy={isLoading}
          className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-semibold rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 btn-glow shadow-lg shadow-violet-500/25 active:scale-[0.98] sm:w-auto w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
        >
          {isLoading ? (
            <>
              <svg aria-hidden="true" focusable="false" className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {t("loading")}
            </>
          ) : (
            <>
              <svg aria-hidden="true" focusable="false" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {t("search")}
            </>
          )}
        </button>
      </div>
    </form>
  );
}
