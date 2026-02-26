# VideoChorus

Téléchargeur de vidéos TikTok en HD — avec ou sans watermark, ou en audio seul.

## Fonctionnalités

- Téléchargement de vidéos TikTok en HD sans watermark
- Téléchargement avec watermark
- Extraction audio (MP3)
- Aperçu vidéo avec métadonnées (durée, auteur, vues, likes)
- Collage d'URL depuis le presse-papiers en un clic
- Support Instagram Reels (en développement)

## Stack technique

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS 4** avec React Compiler
- **PostHog** pour l'analytics produit
- **Vercel Analytics & Speed Insights** pour le monitoring

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

L'application démarre sur [http://localhost:3001](http://localhost:3001).

## Production

```bash
npm run build
npm start
```

## Structure du projet

```
app/
├── api/
│   ├── video/route.ts          # Récupération des métadonnées vidéo
│   └── download/route.ts       # Proxy de téléchargement
├── page.tsx                    # Page principale
├── layout.tsx                  # Layout racine + providers
└── providers.tsx               # Initialisation PostHog
components/
├── DownloadForm.tsx            # Formulaire de saisie d'URL
├── VideoPreview.tsx            # Aperçu vidéo + métadonnées
└── DownloadOptions.tsx         # Boutons de téléchargement
lib/
├── tiktok.ts                   # Client API TikTok
├── instagram.ts                # Client API Instagram
└── video.ts                    # Interface vidéo multi-plateforme
```

## API

### `POST /api/video`

Récupère les métadonnées d'une vidéo à partir de son URL TikTok/Instagram.

**Body :** `{ "url": "https://www.tiktok.com/..." }`

### `GET /api/download`

Proxy de téléchargement du fichier vidéo/audio.

**Query params :** `url` (requis), `filename` (optionnel)

## Déploiement

Conçu pour être déployé sur [Vercel](https://vercel.com).

## Licence

MIT
