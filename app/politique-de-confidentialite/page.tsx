import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité - VideoChorus",
};

export default function PolitiqueDeConfidentialite() {
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
          Politique de confidentialité
        </h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/80">
          <p>
            Dernière mise à jour : 26 février 2026
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données personnelles est :
            </p>
            <p>
              <strong>JDevelop</strong>, SARL au capital variable
              <br />
              SIREN : 938 123 072
              <br />
              Siège social : 6 Place du Président Thomas Woodrow Wilson, 31000
              Toulouse, France
              <br />
              Contact :{" "}
              <a
                href="mailto:contact@jdevelop.io"
                className="text-pink-400 hover:text-pink-300"
              >
                contact@jdevelop.io
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Données collectées
            </h2>
            <p>
              VideoChorus ne requiert aucune création de compte et ne collecte
              aucune donnée personnelle directement identifiante. Les seules
              données traitées sont des données d&apos;analyse anonymes,
              collectées via des cookies soumis à votre consentement préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              3. Cookies et traceurs
            </h2>
            <p>
              Ce site utilise les cookies et traceurs suivants, uniquement après
              obtention de votre consentement :
            </p>
            <h3 className="text-lg font-medium text-white/90">
              PostHog (analyse d&apos;audience)
            </h3>
            <ul>
              <li>Pages vues (<code>$pageview</code>)</li>
              <li>Départ de page (<code>$pageleave</code>)</li>
              <li>Recherche de vidéo (<code>video_search</code>)</li>
              <li>Téléchargement de vidéo (<code>video_download</code>)</li>
              <li>
                Erreur de recherche (<code>video_search_error</code>)
              </li>
            </ul>
            <h3 className="text-lg font-medium text-white/90">
              Vercel Analytics et Speed Insights
            </h3>
            <ul>
              <li>Métriques de performance (Web Vitals : LCP, FID, CLS, etc.)</li>
              <li>Données de navigation anonymes</li>
            </ul>
            <p>
              Ces cookies ont une durée de validité maximale de 13 mois
              conformément aux recommandations de la CNIL. Vous pouvez modifier
              vos préférences à tout moment via le lien &laquo; Gérer les
              cookies &raquo; en bas de chaque page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Base légale du traitement
            </h2>
            <p>
              Le traitement des données d&apos;analyse repose sur votre
              consentement (article 6, paragraphe 1, point a) du Règlement
              général sur la protection des données &mdash; RGPD). Vous pouvez
              retirer votre consentement à tout moment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Durée de conservation
            </h2>
            <p>
              Les données d&apos;analyse sont conservées pour une durée maximale
              de 25 mois à compter de leur collecte, conformément aux
              recommandations de la CNIL.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              6. Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li>
                <strong>Droit d&apos;accès</strong> : obtenir la confirmation
                que des données vous concernant sont traitées et en recevoir une
                copie
              </li>
              <li>
                <strong>Droit de rectification</strong> : demander la
                correction de données inexactes
              </li>
              <li>
                <strong>Droit à l&apos;effacement</strong> : demander la
                suppression de vos données
              </li>
              <li>
                <strong>Droit d&apos;opposition</strong> : vous opposer au
                traitement de vos données
              </li>
              <li>
                <strong>Droit à la portabilité</strong> : recevoir vos données
                dans un format structuré et lisible par machine
              </li>
              <li>
                <strong>Droit de retirer votre consentement</strong> à tout
                moment via le lien &laquo; Gérer les cookies &raquo;
              </li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:contact@jdevelop.io"
                className="text-pink-400 hover:text-pink-300"
              >
                contact@jdevelop.io
              </a>
              .
            </p>
            <p>
              En cas de litige, vous pouvez introduire une réclamation auprès de
              la Commission Nationale de l&apos;Informatique et des Libertés
              (CNIL) :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300"
              >
                www.cnil.fr
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              7. Transferts de données hors Union européenne
            </h2>
            <p>
              Les données collectées peuvent être transférées vers les
              États-Unis via les services suivants :
            </p>
            <ul>
              <li>
                <strong>PostHog Inc.</strong> (hébergement US) &mdash; traitement
                des données d&apos;analyse
              </li>
              <li>
                <strong>Vercel Inc.</strong> (hébergement US) &mdash; hébergement
                du site et métriques de performance
              </li>
            </ul>
            <p>
              Ces transferts sont encadrés par des clauses contractuelles types
              (CCT) approuvées par la Commission européenne, conformément à
              l&apos;article 46 du RGPD.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
