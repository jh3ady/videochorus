import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "metadata.mentionsLegales",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/legal-notice",
      languages: {
        en: "/legal-notice",
        fr: "/fr/legal-notice",
      },
    },
  };
}

export default function MentionsLegales() {
  const t = useTranslations("mentionsLegales");
  const tc = useTranslations("common");

  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-hidden relative">
      <div className="absolute top-[-30%] right-[-20%] w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-3xl animate-pulse-glow" />
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-3xl">
        <Link
          href="/"
          className="text-violet-400 hover:text-violet-300 text-sm mb-8 inline-block"
        >
          &larr; {tc("backToHome")}
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">{t("title")}</h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/80">
          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s1.title")}
            </h2>
            <p>
              <strong>{t("s1.company")}</strong>
              {t("s1.companyType")}
            </p>
            <ul className="list-none space-y-1 pl-0">
              <li>{t("s1.siren")}</li>
              <li>{t("s1.siret")}</li>
              <li>{t("s1.naf")}</li>
              <li>{t("s1.address")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s2.title")}
            </h2>
            <p>{t("s2.name")}</p>
            <p>
              {t("s2.contact")}{" "}
              <a
                href="mailto:contact@jdevelop.io"
                className="text-violet-400 hover:text-violet-300"
              >
                contact@jdevelop.io
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s3.title")}
            </h2>
            <p>
              <strong>{t("s3.company")}</strong>
            </p>
            <p>{t("s3.address")}</p>
            <p>
              {t("s3.website")}{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300"
              >
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s4.title")}
            </h2>
            <p>{t("s4.p1")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s5.title")}
            </h2>
            <p>
              {t.rich("s5.p1", {
                link: (chunks) => (
                  <Link
                    href="/privacy-policy"
                    className="text-violet-400 hover:text-violet-300"
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
