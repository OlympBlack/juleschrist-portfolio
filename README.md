# Portfolio Professionnel - Jules Christ

Bienvenue sur le dépôt de mon portfolio personnel. Ce projet est une vitrine interactive de mes réalisations, compétences et expériences en développement web.

##  À propos du projet

Ce portfolio est conçu pour être à la fois élégant, performant et informatif. Il met en avant mes projets majeurs comme **CertiLearn**, **BMI Factory**, et bien d'autres, en fournissant des détails approfondis sur les technologies utilisées et les fonctionnalités implémentées.

### Fonctionnalités clés :
- **Navigation Fluide** : Utilisation de `react-router-dom` pour une expérience utilisateur sans rechargement.
- **Détails de Projets** : Pages dédiées pour chaque projet avec galeries d'images, statistiques et liens vers les démos/codes.
- **Design Adaptatif** : Interface optimisée pour tous les écrans (Desktop, Tablette, Mobile).
- **Mode Sombre / Clair** : Thème personnalisable pour le confort visuel.
- **Animations** : Interactions fluides grâce à AOS (Animate On Scroll) et Tailwind CSS.
- **Contact** : Formulaire fonctionnel intégré avec EmailJS.

## 🛠 Tech Stack

- **Frontend** : [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool** : [Vite](https://vitejs.dev/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Icons** : [Lucide React](https://lucide.dev/)
- **Animations** : [AOS](https://michalsnik.github.io/aos/)
- **Notifications** : [SweetAlert2](https://sweetalert2.github.io/)

## 📁 Structure du projet

```text
/
├── public/                # Ressources statiques (images des projets)
├── src/
│   ├── components/        # Composants UI (Navbar, Hero, ProjectCard, etc.)
│   │   └── ui/            # Composants de base stylisés
│   ├── data/              # Données statiques (portfolio.ts)
│   ├── pages/             # Pages de l'application (Home, ProjectDetail)
│   ├── layout/            # Structures de mise en page
│   ├── lib/               # Utilitaires et configurations (utils.ts)
│   ├── App.tsx            # Composant racine et routage
│   └── main.tsx           # Point d'entrée de l'application
├── tailwind.config.js     # Configuration de Tailwind CSS
└── package.json           # Dépendances et scripts
```

##  Installation et Démarrage

Suivez ces étapes pour installer le projet localement :

1.  **Cloner le dépôt**
    ```bash
    git clone https://github.com/OlympBlack/juleschrist-portfolio.git
    cd porfolio-actif
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```
    L'application sera accessible sur `http://localhost:5173`.

4.  **Builder pour la production**
    ```bash
    npm run build
    ```

##  Licence

Ce projet est sous licence personnelle. N'hésitez pas à vous en inspirer pour vos propres réalisations !
