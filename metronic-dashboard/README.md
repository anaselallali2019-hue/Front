# Metronic Dashboard - Professional React Admin Template

Une application de tableau de bord admin complète et professionnelle construite avec React, TailwindCSS et Recharts. Inspirée du célèbre template Metronic avec tous les modules essentiels.

## 🚀 Fonctionnalités Principales

### 📊 **Multiples Dashboards**
- **Dashboard Principal** - Vue d'ensemble avec statistiques, graphiques et activités récentes
- **Analytics Dashboard** - Analyses approfondies et métriques
- **E-commerce Dashboard** - Suivi des ventes et produits

### 🛒 **Module E-commerce Complet**
- **Products** - Gestion de catalogue produits (grid/list view, filtres, recherche)
- **Orders** - Suivi des commandes avec statuts
- **Customers** - Gestion clients
- **Reports** - Rapports de ventes et analytics

### 💬 **Applications Intégrées**
- **Chat** - Application de chat en temps réel avec liste de contacts
- **Email** - Client email complet (inbox, compose, labels, search)
- **Calendar** - Calendrier avec gestion d'événements
- **File Manager** - Gestionnaire de fichiers (grid/list view, upload)

### 📁 **Gestion de Projets**
- **Projects** - Cartes de projets avec progrès et statuts
- **Tasks** - Gestion de tâches
- **Invoices** - Facturation et billing
- **Team** - Gestion d'équipe

### 🎨 **Composants Réutilisables**

#### Widgets
- `StatWidget` - Cartes de statistiques avec tendances
- `MiniStatWidget` - Widgets compacts
- `ProgressWidget` - Barres de progression
- `TimelineWidget` - Timelines d'activités

#### Cards
- `ProductCard` - Cartes produits avec images
- `UserCard` - Cartes utilisateurs
- `ProjectCard` - Cartes projets avec progrès

#### Tables
- `DataTable` - Tables avancées avec tri, filtrage, pagination, recherche

## 💻 Technologies

- **React 18** - Framework JavaScript
- **Vite** - Build tool ultra-rapide
- **React Router v6** - Routing
- **Tailwind CSS v3** - Framework CSS utility-first
- **Recharts** - Bibliothèque de graphiques
- **Lucide React** - Icônes modernes
- **date-fns** - Manipulation de dates
- **@hello-pangea/dnd** - Drag & drop

## 📦 Installation

```bash
# Clone le projet
cd metronic-dashboard

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 🏗️ Build pour Production

```bash
# Créer un build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

## 📂 Structure du Projet

```
metronic-dashboard/
├── src/
│   ├── components/           # Composants réutilisables
│   │   ├── widgets/         # Widgets (Stats, Progress, Timeline)
│   │   ├── cards/           # Cards (Product, User, Project)
│   │   ├── tables/          # Tables avancées
│   │   ├── forms/           # Composants de formulaires
│   │   ├── modals/          # Modales
│   │   └── charts/          # Composants de graphiques
│   ├── layouts/             # Layouts (Sidebar, Header, MainLayout)
│   ├── pages/               # Pages de l'application
│   │   ├── dashboards/      # Dashboards variés
│   │   ├── ecommerce/       # Module e-commerce
│   │   └── apps/            # Applications (Chat, Email, etc.)
│   ├── data/                # Données mock
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utilitaires
│   └── context/             # Context API
├── public/                  # Fichiers statiques
└── package.json
```

## 🎯 Pages Disponibles

### Dashboards
- `/` - Dashboard par défaut
- `/dashboards/analytics` - Analytics
- `/dashboards/ecommerce` - E-commerce

### E-commerce
- `/ecommerce/products` - Produits
- `/ecommerce/orders` - Commandes
- `/ecommerce/customers` - Clients
- `/ecommerce/reports` - Rapports

### Applications
- `/apps/chat` - Chat
- `/apps/email` - Email
- `/apps/calendar` - Calendrier
- `/apps/files` - File Manager

