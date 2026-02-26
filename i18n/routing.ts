import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/terms": {
      en: "/terms",
      fr: "/cgu",
    },
    "/legal-notice": {
      en: "/legal-notice",
      fr: "/mentions-legales",
    },
    "/privacy-policy": {
      en: "/privacy-policy",
      fr: "/politique-de-confidentialite",
    },
  },
});
