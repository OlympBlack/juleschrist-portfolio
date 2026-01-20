import { projects } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-foreground" data-aos="fade-up">Projets Récents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
