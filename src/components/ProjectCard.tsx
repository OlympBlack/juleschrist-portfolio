import { Link } from 'react-router-dom';
import { type Project } from '../data/portfolio';

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Link
            to={`/project/${project.id}`}
            className="group block bg-card border border-border rounded-lg overflow-hidden hover:translate-y-[-4px] hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
        >
            <div className="h-[200px] overflow-hidden border-b border-border bg-secondary relative">
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold mb-2 text-foreground">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full font-medium border border-border">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:underline mt-auto">
                    Voir le projet <i className="fas fa-arrow-right text-xs"></i>
                </div>
            </div>
        </Link>
    );
};
