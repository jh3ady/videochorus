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
  const t = await getTranslations({ locale, namespace: "metadata.cgu" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/terms",
      languages: {
        en: "/terms",
        fr: "/fr/terms",
      },
    },
  };
}

export default function CGU() {
  const t = useTranslations("cgu");
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
          <p>{t("lastUpdated")}</p>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s1.title")}
            </h2>
            <p>{t("s1.p1")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s2.title")}
            </h2>
            <p>{t("s2.p1")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s3.title")}
            </h2>
            <p>{t("s3.p1")}</p>
            <p>{t("s3.p2")}</p>
            <ul>
              <li>{t("s3.li1")}</li>
              <li>{t("s3.li2")}</li>
              <li>{t("s3.li3")}</li>
              <li>{t("s3.li4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s4.title")}
            </h2>
            <p>{t("s4.p1")}</p>
            <p>{t("s4.p2")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s5.title")}
            </h2>
            <p>{t("s5.p1")}</p>
            <ul>
              <li>{t("s5.li1")}</li>
              <li>{t("s5.li2")}</li>
              <li>{t("s5.li3")}</li>
              <li>{t("s5.li4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s6.title")}
            </h2>
            <p>
              {t.rich("s6.p1", {
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

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s7.title")}
            </h2>
            <p>{t("s7.p1")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s8.title")}
            </h2>
            <p>{t("s8.p1")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
