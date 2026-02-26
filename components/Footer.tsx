import Link from "next/link";
import { CookieSettingsButton } from "./CookieSettingsButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center mt-16 text-white/40 text-sm space-y-3">
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        <Link
          href="/mentions-legales"
          className="hover:text-white/60 transition-colors"
        >
          Mentions légales
        </Link>
        <Link
          href="/politique-de-confidentialite"
          className="hover:text-white/60 transition-colors"
        >
          Politique de confidentialité
        </Link>
        <Link
          href="/cgu"
          className="hover:text-white/60 transition-colors"
        >
          CGU
        </Link>
        <CookieSettingsButton />
      </nav>
      <p>&copy; {year} JDevelop &mdash; VideoChorus</p>
    </footer>
  );
}
