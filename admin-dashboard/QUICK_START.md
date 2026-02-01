# Guide de Démarrage Rapide 🚀

## Installation

```bash
# 1. Naviguer vers le dossier du projet
cd admin-dashboard

# 2. Installer les dépendances
npm install
```

## Développement

```bash
# Lancer le serveur de développement
npm run dev

# L'application sera disponible sur:
# http://localhost:5173
```

## Build Production

```bash
# Créer un build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Structure du Projet

```
admin-dashboard/
├── src/
│   ├── components/       # Composants réutilisables
│   ├── layouts/         # Composants de mise en page
│   ├── pages/           # Pages de l'application
│   ├── App.jsx          # Composant principal
│   └── main.jsx         # Point d'entrée
├── public/              # Fichiers statiques
└── package.json         # Dépendances
```

## Pages Disponibles

1. **Dashboard** (`/`) - Page d'accueil avec statistiques
2. **Users** (`/users`) - Gestion des utilisateurs
3. **Tables** (`/tables`) - Tables de données
4. **Forms** (`/forms`) - Formulaires
5. **Charts** (`/charts`) - Graphiques
6. **Profile** (`/profile`) - Profil utilisateur
7. **Settings** (`/settings`) - Paramètres
8. **Login** (`/login`) - Connexion
9. **Register** (`/register`) - Inscription

## Fonctionnalités Principales

### 🎨 Design
- Interface moderne et professionnelle
- Entièrement responsive (mobile, tablette, desktop)
- Sidebar collapsible
- Thème inspiré de Metronic

### 📊 Dashboard
- 4 cartes de statistiques
- 3 types de graphiques (Area, Pie, Bar)
- Table des commandes récentes

### 👥 Gestion des Utilisateurs
- Table de données avancée
- Recherche et filtrage
- Tri sur toutes les colonnes
- Pagination

### 📈 Graphiques
- Line Chart (tendances)
- Bar Chart (comparaisons)
- Pie Chart (distributions)
- Area Chart (croissance)
- Radar Chart (performances)

### 📝 Formulaires
- Formulaires complets
- Validation des champs
- Upload de fichiers
- Checkboxes et toggles

### ⚙️ Paramètres
- Notifications (email, push, SMS)
- Sécurité (2FA)
- Confidentialité
- Préférences (langue, fuseau horaire, thème)

### 🔐 Authentification
- Page de connexion moderne
- Page d'inscription
- Authentification sociale (Google, Facebook)
- Validation des formulaires

## Technologies Utilisées

- **React 18** - Framework JavaScript
- **Vite** - Outil de build rapide
- **React Router** - Gestion des routes
- **Tailwind CSS** - Framework CSS
- **Recharts** - Bibliothèque de graphiques
- **Lucide React** - Icônes modernes

## Commandes Utiles

```bash
# Installer une nouvelle dépendance
npm install package-name

# Linter
npm run lint

# Format
npm run format

# Clean install
rm -rf node_modules package-lock.json && npm install
```

## Personnalisation

### Changer les couleurs
Modifier `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Vos couleurs personnalisées
      },
    },
  },
}
```

### Ajouter une nouvelle page

1. Créer le composant dans `src/pages/`
2. Ajouter la route dans `src/App.jsx`
3. Ajouter le lien dans `src/layouts/Sidebar.jsx`

## Support

Pour plus d'informations, consultez:
- [README.md](./README.md) - Documentation complète
- [FEATURES.md](./FEATURES.md) - Liste des fonctionnalités

## Astuces

- Utilisez `Ctrl + /` pour ouvrir la recherche
- Le sidebar est collapsible pour plus d'espace
- Tous les tableaux sont triables et filtrables
- Les formulaires ont une validation intégrée

---

Bon développement! 🎉
