export const About = () => {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-foreground" data-aos="fade-up">À Propos</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative" data-aos="fade-right">
                        <img
                            src="/images/moi.png"
                            alt="GBASSI Jules-Christ"
                            className="rounded-lg shadow-2xl w-full max-w-md mx-auto border border-border bg-secondary"
                            onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Profile'; }}
                        />
                    </div>
                    <div className="space-y-6 text-foreground/90 leading-relaxed" data-aos="fade-left">
                        <p>
                            Basé au Bénin, je suis un développeur passionné par l'innovation numérique.
                            Je conçois des solutions complètes, de l'interface utilisateur au déploiement serveur.
                        </p>
                        <p>
                            Mon approche combine rigueur technique et sensibilité design pour créer des produits qui ne fonctionnent pas seulement bien, mais qui sont aussi agréables à utiliser.
                        </p>
                        <p>
                            Que ce soit pour une application métier complexe ou un site vitrine élégant, je m'engage à fournir un code propre, maintenable et performant.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
