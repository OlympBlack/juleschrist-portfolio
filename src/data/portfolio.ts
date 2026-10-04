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
        api?: string;
        design?: string;
    };
    portals?: { name: string; url: string }[];
    imageCategories?: { name: string; images: string[] }[];
}

export const projects: Project[] = [
    {
        id: 'lucidelab',
        title: 'Lucide Lab',
        description: 'Plateforme web officielle et tableau de bord (CMS) pour le cabinet d\'expertise Lucide Lab.',
        fullDescription: 'LUCIDE LAB est une plateforme web moderne conçue pour un cabinet d\'expertise en communication, branding et stratégie de croissance. Le projet inclut un site vitrine 100% responsive, développé avec React 18, TypeScript et Vite, présentant les services, réalisations et articles de blog. Le backend est propulsé par une API REST robuste sous Laravel, qui alimente un puissant panneau d\'administration (CMS sur-mesure). Cet espace administrateur permet à l\'équipe du cabinet de gérer dynamiquement leur contenu en temps réel (pôles d\'expertise, projets, partenaires, actualités et messages de contact).',
        tags: ['React', 'TypeScript', 'Laravel', 'CMS', 'API REST'],
        tech: ['React', 'TypeScript', 'Vite', 'Laravel', 'SQLite', 'CSS Vanilla'],
        stats: [
            { value: 'CMS', label: 'Sur-mesure' },
            { value: 'API', label: 'RESTful' },
            { value: '100%', label: 'Découplé' }
        ],
        features: [
            'Site vitrine Full Width moderne et 100% responsive',
            'Panneau d\'administration complet (CMS) pour gérer le contenu du site en temps réel',
            'Architecture découplée Frontend (React) / Backend (Laravel API)',
            'Intégration d\'une horloge numérique en temps réel et système de design avancé'
        ],
        images: [
            '/images/lucidelab/accueil.png',
            '/images/lucidelab/services.png',
            '/images/lucidelab/admin_dashboard.png',
            '/images/lucidelab/admin_content.png'
        ],
        links: {
            code: 'https://github.com/OlympBlack/lucidelabService'
        }
    },
    {
        id: 'plagix',
        title: 'Plagix - Antiplagiat',
        description: 'Plateforme Souveraine de Détection de Plagiat avec IA et moteur OCR académique.',
        fullDescription: 'PLAGIX est une plateforme académique de détection de plagiat de niveau entreprise, développée par LAHALEX. Elle permet de comparer des documents (y compris des PDF scannés via OCR) avec une vaste base documentaire, détecter les paraphrases et le contenu généré par IA (ZeroGPT, Originality.ai), et générer des rapports certifiés. Ce projet démontre une maîtrise avancée de l\'architecture modulaire (Laravel), du traitement NLP multilingue (Python, Jina AI) et de la scalabilité via des files d\'attente asynchrones complexes.',
        tags: ['Laravel', 'Python NLP', 'IA', 'OCR', 'OpenSearch', 'SSO'],
        tech: ['Laravel', 'Python', 'PaddleOCR', 'Jina AI', 'MySQL', 'Redis'],
        stats: [
            { value: 'IA', label: 'Détection' },
            { value: 'OCR', label: 'Analyse PDF' },
            { value: 'NLP', label: 'Multilingue' }
        ],
        features: [
            'Comparaison textuelle (CAMES), n-grams et sémantique',
            'Détection IA multimodale et OCR pour images/PDF scannés',
            'Architecture micro-services asynchrone avec workers',
            'Génération de rapports d\'analyse avancés en PDF'
        ],
        images: [
            '/images/plagix/portailAcceuil.png',
            '/images/plagix/sso.png',
            '/images/plagix/login.png',
            '/images/plagix/nouveau_analyse.png',
            '/images/plagix/analyse_en_cours.png',
            '/images/plagix/detail_analyse.png',
            '/images/plagix/liste_analyses.png',
            '/images/plagix/moteur_de_recherche.png',
            '/images/plagix/espace_admin.png',
            '/images/plagix/portfeuille.png',
            '/images/plagix/profil_user.png',
            '/images/plagix/aide_support.png'
        ],
        links: {
            demo: 'http://plagix.lahalex.com/'
        }
    },
    {
        id: 'lahalex-universel',
        title: 'Lahalex Universel',
        description: 'Vaste écosystème de bibliothèques numériques multisectorielles (Droit, Santé, Économie, STIM, Agro).',
        fullDescription: 'Lahalex Universel est un projet d\'envergure interconnectant 5 plateformes de bibliothèques numériques spécialisées. Conçu pour faciliter l\'accès aux ressources académiques, il démontre une capacité exceptionnelle à concevoir des architectures distribuées supportant une forte charge.\n\nLe réseau universel comprend :\n- Sciences Juridiques (Porte d\'entrée) : https://sciences-juridiques.lahalex.com/\n- Sciences Économiques : https://science-eco.lahalex.com/\n- Sciences de la Santé : https://science-sante.lahalex.com/\n- Sciences Agronomiques : https://science-agro.lahalex.com/\n- STIM (Sciences, Technologies, Ingénierie, Mathématiques) : https://stim.lahalex.com/',
        tags: ['Laravel', 'Écosystème', 'Portail web', 'SaaS', 'SSO'],
        tech: ['Laravel', 'MySQL', 'TailwindCSS', 'Vue.js'],
        stats: [
            { value: '5', label: 'Plateformes' },
            { value: 'Big Data', label: 'Ressources' },
            { value: 'Universel', label: 'Accès' }
        ],
        features: [
            'Portail centralisé pour 5 plateformes sectorielles',
            'Moteur de recherche documentaire ultra-rapide',
            'Gestion centralisée des utilisateurs et des accès',
            'Interface ergonomique axée sur l\'expérience utilisateur (UX)'
        ],
        images: [
            '/images/universel/juridique/library.png',
            '/images/universel/juridique/login.png',
            '/images/universel/juridique/article_juridique.png',
            '/images/universel/juridique/lecutre_article.png',
            '/images/universel/juridique/partage_article.png',
            '/images/universel/juridique/assistance_techique.png',
            '/images/universel/juridique/option.png',
            '/images/universel/eco/library.png',
            '/images/universel/eco/login.png',
            '/images/universel/eco/article_scientifique.png',
            '/images/universel/eco/lecture_article.png',
            '/images/universel/eco/fiche_de_synthese.png',
            '/images/universel/sante/library.png',
            '/images/universel/sante/login.png',
            '/images/universel/sante/dictionnaire.png',
            '/images/universel/sante/explorateur_3D.png',
            '/images/universel/sante/systeme_cardio_vasculaire.png',
            '/images/universel/sante/systeme_musculaire.png',
            '/images/universel/agro/library.png',
            '/images/universel/agro/login.png',
            '/images/universel/agro/donnee_statistique.png',
            '/images/universel/agro/veille.png',
            '/images/universel/agro/lecture_veille.png',
            '/images/universel/agro/fiche_de_methode.png',
            '/images/universel/agro/assistance_technique.png',
            '/images/universel/agro/partager.png',
            '/images/universel/stim/acceuil.png',
            '/images/universel/stim/login.png',
            '/images/universel/stim/mathematique.png',
            '/images/universel/stim/ingenerie.png',
            '/images/universel/stim/rencontre_scientifique.png',
            '/images/universel/stim/lecture_rencontre_scientifique.png',
            '/images/universel/stim/partager.png'
        ],
        imageCategories: [
            {
                name: 'Sciences Juridiques',
                images: [
                    '/images/universel/juridique/library.png',
                    '/images/universel/juridique/login.png',
                    '/images/universel/juridique/article_juridique.png',
                    '/images/universel/juridique/lecutre_article.png',
                    '/images/universel/juridique/partage_article.png',
                    '/images/universel/juridique/assistance_techique.png',
                    '/images/universel/juridique/option.png'
                ]
            },
            {
                name: 'Sciences Économiques',
                images: [
                    '/images/universel/eco/library.png',
                    '/images/universel/eco/login.png',
                    '/images/universel/eco/article_scientifique.png',
                    '/images/universel/eco/lecture_article.png',
                    '/images/universel/eco/fiche_de_synthese.png'
                ]
            },
            {
                name: 'Sciences de la Santé',
                images: [
                    '/images/universel/sante/library.png',
                    '/images/universel/sante/login.png',
                    '/images/universel/sante/dictionnaire.png',
                    '/images/universel/sante/explorateur_3D.png',
                    '/images/universel/sante/systeme_cardio_vasculaire.png',
                    '/images/universel/sante/systeme_musculaire.png'
                ]
            },
            {
                name: 'Sciences Agronomiques',
                images: [
                    '/images/universel/agro/library.png',
                    '/images/universel/agro/login.png',
                    '/images/universel/agro/donnee_statistique.png',
                    '/images/universel/agro/veille.png',
                    '/images/universel/agro/lecture_veille.png',
                    '/images/universel/agro/fiche_de_methode.png',
                    '/images/universel/agro/assistance_technique.png',
                    '/images/universel/agro/partager.png'
                ]
            },
            {
                name: 'STIM',
                images: [
                    '/images/universel/stim/acceuil.png',
                    '/images/universel/stim/login.png',
                    '/images/universel/stim/mathematique.png',
                    '/images/universel/stim/ingenerie.png',
                    '/images/universel/stim/rencontre_scientifique.png',
                    '/images/universel/stim/lecture_rencontre_scientifique.png',
                    '/images/universel/stim/partager.png'
                ]
            }
        ],
        links: {},
        portals: [
            { name: 'Sciences Juridiques', url: 'https://sciences-juridiques.lahalex.com/' },
            { name: 'Sciences Économiques', url: 'https://science-eco.lahalex.com/' },
            { name: 'Sciences de la Santé', url: 'https://science-sante.lahalex.com/' },
            { name: 'Sciences Agronomiques', url: 'https://science-agro.lahalex.com/' },
            { name: 'STIM (Sciences, Tech, Ingénierie, Math)', url: 'https://stim.lahalex.com/' }
        ]
    },
    {
        id: 'controle-parental',
        title: 'SafeKid',
        description: 'Application multiplateforme (web et mobile) de supervision parentale avec géolocalisation et gestion du temps d\'écran.',
        fullDescription: 'SafeKid est une solution complète multiplateforme (disponible sur web et mobile) permettant aux parents de superviser l\'activité numérique de leurs enfants. L\'application intègre la gestion du temps d\'écran, des règles de filtrage de contenu, la géolocalisation, et un système de notifications en temps réel. Elle met en lumière une expertise dans les stacks modernes (Laravel, React 19) et l\'implémentation d\'API REST hautement sécurisées avec intégration Redis pour des performances optimales.',
        tags: ['React 19', 'Laravel', 'Web & Mobile', 'API'],
        tech: ['Laravel', 'React 19', 'TypeScript', 'Redis', 'MySQL 8'],
        stats: [
            { value: 'Multiplateforme', label: 'Web & Mobile' },
            { value: 'Laravel', label: 'API Backend' },
            { value: 'Temps réel', label: 'Supervision' }
        ],
        features: [
            'Application disponible sur web et mobile',
            'Gestion fine du temps d\'écran et règles de filtrage',
            'Suivi de géolocalisation et alertes en temps réel',
            'Authentification JWT sécurisée via Laravel Sanctum',
            'Architecture optimisée avec Redis pour cache et files d\'attente'
        ],
        images: [
            '/images/controleParental/couverture.png',
            '/images/controleParental/Acceuil.png',
            '/images/controleParental/dashbord_parent.png',
            '/images/controleParental/liste_enfants.png',
            '/images/controleParental/liste_appareils.png',
            '/images/controleParental/details_appareil.png',
            '/images/controleParental/localisation.png',
            '/images/controleParental/voir_position_de_lenfant.png',
            '/images/controleParental/voir_le_temp_que_enfant_a_passer_devant_ecran.png',
            '/images/controleParental/rapport_dusage.png',
            '/images/controleParental/reglage_temps_pour_un_enfant.png',
            '/images/controleParental/ajout_regle_ou_site_a_bloquer_pour_lenfant.png',
            '/images/controleParental/exemple_site_a_bloquer.png',
            '/images/controleParental/liste_famille.png',
            '/images/controleParental/ajout_membre_famille.png',
            '/images/controleParental/ajout_enfant.png',
            '/images/controleParental/ajout_appareil.png',
            '/images/controleParental/creer_compte_gratuit.png',
            '/images/controleParental/fonctionnalite.png',
            '/images/controleParental/services.png',
            '/images/controleParental/footer.png'
        ],
        links: {
            code: 'https://github.com/OlympBlack/controle_parentale.git'
        }
    },
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

        }
    },
    {
        id: 'certilearn',
        title: 'CertiLearn',
        description: 'Plateforme de formation en ligne avec gestion des cours, évaluations et certification.',

        fullDescription: 'CertiLearn est une plateforme e-learning moderne permettant aux formateurs de créer et structurer des formations en ligne avec modules, leçons et quiz. Les apprenants peuvent parcourir les formations disponibles, s’inscrire, suivre les contenus pédagogiques et passer des évaluations. Une fois la formation terminée et l’examen réussi, un certificat est généré automatiquement. La plateforme inclut également un tableau de bord d’administration permettant de gérer les utilisateurs, valider les formations et superviser l’activité globale.',

        tags: ['Laravel API', 'Nuxt.js', 'Sanctum', 'MySQL', 'E-learning'],

        tech: [
            'Laravel',
            'Laravel Sanctum',
            'Nuxt.js',
            'Vue.js',
            'TailwindCSS',
            'MySQL',
            'REST API'
        ],

        stats: [
            { value: '3', label: 'Rôles utilisateurs (Admin, Formateur, Apprenant)' },
            { value: 'REST', label: 'Architecture API sécurisée' },
            { value: 'Certificat', label: 'Génération après réussite' },
        ],

        features: [
            'Authentification sécurisée avec tokens (Laravel Sanctum)',
            'Inscription et gestion des comptes apprenants',
            'Création et gestion de formations par les formateurs',
            'Organisation pédagogique avec modules et leçons',
            'Système de quiz et évaluations',
            'Inscription des apprenants aux formations',
            'Suivi de progression et résultats',
            'Génération automatique de certificats',
            'Validation et publication des formations par l’administrateur',
            'Gestion des catégories de formations'
        ],

        images: [
            '/images/certilearn/hero.png',
            '/images/certilearn/admin_dashboard.png',
            '/images/certilearn/admin_formation.png',
            '/images/certilearn/apprenant_dashboard.png',
            '/images/certilearn/ctp.png',
            '/images/certilearn/dark_mode.png',
            '/images/certilearn/gestion_formations.png',
            '/images/certilearn/gestion_users.png',
            '/images/certilearn/login.png',
            '/images/certilearn/manage_site.png',
            '/images/certilearn/pourquoi_choisir_nous.png',
            '/images/certilearn/register.png'
        ],

        links: {
            code: 'https://github.com/OlympBlack/certiLearn-plateform.git'
        }
    },
    {
        id: 'bmifactory',
        title: 'BMI Factory',
        description: 'Surveillance industrielle en temps réel avec prédiction des pannes.',
        fullDescription: 'BMI Factory est une plateforme de monitoring industriel permettant de suivre l’état des machines, d’analyser les performances en temps réel et d’anticiper les pannes grâce à des indicateurs précis et des visualisations interactives.',
        tags: ['FastAPI', 'React', 'Tailwind', 'Monitoring', '3D'],
        tech: ['FastAPI', 'React', 'TailwindCSS', 'Framer Motion', 'ApexCharts', 'Three.js'],
        stats: [
            { value: '3', label: 'Indicateurs clés surveillés' },
            { value: 'Temps réel', label: 'Monitoring' },
            { value: 'Prédictif', label: 'Historique & projections' },
        ],
        features: [
            'Tableau de bord central avec alertes critiques',
            'Analyse thermique et vibratoire des machines',
            'Journal des alertes avec filtrage par sévérité',
            'Recherche prédictive pour visualiser l’état futur des machines',
            'Visualisation 3D interactive des équipements'
        ],
        images: [
            '/images/bmi/dashboard.png',
            '/images/bmi/analytique.png',
            '/images/bmi/3D.png',
            '/images/bmi/alertes.png',
            '/images/bmi/dark_dashboard.png',
            '/images/bmi/dark_equipement.png',
            '/images/bmi/equipements.png',
            '/images/bmi/future.png',
            '/images/bmi/historique.png',
            '/images/bmi/login.png'
        ],
        links: {
            demo: 'https://youtu.be/RbYW9oiL-IA',
            code: 'https://github.com/IFRI-Hackaton-L3-2025-2026/im-hack2026-groupe_6.git',
            // api: 'https://im-hack2026-groupe-6-1.onrender.com/docs'
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
            { value: 'Cloud', label: 'Storage   ' },
        ],
        features: [
            'Backend Python partagé',
            'Communication temps réel (SSE)',
            'Stockage Supabase Storage',
            'Gestion des erreurs et retries'
        ],
        images: ['/images/scraper/interface.png'],
        links: {
            code: 'https://github.com/OlympBlack/Web-Scraper'
        }
    },
    {
        id: 'food-express',
        title: 'FoodExpress',
        description: 'Application mobile de commande de repas avec gestion admin complète.',
        fullDescription: 'Une application mobile Flutter permettant aux clients de commander des repas et aux administrateurs de gérer les utilisateurs, les commandes et le menu. Intègre une authentification sécurisée et un backend Laravel robuste.',
        tags: ['Flutter', 'Laravel', 'Mobile', 'API'],
        tech: ['Flutter', 'Laravel', 'REST API', 'PDF Generation'],
        stats: [
            { value: 'Secure', label: 'Auth' },
            { value: 'Admin', label: 'Dashboard' },
            { value: 'Auto', label: 'PDF Reçu' },
        ],
        features: [
            'Rôles multiples (Client, Admin)',
            'Catalogue interactif avec filtres',
            'Panier et processus de commande complet',
            'Génération de reçus PDF',
            'Dashboard administrateur web',
            'Gestion CRUD utilisateurs et menu'
        ],
        images: ['/images/foodexpress/foodexpress.jpeg'],
        links: {
            code: 'https://github.com/IFRI-DevMobile/FoodExpress_Groupe_6.git',
            api: 'https://github.com/OlympBlack/FoodExpress-api-apk.git'
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
            demo: 'http://cheazimo.com/'
        }
    },
    {
        id: 'electrojardin',
        title: 'ElectroJardin',
        description: "E-commerce complet avec gestion de stock et paiements.",
        fullDescription: "Une plateforme e-commerce complète dédiée à la vente d'équipements de jardinage électroniques avec tunnel de vente sécurisé.",
        tags: ['Laravel', 'Stripe', 'Bootstrap', 'MySQL'],
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
        }
    },

    {
        id: 'SpaceBio_AI',
        title: 'SpaceBio AI Intelligence Platform',
        description: 'Plateforme de recherche scientifique assistée par IA pour la biologie spatiale.',
        fullDescription: 'SpaceBio AI est une plateforme de recherche intelligente développée dans le cadre du NASA Space Apps Challenge 2025. Elle permet d’explorer, analyser et générer des publications scientifiques en biologie spatiale à partir de plus de 570 articles issus de la base NASA PMC. La plateforme intègre un moteur de recherche avancé, un assistant conversationnel basé sur l’IA et un générateur d’articles scientifiques.',
        tags: ['Django', 'SQLite', 'Alpine.js', 'NASA'],
        tech: [
            'Django 5',
            'SQLite',
            'TailwindCSS',
            'Alpine.js',
            'HTMX',
            'OpenRouter',
            'Groq'
        ],
        stats: [
            { value: '572+', label: 'Articles indexés' },
            { value: 'AI', label: 'Recherche & Chat' },
            { value: 'NASA', label: 'Données scientifiques' }
        ],
        features: [
            'Recherche avancée multi-champs (titres, résumés, auteurs)',
            'Filtrage intelligent par année de publication',
            'Assistant IA conversationnel pour la recherche scientifique',
            'Génération automatique d’articles scientifiques (Review, Research, Protocol)',
            'Tableau de bord analytique pour le suivi des recherches et générations IA',
            'Interface rapide et responsive orientée recherche'
        ],
        images: [
            '/images/biology/hero.png',
        ],
        links: {
            code: 'https://github.com/Yug-Su/biology_space.git'
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
            demo: 'http://delcomultiservices.com/'
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
            design: 'https://www.figma.com/proto/f98DfEgdCLP0VQmHCNr046/Module-8?page-id=0%3A1&node-id=161-254&p=f&viewport=4063%2C1828%2C0.03&t=hs3KHSV3GUTf3CXQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2'
        }
    },

    {
        id: 'SallesManager',
        title: 'SallesManager',
        description: 'Application de gestion des salles et des cours.',
        fullDescription: 'SallesManager est une application web de gestion des salles de cours. Elle permet à l’administrateur de créer des salles, d’ajouter des professeurs et des cours, puis d’attribuer chaque cours à une salle et à un professeur responsable. La plateforme offre également un espace dédié aux professeurs pour consulter les cours qu’ils dirigent ainsi que les salles associées, et un espace étudiant pour voir les cours ou modules à suivre, les salles correspondantes et l’emploi du temps.',
        tags: ['Django', 'Python', 'SQLite', 'bootstrap'],
        tech: ['Django', 'Python', 'SQLite', 'bootstrap'],
        stats: [
            { value: '3', label: 'Rôles utilisateurs' },
            { value: '100%', label: 'Application Web' },
            { value: 'CRUD', label: 'Gestion complète' },
        ],
        features: [
            'Espace administrateur pour la gestion des salles, cours et professeurs',
            'Attribution des salles et des professeurs aux cours',
            'Espace professeur pour consulter ses cours et salles assignées',
            'Espace étudiant pour voir les cours, salles et emploi du temps',
            'Interface simple et intuitive'
        ],
        images: [
            '/images/sallesManager/admin.jpg',
        ],
        links: {
            code: 'https://github.com/OlympBlack/SallesManager.git'
        }
    },

];

export const skills = {
    frontend: ['React', 'Vue.js', 'Nuxt.js', 'TailwindCSS', 'Bootstrap', 'TypeScript', 'HTML5/CSS3'],
    backend: ['Laravel', 'PHP', 'Python', 'Django', 'FastAPI', 'NLP / OCR (IA)'],
    api: ['REST API', 'FastAPI', 'Microservices', 'JSON', 'Postman', 'OAuth2 / Sanctum'],
    db: ['MySQL', 'Redis', 'OpenSearch', 'PostgreSQL', 'Supabase', 'Firebase'],
    tools: ['Git', 'Docker', 'Figma', 'Vercel', 'Render', 'Linux', 'Message Queues']
};

export const toolsList = [
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'SupaBase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
    { name: 'CapCut', icon: 'data:image/png;base64,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' }
];
