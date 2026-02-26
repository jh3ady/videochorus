"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CookieSettingsButton } from "./CookieSettingsButton";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="text-center mt-20 pt-8 border-t border-white/5 text-white/50 text-sm space-y-3">
      <nav className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-2 sm:gap-x-6 sm:gap-y-2">
        <Link
          href="/legal-notice"
          className="hover:text-violet-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:rounded"
        >
          {t("legalNotice")}
        </Link>
        <Link
          href="/privacy-policy"
          className="hover:text-violet-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:rounded"
        >
          {t("privacyPolicy")}
        </Link>
        <Link
          href="/terms"
          className="hover:text-violet-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:rounded"
        >
          {t("terms")}
        </Link>
        <CookieSettingsButton />
      </nav>
      <p>&copy; {year} JDevelop &mdash; VideoChorus</p>
    </footer>
  );
}
