import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en", "es", "de", "pt", "it"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/terms": {
      en: "/terms",
      fr: "/cgu",
      es: "/condiciones-de-uso",
      de: "/nutzungsbedingungen",
      pt: "/termos-de-uso",
      it: "/termini-di-servizio",
    },
    "/legal-notice": {
      en: "/legal-notice",
      fr: "/mentions-legales",
      es: "/aviso-legal",
      de: "/impressum",
      pt: "/aviso-legal",
      it: "/note-legali",
    },
    "/privacy-policy": {
      en: "/privacy-policy",
      fr: "/politique-de-confidentialite",
      es: "/politica-de-privacidad",
      de: "/datenschutzerklaerung",
      pt: "/politica-de-privacidade",
      it: "/informativa-sulla-privacy",
    },
  },
});
