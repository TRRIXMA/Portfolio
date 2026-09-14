# Portfolio — Mathilde Le Goff

Portfolio personnel en React (Vite), déployé automatiquement sur GitHub Pages.

## Développement

```bash
npm install
npm run dev
```

## Modifier le contenu

Tout le texte du site (expériences, projets, compétences…) se trouve dans `src/data.js`.

## Déploiement

Chaque `git push` sur la branche `main` reconstruit et publie le site via GitHub Actions (`.github/workflows/deploy.yml`).
