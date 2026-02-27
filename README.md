# KeyRef ⌨️

Application web de référence des raccourcis clavier pour développeurs et power users. Interface moderne avec thème sombre et recherche instantanée.

## Fonctionnalités

- **6 plateformes supportées** : macOS, Windows, Linux, Terminal macOS, Terminal Windows, Terminal Linux
- **600+ raccourcis** organisés par catégories (Système, Navigation, Texte, Finder, Terminal...)
- **Recherche instantanée** avec highlighting des résultats (Ctrl/Cmd+K)
- **Copier au clic** : cliquez sur un raccourci pour le copier dans le presse-papier
- **Design responsive** : adapté mobile, tablette et desktop

## Stack technique

HTML5 / CSS3 / JavaScript vanilla — zéro dépendance externe.

- CSS Grid + custom properties pour le theming
- Police JetBrains Mono (raccourcis) + Space Grotesk (UI)
- Thème sombre avec couleurs d'accent par OS

## Structure

```
├── index.html   # Structure HTML
├── script.js    # Logique, données des raccourcis, recherche
├── style.css    # Styles, animations, responsive
└── README.md
```

## Utilisation

Ouvrir `index.html` dans un navigateur. Aucun build ni serveur requis.

## Raccourcis de l'app

| Action | Raccourci |
|--------|-----------|
| Ouvrir la recherche | `Ctrl+K` / `Cmd+K` |
| Fermer la recherche | `Escape` |
| Copier un raccourci | Clic sur le raccourci |
