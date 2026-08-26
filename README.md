# DooRecruit 🎯

**L'agence de recrutement spécialisée Odoo**

Plateforme moderne pour recruter et se faire recruter dans l'écosystème Odoo.

## 🚀 Features

### Pour les talents
- ✅ Inscription facile à la talent pool
- ✅ Accès aux offres d'emploi Odoo
- ✅ Blog avec ressources Odoo
- ✅ Notifications des nouvelles offres

### Pour les clients/entreprises
- ✅ Sourcing de talents Odoo qualifiés
- ✅ Pré-sélection technique
- ✅ Accompagnement complet du recrutement
- ✅ Dashboard des candidatures

### Technique
- ✅ React + Vite (ultra-rapide)
- ✅ Tailwind CSS (design moderne)
- ✅ Formspree pour les formulaires (sans backend)
- ✅ Responsive design
- ✅ SEO-optimisé

## 📦 Installation

### Prérequis
- Node.js 16+
- npm ou yarn

### 1. Installer les dépendances
```bash
npm install
```

### 2. Configurer Formspree
1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez 2 formulaires (Talents + Contact)
3. Récupérez les Form IDs
4. Remplacez dans `doorecruit_site.jsx` :
   - `f/xyzazyab` → Votre ID formulaire talents
   - `f/xyzabcde` → Votre ID formulaire contact

**[Voir le guide complet](./FORMSPREE_SETUP.md)**

### 3. Lancer en local
```bash
npm run dev
```

Accédez à `http://localhost:3000`

## 🌐 Déployer

### Option 1 : Vercel (Recommandé) ⭐
```bash
npm install -g vercel
vercel --prod
```

### Option 2 : Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📁 Structure du projet

```
doorecruit/
├── doorecruit_site.jsx       # Composant principal React
├── main.jsx                  # Point d'entrée
├── index.html                # HTML principal
├── index.css                 # Styles globaux
├── vite.config.js            # Config Vite
├── tailwind.config.js        # Config Tailwind
├── postcss.config.js         # Config PostCSS
├── package.json              # Dépendances
├── FORMSPREE_SETUP.md        # Guide Formspree
└── README.md                 # Ce fichier
```

## 🎨 Customisation

### Changer les couleurs
Éditez dans `tailwind.config.js`.

### Ajouter des offres d'emploi
Modifiez le tableau `jobs` dans `doorecruit_site.jsx`.

### Modifier le contenu du blog
Éditez le tableau `articles` dans la fonction `HomePage`.

## 📧 Gestion des formulaires

Les formulaires utilisent **Formspree** sans backend :
1. **Formulaire Talents** → Envoie à hello@doorecruit.com
2. **Formulaire Contact** → Envoie à hello@doorecruit.com

## 🔒 Sécurité

✅ HTTPS automatique (sur Vercel/Netlify)
✅ Pas de données sensibles stockées
✅ Formspree respecte le RGPD
✅ Validations côté client

## 📄 License

MIT © 2026 DooRecruit
