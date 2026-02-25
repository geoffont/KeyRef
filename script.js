// ——— DATA ———
const shortcutsData = {
  mac: {
    label: "macOS",
    icon: "\u{1F34E}",
    accent: "#00d4aa",
    categories: [
      {
        name: "Système & Navigation",
        icon: "\u2318",
        shortcuts: [
          { keys: ["\u2318", "Space"], desc: "Ouvrir Spotlight" },
          { keys: ["\u2318", "Tab"], desc: "Basculer entre les applications" },
          { keys: ["\u2318", "`"], desc: "Basculer entre les fenêtres de la même app" },
          { keys: ["\u2318", "H"], desc: "Masquer la fenêtre active" },
          { keys: ["\u2318", "M"], desc: "Réduire la fenêtre dans le Dock" },
          { keys: ["\u2318", "W"], desc: "Fermer la fenêtre active" },
          { keys: ["\u2318", "Q"], desc: "Quitter l'application" },
          { keys: ["\u2318", "\u2325", "Esc"], desc: "Forcer la fermeture d'une application" },
          { keys: ["\u2303", "\u2318", "Q"], desc: "Verrouiller l'écran" },
          { keys: ["\u2318", "\u21E7", "3"], desc: "Capture d'écran complète" },
          { keys: ["\u2318", "\u21E7", "4"], desc: "Capture d'écran d'une zone sélectionnée" },
          { keys: ["\u2318", "\u21E7", "5"], desc: "Options capture d'écran / enregistrement vidéo" },
          { keys: ["\u2318", "\u21E7", "4", "Space"], desc: "Capture d'une fenêtre spécifique" },
          { keys: ["\u2303", "\u2191"], desc: "Mission Control (toutes les fenêtres)" },
          { keys: ["\u2303", "\u2193"], desc: "Exposé : fenêtres de l'app active" },
          { keys: ["\u2303", "\u2190/\u2192"], desc: "Changer d'espace (bureau virtuel)" },
          { keys: ["\u2303", "\u2318", "F"], desc: "Basculer en plein écran" },
          { keys: ["\u2318", "F3"], desc: "Afficher le bureau (Mission Control)" },
          { keys: ["\u2318", "\u21E7", "?"], desc: "Ouvrir l'aide de l'app" },
          { keys: ["\u2318", ","], desc: "Préférences de l'application" },
        ]
      },
      {
        name: "Texte & Édition",
        icon: "\u270F\uFE0F",
        shortcuts: [
          { keys: ["\u2318", "C"], desc: "Copier" },
          { keys: ["\u2318", "X"], desc: "Couper" },
          { keys: ["\u2318", "V"], desc: "Coller" },
          { keys: ["\u2318", "\u21E7", "V"], desc: "Coller sans mise en forme" },
          { keys: ["\u2318", "Z"], desc: "Annuler (Undo)" },
          { keys: ["\u2318", "\u21E7", "Z"], desc: "Rétablir (Redo)" },
          { keys: ["\u2318", "A"], desc: "Tout sélectionner" },
          { keys: ["\u2318", "F"], desc: "Rechercher dans le document" },
          { keys: ["\u2318", "G"], desc: "Trouver l'occurrence suivante" },
          { keys: ["\u2318", "\u21E7", "G"], desc: "Trouver l'occurrence précédente" },
          { keys: ["\u2318", "\u2190"], desc: "Aller au début de la ligne" },
          { keys: ["\u2318", "\u2192"], desc: "Aller à la fin de la ligne" },
          { keys: ["\u2318", "\u2191"], desc: "Aller au début du document" },
          { keys: ["\u2318", "\u2193"], desc: "Aller à la fin du document" },
          { keys: ["\u2325", "\u2190"], desc: "Mot précédent" },
          { keys: ["\u2325", "\u2192"], desc: "Mot suivant" },
          { keys: ["\u2303", "K"], desc: "Supprimer jusqu'à la fin de la ligne" },
          { keys: ["\u2303", "A"], desc: "Début de ligne (style Emacs)" },
          { keys: ["\u2303", "E"], desc: "Fin de ligne (style Emacs)" },
          { keys: ["fn", "Delete"], desc: "Supprimer le caractère suivant (Suppr)" },
          { keys: ["\u2325", "Delete"], desc: "Supprimer le mot précédent" },
          { keys: ["\u2318", "Delete"], desc: "Supprimer jusqu'au début de la ligne" },
          { keys: ["\u2318", "B"], desc: "Gras" },
          { keys: ["\u2318", "I"], desc: "Italique" },
          { keys: ["\u2318", "U"], desc: "Souligné" },
        ]
      },
      {
        name: "Finder",
        icon: "\uD83D\uDCC1",
        shortcuts: [
          { keys: ["\u2318", "N"], desc: "Nouvelle fenêtre Finder" },
          { keys: ["\u2318", "\u21E7", "N"], desc: "Nouveau dossier" },
          { keys: ["\u2318", "O"], desc: "Ouvrir le fichier sélectionné" },
          { keys: ["Space"], desc: "Aperçu rapide (Quick Look)" },
          { keys: ["\u2318", "I"], desc: "Afficher les informations du fichier" },
          { keys: ["\u2318", "D"], desc: "Dupliquer le fichier" },
          { keys: ["\u2318", "\u2325", "V"], desc: "Déplacer les fichiers copiés (Couper+Coller)" },
          { keys: ["\u2318", "Delete"], desc: "Mettre à la corbeille" },
          { keys: ["\u2318", "\u21E7", "Delete"], desc: "Vider la corbeille" },
          { keys: ["\u2318", "\u21E7", "G"], desc: "Aller au dossier (saisir un chemin)" },
          { keys: ["\u2318", "\u21E7", "H"], desc: "Aller au dossier personnel (Home)" },
          { keys: ["\u2318", "\u21E7", "D"], desc: "Aller au bureau" },
          { keys: ["\u2318", "\u21E7", "A"], desc: "Aller aux Applications" },
          { keys: ["\u2318", "1/2/3/4"], desc: "Vue icônes / liste / colonnes / Cover Flow" },
          { keys: ["\u2318", "\u21E7", "."], desc: "Afficher / masquer les fichiers cachés" },
          { keys: ["Enter"], desc: "Renommer le fichier sélectionné" },
          { keys: ["\u2318", "\u2193"], desc: "Ouvrir le fichier sélectionné" },
          { keys: ["\u2318", "\u2191"], desc: "Aller dans le dossier parent" },
        ]
      },
      {
        name: "Safari & Navigateurs",
        icon: "\uD83C\uDF10",
        shortcuts: [
          { keys: ["\u2318", "T"], desc: "Nouvel onglet" },
          { keys: ["\u2318", "\u21E7", "T"], desc: "Rouvrir le dernier onglet fermé" },
          { keys: ["\u2318", "W"], desc: "Fermer l'onglet actif" },
          { keys: ["\u2318", "R"], desc: "Recharger la page" },
          { keys: ["\u2318", "\u21E7", "R"], desc: "Recharger sans le cache" },
          { keys: ["\u2318", "L"], desc: "Focus sur la barre d'adresse" },
          { keys: ["\u2318", "\u2325", "\u2190/\u2192"], desc: "Onglet précédent / suivant" },
          { keys: ["\u2318", "+/-"], desc: "Zoom avant / arrière" },
          { keys: ["\u2318", "0"], desc: "Réinitialiser le zoom (100%)" },
          { keys: ["\u2318", "D"], desc: "Ajouter la page aux favoris" },
          { keys: ["\u2318", "\u21E7", "H"], desc: "Aller à la page d'accueil" },
          { keys: ["\u2318", "\u2325", "F"], desc: "Rechercher sur la page (Firefox)" },
        ]
      }
    ]
  },
  windows: {
    label: "Windows",
    icon: "\uD83E\uDE9F",
    accent: "#00b4d8",
    categories: [
      {
        name: "Système & Navigation",
        icon: "\u229E",
        shortcuts: [
          { keys: ["Win"], desc: "Ouvrir / fermer le menu Démarrer" },
          { keys: ["Win", "D"], desc: "Afficher / masquer le bureau" },
          { keys: ["Win", "E"], desc: "Ouvrir l'Explorateur de fichiers" },
          { keys: ["Win", "I"], desc: "Ouvrir les Paramètres Windows" },
          { keys: ["Win", "L"], desc: "Verrouiller l'écran" },
          { keys: ["Win", "R"], desc: "Ouvrir la boîte de dialogue Exécuter" },
          { keys: ["Win", "X"], desc: "Menu des raccourcis avancés (Power User)" },
          { keys: ["Win", "Tab"], desc: "Vue des tâches (Task View)" },
          { keys: ["Win", "S"], desc: "Ouvrir la recherche Windows" },
          { keys: ["Alt", "Tab"], desc: "Basculer entre les applications" },
          { keys: ["Alt", "F4"], desc: "Fermer l'application active" },
          { keys: ["Ctrl", "Alt", "Del"], desc: "Gestionnaire de tâches / Options de sécurité" },
          { keys: ["Ctrl", "\u21E7", "Esc"], desc: "Ouvrir directement le Gestionnaire de tâches" },
          { keys: ["Win", "\u2191"], desc: "Maximiser la fenêtre" },
          { keys: ["Win", "\u2193"], desc: "Réduire / Restaurer la fenêtre" },
          { keys: ["Win", "\u2190/\u2192"], desc: "Snap fenêtre à gauche / droite (50%)" },
          { keys: ["Win", "\u21E7", "\u2190/\u2192"], desc: "Déplacer la fenêtre vers un autre moniteur" },
          { keys: ["Win", "Ctrl", "D"], desc: "Créer un nouveau bureau virtuel" },
          { keys: ["Win", "Ctrl", "\u2190/\u2192"], desc: "Changer de bureau virtuel" },
          { keys: ["Win", "Ctrl", "F4"], desc: "Fermer le bureau virtuel actuel" },
          { keys: ["PrtSc"], desc: "Copier capture d'écran dans le presse-papiers" },
          { keys: ["Win", "\u21E7", "S"], desc: "Capture d'écran partielle (Snipping Tool)" },
          { keys: ["Win", "PrtSc"], desc: "Capture d'écran sauvegardée automatiquement" },
          { keys: ["Win", "V"], desc: "Ouvrir l'historique du presse-papiers" },
          { keys: ["Win", "."], desc: "Ouvrir le panneau d'emojis" },
        ]
      },
      {
        name: "Texte & Édition",
        icon: "\u270F\uFE0F",
        shortcuts: [
          { keys: ["Ctrl", "C"], desc: "Copier" },
          { keys: ["Ctrl", "X"], desc: "Couper" },
          { keys: ["Ctrl", "V"], desc: "Coller" },
          { keys: ["Ctrl", "Z"], desc: "Annuler (Undo)" },
          { keys: ["Ctrl", "Y"], desc: "Rétablir (Redo)" },
          { keys: ["Ctrl", "A"], desc: "Tout sélectionner" },
          { keys: ["Ctrl", "F"], desc: "Rechercher dans le document" },
          { keys: ["Ctrl", "H"], desc: "Rechercher et remplacer" },
          { keys: ["Ctrl", "\u2190/\u2192"], desc: "Se déplacer mot par mot" },
          { keys: ["Ctrl", "\u21E7", "\u2190/\u2192"], desc: "Sélectionner mot par mot" },
          { keys: ["Home/End"], desc: "Début / fin de la ligne" },
          { keys: ["Ctrl", "Home"], desc: "Aller au début du document" },
          { keys: ["Ctrl", "End"], desc: "Aller à la fin du document" },
          { keys: ["Delete"], desc: "Supprimer le caractère suivant" },
          { keys: ["Ctrl", "Delete"], desc: "Supprimer le mot suivant" },
          { keys: ["Ctrl", "Backspace"], desc: "Supprimer le mot précédent" },
          { keys: ["Ctrl", "B"], desc: "Gras" },
          { keys: ["Ctrl", "I"], desc: "Italique" },
          { keys: ["Ctrl", "U"], desc: "Souligné" },
          { keys: ["Ctrl", "S"], desc: "Sauvegarder" },
          { keys: ["Ctrl", "N"], desc: "Nouveau fichier / document" },
          { keys: ["Ctrl", "O"], desc: "Ouvrir un fichier" },
          { keys: ["Ctrl", "P"], desc: "Imprimer" },
        ]
      },
      {
        name: "Explorateur de fichiers",
        icon: "\uD83D\uDCC1",
        shortcuts: [
          { keys: ["Ctrl", "N"], desc: "Ouvrir une nouvelle fenêtre" },
          { keys: ["Ctrl", "W"], desc: "Fermer la fenêtre / l'onglet" },
          { keys: ["Ctrl", "\u21E7", "N"], desc: "Créer un nouveau dossier" },
          { keys: ["F2"], desc: "Renommer le fichier sélectionné" },
          { keys: ["F5"], desc: "Actualiser le contenu" },
          { keys: ["Alt", "\u2190"], desc: "Dossier précédent" },
          { keys: ["Alt", "\u2192"], desc: "Dossier suivant" },
          { keys: ["Alt", "\u2191"], desc: "Aller dans le dossier parent" },
          { keys: ["Alt", "Enter"], desc: "Afficher les propriétés du fichier" },
          { keys: ["Ctrl", "\u21E7", "E"], desc: "Développer le volet de navigation" },
          { keys: ["\u21E7", "Delete"], desc: "Supprimer définitivement (sans corbeille)" },
          { keys: ["Ctrl", "Z"], desc: "Annuler la dernière opération sur les fichiers" },
        ]
      },
      {
        name: "Navigateurs Web",
        icon: "\uD83C\uDF10",
        shortcuts: [
          { keys: ["Ctrl", "T"], desc: "Nouvel onglet" },
          { keys: ["Ctrl", "\u21E7", "T"], desc: "Rouvrir le dernier onglet fermé" },
          { keys: ["Ctrl", "W"], desc: "Fermer l'onglet actif" },
          { keys: ["Ctrl", "R"] , desc: "Recharger la page" },
          { keys: ["Ctrl", "\u21E7", "R"], desc: "Recharger sans le cache" },
          { keys: ["Ctrl", "L"], desc: "Focus sur la barre d'adresse" },
          { keys: ["Ctrl", "Tab"], desc: "Onglet suivant" },
          { keys: ["Ctrl", "\u21E7", "Tab"], desc: "Onglet précédent" },
          { keys: ["Ctrl", "+/-"], desc: "Zoom avant / arrière" },
          { keys: ["Ctrl", "0"], desc: "Réinitialiser le zoom (100%)" },
          { keys: ["F12"], desc: "Ouvrir les Outils de développement" },
          { keys: ["Ctrl", "\u21E7", "I"], desc: "Ouvrir les DevTools (Chrome/Edge)" },
          { keys: ["Ctrl", "U"], desc: "Afficher le code source de la page" },
        ]
      }
    ]
  },
  linux: {
    label: "Linux",
    icon: "\uD83D\uDC27",
    accent: "#f5a623",
    categories: [
      {
        name: "Système GNOME",
        icon: "\u2699\uFE0F",
        shortcuts: [
          { keys: ["Super"], desc: "Ouvrir la vue des activités (GNOME)" },
          { keys: ["Super", "A"], desc: "Afficher toutes les applications installées" },
          { keys: ["Super", "Tab"], desc: "Basculer entre les applications ouvertes" },
          { keys: ["Alt", "Tab"], desc: "Basculer les fenêtres de l'app active" },
          { keys: ["Alt", "F4"], desc: "Fermer la fenêtre active" },
          { keys: ["Alt", "F2"], desc: "Exécuter une commande (GNOME)" },
          { keys: ["Super", "\u2191"], desc: "Maximiser la fenêtre" },
          { keys: ["Super", "\u2193"], desc: "Restaurer / réduire la fenêtre" },
          { keys: ["Super", "\u2190/\u2192"], desc: "Snap fenêtre à gauche / droite" },
          { keys: ["Super", "H"], desc: "Masquer la fenêtre (minimiser)" },
          { keys: ["Super", "D"], desc: "Afficher le bureau" },
          { keys: ["Super", "L"], desc: "Verrouiller l'écran" },
          { keys: ["Super", "Ctrl", "\u2190/\u2192"], desc: "Changer de bureau virtuel" },
          { keys: ["Super", "\u21E7", "\u2190/\u2192"], desc: "Déplacer la fenêtre vers un autre bureau" },
          { keys: ["PrtSc"], desc: "Capture d'écran plein écran" },
          { keys: ["\u21E7", "PrtSc"], desc: "Capture d'écran d'une zone sélectionnée" },
          { keys: ["Ctrl", "Alt", "T"], desc: "Ouvrir le terminal (GNOME)" },
          { keys: ["Ctrl", "Alt", "Del"], desc: "Déconnexion / options système" },
          { keys: ["Ctrl", "Alt", "L"], desc: "Verrouiller l'écran (alternative)" },
        ]
      },
      {
        name: "Texte & Édition",
        icon: "\u270F\uFE0F",
        shortcuts: [
          { keys: ["Ctrl", "C"], desc: "Copier" },
          { keys: ["Ctrl", "X"], desc: "Couper" },
          { keys: ["Ctrl", "V"], desc: "Coller" },
          { keys: ["Ctrl", "Z"], desc: "Annuler (Undo)" },
          { keys: ["Ctrl", "\u21E7", "Z"], desc: "Rétablir (Redo)" },
          { keys: ["Ctrl", "A"], desc: "Tout sélectionner" },
          { keys: ["Ctrl", "F"], desc: "Rechercher dans le document" },
          { keys: ["Ctrl", "H"], desc: "Rechercher et remplacer" },
          { keys: ["Ctrl", "\u2190/\u2192"], desc: "Se déplacer mot par mot" },
          { keys: ["Home/End"], desc: "Début / fin de la ligne" },
          { keys: ["Ctrl", "Home"], desc: "Aller au début du document" },
          { keys: ["Ctrl", "End"], desc: "Aller à la fin du document" },
          { keys: ["Ctrl", "B"], desc: "Gras" },
          { keys: ["Ctrl", "I"], desc: "Italique" },
          { keys: ["Ctrl", "S"], desc: "Sauvegarder" },
          { keys: ["Ctrl", "P"], desc: "Imprimer" },
        ]
      },
      {
        name: "Nautilus (Fichiers GNOME)",
        icon: "\uD83D\uDCC1",
        shortcuts: [
          { keys: ["Ctrl", "N"], desc: "Ouvrir une nouvelle fenêtre Nautilus" },
          { keys: ["Ctrl", "T"], desc: "Nouvel onglet" },
          { keys: ["Ctrl", "W"], desc: "Fermer l'onglet actif" },
          { keys: ["Ctrl", "\u21E7", "N"], desc: "Créer un nouveau dossier" },
          { keys: ["F2"], desc: "Renommer le fichier sélectionné" },
          { keys: ["Ctrl", "H"], desc: "Afficher / masquer les fichiers cachés (dotfiles)" },
          { keys: ["Alt", "\u2190/\u2192"], desc: "Historique de navigation" },
          { keys: ["Alt", "\u2191"], desc: "Aller dans le dossier parent" },
          { keys: ["Ctrl", "L"], desc: "Afficher la barre d'adresse texte" },
          { keys: ["Delete"], desc: "Mettre à la corbeille" },
          { keys: ["\u21E7", "Delete"], desc: "Supprimer définitivement sans corbeille" },
          { keys: ["Ctrl", "Z"], desc: "Annuler la dernière opération" },
        ]
      }
    ]
  },
  mac_terminal: {
    label: "Terminal macOS",
    icon: "\u2328\uFE0F",
    accent: "#9b59b6",
    categories: [
      {
        name: "Navigation dans la ligne",
        icon: "\uD83D\uDCCC",
        shortcuts: [
          { keys: ["Ctrl", "A"], desc: "Aller au début de la ligne de commande" },
          { keys: ["Ctrl", "E"], desc: "Aller à la fin de la ligne de commande" },
          { keys: ["Alt", "B"], desc: "Reculer d'un mot" },
          { keys: ["Alt", "F"], desc: "Avancer d'un mot" },
          { keys: ["Ctrl", "\u2190"], desc: "Mot précédent" },
          { keys: ["Ctrl", "\u2192"], desc: "Mot suivant" },
          { keys: ["Ctrl", "XX"], desc: "Basculer entre début de ligne et position actuelle" },
        ]
      },
      {
        name: "Édition & Suppression",
        icon: "\u2702\uFE0F",
        shortcuts: [
          { keys: ["Ctrl", "U"], desc: "Effacer depuis le curseur jusqu'au début de ligne" },
          { keys: ["Ctrl", "K"], desc: "Effacer depuis le curseur jusqu'à la fin de ligne" },
          { keys: ["Ctrl", "W"], desc: "Effacer le mot précédent (délimiteur: espace)" },
          { keys: ["Alt", "D"], desc: "Effacer le mot suivant" },
          { keys: ["Alt", "Backspace"], desc: "Effacer le mot précédent (délimiteur: ponctuation)" },
          { keys: ["Ctrl", "D"], desc: "Supprimer le caractère sous le curseur / EOF" },
          { keys: ["Ctrl", "H"], desc: "Backspace (supprimer le caractère avant)" },
          { keys: ["Ctrl", "T"], desc: "Transposer les deux derniers caractères" },
          { keys: ["Alt", "T"], desc: "Transposer les deux derniers mots" },
          { keys: ["Ctrl", "Y"], desc: "Coller (yank) le texte supprimé" },
          { keys: ["Alt", "U"], desc: "Convertir le mot en MAJUSCULES" },
          { keys: ["Alt", "L"], desc: "Convertir le mot en minuscules" },
          { keys: ["Alt", "C"], desc: "Capitaliser le mot (première lettre en majuscule)" },
        ]
      },
      {
        name: "Historique des commandes",
        icon: "\uD83D\uDD58",
        shortcuts: [
          { keys: ["\u2191/\u2193"], desc: "Naviguer dans l'historique des commandes" },
          { keys: ["Ctrl", "R"], desc: "Recherche incrémentale inversée dans l'historique" },
          { keys: ["Ctrl", "G"], desc: "Annuler la recherche et revenir à la ligne actuelle" },
          { keys: ["Ctrl", "P/N"], desc: "Commande précédente / suivante (comme \u2191/\u2193)" },
          { keys: ["Alt", "."], desc: "Insérer le dernier argument de la commande précédente" },
          { keys: ["!!"], desc: "Répéter la dernière commande entière" },
          { keys: ["!$"], desc: "Dernier argument de la commande précédente" },
          { keys: ["!*"], desc: "Tous les arguments de la commande précédente" },
          { keys: ["!n"], desc: "Répéter la commande numéro n de l'historique" },
          { keys: ["!string"], desc: "Répéter la dernière commande commençant par 'string'" },
        ]
      },
      {
        name: "Processus & Signaux",
        icon: "\u26A1",
        shortcuts: [
          { keys: ["Ctrl", "C"], desc: "Interrompre le processus en cours (SIGINT)" },
          { keys: ["Ctrl", "Z"], desc: "Suspendre le processus en arrière-plan (SIGTSTP)" },
          { keys: ["Ctrl", "\\"], desc: "Quitter le processus forcément (SIGQUIT)" },
          { keys: ["Ctrl", "D"], desc: "Fin de fichier (EOF) / Quitter le shell" },
          { keys: ["Ctrl", "L"], desc: "Effacer l'écran (équivalent à 'clear')" },
          { keys: ["Ctrl", "S"], desc: "Suspendre le défilement de l'affichage (XOFF)" },
          { keys: ["Ctrl", "Q"], desc: "Reprendre le défilement de l'affichage (XON)" },
        ]
      },
      {
        name: "Onglets Terminal.app / iTerm2",
        icon: "\uD83D\uDDC2\uFE0F",
        shortcuts: [
          { keys: ["\u2318", "T"], desc: "Nouvel onglet dans Terminal.app" },
          { keys: ["\u2318", "N"], desc: "Nouvelle fenêtre de terminal" },
          { keys: ["\u2318", "W"], desc: "Fermer l'onglet actif" },
          { keys: ["\u2318", "\u21E7", "W"], desc: "Fermer la fenêtre" },
          { keys: ["\u2318", "\u21E7", "\u2190/\u2192"], desc: "Onglet précédent / suivant" },
          { keys: ["\u2318", "K"], desc: "Effacer l'écran et l'historique de défilement" },
          { keys: ["\u2318", "+/-"], desc: "Augmenter / diminuer la taille de la police" },
          { keys: ["\u2318", "F"], desc: "Rechercher dans le contenu du terminal" },
          { keys: ["\u2318", "D"], desc: "Diviser verticalement (iTerm2)" },
          { keys: ["\u2318", "\u21E7", "D"], desc: "Diviser horizontalement (iTerm2)" },
        ]
      }
    ]
  },
  win_terminal: {
    label: "Terminal Windows",
    icon: "\uD83D\uDCBB",
    accent: "#4fc3f7",
    categories: [
      {
        name: "Windows Terminal",
        icon: "\uD83D\uDDA5\uFE0F",
        shortcuts: [
          { keys: ["Ctrl", "\u21E7", "T"], desc: "Nouvel onglet (profil par défaut)" },
          { keys: ["Ctrl", "\u21E7", "W"], desc: "Fermer l'onglet actif" },
          { keys: ["Ctrl", "\u21E7", "1-9"], desc: "Ouvrir le profil correspondant (1 à 9)" },
          { keys: ["Ctrl", "Tab"], desc: "Onglet suivant" },
          { keys: ["Ctrl", "\u21E7", "Tab"], desc: "Onglet précédent" },
          { keys: ["Alt", "\u21E7", "D"], desc: "Diviser le panneau verticalement" },
          { keys: ["Alt", "\u21E7", "\u2212"], desc: "Diviser le panneau horizontalement" },
          { keys: ["Alt", "\u2190/\u2192/\u2191/\u2193"], desc: "Naviguer entre les panneaux divisés" },
          { keys: ["Ctrl", "\u21E7", "+/-"], desc: "Augmenter / diminuer la taille de la police" },
          { keys: ["Ctrl", "\u21E7", "F"], desc: "Rechercher dans le terminal" },
          { keys: ["Ctrl", "\u21E7", "P"], desc: "Ouvrir la palette de commandes" },
          { keys: ["F11"], desc: "Passer en plein écran" },
          { keys: ["Ctrl", "\u21E7", "C"], desc: "Copier la sélection" },
          { keys: ["Ctrl", "\u21E7", "V"], desc: "Coller depuis le presse-papiers" },
          { keys: ["Ctrl", "\u21E7", "Scroll"], desc: "Ajuster la taille de la police" },
        ]
      },
      {
        name: "PowerShell",
        icon: "\u26A1",
        shortcuts: [
          { keys: ["\u2191/\u2193"], desc: "Naviguer dans l'historique des commandes" },
          { keys: ["F7"], desc: "Afficher l'historique dans un menu interactif" },
          { keys: ["F8"], desc: "Auto-compléter depuis l'historique (débute par les caractères tapés)" },
          { keys: ["Tab"], desc: "Auto-complétion des commandes et chemins" },
          { keys: ["Ctrl", "C"], desc: "Interrompre la commande en cours" },
          { keys: ["Ctrl", "Z"], desc: "Fin de fichier (EOF)" },
          { keys: ["Ctrl", "A"], desc: "Aller au début de la ligne" },
          { keys: ["Ctrl", "E"], desc: "Aller à la fin de la ligne" },
          { keys: ["Home/End"], desc: "Début / fin de la ligne" },
          { keys: ["Ctrl", "\u2190/\u2192"], desc: "Mot précédent / suivant" },
          { keys: ["Ctrl", "Backspace"], desc: "Effacer le mot précédent" },
          { keys: ["Esc"], desc: "Effacer la ligne de commande complète" },
          { keys: ["Ctrl", "L"], desc: "Effacer l'écran (Clear-Host)" },
          { keys: ["Ctrl", "R"], desc: "Recherche inversée dans l'historique (PSReadLine)" },
          { keys: ["F5"], desc: "Commande précédente" },
          { keys: ["F3"], desc: "Répéter la commande précédente" },
        ]
      },
      {
        name: "Invite de commandes (CMD)",
        icon: "\uD83D\uDCDF",
        shortcuts: [
          { keys: ["\u2191/\u2193"], desc: "Naviguer dans l'historique" },
          { keys: ["F3"], desc: "Répéter la commande précédente" },
          { keys: ["F5"], desc: "Commande précédente (identique à \u2191)" },
          { keys: ["F7"], desc: "Afficher la liste de l'historique" },
          { keys: ["F9"], desc: "Exécuter la commande n\u00B0 x de l'historique" },
          { keys: ["Tab"], desc: "Auto-complétion des chemins de fichiers" },
          { keys: ["Ctrl", "C"], desc: "Annuler la commande en cours" },
          { keys: ["Home/End"], desc: "Début / fin de la ligne" },
          { keys: ["Ctrl", "\u2190/\u2192"], desc: "Mot précédent / suivant" },
          { keys: ["Esc"], desc: "Effacer la ligne" },
          { keys: ["Insert"], desc: "Basculer entre mode insertion et écrasement" },
        ]
      }
    ]
  },
  linux_terminal: {
    label: "Terminal Linux",
    icon: "\uD83D\uDC1A",
    accent: "#2ecc71",
    categories: [
      {
        name: "Bash / Zsh \u2014 Navigation",
        icon: "\uD83D\uDCCC",
        shortcuts: [
          { keys: ["Ctrl", "A"], desc: "Aller au début de la ligne de commande" },
          { keys: ["Ctrl", "E"], desc: "Aller à la fin de la ligne de commande" },
          { keys: ["Alt", "B"], desc: "Reculer d'un mot" },
          { keys: ["Alt", "F"], desc: "Avancer d'un mot" },
          { keys: ["Ctrl", "\u2190"], desc: "Mot précédent" },
          { keys: ["Ctrl", "\u2192"], desc: "Mot suivant" },
          { keys: ["Ctrl", "XX"], desc: "Basculer entre la position actuelle et le début de ligne" },
        ]
      },
      {
        name: "Bash / Zsh \u2014 Édition",
        icon: "\u270F\uFE0F",
        shortcuts: [
          { keys: ["Ctrl", "U"], desc: "Effacer depuis le curseur jusqu'au début de ligne" },
          { keys: ["Ctrl", "K"], desc: "Effacer depuis le curseur jusqu'à la fin de ligne" },
          { keys: ["Ctrl", "W"], desc: "Effacer le mot précédent (délimiteur: espace)" },
          { keys: ["Alt", "D"], desc: "Effacer le mot suivant" },
          { keys: ["Ctrl", "D"], desc: "Supprimer le caractère sous le curseur / EOF" },
          { keys: ["Ctrl", "H"], desc: "Backspace" },
          { keys: ["Ctrl", "T"], desc: "Transposer les deux derniers caractères" },
          { keys: ["Alt", "T"], desc: "Transposer les deux derniers mots" },
          { keys: ["Ctrl", "Y"], desc: "Coller (yank) depuis le kill-ring" },
          { keys: ["Alt", "U"], desc: "Convertir le mot en MAJUSCULES" },
          { keys: ["Alt", "L"], desc: "Convertir le mot en minuscules" },
          { keys: ["Alt", "C"], desc: "Capitaliser le mot (première lettre en majuscule)" },
        ]
      },
      {
        name: "Historique & Recherche",
        icon: "\uD83D\uDD58",
        shortcuts: [
          { keys: ["\u2191/\u2193"], desc: "Naviguer dans l'historique des commandes" },
          { keys: ["Ctrl", "R"], desc: "Recherche incrémentale inversée dans l'historique" },
          { keys: ["Ctrl", "G"], desc: "Annuler la recherche et revenir à la ligne courante" },
          { keys: ["Ctrl", "P/N"], desc: "Commande précédente / suivante" },
          { keys: ["Alt", "."], desc: "Insérer le dernier argument de la commande précédente" },
          { keys: ["!!"], desc: "Répéter la dernière commande entière" },
          { keys: ["!n"], desc: "Répéter la commande numéro n dans l'historique" },
          { keys: ["!string"], desc: "Répéter la dernière commande commençant par 'string'" },
          { keys: ["^old^new"], desc: "Remplacer 'old' par 'new' dans la dernière commande" },
          { keys: ["!$"], desc: "Dernier argument de la commande précédente" },
          { keys: ["!*"], desc: "Tous les arguments de la commande précédente" },
        ]
      },
      {
        name: "Processus & Signaux",
        icon: "\u26A1",
        shortcuts: [
          { keys: ["Ctrl", "C"], desc: "Interrompre le processus en cours (SIGINT)" },
          { keys: ["Ctrl", "Z"], desc: "Suspendre le processus en arrière-plan (SIGTSTP)" },
          { keys: ["Ctrl", "\\"], desc: "Quitter le processus (SIGQUIT)" },
          { keys: ["Ctrl", "D"], desc: "Fin de fichier (EOF) / Quitter le shell" },
          { keys: ["Ctrl", "L"], desc: "Effacer l'écran (équivalent à 'clear')" },
          { keys: ["Ctrl", "S"], desc: "Suspendre le défilement (XOFF)" },
          { keys: ["Ctrl", "Q"], desc: "Reprendre le défilement (XON)" },
          { keys: ["bg"], desc: "Envoyer le processus suspendu en arrière-plan" },
          { keys: ["fg"], desc: "Ramener le processus en arrière-plan au premier plan" },
          { keys: ["jobs"], desc: "Lister les processus en arrière-plan de la session" },
        ]
      },
      {
        name: "tmux \u2014 Multiplexeur",
        icon: "\uD83D\uDDC2\uFE0F",
        shortcuts: [
          { keys: ["Ctrl", "B", "c"], desc: "Créer une nouvelle fenêtre tmux" },
          { keys: ["Ctrl", "B", "n/p"], desc: "Fenêtre suivante / précédente" },
          { keys: ["Ctrl", "B", "0-9"], desc: "Aller directement à la fenêtre numérotée" },
          { keys: ["Ctrl", "B", "%"], desc: "Diviser le panneau verticalement" },
          { keys: ["Ctrl", "B", "\""], desc: "Diviser le panneau horizontalement" },
          { keys: ["Ctrl", "B", "\u2191/\u2193/\u2190/\u2192"], desc: "Naviguer entre les panneaux" },
          { keys: ["Ctrl", "B", "z"], desc: "Zoom sur le panneau actif (toggle)" },
          { keys: ["Ctrl", "B", "d"], desc: "Détacher la session tmux courante" },
          { keys: ["Ctrl", "B", "["], desc: "Entrer en mode copie (scroll avec les flèches)" },
          { keys: ["Ctrl", "B", "]"], desc: "Coller depuis le tampon tmux" },
          { keys: ["Ctrl", "B", "?"], desc: "Afficher l'aide et la liste des raccourcis tmux" },
          { keys: ["Ctrl", "B", "x"], desc: "Fermer le panneau actif" },
          { keys: ["Ctrl", "B", "&"], desc: "Fermer la fenêtre active (confirmation)" },
          { keys: ["Ctrl", "B", "s"], desc: "Lister et choisir parmi les sessions tmux" },
          { keys: ["Ctrl", "B", "$"], desc: "Renommer la session tmux courante" },
          { keys: ["Ctrl", "B", "t"], desc: "Afficher l'horloge dans le panneau" },
          { keys: ["Ctrl", "B", "q"], desc: "Afficher les numéros des panneaux" },
          { keys: ["Ctrl", "B", ":"], desc: "Entrer une commande tmux en mode ligne" },
        ]
      },
      {
        name: "Émulateur de terminal GNOME",
        icon: "\uD83D\uDDA5\uFE0F",
        shortcuts: [
          { keys: ["Ctrl", "\u21E7", "T"], desc: "Nouvel onglet" },
          { keys: ["Ctrl", "\u21E7", "N"], desc: "Nouvelle fenêtre de terminal" },
          { keys: ["Ctrl", "\u21E7", "W"], desc: "Fermer l'onglet" },
          { keys: ["Ctrl", "\u21E7", "Q"], desc: "Fermer la fenêtre" },
          { keys: ["Ctrl", "\u21E7", "C"], desc: "Copier la sélection" },
          { keys: ["Ctrl", "\u21E7", "V"], desc: "Coller depuis le presse-papiers" },
          { keys: ["Ctrl", "\u21E7", "F"], desc: "Rechercher dans le terminal" },
          { keys: ["Ctrl", "\u21E7", "+/-"], desc: "Augmenter / diminuer la taille de la police" },
          { keys: ["Ctrl", "Alt", "0"], desc: "Réinitialiser la taille de la police" },
          { keys: ["Alt", "1-9"], desc: "Naviguer vers l'onglet n\u00B0" },
          { keys: ["Ctrl", "PageUp/Down"], desc: "Onglet précédent / suivant" },
        ]
      }
    ]
  }
};

