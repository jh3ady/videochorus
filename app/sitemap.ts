import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://videochorus.jdevelop.io";

  const pages = [
    { en: "", fr: "", changeFrequency: "daily" as const, priority: 1.0 },
    { en: "/terms", fr: "/cgu", changeFrequency: "monthly" as const, priority: 0.3 },
    { en: "/legal-notice", fr: "/mentions-legales", changeFrequency: "monthly" as const, priority: 0.3 },
    { en: "/privacy-policy", fr: "/politique-de-confidentialite", changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  return pages.flatMap((page) => [
    {
      url: `${baseUrl}${page.en}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.en}`,
          fr: `${baseUrl}/fr${page.fr}`,
        },
      },
    },
    {
      url: `${baseUrl}/fr${page.fr}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.en}`,
          fr: `${baseUrl}/fr${page.fr}`,
        },
      },
    },
  ]);
}
