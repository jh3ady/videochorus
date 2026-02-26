"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  fr: "FR",
  en: "EN",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1" role="navigation" aria-label={t("label")}>
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => handleChange(l)}
          disabled={l === locale}
          className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
            l === locale
              ? "bg-violet-500/20 text-violet-300 cursor-default"
              : "text-white/50 hover:text-white hover:bg-white/10"
          }`}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}
