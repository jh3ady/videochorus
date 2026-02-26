import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://videochorus.jdevelop.io";

  const pages = [
    { en: "", fr: "", es: "", de: "", pt: "", it: "", changeFrequency: "daily" as const, priority: 1.0 },
    { en: "/terms", fr: "/cgu", es: "/condiciones-de-uso", de: "/nutzungsbedingungen", pt: "/termos-de-uso", it: "/termini-di-servizio", changeFrequency: "monthly" as const, priority: 0.3 },
    { en: "/legal-notice", fr: "/mentions-legales", es: "/aviso-legal", de: "/impressum", pt: "/aviso-legal", it: "/note-legali", changeFrequency: "monthly" as const, priority: 0.3 },
    { en: "/privacy-policy", fr: "/politique-de-confidentialite", es: "/politica-de-privacidad", de: "/datenschutzerklaerung", pt: "/politica-de-privacidade", it: "/informativa-sulla-privacy", changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  const alternates = (page: (typeof pages)[number]) => ({
    languages: {
      en: `${baseUrl}${page.en}`,
      fr: `${baseUrl}/fr${page.fr}`,
      es: `${baseUrl}/es${page.es}`,
      de: `${baseUrl}/de${page.de}`,
      pt: `${baseUrl}/pt${page.pt}`,
      it: `${baseUrl}/it${page.it}`,
    },
  });

  return pages.flatMap((page) => [
    {
      url: `${baseUrl}${page.en}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: alternates(page),
    },
    {
      url: `${baseUrl}/fr${page.fr}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: alternates(page),
    },
    {
      url: `${baseUrl}/es${page.es}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: alternates(page),
    },
    {
      url: `${baseUrl}/de${page.de}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: alternates(page),
    },
    {
      url: `${baseUrl}/pt${page.pt}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: alternates(page),
    },
    {
      url: `${baseUrl}/it${page.it}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: alternates(page),
    },
  ]);
}
