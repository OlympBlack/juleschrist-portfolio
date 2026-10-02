import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolio';

const formatImageTitle = (url: string) => {
    const filename = url.split('/').pop() || '';
    const nameMap: Record<string, string> = {
        'portailAcceuil.png': 'Portail d\'Accueil',
        'sso.png': 'Authentification Unique (SSO)',
        'login.png': 'Page de Connexion',
        'nouveau_analyse.png': 'Nouvelle Analyse',
        'analyse_en_cours.png': 'Analyse en Cours',
        'detail_analyse.png': 'Détails de l\'Analyse',
        'liste_analyses.png': 'Historique des Analyses',
        'moteur_de_recherche.png': 'Moteur de Recherche Documentaire',
        'espace_admin.png': 'Espace Administrateur',
        'portfeuille.png': 'Gestion du Portefeuille',
        'profil_user.png': 'Profil Utilisateur',
        'aide_support.png': 'Aide & Support',
    };
    if (nameMap[filename]) return nameMap[filename];
    
    // Fallback for older projects
    const cleanName = filename.split('.')[0].replace(/[-_]/g, ' ');
    return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
};

export const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);
    const [activeImage, setActiveImage] = useState<string | null>(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!project || !activeImage) return;
        const currentIndex = project.images.indexOf(activeImage);
        const nextIndex = (currentIndex + 1) % project.images.length;
        setActiveImage(project.images[nextIndex]);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!project || !activeImage) return;
        const currentIndex = project.images.indexOf(activeImage);
        const prevIndex = (currentIndex - 1 + project.images.length) % project.images.length;
        setActiveImage(project.images[prevIndex]);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (project && project.images.length > 0) {
            setActiveImage(project.images[0]);
        }
    }, [id, project]);

    if (!project) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Projet non trouvé</h2>
                <Link to="/" className="text-primary hover:underline">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-8">
            <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <i className="fas fa-arrow-left"></i> Retour
            </button>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div data-aos="fade-right" className="space-y-6">
                    {/* Image principale */}
                    <div 
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-secondary group aspect-video cursor-zoom-in"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <img 
                            src={activeImage || project.images[0]} 
                            alt={activeImage ? formatImageTitle(activeImage) : project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                            <i className="fas fa-expand text-white text-4xl drop-shadow-lg mb-3 transform scale-50 group-hover:scale-100 transition-transform duration-500"></i>
                            <span className="text-white font-medium tracking-wide drop-shadow-md bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                {activeImage ? formatImageTitle(activeImage) : 'Agrandir l\'image'}
                            </span>
                        </div>
                    </div>
                    
                    {/* Vignettes */}
                    {project.imageCategories ? (
                        <div className="space-y-6">
                            {project.imageCategories.map((category, catIdx) => (
                                <div key={catIdx} className="space-y-3">
                                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{category.name}</h4>
                                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
                                        {category.images.map((img, idx) => (
                                            <button 
                                                key={idx} 
                                                onClick={() => setActiveImage(img)}
                                                className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 aspect-video ${activeImage === img ? 'border-primary ring-2 ring-primary/30 scale-105 shadow-lg z-10' : 'border-transparent hover:border-primary/50 opacity-60 hover:opacity-100'}`}
                                            >
                                                <img 
                                                    src={img} 
                                                    alt={`${category.name} - vue ${idx + 1}`} 
                                                    className="w-full h-full object-cover" 
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : project.images.length > 1 && (
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
                            {project.images.map((img, idx) => (
                                <button 
                                    key={idx} 
                                    onClick={() => setActiveImage(img)}
                                    className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 aspect-video ${activeImage === img ? 'border-primary ring-2 ring-primary/30 scale-105 shadow-lg z-10' : 'border-transparent hover:border-primary/50 opacity-60 hover:opacity-100'}`}
                                >
                                    <img 
                                        src={img} 
                                        alt={`${project.title} - vue ${idx + 1}`} 
                                        className="w-full h-full object-cover" 
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div data-aos="fade-left">
                    <h1 className="text-4xl font-bold mb-4 text-foreground">{project.title}</h1>
                    <p className="text-primary text-lg mb-6 font-medium">{project.description}</p>

                    <div className="bg-card border border-border rounded-xl p-6 mb-8">
                        <h3 className="font-semibold mb-4 text-foreground">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span key={tech} className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {project.portals && project.portals.length > 0 && (
                        <div className="bg-card border border-border rounded-xl p-6 mb-8">
                            <h3 className="font-semibold mb-4 text-foreground">Portails de l'écosystème</h3>
                            <div className="grid gap-3">
                                {project.portals.map((portal) => (
                                    <a key={portal.name} href={portal.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-3 bg-secondary/50 p-3 rounded-lg border border-border/50 hover:bg-secondary">
                                        <i className="fas fa-external-link-alt text-sm"></i>
                                        <span className="font-medium">{portal.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex gap-4 mb-8">
                        {project.links.demo && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-center hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                                <i className={`fas ${project.links.demo.includes('youtube.com') || project.links.demo.includes('youtu.be') ? 'fa-play-circle' : 'fa-external-link-alt'} mr-2`}></i>
                                {project.links.demo.includes('youtube.com') || project.links.demo.includes('youtu.be') ? 'Démo Vidéo' : 'Voir le site'}
                            </a>
                        )}
                        {project.links.code && (
                            <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="flex-1 bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold text-center hover:bg-secondary/80 transition-colors border border-border">
                                <i className="fab fa-github mr-2"></i> Code Source
                            </a>
                        )}
                        {project.links.api && (
                            <a href={project.links.api} target="_blank" rel="noopener noreferrer" className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-orange-700 transition-colors shadow-lg">
                                <i className="fas fa-server mr-2"></i> API / Backend
                            </a>
                        )}
                        {project.links.design && (
                            <a href={project.links.design} target="_blank" rel="noopener noreferrer" className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-purple-700 transition-colors shadow-lg">
                                <i className="fab fa-figma mr-2"></i> Maquette
                            </a>
                        )}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {project.stats.map((stat, idx) => (
                            <div key={idx} className="text-center p-4 bg-card rounded-lg border border-border">
                                <div className="font-bold text-xl text-primary mb-1">{stat.value}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="prose dark:prose-invert max-w-none text-foreground">
                        <h3 className="text-xl font-bold mb-3 text-foreground">À propos du projet</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            {project.fullDescription}
                        </p>

                        <h3 className="text-xl font-bold mb-3 text-foreground">Fonctionnalités clés</h3>
                        <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-muted-foreground">
                                    <i className="fas fa-check text-green-500 mt-1 mr-3 shrink-0"></i>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Lightbox / Modal pleine écran */}
            {isLightboxOpen && activeImage && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-300" 
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button 
                        className="absolute top-6 right-6 sm:top-8 sm:right-8 text-foreground/50 hover:text-foreground transition-colors bg-secondary/50 hover:bg-secondary p-3 rounded-full z-[110]"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <i className="fas fa-times text-2xl"></i>
                    </button>
                    
                    {project.images.length > 1 && (
                        <>
                            <button 
                                className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors bg-secondary/50 hover:bg-secondary p-4 rounded-full z-[110]"
                                onClick={handlePrev}
                            >
                                <i className="fas fa-chevron-left text-3xl"></i>
                            </button>
                            <button 
                                className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors bg-secondary/50 hover:bg-secondary p-4 rounded-full z-[110]"
                                onClick={handleNext}
                            >
                                <i className="fas fa-chevron-right text-3xl"></i>
                            </button>
                        </>
                    )}

                    <div 
                        className="relative max-w-[95vw] sm:max-w-7xl max-h-[90vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-300" 
                        onClick={e => e.stopPropagation()}
                    >
                        <img 
                            src={activeImage} 
                            alt={formatImageTitle(activeImage)} 
                            className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl ring-1 ring-border" 
                        />
                        <div className="mt-8 text-center bg-card/80 backdrop-blur-md px-8 py-4 rounded-2xl border border-border shadow-lg">
                            <h3 className="text-2xl sm:text-3xl font-bold text-primary tracking-wide">{formatImageTitle(activeImage)}</h3>
                            <p className="text-muted-foreground mt-2 text-sm font-medium tracking-widest uppercase">{project.title}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