// ——— COUNT SHORTCUTS PER OS ———
function countShortcuts(osData) {
  return osData.categories.reduce((sum, cat) => sum + cat.shortcuts.length, 0);
}

// ——— RENDER TABS ———
const tabsList = document.getElementById('tabsList');
const tabPanels = document.getElementById('tabPanels');

Object.entries(shortcutsData).forEach(([osKey, osData], idx) => {
  // Tab button
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.className = 'tab-btn' + (idx === 0 ? ' active' : '');
  btn.dataset.os = osKey;
  btn.innerHTML = `<span class="tab-emoji">${osData.icon}</span>${osData.label}<span class="tab-count">${countShortcuts(osData)}</span>`;
  btn.style.setProperty('--os-accent', osData.accent);
  li.appendChild(btn);
  tabsList.appendChild(li);

  // Panel
  const panel = document.createElement('div');
  panel.className = 'os-panel' + (idx === 0 ? ' active' : '');
  panel.id = 'panel-' + osKey;
  panel.dataset.os = osKey;
  panel.innerHTML = renderPanel(osData);
  tabPanels.appendChild(panel);
});

function renderPanel(osData) {
  return `<div class="category-grid">
    ${osData.categories.map(cat => renderCategory(cat, osData.accent)).join('')}
  </div>`;
}

