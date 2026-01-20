import { skills, toolsList } from '../data/portfolio';

export const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-foreground" data-aos="fade-up">Compétences</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-colors" data-aos="zoom-in" data-aos-delay="0">
                        <h4 className="text-lg font-semibold mb-3 text-foreground">Frontend</h4>
                        <p className="text-muted-foreground text-sm">{skills.frontend.join(', ')}</p>
                    </div>
                    <div className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-colors" data-aos="zoom-in" data-aos-delay="100">
                        <h4 className="text-lg font-semibold mb-3 text-foreground">Backend</h4>
                        <p className="text-muted-foreground text-sm">{skills.backend.join(', ')}</p>
                    </div>
                    <div className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-colors" data-aos="zoom-in" data-aos-delay="200">
                        <h4 className="text-lg font-semibold mb-3 text-foreground">Base de données</h4>
                        <p className="text-muted-foreground text-sm">{skills.db.join(', ')}</p>
                    </div>
                    <div className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-colors" data-aos="zoom-in" data-aos-delay="300">
                        <h4 className="text-lg font-semibold mb-3 text-foreground">Outils & DevOps</h4>
                        <p className="text-muted-foreground text-sm">{skills.tools.join(', ')}</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-border" data-aos="fade-up" data-aos-delay="200">
                    {toolsList.map((tool) => (
                        <div key={tool.name} className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-lg min-w-[100px] hover:border-primary transition-colors hover:shadow-lg">
                            <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
                            <span className="text-xs font-medium text-foreground">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
