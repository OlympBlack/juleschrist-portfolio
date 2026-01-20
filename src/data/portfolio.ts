export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    tech: string[];
    stats: { label: string; value: string }[];
    features: string[];
    images: string[];
    links: {
        demo?: string;
        code?: string;
        design?: string;
    };
}

export const projects: Project[] = [
    {
        id: 'karicv',
        title: 'KariCV',
        description: 'Générateur de CV professionnel avec export PDF optimisé.',
        fullDescription: 'Un générateur de CV moderne et intuitif conçu pour le marché africain francophone, permettant aux utilisateurs de créer, personnaliser et exporter des CV optimisés ATS en quelques minutes.',
        tags: ['React', 'Tailwind', 'PDF'],
        tech: ['React', 'TailwindCSS', 'PDF Generation'],
        stats: [
            { value: '6+', label: 'Modèles de CV' },
            { value: '100%', label: 'Client-Side' },
            { value: 'Fast', label: 'Export PDF' },
        ],
        features: [
            'Éditeur en temps réel avec prévisualisation',
            'Système de modèles interchangeables',
            'Export PDF pixel-perfect compatible A4',
            'Fonctionnement local (Privacy first)',
            'Mode sombre et thèmes personnalisables'
        ],
        images: ['/images/karicv/Capture d\'écran 2026-01-20 171049.png', '/images/karicv/Capture d\'écran 2026-01-20 170450.png'],
        links: {
            demo: 'https://karicv.vercel.app/',
            code: '#'
        }
    },
    {
        id: 'web-scraper',
        title: 'Web Scraper',
        description: 'Extraction automatisée de données avec suivi temps réel.',
        fullDescription: 'Une application web puissante combinant un backend Python pour le scraping et une interface Nuxt.js réactive. Suivi de progression via Server-Sent Events.',
        tags: ['Nuxt', 'Python', 'Supabase'],
        tech: ['Nuxt 3', 'Python', 'Supabase', 'SSE'],
        stats: [
            { value: 'Real-time', label: 'Suivi SSE' },
            { value: 'Auto', label: 'Scraping' },
            { value: 'Cloud', label: 'Storage' },
        ],
        features: [
            'Backend Python partagé',
            'Communication temps réel (SSE)',
            'Stockage Supabase Storage',
            'Gestion des erreurs et retries'
        ],
        images: ['/images/scraper/interface.png'],
        links: {
            code: '#'
        }
    },
    {
        id: 'cheazimo',
        title: 'Cheazimo',
        description: 'Plateforme immobilière innovante pour le marché béninois.',
        fullDescription: 'La solution immobilière de nouvelle génération pour le Bénin. Connecte propriétaires, agents et chercheurs de biens.',
        tags: ['React', 'Laravel', 'PWA'],
        tech: ['React', 'Laravel', 'TailwindCSS', 'PWA'],
        stats: [
            { value: 'Fluid', label: 'UX' },
            { value: 'API', label: 'Laravel' },
            { value: 'Mobile', label: 'PWA' },
        ],
        features: [
            'Moteur de recherche multicritères',
            'Système de favoris',
            'Carte interactive',
            'Notifications push'
        ],
        images: ['/images/cheazimo/hero_imo.png'],
        links: {
            code: '#'
        }
    },
    {
        id: 'electrojardin',
        title: 'ElectroJardin',
        description: "E-commerce complet avec gestion de stock et paiements.",
        fullDescription: "Une plateforme e-commerce complète dédiée à la vente d'équipements de jardinage électroniques avec tunnel de vente sécurisé.",
        tags: ['Laravel', 'Stripe'],
        tech: ['Laravel', 'Stripe', 'Bootstrap', 'MySQL'],
        stats: [
            { value: 'Secure', label: 'Paiement' },
            { value: 'Admin', label: 'Dashboard' },
            { value: 'Stock', label: 'Gestion' }
        ],
        features: [
            'Catalogue produits filtrable',
            'Paiement Stripe',
            'Dashboard Admin',
            'Factures PDF auto'
        ],
        images: ['/images/electrojardin/Capture d\'écran 2025-09-17 190416.png'],
        links: {
            demo: 'https://electrojardin.com/',
            code: '#'
        }
    },
    {
        id: 'dms',
        title: 'DMS Plateforme',
        description: 'Gestion multiservices et relations clients centralisée.',
        fullDescription: 'Une Progressive Web App (PWA) développée pour Delco Multi Services, centralisant la gestion de services et la relation client.',
        tags: ['PWA', 'Web'],
        tech: ['PWA', 'Javascript', 'HTML/CSS'],
        stats: [
            { value: 'Central', label: 'Services' },
            { value: 'PWA', label: 'Installable' },
            { value: 'Fast', label: 'Perf' }
        ],
        features: [
            'Présentation centralisée',
            'Prise de contact / Devis',
            'Expérience App Native',
            'Offline partial support'
        ],
        images: ['/images/dms/Capture d\'écran 2025-09-18 150438.png', '/images/dms/Capture d\'écran 2025-09-18 150533.png'],
        links: {
            code: '#'
        }
    },
    {
        id: 'artisan-circuit',
        title: 'Artisan Circuit',
        description: "Maquette UI/UX pour une marketplace d'artisans.",
        fullDescription: "Conception complète de l'interface utilisateur (UI) et UX pour une marketplace dédiée aux artisans locaux.",
        tags: ['Figma', 'UI Design'],
        tech: ['Figma', 'Prototyping', 'Design System'],
        stats: [
            { value: 'Design', label: 'System' },
            { value: 'UX', label: 'Parcours' },
            { value: 'Mobile', label: 'Responsive' }
        ],
        features: [
            'Charte graphique moderne',
            'Parcours d\'achat intuitif',
            'Design System complet',
            'Prototypage interactif'
        ],
        images: ['/images/figma-maketplace/Capture d\'écran 2025-09-19 144642.png', '/images/figma-maketplace/Capture d\'écran 2025-09-19 144102.png'],
        links: {
            design: '#'
        }
    }
];

export const skills = {
    frontend: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'HTML5/CSS3'],
    backend: ['Laravel', 'PHP', 'Node.js', 'Express', 'Python'],
    db: ['MySQL', 'PostgreSQL', 'Supabase', 'Firebase'],
    tools: ['Git', 'Docker', 'Figma', 'Vercel', 'Linux']
};

export const toolsList = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'SupaBase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
    { name: 'CapCut', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/CapCut-logo.png' },
];