function renderCategory(cat, accent) {
  return `<div class="category-card">
    <div class="category-header">
      <span class="cat-icon">${cat.icon}</span>
      <span class="cat-name">${cat.name}</span>
      <span class="cat-badge">${cat.shortcuts.length} raccourcis</span>
    </div>
    <div class="shortcut-list">
      ${cat.shortcuts.map(s => renderShortcut(s, accent)).join('')}
    </div>
  </div>`;
}

function renderShortcut(s, accent) {
  const keysHtml = s.keys.map((k, i) => {
    const isLast = i === s.keys.length - 1;
    return `<kbd class="key">${k}</kbd>${!isLast ? '<span class="key-sep">+</span>' : ''}`;
  }).join('');

  return `<div class="shortcut-item" data-keys="${s.keys.join(' ').toLowerCase()}" data-desc="${s.desc.toLowerCase()}">
    <div class="keys-group">${keysHtml}</div>
    <div class="shortcut-desc">${s.desc}</div>
  </div>`;
}

// ——— TAB SWITCHING ———
tabsList.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;

  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.os-panel').forEach(p => p.classList.remove('active'));

  btn.classList.add('active');
  document.getElementById('panel-' + btn.dataset.os).classList.add('active');
});

// ——— SEARCH ———
const searchInput = document.getElementById('search');
const searchCount = document.getElementById('searchCount');
const searchBanner = document.getElementById('searchBanner');
const searchBannerText = document.getElementById('searchBannerText');
const clearSearchBtn = document.getElementById('clearSearch');
const allResults = document.getElementById('allResults');

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlight(text, query) {
  if (!query) return text;
  const re = new RegExp(`(${escapeRegex(query)})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

let searchTimeout;

searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(performSearch, 120);
});

function performSearch() {
  const q = searchInput.value.trim().toLowerCase();

  if (!q) {
    clearSearch();
    return;
  }

  // Show all results container
  document.querySelectorAll('.os-panel').forEach(p => p.style.display = 'none');
  allResults.classList.add('active');
  allResults.innerHTML = '';

  let totalMatches = 0;

  Object.entries(shortcutsData).forEach(([osKey, osData]) => {
    const matchingItems = [];

    osData.categories.forEach(cat => {
      cat.shortcuts.forEach(s => {
        const keysText = s.keys.join(' ').toLowerCase();
        const descText = s.desc.toLowerCase();
        if (keysText.includes(q) || descText.includes(q)) {
          matchingItems.push({ ...s, catName: cat.name, catIcon: cat.icon });
        }
      });
    });

    if (matchingItems.length === 0) return;
    totalMatches += matchingItems.length;

    const section = document.createElement('div');
    section.innerHTML = `
      <div class="os-section-header">
        <div class="os-accent-dot" style="background:${osData.accent}"></div>
        <span class="os-section-title">${osData.icon} ${osData.label}</span>
        <div class="os-section-line"></div>
        <span style="font-size:11px;font-family:var(--font-mono);color:var(--text-3)">${matchingItems.length}</span>
      </div>
      <div class="category-grid">
        ${groupByCategory(matchingItems, osData.accent, q)}
      </div>
    `;
    allResults.appendChild(section);
  });

  if (totalMatches === 0) {
    allResults.innerHTML = `<div class="empty-state visible">
      <div class="empty-icon">\uD83D\uDD0D</div>
      <div class="empty-title">Aucun raccourci trouvé</div>
      <div class="empty-sub">Essayez d'autres mots-clés</div>
    </div>`;
  }

  searchCount.textContent = totalMatches > 0 ? `${totalMatches}` : '';
  searchBannerText.innerHTML = `Recherche : <strong>"${q}"</strong> — ${totalMatches} résultat${totalMatches > 1 ? 's' : ''} trouvé${totalMatches > 1 ? 's' : ''}`;
  searchBanner.classList.add('visible');
}

function groupByCategory(items, accent, q) {
  const groups = {};
  items.forEach(item => {
    const key = item.catIcon + ' ' + item.catName;
    if (!groups[key]) groups[key] = { icon: item.catIcon, name: item.catName, items: [] };
    groups[key].items.push(item);
  });

  return Object.values(groups).map(g => {
    const shortcutsHtml = g.items.map(s => {
      const keysHtml = s.keys.map((k, i) => {
        const isLast = i === s.keys.length - 1;
        return `<kbd class="key">${highlight(k, q)}</kbd>${!isLast ? '<span class="key-sep">+</span>' : ''}`;
      }).join('');

      return `<div class="shortcut-item">
        <div class="keys-group">${keysHtml}</div>
        <div class="shortcut-desc">${highlight(s.desc, q)}</div>
      </div>`;
    }).join('');

    return `<div class="category-card">
      <div class="category-header">
        <span class="cat-icon">${g.icon}</span>
        <span class="cat-name">${g.name}</span>
        <span class="cat-badge">${g.items.length}</span>
      </div>
      <div class="shortcut-list">${shortcutsHtml}</div>
    </div>`;
  }).join('');
}

function clearSearch() {
  searchInput.value = '';
  searchCount.textContent = '';
  searchBanner.classList.remove('visible');
  allResults.classList.remove('active');
  allResults.innerHTML = '';
  document.querySelectorAll('.os-panel').forEach(p => p.style.display = '');
  document.querySelector('.os-panel.active').style.display = '';
}

clearSearchBtn.addEventListener('click', () => {
  clearSearch();
  searchInput.focus();
});

// ——— KEYBOARD SHORTCUT TO FOCUS SEARCH ———
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
  if (e.key === 'Escape' && document.activeElement === searchInput) {
    clearSearch();
    searchInput.blur();
  }
});

// ——— COPY ON CLICK ———
const toast = document.getElementById('toast');
let toastTimer;

document.addEventListener('click', (e) => {
  const item = e.target.closest('.shortcut-item');
  if (!item) return;

  const keys = item.querySelectorAll('.key');
  const text = Array.from(keys).map(k => k.textContent.replace(/<[^>]*>/g, '')).join(' + ');

  navigator.clipboard.writeText(text).catch(() => {});

  clearTimeout(toastTimer);
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
});
