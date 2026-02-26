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
    namespace: "metadata.privacyPolicy",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/privacy-policy",
      languages: {
        en: "/privacy-policy",
        fr: "/fr/privacy-policy",
      },
    },
  };
}

export default function PolitiqueDeConfidentialite() {
  const t = useTranslations("privacyPolicy");
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
            <p>
              <strong>{t("s1.company")}</strong>
              {t("s1.companyDetails")}
              <br />
              {t("s1.siren")}
              <br />
              {t("s1.address")}
              <br />
              {t("s1.contact")}{" "}
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
              {t("s2.title")}
            </h2>
            <p>{t("s2.p1")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s3.title")}
            </h2>
            <p>{t("s3.p1")}</p>
            <h3 className="text-lg font-medium text-white/90">
              {t("s3.posthog")}
            </h3>
            <ul>
              <li>
                {t("s3.posthogLi1")} (<code>$pageview</code>)
              </li>
              <li>
                {t("s3.posthogLi2")} (<code>$pageleave</code>)
              </li>
              <li>
                {t("s3.posthogLi3")} (<code>video_search</code>)
              </li>
              <li>
                {t("s3.posthogLi4")} (<code>video_download</code>)
              </li>
              <li>
                {t("s3.posthogLi5")} (<code>video_search_error</code>)
              </li>
            </ul>
            <h3 className="text-lg font-medium text-white/90">
              {t("s3.vercel")}
            </h3>
            <ul>
              <li>{t("s3.vercelLi1")}</li>
              <li>{t("s3.vercelLi2")}</li>
            </ul>
            <p>{t("s3.p2")}</p>
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
            <p>{t("s5.p1")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s6.title")}
            </h2>
            <p>{t("s6.p1")}</p>
            <ul>
              <li>
                <strong>{t("s6.access")}</strong>
                {t("s6.accessDesc")}
              </li>
              <li>
                <strong>{t("s6.rectification")}</strong>
                {t("s6.rectificationDesc")}
              </li>
              <li>
                <strong>{t("s6.erasure")}</strong>
                {t("s6.erasureDesc")}
              </li>
              <li>
                <strong>{t("s6.objection")}</strong>
                {t("s6.objectionDesc")}
              </li>
              <li>
                <strong>{t("s6.portability")}</strong>
                {t("s6.portabilityDesc")}
              </li>
              <li>
                <strong>{t("s6.withdrawal")}</strong>
                {t("s6.withdrawalDesc")}
              </li>
            </ul>
            <p>
              {t("s6.p2")}{" "}
              <a
                href="mailto:contact@jdevelop.io"
                className="text-violet-400 hover:text-violet-300"
              >
                contact@jdevelop.io
              </a>
              .
            </p>
            <p>
              {t("s6.p3")}{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300"
              >
                www.cnil.fr
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              {t("s7.title")}
            </h2>
            <p>{t("s7.p1")}</p>
            <ul>
              <li>
                <strong>{t("s7.posthog")}</strong>
                {t("s7.posthogDesc")}
              </li>
              <li>
                <strong>{t("s7.vercel")}</strong>
                {t("s7.vercelDesc")}
              </li>
            </ul>
            <p>{t("s7.p2")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
