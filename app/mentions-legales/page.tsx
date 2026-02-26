import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales - VideoChorus",
  description:
    "Mentions légales de VideoChorus : éditeur JDevelop, hébergeur Vercel, propriété intellectuelle et données personnelles.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegales() {
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
          Mentions légales
        </h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/80">
          <section>
            <h2 className="text-xl font-semibold text-white">
              Éditeur du site
            </h2>
            <p>
              <strong>JDevelop</strong>, société à responsabilité limitée
              (SARL)
            </p>
            <ul className="list-none space-y-1 pl-0">
              <li>SIREN : 938 123 072</li>
              <li>SIRET : 938 123 072 00010</li>
              <li>Code NAF : 6202A &mdash; Conseil en systèmes et logiciels informatiques</li>
              <li>
                Siège social : 6 Place du Président Thomas Woodrow Wilson,
                31000 Toulouse, France
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Directeur de la publication
            </h2>
            <p>Jean-Denis VIDOT</p>
            <p>
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
            <h2 className="text-xl font-semibold text-white">Hébergeur</h2>
            <p>
              <strong>Vercel Inc.</strong>
            </p>
            <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p>
              Site web :{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300"
              >
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (structure, textes, logos,
              images, code source) est la propriété exclusive de JDevelop, sauf
              mention contraire. Toute reproduction, représentation ou
              diffusion, en tout ou partie, du contenu de ce site sans
              autorisation préalable est interdite et constitue une contrefaçon
              sanctionnée par les articles L.335-2 et suivants du Code de la
              propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Données personnelles
            </h2>
            <p>
              Pour toute information relative à la collecte et au traitement des
              données personnelles, veuillez consulter notre{" "}
              <Link
                href="/politique-de-confidentialite"
                className="text-pink-400 hover:text-pink-300"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