### Management
- `/projects` - Projets
- `/tasks` - Tâches
- `/invoices` - Factures
- `/team` - Équipe

## 🎨 Design System

### Couleurs
- **Primary**: Bleu (#3b82f6)
- **Success**: Vert (#10b981)
- **Warning**: Orange (#f59e0b)
- **Danger**: Rouge (#ef4444)
- **Gray**: Échelle de gris complète

### Composants Stylisés
- **Cards** - `.card`, `.card-body`, `.card-header`
- **Buttons** - `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-success`, `.btn-danger`
- **Inputs** - `.input`, `.input-sm`, `.input-lg`
- **Badges** - `.badge`, `.badge-primary`, `.badge-success`, etc.

### Animations
- Transitions fluides
- Hover effects
- Animations de loading
- Smooth scrolling

## ✨ Fonctionnalités Avancées

### DataTable
- ✅ Tri multi-colonnes
- ✅ Recherche en temps réel
- ✅ Pagination intelligente
- ✅ Filtres personnalisables
- ✅ Rendu personnalisé de colonnes
- ✅ Responsive

### Sidebar
- ✅ Sections collapsibles
- ✅ Navigation hiérarchique
- ✅ Icônes modernes
- ✅ Active state highlighting
- ✅ Responsive avec overlay mobile

### Header
- ✅ Recherche globale
- ✅ Notifications avec dropdown
- ✅ Messages
- ✅ Profile menu
- ✅ Dark mode toggle (UI)

## 📱 Responsive Design

Entièrement responsive pour tous les écrans:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1920px+)

## 🔧 Configuration

### Tailwind

Le fichier `tailwind.config.js` est configuré avec:
- Couleurs personnalisées
- Animations personnalisées
- Box shadows
- Extensions de thème

### Vite

Configuration optimale pour:
- Hot Module Replacement (HMR)
- Build rapide
- Code splitting
- Asset optimization

## 📊 Données Mock

Toutes les données sont dans `src/data/mockData.js`:
- Products (8 produits)
- Customers (5 clients)
- Orders (6 commandes)
- Projects (5 projets)
- Invoices (5 factures)
- Team (6 membres)
- Chat contacts
- Emails
- Chart data

## 🎓 Utilisation

### Ajouter une nouvelle page

1. Créer le composant dans `src/pages/`
2. Ajouter la route dans `src/App.jsx`
3. Ajouter le lien dans `src/layouts/Sidebar.jsx`

### Créer un nouveau widget

1. Créer le composant dans `src/components/widgets/`
2. Exporter et utiliser dans vos pages

## 🚀 Performance

- ⚡ Chargement ultra-rapide avec Vite
- 📦 Code splitting automatique
- 🎯 Lazy loading des routes
- ⚙️ Optimisation des images
- 🔄 Caching intelligent

## 🎨 Customisation

### Changer les couleurs

Modifier `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Vos couleurs
      }
    }
  }
}
```

### Modifier le logo

Remplacer dans `src/layouts/Sidebar.jsx`:

```javascript
<div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700...">
  <span>M</span>
</div>
```

## 📈 Statistiques

- **45+ Composants** réutilisables
- **15+ Pages** complètes
- **8 Modules** principaux
- **100+ Icônes** Lucide React
- **5 Types** de graphiques
- **Responsive** à 100%

## 🌟 Highlights

- ✅ Code propre et bien organisé
- ✅ Design moderne et professionnel
- ✅ Performance optimale
- ✅ Entièrement responsive
- ✅ Composants réutilisables
- ✅ Documentation complète
- ✅ Prêt pour la production

## 📝 License

Ce projet est créé à des fins de démonstration.

## 🙏 Crédits

Design inspiré de [Metronic Admin Template](https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469)

---

**Construit avec ❤️ en utilisant React, Tailwind CSS et modern web technologies**
