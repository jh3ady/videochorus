import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation - VideoChorus",
  description:
    "Conditions générales d'utilisation du service VideoChorus, outil de téléchargement de vidéos TikTok édité par JDevelop.",
  alternates: {
    canonical: "/cgu",
  },
};

export default function CGU() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link
          href="/"
          className="text-pink-400 hover:text-pink-300 text-sm mb-8 inline-block"
        >
          &larr; Retour à l&apos;accueil
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">
          Conditions Générales d&apos;Utilisation
        </h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/80">
          <p>
            Dernière mise à jour : 26 février 2026
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU) ont
              pour objet de définir les modalités et conditions d&apos;accès et
              d&apos;utilisation du service VideoChorus, édité par JDevelop.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Accès au service
            </h2>
            <p>
              VideoChorus est un service en ligne gratuit accessible depuis un
              navigateur web. Aucune inscription ni création de compte
              n&apos;est nécessaire. L&apos;éditeur se réserve le droit de
              modifier, suspendre ou interrompre le service à tout moment, sans
              préavis ni indemnité.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              3. Utilisation du service
            </h2>
            <p>
              L&apos;utilisateur s&apos;engage à utiliser VideoChorus de manière
              conforme à la législation en vigueur et aux présentes CGU.
              L&apos;utilisateur est seul responsable de l&apos;utilisation
              qu&apos;il fait du service et des contenus qu&apos;il télécharge.
            </p>
            <p>
              L&apos;utilisateur s&apos;engage notamment à :
            </p>
            <ul>
              <li>
                Respecter les droits de propriété intellectuelle des créateurs
                de contenu
              </li>
              <li>
                Ne pas utiliser le service à des fins illicites ou contraires à
                l&apos;ordre public
              </li>
              <li>
                Ne télécharger que des contenus pour lesquels il dispose des
                droits nécessaires ou dont l&apos;utilisation est autorisée
              </li>
              <li>
                Ne pas tenter de perturber le fonctionnement du service
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des éléments constituant le site VideoChorus
              (design, code source, logos, textes) est la propriété exclusive de
              JDevelop et est protégé par le droit de la propriété
              intellectuelle.
            </p>
            <p>
              Les vidéos téléchargées via le service restent la propriété de
              leurs auteurs respectifs. VideoChorus ne revendique aucun droit sur
              ces contenus et agit uniquement comme intermédiaire technique.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Limitation de responsabilité
            </h2>
            <p>
              Le service est fourni &laquo; en l&apos;état &raquo;, sans
              garantie d&apos;aucune sorte. JDevelop ne saurait être tenu
              responsable :
            </p>
            <ul>
              <li>
                Des interruptions temporaires ou permanentes du service
              </li>
              <li>
                De l&apos;utilisation faite par l&apos;utilisateur des contenus
                téléchargés
              </li>
              <li>
                De tout dommage direct ou indirect résultant de
                l&apos;utilisation du service
              </li>
              <li>
                De la disponibilité ou de la qualité des contenus tiers
                accessibles via le service
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              6. Données personnelles
            </h2>
            <p>
              Le traitement des données personnelles est décrit dans notre{" "}
              <Link
                href="/politique-de-confidentialite"
                className="text-pink-400 hover:text-pink-300"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              7. Modification des CGU
            </h2>
            <p>
              JDevelop se réserve le droit de modifier les présentes CGU à tout
              moment. Les modifications prennent effet dès leur publication sur
              le site. L&apos;utilisation continue du service après modification
              vaut acceptation des nouvelles CGU.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              8. Droit applicable et juridiction
            </h2>
            <p>
              Les présentes CGU sont régies par le droit français. En cas de
              litige relatif à l&apos;interprétation ou à l&apos;exécution des
              présentes, et à défaut de résolution amiable, les tribunaux
              compétents de Toulouse seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
